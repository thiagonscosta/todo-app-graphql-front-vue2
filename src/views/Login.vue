<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card class="pa-10">
          <FormLogin @login="submitLogin" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'LoginPage',
  components: {
    FormLogin,
  },
  methods: {
    submitLogin(input) {
      this.$store
        .dispatch('userModule/login', input)
        .then(() => this.$router.push('/home'))
    },
  },
}
</script>
