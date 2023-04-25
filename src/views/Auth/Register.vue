<template>
    <header class="py-6 mb-16">
        <div class="container">
            <img src="/asana-logo.png" class="h-6 object-contain" alt="logo">
        </div>
    </header>
    <section>
        <div class="mx-auto w-full lg:w-1/2  px-6">
            <div class="text-center lg:px-20">
                <h2 class="text-5xl font-light mb-3">You’re one click away
                    from less busywork</h2>
            </div>

            <div class="text-xs text-center text-gray-500 my-6">
                By signing up, I agree to the Asana <span class="underline decoration-dotted">Privacy Policy</span> and
                <span class=" decoration-dotted underline">Terms of Service</span>.
            </div>

            <div class="md:px-12">
                <input
                    class="mt-1 w-full px-4 py-2  ring-2 placeholder:text-gray-300 font-light  ring-gray-200  transition-all duration-300 focus:ring-red-500 focus:outline-none rounded-sm"
                    type="email" placeholder="name@company.com" />

                <button
                    class="text-center transition-all duration-300 mt-6 rounded-sm w-full py-3 bg-black hover:bg-red-400  hover:text-black  text-white">Sign
                    up</button>
            </div>

            <div class=" hidden lg:flex justify-between mt-12 space-x-2 items-center text-gray-500 font-light">
                <div class="w-1/3 flex justify-between space-x-2 items-start">
                    <svg class="w-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol"
                        aria-labelledby="check-icon-title-id" aria-hidden="false" fill="black">
                        <title id="check-icon-title-id">check icon</title>
                        <path
                            d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM8 1C4.15 1 1 4.15 1 8C1 11.85 4.15 15 8 15C11.85 15 15 11.85 15 8C15 4.15 11.85 1 8 1ZM11.4 6.45C11.6 6.25 11.6 5.95 11.4 5.75C11.2 5.55 10.9 5.55 10.7 5.75L6.4 10.05L4.85 8.5C4.65 8.3 4.3 8.3 4.15 8.5C4 8.7 4 9 4.15 9.2L6.05 11.1C6.25 11.3 6.55 11.3 6.75 11.1L11.4 6.45Z">
                        </path>
                    </svg>
                    <small>Get access to unlimited tasks, projects, and storage.</small>
                </div>
                <div class="w-1/3 flex justify-between space-x-2 items-start">
                    <svg class="w-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol"
                        aria-labelledby="check-icon-title-id" aria-hidden="false" fill="black">
                        <title id="check-icon-title-id">check icon</title>
                        <path
                            d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM8 1C4.15 1 1 4.15 1 8C1 11.85 4.15 15 8 15C11.85 15 15 11.85 15 8C15 4.15 11.85 1 8 1ZM11.4 6.45C11.6 6.25 11.6 5.95 11.4 5.75C11.2 5.55 10.9 5.55 10.7 5.75L6.4 10.05L4.85 8.5C4.65 8.3 4.3 8.3 4.15 8.5C4 8.7 4 9 4.15 9.2L6.05 11.1C6.25 11.3 6.55 11.3 6.75 11.1L11.4 6.45Z">
                        </path>
                    </svg>
                    <small>See different views like list, board, and calendar.</small>
                </div>
                <div class="w-1/3 flex justify-between space-x-2 items-start">
                    <svg class="w-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol"
                        aria-labelledby="check-icon-title-id" aria-hidden="false" fill="black">
                        <title id="check-icon-title-id">check icon</title>
                        <path
                            d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM8 1C4.15 1 1 4.15 1 8C1 11.85 4.15 15 8 15C11.85 15 15 11.85 15 8C15 4.15 11.85 1 8 1ZM11.4 6.45C11.6 6.25 11.6 5.95 11.4 5.75C11.2 5.55 10.9 5.55 10.7 5.75L6.4 10.05L4.85 8.5C4.65 8.3 4.3 8.3 4.15 8.5C4 8.7 4 9 4.15 9.2L6.05 11.1C6.25 11.3 6.55 11.3 6.75 11.1L11.4 6.45Z">
                        </path>
                    </svg>
                    <small>Invite your teammates to explore Asana.</small>
                </div>
            </div>
        </div>
    </section>
</template>