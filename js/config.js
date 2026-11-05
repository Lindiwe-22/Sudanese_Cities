window.APP_CONFIG = {
  // Local state IDs mapped to OCHA administrative boundary codes.
  stateBoundaryCodes: {
    1: "SD14",
    2: "SD01",
    3: "SD16",
    4: "SD10",
    5: "SD17",
    6: "SD02",
    7: "SD11",
    8: "SD12",
    9: "SD08",
    10: "SD09",
    11: "SD13",
    12: "SD07",
    13: "SD04",
    14: "SD05",
    15: "SD03",
    16: "SD06",
    17: "SD18",
    18: "SD15"
  },

  dataFiles: {
    boundaries: "data/sudan-states.geojson",
    cities: "json/sudan-cities.json",
    statesEnglish: "json/state-en.json",
    statesArabic: "json/state-ar.json"
  },

  map: {
    initialCenter: [15.5, 30.0],
    initialZoom: 5,
    minimumZoom: 4,
    maximumZoom: 12
  }
};
