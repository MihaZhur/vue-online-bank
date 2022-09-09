import axios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,
  state: {
    requests: [],
  },
  getters: {},
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.post(
          `/request.json?auth=${token}`,
          payload
        );
        console.log(data);
        dispatch("setMessage", {
            value: 'Заявка успешно создана',
            type: 'primary'
        })
      } catch (e) {
        dispatch('setMessage', {
            value: e.message,
            type: 'danger'
        })
      }
    },
  },
};
