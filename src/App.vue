<template>
  <v-app>
    <v-container class="pa-0 ma-0">
      <v-content>
        <Game />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Game from "./components/Game";

export default {
  name: "App",

  components: {
    Game
  },

  data: () => ({
    //
  })
};
</script>
