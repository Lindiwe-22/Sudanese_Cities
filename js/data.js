window.AppData = (() => {
  async function fetchJson(path) {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Could not load ${path}: HTTP ${response.status}`);
    }

    return response.json();
  }

  async function load() {
    const config = window.APP_CONFIG;

    const [geojson, cities, statesEnglish, statesArabic] =
      await Promise.all([
        fetchJson(config.dataFiles.boundaries),
        fetchJson(config.dataFiles.cities),
        fetchJson(config.dataFiles.statesEnglish),
        fetchJson(config.dataFiles.statesArabic)
      ]);

    if (!Array.isArray(cities) ||
        !Array.isArray(statesEnglish) ||
        !Array.isArray(statesArabic) ||
        !Array.isArray(geojson.features)) {
      throw new Error("One or more datasets have an unexpected structure.");
    }

    const englishById = new Map(
      statesEnglish.map(state => [Number(state.id), state])
    );

    const arabicById = new Map(
      statesArabic.map(state => [Number(state.id), state])
    );

    const boundaryByCode = new Map(
      geojson.features.map(feature => [
        feature.properties.adm1_pcode,
        feature
      ])
    );

    const states = Object.entries(config.stateBoundaryCodes).map(
      ([id, boundaryCode]) => {
        const stateId = Number(id);
        const english = englishById.get(stateId);
        const arabic = arabicById.get(stateId);
        const feature = boundaryByCode.get(boundaryCode);

        if (!english || !arabic || !feature) {
          throw new Error(
            `Could not connect state ${stateId} to its boundary or names.`
          );
        }

        return {
          id: stateId,
          boundaryCode,
          nameEn: english.name,
          nameAr: arabic.name,
          feature
        };
      }
    );

    if (states.length !== 18 || cities.length !== 33) {
      throw new Error(
        `Unexpected dataset counts: ${states.length} states, ${cities.length} cities.`
      );
    }

    const stateIds = new Set(states.map(state => state.id));

    for (const city of cities) {
      if (!stateIds.has(Number(city.state_id))) {
        throw new Error(
          `City "${city.name_en}" references unknown state ${city.state_id}.`
        );
      }

      if (!Number.isFinite(Number(city.latitude)) ||
          !Number.isFinite(Number(city.longitude))) {
        throw new Error(`Invalid coordinates for city "${city.name_en}".`);
      }
    }

    return { geojson, cities, states };
  }

  return { load };
})();
