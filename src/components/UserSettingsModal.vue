<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore()
const emit = defineEmits()
const props = defineProps({
    userSettingsModal: {
        type: Boolean,
    },
    currentUser: {
        type: Object,
    }
})
const updateState = ref({ ...props.currentUser })
const updateUser = () => {
    store.dispatch('users/updateUser', updateState.value)
    emit('close-user-settings-modal', null)
}
const closeEditModal = () => {
    emit('close-user-settings-modal', null)
}
const text = ref('')
</script>
<template>
    <div class="relative z-10 ">
        <div @click="closeEditModal" class="fixed  inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div class="fixed  inset-0 z-10 overflow-y-auto">
            <div class="flex  items-end justify-center p-2 sm:items-center sm:p-0">
                <div
                    class="relative  transform overflow-hidden top-8 rounded-md  bg-white shadow-xl transition-all sm:my-8 w-full sm:max-w-[700px]">
                    <div class=" md:px-8 p-3 md:py-2   flex justify-between items-center">
                        <h3 class=" md:text-2xl  " id="modal-title">My Settings</h3>
                        <button @click="closeEditModal" class="hover:bg-neutral-200 hover:bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                                fill="muted" class="mercado-match" width="24" height="24" focusable="false">
                                <path
                                    d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="max-h-[530px] overflow-auto  ">
                        <div class=" flex flex-col px-8  ">
                            <div class=" border-b mb-5 hidden sm:block">
                                <ul class="text-sm flex justify-start space-x-4 items-center">
                                    <li
                                        class="p-1 font-semibold border-b-2 border-neutral-900 pb-1  cursor-pointer text-neutral-900">
                                        Profile
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Notifications
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Email Forwarding
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Account
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Display
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Apps
                                    </li>
                                    <li
                                        class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
                                        Hacks
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col">
                                <p class="text-xs text-left mb-2 text-gray-500">Your photo</p>
                                <div class="flex justify-start items-center space-x-4  pb-2">
                                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/3d4665c7cf119dc9dc38232301b18fa68b9bb17c/avatar.svg"
                                        alt=""
                                        class="rounded-full cursor-pointer object-contain border border-dashed border-neutral-600 w-14 h-14 ">
                                    <div class="flex flex-col">
                                        <a class="cursor-pointer hover:underline text-blue-500  text-sm">Upload your
                                            photo</a>
                                        <small class="text-xs text-muted text-gray-500">Photos help your teammates recognize
                                            you in Asana</small>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-8 mt-5 text-sm">
                                <div class="w-full">
                                    <div class="flex flex-col flex-1">
                                        <label for="full_name" class="text-gray-500 text-xs font-semibold">Your full
                                            name</label>
                                        <input type="text" id="full_name" v-model="updateState.full_name"
                                            class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="flex flex-col flex-1">
                                        <label for="pronouns" class="text-gray-500 text-xs font-semibold">Pronouns</label>
                                        <input type="text" id="pronouns"
                                            placeholder="Third-person pronouns (e.g. she/her/hers"
                                            class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="flex flex-col flex-1">
                                        <label for="title" class="text-gray-500 text-xs font-semibold">Job title</label>
                                        <input type="text" id="title"
                                            class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="flex flex-col flex-1">
                                        <label for="department" class="text-gray-500 text-xs font-semibold">Department or
                                            team</label>
                                        <input type="text" id="department"
                                            class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="flex flex-col flex-1">
                                        <label for="name" class="text-gray-500 text-xs font-semibold">
                                            Email</label>
                                        <input type="text" id="name" v-model="currentUser.email" disabled
                                            class="mt-1 px-3 py-2 text-neutral-500 cursor-not-allowed  transition-all duration-300  rounded-md " />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mt-8 space-y-4">
                                <div class="flex flex-col  flex-1">
                                    <label for="password_!" class="text-gray-500 text-xs font-semibold">
                                        Password</label>
                                    <input type="password" id="password_1"
                                        class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                </div>
                                <div class="flex flex-col flex-1">
                                    <label for="password_2" class="text-gray-500 text-xs font-semibold">
                                        Password again</label>
                                    <input type="password" id="password_2"
                                        class="mt-1 px-3 py-2 border border-1   hover:ring-black hover:ring-1 transition-all duration-300 focus:outline-primary active:ring-0 rounded-md" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="flex justify-end px-8 pb-6 ">
                        <button @click="updateUser"
                            class="text-center  transition-all duration-300 mt-6 rounded-md px-4 py-2 bg-[#4573d2] hover:bg-[#426dc6] active:bg-[#3f66ba] text-sm text-white">Save
                            changes</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>