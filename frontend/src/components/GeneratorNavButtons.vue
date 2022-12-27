<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  page: Number,
});
console.log(props);
const router = useRouter();

const emit = defineEmits(["next", "back"]);

const backToHome = function () {
  router.push("/");
};

const pressedNext = function () {
  emit("next");
};

const pressedBack = function () {
  emit("back");
};
</script>

<template>
  <div class="d-flex justify-space-between">
    <v-btn v-if="props.page < 2" @click="backToHome"> Abbrechen </v-btn>
    <v-btn v-else @click="pressedBack">Zurück</v-btn>
    <v-btn v-if="props.page < 7" @click="pressedNext"> Weiter </v-btn>
    <v-btn v-else> Packliste erstellen </v-btn>
  </div>
</template>

<style></style>
