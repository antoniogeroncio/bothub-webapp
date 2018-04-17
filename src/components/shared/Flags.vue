<template>
  <ul class="card-bot__flags">
    <flag-item flag-name="EN"/>
    <flag-item flag-name="ES"/>
    <flag-item flag-name="PT"/>
    <flag-item flag-name="IT"/>
    <flag-item flag-name="NL"/>
    <flag-item flag-name="FR"/>
    <flag-item flag-name="DE"/>
  </ul>
</template>

<script>
import FlagItem from './FlagItem'
export default {
  name: 'Flags',
  components: {
    FlagItem
  }
}
</script>

<style lang="scss" scoped>

.card-bot__flags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    background-color: #fff;
    width: 100%;
    margin-top: 7px;
  }

  @media (max-width: 400px) {
    width: auto;
  }

  .flags-item {
    width: 15px;
    margin: 0 6px 0 0;

    &:last-child {
       margin-right: 0;
     }

    img {
      width: 100%;
    }
  }
}
</style>
