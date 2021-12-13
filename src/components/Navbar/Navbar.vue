<template>
  <aside class="navbar">
    <p>{{ user.email }}</p>
    <button class="navbar__logout" @click="handleLogout">Logout</button>
    <button class="navbar__logout" @click="handleToggle">toggle theme</button>
  </aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapActions} from 'vuex';
import LocalStorage from '@/api/LocalStorage';

export default defineComponent({
  name: 'Navbar',
  components: {},
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
      const app = document.querySelector('.app');
      if (app) {
        app.classList.toggle('app_dark');
      }
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
  box-shadow: $shadow;

  &__logout {
    margin-bottom: 30px;
  }
}
</style>
