<template>
  <div class="topbar">

    <div class="topbar-brand">
      <router-link to="/">
      <img src="../assets/images/logo-white.svg" alt="Logo BotHub">
      </router-link>
    </div>

    <div class="topbar-action-buttom">
      <button class="btn btn-primary" @click="createBot = true">Start your bot</button>
    </div>

    <b-modal :active.sync="createBot">
      <create-bot/>
    </b-modal>

    <div class="topbar-user">
      <b-dropdown position="is-bottom-left">
        <div class="topbar-avatar" slot="trigger">
            <img src="../assets/images/man.png" alt="Avatar">
        </div>
        <b-dropdown-item @click="createBot = true">New Bot</b-dropdown-item>
        <b-dropdown-item>Your Profile</b-dropdown-item>
        <b-dropdown-item>Settings</b-dropdown-item>
        <b-dropdown-item>Documentation</b-dropdown-item>
        <b-dropdown-item>Conversational API</b-dropdown-item>
        <b-dropdown-item @click="userLogin = true">Login</b-dropdown-item>
      </b-dropdown>
    </div>

    <b-modal :active.sync="userLogin">
      <div class="modal-body">
        <div class="avatar-login">
          <img src="../assets/images/icon-avatar-login.svg" alt="" class="avatar-login-icon">
        </div>
        <modal-login/>
      </div>
    </b-modal>

  </div>
</template>

<script>
import ModalLogin from './login/ModalLogin'
import CreateBot from './bot_pages/CreateBot'

export default {
  name: 'TopBar',
  components: {
    ModalLogin,
    CreateBot
  },
  data () {
    return {
      createBot: false,
      userLogin: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/_colors';

  .topbar {
    background-color: transparent;
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .topbar-brand {
    width: 140px;
    position: relative;
    left: 30px;

    img  {
      width: 140px;
    }
  }

  .topbar-action-buttom {
    position: absolute;
    right: 90px;

    .btn {
      padding: 10px 20px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .topbar-user {
    position: absolute;
    right: 30px;
  }

  .topbar-avatar {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 100%;
    border: 2px solid #fff;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
