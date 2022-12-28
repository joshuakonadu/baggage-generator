import { defineStore } from "pinia";
import { useBaggageStore } from "./baggageList.js";

export const useGeneratorStore = defineStore("generator", {
  state: () => {
    return {
      persons: [
        {
          selectGender: "m",
          optionsGender: [
            { text: "Herr", value: "m" },
            { text: "Dame", value: "w" },
          ],
          selectAgeId: "",
          optionsAge: [
            { text: "<1", value: 10 },
            { text: "1-3", value: 11 },
            { text: "4-12", value: 12 },
            { text: "13-18", value: 13 },
            { text: "18+", value: 14 },
          ],
        },
      ],
      howLong: {
        time: 3,
        planned: [],
      },
      howToTravel: "",
      vacationType: "",
      wheater: [],
      temperatures: [],
      sports: [],
      personalNeeds: {
        general: [],
        technology: [],
        medicine: [],
      },
    };
  },
  actions: {
    addPerson(newPersonObj) {
      this.persons.push(newPersonObj);
    },
    setOrUnsetPlannedCard(id) {
      const findIndex = this.howLong.planned.findIndex((elem) => elem === id);
      findIndex === -1
        ? this.howLong.planned.push(id)
        : this.howLong.planned.splice(findIndex, 1);
    },
    setOnlyOneCard(id, prop) {
      if (this[prop] === id) {
        this[prop] = "";
        return Promise.resolve(true);
      } else {
        this[prop] = id;
        return Promise.resolve(false);
      }
    },
    setOrUnsetMultipleCards(id, prop) {
      const findIndex = this[prop].findIndex((elem) => elem === id);
      findIndex === -1 ? this[prop].push(id) : this[prop].splice(findIndex, 1);
    },

    setOrUnsetPersonalNeedsCards(id, prop) {
      const findIndex = this.personalNeeds[prop].findIndex(
        (elem) => elem === id
      );
      findIndex === -1
        ? this.personalNeeds[prop].push(id)
        : this.personalNeeds[prop].splice(findIndex, 1);
    },
    async initBaggageListCreation() {
      const stateObj = {
        persons: this.persons,
        howLong: this.howLong,
        howToTravel: this.howToTravel,
        vacationType: this.vacationType,
        wheaterAndTemperature: {
          wheaters: this.wheater,
          temperatures: this.temperatures,
        },
        sports: this.sports,
        personalNeeds: this.personalNeeds,
      };
      const baggageStore = useBaggageStore();
      try {
        await baggageStore.generateBaggageList(stateObj);
        return Promise.resolve("");
      } catch (err) {
        return Promise.reject(err);
      }
    },
  },
});
