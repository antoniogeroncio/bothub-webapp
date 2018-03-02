<template>
  <div class="content">
    <div class="container">
      <div class="columns">
        <div class="comment">
          <input type="text" name="" id="" placeholder="Comment">
          <button class="btn btn-default" type="submit">Publish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Issues'
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/_colors';

.comment {
  background-color: $grey;
  width: 100%;
  display: flex;
  padding: 0 ;
  border-radius: 5px;
  margin-top: 40px;

  input[type=text] {
    background-color: transparent;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    margin: 2px 0 2px 2px;
    border-radius: 4px 0 0 4px;

    &:focus {
      background-color: $bg-grey;
    }
  }
  .btn {
    margin: 10px;
  }
}
</style>
