import { apolloClient } from '../../graphql/apollo'
import {
  TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../../graphql/queries'

const state = () => ({
  todos: [],
})

const getters = {}

const actions = {
  async getTodos({ commit }) {
    const { data } = await apolloClient.query({ query: TODOS })
    commit('setTodos', data)
  },
  async createTodo({ commit }, input) {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_TODO,
      variables: { input: input },
    })
    commit('addTodo', data)
  },
  async updateTodo({ dispatch }, { id, input }) {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_TODO,
      variables: { id, input: input },
    })
    if (data) {
      await dispatch('getTodos')
    }
  },
  async deleteTodo({ commit }, id) {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_TODO,
      variables: { id },
    })
    if (data.deleteTodo) {
      await commit('removeTodo', id)
    }
  },
}

const mutations = {
  setTodos(s, data) {
    s.todos = data.todos
  },
  addTodo(s, data) {
    s.todos.push(data.createTodo)
  },
  removeTodo(s, id) {
    const index = s.todos.findIndex((t) => t.id === id)
    s.todos.splice(index, 1)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
