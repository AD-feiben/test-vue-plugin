// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Toast from '@/plugins/toast'

Vue.config.productionTip = false
Vue.use(Toast, {
  position: 'bottom',
  duration: 800
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
