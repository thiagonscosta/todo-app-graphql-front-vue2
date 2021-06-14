<template>
  <body>
    <header>
      <AppBar />
    </header>
    <v-main>
      <slot name="main">
        <slot name="switch-theme" />
      </slot>
    </v-main>
  </body>
</template>

<script>
import AppBar from '../components/AppBar.vue'

export default {
  name: 'BaseLayout',
  components: {
    AppBar,
  },
}
</script>
