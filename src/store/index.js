import vue from 'vue'
import Vuex from 'vuex'
import { COUNT,USER } from './mutation_types'

vue.use(Vuex)

const state = {
  count: 1,
  user: localStorage["userinfo"] ? JSON.parse(localStorage["userinfo"]): {},
}

 const mutations = {
  [COUNT](state, data) {
    state.count += data.count
  },
  [USER](state, data) {
    state.user = data
  }
  
}

 const actions = {
  changeCount: (context) => {
    context.commit("COUNT",{count: 10})
  },
  getUserInfo(context) {
    context.commit('USER',{A:1})
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})