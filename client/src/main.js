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

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: CustomGame },
    { path: '/profil', component: Profil},
    { path: '/kana', component: KanaDico}
  ]
})

new Vue({
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
