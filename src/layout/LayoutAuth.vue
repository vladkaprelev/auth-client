<template>
  <div class="auth">
    <div class="auth__content">
      <div class="auth__block">
      </div>
    </div>
    <div class="auth__content">
      <Auth/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Auth from '@/components/Auth/Auth.vue';

export default defineComponent({
  name: 'LayoutAuth',
  components: {Auth},
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {},
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.auth {
  display: flex;
  width: 100%;
  height: 100%;

  &__block {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-self: center;
    flex-basis: 40%;

    &:first-child {
      flex-basis: 60%;
    }
  }
}
</style>
