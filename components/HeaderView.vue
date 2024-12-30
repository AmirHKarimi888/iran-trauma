/* eslint-disable */
<template>
    <div class="header">
        <div
            class="navbar fixed top-0 right-0 w-full h-[81px] bg-gray-300/60 dark:bg-zinc-800/90 flex justify-between items-center px-10 max-sm:px-2 z-50">
            <div class="flex items-center gap-1">
                <NuxtLink to="/">
                    <img class="w-[60px]" src="/logo.png" alt="logo">
                </NuxtLink>
                <NuxtLink to="/">
                    <div class="font-bold text-sm text-blue-700 dark:text-white">آسیب‌ یار</div>
                    <div class="text-sm max-sm:text-[0.5rem] text-yellow-700 dark:text-zinc-400 max-sm:leading-3">مرجع اطلاع رسانی،
                        آموزش، <br class="sm:hidden">پیشگیری و ایمنی در
                        مقابل تروما</div>
                </NuxtLink>
            </div>

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
                    <NuxtLink to="/عضویت">
                        <span
                            class="bg-blue-800 dark:bg-zinc-900 text-white dark:hover:text-black p-3 text-sm rounded-md border border-blue-900 dark:border-zinc-900 hover:bg-blue-600 dark:hover:bg-white duration-100">
                            عضویت
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <div class="navmenu fixed top-[82px] right-0 w-full h-[56px] bg-blue-900 dark:bg-zinc-800 text-white z-50">
            <ul class="w-full h-full flex gap-x-5 max-sm:gap-x-3 justify-start items-center pr-16 max-sm:hidden">
                <li class="cursor-pointer h-full flex items-center" v-for="item in navMenu" :key="item?.id"
                    @mouseenter="toggleSubLinks(item?.id)" @mouseleave="toggleSubLinks(item?.id)"
                    @touchstart="toggleSubLinks(item?.id)" id="SubLinkOpener">
                    <NuxtLink :to="item?.path" class="hover:text-yellow-400">
                        <span>
                            {{ item?.title }}
                        </span>
                    </NuxtLink>
                    <div v-if="item?.sublinks.length !== 0" :id="`SubLink${item?.id}`"
                        class="hidden bg-blue-800 dark:bg-zinc-800 dark:border-t dark:border-zinc-700 z-50 fixed top-[138px] p-3">
                        <ul class="grid">
                            <li class="w-full h-full py-2 grid items-center" v-for="sub in item?.sublinks"
                                :key="sub?.id" @mouseenter="toggleSubSubLinks(sub?.id)"
                                @mouseleave="toggleSubSubLinks(sub?.id)" @touchstart="toggleSubSubLinks(sub?.id)">
                                <NuxtLink :to="sub?.path" class="hover:text-yellow-400">
                                    <span>
                                        {{ sub?.title }}
                                    </span>
                                </NuxtLink>
                                <div v-if="sub?.sublinks.length !== 0" :id="`SubSubLink${sub?.id}`"
                                    class="hidden bg-blue-800 dark:bg-zinc-800 dark:border-t dark:border-zinc-700 z-40 fixed top-[180px] right-[275px] p-3">
                                    <ul class="grid">
                                        <li class="w-full h-full py-2 grid items-center" v-for="subsub in sub?.sublinks"
                                            :key="subsub?.id">
                                            <NuxtLink :to="subsub?.path" class="hover:text-yellow-400">
                                                <span>
                                                    {{ subsub?.title }}
                                                </span>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div>
                <div class="sm:hidden w-[50px] h-[56px] grid justify-center items-center">
                    <span class="cursor-pointer" @click="drawerVisible = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
                        </svg>
                    </span>
                </div>

                <div>
                    <Drawer style="direction: rtl;" v-model:visible="drawerVisible" header="منوی وبسایت"
                        position="right" class="w-[240px] text-sm">
                        <ul class="mt-5 w-full flex flex-col gap-y-5 justify-start items-center pr-2">
                            <li id="SubLinkOpener" class="cursor-pointer w-full grid items-center"
                                v-for="item in navMenu" :key="item?.id">
                                <NuxtLink :to="item?.path" class="hover:text-yellow-400 flex gap-1"
                                    @click="toggleSubLinks(item?.id)">
                                    <span>
                                        {{ item?.title }}
                                    </span>
                                    <span v-if="item?.sublinks.length !== 0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                        </svg>
                                    </span>
                                </NuxtLink>
                                <div v-if="item?.sublinks.length !== 0" :id="`SubLink${item?.id}${item?.id}${item?.id}`"
                                    class="hidden mt-1">
                                    <ul class="cursor-pointer w-full grid items-center gap-1">
                                        <li class="cursor-pointer w-full grid items-center"
                                            v-for="sub in item?.sublinks" :key="sub?.id">
                                            <NuxtLink :to="sub?.path" class="hover:text-yellow-400 flex gap-2"
                                                @click="toggleSubSubLinks(sub?.id)">
                                                <span>
                                                    {{ sub?.title }}
                                                </span>
                                                <span v-if="sub?.sublinks.length !== 0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                        viewBox="0 0 24 24">
                                                        <path fill="currentColor"
                                                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                                    </svg>
                                                </span>
                                            </NuxtLink>
                                            <div v-if="sub?.sublinks.length !== 0"
                                                :id="`SubSubLink${sub?.id}${sub?.id}${sub?.id}`" class="hidden mb-3">
                                                <ul class="cursor-pointer w-full grid items-center gap-1">
                                                    <li class="cursor-pointer w-full flex items-center"
                                                        v-for="subsub in sub?.sublinks" :key="subsub?.id">
                                                        <NuxtLink :to="subsub?.path" class="hover:text-yellow-400">
                                                            <span>
                                                                {{ subsub?.title }}
                                                            </span>
                                                        </NuxtLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </Drawer>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useStore } from '~/store';


const isDark = ref(false);

const store = useStore();
const { navMenu } = storeToRefs(store);

const selectedSubLinkId = ref("");
const selectedSubSubLinkId = ref("");

const drawerVisible = ref(false);

onMounted(() => {
    if ("theme" in localStorage && localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }

    document.querySelector("main").addEventListener("touchstart", () => {
        toggleSubLinks(selectedSubLinkId.value);
    })
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

const toggleSubLinks = (id) => {

    if (selectedSubLinkId.value) {
        document.querySelector(`#SubLink${id}`)?.classList.add("hidden");
        document.querySelector(`#SubLink${id}${id}${id}`)?.classList.add("hidden");
        selectedSubLinkId.value = "";
    } else {
        document.querySelector(`#SubLink${id}`)?.classList.remove("hidden");
        document.querySelector(`#SubLink${id}${id}${id}`)?.classList.remove("hidden");
        selectedSubLinkId.value = id;
    }
}

const toggleSubSubLinks = (id) => {

    if (selectedSubSubLinkId.value) {
        document.querySelector(`#SubSubLink${id}`)?.classList.add("hidden");
        document.querySelector(`#SubSubLink${id}${id}${id}`)?.classList.add("hidden");
        selectedSubSubLinkId.value = "";
    } else {
        document.querySelector(`#SubSubLink${id}`)?.classList.remove("hidden");
        document.querySelector(`#SubSubLink${id}${id}${id}`)?.classList.remove("hidden");
        selectedSubSubLinkId.value = id;
    }
}

</script>

<style></style>