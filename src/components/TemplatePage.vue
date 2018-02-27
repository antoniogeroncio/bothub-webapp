<template>
  <div class="main">
    <top-bar/>
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'
import Footer from './SiteFooter.vue'

export default {
  name: 'TemplatePage',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style scoped>

</style>
