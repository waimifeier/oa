import VueProgressBar from 'vue-progressbar'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

import Vue from 'vue';
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})