<template>
<div class="container">
  <div class="content">
    <div class="col col-100">
      <h2 class="title-list">Know_symptoms</h2>
      <ul class="lists">
        <li class="list-item list-item--active">
          <div class="list-item-content">
            What are the symptoms of zika virus? <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
          </div>
          <div class="list-item-tags">
            <span class="badge badge--danger">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
            <span class="badge badge--warning">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
            <span class="badge badge--success">Diseases <a href="#"><i class="material-icons">cancel</i></a></span>
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
  name: 'Sentence'
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_colors";

.list-item {
  position: relative;
  display: block;
  flex-direction: column;
  padding: 0;

  &:hover,
  &--active {
    .list-item-content {
      background-color: #fff;
      box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.3);
    }
  }
}

.list-item-content {
  background-color: #F6F6F6;
  display: flex;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  position: relative;

  .material-icons {
    position: absolute;
    right: 20px;
    color: #C3C3C3;
    transition: all 0.2s ease-in-out;
  }
}

.list-item__action {
  &:hover {
    .material-icons {
      color: $primary-color;
    }
  }
}

.list-item-tags {
  background-color: #E3E3E3;
  width: 100%;
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
}

.badge {
  display: inline-flex;
  position: relative;
  align-items: center;

  a {
    display: inherit;
  }

  .material-icons {
    font-size: 14px;
    margin-left: 5px;
    color: #ffffff;
  }
}
</style>
