import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const currentRoute = computed(() => {
  return route.currentRoute.value.fullPath;
});
export default function useIsLoginPage() {
  const isLoginPage = computed(() => {
    console.log("currentRoute.value :>> ", currentRoute.value);
    return route.name.includes("Login") || route.name.includes("Register");
  });

  return {
    isLoginPage,
  };
}
