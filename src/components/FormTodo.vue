<template>
  <v-card tile>
    <v-list class="pa-0">
      <v-list-item>
        <v-text-field
          :label="'New todo input'"
          placeholder="What needs to be done?"
          v-model="title"
          flat
          hide-details
          clearable
          autofocus
          autocomplete="off"
          solo
          @keydown.enter="create"
        ></v-text-field>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FormTodo',
  data() {
    return {
      title: null,
    }
  },
  computed: {
    ...mapState('userModule', ['user']),
    ...mapGetters('userModule', ['userId']),
  },
  methods: {
    create() {
      const input = { title: this.title, userId: this.user.id }
      this.$emit('create', input)
      this.title = null
    },
  },
}
</script>
