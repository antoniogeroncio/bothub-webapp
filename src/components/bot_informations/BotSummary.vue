<template>
  <ul class="bot-card__summary">
    <issues>6430</issues>
    <forks>321</forks>
    <stars>647</stars>
    <li class="bot-summary__item icon-update">
      <span class="bot-summary__content"><i class="material-icons">refresh</i></span>
    </li>
  </ul>
</template>

<script>
import Stars from './Stars'
import Issues from './Issues'
import Forks from './Forks'

export default {
  name: 'BotSummary',
  components: {
    Forks,
    Stars,
    Issues
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_colors";

//------------------------------
// Bot Summary
//------------------------------
.bot-card__summary {
  color: $dark-grey;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 23px;
  right: 28px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    top: inherit;
    right: inherit;
    bottom: 20px;
    left: 20px;
  }

  .icon-update {
    display: none;
    @media (max-width: 768px) {
      display: initial;
    }
  }
}
</style>
