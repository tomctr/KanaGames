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
        <v-row v-for="(item, x) in array_hiragana" :key="x" no-gutters>
      <v-col v-for="(item, y) in item" :key="y" cols="auto">
        <v-card height="50" width="50" outlined @click="onKanaClick(item)">
          <v-row no-gutters justify="center" align="center" class="fill-height">{{item}}</v-row>
        </v-card>
      </v-col>
    </v-row>
    </v-row>
    <v-row no-gutters justify="center" class="pb-2 pt-2">
      <v-btn color="#036273" class="white--text"  @click="dialog = false" rounded>DONE</v-btn>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: "KanaArray",
  data: () => ({
    array_hiragana: null,
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
    onKanaClick(e) {}
  },
  mounted() {
    this.array_hiragana = [
      ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"],
      ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", ""],
      ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", ""],
      ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", ""],
      ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", ""]
    ];
  }
};
</script>

<style>
</style>