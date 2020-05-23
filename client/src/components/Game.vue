<template>
  <v-component is='actualComponent'></v-component>
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
      {name: "randomCard", pregame:"RandomGameConfig", game:"KanaGame", result:"EndGame"},
      {name: "customCard", pregame:"CustomGameConfig", game:"", result:""}

    ]
  }),
};
</script>

<style>
</style>