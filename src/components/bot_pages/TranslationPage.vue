<template>
  <div class="container">
    <div class="content">
      <div class="translation-item">
        <h2 class="translation-item__title">Intent</h2>

        <div class="translation-item__content">
          <div class="original-text">
            Your phrase
          </div>

          <div class="translation-text">
            <input type="text" placeholder="Votre phrase">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslationPage'
}
</script>

<style lang="scss" scoped>

//----------------
// Translation
//----------------

.translation-item {
  width: 100%;
}

.translation-item__title {

}

.translation-item__content {
  display: flex;
}

.original-text,
.translation-text {
  border-radius: 5px;
  background-color: #F6F6F6;
  margin: 15px;
  width: calc(50% - 30px);

}

.original-text {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.translation-text {
  input {
    border: none;
    margin: 0;
    padding: 10px 20px;
    background-color: #F6F6F6;
    outline: none;
    transition: all .2s ease-in-out;

    &::-webkit-input-placeholder {
      color: #B7B7B7;
      transition: all .2s ease-in-out;
    }
    &::-moz-placeholder {
      color: #B7B7B7;
      transition: all .2s ease-in-out;
    }
    &:-ms-input-placeholder {
      color: #B7B7B7;
      transition: all .2s ease-in-out;
    }
    &:-moz-placeholder {
      color: #B7B7B7;
      transition: all .2s ease-in-out;
    }

    &:focus {
      background-color: darken(#F6F6F6, 5%);

      &::-webkit-input-placeholder {
        color: darken(#F6F6F6, 5%);
      }
      &::-moz-placeholder {
        color: darken(#F6F6F6, 5%);
      }
      &:-ms-input-placeholder {
        color: darken(#F6F6F6, 5%);
      }
      &:-moz-placeholder {
        color: darken(#F6F6F6, 5%);
      }
    }
  }
}
</style>
