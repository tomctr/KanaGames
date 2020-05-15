<template>
  <v-bottom-navigation
  id="bottomNavMobile"
  height="175px"
  grow
  color="white"
  dark
  class="d-flex justify-space-around mb-10 ml-12"
  width="90%"
  app
  >
    <v-btn to="/profil" value="recent" > 
      <span class="display-1" >Profil</span>
      <v-icon x-large>mdi-face</v-icon>
    </v-btn>

    <v-btn to="/" value="favorites">
      <span class="display-1">Game</span>
      <v-icon x-large >mdi-play</v-icon>
    </v-btn>

    <v-btn to="/kana" value="nearby">
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
#bottomNavMobile{
  border-radius: 50px;
  background-color: rgba(55, 57, 86, 0.45);
}
</style>