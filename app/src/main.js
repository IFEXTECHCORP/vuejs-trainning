import Vue from 'vue'
import App from './App.vue'
import { router } from './routes';
import './plugins/axios';
import './plugins/bootstrap';
import './plugins/icons';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
