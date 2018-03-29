<template>
  <div class="login">

  </div>
</template>

<script>
export default {
  name: 'ModalLogin',
}
</script>

<style lang="scss" scoped>
  .topbar-action-buttom {
    position: absolute;
    right: 90px;

    .btn {
      padding: 10px 20px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
</style>
