<template>
  <div>
    <LoaderView v-if="!selectedPost?.id"
      class="loader lg:w-[60%] md:w-[80%] sm:w-[90%] max-sm:w-[90%] grid justify-center mx-auto mt-[330px] p-20" />
    <div v-else class="w-full pt-[200px]">
      <div
        class="mx-auto w-[60%] max-sm:w-[90%] border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-md p-5 text-sm leading-6"
        style="direction: rtl;">
        <div
          class="post-header text-xs text-zinc-700 dark:text-white flex flex-col gap-3 border-b border-zinc-300 dark:border-zinc-500 pb-3">
          <div class="w-full grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <span v-if="selectedPost?.showCreated">ایجاد در {{ formatDate(selectedPost?.created) }}</span>
            <span v-if="selectedPost?.showEdited">ویرایش در {{ formatDate(selectedPost?.updated) }}</span>
            <span v-if="selectedPost?.showAuthor">منتشر شده توسط {{ selectedPost?.author }}</span>
          </div>
          <div class="flex gap-5">
            <span class="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17" />
              </svg>
              <span>{{ selectedPost?.views }}</span>
            </span>
            <span class="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z" />
              </svg>
              <span>{{ selectedPost?.likes.length }}</span>
            </span>
            <span v-if="selectedPost?.showComments" class="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM2 18V2h20v20l-4-4z" />
              </svg>
              <span>{{ postComments.length }}</span>
            </span>
          </div>
        </div>

        <div class="post-body mt-3">
          <div class="text-lg" style="direction: rtl;">
            {{ selectedPost?.title }}
          </div>
          <div v-if="selectedPost?.showPoster" class="mt-3">
            <NuxtImg :src="selectedPost?.blobUrl" alt="poster" loading="lazy" class="w-full" />
          </div>
          <div class="my-3" id="postContent">

          </div>
        </div>

        <div class="post-footer flex flex-col gap-3 border-t border-zinc-300 dark:border-zinc-500 pt-3">
          <div class="flex gap-2">
            <span>
              <LikePost />
            </span>
            <span>
              <ShareView />
            </span>
          </div>
          <div v-if="selectedPost?.showTags" class="mt-1">
            <span v-for="tag in selectedPost?.tags" :key="tag"
              class="p-1 border border-blue-900 rounded-md text-blue-900 mr-1 first:mr-0 cursor-pointer hover:bg-blue-900 hover:text-white dark:bg-zinc-600 dark:text-white dark:border-zinc-500 dark:hover:bg-white dark:hover:text-zinc-800 duration-200">
              {{ tag }}
            </span>
          </div>
          <div v-if="selectedPost?.showComments">
            <span>
              <PostCommentView />
            </span>
            <span>
              <CommentsView :post="selectedPost" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store';
import useFormatDate from "../../composables/useFormatDate";
import ShareView from '~/components/ShareView.vue';
import baseUrls from '~/server/useApi/baseUrls';

const route = useRoute();

const store = useStore();
const { getPost, viewPost } = store;
const { selectedPost, postComments } = storeToRefs(store);

const formatDate = useFormatDate();

const getBlob = async () => {
  return await fetch(`${baseUrls[0].url}api/files/posts/${selectedPost.value?.id}/${selectedPost.value?.poster}`)
    .then(r => r.blob())
    .then(blob => selectedPost.value = { ...selectedPost.value, blobUrl: URL.createObjectURL(blob) })
}

onMounted(() => {
  getPost(route.params?.id)
    .then(async () => await viewPost())
    .then(async () => await getBlob())
    .then(() => {
      document.querySelector("#postContent").insertAdjacentHTML("afterbegin", selectedPost.value?.content);
    })
    .then(() => {
      useHead({
        title: `${selectedPost.value?.title}`,
        meta: [
          { name: `${selectedPost.value?.title}`, content: `${selectedPost.value?.descr}` },
          { name: "آسیب یار", content: "مرجع اطلاع رسانی، آموزش و پیشگیری از تروما و حوادث" },
        ]
      })
    })
})

</script>

<style></style>