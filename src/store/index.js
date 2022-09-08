import { createStore, createLogger } from 'vuex'
import authModule from './modules/auth.module'
const plugins = []

// if(process.env.NODE_ENV === 'development'){
//   plugins.push(createLogger())
// }
export default createStore({
  plugins,
  state:   {

      message: null
    
   
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
 
    },
    clearMessage(state){
      state.message = null
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
    }
  },
  modules: {
    authModule
  }
})
