import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {

    const navMenu = ref([
        { id: 1, title: "صفحه نخست" },
        { id: 3, title: "مقالات" },
        { id: 2, title: "اخبار" },
        { id: 6, title: "تماس با ما" }
    ])

    const articles = ref([
        {
            id: 1,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            poster: "https://wallpapershome.com/images/pages/pic_h/25498.jpg"
        },
        {
            id: 2,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            poster: "https://wallpapershome.com/images/pages/pic_h/26991.jpg"
        },
        {
            id: 3,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            poster: "https://wallpapershome.com/images/pages/pic_h/26874.jpg"
        },
        {
            id: 4,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            poster: "https://wallpapershome.com/images/pages/pic_h/25550.jpg"
        },
        {
            id: 5,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            poster: "https://wallpapershome.com/images/pages/pic_h/25472.jpg"
        }
    ])

    return { articles, navMenu };
})