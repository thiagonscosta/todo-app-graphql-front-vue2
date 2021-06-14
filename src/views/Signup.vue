<template>
  <v-content>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <v-card class="pa-10">
            <FormSignup />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import FormSignup from '@/components/FormSignup.vue'

export default {
  name: 'SignupPage',
  components: {
    FormSignup,
  },
}
</script>
