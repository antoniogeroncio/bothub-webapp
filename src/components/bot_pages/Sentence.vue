<template>
<div class="container">
  <div class="content">
    <div class="col col-100">
      <h2 class="title-list">Know_symptoms</h2>
      <ul class="lists">
        <li class="list-item">
          <div class="list-item-content">
            What are the symptoms of zika virus? <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
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
        </li>
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="col col-100">
      <h2 class="title-list">Intent</h2>
      <ul class="lists">
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-content">
            Your phrase <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Sentence',
  data() {
    return {
      isTag1Active: true,
      isTag2Active: true,
      isTag3Active: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
