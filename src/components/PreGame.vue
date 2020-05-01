<template>
  <v-card v-bind:width="cardWidth" :height="cardHeight">
   <!-- <RandomGameConfig v-if=" gametypeconfig == 'random'" v-on:start-game="startGame" class="fill-height" />
    <CustomGameConfig v-if="gametypeconfig == 'custom'" /> -->
     <RandomGameConfig v-on:start-game="startGame" class="fill-height" />
  </v-card>
</template>

<script>
import RandomGameConfig from "./RandomGameConfig";
import CustomGameConfig from "./CustomGameConfig";

export default {
  components: {
    RandomGameConfig,
    CustomGameConfig
  },
  data: () => ({
    isCustomGame: false
  }),
  props: {
    gametypeconfig: { type: String }
  },
  methods: {
    startGame(param) {
      this.$emit("start-game", param);
    },
    showCustomGame() {
      this.isCustomGame = false;
    },
    showRandomGame() {
      this.isCustomGame = true;
    }
  },
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "s":
        case "md":
          return "800";
        default:
          return "590";
      }
    },
    cardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "s":
        case "md":
          return "1000";
        default:
          return "350";
      }
    }
  }
};
</script>

<style>
</style>