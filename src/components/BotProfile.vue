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
              <router-link to="update" class="bot__title">{{ bot_title }}</router-link>
            </div>

            <div class="bot__info">
              <div class="bot__updated">
                Updated 2 weeks ago by <router-link class="url-author" to="profile">{{ bot_author_name }}</router-link>
              </div>

              <div class="bot__url">
                <router-link to="update">{{ bot_url }}</router-link>
              </div>

              <ul class="bot__summary">
                <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">6547 issues </span><i class="material-icons">error_outline</i></a></li>
                <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">547 copy </span><i class="material-icons">content_copy</i></a></li>
                <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">321 stars </span><i class="material-icons">grade</i></a></li>
                <li class="bot-summary__item icon-update"><a href="#"><i class="material-icons">refresh</i></a></li>
              </ul>
            </div>

          </div>

          <div class="bot__action">
            <router-link to="#" class="btn btn-default btn-action"><i class="material-icons">content_copy</i></router-link>
            <router-link to="#" class="btn btn-default btn-action"><i class="material-icons">error_outline</i></router-link>
            <router-link to="update" class="btn btn-default btn-action"><i class="material-icons">refresh</i></router-link>
          </div>
        </div>

        <nav-bar/>
        <filter-bot/>
      </div>
    </div>
    <home-footer/>
  </div>
</template>

<script>
import UpDownVote from './UpDownVote'
import TopBar from './TopBar'
import HomeFooter from './HomeFooter'
import CardBot from './CardBot'
import FilterBot from './FilterBot'
import NavBar from './NavBar'

export default {
  name: 'BotUpdate',
  components: {
    CardBot,
    TopBar,
    HomeFooter,
    UpDownVote,
    NavBar,
    FilterBot
  },
  data () {
    return {
      bot_title: 'Bot-ZicaVirus',
      bot_author: 'david_gazques',
      bot_author_name: 'David Gazques',
      bot_url: 'http://buthub.io/matthew-russell/bot_pizza_delivey/'
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
