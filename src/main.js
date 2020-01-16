import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/NProgress'

import MessageBox from 'vue-msgbox';
require('vue-msgbox/lib/vue-msgbox.css');
Vue.prototype.$Message = MessageBox

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
