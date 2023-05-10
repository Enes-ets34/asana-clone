<script setup>
import { computed, ref } from 'vue';

import { useStore } from 'vuex';

const dropMenu = ref(false)
const profileMenu = ref(false)
const store = useStore()
const logout = () => {
    store.commit('users/logout')
}
const userIcon = computed(() => store?.getters['users/getCurrentUser']?.full_name.split(" ").map(n => n[0]).join("").toUpperCase() || null)
</script>
<template>
    <header
        class="py-2 px-5  border-b border-neutral-700 bg-[#252628] z-[10] flex justify-between items-center fixed top-0 w-full">
        <div class="flex items-center space-x-2">
            <i
                class="fa-solid   fa-bars text-white text-2xl rounded-md active:ring-[#a2a0a2] active:bg-[#3d3e40] cursor-pointer hover:bg-[#323335] px-2"></i>
            <svg class="Icon BurgerExpand" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                <path
                    d="M1,16h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,16.4,0.4,16,1,16z M1,4h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5l0,0C0,4.4,0.4,4,1,4z M1,28h30c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1l0,0C0,28.4,0.4,28,1,28z">
                </path>
            </svg>
            <div class="group">
                <button @click="dropMenu = !dropMenu" :class="{ 'bg-[#3d3e40]  ring-[#a2a0a2]': dropMenu }"
                    class=" bg-[#1e1f21] hidden sm:flex ring-1 hover:ring-[#6a696a] hover:bg-[#323335] ring-[#424244] py-1.5 px-2 pr-3 space-x-2 text-white rounded-full text-sm  items-center transition-all duration-300 ">
                    <div class="rounded-full px-1 bg-[#f06a6a]">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <span>
                        Create
                    </span>

                </button>
                <div v-if="dropMenu"
                    class="bg-white drop-shadow-lg text-sm text-black absolute rounded-md z-10 left-44 top-2 transition-all duration-300  w-48 border ">
                    <ul class="">
                        <li
                            class="flex justify-start items-center p-3 space-x-3  hover:rounded-t-md cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                            <svg class="w-4" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                                <path
                                    d="M29.1,20.9 M16,32C7.2,32,0,24.8,0,16S7.2,0,16,0s16,7.2,16,16S24.8,32,16,32z M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M12.9,22.6c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9C8,18,8,17.4,8.3,17s1-0.4,1.4,0l3.1,3.1l8.6-8.6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.4,9.4C13.4,22.5,13.2,22.6,12.9,22.6z">
                                </path>
                            </svg> <span>Task</span>
                        </li>
                        <router-link to="/projects/new" tag="a"
                            class="flex justify-start items-center p-3 space-x-3   cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                            <svg class="w-4" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                                <path
                                    d="M10,13.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,15.8,8.5,15S9.2,13.5,10,13.5z M23,14h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,14,23,14z M23,20h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S23.6,20,23,20z M10,19.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5S8.5,21.8,8.5,21S9.2,19.5,10,19.5z M24,2h-2.2c-0.4-1.2-1.5-2-2.8-2h-6c-1.3,0-2.4,0.8-2.8,2H8C4.7,2,2,4.7,2,8v18c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M13,2h6c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1V3C12,2.4,12.4,2,13,2z M28,26c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V8c0-2.2,1.8-4,4-4h2v1c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V4h2c2.2,0,4,1.8,4,4V26z">
                                </path>
                            </svg><span>Project</span>
                        </router-link>
                        <li
                            class="flex justify-start items-center p-3 space-x-3 border-b  cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                            <svg class="w-4" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                                <path
                                    d="M5,31c-0.1,0-0.3,0-0.4-0.1C4.2,30.7,4,30.4,4,30v-7.1c-2.5-2.3-4-5.5-4-8.9C0,7.4,5.4,2,12,2h8c6.6,0,12,5.4,12,12 s-5.4,12-12,12h-8c-0.1,0-0.3,0-0.4,0l-5.9,4.8C5.4,30.9,5.2,31,5,31z M12,4C6.5,4,2,8.5,2,14c0,3,1.3,5.8,3.6,7.7C5.9,21.9,6,22.2,6,22.5v5.4l4.6-3.7C10.8,24,11,24,11.3,24h0.1c0.2,0,0.4,0,0.6,0h8c5.5,0,10-4.5,10-10S25.5,4,20,4 C20,4,12,4,12,4z">
                                </path>
                            </svg> <span>Message</span>
                        </li>
                        <li
                            class="flex justify-start items-center p-3 space-x-3 border-b hover:rounded-s-md cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                            <svg class="w-4" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                                <path
                                    d="M31,26h-3v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S31.6,26,31,26z M16,18c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S11.6,18,16,18z M16,4c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S12.7,4,16,4z M21.2,20H8.8C5,20,2,23,2,26.8V31c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.2C4,24.2,6.2,22,8.8,22h12.4c0.6,0,1-0.4,1-1S21.8,20,21.2,20z">
                                </path>
                            </svg><span>Invite</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="relative sm:w-1/3 w-1/2">
            <div class="absolute top-1 left-2.5">
                <i class="fa-solid text-[#a2a0a2] fa-magnifying-glass"></i>
            </div>
            <input type="text"
                class="w-full bg-[#424244] rounded-full px-5 pl-8 py-1.5 focus:outline-white text-white placeholder:text-white text-sm"
                placeholder="Search">
        </div>


        <div class="group">
            <button @click="profileMenu = !profileMenu" class="bg-pink-500 rounded-full  p-1 w-8 h-8 text-white ">
                {{ userIcon }}

            </button>
            <div v-if="profileMenu"
                class="bg-white drop-shadow-lg  text-sm text-black absolute rounded-md z-10 right-5 top-15 transition-all duration-300  w-48 border ">
                <ul class="">
                    <li
                        class="flex justify-start items-center p-3 space-x-2 border-b  hover:rounded-t-md cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <i class="fa-solid fa-check"></i> <span>My Workspace</span>
                        <i class="fa-sharp text-yellow-500 fa-solid fa-circle fa-2xs"></i>
                    </li>

                    <li
                        class="flex justify-start items-center p-3 pl-8 space-x-3  cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <span>Admin Console</span>
                    </li>
                    <li
                        class="flex justify-between items-center py-3 pr-4 pl-8 space-x-3 border-b  cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <span>More</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </li>

                    <li
                        class="flex justify-start items-center py-3 px-2 space-x-1    cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <small class="bg-pink-500 rounded-full text-xs w-6 h-6  p-1 text-white ">
                            {{userIcon}}
                        </small>
                        <span>My Profile</span>
                    </li>
                    <li
                        class="flex justify-start items-center p-3 pl-9 space-x-3  cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <span>My Settings...</span>
                    </li>
                    <li @click="logout"
                        class="flex justify-start items-center p-3 pl-9 space-x-3 hover:rounded-b-md  cursor-pointer hover:bg-neutral-200 transition-all duration-300">
                        <span>Log Out</span>
                    </li>

                </ul>
            </div>
        </div>

    </header>
</template>