<template>
    <div class="w-full h-full flex flex-col justify-between">
        <div>
            <div>
                <NuxtImg class="w-full h-[200px]" :src="post?.poster" alt="poster" loading="lazy" />
            </div>
            <div class="mt-2">
                <div class="text-lg font-bold">{{ post?.title }}</div>
                <div class="text-sm mt-3 leading-6">
                    {{ post?.descr }}
                </div>
            </div>
        </div>
        <div class="mt-5 mb-3">
            <NuxtLink :to="`post/${post?.id}`">
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