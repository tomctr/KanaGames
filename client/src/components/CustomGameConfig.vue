<template>
  <v-card height="1500" id="CustomConfigCard" class="ma-10">
    <v-row class="fill-height flex-column" no-gutters>
    <v-row no-gutters class="flex-column" >
      <v-row v-for="i in 11" :key="i" no-gutters>
        <v-col v-for="j in 5" :key="j">
          <v-card
            tile
            v-bind:disabled="display_array[j-1][i-1].disable"
            outlined
            @click="onKanaClick(display_array[j-1][i-1])"
            v-bind:color="display_array[j-1][i-1].isSelected ? '#B9CB65' : ''"
            height="115px"
            id="caracCard"
            dark
          >
            <v-row class="fill-height d-flex flex-column" no-gutters>
              <v-row
                no-gutters
                justify="center"
                class="pt-1 display-2 font-weight-bold"
              >{{display_array[j-1][i-1].value}}</v-row>
              <v-row
                no-gutters
                justify="center"
                class="display-1 font-weight-thin"
              >{{display_array[j-1][i-1].romaji}}</v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-tabs grow dark class="fill-height">
        <v-tab @click="clickTabHiragana" class="display-2"  id="tabSelect">HIRAGANA</v-tab>
        <v-tab @click="clickTabKatakana" class="display-2"  id="tabSelect">KATAKANA</v-tab>
      </v-tabs>
    </v-row>
    <v-row no-gutters justify="center" align="end">
      <v-btn height="100px" color="#1B1B2E" class="white--text display-1" @click="start" block>START EXAM</v-btn>
    </v-row>
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
  data: () => ({
    array_hiragana: null,
    array_katakana: null,
    suffix: null,
    display_array: null,
    list_exam: null
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
    clickedRow(x, value) {
      console.log(value);
      this.display_array[x].forEach(x => {
        if (x.value != "") x.isSelected = true;
      });
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
    },
    start() {
      var res_hira = [];
      this.array_hiragana.forEach(element => {
        var r = element.filter(x => x.isSelected == true);
        if (r.length > 0) res_hira.push(r);
      });
      var res_kata = [];
      this.array_katakana.forEach(element => {
        var r = element.filter(x => x.isSelected == true);
        if (r.length > 0) res_kata.push(r);
      });
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
#CustomConfigCard{
    background-color: rgba(55, 57, 86, 0.45);
    border-radius: 40px;
}
#caracCard{
      background-color: rgba(55, 57, 86, 0.45);
}
#tabSelect{
        background-color: rgba(55, 57, 86, 1);
}
</style>