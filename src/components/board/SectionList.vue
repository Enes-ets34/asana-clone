<script setup>
import { ref } from 'vue';
import Section from './Section.vue';

const props = defineProps({
    sections: {
        type: Array,
    },
    tasks: {
        type: Array,
    },

})
const addSectionState = ref(false)
const getSectionTasks = (sectionId) => {
    return props.tasks.filter(task => task.section_id === sectionId);
};
</script>
<template>
    <div class="flex  sm:!pr-[100px] pb-48 bg-[#f9f8f8] overflow-scroll sm:p-5  space-x-2 w-screen  h-screen">

        <Section v-for="section in sections" :key="section._id" :section="section" :tasks="getSectionTasks(section._id)" />
        <div
            class="sm:w-1/5  hover:cursor-pointer  ring-neutral-200 rounded-lg px-3 py-2 flex-shrink-0 flex flex-col flex-wrap">
            <div class="group flex justify-between items-center">
                <input placeholder="New section"  type="text" v-if="addSectionState"  class="font-semibold bg-white rounded-lg px-4 py-2" />
                <button v-else @click="addSectionState = true"
                    class="hover:bg-neutral-200 text-gray-500 transition-all duration-300 hover:text-black rounded-lg px-4 py-2 ">
                    <h4 class="font-semibold ">+ Add Section</h4>
                </button>
            </div>
        </div>

    </div>
</template>