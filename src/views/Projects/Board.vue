<template>
	<div class="fixed overflow-auto sm:left-15  pb-24 sm:ml-64 mt-12 h-full w-full ">
		<div class="flex justify-start space-x-4 items-center px-5 py-2">
			<div class="h-14 w-14 p-1 rounded-2xl bg-sky-400 flex justify-center items-center">
				<i class="fa-solid fa-diagram-project fa-xl"></i>
			</div>
			<div class="flex justify-between items-center space-x-2">
				<h3 class="text-xl font-semibold">Project-1</h3>
				<span class="px-1 rounded-md transition-all duration-300 hover:bg-neutral-100 group cursor-pointer">
					<i
						class="fa-solid fa-chevron-down group-hover:text-black transition-all duration-300 text-gray-400"></i>
				</span>
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
		<div class="flex  sm:!pr-[100px] pb-48 bg-[#f9f8f8] overflow-scroll sm:p-5  space-x-2 w-screen  h-screen">
			<div
				class="sm:w-1/5 w-full hover:cursor-pointer hover:ring-1 ring-neutral-200 rounded-lg px-3 py-2 flex-shrink-0 flex flex-col flex-wrap">
				<div class="group flex justify-between items-center">
					<h4 class="font-semibold">To do</h4>
					<span class="flex items-center space-x-2">
						<i
							class="fa-solid fa-plus p-2 text-neutral-500 hover:text-black cursor-pointer hover:bg-gray-200 rounded-md"></i>
						<i
							class="fa-solid  fa-ellipsis  p-2 text-neutral-500 hover:text-black cursor-pointer hover:bg-gray-200 rounded-md"></i>
					</span>
				</div>
				<ul class="space-y-2 flex-1 max-h-full overflow-auto">
					<li
						class="px-5 group relative text-sm py-3 border flex flex-col border-neutral-300 max-h-full bg-white rounded-md hover:border-neutral-400 transition-all duration-400 hover:drop-shadow-lg">
						<span class="flex justify-start p-1 items-start">
							<i
								class="text-gray-500 p-1  hover:text-green-500 transition-all duration-300 hover:bg-green-100 rounded-full hover:bg-opacity-75 fa-regular fa-circle-check"></i>
							<p class="text-sm">Lorem ip Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
								sunt amet eveniet.</p>
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
					<button class="text-center hover:bg-neutral-200 w-full rounded-md py-2">
						+ Add Task
					</button>
				</ul>
			</div>
			<div
				class="sm:w-1/5  hover:cursor-pointer hover:ring-1 ring-neutral-200 rounded-lg px-3 py-2 flex-shrink-0 flex flex-col flex-wrap">
				<div class="group flex justify-between items-center">
					<h4 class="font-semibold">+ Add Section</h4>
				</div>
			</div>
		</div>

	</div>
</template>