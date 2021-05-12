import Vue from 'vue'
import App from './App.vue'
import FormShow from '../lib/index'

Vue.use(FormShow)

new Vue({
  el: '#app',
  render: h => h(App)
})
