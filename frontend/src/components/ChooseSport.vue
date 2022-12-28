<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import { getChooseSportCards } from "/src/generatorHelpers/chooseSportHelper.js";

const emit = defineEmits(["setDisabledButton"]);
emit("setDisabledButton", false);

const cards = getChooseSportCards();
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
      <v-col v-for="card in cards" :key="card" md="4" xl="3" class="mb-4">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.sports.includes(card.id),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'sports')"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>
