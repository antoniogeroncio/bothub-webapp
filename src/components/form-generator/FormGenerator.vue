<template>
  <div>
    <messages :msgs="msgs" />
    <b-field
      v-for="field in fields"
      v-show="field.type !== 'hidden'"
      :key="field.name"
      :label="field.label"
      :type="field.errors && 'is-danger'"
      :message="field.errors || field.helpText"
      :addons="false">
      <component
        v-if="field.inputComponent && !field.child"
        :ref="`${field.name}_input`"
        :is="field.inputComponent"
        v-bind="field.inputProps"
        v-model="formData[field.name]"
        @input="update()"
        :initialData="initialData[field.name]"
        :extra="field.extra"
        :formData="data"
        :formRefs="$refs" />
      <div v-if="field.inputComponent && !!field.child">
        <div
          v-for="(item, i) in formData[field.name]"
          :key="item.id"
          class="columns is-mobile align-center">
          <div class="column">
            <component
              :is="field.inputComponent"
              :ref="`${field.name}_input_${i}`"
              v-bind="field.inputProps"
              v-model="formData[field.name][i].value"
              @input="update()"
              :extra="field.extra"
              :formData="data"
              :formRefs="$refs" />
          </div>
          <div class="column is-narrow">
            <button
              type="button"
              class="delete"
              @click="deleteItem(field, i)" />
          </div>
        </div>
        <div>
          <button
            type="button"
            class="button is-primary"
            @click="addItem(field)">Add</button>
        </div>
      </div>
    </b-field>
  </div>
</template>

<script>
import uuid from 'uuid/v4';

import Messages from '@/components/shared/Messages';
import StringInput from './inputs/StringInput';
import ChoiceInput from './inputs/ChoiceInput';
import BooleanInput from './inputs/BooleanInput';
import MultipleChoice from './inputs/MultipleChoice';
import TextInput from './inputs/TextInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

const relatedInputComponent = {
  field: StringInput,
  string: StringInput,
  slug: StringInput,
  choice: ChoiceInput,
  boolean: BooleanInput,
  'multiple choice': MultipleChoice,
  text: TextInput,
  email: EmailInput,
  password: PasswordInput,
  hidden: StringInput,
};

const newItem = () => ({
  id: uuid(),
  value: null,
});

const components = {
  Messages,
};

export default {
  name: 'FormGenerator',
  components,
  props: {
    schema: {
      required: true,
      type: Object,
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
    initialData: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    Object.keys(this.schema)
      .forEach((name) => {
        const { child } = this.schema[name];
        if (child) {
          this.formData[name] = this.initialData[name] || [];
        }
      });
    this.update();
  },
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    fields() {
      return Object.keys(this.schema)
        .map((name) => {
          const {
            type,
            child,
            label,
            style,
            help_text: helpText,
            ...inputProps
          } = this.schema[name];
          const childType = child && child.type;

          if (style &&
            typeof style.show === 'boolean' &&
            !style.show) return false;

          return {
            type,
            child: child || false,
            name,
            label,
            helpText,
            inputProps,
            extra: style,
            inputComponent: relatedInputComponent[childType || type],
            errors: this.errors[name],
          };
        })
        .filter(field => !!field);
    },
    msgs() {
      /* istanbul ignore next */
      return (this.errors.non_field_errors &&
        this.errors.non_field_errors.map(text => ({ text, class: 'error' }))) || [];
    },
    data() {
      const out = Object.assign({}, this.formData);
      Object.keys(this.schema)
        .forEach((name) => {
          const { child: chyld } = this.schema[name];
          if (chyld && out[name]) {
            out[name] = out[name].map(({ value }) => value);
          }
        });
      return out;
    },
  },
  methods: {
    update() {
      this.formData = Object.assign({}, this.formData);
      this.$emit('input', this.data);
    },
    deleteItem(field, index) {
      const value = this.formData[field.name];
      value.splice(index, 1);
      this.update();
    },
    addItem(field) {
      const value = this.formData[field.name];
      value.push(newItem());
      this.update();
    },
  },
};
</script>
