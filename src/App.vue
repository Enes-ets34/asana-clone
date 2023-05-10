<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore()

store.dispatch('projects/fetchProjects')

const route = useRouter();
const currentRoute = computed(() => {
  return route.currentRoute.value.fullPath
})

const hideHeader = computed(() => {
  return currentRoute.value.includes('/register') || currentRoute.value.includes('/login') || currentRoute.value.includes('/projects/new')
})


</script>

<template >
  <appHeader v-if="!hideHeader" />
  <appSidebar v-if="!hideHeader" />
  <router-view></router-view>
</template>


