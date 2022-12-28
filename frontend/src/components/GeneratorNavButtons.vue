<script setup>
import { useGeneratorStore } from "/src/stores/generator.js";
import { useRouter } from "vue-router";
const props = defineProps({
  page: Number,
  disableButton: Boolean,
});

const router = useRouter();
const generatorStore = useGeneratorStore();

const emit = defineEmits(["next", "back"]);

const backToHome = function () {
  router.push("/");
};

const pressedNext = function () {
  emit("pressedNext");
};

const pressedBack = function () {
  emit("pressedBack");
};

const createBaggageList = async function () {
  try {
    await generatorStore.initBaggageListCreation();
    router.push("/baggage-list");
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="d-flex justify-space-between">
    <v-btn v-if="props.page < 2" @click="backToHome"> Abbrechen </v-btn>
    <v-btn v-else @click="pressedBack">Zurück</v-btn>
    <v-btn
      v-if="props.page < 7"
      @click="pressedNext"
      :disabled="props.disableButton"
    >
      <span v-if="props.disableButton">Bitte Auswahl treffen</span>
      <span v-else>Weiter</span>
    </v-btn>
    <v-btn v-else @click="createBaggageList"> Packliste erstellen </v-btn>
  </div>
</template>
