<script setup>
import { ref, computed } from "vue";
import ForWhom from "./ForWhom.vue";
import GeneratorNavButtons from "./GeneratorNavButtons.vue";

const page = ref(1);
const generatorSteps = {
  1: ForWhom,
};
console.log(page.value);

const currentStep = computed(() => {
  return generatorSteps[page.value];
});

console.log(currentStep.value);
</script>

<template>
  <v-container>
    <div class="component-size">
      <component :is="currentStep"></component>
      <generator-nav-buttons></generator-nav-buttons>
    </div>
  </v-container>
</template>

<style scoped>
.component-size {
  width: 100%;
  max-width: 800px;
  height: 80vh;
  max-height: 900px;
  margin: 0 auto;
}
</style>
