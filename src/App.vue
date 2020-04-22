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
    <v-row class="fill-height app-background" no-gutters>
      <v-row>
        <Navbar />
      </v-row>
      <Game />
    </v-row>
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

  data: () => ({
    //
  })
};
</script>

<style scoped>
.app-background {
  background-color: #fcfbf6;
}
</style>