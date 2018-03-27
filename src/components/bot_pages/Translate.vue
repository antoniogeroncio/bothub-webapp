<template>
  <div class="container">
    <div class="content">
      <div class="language-add">
        <a href="#" class="btn btn-secondary">New language</a>
      </div>
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

  //---------------------
  // New Language
  //---------------------

  .language-add {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    border-bottom: 1px solid #D8D8D8;
    margin-bottom: 30px;

    .btn {

    }
  }
</style>
