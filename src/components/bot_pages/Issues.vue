<template>
  <div class="content">

    <filter-issues/>

    <div class="container">
      <div class="comment">
        <input type="text" name="" id="" placeholder="Comment">
        <button class="btn btn-default" type="submit">Publish</button>
      </div>
    </div>
    <div class="container">
      <div class="comments-list">
        <card-comment/>
        <card-comment class="comment-message-reply"/>
        <card-comment/>
        <card-comment/>
        <card-comment/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterIssues from '../FilterIssues'
import CardComment from './CardComment.vue'

export default {
  name: 'Issues',
  components: {
    FilterIssues,
    CardComment
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/_colors';

.comment {
  background-color: #F6F6F6;
  width: 100%;
  display: flex;
  padding: 0 ;
  border-radius: 5px;
  margin: 0 0 40px 0;

  input[type=text] {
    background-color: transparent;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    margin: 0;
    border-radius: 4px 0 0 4px;
    height: 59px;
    color: $dark-grey;

    &:focus {
      background-color: $grey;
    }
  }
  .btn {
    margin: 10px;
  }
}

.comment-message-reply {
  margin-left: 40px;
}
</style>
