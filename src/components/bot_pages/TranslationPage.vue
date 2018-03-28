<template>
  <div class="container">

    <div class="translation-filter">

      <div class="filter-item filter-item--primary">
        <b-field>
          <b-select placeholder="Filter Intent">
            <option
              v-for="option in data"
              :value="option.id"
              :key="option.id">
              {{ option.user.first_name }}
            </option>
          </b-select>
        </b-field>
      </div>

      <div class="filter-item">
        <b-field>
          <b-select placeholder="English" expanded>
            <option
              v-for="option in data"
              :value="option.id"
              :key="option.id">
              {{ option.user.language_name }}
            </option>
          </b-select>
        </b-field>
      </div>

      <div class="trasnlation-chart">
        <div class="pie" data-percent="75"><span class="pie-percent">75%</span></div>
      </div>

      <div class="filter-item">
        <b-field>
          <b-select placeholder="French" expanded>
            <option
              v-for="option in data"
              :value="option.id"
              :key="option.id">
              {{ option.user.language_name }}
            </option>
          </b-select>
        </b-field>
      </div>

    </div>

    <div class="content">

      <div class="translation-item">
        <h2 class="translation-item__title">Intent 1</h2>

        <div class="translation-item__content">
          <div class="original-text">
            Your phrase
          </div>

          <div class="translation-text">
            <input type="text" placeholder="Votre phrase">
          </div>
        </div>
      </div>

      <div class="translation-item">
        <h2 class="translation-item__title">Intent 1</h2>

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
const data = require('./data_test.json')
export default {
  name: 'TranslationPage',
  data() {
    return { data }
  }
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';
$pie-size: 50px;
$pie-border: 7px;

//----------------
// Filter
//----------------
.translation-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #D8D8D8;
}

.filter-item {
  margin: 0 20px;

  &--primary {
    position: absolute;
    left: 0;
  }
}

.trasnlation-chart {
  padding: 0 20px;
  .pie {
    width: $pie-size;
    height: $pie-size;
    .pie-percent {
      width: $pie-size - $pie-border * 2;
      height: $pie-size - $pie-border * 2;
      top: $pie-border;
      left: $pie-border;
      background-color: #CEEDE9;
      font-size: 12px;
      font-weight: 500;
      color: $dark-green2;
    }
  }
}

//----------------
// Translation
//----------------

.translation-item {
  width: 100%;
}

.translation-item__title {
  padding: 0 20px;
  font-size: 14px;
  margin: 30px 0 0;
}

.translation-item__content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: stretch;
}

.original-text,
.translation-text {
  border-radius: 5px;
  background-color: #F6F6F6;
  margin: 0 15px 10px 15px;
  width: calc(50% - 30px);

  @media (max-width: 768px) {
    width: 100%;
  }
}

.original-text {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 54px;
}

.translation-text {
  input {
    height: 54px;
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
