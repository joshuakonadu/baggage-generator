<script setup>
import {
  howLongPageCards,
  howLongPageItems,
} from "/src/generator_content_data/generator_cards.js";

const cards = howLongPageCards();
const days = howLongPageItems();
</script>

<template>
  <div>
    <h1>Was hast du geplant?</h1>
    <div class="d-flex">
      <div>Ich verreise</div>
      <div class="max-width">
        <v-select
          :items="days"
          label="Wähle Tage aus"
          variant="solo"
          density="compact"
        ></v-select>
      </div>
      <div>und</div>
    </div>
    <v-row>
      <v-card
        v-for="card in cards"
        :key="card"
        class="mr-4 mb-4"
        stacked
        :prepend-icon="card.icon"
        :text="card.text"
        width="150"
      ></v-card>
    </v-row>
  </div>
</template>

<style scoped>
.max-width {
  width: 180px;
}
</style>
