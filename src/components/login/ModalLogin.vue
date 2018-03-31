<template>
  <div class="login">

    <div class="avatar-login">
      <img src="../../assets/images/icon-avatar-login.svg" alt="" class="avatar-login-icon">
    </div>

    <b-tabs v-model="activeTab" position="is-centered">
      <b-tab-item label="Login">
        <b-field label="Email address">
            <b-input placeholder="Email address" type="email"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                icon-pack="fa"
                placeholder="Password reveal input"
                password-reveal>
            </b-input>
        </b-field>

        <div class="login-links">
          <router-link to="#">Forgot password?</router-link>
        </div>

        <div class="login-action">
          <button class="btn-secondary btn-login">Login</button>
        </div>
      </b-tab-item>

      <b-tab-item label="Register">
          Lorem
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'ModalLogin',
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';
.login-links {
  font-size: 13px;
  margin-bottom: 10px;
  text-align: right;

  a {
    color: $dark-grey;

    &:hover {
      color: $primary-color;
    }
  }
}

.login-action {
  display: flex;
  justify-content: center;

  .btn-login {
    padding: 10px 30px;
  }
}

.avatar-login {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
