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
    ]
  },
  {
    path: '/workbench',
    component: () => import('../views/layouts/Index.vue'),
    children: [
      { path: 'todo', component: () => import('../views/workbench/Todo.vue') },
      { path: 'message', component: () => import('../views/workbench/Message.vue') },
      { path: 'schedule', component: () => import('../views/workbench/Schedule.vue') }
    ]
  },
  {
    path: '/sys',
    component: () => import('../views/layouts/Index.vue'),
    children: [
      { path: 'dictionary', component: () => import('../views/sys/Dictionary/Index.vue') },
      { path: 'menu', component: () => import('../views/sys/menu/Index.vue') },
      { path: 'message', component: () => import('../views/sys/message/Index.vue') },
      { path: 'account', component: () => import('../views/sys/account/Account.vue') },
      { path: 'department', component: () => import('../views/sys/account/Department.vue') },
      { path: 'roles', component: () => import('../views/sys/account/Roles.vue') },
      { path: 'setting', component: () => import('../views/sys/setting') },
    ]
  },
  {
    path: '/oa',
    component: () => import('../views/layouts/Index.vue'),
    children: [
      { path: 'file', component: () => import('../views/oa/file') },
      { path: 'mail', component: () => import('../views/oa/mail/mailList.vue') },
      { path: 'design', component: () => import('../views/oa/workOrder/Design.vue') },
      { path: 'order', component: () => import('../views/oa/workOrder/Order.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('../views/error/Error404.vue')
  },
]

export default routes
