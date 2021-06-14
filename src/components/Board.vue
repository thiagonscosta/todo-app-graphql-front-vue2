<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="8">
        <FormTodo @create="createTodo" />
        <v-card class="mt-5" tile v-if="filteredTodos.length > 0">
          <v-card-actions class="justify-space-between">
            <div class="ml-3">
              <span class="body-2 mr-2">{{ filteredTodos.length }}</span>
              <span class="overline">Todos</span>
            </div>
            <v-btn-toggle class="elevation-0" mandatory v-model="visibility">
              <v-btn
                :key="key"
                :value="key"
                class="mx-0"
                color="primary"
                text
                small
                v-for="(val, key) in filters"
              >
                {{ key }}
              </v-btn>
            </v-btn-toggle>
          </v-card-actions>
          <v-divider></v-divider>
          <v-list two-line class="pa-0">
            <template v-for="(todo, pos) in filteredTodos">
              <Todo
                :key="todo.id"
                :todo="todo"
                @update="updateTodo"
                @check="updateTodo"
                @delete="deleteTodo"
                @showAlertDialog="showAlertDialog"
              />
              <v-divider
                v-if="pos < filteredTodos.length - 1"
                :key="`${pos}-div`"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <AlertDialog :open="openAlertDialog" @close="closeAlertDialog" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Todo from './Todo.vue'
import FormTodo from './FormTodo.vue'
import AlertDialog from './AlertDialog.vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done),
}

export default {
  name: 'Board',
  components: {
    Todo,
    FormTodo,
    AlertDialog,
  },
  data() {
    return {
      openAlertDialog: false,
      filters: filters,
      visibility: 'all',
    }
  },
  computed: {
    ...mapState('todoModule', ['todos']),
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
  },
  created() {
    this.loadTodos()
  },
  methods: {
    loadTodos() {
      this.$store.dispatch('todoModule/getTodos')
    },
    updateTodo(id, input) {
      this.$store.dispatch('todoModule/updateTodo', { id, input })
    },
    createTodo(input) {
      this.$store.dispatch('todoModule/createTodo', input)
    },
    checkTodo(id, done) {
      this.$store.dispatch('todoModule/updateTodo', id, { done })
    },
    deleteTodo(id) {
      this.$store.dispatch('todoModule/deleteTodo', id)
    },
    showAlertDialog() {
      console.log('oi')
      this.openAlertDialog = true
    },
    closeAlertDialog() {
      this.openAlertDialog = false
    },
  },
}
</script>
