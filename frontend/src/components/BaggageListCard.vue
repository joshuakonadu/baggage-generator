<script setup>
import { getBaggageListCategoryies } from "/src/baggageListHelpers/categoryMap.js";
const props = defineProps({
  data: Object,
  category: Number,
});

const categoryMap = getBaggageListCategoryies();
</script>

<template>
  <v-col md="4" lg="3">
    <v-card class="pa-5 h-100">
      <h3>{{ categoryMap[props.category] }}</h3>
      <div v-for="item in data" :key="item.value">
        <div v-if="!item.subcategories">
          {{ item.name }}
        </div>
        <div v-else-if="item.subcategories.length">
          <div v-for="(prop, index) in item.subcategories" :key="index">
            <h5 class="mt-8">{{ prop.title }}</h5>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<style></style>
