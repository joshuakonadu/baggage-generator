<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import {
  getPersonalNeedsGeneralCards,
  getPersonalNeedsTechnologyCards,
  getPersonalNeedsMedicineCards,
} from "/src/generatorHelpers/personalNeedsHelper.js";

const emit = defineEmits(["setDisabledButton"]);
emit("setDisabledButton", false);

const generalCards = getPersonalNeedsGeneralCards();
const medicineCards = getPersonalNeedsMedicineCards();
const technologyCards = getPersonalNeedsTechnologyCards();

const generatorStore = useGeneratorStore();

const setOrUnsetCard = function (cardId, prop) {
  generatorStore.setOrUnsetPersonalNeedsCards(cardId, prop);
};
</script>

<template>
  <div class="generator-positioning">
    <h1 class="mb-10">Was möchtest du noch mitnehmen?</h1>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center"
        ><span>Du kannst mehrere Optionen wählen (optional):</span></v-col
      >
      <v-col v-for="card in generalCards" :key="card" xl="3" class="mb-4">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.personalNeeds.general.includes(
              card.id
            ),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'general')"
        ></v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center"><span>Technik:</span></v-col>
      <v-col v-for="card in technologyCards" :key="card" xl="3" class="mb-4">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.personalNeeds.technology.includes(
              card.id
            ),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'technology')"
        ></v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center"><span>Medizin:</span></v-col>
      <v-col v-for="card in medicineCards" :key="card" md="3" class="mb-4">
        <v-card
          class="card"
          :class="{
            'card-box-shadow': generatorStore.personalNeeds.medicine.includes(
              card.id
            ),
          }"
          :prepend-icon="card.icon"
          :text="card.text"
          @click="setOrUnsetCard(card.id, 'medicine')"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>
