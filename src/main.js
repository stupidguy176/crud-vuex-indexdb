import Vue from 'vue'
import App from '@/layouts/App.vue'
import store from './store'
import router from './router'

import VueCrontab from 'vue-crontab'

Vue.config.productionTip = false

Vue.use(VueCrontab)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
