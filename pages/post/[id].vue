<template>
  <div>
    <LoaderView v-if="!selectedPost?.id"
      class="loader lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto mt-[330px] p-20" />
    <div v-else class="w-full min-h-screen">
      <div class="post-header">

      </div>

      <div
        class="post-body mx-auto mt-[200px] w-[60%] max-sm:w-[90%] border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-5 text-sm leading-6"
        style="direction: rtl;">
        <div class="text-lg" style="direction: rtl;">
          {{ selectedPost?.title }}
        </div>
        <div class="my-5">
          <NuxtImg :src="selectedPost?.poster" alt="poster" loading="lazy" />
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
import useFormatDate from "../../composables/useFormatDate";

const route = useRoute();

const store = useStore();
const { getPost } = store;
const { selectedPost } = storeToRefs(store);

onMounted(() => {
  getPost(route.params?.id)
    .then(() => {
      const formatDate = useFormatDate();

      console.log(formatDate(selectedPost.value?.createdAt));
    })
})
</script>

<style></style>