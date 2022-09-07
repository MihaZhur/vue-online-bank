import { createStore, createLogger } from 'vuex'
import authModule from './modules/auth.module'
const plugins = []

if(process.env.NODE_ENV === 'development'){
  plugins.push(createLogger())
}
export default createStore({
  plugins,
  state: {
    message: null
  },
  mutations: {
    setMessage(state) {
      state.message = message
    },
    clearMessage(state){
      state.message = null
    }
  },
  actions: {
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      },5000)
    }
  },
  modules: {
    authModule
  }
})
