<template>
  <div class="bh-grid bh-grid--column">
    <div class="bh-grid__item">
      <h2>Card</h2>
      <example
        :component="SimpleCard"
        :code="simpleCardCode" />
    </div>
    <div class="bh-grid__item">
      <h3>Card with border shadows</h3>
      <example
        :component="CardShadows"
        :code="cardShadowsCode" />
    </div>
    <div class="bh-grid__item">
      <h3>Card without border</h3>
      <example
        :component="NoBorderCardExample"
        :code="noBorderCardExampleCode" />
    </div>
    <div class="bh-grid__item">
      <api :data="api" />
    </div>
  </div>
</template>

<script>
import Example from '@/Example';
import Api from '@/Api';
import SimpleCard from './examples/SimpleCard';
import simpleCardCode from '!!raw-loader!./examples/SimpleCard';
import CardShadows from './examples/CardShadows';
import cardShadowsCode from '!!raw-loader!./examples/CardShadows';
import NoBorderCardExample from './examples/NoBorderCard';
import noBorderCardExampleCode from '!!raw-loader!./examples/NoBorderCard';
import api from './api';


export default {
  name: 'Card',
  components: {
    Example,
    Api,
  },
  data() {
    return {
      SimpleCard,
      simpleCardCode,
      CardShadows,
      cardShadowsCode,
      NoBorderCardExample,
      noBorderCardExampleCode,
      api,

    };
  },
};
</script>

<style lang="scss">
  .item {
    text-align: center;
  }
</style>
