<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import {
  getHowLongPageCards,
  getHowLongPageItems,
} from "/src/generator_content_data/generator_howlong_data.js";

const generatorStore = useGeneratorStore();
const cards = getHowLongPageCards();
const days = getHowLongPageItems();

const setOrUnsetCard = function (cardId) {
  generatorStore.setOrUnsetPlannedCard(cardId);
};
</script>

<template>
  <div class="generator-positioning">
    <h1 class="mb-10">Was hast du geplant?</h1>
    <div class="d-flex mb-10">
      <div class="mr-3 mt-2">Ich verreise</div>
      <div class="max-width mr-3">
        <v-select
          v-model="generatorStore.howLong.time"
          :items="days"
          label="Wähle Tage aus"
          variant="solo"
          density="compact"
        ></v-select>
      </div>
      <div class="mt-2">und</div>
    </div>
    <v-row class="justify-center">
      <v-col v-for="card in cards" :key="card" class="mb-4" md="4" xl="3">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.howLong.planned.includes(card.id),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id)"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.max-width {
  width: 180px;
}
</style>
