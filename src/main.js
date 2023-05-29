import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./index.css";

import appHeader from "./components/shared/appHeader.vue";
import appSidebar from "./components/shared/appSidebar.vue";
import appToastNotif from "./components/shared/appToastNotif.vue";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(store)
  .component("appSidebar", appSidebar)
  .component("appHeader", appHeader)
  .component("appToastNotif", appToastNotif)
  .mount("#app");
