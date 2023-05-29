import store from "../index";
import router from "../../router";
import appAxios from "../../utils/appAxios";
import toastNotif from "../toastNotif";

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
          toastNotif.dispatch("showMessage", {
            message: err.response.data.message,
            type: "error",
          });
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
          alert(err.response.data.error);
        });
    },
    updateUser({ commit }, pUser) {
      appAxios
        .patch(`/user`, { full_name: pUser.full_name, email: pUser.email })
        .then((res) => {
          if (!res.message) {
            commit("setUser", res?.data || null);
          }
        })
        .catch((err) => {
          console.log("err.response :>> ", err.response);
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
