<script setup>
import { computed } from 'vue';
import {useRouter} from 'vue-router'

const route = useRouter();
const currentRoute = computed(() => {
  return route.currentRoute.value.fullPath
})

const hideHeader = computed(() => {
   return currentRoute.value.includes('/register') || currentRoute.value.includes('/login')
})


</script>

<template>
  <appHeader v-if="!hideHeader" />
  <appSidebar v-if="!hideHeader" />
  <router-view></router-view>
</template>


