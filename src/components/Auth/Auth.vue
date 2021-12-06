<template>
  <form class="auth-form" @submit.prevent="checkValidation">
    <h1>Авторизация</h1>
    <TextInput id="login" type="email" text="Email" :required="true" @handleInput="handleEmailInput"/>
    <TextInput id="password" type="password" text="Пароль" :required="true" @handleInput="handlePasswordInput"/>
    <Button text="Авторизироваться"/>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TextInput from '@/components/Input/TextInput.vue';
import {emailReg} from '@/globalVarible/globalVarible';
import Button from '@/components/Button/Button.vue';
import {mapActions} from 'vuex';

export default defineComponent({
  name: 'Auth',
  components: {Button, TextInput},
  props: {
    msg: String,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    ...mapActions(['authorization']),
    handleEmailInput(value: string) {
      this.email = value;
    },
    handlePasswordInput(value: string) {
      this.password = value;
    },

    checkValidation() {
      console.log(this.validEmail, this.validPassword);
      this.authorization({email: this.email, password: this.password});
    }
  },
  computed: {
    validEmail() {
      return emailReg.test(this.email);
    },
    validPassword() {
      return this.password.length > 4;
    }
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/colors";

.auth-form {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
}
</style>
