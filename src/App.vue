<script setup>
import useIsLoginPage from './composables/hide';

const { isLoginPage } = useIsLoginPage();

</script>

<template>
  <appHeader v-if="!isLoginPage" />
  <appSidebar v-if="!isLoginPage" />
  <router-view></router-view>
</template>


