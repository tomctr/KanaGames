<template>
  <v-bottom-navigation
  height="175px"
  grow
  background-color="#036273"
  color="white"
  dark
  class="d-flex justify-space-around align-self-start "
  >
    <v-btn value="recent">
      <span class="display-1" >Profil</span>
      <v-icon x-large>mdi-face</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span class="display-1">Game</span>
      <v-icon x-large >mdi-play</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span class="display-1">Kana</span>
      <span class="display-1 font-weight-bold">あ</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style>

</style>