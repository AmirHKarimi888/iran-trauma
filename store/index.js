import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {

    const navMenu = ref([
        { id: 1, title: "صفحه نخست", path: "/", sublinks: [] },
        { id: 2, title: "آموزش", path: "#", sublinks: [
            { id: 1, title: "مقالات آموزشی", path: "#", sublinks: [
                { id: 1, title: "ایمنی رانندگان و مسافران", path: "/ایمنی رانندگان و مسافران" },
                { id: 2, title: "ایمنی جاده", path: "/ایمنی جاده" },
                { id: 3, title: "ایمنی وسایل نقلیه", path: "/ایمنی وسایل نقلیه" },
                { id: 4, title: "ایمنی در ورزش", path: "/ایمنی در ورزش" },
                { id: 5, title: "ایمنی در محیط کار و خانه", path: "/ایمنی در محیط کار و خانه" },
            ] },
            { id: 2, title: "چندرسانه‌ای", path: "#", sublinks: [
                { id: 1, title: "فیلم", path: "/فیلم" },
                { id: 2, title: "پمفلت", path: "/پمفلت" }
            ] },
        ]},
        { id: 3, title: "تازه‌ها", path: "#", sublinks: [
            { id: 1, title: "حوادث", path: "/حوادث", sublinks: [] },
            { id: 2, title: "هوش مصنوعی در تروما و ایمنی", path: "/هوش مصنوعی در تروما و ایمنی", sublinks: [] },
        ]},
        { id: 4, title: "روز جهانی تروما", path: "/trauma-international-day", sublinks: [] },
        { id: 5, title: "درباره ما", path: "/درباره ما", sublinks: [] },
        { id: 6, title: "تماس با ما", path: "/تماس با ما", sublinks: [] }
    ])

    const carousel = ref([
        {
            id: 1,
            title: "بنر 1",
            descr: "این یک بنر است",
            link: "#",
            poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
        },
        {
            id: 2,
            title: "بنر 2",
            descr: "این یک بنر است",
            link: "#",
            poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
        },
        {
            id: 3,
            title: "بنر 3",
            descr: "این یک بنر است",
            link: "#",
            poster: "https://wallpapershome.com/images/pages/pic_h/26981.jpg"
        },
    ]);

    const articles = ref([
        {
            id: 1,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            link: "",
            poster: "https://wallpapershome.com/images/pages/pic_h/25498.jpg"
        },
        {
            id: 2,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            link: "",
            poster: "https://wallpapershome.com/images/pages/pic_h/26991.jpg"
        },
        {
            id: 3,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            link: "",
            poster: "https://wallpapershome.com/images/pages/pic_h/26874.jpg"
        },
        {
            id: 4,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            link: "",
            poster: "https://wallpapershome.com/images/pages/pic_h/25550.jpg"
        },
        {
            id: 5,
            title: "مقاله 1",
            descr: "این مقاله یک است",
            link: "",
            poster: "https://wallpapershome.com/images/pages/pic_h/25472.jpg"
        }
    ])

    

    return { articles, navMenu, carousel };
})