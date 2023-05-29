<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import UserSettingsModal from './components/UserSettingsModal.vue';

const store = useStore()

store.dispatch('projects/fetchProjects')

const route = useRouter();
const currentRoute = computed(() => {
  return route.currentRoute.value.fullPath
})

const currentUser = computed(() => store?.getters['users/getCurrentUser'])
const hideHeader = computed(() => {
  return currentRoute.value.includes('/register') || currentRoute.value.includes('/login') || currentRoute.value.includes('/projects/new')
})
const toastNotifMessage = computed(() => store.state.toastNotif.message);


</script>

<template class="relative">
  {{ $store.state.toastNotif.message }}
  <UserSettingsModal v-if="$store.state.modal === 'user-settings-modal'"
    @close-user-settings-modal="$store.dispatch('setModal', null)" :currentUser="currentUser" />
  <appHeader v-if="!hideHeader" />
  <appSidebar v-if="!hideHeader" />
  <router-view></router-view>
  <teleport to="body">
    <appToastNotif class="sm:bottom-2 top-0" v-if="toastNotifMessage" />
  </teleport>
</template>


