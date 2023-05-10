import { createStore } from "vuex";

import users from "./users";

import projects from "./projects";

export default createStore({
  namespaced: true,
  state: {
    deneme: "deneme",
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    users,
    projects,
  },
});
