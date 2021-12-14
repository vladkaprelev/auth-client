<template>
  <div class="toggle__wrap">
    <input type="checkbox" class="toggle" :checked="isDarkMode" @change="handleToggle">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapMutations, mapState} from 'vuex';

export default defineComponent({
  name: 'Toggle',
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      checked: false
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    ...mapMutations(['SET_THEME_MODE']),
    handleToggle() {
      this.SET_THEME_MODE(!this.isDarkMode);
    }
  },
  computed: {
    ...mapState(['isDarkMode'])
  },
});
</script>

<style scoped lang="scss">
@use "sass:map";
@import "~@/assets/scss/colors";

.toggle {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 51px;
  height: 31px;
  border-radius: 31px;
  background-color: rgba(#787880, 18%);
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    width: 27px;
    height: 27px;
    z-index: 10;
    background-color: #fff;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: left 0.3s, background-color 0.8s ease;

  }

  &:checked {
    &:before {
      //background-color: map.get($bg, "dark");
      left: 22px;
    }
  }
}
</style>
