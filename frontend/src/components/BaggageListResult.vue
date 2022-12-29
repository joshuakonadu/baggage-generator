<script setup>
import BaggageListCard from "./BaggageListCard.vue";
import { useBaggageStore } from "/src/stores/baggageList.js";

const baggageStore = useBaggageStore();

const convertAgeIdToAge = function (ageId) {
  const age = {
    10: "Alter 0",
    11: "Alter 1-3",
    12: "Alter 4-12",
    13: "Alter 13-18",
    14: "Alter 18+",
  };
  return age[ageId];
};

const convertGender = function (genderChar, age) {
  if (age === 14) {
    const gender = {
      m: "Herr",
      w: "Dame",
    };
    return gender[genderChar];
  } else {
    if (age <= 12) {
      return "Kind";
    } else if (age == 13) {
      return "Jugendlich";
    }
  }
};
</script>

<template>
  <div class="baggage-list-centering">
    <h1 class="text-center mt-4">
      Gepäckliste für {{ baggageStore.timeStaying }} Tage
    </h1>
    <div
      class="mt-10"
      v-for="(prop, index) in baggageStore.result"
      :key="index"
    >
      <div class="d-flex mb-3">
        <h2>
          {{
            convertGender(
              baggageStore.personinfo[index].gender,
              baggageStore.personinfo[index].age
            )
          }}
        </h2>
        <span class="ml-4 mt-2">{{
          `(${convertAgeIdToAge(baggageStore.personinfo[index].age)})`
        }}</span>
      </div>
      {{ baggageStore.result.length }}
      <v-row>
        <baggage-list-card
          v-for="(data, index2) in prop"
          :key="index2"
          :data="prop[index2]"
          :category="index2"
        ></baggage-list-card>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.baggage-list-centering {
  width: 90%;
  margin: 0 auto;
}
</style>
