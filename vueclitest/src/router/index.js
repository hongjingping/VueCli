import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import h1 from '@/components/H1'
import h2 from '@/components/H2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        { path: '/',
          name: 'Hello/Hi',
          component: Hi },
        { path: 'h1',
          name: 'hi1',
          component: h1 },
        { path: 'h2',
          name: 'hi2',
          component: h2 }
      ]
    }
  ]
})
