<template>
  <v-card width="550">
    <RandomGameConfig v-if=" gametypeconfig == 'random'" v-on:start-game="startGame" />
    <CustomGameConfig v-if="gametypeconfig == 'custom'" />
  </v-card>
</template>

<script>
import RandomGameConfig from "./RandomGameConfig";
import CustomGameConfig from "./CustomGameConfig";

export default {
  components: {
    RandomGameConfig,
    CustomGameConfig
  },
  data: () => ({
    isCustomGame: true
  }),
  props: {
    gametypeconfig: { type: String }
  },
  methods: {
    startGame(param) {
      this.$emit("start-game", param);
    },
    showCustomGame() {
      this.isCustomGame = true;
    },
    showRandomGame() {
      this.isCustomGame = false;
    },
  }
};
</script>

<style>
</style>