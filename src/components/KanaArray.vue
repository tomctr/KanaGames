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
          <v-card
            tile
            height="50"
            width="50"
            outlined
            v-bind:disabled="item.disable"
            @click="onKanaClick(item)"
            v-bind:color="item.isSelected ? '#B9CB65' : ''"
          >
            <v-row class="fill-height d-flex flex-column" no-gutters>
              <v-row no-gutters justify="center" class="pt-1 font-weight-bold">{{item.value}}</v-row>
              <v-row no-gutters justify="center" class="caption font-weight-thin">{{item.romaji}}</v-row>
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
      e.isSelected = e.isSelected == false ? true : false;
      console.log(e);
    },
    clickTabHiragana() {
      this.display_array = this.array_hiragana;
    },
    clickTabKatakana() {
      this.display_array = this.array_katakana;
    },
    getChar(c, type) {
      var result;
      if (type == "hiragana") {
        result = characters.filter(x => x.hiragana == c);
      } else {
        result = characters.filter(x => x.katakana == c);
      }
      return result;
    },
    printChar(c, type) {
      var res = this.getChar(c, type);
      if (res.length == 0) {
        return { value: "", romaji: "", disable: true, isSelected: false };
      } else
        return {
          value: c,
          romaji: res[0].romaji,
          disable: false,
          isSelected: false
        };
    }
  },
  mounted() {
    let arrhiragana = [
      ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"],
      ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", ""],
      ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
      ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", ""],
      ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", ""]
    ];
    let arrkatakana = [
      ["ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ", "ン"],
      ["イ", "キ", "シ", "チ", "ニ", "ヒ", "ミ", "", "リ", "", ""],
      ["ウ", "ク", "ス", "ツ", "ヌ", "フ", "ム", "ユ", "ル", "", ""],
      ["エ", "ケ", "セ", "テ", "ネ", "ヘ", "メ", "", "レ", "", ""],
      ["オ", "コ", "ソ", "ト", "ノ", "ホ", "モ", "ヨ", "ロ", "ヲ", ""]
    ];

    this.array_hiragana = [];
    for (let i = 0; i < arrhiragana.length; i++) {
      let r = [];
      for (let j = 0; j < arrhiragana[i].length; j++) {
        r.push(this.printChar(arrhiragana[i][j], "hiragana"));
      }
      this.array_hiragana.push(r);
    }

    this.array_katakana = [];
    for (let i = 0; i < arrkatakana.length; i++) {
      let r = [];
      for (let j = 0; j < arrkatakana[i].length; j++) {
        r.push(this.printChar(arrkatakana[i][j], "katakana"));
      }
      this.array_katakana.push(r);
    }

    this.suffix = ["a", "i", "u", "e", "o"];
    this.display_array = this.array_hiragana;
  }
};
</script>

<style>
</style>