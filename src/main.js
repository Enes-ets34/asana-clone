import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import appHeader from "./components/shared/appHeader.vue";
import appSidebar from "./components/shared/appSidebar.vue";

createApp(App)
  .use(router)
  .component("appSidebar", appSidebar)
  .component("appHeader", appHeader)
  .mount("#app");
