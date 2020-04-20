<template>
  <v-card>
    <v-tabs grow color="#036273">
      <v-tab @click="showCustomGame">CUSTOM</v-tab>
      <v-tab @click="showRandomGame">RANDOM</v-tab>
    </v-tabs>
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