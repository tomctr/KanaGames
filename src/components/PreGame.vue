<template>
  <div>
    <v-text-field v-model="examSize" label="Exam Size" outlined></v-text-field>
    <v-btn @click="start">Start</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
      examSize: 0,
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