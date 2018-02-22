import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BotUpdate from '@/components/BotUpdate'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/update',
      name: 'BotUpdate',
      component: BotUpdate
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
