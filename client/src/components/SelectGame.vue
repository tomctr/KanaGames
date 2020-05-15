<template>
  <div class="fill-height d-flex flex-column">
    <v-card id="toto" v-for="cat in gameCategory" :key="cat" :to="cat.link" outlined tile height="150px" class="ma-5 d-flex align-center justify-center" dark shaped color="#90CFD4" >
      <span class="display-2">{{cat.title}}</span>
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
.toto{
  
}
</style>