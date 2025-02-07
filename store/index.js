import { defineStore } from "pinia";
import useApi from "~/server/useApi";
import baseUrls from "~/server/useApi/baseUrls";

export const useStore = defineStore("store", () => {

    const navMenu = ref([]);

    const carousel = ref([]);

    const latestArticles = ref([]);

    const selectedPost = ref({});
    const postComments = ref([]);

    const { get, put, post, remove } = useApi();

    //GET Fetches
    const getNavMenu = async () => {
        try {
            await get(`${baseUrls[1].url}navmenu`)
                .then(response => navMenu.value = response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    const getCarousel = async () => {
        try {
            await get(`${baseUrls[1].url}carousel`)
                .then(response => carousel.value = response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    const getLatestArticles = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}posts`);
        baseUrl.searchParams.append("limit", 3);
        baseUrl.searchParams.append("category", "article");

        try {
            await get(baseUrl)
                .then(response => latestArticles.value = response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    const getPost = async (id) => {
        const baseUrl = new URL(`${baseUrls[0].url}posts/${id}`);

        try {
            await get(baseUrl)
                .then(response => selectedPost.value = response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    const getPostComments = async (postId) => {
        const baseUrl = `${baseUrls[0].url}posts/${postId}/comments`;

        try {
            await get(baseUrl)
                .then(response => postComments.value = response.data)
                .then(() => postComments.value = postComments.value.sort((a, b) => +b.id - +a.id))
        } catch (e) {
            console.log(e.message);
        }
    }

    //PUT Fetches
    const viewPost = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}posts/${selectedPost.value?.id}`);

        try {
            await put(baseUrl, {
                views: +selectedPost.value?.views + 1
            })
                .then(() => selectedPost.value = { ...selectedPost.value, views: +selectedPost.value?.views + 1 });
        } catch (e) {
            console.log(e.message);
        }
    }

    const likePost = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}posts/${selectedPost.value?.id}`);

        let tempID = localStorage.getItem("tempID");

        let likes = selectedPost.value?.likes;

        if (likes.includes(tempID)) {
            likes = likes.filter((ID) => {
                if (+ID !== +tempID) {
                    return ID;
                }
            })

        } else {
            likes = [...likes, tempID];
        }

        selectedPost.value = { ...selectedPost.value, likes: likes }

        try {
            await put(baseUrl, {
                likes: likes
            })
            //.then(() => selectedPost.value = { ...selectedPost.value, likes: likes });

        } catch (e) {
            console.log(e.message);
        }
    }


    //POST Fetches
    const postComment = async (postId, newComment) => {
        const baseUrl = `${baseUrls[0].url}posts/${postId}/comments`;

        try {
            await post(baseUrl, newComment)
            .then(() => {
                postComments.value = [...postComments.value, newComment];
                postComments.value = postComments.value.sort((a, b) => +b.id - +a.id);
            })
        } catch (e) {
            console.log(e.message);
        }
    }

    //DELETE Fetches
    const deleteComment = async (postId, commentId) => {
        const baseUrl = `${baseUrls[0].url}posts/${postId}/comments/${commentId}`;

        try {
            await remove(baseUrl)
            .then(() => {
                postComments.value = postComments.value.filter(comment => comment.id !== commentId);
                postComments.value = postComments.value.sort((a, b) => +b.id - +a.id);
            })
        } catch (e) {
            console.log(e.message);
        }
    }

    return { navMenu, carousel, latestArticles, selectedPost, postComments, getNavMenu, getCarousel, getLatestArticles, getPost, getPostComments, viewPost, likePost, postComment, deleteComment };
})