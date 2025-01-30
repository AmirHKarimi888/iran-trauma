<template>
    <div>
        <div>
            <img class="w-full h-[200px]" v-if="post?.id === 1" src="../assets/images/ar1.jpg" alt="poster">
            <img class="w-full h-[200px]" v-if="post?.id === 2" src="../assets/images/ar2.jpg" alt="poster">
        </div>
        <div class="mt-2">
            <div class="text-lg font-bold">{{ post?.title }}</div>
            <div class="text-sm">
                {{ post?.descr }}
            </div>
        </div>
        <div class="mt-5 mb-3">
            <NuxtLink :to="post?.link">
                <span
                    class="text-xs p-2 border-[1px] w-[25%] text-white border-blue-800 bg-blue-900 hover:bg-blue-600 dark:border-zinc-800 dark:bg-zinc-900 duration-100 dark:hover:bg-white dark:hover:text-black">
                    مطالعه بیشتر
                </span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    post: Object
})
</script>

<style></style>