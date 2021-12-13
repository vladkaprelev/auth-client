<template>
  <form class="auth-form" @submit.prevent="checkValidation">
    <div class="auth-form__titles">
      <h2 @click="handleTitle" class="auth-form__title"
          :class="{'auth-form__title_active': isAuth}">
        Авторизация
      </h2>
      <h2 @click="handleTitle" class="auth-form__title"
          :class="{'auth-form__title_active': !isAuth}">
        Регистрация
      </h2>
    </div>
    <TextInput id="login" type="email" text="Email" :required="true" @handleInput="handleEmailInput"/>
    <TextInput id="password" type="password" text="Пароль" :required="true" @handleInput="handlePasswordInput"/>
    <Button :text="setText"/>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TextInput from '@/components/Input/TextInput.vue';
import {emailReg} from '../../../globalVarible';
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
      isAuth: true,
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    ...mapActions(['authorization', 'registration']),
    handleEmailInput(value: string) {
      this.email = value;
    },
    handleTitle() {
      this.isAuth = !this.isAuth;
    },
    handlePasswordInput(value: string) {
      this.password = value;
    },

    checkValidation() {
      console.log(this.validEmail, this.validPassword);
      this.isAuth ?
          this.authorization({email: this.email, password: this.password}) :
          this.registration({email: this.email, password: this.password});

    }
  },
  computed: {
    validEmail() {
      return emailReg.test(this.email);
    },
    setText() {
      return this.isAuth ? 'Sign In' : 'Sign Up';
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

  &__titles {
    display: flex;
    margin-bottom: 10px;
  }

  &__title {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s ease;
    user-select: none;
    font-size: 18px;

    margin-right: 10px;

    &_active {
      order: -1;
      font-size: 24px;
    }
  }
}
</style>
