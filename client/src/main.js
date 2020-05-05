import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
