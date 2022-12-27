<script setup>
import { ref, computed } from "vue";
import ForWhom from "./ForWhom.vue";
import GeneratorNavButtons from "./GeneratorNavButtons.vue";

const page = ref(1);
const generatorSteps = {
  1: ForWhom,
};

const disableButton = ref(true);

const setDisabledButton = function (bool) {
  disableButton.value = bool;
};

const currentStep = computed(() => {
  return generatorSteps[page.value];
});

const saveSelectionInStore = {};
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
