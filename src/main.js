import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
//molde para crear los componentes
Vue.prototype.axios = axios,


new Vue({
  render: h => h(App),
}).$mount('#app')
