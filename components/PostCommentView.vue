<template>
    <form @submit.prevent="postOrEdit" class="comment-form grid gap-2 mt-2">
        <div>
            <input v-model="name" type="text" name="name" placeholder="نام"
                class="px-2 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md" required>
        </div>

        <div>
            <input v-model="email" type="email" name="email" placeholder="ایمیل"
                class="px-2 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md" required>
        </div>

        <div>
            <textarea v-model="message" type="text" name="message" placeholder="نظر خود را بیان کنید..."
                class="px-2 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md"
                required></textarea>
        </div>

        <div class="mt-2">
            <button
                class="text-xs p-2 border-[1px] text-white border-blue-800 bg-blue-900 hover:bg-blue-600 dark:border-zinc-800 dark:bg-zinc-900 duration-100 dark:hover:bg-white dark:hover:text-black cursor-pointer rounded-md">
                {{ selectedComment ? 'ویرایش نظر' : 'ثبت نظر' }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { useStore } from '~/store';

const name = ref("");
const email = ref("");
const message = ref("");

const store = useStore();

const { selectedPost, postComments, selectedComment } = storeToRefs(store);
const { postComment, editComment } = store;

const tempID = ref("");

onMounted(() => {
    tempID.value = localStorage.getItem("tempID");
})

watch(selectedComment, () => {
    if (selectedComment.value) {
        name.value = selectedComment.value?.name;
        email.value = selectedComment.value?.email;
        message.value = selectedComment.value?.message;

    } else {
        name.value = "";
        email.value = "";
        message.value = "";
    }
})

const postOrEdit = async () => {
    let newComment = "";

    if (!selectedComment.value) {
        if (postComments.value.length === 0) {
            newComment = {
                "id": `${1}`,
                "postId": selectedPost.value.id,
                "uid": tempID.value,
                "name": name.value,
                "email": email.value,
                "message": message.value,
                "likes": []
            }

        } else {
            let lastComment = postComments.value.sort((a, b) => +b.id - +a.id)[0];

            newComment = {
                "id": `${+lastComment.id + 1}`,
                "postId": selectedPost.value.id,
                "uid": tempID.value,
                "name": name.value,
                "email": email.value,
                "message": message.value,
                "likes": []
            }
        }

        await postComment(selectedPost.value.id, newComment)
            .then(() => {
                name.value = "";
                email.value = "";
                message.value = "";
            })

    } else {
        await editComment(selectedComment.value?.postId, selectedComment.value?.id, {
            ...selectedComment.value,
            message: message.value
        })
            .then(() => selectedComment.value = "");
    }
}

</script>

<style></style>