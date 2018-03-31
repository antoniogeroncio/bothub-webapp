<template>
  <div class="login">
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
        <a href="#">Forgot password?</a>
      </div>

      <div class="login-action">
        <button class="btn-secondary btn-login">Login</button>
      </div>
  </div>
</template>
<script>

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
</style>
