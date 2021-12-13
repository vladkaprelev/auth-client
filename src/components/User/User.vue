<template>
  <div>
    <!--    <Button text="user" @handleButton="handleButton"/>-->
    <!--    <Button text="refresh" @handleButton="handleRefresh"/>-->
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LocalStorage from '@/api/LocalStorage';
import Button from '@/components/Button/Button.vue';
import {mapActions} from 'vuex';

export default defineComponent({
  name: 'User',
  components: {Button},
  props: {
    msg: String,
  },
  data() {
    return {
      user: JSON.parse(LocalStorage.get('user'))
    };
  },
  mounted() {
    console.log(JSON.parse(LocalStorage.get('user')));
  },
  beforeDestroy() {
  },
  methods: {
    ...mapActions(['getUsers', 'refresh']),
    handleButton() {
      this.getUsers();
    },
    handleRefresh() {
      this.refresh();
    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

</style>
