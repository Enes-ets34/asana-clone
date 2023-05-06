import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";

import appHeader from "./components/shared/appHeader.vue";
import appSidebar from "./components/shared/appSidebar.vue";
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
  .component("appSidebar", appSidebar)
  .component("appHeader", appHeader)
  .mount("#app");
