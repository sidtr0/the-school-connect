import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//const fb = require('./firebase.js')

Vue.config.productionTip = false;

//let app

/*fb.auth.onAuthStateChanged(user => {
	if (!app) {
		app = 
	}
})*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
