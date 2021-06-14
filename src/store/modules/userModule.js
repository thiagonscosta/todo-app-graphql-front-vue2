import { apolloClient } from '../../graphql/apollo'
import { LOGIN } from '../../graphql/queries'

const status = localStorage.getItem('user')
  ? { loggedIn: true }
  : { loggedIn: false }

const state = () => ({
  user: JSON.parse(localStorage.getItem('user')) || '',
  token: localStorage.getItem('token') || '',
  status: status,
})

const getters = {
  userId: (s) => s.user.id,
}

const actions = {
  async login({ commit }, input) {
    const { data } = await apolloClient.mutate({
      mutation: LOGIN,
      variables: { input },
    })
    commit('setUser', data.login.user)
    commit('setToken', data.login.token)
  },
}

const mutations = {
  setUser(s, user) {
    s.user = user
    localStorage.setItem('user', JSON.stringify(s.user))
    s.status = { loggedIn: true }
  },
  setToken(s, token) {
    s.token = token
    localStorage.setItem('token', JSON.stringify(s.token))
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
