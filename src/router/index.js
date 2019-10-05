import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {path: '', name: 'article', component: () => import('@/pages/Article')},
        {path: 'detail/:id', name: 'detail', component: () => import('@/pages/Article/detail')},
        {path: 'resume', name: 'resume', component: () => import('@/pages/Resume')},
        {path: 'message', name: 'message', component: () => import('@/pages/Message')},
        {path: 'oauth/redirect', name: 'redirect', component: () => import('@/pages/Login/redirect')},
      ]
    }
  ]
})
