import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'


Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
