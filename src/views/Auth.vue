<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card>
          <v-tabs grow>
            <v-tab> Login </v-tab>
            <v-tab> Signup </v-tab>
            <v-tab-item>
              <div class="pa-10">
                <FormLogin @login="submitLogin" />
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="pa-10">
                <FormSignup />
              </div>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
import FormSignup from '../components/FormSignup.vue'

export default {
  name: 'Auth',
  components: {
    FormLogin,
    FormSignup,
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
