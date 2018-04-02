<template>
  <div class="filter-bot">
      <div class="lists">
        <div class="list-item list-item--active">
          <div class="list-item-content">

            <div style="width: 100%;">
              <div style="position: relative;">
                <input type="text" value="What are the symptoms of zika virus?" placeholder="text" class="ant-input">
                <div class="hightlight-text">
                  <span>What are the symptoms of</span>
                  <span class="entity-select"> zika virus </span>
                  <span>?</span>
                </div>
              </div>
            </div>

          </div>
          <div class="list-item-tags">
            <span class="badge badge--warning">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
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
  name: 'BotFilter'
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

  input[type="text"] {
    padding: 0;
    height: 34px;
    border: none;
  }

  ::selection {
    background: $primary-color;
    color: #fff;
  }
}

//--------------------
// Hight Light Text
//--------------------
.entity-select {
  background-color: #F5A623;
  opacity: 1;
  border-radius: 10px;
  color: #FFF;
}

.hightlight-text {
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  pointer-events: none;
  padding: 5px 8px;
  white-space: pre;
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
