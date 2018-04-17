<template>
  <li class="bot-summary__item">
    <span class="bot-summary__content">
      <span class="bot-summary__item-label"><slot/> issues
      </span><i class="material-icons">error_outline</i>
    </span>
  </li>
</template>

<script>
export default {
  name: 'Issues'
}
</script>
