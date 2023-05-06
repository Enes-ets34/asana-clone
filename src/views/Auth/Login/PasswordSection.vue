<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '../../../router';
const store = useStore()

const props = defineProps({
    userData: {
        type: Object
    }
})
const password = ref(props.userData.password)
const login = () => {
    store.dispatch('users/login', { email: props.userData.email, password: password.value })
    
}
</script>
<template>
    <div class="relative">

        <div class="relative flex justify-center  items-center space-x-2 py-3 my-6 bg-neutral-100 rounded-md">
            <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/754df4423d3e584828ce8f6acba489289db216b2/grey_man_2_avatar.png"
                class="object-containt w-6 mr-1" alt="">
            <small>{{ props.userData.email }}</small>

            <i class="fa-solid fa-circle-xmark cursor-pointer absolute top-4 right-5"></i>
        </div>
        <div class="flex flex-col relative">
            <label for="email" class="text-gray-500 text-xs mb-1">Password</label><input v-model="password"
                class="mt-1 px-2 py-1 ring-1  ring-gray-300 hover:ring-gray-400 transition-all duration-300 focus:outline-blue-500 rounded-md"
                type="password" id="password">

            <div
                class="absolute p-1 hover:bg-gray-100 cursor-pointer transition-all duration-300 top-6 rounded-md mt-0.5 right-px">
                <svg class="w-5 " viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                    <path
                        d="M31.3,15.6C28.4,9.7,22.5,6,16,6S3.6,9.7,0.7,15.6c-0.1,0.3-0.1,0.6,0,0.9C3.6,22.3,9.5,26,16,26s12.4-3.7,15.3-9.6C31.4,16.2,31.4,15.8,31.3,15.6z M16,24c-5.6,0-10.6-3.1-13.2-8c2.6-4.9,7.6-8,13.2-8s10.6,3.1,13.2,8C26.6,20.9,21.6,24,16,24zM16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z M16,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,20,16,20z">
                    </path>
                </svg>
                <svg v-if="false" class="w-5" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                    <path
                        d="M24.9,23.5L23.4,22l-2.6-2.6L19.4,18L14,12.6l-1.5-1.5L10.4,9L8.9,7.5L3.7,2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.8,4.8c-2.7,1.7-4.9,4.1-6.4,7c-0.1,0.3-0.1,0.6,0,0.9C3.6,22.3,9.5,26,16,26c2.5,0,4.9-0.5,7.1-1.5l5.2,5.2c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L24.9,23.5z M18,19.4c-0.6,0.4-1.3,0.6-2,0.6c-2.2,0-4-1.8-4-4c0-0.7,0.2-1.4,0.6-2L18,19.4z M16,24c-5.6,0-10.6-3.1-13.2-8c1.4-2.6,3.4-4.6,5.8-6l2.5,2.5c-0.7,1-1.1,2.2-1.1,3.5c0,3.3,2.7,6,6,6c1.3,0,2.5-0.4,3.5-1.1l2.1,2.1C19.8,23.6,17.9,24,16,24z M31.3,15.6C28.4,9.7,22.5,6,16,6c-1.7,0-3.4,0.3-5,0.8l1.6,1.6C13.7,8.1,14.8,8,16,8c5.6,0,10.6,3.1,13.2,8c-1,2-2.4,3.6-4.1,4.9l1.4,1.4c1.9-1.5,3.6-3.5,4.7-5.9C31.4,16.2,31.4,15.8,31.3,15.6z M20,15.7l1.8,1.8c0.1-0.5,0.2-1,0.2-1.5c0-3.3-2.7-6-6-6c-0.5,0-1.1,0.1-1.5,0.2l1.8,1.8C18.3,12.2,19.8,13.7,20,15.7z">
                    </path>
                </svg>
            </div>
            <small class="underline text-gray-500 hover:text-black mt-3 mb-5 cursor-pointer">Forgot your
                password?</small>
            <button @click="login"
                class="text-center  transition-all duration-300 mt-6 rounded-md w-full py-2 bg-[#4573d2] hover:bg-[#426dc6] active:bg-[#3f66ba] text-sm text-white">Log
                in</button>

        </div>
    </div>
</template>