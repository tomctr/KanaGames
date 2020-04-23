<template>
  <v-card width="550">
    <RandomGameConfig v-if="!isCustomGame" v-on:start-game="startGame" />
    <CustomGameConfig v-if="isCustomGame" />
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

  methods: {
    startGame(param) {
      this.$emit("start-game", param);
    },
    showCustomGame() {
      this.isCustomGame = true;
    },
    showRandomGame() {
      this.isCustomGame = false;
    }
  }
};
</script>

<style>
</style>