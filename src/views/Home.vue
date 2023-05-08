<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const today = new Date();
const dayName = computed(() => {
    return today.toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })
})
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const currentUserFirstName = computed(() => currentUser.value?.full_name?.split(' ')[0])
const welcomeMessage = computed(() => {
    if (today.getHours() > 6 && today.getHours() < 12) {
        return `Good Morning, ${currentUserFirstName.value}`
    }
    if (today.getHours() > 12 && today.getHours() < 18) {
        return `Good Afternoon, ${currentUserFirstName.value}`
    }
    if (today.getHours() > 18 && today.getHours() < 23) {
        return `Good Night, ${currentUserFirstName.value}`
    }
})


</script>
<template>
    <div class=" fixed  sm:left-15 sm:ml-64 mt-12 h-screen w-screen p-5">
        <div class="font-semibold text-xl">
            Home
        </div>
        <br />

        <div class="">
            <div class=" w-1/3 ml-80 text-center">
                <p>{{ dayName }}</p>
                <p class="text-4xl">{{ welcomeMessage }}</p>
            </div>
        </div>

    </div>
</template>