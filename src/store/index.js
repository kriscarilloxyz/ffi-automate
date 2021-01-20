import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {},
    loading: true,
    user: false
  },
  mutations: {
    set_snackbar (state, payload) { state.snackbar = payload },
    set_loading (state, payload) { state.loading = payload },
    set_user (state, payload) { state.user = payload }
  },
  actions: {
  },
  modules: {
  }
})
