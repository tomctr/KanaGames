<template>
  <v-container>
    <v-card>
      <v-row align="center" no-gutters>
        <v-col>Hiragana</v-col>
        <v-col>
          <v-switch inset></v-switch>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col>Katakana</v-col>
        <v-col>
          <v-switch inset></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="11">
          <v-slider></v-slider>
        </v-col>
        <v-col cols="1">
          <v-text-field v-model="examSize" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-btn @click="start" block>Start Exam</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    examSize: 0
  }),
  methods: {
    start() {
      this.$emit("start-game", parseInt(this.examSize));
    }
  }
};
</script>

<style>
</style>