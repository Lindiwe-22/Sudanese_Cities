(() => {
  const stateList = document.getElementById("state-list");
  const stateCount = document.getElementById("state-count");
  const cityCount = document.getElementById("city-count");
  const mapTitle = document.getElementById("map-title");
  const mapDescription = document.getElementById("map-description");
  const status = document.getElementById("status");
  const clearButton = document.getElementById("clear-selection");

  let states = [];
  let cities = [];
  let selectedStateId = null;

  function renderStateList() {
    stateList.innerHTML = "";

    states.forEach(state => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "state-button";
      button.dataset.stateId = state.id;
      button.setAttribute(
        "aria-pressed",
        String(selectedStateId === state.id)
      );

      const names = document.createElement("span");
      names.className = "state-names";

      const english = document.createElement("strong");
      english.textContent = state.nameEn;

      const arabic = document.createElement("span");
      arabic.className = "arabic-name";
      arabic.textContent = state.nameAr;
      arabic.dir = "rtl";

      const count = document.createElement("span");
      count.className = "city-total";
      count.textContent = cities.filter(
        city => Number(city.state_id) === state.id
      ).length;

      names.append(english, arabic);
      button.append(names, count);

      button.addEventListener("click", () => selectState(state.id));
      stateList.appendChild(button);
    });
  }

  function selectState(stateId) {
    selectedStateId = stateId === null ? null : Number(stateId);

    const state = states.find(item => item.id === selectedStateId);
    const visibleCities = selectedStateId === null
      ? cities
      : cities.filter(
          city => Number(city.state_id) === selectedStateId
        );

    MapView.selectState(selectedStateId);
    renderStateList();

    if (state) {
      mapTitle.textContent = state.nameEn;
      mapDescription.textContent =
        `${visibleCities.length} cities · ${state.nameAr}`;
    } else {
      mapTitle.textContent = "All states";
      mapDescription.textContent =
        `${states.length} administrative boundaries · ${cities.length} cities`;
    }

    status.textContent = state
      ? `Showing ${visibleCities.length} cities in ${state.nameEn}.`
      : "Showing all states and cities.";
  }

  async function start() {
    try {
      const data = await AppData.load();

      states = data.states;
      cities = data.cities;

      // Map module uses the original city records to filter markers.
      window.currentCityRecords = cities;

      stateCount.textContent = states.length;
      cityCount.textContent = cities.length;

      MapView.init(
        data.geojson,
        cities,
        states,
        selectState
      );

      renderStateList();
      selectState(null);
    } catch (error) {
      console.error("Application startup failed:", error);
      status.textContent = `Could not load the map: ${error.message}`;
      status.classList.add("error");
    }
  }

  clearButton.addEventListener("click", () => selectState(null));

  start();
})();
