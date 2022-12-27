import { defineStore } from "pinia";

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
    };
  },
  actions: {
    addPerson(newPersonObj) {
      this.persons.push(newPersonObj);
    },
  },
});
