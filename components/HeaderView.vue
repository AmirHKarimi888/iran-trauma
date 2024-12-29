<template>
    <div class="header">
        <div
            class="navbar fixed top-0 right-0 w-full h-[81px] bg-gray-300/60 dark:bg-zinc-800/90 flex justify-between items-center px-10 max-sm:px-2 z-50">
            <span>
                <img class="h-[66px]" src="/logo.png" alt="logo">
            </span>

            <ul class="flex justify-center gap-x-5 text-zinc-700 dark:text-gray-300">
                <li class="cursor-pointer" @click="toggleTheme">
                    <span v-if="isDark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407l-1.79 1.79l-1.407-1.408zm-1.8 15.115l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4m-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41l1.79-1.8l-1.41-1.41z" />
                        </svg></span>
                    <span v-else><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07c1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4m0-2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2" />
                        </svg></span>
                </li>

                <li class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M15.5 14h-.79l-.28-.24A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.24.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                    </svg>
                </li>

                <li class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z" />
                    </svg>
                </li>
            </ul>
        </div>

        <ul
            class="nav-menu fixed top-[82px] right-0 w-full h-[60px] bg-blue-900 dark:bg-zinc-800 text-white flex gap-x-5 max-sm:gap-x-3 justify-start items-center pr-16 max-sm:pr-3 max-sm:text-xs overflow-x-auto z-50">
            <li class="cursor-pointer" v-for="item in navMenu" :key="item.id">
                <NuxtLink :to="item?.path">
                    <span>
                        {{ item.title }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useStore } from '~/store';


const isDark = ref(false);

const store = useStore();
const { navMenu } = storeToRefs(store);

onMounted(() => {
    if ("theme" in localStorage && localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }
})

const toggleTheme = () => {
    if (isDark.value) {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        isDark.value = false;

    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        isDark.value = true;
    }
}
</script>

<style></style>