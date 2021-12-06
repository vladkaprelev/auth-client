<template>
  <router-view/>
  <div class="notification">
    <Notifications :notifications="notifications"/>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import EventObserver from "@/classes/EventObserver";
import Notifications from "@/components/Notifications/Notifications";

export default defineComponent({
  name: 'App',
  components: {Notifications},
  props: {},
  data() {
    return {
      notifications: []
    };
  },
  mounted() {
    EventObserver.subscribe('notification', (data) => {
      console.log(data)
      if (this.notifications.length === 5) {
        this.notifications.shift()
      }
      this.notifications.push(data)
    })
  },
  beforeDestroy() {
  },
  methods: {},
  computed: {},
});
</script>
<style lang="scss">
@use "~@/assets/scss/main.scss";

#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
}


</style>
