<template>
  <div class="main">
    <Navbar/>
    <h1 class="main__title">Using the validateStatus config option, you can define HTTP code(s) that should throw an
      error.</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '@/components/Navbar/Navbar.vue';

export default defineComponent({
  name: 'LayoutMain',
  components: {Navbar},
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
.main {
  width: 100%;
  height: 100%;
  display: flex;

  &__title {
    padding-top: 20px;
  }
}
</style>
