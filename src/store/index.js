import { createStore } from "vuex";

import users from "./users";

import projects from "./projects";

import toastNotif from "./toastNotif";

export default createStore({
  namespaced: true,
  state: {
    modal: null,
  },
  mutations: {
    SET_MODAL(state, modal) {
      state.modal = modal;
    },
  },
  actions: {
    setModal({ commit }, modal) {
      commit("SET_MODAL", modal);
    },
  },
  getters: {},
  modules: {
    users,
    projects,
    toastNotif,
  },
});
