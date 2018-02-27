<template>
  <div class="container">
    <filter-bot/>

    <div class="content">
      <div class="col col-50">
        <h2 class="title-list">Intent</h2>
        <ul class="lists intent__list">
          <li class="list-item">
            diagnosis <i class="material-icons">refresh</i>
          </li>
          <li class="list-item">
            Know_symptoms <i class="material-icons">refresh</i>
          </li>
        </ul>
      </div>
      <div class="col col-50">
        <h2 class="title-list">Entity</h2>
        <ul class="lists entity__list">
          <li class="list-item">
            persona <i class="material-icons">refresh</i>
          </li>
          <li class="list-item update-available">
            local <i class="material-icons">refresh</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBot from '../FilterBot'

export default {
  name: 'Update',
  components: {
    FilterBot
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';

.list-item__tags-list {
  background-color: #ccc;
  width: 100%;
}
</style>
