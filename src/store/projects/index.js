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
    filterProjects(state, pProjectID) {
      state.projects = state.projects.filter((p) => p._id !== pProjectID);
    },
    addProjects(state, pProject) {
      state.projects.push(pProject);
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
    deleteProject({ commit }, pProjectID) {
      if (confirm("ARE YOU SURE?")) {
        appAxios
          .delete(`/project/${pProjectID}`)
          .then((res) => {
            if (res.status === 200) {
              commit("filterProjects", pProjectID);
              router.push("/");
            }
          })
          .catch((err) => {
            console.error(err.response.data.error);
          });
      }
    },
    createProject({ commit }, pProject) {
      appAxios
        .post(`/project`, { name: pProject })
        .then((res) => {
          console.log("buraya geldi");
          if (res.status === 201) {
            commit("addProject", pProject);
            router.push("/");
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
