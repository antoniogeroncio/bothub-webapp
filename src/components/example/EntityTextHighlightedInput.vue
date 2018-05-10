<template>
  <div class="highlighted">
    <div
      v-for="entity in entitiesBlocks"
      :key="entity.uuid"
      class="highlighted-item">
        <span class="highlighted-item-before">{{ entity.before }}</span>
        <span :class="`highlighted-item-text ${entity.colorClass}`">{{ entity.text }}</span>
      </div>
    <input
      ref="text"
      type="text"
      class="input"
      v-model="value"
      @input="update()"
      @select="emitSelectedRange()" />
  </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'EntityTextHighlightedInput',
  props: {
    max_length: {
      type: Number,
    },
    initialData: {
      type: String,
    },
    entities: {
      type: Array,
      default: () => ([]),
    },
  },
  mounted() {
    this.update();
  },
  data() {
    return {
      value: this.initialData || '',
    };
  },
  computed: {
    entitiesBlocks() {
      return this.entities
        .filter(value => value)
        .map(({ start, end }) => {
          const color = 'blue';
          const colorClass = `highlighted-item-text-${color}`;
          const before = this.value.substring(0, start);
          const text = this.value.substring(start, end);

          return {
            uuid: uuid(),
            start,
            end,
            color,
            colorClass,
            before,
            text,
          };
        });
    },
  },
  methods: {
    update() {
      this.$emit('input', this.value);
    },
    emitSelectedRange() {
      const { selectionStart, selectionEnd } = this.$refs.text;
      this.$emit('selectedRange', { start: selectionStart, end: selectionEnd });
    },
  },
};
</script>

<style lang="scss" scoped>
.highlighted {
  position: relative;
  background: #ffffff;

  input {
    background: none;
  }

  &-item {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0 0.625em;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    &-before,
    &-text {
      color: rgba(0, 0, 0, 0);
      white-space: pre;
    }

    &-text {
      $color-alpha: .5;
      &-red { background-color: rgba(255, 0, 0, $color-alpha); }
      &-green { background-color: rgba(0, 255, 0, $color-alpha); }
      &-blue { background-color: rgba(0, 0, 255, $color-alpha); }
      &-yellow { background-color: rgba(255, 255, 0, $color-alpha); }
      &-babyblue { background-color: rgba(0, 255, 255, $color-alpha); }
      &-pink { background-color: rgba(255, 0, 255, $color-alpha); }
    }
  }
}
</style>
