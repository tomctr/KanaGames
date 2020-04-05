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
      <v-row no-gutters>
         <v-slider
              v-model="slider"
              class="align-center"
              :max="max"
              :min="0"
              hide-details
            >
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
export default {
  data: () => ({
    examSize: 0,
    max: 20,
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