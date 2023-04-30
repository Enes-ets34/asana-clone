<template>
   <aside id="default-sidebar"
      class="fixed top-12 left-0 z-5 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div class="h-full  py-4 overflow-y-auto bg-[#1e1f21] ">
         <ul class="font-medium px-3 border-b pb-4 border-neutral-700 mb-5">
            <li
               class="flex space-x-2 hover:bg-[#2b2c2e] transition-all duration-300 items-center p-2 text-white rounded-lg text-sm active:bg-[#373839] cursor-pointer">
               <svg class="w-5 fill-[#a2a0a2]" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                  <path
                     d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z">
                  </path>
               </svg>
               <span class="">Home</span>
            </li>
            <li
               class="flex space-x-2 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
               <svg class="w-5 fill-[#a2a0a2]" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                  <path
                     d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z">
                  </path>
               </svg>

               <span class="">My Tasks</span>
            </li>
            <li
               class="flex space-x-2 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg active:bg-[#373839]  text-sm cursor-pointer">
               <svg class="w-5 fill-[#a2a0a2]" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                  <path
                     d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z">
                  </path>
               </svg>

               <span class="">Inbox</span>
            </li>
         </ul>
         <ul class="font-medium overflow-y-scroll  pb-4 border-neutral-700 mb-5">
            <li
               class=" flex-col space-x-2  group  px-1 transition-all duration-300 items-center py-2 -pl-12 text-white rounded-lg text-sm   cursor-pointer">
               <div class="flex items-center">
                  <svg
                     class="w-4 mr-1 fill-[#a2a0a2] group-hover:rotate-90 transition-all duration-300 group-hover:fill-white"
                     viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                     <path
                        d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                     </path>
                  </svg>
                  <span class="">Team</span>
               </div>
               <div
                  class=" justify-between group opacity-0 hidden group-hover:flex group-hover:opacity-100  px-3 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
                  <span class="flex space-x-2 items-center">
                     <svg class="Icon SidebarItemIcon-iconWithoutCustomizationColor UserFillIcon" viewBox="0 0 32 32"
                        aria-hidden="true" focusable="false">
                        <path
                           d="M31,30H11c-.552,0-1-.448-1-1v-2c0-3.866,3.134-7,7-7h8c3.866,0,7,3.134,7,7v2c0,.552-.448,1-1,1Zm-23-3c0-2.029,.676-3.901,1.814-5.407,.495-.656,.023-1.593-.799-1.593h-2.015c-3.866,0-7,3.134-7,7v2c0,.552,.448,1,1,1H7c.552,0,1-.448,1-1v-2ZM28.5,10c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5,3.358,7.5,7.5,7.5,7.5-3.358,7.5-7.5Zm-17,0c0-2.125,.698-4.087,1.878-5.67,.431-.579,.176-1.413-.522-1.594-1.074-.278-2.24-.324-3.45-.067-2.917,.619-5.248,2.996-5.779,5.93-.86,4.758,2.773,8.901,7.373,8.901,.632,0,1.245-.08,1.831-.23,.71-.181,.984-1.013,.546-1.601-1.179-1.582-1.877-3.544-1.877-5.669Z">
                        </path>
                     </svg>

                     <span class="">My Workspace</span>
                  </span>
                  <svg class="hidden group-hover:inline" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                     <path
                        d="M23.2,16c0,0.3-0.1,0.7-0.3,0.9l-9,11c-0.5,0.6-1.5,0.7-2.1,0.2s-0.7-1.5-0.2-2.1l8.2-10L11.6,6c-0.5-0.6-0.4-1.6,0.2-2.1s1.6-0.4,2.1,0.2l9,11C23.1,15.3,23.2,15.7,23.2,16z">
                     </path>
                  </svg>
               </div>
            </li>
            <li
               class=" flex-col space-x-2  group  px-1 transition-all duration-300 items-center py-2 -pl-12 text-white rounded-lg text-sm   cursor-pointer">
               <div class="flex items-center">
                  <svg
                     class="w-4 mr-1 fill-[#a2a0a2] group-hover:rotate-90 transition-all duration-300 group-hover:fill-white"
                     viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                     <path
                        d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                     </path>
                  </svg>
                  <span class="">Projects</span>
                  <span
                     class="active:ring-[#a2a0a2] mx-1 active:bg-[#3d3e40] cursor-pointer hover:bg-[#323335] rounded-md p-2">
                     <svg class="MiniIcon MoreMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path
                           d="M5,12c0,1.4-1.1,2.5-2.5,2.5S0,13.4,0,12s1.1-2.5,2.5-2.5S5,10.6,5,12z M12,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S13.4,9.5,12,9.5z M21.5,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5S24,13.4,24,12S22.9,9.5,21.5,9.5z">
                        </path>
                     </svg>
                  </span>
                  <span
                     class="active:ring-[#a2a0a2]  active:bg-[#3d3e40] cursor-pointer hover:bg-[#323335] rounded-md p-2">
                     <i class="fa-solid fa-plus"></i>
                  </span>
               </div>
               <div v-if="true"
                  class="  justify-center  group opacity-0 hidden group-hover:flex   group-hover:opacity-100 py-6  px-12 transition-all duration-300 bg-[#2b2c2e] items-center p-2 text-white rounded-lg  text-sm ">
                  <span class="flex flex-col  text-center space-x-2 items-center">
                     <img
                        src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/e6c7ba14667755912828fdb295019cbbc99ed7d0/create-project.svg"
                        alt="" class="object-contain">
                     <small class="my-2">
                        Organize and plan your work with projects
                     </small>
                     <button
                        class="bg-transparent ring-1 hover:bg-[#363639] transition-all duration-300 ring-white py-1 px-2 text-xs rounded-md">New
                        Project</button>
                  </span>
               </div>
               <div v-else
                  class=" justify-between group opacity-0 hidden group-hover:flex group-hover:opacity-100  px-3 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
                  <span class="flex space-x-2 items-center">
                     <div class="bg-sky-500 rounded-md p-2 h-2 w-2">

                     </div>
                     <span class="">Project-1</span>
                  </span>
               </div>
            </li>
            <li
               class=" flex-col space-x-2  group  px-1 transition-all duration-300 items-center py-2 -pl-12 text-white rounded-lg text-sm   cursor-pointer">
               <div class="flex items-center">
                  <svg
                     class="w-4 mr-1 fill-[#a2a0a2] group-hover:rotate-90 transition-all duration-300 group-hover:fill-white"
                     viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                     <path
                        d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                     </path>
                  </svg>
                  <span class="">Insights</span>

                  <span
                     class="active:ring-[#a2a0a2]  active:bg-[#3d3e40] cursor-pointer hover:bg-[#323335] rounded-md p-2">
                     <i class="fa-solid fa-plus"></i>
                  </span>
               </div>
               <div
                  class=" justify-between group opacity-0 hidden group-hover:flex group-hover:opacity-100  px-3 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
                  <span class="flex space-x-2 items-center">
                     <svg class="NavIcon ReportingNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <path d="M34.5,6C32,6,30,8,30,10.5c0,1.1,0.4,2.1,1.1,2.9l-4.3,7.6C26.5,21,26.3,21,26,21c-0.9,0-1.6,0.3-2.3,0.7L19.2,18
	c0.2-0.5,0.3-1,0.3-1.5c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5c0,0.9,0.3,1.8,0.8,2.5l-4.5,6.2C6.4,25.1,5.9,25,5.5,25
	C3,25,1,27,1,29.5S3,34,5.5,34s4.5-2,4.5-4.5c0-0.9-0.3-1.8-0.8-2.5l4.5-6.2c0.4,0.1,0.8,0.2,1.3,0.2c0.9,0,1.6-0.3,2.3-0.7l4.5,3.7
	c-0.2,0.5-0.3,1-0.3,1.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5c0-1.1-0.4-2.1-1.1-2.9l4.3-7.6c0.3,0,0.5,0.1,0.8,0.1
	c2.5,0,4.5-2,4.5-4.5S37,6,34.5,6z M5.5,31c-0.1,0-0.3,0-0.4-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0
	c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1
	c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
	c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1C4.5,28.3,5,28,5.5,28C6.3,28,7,28.7,7,29.5c0,0.4-0.1,0.7-0.3,0.9
	c0,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0
	C5.7,31,5.6,31,5.5,31C5.5,31,5.5,31,5.5,31z M15,18c-0.8,0-1.5-0.7-1.5-1.5c0-0.4,0.1-0.7,0.4-1c0,0,0.1-0.1,0.1-0.1
	c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0
	c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1
	c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.4,0.3,0.6,0.7,0.6,1.2C16.5,17.3,15.8,18,15,18z M25.9,27c-0.1,0-0.1,0-0.2,0
	c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.1c-0.4-0.3-0.6-0.7-0.6-1.2c0-0.8,0.7-1.5,1.5-1.5
	s1.5,0.7,1.5,1.5c0,0.3-0.1,0.6-0.2,0.8c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1
	c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c0,0-0.1,0-0.1,0C26.1,27,26,27,25.9,27C25.9,27,25.9,27,25.9,27z
	 M33,10.5c0-0.3,0.1-0.6,0.2-0.8c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1
	c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0
	c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0
	c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
	c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1
	c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1c-0.2,0.5-0.8,0.8-1.3,0.8C33.7,12,33,11.3,33,10.5z"></path>
                     </svg>
                     <span class="">Reporting</span>
                  </span>

               </div>
               <div
                  class=" justify-between group opacity-0 hidden group-hover:flex group-hover:opacity-100  px-3 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
                  <span class="flex space-x-2 items-center">
                     <svg class="" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <path
                           d="M35,12c1.7,0,3,1.3,3,3v16c0,2.8-2.2,5-5,5H7c-2.8,0-5-2.2-5-5V7c0-1.7,1.3-3,3-3h11.9c0.4,0,0.8,0.2,0.9,0.6  l2.4,5.6c0.5,1.1,1.6,1.8,2.8,1.8H35z M35,15v16c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V15H35z M17.8,12c-0.1-0.2-0.2-0.4-0.3-0.7  L15.6,7H5v5H17.8z">
                        </path>
                     </svg>
                     <span class="">Portfolios</span>
                  </span>

               </div>
               <div
                  class=" justify-between group opacity-0 hidden group-hover:flex group-hover:opacity-100  px-3 transition-all duration-300 hover:bg-[#2b2c2e] items-center p-2 text-white rounded-lg  active:bg-[#373839] text-sm cursor-pointer">
                  <span class="flex space-x-2 items-center">
                     <svg class="NavIcon GoalNavIcon" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <path
                           d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z">
                        </path>
                     </svg>
                     <span class="">Goals</span>
                  </span>

               </div>
            </li>
         </ul>
      </div>
   </aside>
</template>
<style scoped>
svg {
   width: 1rem;
   fill: #a2a0a2;
}
</style>