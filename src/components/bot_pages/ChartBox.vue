<template>
  <div class="translate-box">
    <div class="translate-box__content">
      <h5 class="translate-box__title">
        English
        <span class="translate-box__flag"><img src="../../assets/images/flags/EN.png" alt=""></span>
      </h5>
      <span class="translate-box__status">300 sentences to translate</span>
    </div>

    <div class="translate-box__chart">
      <div class="pie" data-percent="10"><span class="pie-percent">10%</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartBox'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/colors';

  .translate-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $bg-grey;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px 7%;
    margin: 15px;
    width: calc(50% - 30px);

    @media (max-width: 768px) {
      width: calc(100% - 20px);
      margin: 10px;
    }
  }
  .translate-box__content {

  }
  .translate-box__title {
    margin: 0;
  }
  .translate-box__status {
    color: #8F8F8F;
  }
  .translate-box__flag {
    width: 15px;
    display: inline-block;

    img {
      width: 100%;
    }
  }

  $pie-size: 70px;
  $pie-border: 5px;

  .translate-box__chart {

    .pie {
      width: $pie-size;
      height: $pie-size;
      .pie-percent {
        width: $pie-size - $pie-border * 2;
        height: $pie-size - $pie-border * 2;
        top: $pie-border;
        left: $pie-border;
        color: #000;
        background-color: $bg-grey;
      }
    }
  }
</style>
