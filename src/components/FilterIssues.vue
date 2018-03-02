<template>
  <div class="bot-filter">
    <div class="bot-filter__item">
      <input type="checkbox" id="sentences">
      <label for="sentences">All comments</label>
    </div>
    <div class="bot-filter__item">
      <input type="checkbox" id="problem">
      <label for="problem">Problem</label>
    </div>
    <div class="bot-filter__item">
      <input type="checkbox" id="improvements">
      <label for="improvements">Improvements</label>
    </div>
    <button class="btn btn-filter"><i class="material-icons">search</i></button>
  </div>
</template>

<script>
export default {
  name: 'FilterIssues'
}
</script>

<style scoped lang="scss">

  @import '../assets/scss/colors';
  .bot-filter {
    display: flex;
    padding: 30px;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    position: relative;

    @media (max-width: 768px) {
      width: 90%;
      padding: 10px 0;
    }

    @media (max-width: 400px) {
      flex-direction: column;
      padding: 10px 0;
    }

    .btn-filter {
      background-color: transparent;
      border: none;
      position: absolute;
      right: 20px;
      padding: 10px;
      outline: none;

      @media (max-width: 400px) {
        margin-top: 20px;
      }

      &:hover {
        color: $primary-color;
      }

      &:focus {
        background-color: #cccccc;
      }
    }
  }

  .bot-filter__item {
    font-size: 14px;
    color: $brand-color;

    label {
      cursor: pointer;
      margin-right: 40px;
      line-height: 16px;
      font-size: 12px;
    }

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 10px;

    }

    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;

      label {
        margin: 0 0 10px 0;
      }
    }
  }
</style>
