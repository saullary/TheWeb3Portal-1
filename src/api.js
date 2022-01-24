import Vue from "vue";
import Axios from "axios";

const http = Axios.create({
  baseURL: "https://web3.4everland.store",
});

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { config = {}, data = {}, status, statusText } = error.response || {};
    console.log(error, status, statusText);
    let msg =
      data.message ||
      statusText ||
      (status ? `${config.url}：${status}` : error.message);

    Vue.prototype.$alert(msg);

    error.code = data.code;
    return Promise.reject(error);
  }
);

Vue.prototype.$http = http;

export default http;
