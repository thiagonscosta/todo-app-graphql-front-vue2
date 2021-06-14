import Vue from 'vue'
import Vuex from 'vuex'
import todoModule from './modules/todoModule'
import userModule from './modules/userModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    todoModule,
    userModule,
  },
})
