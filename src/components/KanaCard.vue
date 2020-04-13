<template>
  <v-card width="250" height="350">
      <v-card-title no-gutters>
        <v-row justify="center">
          <v-slide-x-transition mode="out-in">
            <v-card width="200" height="200">
              <v-row justify="center" align="center" class="fill-height" no-gutters>
                <div class="display-4">{{currentKana}}</div>
              </v-row>
            </v-card>
          </v-slide-x-transition>
        </v-row>
      </v-card-title>
      <v-card-text class="pb-0 pt-0">
        <v-text-field v-on:keyup.enter="submit" v-model="answer" class="centered-input"></v-text-field>
      </v-card-text>
      <v-btn outlined @click="getAnswer" depressed block v-show="isError">AWNSER</v-btn>
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
    examCharArr: null,
    isError: false,
    totalError: 0,
  }),
  props: {
    config: { type: Configuration }
  },
  methods: {
    submit() {
      if (this.idxKana[1] === this.answer) {
        this.nextKana();
      } else {
        this.isError = true;
        this.totalError++;
        console.log("error");
      }
      this.answer = "";
    },
    nextKana() {
      this.isError = false;
      if (this.examCharArr.length > 0) {
        this.idxKana = this.examCharArr.shift();
        this.currentKana = this.idxKana[0];
        console.log("reponse : " + this.idxKana[1]);
      } else {
        this.$emit("end-game", this.totalError);
      }
    },
    generateQuizz() {
      let totalCarac = 0;
      for (var [key, value] of this.config.caracMap) {
        if (value) {
          totalCarac += mapCarac.get(key)().length;
        }
      }

      for (let [k, v] of this.config.caracMap) {
        if (v == false) this.config.caracMap.delete(k);
      }

      var ctr = 0;
      for (var [key, value] of this.config.caracMap) {
        var caracList = mapCarac.get(key)();
        var ratio = caracList.length / totalCarac;
        var charRatioTotal = Math.floor(ratio * this.config.examSize);
        this.GetNRandCharacters(charRatioTotal, caracList, key);
        ctr++;
        if (ctr == this.config.caracMap.size) {
          if (this.examCharArr.length < this.config.examSize) {
            // on odd result add diff
            var diff = this.config.examSize - this.examCharArr.length;
            this.GetNRandCharacters(diff, caracList, key);
          }
        }
      }
    },
    getAnswer() {
      this.answer = this.idxKana[1];
    },
    GetNRandCharacters(ratio, caracList, caracType) {
      //get n rand char from x characlist
      var type = caracType.includes("Hira") ? 0 : 1;
      var randSeq = randomSequence(ratio, caracList);
      randSeq.forEach(x => {
        if (type == 0) {
          this.examCharArr.push([caracList[x].hiragana, caracList[x].romaji]);
        } else {
          this.examCharArr.push([caracList[x].katakana, caracList[x].romaji]);
        }
      });
    }
  },
  mounted() {
    this.examCharArr = new Array();
    this.generateQuizz();
    shuffle(this.examCharArr);
    this.nextKana();
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)); //max exclu
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function randomSequence(length, list) {
  var arr = [];
  while (arr.length < length) {
    var r = getRandomInt(list.length);
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