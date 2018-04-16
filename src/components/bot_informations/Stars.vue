<template>
  <li class="bot-summary__item">
    <span>
      <span class="bot-summary__item-label"><slot/> stars</span>
      <i class="material-icons">grade</i>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/_colors";
  .bot-summary__item {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 30px;

    .material-icons {
      margin-left: 10px;
      font-size: 16px;
    }

    a {
      display: flex;
      align-items: center;
      color: $dark-grey;
      text-decoration: none;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: $primary-color;
      }
    }

    @media (max-width: 992px) {
      margin-left: 10px;
      .material-icons {
        margin-left: 4px;
      }
    }
  }
</style>
