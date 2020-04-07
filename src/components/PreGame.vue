<template>
  <v-container>
    <v-card>
      <v-row align="center" no-gutters>
        <v-col>Hiragana</v-col>
        <v-col>
          <v-switch v-model="isHiragana" inset v-on:change="onSwitchChange"></v-switch>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col>Katakana</v-col>
        <v-col>
          <v-switch v-model="isKatakana" inset v-on:change="onSwitchChange"></v-switch>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-slider v-model="slider" class="align-center" :max="max" :min="0" hide-details>
          <template v-slot:append>
            <v-text-field
              v-model="slider"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-btn @click="start" block>Start Exam</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { characters } from "../assets/characters.js";
import KanaArrayVue from "./KanaArray.vue";
import Configuration from "../assets/configGame.js";

export default {
  data: () => ({
    slider: 20,
    max: characters.length * 2,
    isHiragana: true,
    isKatakana: true
  }),
  methods: {
    start() {
      var config = new Configuration(
        this.isHiragana,
        this.isKatakana,
        this.slider
      );
      this.$emit("start-game", config);
    },
    onSwitchChange() {
      if (this.isHiragana && this.isKatakana) {
        this.max = characters.length * 2;
      } else if (!this.isHiragana && !this.isKatakana) {
        this.max = 0;
      } else if (!this.isHiragana || !this.isKatakana) {
        this.max = characters.length;
      }
    }
  }
};
</script>

<style>
</style>