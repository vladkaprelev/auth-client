<template>
  <div class="body" :class="[isDarkMode ? 'theme--dark' : 'theme--default']">

    <router-view/>
    <div class="notification">
      <Notification :notification="notification" v-if="notification"/>
    </div>
  </div>

</template>
<script>
import {defineComponent} from "vue";
import EventObserver from "@/classes/EventObserver";
import Notification from "@/components/Notifications/Notification";
import {mapState} from "vuex";

export default defineComponent({
  name: 'App',
  components: {Notification},
  props: {},
  data() {
    return {
      notification: null
    };
  },
  mounted() {
    EventObserver.subscribe('notification', (data) => {
      console.log(data)
      this.notification = (data)
    })
  },
  beforeDestroy() {
  },
  methods: {},
  computed: {
    ...mapState(['isDarkMode'])

  },
});
</script>
<style lang="scss">
@use "~@/assets/scss/main.scss";

.body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
}


</style>
