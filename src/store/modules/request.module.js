import axios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,
  state: {
    requests: [],
  },
  getters: {
    requests:state => state.requests
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters["authModule/token"];
        const { data } = await axios.post(
          `/request.json?auth=${token}`,
          payload
        );
        commit('addRequest', {...payload, id: data.name})
        console.log(data);
        dispatch("setMessageAction", {
            value: 'Заявка успешно создана',
            type: 'primary'
        }, {root: true})
      } catch (e) {
        dispatch('setMessageAction', {
            value: e.message,
            type: 'danger'
        },{root: true})
      }
    },
    async load({commit, dispatch}) {
      try {
        const token = store.getters["authModule/token"];
        const { data } = await axios.get(
          `/request.json?auth=${token}`
        );

        const request = Object.keys(data).map(id => ({ ...data[id], id }))
        console.log(request)

        console.log(data)
        commit('setRequests',request)
    

      } catch (e) {
        dispatch('setMessageAction', {
            value: e.message,
            type: 'danger'
        },{root: true})
      }
    },
    async loadingOne({commit, dispatch}, id) {
      try {
        const token = store.getters["authModule/token"];
        const { data } = await axios.get(
          `/request/${id}.json?auth=${token}`
        );
        return data
  
      } catch (e) {
        dispatch('setMessageAction', {
            value: e.message,
            type: 'danger'
        },{root: true})
      }
    },
    async remove({dispatch}, id) {
      try {
        const token = store.getters["authModule/token"];
        await axios.delete(
          `/request/${id}.json?auth=${token}`
        );
        dispatch('setMessageAction', {
          value: 'Заявка удалена',
          type: 'primary'
        },{ root: true })
      
  
      } catch (e) {
        dispatch('setMessageAction', {
            value: e.message,
            type: 'danger'
        },{root: true})
      }
    },
    async update({ dispatch}, request) {
      try {
        const token = store.getters["authModule/token"];
        await axios.put(
          `/request/${request.id}.json?auth=${token}`, request
        );
        dispatch('setMessageAction', {
          value: 'Заявка обновлена',
          type: 'primary'
        },{ root: true })
  
      } catch (e) {
        dispatch('setMessageAction', {
            value: e.message,
            type: 'danger'
        },{root: true})
      }
    }

  },

};
