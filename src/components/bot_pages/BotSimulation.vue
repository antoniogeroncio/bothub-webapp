<template>
  <div class="simulation">
    <b-collapse :open="false">
      <button class="simulation__title" slot="trigger">Simulation</button>
      <div class="simulation__content">

        <div class="find">
          <textarea class="find-text"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    minlength="10"
                    maxlength="100"
                    placeholder="Find the entities from the intentions of the dialogue.">
          </textarea>
        </div>

        <div class="results">

          <div class="result-item">
            <h4 class="result-item__title">
              What are the symptoms of zika virus?
            </h4>

            <div class="result-item__label">
              <span class="label-item">Intent:</span>
              to know_symptoms
            </div>

            <ul class="entity-list">
              <li class="entity-list-item">
                <div class="entity-label">
                  <span>Entity:</span>
                  virus
                </div>
                <div class="entity-value">
                  <span>Value:</span>
                  zika
                </div>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'BotSimulation'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_colors';

  .simulation {
    position: fixed;
    bottom: 0;
    right: 30px;
    background-color: #F8F8F8;
    border-radius: 10px 10px 0 0;
    width: 350px;
    z-index: 900;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  }

  .simulation__title {
    color: $dark-green2;
    border: none;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    font-weight: 600;
    margin: 0;
    display: block;
    font-size: 14px;
    background-color: transparent;
    border-radius: 10px 10px 0 0;
    outline: none;
    font-family: "Encode Sans", sans-serif;
  }

  .simulation__content {
    border-top: 1px solid $dark-green2;
    padding: 20px;
  }

  .find {
    width: 100%;
    >.find-text {
      width: 100%;
      border: 1px solid rgba(0,0,0,.07);
      background-color: #fff;
      resize: none;
      padding: 10px;
      outline: none;
      border-radius: 5px;
      color: #60605B;
      height: 100px;
      font-family: "Encode Sans", sans-serif;

      &::-webkit-input-placeholder {
        color: darken(#F6F6F6, 30%);
      }
      &::-moz-placeholder {
        color: darken(#F6F6F6, 30%);
      }
      &:-ms-input-placeholder {
        color: darken(#F6F6F6, 30%);
      }
      &:-moz-placeholder {
        color: darken(#F6F6F6, 30%);
      }
    }
  }

  //-----------------------
  // Results
  //-----------------------

  .result-item {
    margin: 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .result-item__title {
    color: #000;
    position: relative;
    padding-left: 15px;
    font-size: 17px;
    margin-bottom: 10px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 10px;
      width: 5px;
      height: 5px;
      background-color: $primary-color;
    }
  }

  .result-item__label {
    padding-left: 30px;
    color: #A6A6A6;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .label-item {
    color: rgba(0,0,0,.6);
    margin-right: 5px;
  }

  // Entity List

  .entity-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .entity-list-item {
    padding-left: 30px;
    color: #A6A6A6;
    font-size: 14px;
    display: flex;
  }

  .entity-label {
    width: 50%;

    span {
      color: rgba(0,0,0,.6);
      margin-right: 5px;
    }
  }

  .entity-value {
    width: 50%;

    span {
      color: rgba(0,0,0,.6);
      margin-right: 5px;
    }
  }
</style>
