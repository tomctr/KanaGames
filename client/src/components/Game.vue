<template>
  <v-component is='actualComponent'>

  </v-component>
</template> 

<script>
import RandomGameConfig from './RandomGameConfig';
import CustomGameConfig from './CustomGameConfig';
import KanaGame from './KanaCard';
import EndGame from './EndGame';

export default {
  name: "Game",
  components: {
  },
  
  data: () => ({
    actualComponent: null,
    games: [
      {name: "random", pregame:"RandomGameConfig", game:"KanaGame", result:"EndGame"},
      {name: "custom", pregame:"CustomGameConfig", game:"", result:""}

    ]
  }),
  mounted(){
    if (this.$route.params.typeGame == 'random'){
      selectedGame = games.filter(game => game.name == 'random');
      this.actualComponent = this.games.filter(game => game.name == 'random').pregame;
    }
  }
};
</script>

<style>
</style>