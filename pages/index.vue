<template>
    <div class="home w-full">
    <div>
      <CarouselView v-if="carousel.length > 0" :carousel="carousel" :title="''" />
      <LoaderView v-else class="latest lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto mt-[170px] p-20" />
    </div>
    
    <div>
      <Posts v-if="latestArticles.length > 0" :posts="latestArticles" :title="'آخرین مقالات'" />
      <LoaderView v-else class="latest lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto mt-[170px] p-20" />
    </div>

    <div class="flex max-sm:flex-col gap-3 lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] mx-auto mt-10">
      <div class="w-[60%] max-sm:w-full border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-5 text-sm leading-6" style="direction: rtl;">
        <div class="text-lg" style="direction: rtl;">
          فواید عضویت
        </div>
         آسیب یار به عنوان مرجع اطلاع رسانی و آموزش و پیشگیری و ایمنی از
        حوادث، از مراکز تروما و متخصصان گرفته تا بیماران و خانواده‌هایی که از آن‌ها مراقبت می‌کنند، با اعضای خود همکاری
        می‌کند تا اطمینان حاصل کند که بهترین اطلاعات و آمادگی را برای ارائه مراقبت پزشکی بی‌نظیر در جوامع خود دارند.
        آسیب یار اطلاعات حیاتی در مورد تروما را به اعضای خود، سیاست‌گذاران و عموم مردم ارائه می‌دهد و در عین حال نیازهای
        خانواده‌ها را حمایت می‌کند. ما حامی قوی پیشگیری از آسیب هستیم و برنامه‌هایی را برای کاهش تأثیر بیماری و مرگ و
        میر در کشورمان ایجاد و تولید می‌کنیم.

        آسیب یار شما را دعوت می‌کند تا به ما بپیوندید و به پیشبرد مأموریت ما کمک کنید. بیایید کیفیت مراقبت از تروما را
        شکل دهیم تا اطمینان حاصل کنیم که همه به مراقبت مناسب، در مکان مناسب و در زمان مناسب دسترسی دارند.

      </div>
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

<style></style>