<template>
  <aside class="navbar">
    <div class="navbar__text navbar__text_red"></div>
    <p>{{ user.email }}</p>
    <button class="navbar__logout" @click="handleLogout">Logout</button>
    <Toggle/>
  </aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapActions} from 'vuex';
import LocalStorage from '@/api/LocalStorage';
import Toggle from '@/components/Toggle/Toggle.vue';

export default defineComponent({
  name: 'Navbar',
  components: {Toggle},
  props: {},
  data() {
    return {
      user: JSON.parse(LocalStorage.get('user'))
    };
  },
  mounted() {

  },
  beforeDestroy() {
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
    },
    handleToggle() {

    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.navbar {
  width: 320px;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  &__logout {
    margin-bottom: 30px;
  }
}
</style>
