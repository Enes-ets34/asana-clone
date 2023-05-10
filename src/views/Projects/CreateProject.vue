
<template>
    <div class="flex flex-col md:flex-row h-screen relative">
        <!-- Sol Tarafta Form -->
        <router-link to="/" tag="a"
            class="absolute left-10 md:left-5 text-gray-500 top-5 hover:bg-zinc-100 px-1.5 rounded-md cursor-pointer">
            <i class="fa-solid fa-arrow-left-long"></i>
        </router-link>
        <div class="lg:w-1/2 w-full border-r-2  p-16">
            <div class="md:w-2/3 w-full mx-auto lg:m-0 flex flex-col">
                <h1 class="text-4xl font-light">New project</h1>
                <div class="flex flex-col">
                    <label for="project_name" class="text-gray-500  mt-10 text-sm">Project name</label>
                    <input type="text" name="project_name" class="bg-slate-100 rounded-none border-b p-2" id="project_name">
                </div>
                <button
                    class="text-center  transition-all duration-300 mt-6 rounded-md w-full py-2 bg-[#4573d2] hover:bg-[#426dc6] active:bg-[#3f66ba] text-sm text-white">Continue</button>
            </div>
        </div>
        <img src="/public/create_project_avatar.png"
            class="hidden lg:inline-block object-fill z-10 md:w-[940px] border rounded-lg drop-shadow-lg  md:h-[600px] top-12 right-0 absolute" alt="">
        <div class="hidden lg:flex md:w-1/2  border-r-2 bg-blue-900 items-center  justify-center">
        </div>


    </div>
</template>