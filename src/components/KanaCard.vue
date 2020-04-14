<template>
  <v-card width="250" height="350">
    <v-row class="fill-height d-flex flex-column" no-gutters>
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="caption"
      >{{currentPos}}/{{examLength}}</v-row>
      <v-row no-gutters justify="center">
        <v-slide-x-transition mode="out-in">
          <v-card width="200" height="200">
            <v-row justify="center" align="center" class="fill-height" no-gutters>
              <div class="display-4">{{currentKana}}</div>
            </v-row>
          </v-card>
        </v-slide-x-transition>
      </v-row>
      <v-row no-gutters class="pl-7 pr-7">
        <v-text-field v-on:keyup.enter="submit" v-model="answer" class="centered-input"></v-text-field>
      </v-row>
      <v-row no-gutters align="end">
        <v-btn @click="getAnswer" depressed block v-show="isError">ANSWER</v-btn>
      </v-row>
    </v-row>
  </v-card>
</template>


<script>
import Configuration from "../assets/configGame.js";
import Result from "../assets/result.js";
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
    totalCarac: 0,
    currentPos: 0,
    examLength: 0
  }),
  props: {
    config: { type: Configuration }
  },
  methods: {
    submit() {
      if (this.idxKana[1] === this.answer) {
        this.nextKana();
      } else {
         if (!this.isError) this.totalError++;
        this.isError = true;
        console.log("error");
      }
      this.answer = "";
    },
    nextKana() {
      this.isError = false;
      if (this.examCharArr.length > 0) {
        this.idxKana = this.examCharArr.shift();
        this.currentKana = this.idxKana[0];
        this.currentPos++;
        console.log("reponse : " + this.idxKana[1]);
      } else {
        var examResult = new Result(this.totalError, this.examLength, null);
        this.$emit("end-game", examResult);
      }
    },
    generateQuizz() {
      for (var [key, value] of this.config.caracMap) {
        if (value) {
          this.totalCarac += mapCarac.get(key)().length;
        }
      }

      for (let [k, v] of this.config.caracMap) {
        if (v == false) this.config.caracMap.delete(k);
      }

      var ctr = 0;
      for (var [key, value] of this.config.caracMap) {
        var caracList = mapCarac.get(key)();
        var ratio = caracList.length / this.totalCarac;
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
    this.examLength = this.examCharArr.length;
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