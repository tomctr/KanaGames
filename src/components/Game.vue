
<template>
  <v-container class="pa-0 ma-0 fill-height">
    <v-row class="fill-height pa-0 ma-0" justify="center" align="center" no-gutters>
      <PreGame v-on:start-game="startGame" v-show="showPreGame" />
      <KanaCard v-if="!showPreGame && !isEndGame" :config="config" v-on:end-game="endGame" />
      <EndGame v-if="isEndGame" :examResult="examResult" />
    </v-row>
  </v-container>
</template> 

<!--
<template>
  <KanaArray/>
</template>
-->
<script>
import KanaCard from "./KanaCard";
import PreGame from "./PreGame";
import EndGame from "./EndGame";
import KanaArray from "./KanaArray";

export default {
  name: "Game",
  props: {},
  components: {
    KanaCard,
    PreGame,
    EndGame,
    KanaArray,
  },

  data: () => ({
    showPreGame: true,
    isEndGame: false,
    config: null,
    examResult: null,
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