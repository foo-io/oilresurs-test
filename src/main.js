import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VTooltip from 'v-tooltip'

import 'normalize.css'
import '@/assets/fonts/stylesheet.css'
import '@/assets/styles/v-tooltip.scss'

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
