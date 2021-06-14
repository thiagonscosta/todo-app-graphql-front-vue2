import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import apolloProvider from './graphql/apollo'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  apolloProvider,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
