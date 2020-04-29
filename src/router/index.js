import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main.vue'
import Categoty from '@/pages/Category'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Discover from '@/pages/Discover'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'article',
                    component: () => import('@/pages/Index'),
                    children: [
                        {path: '', name: 'article', component: () => import('@/pages/Index/Article')},
                        {path: 'index/detail/:id', name: 'detail', component: () => import('@/pages/Index/Article/detail')},
                        {path: 'index/resume', name: 'resume', component: () => import('@/pages/Index/Resume')},
                        {path: 'index/message', name: 'message', component: () => import('@/pages/Index/Message')}
                    ]
                },

                // {path: 'oauth/redirect', name: 'redirect', component: () => import('@/pages/Login/redirect')},
                {path: '/category', name: 'category', component: Categoty},
                {path: '/about', name: 'about', component: About},
                {path: '/blog', name: 'blog', component: Blog},
                {path: '/discover', name: 'discover', component: Discover}
            ]
        }
    ]
})
