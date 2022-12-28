import { defineStore } from "pinia";
import { createBaggageList } from "../services";

export const useBaggageStore = defineStore("baggagelist", {
  state: () => {
    return {
      result: {},
      personinfo: [],
      timeStaying: "",
    };
  },
  actions: {
    generateBaggageList(data) {
      return createBaggageList({ data }).then((data) => {
        this.result = data.result.data;
        this.personinfo = data.result.personinfo;
        this.timeStaying = data.result.days;
        return "";
      });
    },
  },
});
