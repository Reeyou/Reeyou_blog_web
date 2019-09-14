import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Article from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
