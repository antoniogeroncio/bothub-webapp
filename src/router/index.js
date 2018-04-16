import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import StyleGuide from '@/components/StyleGuide'
import UserProfile from '@/components/UserProfile'

// Bot Informations
import BotProfile from '@/components/BotProfile'
import Bot from '@/components/bot_pages/Bot'
import Description from '@/components/bot_pages/Description'
import Issues from '@/components/bot_pages/Issues'
import Sentence from '@/components/bot_pages/Sentence'
import Translate from '@/components/bot_pages/Translate'
import TranslationPage from '@/components/bot_pages/TranslationPage'
import Update from '@/components/bot_pages/Update'

// User Pages
import MyBots from '@/components/user_pages/MyBots'
import StaredBots from '@/components/user_pages/StaredBots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/styleguide',
      name: 'StyleGuide',
      component: StyleGuide
    },
    {
      path: '/bot-profile',
      name: 'BotProfile',
      component: BotProfile,
      redirect: '/description',
      children: [
        {
          path: '/description',
          name: 'Description',
          component: Description
        },
        {
          path: '/bot',
          name: 'Bot',
          component: Bot
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
          path: '/translation',
          name: 'TranslationPage',
          component: TranslationPage
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
      component: UserProfile,
      redirect: '/my-bots',
      children: [
        {
          path: '/my-bots',
          name: 'MyBots',
          component: MyBots
        },
        {
          path: '/stared-bots',
          name: 'StaredBots',
          component: StaredBots
        }
      ]
    }
  ]
})
