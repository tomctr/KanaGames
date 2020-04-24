<!--
<template>
  <div>
    <v-app-bar color="#036273" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
      <v-toolbar-title>KanaGames</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>-->
<template>
  <v-navigation-drawer permanent expand-on-hover color="#036273"  class="fill-height">
    <v-list-item>
      <v-list-item-avatar>
        <v-img
          src="https://i.pinimg.com/236x/d4/08/82/d4088298ad3510ee746bde10585da6cd--anime-people-anime-guys.jpg"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav dense >
      <v-list-item link @click="onGameSelect('random')">
        <v-list-item-icon>
          <v-icon x-medium>mdi-shuffle</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="font-weight-bold">RANDOM EXAM</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onGameSelect('custom')">
        <v-list-item-icon>
          <v-icon x-medium>mdi-school</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="font-weight-bold ">CUSTOM EXAM</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  methods:{
    onGameSelect(e){
     this.$emit("select-game", e);
    },
  }
};
</script>

<style>
</style>