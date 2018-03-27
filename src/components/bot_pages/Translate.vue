<template>
  <div class="container">
    <div class="content">
      <div class="translate-list">
        <chart-box/>
        <chart-box/>
        <chart-box/>
        <chart-box/>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBox from './ChartBox'
export default {
  name: 'Translate',
  components: {
    ChartBox
  }
}
</script>

<style lang="scss" scoped>
  .translate-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
