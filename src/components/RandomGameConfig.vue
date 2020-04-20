<template>
  <v-card width="500">
    <v-row align="center" no-gutters>
      <v-col align="center" justify="center">
        <v-row no-gutters align="center">
          <v-col>Hiragana</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isHiragana"
              inset
              v-on:change="onSwitchChange(caracEnum.MONOGRAPH, isHiragana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col justify="center" align="center">
        <v-row no-gutters align="center">
          <v-col>Katakana</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isKatakana"
              inset
              v-on:change="onSwitchChange(caracEnum.MONOGRAPH, isKatakana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" no-gutters>
      <v-col align="center" justify="center">
        <v-row no-gutters align="center">
          <v-col>Diacritic</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isDiacriticHiragana"
              inset
              v-on:change="onSwitchChange(caracEnum.DIACRITIC, isDiacriticHiragana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col justify="center" align="center">
        <v-row no-gutters align="center">
          <v-col>Diacritic</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isDiacriticKatakana"
              inset
              v-on:change="onSwitchChange(caracEnum.DIACRITIC, isDiacriticKatakana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col align="center" justify="center">
        <v-row no-gutters align="center">
          <v-col>Diagraph</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isDiagraphHiragana"
              inset
              v-on:change="onSwitchChange(caracEnum.DIAGRAPH, isDiagraphHiragana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col justify="center" align="center">
        <v-row no-gutters align="center">
          <v-col class="3B393C--text">Diagraph</v-col>
          <v-col>
            <v-switch
              color="#90CFD4"
              v-model="isDiagraphKatakana"
              inset
              v-on:change="onSwitchChange(caracEnum.DIAGRAPH, isDiagraphKatakana)"
            ></v-switch>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" class="pt-3">
      <v-dialog v-model="dialog" width="550">
        <template v-slot:activator="{ on }">
          <v-btn rounded depressed color="#90CFD4" class="white--text" v-on="on">Edit</v-btn>
        </template>
        <KanaArray />
      </v-dialog>
    </v-row>
    <v-row no-gutters>
      <v-slider
        v-model="slider"
        class="align-center"
        :max="max"
        :min="0"
        hide-details
        color="#90CFD4"
      >
        <template v-slot:append>
          <v-text-field
            v-model="slider"
            class="mt-0 pt-0 pr-3 centered-input"
            hide-details
            single-line
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>
    </v-row>
    <v-row justify="center" no-gutters class="pb-2">
      <v-btn @click="start" rounded color="#036273" class="white--text">Start Exam</v-btn>
    </v-row>
  </v-card>
</template>

<script>
import { characters, diacritic, diagraph } from "../assets/characters.js";
import Configuration from "../assets/configGame.js";
import caracTypes from "../assets/enum.js";

export default {
  data: () => ({
    slider: 20,
    max: characters.length * 2,
    isHiragana: true,
    isKatakana: true,
    isDiacriticHiragana: false,
    isDiacriticKatakana: false,
    isDiagraphHiragana: false,
    isDiagraphKatakana: false,
    caracEnum: caracTypes,
    dialog: false,
    showCustomGame: true,
  }),
  components: {
  },
  methods: {
    start() {
      var caracMap = new Map();
      this.fillCaracMap(caracMap);
      console.log(caracMap);
      var config = new Configuration(caracMap, this.slider);
      this.$emit("start-game", config);
    },
    onSwitchChange(type, value) {
      switch (type) {
        case caracTypes.MONOGRAPH:
          if (value) {
            this.max += characters.length;
          } else {
            this.max -= characters.length;
          }
          break;
        case caracTypes.DIAGRAPH:
          if (value) {
            this.max += diagraph.length;
          } else {
            this.max -= diagraph.length;
          }
          break;
        case caracTypes.DIACRITIC:
          if (value) {
            this.max += diacritic.length;
          } else {
            this.max -= diacritic.length;
          }
          break;
      }
    },
    clickCustomGame(){

    },
    fillCaracMap(caracMap) {
      caracMap.set("monoHira", this.isHiragana);
      caracMap.set("monoKata", this.isKatakana);
      caracMap.set("diagraHira", this.isDiagraphHiragana);
      caracMap.set("diagraKata", this.isDiagraphKatakana);
      caracMap.set("diacriHana", this.isDiacriticHiragana);
      caracMap.set("diacriKata", this.isDiacriticKatakana);
    }
  }
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>