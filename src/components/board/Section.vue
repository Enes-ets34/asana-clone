<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'
const addTask = ref(false)
const props = defineProps({
    section: {
        type: Object,
    },
    tasks: {
        type: Array,
        default: () => [],
    },
});
console.log('props.tasks :>> ', props.tasks);
let idGlobal = ref(null);
const controlOnStart = ref(true)
const clone = ({ name }) => {
    return { name, id: idGlobal.value++ };
}
const pullFunction = () => {
    return controlOnStart.value ? "clone" : true;
}
const start = ({ originalEvent }) => {
    controlOnStart.value = originalEvent.ctrlKey;
}
</script>
<template>
    <div
        class="sm:w-1/5  w-full hover:cursor-pointer hover:ring-1 ring-neutral-200 rounded-lg px-3 py-2 flex-shrink-0 flex flex-col  flex-wrap">
        <div class="">
            <div class="group flex justify-between items-center">
                <h4 class="font-semibold">{{ section.name }}</h4>
                <span class="flex items-center space-x-2">
                    <i
                        class="fa-solid fa-plus p-2 text-neutral-500 hover:text-black cursor-pointer hover:bg-gray-200 rounded-md"></i>
                    <i
                        class="fa-solid  fa-ellipsis  p-2 text-neutral-500 hover:text-black cursor-pointer hover:bg-gray-200 rounded-md"></i>
                </span>
            </div>
            <draggable class="space-y-2 flex-1 max-h-full overflow-auto" :list="tasks" :clone="clone"
                :group="{ name: section, pull: pullFunction }" @start="start" item-key="id">
                <template #item="{ element }">
                    <ul class="space-y-2 flex-1 max-h-full overflow-auto">
                        <!-- Task item -->
                        <li
                            class="px-5 group relative text-sm py-3 border flex flex-col border-neutral-300 max-h-full bg-white rounded-md hover:border-neutral-400 transition-all duration-400 hover:drop-shadow-lg">
                            <span class="flex justify-start p-1 items-start">
                                <i
                                    class="text-gray-500 p-1  hover:text-green-500 transition-all duration-300 hover:bg-green-100 rounded-full hover:bg-opacity-75 fa-regular fa-circle-check"></i>
                                <p class="text-sm">{{ element.title }}</p>
                            </span>
                            <span class="opacity-0 group-hover:opacity-100 flex mt-4 justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <i
                                        class="fa-regular text-gray-600 hover:text-black fa-user p-1.5 rounded-full border border-dashed border-black hover:bg-neutral-500 hover:bg-opacity-20"></i>
                                    <i
                                        class="fa-regular text-gray-600 hover:text-black fa-calendar p-1.5 rounded-full border border-dashed border-black hover:bg-neutral-500 hover:bg-opacity-20"></i>
                                </div>
                                <i
                                    class="fa-regular text-gray-600 hover:text-black p-1 rounded-md hover:bg-neutral-500 hover:bg-opacity-20 fa-thumbs-up"></i>
                            </span>
                            <i
                                class="fa-solid z-[1] bg-white fa-ellipsis hidden group-hover:inline  p-3 text-neutral-500 absolute ring-1 ring-neutral-200 hover:ring-neutral-300 transition-all duration-300 right-2 top-2 hover:text-black cursor-pointer hover:bg-gray-200 rounded-md"></i>
                        </li>
                        <!-- Task item -->
                    </ul>
                </template>
            </draggable>
        </div>
        <div v-if="addTask"
            class="px-5 group relative text-sm py-3 mt-2 border flex flex-col border-neutral-300 max-h-full bg-white rounded-md hover:border-neutral-400 transition-all duration-400 hover:drop-shadow-lg">
            <span class="flex justify-start p-1 items-center">
                <i
                    class="text-gray-500 p-1 hover:text-green-500 transition-all duration-300 hover:bg-green-100 rounded-full hover:bg-opacity-75 fa-regular fa-circle-check"></i>
                <input type="text" class="text-sm p-1 focus:outline-none" placeholder="Write a task name  " name="" id="">
            </span>
            <span class=" flex mt-4 justify-between items-center">
                <div class="flex items-center space-x-2">
                    <i
                        class="fa-regular text-gray-600 hover:text-black fa-user p-1.5 rounded-full border border-dashed border-black hover:bg-neutral-500 hover:bg-opacity-20"></i>
                    <i
                        class="fa-regular text-gray-600 hover:text-black fa-calendar p-1.5 rounded-full border border-dashed border-black hover:bg-neutral-500 hover:bg-opacity-20"></i>
                </div>
                <i
                    class="fa-regular text-gray-600 hover:text-black p-1 rounded-md hover:bg-neutral-500 hover:bg-opacity-20 fa-thumbs-up"></i>
            </span>
        </div>
        <button @click="addTask = true" class="text-center mt-2 hover:bg-neutral-200 w-full rounded-md py-2">
            + Add Task
        </button>
    </div>
</template>