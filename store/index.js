import { defineStore } from "pinia";
import useApi from "~/server/useApi";
import baseUrls from "~/server/useApi/baseUrls";

export const useStore = defineStore("store", () => {

    const navMenu = ref([]);

    const carousel = ref([]);

    const latestArticles = ref([]);

    const selectedPost = ref({});

    const { get } = useApi();

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

    return { navMenu, carousel, latestArticles, selectedPost, getNavMenu, getCarousel, getLatestArticles, getPost };
})