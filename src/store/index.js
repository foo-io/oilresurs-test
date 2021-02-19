import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 'auth', // default open auth tab
  },
  mutations: {
    changeTab: (state, current) => {
      state.tab = current
    }
  },
  actions: {
    changeTab: (ctx, current) => {
      ctx.commit('changeTab', current)
    }
  },
  getters: {
    getTab: state => state.tab,
  }
})
