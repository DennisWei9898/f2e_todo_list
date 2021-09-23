import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Order from '../views/Order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'order',
      component: Order
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
