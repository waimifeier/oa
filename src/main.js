import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/NProgress'


import VuetifyConfirm from '@/components/confirm'
Vue.use(VuetifyConfirm, { vuetify })

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)


Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

Vue.config.productionTip = false
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
