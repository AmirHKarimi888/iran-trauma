<template>
    <div>
        <div><br><br><br><br><br><br><br><br>{{ selectedPage }}</div>
        <br>{{ route.params?.link }}
    </div>
</template>

<script setup>
import { useStore } from '~/store';

const route = useRoute();

const store = useStore();
const { selectedPage } = storeToRefs(store);
const { getPage } = store;

onMounted(() => {
    getPage(route.params?.link)
    .then(() => console.log(selectedPage.value))
})
</script>

<style></style>