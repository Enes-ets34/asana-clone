import { createStore } from "vuex";

import users from "./users";


export default createStore({
  namespaced: true,
  state: {
    deneme:"deneme"
  },
  mutations: {

  },
  actions: {
 
  },
  getters: {},
  modules: {
    users,
 
  },
});