import { defineStore } from "pinia";
import useApi from "~/server/useApi";
import baseUrls from "~/server/useApi/baseUrls";

export const useStore = defineStore("store", () => {

    const searchBoxVisible = ref(false);

    const navMenu = ref([]);

    const carousel = ref([]);

    const latestArticles = ref([]);
    const posts = ref([]);

    const selectedPage = ref("");

    const selectedPost = ref("");
    const postComments = ref([]);
    const selectedComment = ref("");

    const { get, put, patch, post, remove } = useApi();

    //Navmenu
    const getNavMenu = async () => {
        try {
            await get(`${baseUrls[0].url}api/collections/navmenu/records`)
                .then(response => navMenu.value = response.data?.items);
        } catch (e) {
            console.log(e.message);
        }
    }

    //Carousel
    const getCarousel = async () => {
        try {
            await get(`${baseUrls[0].url}api/collections/carousel/records`)
                .then(response => carousel.value = response.data?.items);
        } catch (e) {
            console.log(e.message);
        }
    }

    //Page
    const getPage = async (categoryName) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/categoryPages/records`);
        baseUrl.searchParams.append("filter", "pageRoute = " + "" + '"' + categoryName + '"' + "" + " && " + "" + "showPage = " + "" + true + "");

        try {
            await get(baseUrl)
                .then(response => selectedPage.value = response.data?.items[0])
        } catch (e) {
            console.log(e.message);
        }
    }

    //Posts
    const getLatestArticles = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/posts/records`);
        baseUrl.searchParams.append("sort", "-created");
        baseUrl.searchParams.append("filter", "showPost = " + "" + true + "");
        baseUrl.searchParams.append("page", 1);
        baseUrl.searchParams.append("perPage", 6);

        try {
            await get(baseUrl)
                .then(response => latestArticles.value = response.data?.items)
                
        } catch (e) {
            console.log(e.message);
        }
    }

    const getPosts = async (category) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/posts/records`);
        baseUrl.searchParams.append("sort", "-created");
        baseUrl.searchParams.append("filter", "showPost = " + "" + true + "" + " && " + "" + "category = " + "" + '"' + category + '"' + "");

        try {
            await get(baseUrl)
                .then(response => posts.value = response.data?.items)
                
        } catch (e) {
            console.log(e.message);
        }
    }

    const getPost = async (id) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/posts/records/${id}`);

        try {
            await get(baseUrl)
                .then(response => selectedPost.value = response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    const viewPost = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/posts/records/${selectedPost.value?.id}`);

        try {
            await patch(baseUrl, {
                views: +selectedPost.value?.views + 1
            })
                .then(() => selectedPost.value = { ...selectedPost.value, views: +selectedPost.value?.views + 1 });
        } catch (e) {
            console.log(e.message);
        }
    }

    const likePost = async () => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/posts/records/${selectedPost.value?.id}`);

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
            await patch(baseUrl, {
                likes: likes
            })

        } catch (e) {
            console.log(e.message);
        }
    }

    //Comments
    const getPostComments = async (post) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/comments/records`);
        baseUrl.searchParams.append("filter", "postId = " + "" + '"' + post?.id + '"' + "");
        baseUrl.searchParams.append("sort", "-created");

        try {
            await get(baseUrl)
                .then(response => postComments.value = response.data?.items)

        } catch (e) {
            console.log(e.message);
        }
    }

    const postComment = async (newComment) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/comments/records`);

        try {
            await post(baseUrl, newComment)
            .then((res) => {
                postComments.value = postComments.value.reverse();
                postComments.value = [...postComments.value, res.data];
                postComments.value = postComments.value.reverse();
            })
        } catch (e) {
            console.log(e.message);
        }
    }

    const deleteComment = async (thisComment) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/comments/records/${thisComment?.id}`);

        try {
            await remove(baseUrl)
            .then(() => {
                postComments.value = postComments.value.filter(comment => comment.id !== thisComment?.id);

            })
        } catch (e) {
            console.log(e.message);
        }
    }

    const editComment = async (thisComment) => {
        const baseUrl = new URL(`${baseUrls[0].url}api/collections/comments/records/${thisComment?.id}`);

        try {
            await patch(baseUrl, thisComment)
            .then(() => {
                postComments.value.filter(comment => {
                    if (comment.id === thisComment?.id) {
                        comment.message = thisComment.message;
                    }
                });
            })
        } catch (e) {
            console.log(e.message);
        }
    }

    return { searchBoxVisible, navMenu, carousel, posts, latestArticles, selectedPage, selectedPost, postComments, selectedComment, getNavMenu, getCarousel, getPosts, getLatestArticles, getPage, getPost, getPostComments, viewPost, likePost, postComment, deleteComment, editComment };
})