<template>
  <button class="button" @click="handleButton">{{ text }}</button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Button',
  components: {},
  props: {
    text: String,
  },
  data() {
    return {};
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    handleButton() {
      this.$emit('handleButton');
    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

</style>
