<!--
<template>
  <v-app>
    <Navbar />
    <div class="app-background fill-height">
      <v-content class="fill-height">
        <v-container class="pa-0 fill-height" no-gutters>
          <Game />
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>
-->
<template>
  <v-app>
    <v-container fluid class="fill-height app-background pa-0">
      <Navbar v-on:select-game="selectGame" />

      <v-content class="fill-height">
        <Game :typegame="typegame" />
      </v-content>
      
    </v-container>
  </v-app>
</template>

<script>
import Game from "./components/Game";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Game,
    Navbar
  },
  methods: {
    selectGame(e) {
      this.typegame = e;
    }
  },

  data: () => ({
    typegame: "custom"
  })
};
</script>

<style scoped>
.app-background {
  background-color: #fcfbf6;
}
</style>