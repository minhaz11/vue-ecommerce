import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Overview from '../views/Overview.vue'
import Products from '../views/Products.vue'
import Orders from '../views/Orders.vue'
import {fb} from '../firebase'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true },
    children:[
      {
        path: 'overview',
        name: 'overview',
        component: Overview,
      },
      {
        path: 'products',
        name: 'products',
        component: Products,
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const currentUser = fb.auth().currentUser
    if (!currentUser) {
      next({
        path: '/',
       
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


export default router
