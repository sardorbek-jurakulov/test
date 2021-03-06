import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
