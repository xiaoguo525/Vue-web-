import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import router from './router/index.js'
Vue.use(MuseUI);
import store from './store/index.js'
new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
