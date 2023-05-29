<script setup>
import { computed, ref, watch } from 'vue';
import appAxios from '../../utils/appAxios';
import { useRouter } from 'vue-router';
import SectionList from '../../components/board/SectionList.vue'


const route = useRouter()

const dropMenu = ref(false)

const project = ref({})
const tasks = ref([]) 
const sections = ref([])
const projectID = computed(() => route.currentRoute.value.params.id)
const fetchProject = () => {
	appAxios.get(`/project/${projectID?.value}`)
		.then((res) => {
			
			project.value = res?.data?.project
			sections.value = res?.data?.sections
			tasks.value = res?.data?.tasks

			
		}).catch((err) => {
			console.log(err.response.data);
		});
}
fetchProject()
watch(projectID, (newVal, oldVal) => {
	if (newVal) {
		fetchProject()
	}

})
</script>
<template>
	<div class="fixed overflow-auto sm:left-15  pb-24 sm:ml-64 mt-12 h-full w-full ">
		<div class="flex justify-start space-x-4 items-center px-5 py-2">
			<div class="h-14 w-14 p-1 rounded-2xl bg-sky-400 flex justify-center items-center">
				<i class="fa-solid fa-diagram-project fa-xl"></i>
			</div>
			<div class="flex justify-between items-center space-x-2">
				<div class="flex justify-start items-center ">
					<h3 class="text-xl font-semibold">{{ project.name }}</h3>

					<span :class="{ 'bg-neutral-100': dropMenu }"
						class="px-1 rounded-md transition-all text-gray-400 duration-300 hover:bg-neutral-100 group cursor-pointer">
						<i @click="dropMenu = !dropMenu" :class="{ 'text-black': dropMenu }"
							class="fa-solid fa-chevron-down group-hover:text-black transition-all duration-300"></i>
						<div v-if="dropMenu"
							class="bg-white drop-shadow-lg text-sm text-black absolute rounded-md z-10  top-12 transition-all duration-300  w-48 border ">
							<ul class="">
								<li
									class="flex justify-start items-center p-3 space-x-2  hover:rounded-t-md cursor-pointer hover:bg-neutral-200 transition-all duration-300">
									<svg class="w-4" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
										<path
											d="M28.3,4.3c-1.2-1.4-3-2.1-4.9-1.9c-1.3,0.1-2.5,0.8-3.5,1.8L6,18c-0.6,0.6-1.1,1.4-1.4,2.2l-2.2,6.4C2.1,27.5,2.3,28.4,3,29c0.4,0.4,1,0.7,1.6,0.7c0.3,0,0.5,0,0.8-0.1l6.4-2.2c0.8-0.3,1.6-0.8,2.2-1.4l13.9-13.9C30,10,30.1,6.4,28.3,4.3z M4.7,27.7c-0.2,0.1-0.3,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3l2-5.8l4.2,4.2L4.7,27.7z M26.4,10.7L12.5,24.6c-0.1,0.1-0.1,0.1-0.2,0.1l-5.1-5.1c0-0.1,0.1-0.1,0.1-0.2l14-13.8c0.7-0.7,1.5-1.1,2.3-1.2c1.2-0.1,2.4,0.3,3.2,1.2C28,7,27.8,9.4,26.4,10.7z">
										</path>
									</svg> <span>Edit project details</span>
								</li>
								<li @click="$store.dispatch('projects/deleteProject', project._id)"
									class="flex justify-start items-center p-3 space-x-2 text-red-600 hover:rounded-t-md cursor-pointer hover:bg-neutral-200 transition-all duration-300">
									<i class="fa-regular fa-trash-can"></i><span>Delete project </span>
								</li>
							</ul>
						</div>
					</span>
				</div>
				<span class="px-1 rounded-md transition-all duration-300 hover:bg-neutral-100 group cursor-pointer">
					<i class="fa-regular fa-star group-hover:text-sky-500 transition-all duration-300 text-gray-400"></i>
				</span>
				<span
					class="px-2 py-1 text-sm rounded-md hover:text-black transition-all duration-300 hover:bg-neutral-100 text-gray-500 group cursor-pointer">
					<i class="fa-sharp fa-regular fa-circle fa-xs "></i>
					Set status
					<i
						class="fa-solid hidden group-hover:inline fa-chevron-down group-hover:text-black transition-all duration-300 text-gray-400"></i>
				</span>
			</div>
		</div>

		<div class=" border-b px-5 hidden sm:block">
			<ul class="text-sm flex justify-start space-x-4 items-center">
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Overview
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					List
				</li>
				<li class="p-1 font-semibold border-b-2 border-neutral-900 pb-1  cursor-pointer text-neutral-900">
					Board
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Timeline
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Calendar
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Workflow
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Dashboard
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Messages
				</li>
				<li
					class="p-1 font-semibold hover:border-b-2 hover:border-neutral-900 pb-1 text-neutral-500 cursor-pointer hover:text-neutral-900">
					Files
				</li>
			</ul>
		</div>
		<div class=" border-b px-5 py-2  hidden sm:block">
			<ul class="text-xs flex justify-start space-x-4 items-center">
				<li
					class="p-2 flex justify-start items-center  font-semibold hover:bg-neutral-100 rounded-md  hover:border-neutral-900  text-neutral-500 cursor-pointer hover:text-neutral-900">
					<i class="fa-solid fa-bars mr-1"></i>
					Filter
				</li>
				<li
					class="p-2 flex justify-start items-center  font-semibold hover:bg-neutral-100 rounded-md  hover:border-neutral-900  text-neutral-500 cursor-pointer hover:text-neutral-900">
					<i class="fa-solid fa-arrow-up-wide-short mr-1"></i>
					Sort
				</li>
				<li
					class="p-2 flex justify-start items-center  font-semibold hover:bg-neutral-100 rounded-md  hover:border-neutral-900  text-neutral-500 cursor-pointer hover:text-neutral-900">
					<i class="fa-solid fa-id-card mr-1"></i>
					Show fields
				</li>
			</ul>
		</div>

		<SectionList :sections="sections" :tasks="tasks" />
	</div>
</template>
<style scoped></style>