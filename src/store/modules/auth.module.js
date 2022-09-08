import axios from 'axios'
import { error } from '../../utils/error.js'
const TOKEN_KEY = 'jwt-token'
export default {
    namespaced: true,
    state: {
        token: localStorage.getItem(TOKEN_KEY)
    },
    getters: {
        token: (state) => state.token,
        isAuthenticated:(_, getters) => !!getters.token
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
        async login({ dispatch, commit }, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                console.log(payload)
                const { data } = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
            }
            catch(e) {
                dispatch('setMessageAction', {
                    value: error(e.response.data.error.message),
                    type: 'danger'
                },{ root: true})
                
                throw new Error()
            }
      
            // commit('setToken', 'TEST TOKEN') //_--c
        }
    },
}