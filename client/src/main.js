import Vue from 'vue'
import VueRouter from 'vue-router';
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import Game from './components/Game';
import Profil from './components/Profil'
import KanaDico from './components/KanaDico'
import CustomGame from './components/CustomGameConfig'
import RandomGame from './components/RandomGameConfig'
import SelectGame from './components/SelectGame'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: SelectGame },
    { path: '/profil', component: Profil },
    { path: '/kana', component: KanaDico },
    { path: '/game/custom', component: CustomGame },
    { path: '/game/random', component: RandomGame },
    { path: '/game', component: Game }
  ]
})

new Vue({
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
