<script setup>
import { ref } from "vue";
import { useGeneratorStore } from "/src/stores/generator.js";
import { useRouter } from "vue-router";
const props = defineProps({
  page: Number,
  disableButton: Boolean,
});

const router = useRouter();
const generatorStore = useGeneratorStore();

const emit = defineEmits(["next", "back"]);

const snackbar = ref(false);

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
  pressedNext();
  try {
    await generatorStore.initBaggageListCreation();
    router.push({ path: "/baggage-list" });
  } catch (err) {
    pressedBack();
    snackbar.value = true;
    console.log(err);
  }
};
</script>

<template>
  <div v-if="props.page !== 8" class="d-flex justify-space-between">
    <v-btn v-if="props.page < 2" @click="backToHome"> Abbrechen </v-btn>
    <v-btn v-else @click="pressedBack">Zurück</v-btn>
    <v-btn
      v-if="props.page < 7"
      @click="pressedNext"
      color="indigo"
      :disabled="props.disableButton"
    >
      <span v-if="props.disableButton">Bitte Auswahl treffen</span>
      <span v-else>Weiter</span>
    </v-btn>
    <v-btn v-else color="green" @click="createBaggageList">
      Packliste erstellen
    </v-btn>
    <v-snackbar v-model="snackbar">
      Beim erstellen der Gepäckliste ist ein Fehler aufgetreten.

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Schließen
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
