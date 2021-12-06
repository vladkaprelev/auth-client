<template>
  <li :class="['notification',`notification_${notification.type}`]">
    <h3>{{ notification.type }}</h3>
    <p class="notification__message"> {{ notification.message }}</p>
    <span class="notification__icon" @click="handleClose"><IconCross/></span>
  </li>
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
    },
    index: {
      type: Number,
      default: 0
    },
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
      console.log(this.index);
    }
  },
  computed: {},
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.notification {
  padding: 8px;
  background-color: #fff;
  box-shadow: $shadow;
  width: 320px;
  height: 60px;
  display: flex;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  user-select: none;
  margin-bottom: 8px;

  &_error {
    color: $accent;
    background-color: rgba($accent, 50%);
  }

  &__icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
}
</style>
