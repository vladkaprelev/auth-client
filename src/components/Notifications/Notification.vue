<template>
  <div :class="['notification',`notification_${notification.type}`]">
    <p class="notification__message"> {{ notification.message }}</p>
    <span class="notification__icon" @click="handleClose"><IconCross/></span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconCross from '@/components/Icons/IconCross.vue';

export default defineComponent({
  name: 'Notification',
  components: {IconCross},
  props: {
    notification: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    handleClose() {
      console.log(this.notification);
    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.notification {
  top: 16px;
  right: 16px;
  position: absolute;
  background: rgba(45, 45, 47, 0.7);
  backdrop-filter: blur(5px);
  color: #E1E1E1;
  border-radius: 20px;
  width: 340px;
  height: 100px;


  &__icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
}
</style>
