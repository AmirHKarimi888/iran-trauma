<template>
  <div class="latest lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto"
    style="direction: rtl;">
    <div class="mt-8 mb-3 mr-12 text-lg" style="direction: rtl;">
      {{ title }}
    </div>
    <ul class="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <li v-for="item in posts" :key="item?.id" class="border border-gray-300 bg-gray-100 dark:border-gray-800 dark:bg-zinc-800 shadow-md dark:shadow-none p-2">
        <div>
          <img :src="item?.poster" />
        </div>
        <div class="mt-2">
          <div class="text-lg font-bold">{{ item?.title }}</div>
          <div class="text-sm">
            {{ item?.descr }}
          </div>
        </div>
        <div class="mt-5 mb-3">
          <NuxtLink to="/">
            <span
              class="text-xs p-2 border-[1px] w-[25%] text-white border-blue-800 bg-blue-900 hover:bg-blue-600 dark:border-zinc-800 dark:bg-zinc-900 duration-100 dark:hover:bg-white dark:hover:text-black">
              مطالعه بیشتر
            </span>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Object,
  title: Text
})
</script>

<style></style>