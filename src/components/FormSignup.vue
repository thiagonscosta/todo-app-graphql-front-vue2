<template>
  <form>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn type="submit" class="mt-4" tile block>Create account</v-btn>
  </form>
</template>

<script>
export default {
  name: 'FormSignup',
}
</script>
