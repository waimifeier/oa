const routes = [
  {
    path: '/login',
    component: () => import('../views/login/Index.vue')
  },
  {
    path: '/',
    component: () => import('../views/layouts/Index.vue'),
    children: [
      { path: 'home', component: () => import('../views/Home.vue') },
      { path: '', component: () => import('../views/About.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('../views/error/Error404.vue')
  },
]

export default routes
