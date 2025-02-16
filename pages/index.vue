<template>
  <div class="home mt-[169px] mb-[30px] w-full">
    <div>
      <CarouselView v-if="carousel.length > 0" :carousel="carousel" :title="''" />
      <LoaderView v-else
        class="w-full grid justify-center mx-auto p-20" />
    </div>

    <div>
      <Posts v-if="latestArticles.length > 0" :posts="latestArticles" :title="'آخرین مقالات'" />
        <LoaderView v-else
        class="w-full grid justify-center mx-auto p-20" />
    </div>

    <div class="flex max-sm:flex-col gap-2 lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] mx-auto mt-3">
      <RegisterBenefits />
      <div class="w-[40%] max-sm:w-full border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-2 text-sm">
        <RegisterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '~/store';

const store = useStore();
const { getCarousel, getLatestArticles } = store;
const { latestArticles, carousel } = storeToRefs(store);

onMounted(() => {
  getCarousel();
  getLatestArticles();
})

useHead({
  title: "ماوای ایمنی",
  meta: [
    { name: "ماوای ایمنی", content: "مرجع اطلاع رسانی و آموزش ایمنی" },
    { name: "Mava Safety", content: "Educational Initiative On Trauma Prevention" }
  ]
})
</script>

<style></style>