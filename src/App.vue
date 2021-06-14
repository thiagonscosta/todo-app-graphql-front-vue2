<template>
  <v-app>
    <BaseLayout>
      <template v-slot:main>
        <v-container fluid v-if="status.loggedIn">
          <v-row class="justify-end">
            <div class="mr-5">
              <ThemeSwitch />
            </div>
          </v-row>
        </v-container>
        <router-view />
      </template>
    </BaseLayout>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import BaseLayout from './layouts/BaseLayout.vue'
import ThemeSwitch from './components/ThemeSwitch.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
    ThemeSwitch,
  },
  created() {
    this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('themeDark'))
  },
  data() {
    return {
      value: false,
    }
  },
  computed: {
    ...mapState('userModule', ['status'])
  },
}
</script>
