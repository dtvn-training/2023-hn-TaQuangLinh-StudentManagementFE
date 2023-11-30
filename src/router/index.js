import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/v-on-example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    }
  ]
})
