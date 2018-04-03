<template>
  <div class="filter-bot">
    <div class="lists">
      <div class="list-items">

        <div class="filter-bot__text">
          <input type="text" value="What are the symptoms of zika virus?" placeholder="Add your text" class="ant-input">
          <div class="hightlight-text">
            <span>What are the symptoms of</span>
            <span class="entity-select"> zika virus </span>
            <span>?</span>
          </div>
        </div>

        <div class="list-item-tags">
            <b-tag v-if="isTag1Active"
                type="is-primary"
                closable
                rounded
                @close="isTag1Active = false">
                Diseases
            </b-tag>
            <b-tag v-if="isTag2Active"
                type="is-danger"
                rounded
                closable
                @close="isTag2Active = false">
                Dengue
            </b-tag>
            <b-tag v-if="isTag3Active"
                type="is-success"
                rounded
                closable
                @close="isTag3Active = false">
                Zika Virus
            </b-tag>
        </div>
      </div>
    </div>

    <div class="filter-actions">
      <b-field>
        <b-select
          placeholder="Add Intent"
          expanded>
          <option value="diagnosis">diagnosis</option>
          <option value="treatment">treatment</option>
          <option value="know_symptoms">Know_symptoms</option>
          <option value="service_points">Service_points</option>
        </b-select>
      </b-field>

      <b-field>
        <b-select
          placeholder="Add Entity"
          expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </b-select>
      </b-field>

      <div>
        <button type="" class="btn btn-secondary">Publish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BotFilter',
  data () {
    return {
      isTag1Active: true,
      isTag2Active: true,
      isTag3Active: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_colors';

.filter-bot {
  width: 100%;
  background-color: #F4F4F4;
  display: flex;
  padding: 10px 30px 20px;
  border-radius: 0 0 2px 2px;
  flex-direction: column;
  margin-bottom: 30px;

  ::selection {
    background: $primary-color;
    color: #fff;
  }
}
.filter-bot__text {
  width: 100%;
  position: relative;
}

//--------------------
// Hight Light Text
//--------------------
$font-size: 14px;

.ant-input {
  padding: 4px 7px;
  width: 100%;
  height: 44px;
  cursor: text;
  font-size: $font-size;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all .3s;
  outline: none;

  &:active,
  &:focus {
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.3);
  }
}

.hightlight-text {
  position: absolute;
  top: 11px;
  left: 6px;
  color: transparent;
  pointer-events: none;
  padding: 0;
  font-size: $font-size;
  line-height: 1.5;
}

.entity-select {
  background-color: #F5A623;
  opacity: 1;
  border-radius: 10px;
  color: #FFF;
}

//--------------------
.filter-actions {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: flex-end;

  .field {
    width: calc(50% - 15px);
    margin-bottom: 20px;
    &:first-child {
      margin-right: 30px;
    }

    @media (max-width: 768px) {
      width: 100%;

      &:first-child {
        margin-right: 0;
      }
    }
  }
}
</style>
