<template>
  <div class="menu">
    <ul class="navbar navbar-bot">
      <li class="navbar__item">
        <router-link to="description">Description</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="bot">Bot</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="sentence">Sentence</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="issues">Issues</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="update" >Update</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="translate">Translate</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
