<template>
  <v-list-item>
    <!-- <v-list-item-action> -->
      <v-checkbox :input-value="todo.done" @click="check(todo)"> </v-checkbox>
    <!-- </v-list-item-action> -->
    <v-list-item-content>
      <v-list-item-title v-if="!inEdition">
        <span>{{ todo.title }}</span>
      </v-list-item-title>
      <v-text-field
        v-if="inEdition"
        v-model="inEditionTodo"
        flat
        hide-details
        clearable
        autofocus
        @blur="cancelEdition"
        autocomplete="off"
        @keydown.enter="update"
        @click:clear="cancelEdition"
      ></v-text-field>
    </v-list-item-content>
    <div v-if="!inEdition">
      <v-btn icon @click="showAlertDialog" class="ml-4">
        <v-icon color="darken-2">mdi-bell-ring</v-icon>
      </v-btn>
      <v-btn icon @click="enableEdition()" class="ml-4">
        <v-icon color="darken-2">mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon class="ml-4" @click="deleteTodo(todo.id)">
        <v-icon color="darken-2">mdi-trash-can</v-icon>
      </v-btn>
    </div>
  </v-list-item>
</template>

<script>
import { dateMixin } from '../mixins/dateMixin'

export default {
  name: 'Todo',
  props: {
    todo: Object,
  },
  mixins: [dateMixin],
  data() {
    return {
      inEdition: false,
      inEditionTodo: null,
      show: false,
    }
  },
  computed: {
    lineThrough() {
      return this.todo.done ? 'text-decoration-line-through' : ''
    },
  },
  methods: {
    enableEdition() {
      this.inEdition = true
      this.inEditionTodo = this.todo.title
    },
    cancelEdition() {
      this.inEdition = false
      this.inEditionTodo = null
    },
    update() {
      this.$emit('update', this.todo.id, { title: this.inEditionTodo })
    },
    check(todo) {
      let done = null
      if (todo.done) {
        done = false
      } else {
        done = true
      }
      this.$emit('update', todo.id, { done })
    },
    deleteTodo(id) {
      this.$emit('delete', id)
    },
    showAlertDialog() {
      // this.show = !this.show
      this.$emit('showAlertDialog')
    },
  },
}
</script>
