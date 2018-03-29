<template>
  <div class="login">
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
          <button class="btn-secondary">Login</button>
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
.login-links {
  font-size: 13px;
  margin-bottom: 10px;
  text-align: right;
}

.login-action {

}
</style>
