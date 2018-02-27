import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import UserProfile from '@/components/UserProfile'

// Bot Informations
import BotProfile from '@/components/BotProfile'
import Bot from '@/components/bot_pages/Bot'
import Description from '@/components/bot_pages/Description'
import Issues from '@/components/bot_pages/Issues'
import Sentence from '@/components/bot_pages/Sentence'
import Translate from '@/components/bot_pages/Translate'
import Update from '@/components/bot_pages/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/bot-profile',
      name: 'BotProfile',
      component: BotProfile,
      children: [
        {
          path: '/bot',
          name: 'Bot',
          component: Bot
        },
        {
          path: '/description',
          name: 'Description',
          component: Description
        },
        {
          path: '/issues',
          name: 'Issues',
          component: Issues
        },
        {
          path: '/sentence',
          name: 'Sentence',
          component: Sentence
        },
        {
          path: '/translate',
          name: 'Translate',
          component: Translate
        },
        {
          path: '/update',
          name: 'Update',
          component: Update
        }
      ]
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})
