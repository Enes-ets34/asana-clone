import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default function useIsLoginPage() {
  const route = useRoute();

  const isLoginPage = computed(() => {
    return route.name === 'Login' || route.name === 'Register';
  });

  return {
    isLoginPage,
  };
}
