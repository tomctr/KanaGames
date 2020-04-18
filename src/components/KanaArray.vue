<template>
  <v-card>
    <v-row no-gutters>
      <v-tabs grow color="#036273">
        <v-tab @click="clickTabHiragana">HIRAGANA</v-tab>
        <v-tab @click="clickTabKatakana">KATAKANA</v-tab>
      </v-tabs>
    </v-row>
    <v-row no-gutters>
      <v-row v-for="(item, x) in display_array" :key="x" no-gutters>
        <v-col v-for="(item, y) in item" :key="y" cols="auto">
          <v-card tile height="50" width="50" outlined @click="onKanaClick(item)">
            <v-row class="fill-height d-flex flex-column" no-gutters>
              <v-row no-gutters justify="center" class="pt-1 font-weight-bold">{{printChar(item).value}}</v-row>
              <v-row no-gutters justify="center" class="caption font-weight-thin">{{printChar(item).romaji}}</v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters justify="center" class="pb-2 pt-2">
      <v-btn color="#036273" class="white--text" @click="dialog = false" rounded>DONE</v-btn>
    </v-row>
  </v-card>
</template>


<script>
import {
  characters,
  diacritic,
  diagraph,
  mapCarac
} from "../assets/characters.js";

export default {
  name: "KanaArray",
  data: () => ({
    array_hiragana: null,
    array_katakana: null,
    suffix: null,
    display_array: null
  }),
  methods: {
    onKanaClick(e) {
      console.log(this.getChar(e));
    },
    clickTabHiragana() {
      this.display_array = this.array_hiragana;
    },
    clickTabKatakana() {
      this.display_array = this.array_katakana;
    },
    getChar(c) {
      var result;
      if (this.display_array == this.array_hiragana) {
        result = characters.filter(x => x.hiragana == c);
      } else {
        result = characters.filter(x => x.katakana == c);
      }
      return result;
    },
    printChar(c) {
      var res = this.getChar(c);
      if (res.length == 0) {
        return "";
      } else return { value: c, romaji: res[0].romaji };
    }
  },
  mounted() {
    this.array_hiragana = [
      ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"],
      ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", ""],
      ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
      ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", ""],
      ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", ""]
    ];
    this.array_katakana = [
      ["ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ", "ン"],
      ["イ", "キ", "シ", "チ", "ニ", "ヒ", "ミ", "", "リ", "", ""],
      ["ウ", "ク", "ス", "ツ", "ヌ", "フ", "ム", "ユ", "ル", "", ""],
      ["エ", "ケ", "セ", "テ", "ネ", "ヘ", "メ", "", "レ", "", ""],
      ["オ", "コ", "ソ", "ト", "ノ", "ホ", "モ", "ヨ", "ロ", "ヲ", ""]
    ];
    this.suffix = ["a", "i", "u", "e", "o"];
    this.display_array = this.array_hiragana;
  }
};
</script>

<style>
</style>