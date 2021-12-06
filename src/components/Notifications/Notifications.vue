<template>
  <ul class="notifications">
    <Notification v-for="(notification,index) in notifications" :key="index" :notification="notification"
                  :index="index"/>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Notification from '@/components/Notifications/Notification.vue';

export default defineComponent({
  name: 'Notifications',
  components: {Notification},
  props: {
    notifications: {
      type: Array,
      default: () => []
    },
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

.notifications {

  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
