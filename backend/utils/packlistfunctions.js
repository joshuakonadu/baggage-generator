const itemlist = require("../baggagelist_result/itemlist");
const Camping = require("../baggagelist_result/camping");

module.exports = {
  getFilteredResult,
};

function getFilteredResult(configureData) {
  console.log("FILTERED DATA");
  let finalData = {};
  const personinfo = [];
  const days = configureData.howLong.time;
  const selectedItem = mergeAllSelected(configureData);

  configureData.persons.forEach((elem, index) => {
    finalData[index] = getItems(elem, selectedItem, days);
    personinfo.push({ age: elem.selectAgeId, gender: elem.selectGender });
  });
  return { finalData, personinfo };
}

function getItems(elem, selectedItems, days) {
  const expandSelection = [
    ...selectedItems,
    elem.selectAgeId,
    elem.selectGender,
  ];
  const allitemlist = [...itemlist];

  const filteredItems = getSelectedItems(expandSelection, allitemlist);

  for (let num in filteredItems) {
    filteredItems[num] = calculateAmount(filteredItems[num], days);
  }
  return filteredItems;
}

function calculateAmount(items, days) {
  return items.map((element) => {
    if (!element.quantity && element.multiplier)
      element.quantity = Math.ceil(days * element.multiplier);
    return element;
  });
}

function getSelectedItems(selectedItems, allItems) {
  const campingId = 46;
  const finalData = {};
  allItems.forEach((elem) => {
    if (!elem.conditions.length) {
      if (!finalData[elem.category]) finalData[elem.category] = [];
      finalData[elem.category].push(elem);
    } else {
      if (checkCondition(elem.conditions, selectedItems)) {
        if (!finalData[elem.category]) finalData[elem.category] = [];
        finalData[elem.category].push(elem);
      }
    }
  });

  if (checkCondition([campingId], selectedItems)) {
    finalData[123789] = [];
    finalData[123789].push(...Camping.getCamping());
  }
  return finalData;
}

function checkCondition(conditions, selected) {
  return conditions.some((element) => {
    if (!Array.isArray(element))
      return selected.some((select) => element == select);
    else {
      return element.every((elem) => {
        return selected.some((select) => elem == select);
      });
    }
  });
}

function mergeAllSelected(configureData) {
  return [
    ...configureData.howLong.planned,
    configureData.howToTravel,
    ...configureData.personalNeeds.general,
    ...configureData.personalNeeds.technology,
    ...configureData.personalNeeds.medicine,
    ...configureData.sports,
    configureData.vacationType,
    ...configureData.wheaterAndTemperature.temperatures,
    ...configureData.wheaterAndTemperature.wheaters,
  ];
}
