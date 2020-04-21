<!--
<template>
    <v-row class="fill-height pa-0 ma-0" justify="center" align="center" no-gutters>
      <v-col>
        <v-navigation-drawer>
          <v-list-item-content>RANDOM </v-list-item-content>
        </v-navigation-drawer>
      </v-col>
      <v-col>
        <PreGame v-on:start-game="startGame" v-show="showPreGame" />
        <KanaCard v-if="!showPreGame && !isEndGame" :config="config" v-on:end-game="endGame" />
        <EndGame v-if="isEndGame" :examResult="examResult" />
      </v-col>
    </v-row>
</template> -->

<template>
  <v-row justify="center" align="center">
    <PreGame v-on:start-game="startGame" v-show="showPreGame" />
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
  props: {},
  components: {
    KanaCard,
    PreGame,
    EndGame
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