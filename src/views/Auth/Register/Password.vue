<script setup>
import { useStore } from 'vuex';

import { ref } from 'vue';

const store = useStore()
const userData = ref({
    ...store.state.users.registerData,
    full_name:null,
    password:null
})

const register = () => {
    store.dispatch('users/register', userData.value)
}
</script>
<template>
    <div>
        <input v-model="userData.full_name"
            class="mt-1 w-full px-4 py-2  ring-2 placeholder:text-gray-300 font-light  ring-gray-200  transition-all duration-300 focus:ring-red-500 focus:outline-none rounded-sm"
            type="text" placeholder="Your full name" />
        <input v-model="userData.password"
            class="w-full px-4 py-2 mt-2  ring-2 placeholder:text-gray-300 font-light  ring-gray-200  transition-all duration-300 focus:ring-red-500 focus:outline-none rounded-sm"
            type="password" placeholder="********" />

        <button @click="register"
            class="text-center transition-all duration-300 mt-6 rounded-sm w-full py-3 bg-black hover:bg-red-400  hover:text-black  text-white">
            Create Account
        </button>

    </div>
</template>