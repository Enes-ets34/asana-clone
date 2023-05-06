<script setup>
import { useStore } from 'vuex';
const store = useStore()


</script>
<template>
    <div class="bg-indigo-700 text-white fixed  sm:left-15 sm:ml-64 mt-12 h-screen w-screen p-5">
        Home- {{ store.getters['users/getCurrentUser'] }}
    </div>
</template>