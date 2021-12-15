<template>
  <input
    class="w-full border-2 p-3 rounded outline-none"
    type="text"
    :class="{
      'border-red-500 focus:border-red-500': $v.userLogin.$error,
      'focus:border-purple-500 border-gray-200 ': !$v.userLogin.$error,
    }"
    placeholder="E-mail"
    v-model="$v.userLogin.$model"
  />
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      userLogin: '',
    }
  },
  validations: {
    userLogin: {
      required,
      email,
    },
  },
}
</script>

<style>
</style>