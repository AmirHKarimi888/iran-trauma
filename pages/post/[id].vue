<template>
  <div>
    <div class="w-full min-h-screen">
    <div
      class="mx-auto mt-[200px] w-[60%] max-sm:w-[90%] border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-5 text-sm leading-6"
      style="direction: rtl;">
      <div class="text-lg" style="direction: rtl;">
       {{ selectedPost?.title }}
      </div>
      <div class="my-5">
        <img v-if="selectedPost?.id === 1" src="../../assets/images/ar1.jpg" alt="poster">
        <img v-if="selectedPost?.id === 2" src="../../assets/images/ar2.jpg" alt="poster">
      </div>
      <div>
        {{ selectedPost?.text }}
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store';

const route = useRoute();

const store = useStore();
const { getPost } = store;
const { selectedPost } = storeToRefs(store);

onMounted(() => {
  getPost(route.params?.id);
})
</script>

<style>

</style>