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
const projects = computed(() => store.getters['projects/getProjectsByUser'])
const currentUser = computed(() => store.getters['users/getCurrentUser'])
const currentUserFirstName = computed(() => currentUser.value?.full_name?.split(' ')[0])
const welcomeMessage = computed(() => {
    if (today.getHours() > 6 && today.getHours() < 12) {
        return `Good Morning, ${currentUserFirstName.value}`
    }
    if (today.getHours() > 12 && today.getHours() < 18) {
        return `Good Afternoon, ${currentUserFirstName.value}`
    }
    if (today.getHours() > 18 && today.getHours() <= 23) {
        return `Good Night, ${currentUserFirstName.value}`
    }
})


</script>
<template>
    <div class=" fixed overflow-scroll sm:left-15 sm:ml-64 mt-12 h-screen pb-24 w-screen p-5">
        <div class="font-semibold text-xl">
            Home
        </div>
        <br />

        <div class="sm:px-12 ">
            <div class=" sm:w-1/3 sm:ml-80 text-center">
                <p>{{ dayName }}</p>
                <p class="text-4xl">{{ welcomeMessage }}</p>

            </div>
            <div class="sm:w-1/2  sm:ml-52 ">
                <h3 class="p-2 border-b font-semibold mb-2">
                    <i class="fa-solid fa-caret-right mr-4"></i> Recent Projects
                </h3>
                <div class="flex-wrap flex ">
                    <div v-for="project in projects" :key="project._id" class="text-center p-1  cursor-pointer  w-1/4">
                        <div class="bg-sky-300 border p-5 rounded-lg flex items-center justify-center h-24">
                            <i class="fa-solid fa-diagram-project fa-2xl"></i>
                        </div>
                        <span class="font-semibold">
                            {{ project.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>