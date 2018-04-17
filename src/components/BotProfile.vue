<template>
  <div class="main">
    <top-bar/>

    <div class="container">
      <div class="page-bot">
        <div class="page-bot__header">
          <div class="bot__score">
            <up-down-vote/>
          </div>

          <div class="bot__image">
            <img src="../assets/images/avatar.png" alt="">
          </div>

          <div class="bot__content">
            <div class="bot__header">
              <h1 class="bot__title">{{ bot_title }}</h1>
            </div>

            <div class="bot__info">
              <div class="bot__updated">
                Updated 2 weeks ago by <router-link class="url-author" to="user-profile">{{ bot_author_name }}</router-link>
              </div>

              <div class="bot__url">
                <router-link to="update">{{ bot_url }}</router-link>
              </div>

              <bot-summary/>
            </div>

          </div>

          <div class="bot__action">
            <button class="btn btn-default btn-action" @click="fork"><i class="material-icons">content_copy</i></button>
            <button class="btn btn-default btn-action"><i class="material-icons">error_outline</i></button>
            <button class="btn btn-default btn-action" @click="update"><i class="material-icons">refresh</i></button>
          </div>
        </div>

        <nav-bar/>
        <router-view/>
      </div>
    </div>
    <bot-simulation/>
    <site-footer/>
  </div>
</template>

<script>
import UpDownVote from './UpDownVote'
import TopBar from './TopBar'
import SiteFooter from './SiteFooter'
import NavBar from './NavBar'
import BotSimulation from './bot_pages/BotSimulation'
import BotSummary from './bot_informations/BotSummary'

export default {
  name: 'BotProfile',
  components: {
    BotSummary,
    TopBar,
    SiteFooter,
    UpDownVote,
    NavBar,
    BotSimulation
  },
  data () {
    return {
      bot_title: 'Bot-ZicaVirus',
      bot_author: 'david_gazques',
      bot_author_name: 'David Gazques',
      bot_url: 'http://buthub.io/matthew-russell/bot_pizza_delivey/'
    }
  },
  methods: {
    fork () {
      this.$snackbar.open({
        duration: 5000,
        position: 'is-top',
        message: 'Bot_Pizza_Delivey You duplicated this robot, Make it better.'
      })
    },
    update () {
      this.$snackbar.open({
        duration: 5000,
        position: 'is-top',
        message: 'Your bot Bot_Pizza_Delivey has been updated successfully.'
      })
    },
    favorites () {
      this.$snackbar.open({
        duration: 5000,
        position: 'is-top',
        message: 'Bot_Pizza_Delivey is among your favorites now.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-bot {
    background-color: #fff;
    margin-bottom: 40px;
    border-radius: 10px;
    margin-top: 30px;
    padding-bottom: 20px;
  }
</style>
