<template>
  <div class="container">
    <filter-bot/>

    <div class="content">
      <div class="col col-50">
        <h2 class="title-list">Intent</h2>
        <ul class="lists intent__list">
          <li class="list-item">
            <div class="list-item-content">
              diagnosis <a class="list-item__action" href="#"><i class="material-icons">refresh</i></a>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item-content">
              Know_symptoms <a class="list-item__action" href="#"><i class="material-icons">refresh</i></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="col col-50">
        <h2 class="title-list">Entity</h2>
        <ul class="lists entity__list">
          <li class="list-item">
            <div class="list-item-content">
              persona <a class="list-item__action" href="#"><i class="material-icons">refresh</i></a>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item-content">
              local <a class="list-item__action" href="#"><i class="material-icons">refresh</i></a>
            </div>
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

</style>
