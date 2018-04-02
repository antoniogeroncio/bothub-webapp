<template>
  <div class="container">
    <div class="content">

      <bot-filter/>

      <div class="col col-50">
        <h2 class="title-list">Intent</h2>
        <ul class="lists intent__list">
          <li class="list-item list-item--active">
            <div class="list-item-content">
              diagnosis <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
            </div>
            <div class="list-item-tags">
              <span class="badge badge--danger">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
              <span class="badge badge--warning">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
              <span class="badge badge--success">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item-content">
              Know_symptoms <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="col col-50">
        <h2 class="title-list">Entity</h2>
        <ul class="lists entity__list">
          <li class="list-item">
            <div class="list-item-content">
              persona <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item-content">
              local <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BotFilter from './BotFilter'
export default {
  name: 'Bot',
  components: {
    BotFilter
  }
}
</script>

<style lang="scss" scoped>

</style>
