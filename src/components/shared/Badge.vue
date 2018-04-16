<template>
  <span class="badge"><slot /></span>
</template>

<script>
export default {
  name: 'Badge',
  props: ['badgeName']
}
</script>
