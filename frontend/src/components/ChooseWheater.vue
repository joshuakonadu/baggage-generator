<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import {
  getChooseWheaterCards,
  getChooseWheaterTemperatureCards,
} from "/src/generatorHelpers/chooseWheaterHelper.js";

const emit = defineEmits(["setDisabledButton"]);
emit("setDisabledButton", false);

const cardsWheater = getChooseWheaterCards();
const cardsTemperature = getChooseWheaterTemperatureCards();
const generatorStore = useGeneratorStore();

const setOrUnsetCard = function (cardId, prop) {
  generatorStore.setOrUnsetMultipleCards(cardId, prop);
};
</script>

<template>
  <div class="generator-positioning">
    <h1 class="mb-10">Welches Wetter erwartest du?</h1>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center"
        ><span>Du kannst mehrere Optionen wählen (optional):</span></v-col
      >
      <v-col v-for="card in cardsTemperature" :key="card" class="mb-4">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.temperatures.includes(card.id),
          }"
          :style="{ 'background-color': card.class }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'temperatures')"
        ></v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col v-for="card in cardsWheater" :key="card" class="mb-4" md="3">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.wheater.includes(card.id),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'wheater')"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>
