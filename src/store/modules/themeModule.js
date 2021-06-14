const dark = localStorage.getItem('darkTheme')
  ? localStorage.getItem('darkTheme')
  : false

const state = () => ({
  darkTheme: dark,
})

const getters = {}

const actions = {
  changeTheme({ commit }, value) {
    commit('setTheme', value)
  },
}

const mutations = {
  setTheme(s, value) {
    s.darkTheme = value
    localStorage.setItem('darkTheme', value)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
