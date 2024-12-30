<template>
  <div class="home w-full">
    <CarouselView />
    <LatestView :posts="articles" title="آخرین مقالات" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '~/store';

const store = useStore();
const { articles } = storeToRefs(store);

useHead({
  title: "آسیب یار",
  meta: [
    { name: "آسیب یار", content: "مرجع اطلاع رسانی، آموزش و پیشگیری از تروما و حوادث" },
    { name: "Iranian Trauma Society", content: "" }
  ],
  link: [
    { rel: "icon", href: "/logo.png" }
  ]
})
</script>

<style>

</style>