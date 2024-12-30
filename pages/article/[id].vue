<template>
  <div>
    <div class="w-full min-h-screen">
    <div
      class="mx-auto mt-[200px] w-[60%] max-sm:w-[90%] border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-2 text-sm leading-6"
      style="direction: rtl;">
      <div class="text-lg" style="direction: rtl;">
       {{ selectedArticle?.title }}
      </div>
      <div class="my-5">
        <img v-if="selectedArticle?.id === 1" src="../../assets/images/ar1.jpg" alt="poster">
        <img v-if="selectedArticle?.id === 2" src="../../assets/images/ar2.jpg" alt="poster">
      </div>
      <div>
        {{ selectedArticle?.text }}
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store';

const route = useRoute();

const store = useStore();

const { articles } = storeToRefs(store);

const selectedArticle = ref("hi");

onMounted(() => {
  selectedArticle.value = articles.value.find(item => `${item?.id}` === `${route.params?.id}`);
})
</script>

<style>

</style>