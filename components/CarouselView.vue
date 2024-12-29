<template>
    <div class="carousel m-auto lg:w-[60%] md:w-[80%] sm:w-[100%] max-sm:w-full mt-[170px]">
        <Carousel :value="products" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000"
            :showIndicators="false" class="">
            <template #item="slotProps">
                <div
                    class="border border-gray-300 dark:border-zinc-700 dark:border-surface-700 rounded m-2 p-4 bg-gray-100 dark:bg-zinc-800">
                    <NuxtLink to="/">
                        <img :src="slotProps.data.poster" :alt="slotProps.data.name">
                        <div class="pt-2 text-sm" style="direction: rtl;">{{ slotProps.data.descr }}</div>
                    </NuxtLink>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { Carousel } from "primevue";

const products = ref([
    {
        id: 1,
        name: "hej",
        descr: "این یک بنر است",
        poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
    },
    {
        id: 2,
        name: "hej",
        descr: "این یک بنر است",
        poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
    },
    {
        id: 3,
        name: "hej",
        descr: "این یک بنر است",
        poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
    },
]);

</script>
