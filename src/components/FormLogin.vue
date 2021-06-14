<template>
  <form @submit.prevent="login">
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn type="submit" class="mt-4" tile block>Login</v-btn>
  </form>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      const { password, email } = this
      const input = { password, email }
      this.$emit('login', input)
    },
  },
}
</script>
