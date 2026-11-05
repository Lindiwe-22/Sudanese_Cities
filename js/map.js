window.MapView = (() => {
  let map;
  let boundaryLayer;
  let cityLayer;
  let statesByCode = new Map();
  let selectedStateId = null;
  let onStateSelect = () => {};

  function boundaryStyle(feature) {
    const state = statesByCode.get(feature.properties.adm1_pcode);
    const selected = state && state.id === selectedStateId;

    return {
      color: selected ? "#173f35" : "#65766d",
      weight: selected ? 3 : 1.3,
      opacity: 1,
      fillColor: selected ? "#7da895" : "#b8cbbf",
      fillOpacity: selected ? 0.65 : 0.35
    };
  }

  function createMap(geojson, cities, states, stateSelectCallback) {
    onStateSelect = stateSelectCallback;
    statesByCode = new Map(
      states.map(state => [state.boundaryCode, state])
    );

    map = L.map("map", {
      minZoom: window.APP_CONFIG.map.minimumZoom,
      maxZoom: window.APP_CONFIG.map.maximumZoom
    }).setView(
      window.APP_CONFIG.map.initialCenter,
      window.APP_CONFIG.map.initialZoom
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    boundaryLayer = L.geoJSON(geojson, {
      style: boundaryStyle,
      onEachFeature: (feature, layer) => {
        const state = statesByCode.get(feature.properties.adm1_pcode);

        if (!state) return;

        layer.bindPopup(
          `<strong>${state.nameEn}</strong><br>${state.nameAr}`
        );

        layer.on("click", () => onStateSelect(state.id));
      }
    }).addTo(map);

    cityLayer = L.layerGroup().addTo(map);

    cities.forEach(city => {
      const state = states.find(
        item => item.id === Number(city.state_id)
      );

      const marker = L.circleMarker(
        [Number(city.latitude), Number(city.longitude)],
        {
          radius: 5,
          color: "#ffffff",
          weight: 1.5,
          fillColor: "#c16d42",
          fillOpacity: 0.95
        }
      );

      marker.bindPopup(
        `<strong>${city.name_en}</strong>` +
        `<br>${city.name_ar}` +
        `<br><small>${state ? state.nameEn : "Unknown state"}</small>`
      );

      marker.addTo(cityLayer);
    });

    fitAll();
  }

  function fitAll() {
    if (boundaryLayer && boundaryLayer.getBounds().isValid()) {
      map.fitBounds(boundaryLayer.getBounds(), { padding: [20, 20] });
    }
  }

  function selectState(stateId) {
    selectedStateId = stateId === null ? null : Number(stateId);

    boundaryLayer.setStyle(boundaryStyle);

    cityLayer.eachLayer(marker => {
      const city = marker.getPopup().getContent();
      const cityRecord = window.currentCityRecords.find(
        item => city.includes(item.name_en)
      );

      const visible = selectedStateId === null ||
        (cityRecord && Number(cityRecord.state_id) === selectedStateId);

      if (visible) {
        if (!cityLayer.hasLayer(marker)) cityLayer.addLayer(marker);
      } else {
        cityLayer.removeLayer(marker);
      }
    });

    if (selectedStateId !== null) {
      const state = [...statesByCode.values()].find(
        item => item.id === selectedStateId
      );

      if (state) {
        const bounds = L.geoJSON(state.feature).getBounds();
        map.fitBounds(bounds, { padding: [35, 35], maxZoom: 8 });
      }
    } else {
      fitAll();
    }
  }

  return {
    init: createMap,
    selectState,
    fitAll
  };
})();
