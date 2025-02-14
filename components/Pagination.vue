
<template>
    <div>
        <Paginator :rows="3" :totalRecords="posts.length" class=" dark:bg-zinc-700"></Paginator>
    </div>
</template>

<script setup>
const props = defineProps({
    posts: Object
})
</script>

<style>

</style>

