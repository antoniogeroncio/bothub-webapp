<template>
  <div class="hacker-news-list">
    <ul class="lists">
      <li v-bind:key="item.key" class="hacker-news-item list-item" v-for="(item) in list">
        <div class="list-item-content">
          <span v-text="item.title"></span>
          <a class="list-item__action" href="#"><i class="material-icons">cancel</i></a>
        </div>
      </li>
    </ul>

    <div class="view-more">
      <button class="btn-view-more" v-show="distance < 0" @click="manualLoad">View More</button>
    </div>

    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" spinner="spiral">

    <span slot="no-more">
      No more items
    </span>
    </infinite-loading>
  </div>

</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'

const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'

export default {
  name: 'IntentItem',
  data () {
    return {
      list: [],
      distance: -Infinity
    }
  },
  methods: {
    infiniteHandler ($state) {
      axios.get(api, {
        params: {
          page: this.list.length / 20 + 1
        }
      }).then(({data}) => {
        if (data.hits.length) {
          this.list = this.list.concat(data.hits)
          $state.loaded()
          if (this.list.length / 20 === 10) {
            $state.complete()
          } else if (data.page % 3 === 0) {
            this.distance = -Infinity
          }
        } else {
          $state.complete()
        }
      })
    },
    manualLoad () {
      this.distance = 100
      this.$nextTick(() => {
        this.$refs.infiniteLoading.attemptLoad()
      })
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/colors';

  .view-more {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .btn-view-more {
    background-color: transparent;
    text-transform: inherit;
    color: $dark-green2;
    border: none;
    padding: 0;

    &:hover {
      color: $primary-color;
    }
  }
</style>
