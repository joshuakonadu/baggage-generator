<script setup>
import { ref, computed, onUnmounted } from "vue";
import ForWhom from "./ForWhom.vue";
import HowLong from "./HowLong.vue";
import HowToTravel from "./HowToTravel.vue";
import TypeOfVacation from "./TypeOfVacation.vue";
import ChooseWheater from "./ChooseWheater.vue";
import ChooseSportVue from "./ChooseSport.vue";
import PersonalNeeds from "./PersonalNeeds.vue";
import LoadingScreen from "./LoadingScreen.vue";
import GeneratorNavButtons from "./GeneratorNavButtons.vue";
import { useGeneratorStore } from "/src/stores/generator.js";

const generatorStore = useGeneratorStore();

const page = ref(1);
const generatorSteps = {
  1: ForWhom,
  2: HowLong,
  3: HowToTravel,
  4: TypeOfVacation,
  5: ChooseWheater,
  6: ChooseSportVue,
  7: PersonalNeeds,
  8: LoadingScreen,
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
  min-height: 60vh;
  margin: 0 auto 1em auto;
}
.button-section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
