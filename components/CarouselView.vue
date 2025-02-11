<template>
    <div class="carousel m-auto lg:w-[60%] md:w-[80%] sm:w-[100%] max-sm:w-full mt-[138px] pt-[30px]">
        <Carousel :value="carousel" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000"
            :showIndicators="false" class="">
            <template #item="slotProps">
                <div class="border border-gray-300 dark:border-zinc-700 dark:border-surface-700 rounded m-2 p-4 bg-gray-100 dark:bg-zinc-800 shadow-md dark:shadow-none"
                    style="direction: rtl;">
                    <NuxtImg class="w-full h-[400px] max-sm:h-[200px]" :src="slotProps.data?.blobUrl" alt="poster"
                        loading="lazy" />
                    <div class="mt-2">
                        <div class="text-lg font-bold">{{ slotProps.data?.title }}</div>
                        <div class="text-sm">
                            {{ slotProps.data?.descr }}
                        </div>
                    </div>
                    <div class="mt-5 mb-3">
                        <NuxtLink :to="slotProps.data?.link">
                            <span
                                class="text-xs p-2 border-[1px] w-[25%] text-white border-blue-800 bg-blue-900 hover:bg-blue-600 dark:border-zinc-800 dark:bg-zinc-900 duration-100 dark:hover:bg-white dark:hover:text-black">
                                مطالعه بیشتر
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { Carousel } from "primevue";
import baseUrls from '~/server/useApi/baseUrls';

const props = defineProps({
    carousel: Object,
    title: String
})

const carousel = ref([]);

onBeforeMount(() => {
    carousel.value = props.carousel;
    carousel.value.filter(async (post) => {
        await fetch(`${baseUrls[0].url}api/files/carousel/${post?.id}/${post?.poster}`)
            .then(r => r.blob())
            .then(blob => post.blobUrl = URL.createObjectURL(blob))
    })
})
</script>
