<template>
    <div class="card-bot">

      <ul class="bot-card__summary">
        <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">6547 issues </span><i class="material-icons">error_outline</i></a></li>
        <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">547 copy </span><i class="material-icons">content_copy</i></a></li>
        <li class="bot-summary__item"><a href="#"><span class="bot-summary__item-label">321 stars </span><i class="material-icons">grade</i></a></li>
        <li class="bot-summary__item icon-update"><a href="#"><i class="material-icons">refresh</i></a></li>
      </ul>

      <div class="bot-score">
        <up-down-vote/>
      </div>

      <div class="card-bot__image">
        <img src="../assets/images/avatar.png" alt="">
      </div>

      <div class="card-bot__content">
        <div class="card-bot__header">
          <a href="#" class="card-bot__title">{{ bot_title }}</a>
          <!--<span class="card-bot__author">{{ bot_author }}</span>-->
        </div>

        <div class="card-bot__info">
          <div class="card-bot__updated">
            Updated 2 weeks ago by <a class="url-author" href="#">{{ bot_author_name }}</a>
          </div>
          <ul class="card-bot__flags">
            <li class="flags-item"><img src="../assets/images/flags/EN.png" alt="Flag ES"></li>
            <li class="flags-item"><img src="../assets/images/flags/ES.png" alt="Flag ES"></li>
            <li class="flags-item"><img src="../assets/images/flags/PT.png" alt="Flag PT"></li>
            <li class="flags-item"><img src="../assets/images/flags/IT.png" alt="Flag IT"></li>
            <li class="flags-item"><img src="../assets/images/flags/NL.png" alt="Flag NL"></li>
            <li class="flags-item"><img src="../assets/images/flags/FR.png" alt="Flag FR"></li>
            <li class="flags-item"><img src="../assets/images/flags/DE.png" alt="Flag DE"></li>
          </ul>
        </div>

        <div class="card-bot__excerpt">
          {{ bot_text }}
        </div>

        <div class="card-bot__badge">
          <span class="badge">cheers</span>
          <span class="badge">bug</span>
          <span class="badge">precaution</span>
          <span class="badge">virus</span>
          <span class="badge">disease</span>
          <span class="badge">symptoms</span>
          <span class="badge">...</span>
        </div>
      </div>

      <div class="bot-action">
        <a href="#" class="btn btn-update">Update <i class="material-icons">refresh</i></a>
      </div>
    </div>
</template>

<script>
import UpDownVote from './UpDownVote.vue'

export default {
  name: 'CardBot',
  components: {
    UpDownVote
  },
  data () {
    return {
      bot_title: 'Bot-ZicaVirus',
      bot_author: 'david_gazques',
      bot_author_name: 'David Gazques',
      bot_text: 'A Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects calledlarvaceans. A Swimming hundreds of feet beneath the ocean’s surface in many parts of the architects called.'
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
  // Bot Summary
  //------------------------------
  .bot-card__summary {
    color: $dark-grey;
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 23px;
    right: 28px;
    display: flex;
    justify-content: flex-end;

    .bot-summary__item {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-left: 30px;

      .material-icons {
        margin-left: 10px;
        font-size: 16px;
      }

      a {
        display: flex;
        align-items: center;
        color: $dark-grey;
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: $primary-color;
        }
      }

      @media (max-width: 992px) {
        margin-left: 10px;
        .material-icons {
          margin-left: 4px;
        }
      }
    }

    @media (max-width: 768px) {
      top: inherit;
      right: inherit;
      bottom: 20px;
      left: 20px;

      .bot-summary__item {
        .material-icons {
          margin-left: 0;
          font-size: 18px;
        }
        margin-left: 0;
        margin-right: 20px;

        @media (max-width: 400px) {
          margin-right: 10px;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .bot-summary__item-label {
        display: none;
      }
    }

    .icon-update {
      display: none;
      @media (max-width: 768px) {
        display: initial;
      }
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
  // Bot Flags
  //------------------------------
  .card-bot__flags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      background-color: #fff;
      width: 100%;
      margin-top: 7px;
    }

    @media (max-width: 400px) {
      width: auto;
    }

    .flags-item {
      width: 15px;
      margin: 0 6px 0 0;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 100%;
      }
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
