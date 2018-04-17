<template>
    <div class="card-bot">

      <bot-summary/>

      <div class="bot-score">
        <up-down-vote/>
      </div>

      <div class="card-bot__image">
        <img src="../assets/images/avatar.png" alt="">
      </div>

      <div class="card-bot__content">
        <div class="card-bot__header">
          <router-link to="/description" class="card-bot__title">{{ bot_title }}</router-link>
          <!--<span class="card-bot__author">{{ bot_author }}</span>-->
        </div>

        <div class="card-bot__info">
          <div class="card-bot__updated">
            Updated 2 weeks ago by <router-link class="url-author" to="/user-profile">{{ bot_author_name }}</router-link>
          </div>
          <flags/>
        </div>

        <div class="card-bot__excerpt">
          {{ bot_description }}
        </div>

        <div class="card-bot__badge">
          <badge>bug</badge>
          <badge>precaution</badge>
          <badge>virus</badge>
          <badge>disease</badge>
          <badge>symptoms</badge>
          <badge>...</badge>
        </div>
      </div>

      <div class="bot-action">
        <router-link to="update" class="btn btn-update">Update <i class="material-icons">refresh</i></router-link>
      </div>
    </div>
</template>

<script>
import UpDownVote from './UpDownVote.vue'
import Badge from './shared/Badge'
import Flags from './shared/Flags'
import BotSummary from './bot_informations/BotSummary'

export default {
  name: 'CardBot',
  components: {
    Flags,
    Badge,
    UpDownVote,
    BotSummary
  },
  data () {
    return {
      bot_title: 'Bot-ZicaVirus',
      bot_author: 'david_gazques',
      bot_author_name: 'David Gazques',
      bot_description: 'A Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects calledlarvaceans. A Swimming hundreds of feet beneath the ocean’s surface in many parts of the architects called.'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/_colors";

  .card-bot__list {

    // Config for large devices

    @media (min-width: 2000px) {
      display: flex;
      align-items: stretch;
      justify-content: center;
    }
  }

  //------------------------------
  // Card Bot
  //------------------------------
  .card-bot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #FFF;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    transition: all .2s ease-in-out;
    margin: 30px 15px;

    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      box-shadow: 0 0 20px 5px rgba($dark-green,.1);
    }

    // Config for large devices

    @media (min-width: 2000px) {
      width: calc(50% - 40px);
      height: 10vh;
    }

    @media (max-width: 768px) {
      margin: 15px 0;
      width: 100%;
      align-items: flex-start;

      &:hover {
        box-shadow: none;
      }
    }

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
    }
  }

  //------------------------------
  // Bot Title
  //------------------------------
  .card-bot__title,
  .card-bot__author {
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 7px;
    color: $brand-color;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: $primary-color;
    }
  }

  .card-bot__author {
    position: relative;
    padding-left: 8px;

    &::before {
      content: '/';
      display: block;
      width: 8px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  //------------------------------
  // Bot Bot Info
  //------------------------------
  .card-bot__info {
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .card-bot__updated {
    font-size: 12px;
    color: $dark-grey;
    margin-right: 10px;

    @media (max-width: 768px) {
      background-color: #fff;
      width: 100%;
      margin-right: 0;
    }
  }

  .url-author {
    color: $dark-grey;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: $primary-color;
    }
  }

  //------------------------------
  // Bot Image
  //------------------------------
  .card-bot__image {
    width: 134px;
    height: 134px;
    margin: 0 30px 0 -10px;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
    z-index: 2;

    img {
      width: 100%;
    }

    @media (max-width: 992px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      margin: 0 20px 0 0;
    }

    @media (max-width: 400px) {
      margin: 0 0 20px 0;
    }
  }

  //------------------------------
  // Bot Content
  //------------------------------
  .card-bot__content {
    width: calc(100% - 264px);

    @media (max-width: 768px) {
      width: calc(100% - 120px);
      margin-bottom: 25px;
    }

    @media (max-width: 400px) {
      width: 100%;
      text-align: center;
    }
  }

  .card-bot__excerpt {
    margin: 25px 0;
    font-size: 15px;
    line-height: 20px;
  }

  //------------------------------
  // Bot Badges
  //------------------------------
  .card-bot__badge {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      display: none;
    }
  }

  //------------------------------
  // Bot Actions
  //------------------------------
  .bot-action {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .bot-score {
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
