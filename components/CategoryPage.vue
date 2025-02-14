<template>
    <div>
        <Posts :title="selectedPage?.pageTitle" :posts="posts" class="pt-[170px]" />
    </div>
</template>

<script setup>
import { useStore } from '~/store';

const route = useRoute();

const store = useStore();
const { selectedPage, posts } = storeToRefs(store);
const { getPage, getPosts } = store;

onMounted(() => {
    getPage(route.params?.link)
    .then(async () => {
        posts.value = [];
        await getPosts(selectedPage.value?.pageRoute);
    })
})
</script>

<style></style>