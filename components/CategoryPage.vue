<template>
    <div class="pt-[139px] grid items-center">
        <div>
            <div v-if="posts.length > 0">
                <Posts :title="selectedPage?.pageTitle" :posts="posts" />
                <Pagination :posts="posts" class="pt-3" />
            </div>
            <div v-else class="w-full h-screen grid justify-center items-center">
                <div v-if="!pending" class="text-lg">
                    <span>
                        <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                            viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path stroke-dasharray="64" stroke-dashoffset="64"
                                    d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                                </path>
                                <path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                        values="8;0" />
                                </path>
                                <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s"
                                        values="2;0" />
                                </path>
                            </g>
                        </svg>
                    </span>
                    <span>هنوز پستی وجود ندارد</span>
                </div>
                <LoaderView v-else />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "~/store";

const route = useRoute();

const store = useStore();
const { selectedPage, posts } = storeToRefs(store);
const { getPage, getPosts } = store;

const pending = ref(true);

onMounted(() => {
    getPage(route.params?.link)
        .then(async () => {
            posts.value = [];
            await getPosts(selectedPage.value?.pageRoute)
            .then(() => {
                if (posts.value.length === 0) {
                    setTimeout(() => {
                        pending.value = false;
                    }, 1000)
                }
            })
        })
        .then(() => {
            useHead({
                title: `${selectedPage.value?.pageTitle}`,
                meta: [
                    {
                        name: `${selectedPage.value?.pageTitle}`,
                        content: `${selectedPage.value?.pageDescr}`,
                    },
                    { name: "ماوای ایمنی", content: "مرجع اطلاع رسانی و آموزش ایمنی" },
                ],
            });
        });
});
</script>

<style></style>