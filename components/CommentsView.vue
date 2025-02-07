<template>
    <div class="comments mt-5">
        <div class="text-lg">
            نظرات ({{ postComments?.length }})
        </div>

        <ul>
            <li v-for="comment in postComments" :key="comment?.id" class="border-b last:border-0 border-zinc-300 dark:border-zinc-600">
                <CommentView :comment="comment" @deleteComment="deleteComment" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useStore } from '~/store';

const props = defineProps({
    id: String
})

const store = useStore();
const { postComments } = storeToRefs(store);
const { getPostComments, deleteComment } = store;

onMounted(() => {
    getPostComments(props.id);
})
</script>

<style></style>