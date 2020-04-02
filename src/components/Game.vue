<template>
  <v-container class="pa-0 ma-0">
    <PreGame v-on:start-game="startGame" v-show="showPreGame" />
    <KanaCard v-if="!showPreGame && !isEndGame" :size="examSize" v-on:end-game="endGame"/>
    <EndGame v-show="isEndGame"/>
  </v-container>
</template>

<script>
import KanaCard from "./KanaCard";
import PreGame from "./PreGame";
import EndGame from "./EndGame";

export default {
  name: "Game",
  props: {},
  components: {
    KanaCard,
    PreGame,
    EndGame
  },

  data: () => ({
    showPreGame: true,
    isEndGame: false,
    examSize: null
  }),
  methods: {
    startGame(param) {
      this.showPreGame = false;
      this.examSize = param;
    },
    endGame() {
        this.isEndGame = true;
    }
  }
};
</script>