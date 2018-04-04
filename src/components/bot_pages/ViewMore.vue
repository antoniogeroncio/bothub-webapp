<template>
<div class="view-more">
  <button class="btn-view-more">View More</button>
</div>
</template>
<script>
export default {
  name: 'ViewMore'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';

  .view-more {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .btn-view-more {
    background-color: transparent;
    text-transform: inherit;
    color: $dark-green2;
    border: none;
    padding: 0;

    &:hover {
      color: $primary-color;
   }
  }
</style>
