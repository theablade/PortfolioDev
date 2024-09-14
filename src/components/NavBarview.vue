<template>
    <nav class="bg-white navbar fixed w-full border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">

                <span class="self-center flex text-xl font-semibold whitespace-nowrap dark:text-white">
                    
                    FrontEnd Prodigy _</span>
            </a>
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="{ hidden: !isMenuOpen, 'block': isMenuOpen }" class="w-full md:block md:w-auto">
                <ul
                    class="flex gap-3 flex-col p-4 md:p-0 mt-4 font-medium sm:bg-white md:bg-white lg:bg-transparent dark:lg:bg-transparent rounded-lg bg-white border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">

                    <li>
                        <a href="#" @click="setActiveMenu('home')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'home' }">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#sobre" @click="setActiveMenu('sobre')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'sobre' }">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#habilidades" @click="setActiveMenu('habilidades')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'habilidades' }">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projectos" @click="setActiveMenu('projectos')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'projectos' }">
                            Projectos
                        </a>
                    </li>

                    <li>
                        <a href="#servicos" @click="setActiveMenu('servicos')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'servicos' }">
                            Serviços
                        </a>
                    </li>

                    <li>
                        <a href="#contacto" @click="setActiveMenu('contacto')"
                            :class="{ 'border-b-2 border-blue-700 text-black p-1 dark:text-gray-100': activeMenu === 'contacto' }">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <div :class="{ dark: isDarkMode }">
                            <button @click="toggleDarkMode">
                                <div v-if="!isDarkMode" class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <span class="material-symbols-outlined">
                                        light_mode
                                    </span>
                                </div>
                                <div v-else>
                                    <span class="material-symbols-outlined dark:text-gray-300 dark:drop-shadow-2xl">
                                        dark_mode
                                    </span>
                                </div>
                            </button>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
const isMenuOpen = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

document.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


const activeMenu = ref('home')


const setActiveMenu = (item) => {

    activeMenu.value = item;
}
</script>

<style scoped>
.navbar {
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
}

.navbar.scrolled {
    background-color: rgba(255, 255, 255, 0.007);
    backdrop-filter: blur(5px);
}
</style>
