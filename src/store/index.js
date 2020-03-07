import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    posts: []
  },
  mutations: {
    updateUser(state, { user }) {
      Vue.set(state, "user", user);
    }
  },
  getter: {
    user: state => state.user
  },
  actions: {}
});
