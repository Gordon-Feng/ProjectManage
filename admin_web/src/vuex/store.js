import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AccountInfo:{
      account:'',
      role:''
    }
  },
  mutations: {
    UpdateAccountInfo (state , AccountInfo) {//更新账号信息
      state.AccountInfo = AccountInfo
    },
  }
})