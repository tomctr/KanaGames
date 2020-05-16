<template>
  <v-row justify="center" align="center" class="fill-height ml-0 mr-0">
    <PreGame v-on:start-game="startGame" v-show="showPreGame" :gametypeconfig="typegame" />
    <KanaCard v-if="!showPreGame && !isEndGame" :config="config" v-on:end-game="endGame" />
    <EndGame v-if="isEndGame" :examResult="examResult" />
  </v-row>
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