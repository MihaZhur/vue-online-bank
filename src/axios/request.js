import axios from "axios";
// https://vue-online-bank-2-default-rtdb.firebaseio.com
const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL
})

export default requestAxios