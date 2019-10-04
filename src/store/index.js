import vue from 'vue'
import Vuex from 'vuex'
import { COUNT,USER,SELECT_TAB,SET_LOADING } from './mutation_types'

vue.use(Vuex)

const state = {
  count: 1,
  loading: false,
  user: localStorage["userinfo"] ? JSON.parse(localStorage["userinfo"]): {},
  selectTab: sessionStorage.getItem('selectTab') ? JSON.parse(sessionStorage.getItem('selectTab')) : 'article'
}

 const mutations = {
  [COUNT](state, data) {
    state.count += data.count
  },
  [USER](state, data) {
    state.user = data
  },
  // tab栏改变状态
  [SELECT_TAB](state, data) {
    state.selectTab = data
  },
  [SET_LOADING](state,data) {
    state.loading = data
  }
}
const getters = {

}

 const actions = {
  changeCount: (context) => {
    context.commit("COUNT",{count: 10})
  },
  getUserInfo(context) {
    context.commit('USER',{A:1})
  },
  changeTab({ commit }, data) {
    commit('SELECT_TAB',data)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})