import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 'auth', // default open auth tab
    auth: {
      status: false,
      email: null,
      password: null,
    },
    registration: {
      status: false, // default user non register
      email: null,
      password: null,
    }
  },
  mutations: {
    changeTab: (state, current) => {
      state.tab = current
    },
    authUser: (state, email, password) => {
      state.auth.status = true
      state.auth.email = email
      state.auth.password = password
    },
    registerUser: (state, email, password) => {
      state.registration.status = true
      state.registration.email = email
      state.registration.password = password
    },
  },
  actions: {
    changeTab: (ctx, current) => {
      ctx.commit('changeTab', current)
    },
    authUser: (ctx, email, password) => {
      ctx.commit('authUser', email, password)
    },
    registerUser: (ctx, email, password) => {
      ctx.commit('registerUser', email, password)
    },
  },
  getters: {
    getTab: state => state.tab,
    getAuthStatus: state => state.auth.status,
    getRegistrationStatus: state => state.registration.status,
  }
})
