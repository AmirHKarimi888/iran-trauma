import { defineStore } from "pinia";
import useApi from "~/server/useApi";
import baseUrls from "~/server/useApi/baseUrls";

export const useStore = defineStore("store", () => {

    const navMenu = ref([]);

    const carousel = ref([]);

    const latestArticles = ref([]);

    const selectedPost = ref({});

    const { get, put } = useApi();

    //Get Fetches
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
        const baseUrl = new URL(`${baseUrls[0].url}posts`);
        baseUrl.searchParams.append("id", id);
        
        try {
            await get(baseUrl)
            .then(response => selectedPost.value = response.data[0])
        } catch (e) {
            console.log(e.message);
        }
    }

    //Put Fetches
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
            likes = [ ...likes, tempID ];
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
    return { navMenu, carousel, latestArticles, selectedPost, getNavMenu, getCarousel, getLatestArticles, getPost, viewPost, likePost };
})