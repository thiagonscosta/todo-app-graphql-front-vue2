<template>
  <div class="d-flex justify-center align-center">
    <v-icon
      class="mr-2"
      :color="$vuetify.theme.dark ? 'darken-2' : 'yellow darken-2'"
      >mdi-white-balance-sunny</v-icon
    >
    <v-switch v-model="dark" @change="switchTheme"></v-switch>
    <v-icon
      class="ml-2"
      :color="$vuetify.theme.dark ? 'yellow darken-2' : 'darken-2'"
      >mdi-moon-waning-crescent</v-icon
    >
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  data() {
    return {
      dark: false,
    }
  },
  created() {
    this.dark = JSON.parse(localStorage.getItem('themeDark'))
  },
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = this.dark
      localStorage.setItem('themeDark', JSON.stringify(this.dark))
    },
  },
}
</script>
