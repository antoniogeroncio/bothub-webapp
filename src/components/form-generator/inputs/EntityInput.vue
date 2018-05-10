<template>
  <div class="columns is-mobile align-center">
    <div class="column">
      {{ text }}
    </div>
    <div class="column">
      <b-input
        type="text"
        :maxlength="max_length"
        v-model="value.entity"
        @input="update()" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    max_length: {
      type: Number,
    },
    initialData: {
      type: Object,
    },
    extra: {
      type: Object,
    },
    formData: {
      type: Object,
    },
    formRefs: {
      type: Object,
    },
  },
  mounted() {
    this.update();
  },
  data() {
    const { selectedRange } = this.formRefs[`${this.extra.text_field}_input`][0];
    return {
      value: this.initialData || {
        start: (selectedRange && selectedRange.start) || 0,
        end: (selectedRange && selectedRange.end) || 0,
        entity: '',
      },
    };
  },
  computed: {
    text() {
      const { [this.extra.text_field]: text } = this.formData;
      return text && text.substr(this.value.start, this.value.end - this.value.start);
    },
  },
  methods: {
    update() {
      this.$emit('input', this.value);
    },
  },
};
</script>
