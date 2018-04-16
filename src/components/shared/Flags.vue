<template>
  <li class="flags-item">
    <img
      v-bind:src="'../static/images/flags/' + flagName + '.png'"
      v-bind:alt="'Flag '+ flagName">
  </li>
</template>

<script>
export default {
  name: 'Flags',
  props: ['flagName']
}
</script>
