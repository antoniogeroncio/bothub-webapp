<template>
  <entity-text-highlighted-input
    :maxlength="max_length"
    v-model="value"
    @input="update($event)"
    :entities="entities"
    @selectedRange="onSelectedRange($event)" />
</template>

<script>
import EntityTextHighlightedInput from '@/components/example/EntityTextHighlightedInput';

const components = {
  EntityTextHighlightedInput,
};

export default {
  components,
  props: {
    max_length: {
      type: Number,
    },
    initialData: {
      type: String,
    },
    formData: {
      type: Object,
    },
    extra: {
      type: Object,
    },
  },
  mounted() {
    this.update();
  },
  data() {
    return {
      value: this.initialData || '',
      selectedRange: null,
    };
  },
  computed: {
    entities() {
      const { [this.extra.entities_field]: entities } = this.formData;
      return entities;
    },
  },
  methods: {
    update(a) {
      console.log(a, this.value);
      if (this.entities) {
        this.entities.forEach((entity) => {
          console.log(entity);
        });
      }
      this.$emit('input', this.value);
    },
    onSelectedRange(range) {
      this.selectedRange = range;
    },
  },
};
</script>
