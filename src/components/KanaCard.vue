<template>
  <v-card width="250" height="350">
    <v-card-title>
      <v-slide-x-transition mode="out-in">
        <v-card :key="key" width="200" height="200">
          <v-row justify="center" align="center" class="fill-height" no-gutters>
            <div class="display-4">{{currentKana}}</div>
          </v-row>
        </v-card>
      </v-slide-x-transition>
    </v-card-title>
    <v-card-text>
      <v-text-field v-on:keyup.enter="submit" v-model="answer" class="centered-input"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
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
    size: { type: Number }
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
      this.currentKana = characters[this.idxKana].hiragana;
    }
  },
  mounted() {
    this.sequence = randomSequence(this.size);
    this.nextKana();
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomSequence(length) {
  var arr = [];
  while (arr.length < length) {
    var r = getRandomInt(characters.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

var characters = [
  { romaji: "a", hiragana: "あ", katakana: "ア" },
  { romaji: "i", hiragana: "い", katakana: "イ" },
  { romaji: "u", hiragana: "う", katakana: "ウ" },
  { romaji: "e", hiragana: "え", katakana: "エ" },
  { romaji: "o", hiragana: "お", katakana: "オ" },
  { romaji: "ka", hiragana: "か", katakana: "カ" },
  { romaji: "ki", hiragana: "き", katakana: "キ" },
  { romaji: "ku", hiragana: "く", katakana: "ク" },
  { romaji: "ke", hiragana: "け", katakana: "ケ" },
  { romaji: "ko", hiragana: "こ", katakana: "コ" },
  { romaji: "sa", hiragana: "さ", katakana: "サ" },
  { romaji: "shi", hiragana: "し", katakana: "シ" },
  { romaji: "su", hiragana: "す", katakana: "ス" },
  { romaji: "se", hiragana: "せ", katakana: "セ" },
  { romaji: "so", hiragana: "そ", katakana: "ソ" },
  { romaji: "ta", hiragana: "た", katakana: "タ" },
  { romaji: "chi", hiragana: "ち", katakana: "チ" },
  { romaji: "tsu", hiragana: "つ", katakana: "ツ" },
  { romaji: "te", hiragana: "て", katakana: "テ" },
  { romaji: "to", hiragana: "と", katakana: "ト" },
  { romaji: "na", hiragana: "な", katakana: "ナ" },
  { romaji: "ni", hiragana: "に", katakana: "ニ" },
  { romaji: "nu", hiragana: "ぬ", katakana: "ヌ" },
  { romaji: "ne", hiragana: "ね", katakana: "ネ" },
  { romaji: "no", hiragana: "の", katakana: "ノ" },
  { romaji: "ha", hiragana: "は", katakana: "ハ" },
  { romaji: "hi", hiragana: "ひ", katakana: "ヒ" },
  { romaji: "fu", hiragana: "ふ", katakana: "フ" },
  { romaji: "he", hiragana: "へ", katakana: "ヘ" },
  { romaji: "ho", hiragana: "ほ", katakana: "ホ" },
  { romaji: "ma", hiragana: "ま", katakana: "マ" },
  { romaji: "mi", hiragana: "み", katakana: "ミ" },
  { romaji: "mu", hiragana: "む", katakana: "ム" },
  { romaji: "me", hiragana: "め", katakana: "メ" },
  { romaji: "mo", hiragana: "も", katakana: "モ" },
  { romaji: "ya", hiragana: "や", katakana: "ヤ" },
  { romaji: "yu", hiragana: "ゆ", katakana: "ユ" },
  { romaji: "yo", hiragana: "よ", katakana: "ヨ" },
  { romaji: "ra", hiragana: "ら", katakana: "ラ" },
  { romaji: "ri", hiragana: "り", katakana: "リ" },
  { romaji: "ru", hiragana: "る", katakana: "ル" },
  { romaji: "re", hiragana: "れ", katakana: "レ" },
  { romaji: "ro", hiragana: "ろ", katakana: "ロ" },
  { romaji: "wa", hiragana: "わ", katakana: "ワ" },
  { romaji: "wo", hiragana: "を", katakana: "ヲ" },
  { romaji: "n", hiragana: "ん", katakana: "ン" }
];
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>