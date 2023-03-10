function getChooseWheaterCards() {
  return [
    { icon: "fas fa-cloud-rain", text: "regnerisch", id: 55 },
    { icon: "fas fa-sun", text: "sonnig", id: 56 },
  ];
}

function getChooseWheaterTemperatureCards() {
  return [
    {
      icon: "far fa-snowflake",
      text: "eiskalt",
      class: "#2F7785",
      id: 50,
    },
    {
      icon: "fas fa-thermometer-empty",
      text: "kalt",
      class: "#0275d8",
      id: 51,
    },
    {
      icon: "fas fa-thermometer-quarter",
      text: "kühl",
      class: "#45aaf2",
      id: 52,
    },
    {
      icon: "fas fa-thermometer-three-quarters",
      text: "warm",
      class: "#f0ad4e",
      id: 53,
    },
    { icon: "fas fa-thermometer-full", text: "heiß", class: "#d9534f", id: 54 },
  ];
}

export { getChooseWheaterCards, getChooseWheaterTemperatureCards };
