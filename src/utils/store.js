import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    curCity: '昆明',
  },
  mutations: {
    updateCity: (state, change) => {
      state.curCity = change
    }
  }
})
export default store
