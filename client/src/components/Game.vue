<template>
</template> 

<script>
import KanaCard from "./KanaCard";
import PreGame from "./PreGame";
import EndGame from "./EndGame";

export default {
  name: "Game",
  components: {
    KanaCard,
    PreGame,
    EndGame
  },
  props: {
    typegame: { type: String }
  },

  data: () => ({
    showPreGame: true,
    isEndGame: false,
    config: null,
    examResult: null
  }),
  methods: {
    startGame(param) {
      this.showPreGame = false;
      this.config = param;
    },
    endGame(examResult) {
      this.isEndGame = true;
      this.examResult = examResult;
    }
  }
};
</script>

<style>
</style>