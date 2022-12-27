<script setup>
import { ref, computed, onUnmounted } from "vue";
import ForWhom from "./ForWhom.vue";
import HowLong from "./HowLong.vue";
import GeneratorNavButtons from "./GeneratorNavButtons.vue";
import { useGeneratorStore } from "/src/stores/generator.js";

const generatorStore = useGeneratorStore();

const page = ref(1);
const generatorSteps = {
  1: ForWhom,
  2: HowLong,
};

const disableButton = ref(true);

const setDisabledButton = function (bool) {
  disableButton.value = bool;
};

const currentStep = computed(() => {
  return generatorSteps[page.value];
});

const increasePage = function () {
  page.value++;
};

const decreasePage = function () {
  page.value--;
};

onUnmounted(() => {
  generatorStore.$reset();
});
//TODO: SAVE ALL SELECTION STEPS IN STORE
</script>

<template>
  <v-container>
    <div class="component-size">
      <component
        :is="currentStep"
        :saveSelectionInStore="saveSelectionInStore"
        @setDisabledButton="setDisabledButton"
      ></component>
    </div>
    <div class="button-section">
      <generator-nav-buttons
        :page="page"
        :disableButton="disableButton"
        @pressedNext="increasePage"
        @pressedBack="decreasePage"
      ></generator-nav-buttons>
    </div>
  </v-container>
</template>

<style scoped>
.component-size {
  width: 100%;
  max-width: 800px;
  height: 60vh;
  max-height: 900px;
  margin: 0 auto;
}
.button-section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
