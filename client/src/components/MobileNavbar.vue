<template>
  <v-bottom-navigation
  grow
  >
    <v-btn value="recent">
      <span>Profil</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Game</span>
      <v-icon>mdi-play</v-icon>
    </v-btn>
    <v-btn value="nearby">
      <span>Kana</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style>

</style>