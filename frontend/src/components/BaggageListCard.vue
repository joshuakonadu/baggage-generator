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
    <v-card class="pa-3 h-100" variant="tonal">
      <h3>{{ categoryMap[props.category] }}</h3>
      <div v-for="item in data" :key="item.value">
        <div v-if="!item.subcategories">
          <v-checkbox color="indigo" hide-details>
            <template v-slot:label>
              <div>
                <span v-if="item.quantity"> {{ item.quantity }} x </span>
                <span v-if="item.affiliate_link">
                  <a :href="item.affiliate_link" rel="nofollow" target="_blank">
                    {{ item.name }} *
                    <small><u>Passende Produkte vergleichen</u></small>
                  </a>
                </span>
                <span v-else>{{ item.name }}</span>
                <div>
                  <small>{{ item.description }}</small>
                </div>
              </div>
            </template>
          </v-checkbox>
        </div>
        <div v-else-if="item.subcategories.length">
          <div v-for="(prop, index) in item.subcategories" :key="index">
            <h5 class="mt-8">{{ prop.title }}</h5>
            <v-checkbox
              v-for="(subitem, index) in prop.item"
              :key="index"
              color="indigo"
              hide-details
            >
              <template v-slot:label>
                <div>
                  <span v-if="item.affiliate_link">
                    <a
                      :href="item.affiliate_link"
                      rel="nofollow sponsored"
                      target="_blank"
                    >
                      {{ subitem.name }} *
                    </a>
                  </span>
                  <span v-else>
                    {{ subitem.name }}
                  </span>
                  <div>
                    <small>{{ subitem.description }}</small>
                  </div>
                </div>
              </template>
            </v-checkbox>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<style scoped>
a,
span {
  font-size: 12.8px;
}
small {
  display: block;
}
</style>
