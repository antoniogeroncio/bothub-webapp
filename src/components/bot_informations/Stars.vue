<template>
  <li class="bot-summary__item">
    <span class="bot-summary__content">
      <span class="bot-summary__item-label"><slot/> stars</span>
      <i class="material-icons">grade</i>
    </span>
  </li>
</template>

<script>
export default {
  name: 'Stars'
}
</script>
