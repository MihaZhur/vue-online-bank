import { createStore, createLogger } from 'vuex'
import authModule from './modules/auth.module'
import requestModule from './modules/request.module'
const plugins = []

// if(process.env.NODE_ENV === 'development'){
//   plugins.push(createLogger())
// }
export default createStore({
  plugins,
  state:   {

      message: null,
      sitebar: false
   
  },
  getters: {
    sitebar: (state) => state.sitebar
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
 
    },
    clearMessage(state){
      state.message = null
    },
    sitebarClose(state) {
      state.sitebar = false
    },
    sitebarOpen(state) {
      state.sitebar = true
    }
  },
  actions: {
    setMessageAction({commit}, message){
      console.log(1)
      commit('setMessage', message)
      console.log(message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    },
    sitebarClose({commit}){
      commit('sitebarClose')
    },
    sitebarOpen({commit}){
      commit('sitebarOpen')
    }
  },
  modules: {
    authModule,
    requestModule
  }
})
