<template>
  <div class="main">
    <top-bar/>

    <section class="profile">
      <div class="container">

        <div class="header-profile">

          <div class="profile-author">
            <div class="profile-author__image">
              <img src="../assets/images/man.png" alt="">
            </div>
            <div class="profile-author__info">
              <div class="author__name">{{ author_name }}</div>
              <div class="author__info">
                <span class="author__location">
                  {{ author_location }}
                </span>
                <span class="author__joined">
                  Joined {{ author_joined }} · last seen {{ author_last_seen }}
                </span>
              </div>
              <router-link to="profile" class="author__url">{{ author_url }}</router-link>
            </div>
          </div>

          <ul class="navbar">
            <li class="navbar__item">
              <router-link to="profile" class="active">Bots {{ author_bot_counts }}</router-link>
            </li>
            <li class="navbar__item">
              <router-link to="profile">Star {{ author_bot_stars }}</router-link>
            </li>
          </ul>

        </div>

        <card-bot/>
        <card-bot/>
        <card-bot/>
      </div>
    </section>

    <home-footer/>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'
import CardBot from './CardBot.vue'
import CardAuthor from './CardAuthor.vue'
import HomeFooter from './HomeFooter.vue'

export default {
  name: 'Profile',
  components: {
    TopBar,
    CardBot,
    CardAuthor,
    HomeFooter
  },
  data () {
    return {
      author_name: 'Matthew Russell',
      author_location: 'Granada, Andalusia, Spain',
      author_joined: '2 years ago',
      author_last_seen: '9 days ago',
      author_url: 'http://davidgasquez.buthub.api/',
      author_bot_counts: '60',
      author_bot_stars: '160'
    }
  }

}
</script>

<style scoped lang="scss">
  @import '../assets/scss/_variables';
  @import '../assets/scss/_colors';

  .profile {
    padding-bottom: 40px;
  }

  .header-profile {
    background-color: #fff;
    border-radius: 10px;
    margin: 15px;

    .profile-author {
      width: 100%;
      padding: 20px;
      display: flex;
      margin: 15px;

      @media (max-width: 992px) {
        // width: calc(50% - 30px);
      }

      @media (max-width: 768px) {
        // width: 100%;
        // margin: 10px 0;
      }

      @media (max-width: 320px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .profile-author__image {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      overflow: hidden;
      border-radius: 10px;

      img {
        width: 100%;
        object-fit: contain;
      }

      @media (max-width: 320px) {
        margin-bottom: 20px;
        margin-right: 0;
      }
    }

    .profile-author__info {
      font-size: 12px;
      line-height: 20px;

      @media (max-width: 320px) {
        width: 100%;
        text-align: center;
      }
    }

    .author__name {
      font-size: 30px;
      font-weight: 500;
      margin: 10px 0;
    }

    .author__location {
      display: block;
      color: #818181;
    }

    .author__joined {
      display: block;
      color: #818181;
    }

    .author__url {
      display: block;
      text-decoration: none;
      color: #818181;

      &:hover {
        color: $primary-color;
      }
    }

    .author__bot-counts {
      display: block;
      margin-top: 10px;
    }
  }
</style>
