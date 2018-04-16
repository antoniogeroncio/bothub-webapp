<template>
  <li class="flags-item">
    <img
      v-bind:src="flag_img_path + flagName + '.png'"
      v-bind:alt="'Flag '+ flagName">
  </li>
</template>

<script>
export default {
  name: 'Flags',
  props: ['flagName'],
  data () {
    return {
      flag_img_path: '../static/images/flags/'
    }
  }
}
</script>
