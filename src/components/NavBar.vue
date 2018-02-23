<template>
  <div class="menu">
    <ul class="navbar navbar-bot">
      <li class="navbar__item">
        <router-link to="profile">Description</router-link>
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
        <router-link to="profile" class="active">Update</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="profile">Translate</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
