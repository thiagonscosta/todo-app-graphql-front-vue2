<template>
  <v-toolbar :color="appBarColor" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!status.loggedIn" to="/signup" text>Sign up</v-btn>
      <v-btn v-if="!status.loggedIn" to="/login" text>Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppBar',
  data() {
    return {
      color: 'primary',
    }
  },
  computed: {
    ...mapState('userModule', ['status']),
    appBarColor() {
      return !this.$vuetify.theme.dark ? 'primary' : 'grey darken-4'
    },
  },
}
</script>
