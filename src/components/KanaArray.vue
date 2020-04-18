<!--
<template>
  <v-content>
    <v-row v-for="(item, x) in array_hiragana" :key="x" no-gutters>
      <v-col v-for="(item, y) in item" :key="y" cols="auto">
        <v-card height="50" width="50" outlined @click="onKanaClick(item)">
          <v-row no-gutters justify="center" align="center" class="fill-height">{{item}}</v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>
-->

<template>
  <v-card>
    <v-row no-gutters>
      <v-tabs grow color="#036273">
        <v-tab>HIRAGANA</v-tab>
        <v-tab>KATAKANA</v-tab>
      </v-tabs>
    </v-row>
    <v-row no-gutters>
      <v-row v-for="(item, x) in test" :key="x" no-gutters>
        <v-col v-for="(item, y) in item" :key="y" cols="auto">
          <v-card height="50" width="50" outlined @click="onKanaClick(item)">
            <v-row no-gutters justify="center" align="center" class="fill-height">{{item.hiragana}}</v-row>
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
export default {
  name: "KanaArray",
  data: () => ({
    array_hiragana: null,
    array_katakana: null,
    prefix_mono: null,
    suffix: null,
    test: null,
    characters: [
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
    ]
  }),
  methods: {
    onKanaClick(e) {},
    createArray(type, alphabet) {
      var row = [];
      var resArray = [];
      //init col
      for (let i = 0; i < this.suffix.length; i++) {
        var targetChar = this.suffix[i];
        var res = this.characters.filter(x => x.romaji == targetChar);
        res.length > 0 ? row.push(res[0]) : row.push(" ");
        resArray.push(row);
        row = [];
      }
      //fill row
        for (let i = 0; i < this.suffix.length; i++) {
          for (let j = 0; j < type.length; j++) {
            var targetChar = type[j] + this.suffix[i];
            var res = this.characters.filter(x => x.romaji == targetChar);
            var rowToFill = resArray[i];
            res.length > 0 ? rowToFill.push(res[0]) : rowToFill.push("");
          }
          rowToFill = [];
        }
      console.log(resArray);
      this.test = resArray;
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
      ["ア", "カ", "サ", "タ", "な", "は", "ま", "や", "ら", "わ", "ん"],
      ["イ", "キ", "シ", "チ", "に", "ひ", "み", "", "り", "", ""],
      ["ウ", "ク", "ス", "ツ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
      ["エ", "ケ", "セ", "テ", "ね", "へ", "め", "", "れ", "", ""],
      ["オ", "コ", "ソ", "ト", "の", "ほ", "も", "よ", "ろ", "を", ""]
    ];
    this.prefix_mono = ["k", "s", "t", "n", "h", "m", "y", "r", "w", "n"];
    this.suffix = ["a", "i", "u", "e", "o"];
    this.createArray(this.prefix_mono, "hiragana");
  }
};
</script>

<style>
</style>