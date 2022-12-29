<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="hero-section">
      <RouterLink class="no-underline" to="/generator">
        <v-btn color="indigo"> Erstelle deine Gepäckliste </v-btn>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  max-height: 500px;
  background-color: #e91e63;
}
.no-underline {
  text-decoration: none;
}
</style>
