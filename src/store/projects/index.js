import store from "../index";
import router from "../../router";
import appAxios from "../../utils/appAxios";

export default {
  namespaced: true,
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, pProjects) {
      state.projects = pProjects;
    },
  },
  actions: {
    fetchProjects({ commit }) {
      appAxios
        .get("/user/projects")
        .then((res) => {
          if (res.status === 200) {
            commit("setProjects", res.data);
          }
        })
        .catch((err) => {
          console.error(err.response.data.error);
        });
    },
  },
  modules: {},
  getters: {
    getProjectsByUser: (state) => state?.projects,
  },
};
