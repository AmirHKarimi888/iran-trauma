<template>
  <div class="latest lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto"
    style="direction: rtl;">
    <div class="mt-8 mb-3 mr-12 text-lg" style="direction: rtl;">
      {{ title }}
    </div>
    <ul class="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <li v-for="post in posts" :key="post?.id" class="border border-gray-300 bg-gray-100 dark:border-gray-800 dark:bg-zinc-800 shadow-md dark:shadow-none p-2">
        <Post :post="post" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Object,
  title: String
})
</script>

<style></style>