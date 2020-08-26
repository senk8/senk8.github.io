import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vue_scrollto from './plugins/vue_scrollto';


Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  vue_scrollto,
  render: h => h(App)
}).$mount('#app')
