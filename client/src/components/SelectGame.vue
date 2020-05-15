<template>
  <div class="fill-height d-flex flex-column">
    <v-card id="cardCategory" v-for="cat in gameCategory" :key="cat" :to="cat.link" outlined tile height="150px" class="ma-5 d-flex align-center justify-center" dark shaped>
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
        {title: "Quizz", link: "/"}
    ]
  })
};
</script>

<style>
#cardCategory{
  background-color: rgba(55, 57, 86, 0.7);
}
</style>