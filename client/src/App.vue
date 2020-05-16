<template>
  <v-app>
    <v-container fluid class="fill-height app-background pa-0">
      <!--     <Navbar v-on:select-game="selectGame" v-if="$vuetify.breakpoint.lg" /> -->
      <v-content class="fill-height">
        <!--<Game :typegame="typegame" />-->
        <router-view></router-view>
      </v-content>
          <MobileNavbar/>
    </v-container>
  </v-app>
</template>

<script>
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

export default {
  name: "App",

  components: {
    Game,
    Navbar,
    MobileNavbar
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
  background-color: #1B1B2E;
}
</style>