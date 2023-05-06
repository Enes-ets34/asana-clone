<script setup>
import { ref } from 'vue';
import EmailSection from './EmailSection.vue';
import PasswordSection from './PasswordSection.vue';

const userData = ref({
    email: null,
    password: null
})
const showEmailSection = ref(true)
const showPasswordSection = (e) => {
    userData.value.email = e.value
    console.log('e.value :>> ', e.value);
    showEmailSection.value = false
}


</script>
<template>
    <header class="py-6 mb-16">
        <div class="container">
            <img src="/asana-logo.png" class="h-6 object-contain" alt="logo">
        </div>
    </header>
    <section>
        <div class="mx-auto w-full md:w-1/3  px-6 md:px-12">
            <div class="text-center relative">
                <div v-if="!showEmailSection" @click="showEmailSection = true"
                    class="absolute -left-15 md:-left-10 text-gray-500 hover:bg-zinc-100 px-1.5 rounded-md cursor-pointer">
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>
                <h3 class="text-3xl mb-3">Welcome to Asana</h3>
                <p class="text-gray-500 text-lg font-semibold">To get started, please sign in
                </p>
            </div>
            <EmailSection v-if="showEmailSection" @show-password-section="showPasswordSection" :userData="userData" />
            <PasswordSection v-else :userData="userData" />
        </div>
    </section>
</template>