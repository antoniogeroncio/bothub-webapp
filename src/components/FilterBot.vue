<template>
  <div class="bot-filter">
    <div class="bot-filter__item">
      <label for="sentences">Sentences</label>
      <input type="checkbox" id="sentences">
    </div>
    <div class="bot-filter__item">
      <label for="problem">Problem</label>
      <input type="checkbox" id="problem">
    </div>
    <div class="bot-filter__item">
      <label for="improvements">Improvements</label>
      <input type="checkbox" id="improvements">
    </div>
    <div class="bot-filter__item">
      <label for="historic">Historic</label>
      <input type="checkbox" id="historic">
    </div>
    <button class="btn"><i class="material-icons">search</i></button>
  </div>
</template>

<script>
export default {
  name: 'FilterBot'
}
</script>

<style scoped lang="scss">

  @import '../assets/scss/colors';
  .bot-filter {
    display: flex;
    padding: 30px;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto 40px;
    border-bottom: 1px solid #ccc;
    width: 80%;
    position: relative;

    .btn {
      background-color: transparent;
      border: none;

      &:hover {
        color: $primary-color;
      }
    }
  }

  .bot-filter__item {
    font-size: 14px;
    color: $brand-color;

    label {
      cursor: pointer;
      margin-right: 10px;
    }
  }
</style>
