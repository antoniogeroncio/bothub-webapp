<template>
  <div class="main">
    <top-bar/>
    <div class="container">
      <div class="page-bot__update">
        <div class="page-bot__header">
          <card-bot/>

          <ul class="navbar">
            <li class="navbar__item">
              <router-link to="profile" class="active">Description</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Bot</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Sentence</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Issues</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Update</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Translate</router-link>
            </li>
          </ul>
        </div>

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

export default {
  name: 'BotUpdate',
  components: {
    CardBot,
    TopBar,
    HomeFooter,
    UpDownVote
  }
  // data () {
  //   bot_title: 'Bot-ZicaVirus',
  //   bot_author: 'david_gazques',
  //   bot_author_name: 'David Gazques',
  //   bot_text: 'A Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects calledlarvaceans. A Swimming hundreds of feet beneath the ocean’s surface in many parts of the architects called.'
  // }
}
</script>

<style lang="scss" scoped>
  .page-bot__update {
    background-color: #fff;
    margin-bottom: 40px;
    border-radius: 10px;
  }

  .page-bot__header {
    background-color: #fff;
  }
</style>
