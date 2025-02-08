<template>
    <div class="comments mt-5">
        <div class="text-lg">
            نظرات ({{ postComments?.length }})
        </div>

        <ul>
            <li v-for="comment in postComments" :key="comment?.id" class="border-b last:border-0 border-zinc-300 dark:border-zinc-600">
                <CommentView :comment="comment" @deleteComment="deleteComment" @selectComment="selectComment" />
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
const { postComments, selectedComment } = storeToRefs(store);
const { getPostComments, deleteComment } = store;

onMounted(() => {
    postComments.value = [];
    getPostComments(props.id);
})

const selectComment = (comment) => {
    if (selectedComment.value) {
        selectedComment.value = "";
    } else {
        selectedComment.value = comment;
    }
};
</script>

<style></style>