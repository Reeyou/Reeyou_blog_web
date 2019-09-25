import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {
  count: 0
}

 const mutations = {
  showStatus(state) {
    state.count ++
  }
}

 const actions = {
  changeStatus(context) {
    context.commit("showStatus")
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})