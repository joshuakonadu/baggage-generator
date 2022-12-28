import { defineStore } from "pinia";
import { baggagelist } from "../services";

export const useBaggageStore = defineStore("baggagelist", {
  state: () => {
    return {
      result: {},
    };
  },
  actions: {
    generateBaggageList(data) {
      return baggagelist.generateBaggageList({ data }).then((data) => {
        console.log(data);
        return;
      });
    },
  },
});
