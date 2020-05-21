<template>
  <div class="fill-height" id="selectDiv">
    <v-card id="cardCategory" v-for="cat in gameCategory" :key="cat" :to="cat.link" outlined tile height="450px" width="450px"  class="ma-5 d-flex align-center justify-center" dark shaped>
      <span id="textCategory" class="display-2">{{cat.title}}</span>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    gameCategory: [
        {title: "Random Game", link: "/game/random"},
        {title: "Custom Game", link: "/game/custom"},
    ]
  })
};
</script>

<style>
#cardCategory{
  background-color: rgba(55, 57, 86, 0.7);
  align-self: center;

}
#selectDiv{
  display: flex;
  flex-wrap: wrap;
}
</style>