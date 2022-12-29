<script setup>
import { watch } from "vue";
import { useGeneratorStore } from "/src/stores/generator.js";

const generatorStore = useGeneratorStore();

const emit = defineEmits(["setDisabledButton"]);

const addPerson = function () {
  const newPerson = createNewPerson();
  generatorStore.addPerson(newPerson);
};

const createNewPerson = function () {
  return {
    selectGender: "w",
    optionsGender: [
      { text: "Herr", value: "m" },
      { text: "Dame", value: "w" },
    ],
    selectAgeId: 10,
    optionsAge: [
      { text: "<1", value: 10 },
      { text: "1-3", value: 11 },
      { text: "4-12", value: 12 },
      { text: "13-18", value: 13 },
      { text: "18+", value: 14 },
    ],
  };
};

watch(
  generatorStore.persons,
  (newVal) => {
    const checkSetAge = newVal.every(
      (elem) => typeof elem.selectAgeId === "number"
    );
    if (checkSetAge) {
      emit("setDisabledButton", false);
    } else {
      emit("setDisabledButton", true);
    }
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="generator-positioning">
    <h1 class="mb-10">Für wen packst du?</h1>
    <div class="mb-4">Alter:</div>
    <div
      class="mb-10 w-75"
      v-for="person in generatorStore.persons"
      :key="person"
    >
      <v-row>
        <v-col md="4">
          <v-btn-toggle
            v-model="person.selectGender"
            color="indigo"
            rounded="1"
            divided
            variant="outlined"
          >
            <v-btn
              v-for="gender in person.optionsGender"
              :key="gender"
              :value="gender.value"
            >
              {{ gender.text }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col md="8">
          <v-btn-toggle
            v-model="person.selectAgeId"
            color="indigo"
            rounded="1"
            divided
            variant="outlined"
          >
            <v-btn
              v-for="age in person.optionsAge"
              :key="age"
              :value="age.value"
            >
              {{ age.text }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </div>
    <v-btn class="mt-4" color="pink" @click="addPerson">
      Person hinzufügen
    </v-btn>
  </div>
</template>

<style scoped></style>
