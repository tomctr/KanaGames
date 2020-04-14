<template>
  <v-card width="450" height="350">
    <v-row class="fill-height d-flex flex-column" no-gutters>
      <v-row
        no-gutters
        align="start"
        justify="center"
        class="mt-2 display-1"
        v-bind:class="getSuccessColor()"
      >{{examResult.getScore()}}/{{examResult.examLength}}</v-row>
      <v-row no-gutters></v-row>
      <v-row align="end" no-gutters>
        <v-btn block>RETRY</v-btn>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
import Result from "../assets/result.js";

export default {
  data: () => ({
    successColor: null
  }),
  props: {
    examResult: { type: Result }
  },
  methods: {
    getSuccessColor() {
      if (this.examResult.getSuccessRate() > 50) return "red--text";
      else return "green--text";
    }
  }
};
</script>

<style>
</style>