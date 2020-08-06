import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false
//molde para crear los componentes
Vue.prototype.axios = axios

const store = new Vuex.Store({
  state: {
    score1: 0,
    score2: 0,
  },
  mutations: {
    changeScore1(state, score1){
      state.score1 = score1
    },
    changeScore2(state, score2){
      state.score2 = score2
      

    }
  }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
