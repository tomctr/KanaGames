<template>
  <v-card width="250" height="350">
    <v-card-title no-gutters>
      <v-row justify="center">
        <v-slide-x-transition mode="out-in">
          <v-card :key="key" width="200" height="200">
            <v-row justify="center" align="center" class="fill-height" no-gutters>
              <div class="display-4">{{currentKana}}</div>
            </v-row>
          </v-card>
        </v-slide-x-transition>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-text-field v-on:keyup.enter="submit" v-model="answer" class="centered-input"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
import Configuration from "../assets/configGame.js";
import {
  characters,
  diacritic,
  diagraph,
  mapCarac
} from "../assets/characters.js";
import caracTypes from "../assets/enum";

//ADD QUIZZ PROGRESS 5/10 QUESTION 50% WITH V-PROGRESS-LINEAR
export default {
  name: "KanaCard",
  data: () => ({
    answer: "",
    sequence: null,
    currentKana: "",
    idxKana: null,
    key: 0
  }),
  props: {
    config: { type: Configuration }
  },
  methods: {
    submit() {
      if (characters[this.idxKana].romaji === this.answer) {
        this.nextKana();
      } else {
        console.log("error");
      }
      this.answer = "";
    },
    nextKana() {
      if (this.sequence.length > 0) {
        this.idxKana = this.sequence.shift();
        this.setCurrentKana();
        console.log("reponse : " + characters[this.idxKana].romaji);
        this.key++;
      } else {
        this.$emit("end-game");
      }
    },
    setCurrentKana() {
      if (this.config.hiragana && this.config.katakana) {
        var s = getRandomInt(1);
        if (s === 0) {
          this.currentKana = characters[this.idxKana].hiragana;
        } else {
          this.currentKana = characters[this.idxKana].katakana;
        }
      } else if (this.config.hiragana && !this.config.katakana) {
        this.currentKana = characters[this.idxKana].hiragana;
      } else {
        this.currentKana = characters[this.idxKana].katakana;
      }
    },
    generateQuizz() {
      let totalCarac = 0;
      for (var [key, value] of this.config.caracMap) {
        if (value) {
          totalCarac += mapCarac.get(key)().length;
        }
      }

      for (var [key, value] of this.config.caracMap) {
        if (value) {
          var caracList = mapCarac.get(key)();
          var ratio = caracList.length / totalCarac;
          var charRatioTotal = Math.floor(ratio * this.config.examSize);
          this.GetNRandCharacters(charRatioTotal, caracList);
        }
      }
    },
    GetNRandCharacters(n, x) {
      //get n rand char from x characlist
      console.log(n + x);
    }
  },
  mounted() {
    this.generateQuizz();
    this.sequence = randomSequence(this.config.examSize);
    this.nextKana();
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function randomSequence(length) {
  var arr = [];
  while (arr.length < length) {
    var r = getRandomInt(characters.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>