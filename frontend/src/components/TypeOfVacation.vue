<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import { getTypeOfVacationCards } from "/src/generatorHelpers/typeOfVacationHelper.js";

const emit = defineEmits(["setDisabledButton"]);

const cards = getTypeOfVacationCards();
const generatorStore = useGeneratorStore();

if (generatorStore.vacationType) {
  emit("setDisabledButton", false);
} else {
  emit("setDisabledButton", true);
}

const setOrUnsetCard = function (cardId) {
  generatorStore.setOnlyOneCard(cardId, "vacationType").then((bool) => {
    emit("setDisabledButton", bool);
  });
};
</script>

<template>
  <div class="generator-positioning">
    <h1 class="mb-10">Wie bist du unterwegs?</h1>
    <v-row class="justify-center">
      <v-col v-for="card in cards" :key="card" class="mb-4" md="4" xl="3">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.vacationType === card.id,
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id)"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>
