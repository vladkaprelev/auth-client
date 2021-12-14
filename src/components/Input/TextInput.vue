<template>
  <div class="text-input">
    <label :for="id" class="text-input__label">{{ text }}</label>
    <input class="text-input__input"
           :id="id"
           :type="type"
           :required="required"
           v-model="value" @input="handleInput">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TextInput',
  components: {},
  props: {
    type: String,
    id: String,
    text: String,
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ''
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    handleInput() {
      this.$emit('handleInput', this.value);
    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.text-input {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding-bottom: 24px;
  position: relative;

  &__input {
    padding: 11px 16px;
    min-width: 320px;
    border-radius: 12px;
    border: 1px solid;
    outline: none;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;

    &:hover {
      border: 1px solid;

    }

    &:active {
      border: 1px solid;

      background-color: #fff;
    }

    &:focus {
      border: 1px solid;

      background-color: #fff;
    }

    &_success {
      border: 1px solid;

      &:hover, &:active, &:focus {
        border: 1px solid;
      }
    }
  }

  &__error {
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    bottom: 8px;
  }

  &__label {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
}
</style>
