import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Main from '@/pages/main.vue'
import App from '@/pages/App'
import Message from '@/pages/Message'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: 'article', name: 'article', component: () => import('@/pages/Article')},
        {path: 'detail', name: 'detail', component: () => import('@/pages/Article/detail')},
      ]
    },
    {
      path: '/app',
      name: 'app',
      component: App
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})
