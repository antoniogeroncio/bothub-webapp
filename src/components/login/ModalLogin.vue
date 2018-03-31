<template>
  <div class="login-tabs">

    <div class="avatar-login">
      <img src="../../assets/images/icon-avatar-login.svg" alt="" class="avatar-login-icon">
    </div>

    <b-tabs v-model="activeTab" position="is-centered">
      <b-tab-item label="Login">
        <form-login/>
      </b-tab-item>

      <b-tab-item label="Register">
        <form-register/>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import FormLogin from './FormLogin'
import FormRegister from './FormRegister'

export default {
  name: 'ModalLogin',
  components: {
    FormLogin,
    FormRegister
  }
}
</script>

<style lang="scss" scoped>

</style>
