import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import vuetify from './plugins/vuetify'
import "vue-toastification/dist/index.css";
import axios from 'axios'

Vue.config.productionTip = false

axios.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-type"] = "Application/json";
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
