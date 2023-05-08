import store from "../index";
import router from "../../router";
import appAxios from "../../utils/appAxios";

export default {
  namespaced: true,
  state: {
    user: null,
    access_token: null,
    registerData: null,
  },
  mutations: {
    setUser(state, pUser) {
      state.user = pUser;
      localStorage.user = JSON.stringify(pUser);
    },
    setAccessToken(state, pAccessToken) {
      state.access_token = pAccessToken;
      localStorage.access_token = pAccessToken;
    },
    setUserInfo(state, pUser) {
      state.registerData = pUser;
    },
    logout(state) {
      appAxios
        .get("/user/logout")
        .then((res) => {
          state.user = null;
          state.access_token = null;
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
          router.push("/login");
        })
        .catch((err) => {
          state.user = null;
          state.access_token = null;
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
          router.push("/login");
        });
    },
  },
  actions: {
    login({ commit }, pUser) {
      appAxios
        .post("/user/login", pUser)
        .then((res) => {
          if (res.status === 200) {
            console.log("res.data :>> ", res.data);
            commit("setUser", res?.data || null);
            commit("setAccessToken", res?.data?.tokens?.access_token || null);
            router.push("/");
          }
        })
        .catch((err) => {
          console.error(err.response.data.error);
        });
    },
    register({ commit }, pUser) {
      appAxios
        .post("/user", pUser)
        .then((res) => {
          if (!res.message) {
            commit("setUser", res?.user || null);
            commit("setAccessToken", res?.user?.tokens?.access_token || null);
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
    getCurrentUser: (state) => state?.user,
    isAuth: (state) => state.user !== null && state.access_token !== null,
    getAccessToken: (state) => state?.access_token,
  },
};
