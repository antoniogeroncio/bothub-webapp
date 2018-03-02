<template>
  <div class="comment-message">
    <span class="message-author">{{ message_author }}</span>
    <span class="message-date">{{ message_date }}</span>
    <div class="message-text">
      {{ message_text }}
    </div>
    <div class="message-action">
      <a href="#" class="btn">Reply <i class="material-icons">reply</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComment',
  data () {
    return {
      message_author: 'Nome do autor',
      message_text: 'I want to know how to figure out session table ,thanks! session table ,thanks! session table ,thanks! session table ,thanks! session.',
      message_date: 'September 25, 2017'
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/_colors';

  .comment-message {
    position: relative;
    border-top: 1px solid #cccccc;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    &:last-child {
      border-bottom: 1px solid #cccccc;
    }

    .message-author,
    .message-date {
      width: 50%;
      font-size: 12px;
      color: $dark-grey;
    }
    .message-date {
      text-align: right;
    }
    .message-text {
      width: 100%;
      margin: 5px 0;
      font-size: 15px;
    }
    .message-action {
      .btn {
        background-color: transparent;
        border: none;
        padding: 0;
        text-transform: none;
        font-weight: 400;

        .material-icons {
          font-size: 14px;
          margin-left: 3px;
        }

        &:hover {
          color: $primary-color;
        }
      }
    }
  }
</style>
