<template>
  <div class="py-3">
    <div>
      <div class="text-sm text-zinc-800 dark:text-white flex justify-between">
        <span>
          {{ comment?.name }}
        </span>
        <div v-if="comment?.uid === tempID" class="flex gap-1">
          <span @click="emit('selectComment', comment)">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.907 4.93c.104-.105.294-.186.539-.18a.85.85 0 0 1 .572.216c.13.13.222.34.231.575s-.065.413-.167.515l-7.49 7.5l-1.273.116l.1-1.245zm2.173-1.024c-.437-.438-1.037-.643-1.6-.656s-1.182.167-1.635.62l-7.682 7.692a.75.75 0 0 0-.217.47l-.194 2.407a.75.75 0 0 0 .816.807l2.43-.22a.75.75 0 0 0 .463-.218l7.682-7.692c.456-.456.627-1.073.605-1.635a2.37 2.37 0 0 0-.668-1.575M5.812 4.75a2.57 2.57 0 0 0-2.563 2.562v10.875a2.57 2.57 0 0 0 2.563 2.563h10.875a2.57 2.57 0 0 0 2.563-2.562V12.75a.75.75 0 0 0-1.5 0v5.438c0 .582-.48 1.062-1.063 1.062H5.812c-.583 0-1.063-.48-1.063-1.062V7.312c0-.582.48-1.062 1.063-1.062h5.437a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
          </span>
          <span @click="emit('deleteComment', comment)">
            <svg class="cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8.7H4a.75.75 0 1 1 0-1.5h16a.75.75 0 0 1 0 1.5"/><path fill="currentColor" d="M16.44 20.75H7.56A2.4 2.4 0 0 1 5 18.49V8a.75.75 0 0 1 1.5 0v10.49c0 .41.47.76 1 .76h8.88c.56 0 1-.35 1-.76V8A.75.75 0 1 1 19 8v10.49a2.4 2.4 0 0 1-2.56 2.26m.12-13a.74.74 0 0 1-.75-.75V5.51c0-.41-.48-.76-1-.76H9.22c-.55 0-1 .35-1 .76V7a.75.75 0 1 1-1.5 0V5.51a2.41 2.41 0 0 1 2.5-2.26h5.56a2.41 2.41 0 0 1 2.53 2.26V7a.75.75 0 0 1-.75.76Z"/><path fill="currentColor" d="M10.22 17a.76.76 0 0 1-.75-.75v-4.53a.75.75 0 0 1 1.5 0v4.52a.75.75 0 0 1-.75.76m3.56 0a.75.75 0 0 1-.75-.75v-4.53a.75.75 0 0 1 1.5 0v4.52a.76.76 0 0 1-.75.76"/></svg>
          </span>
        </div>
      </div>
      <span class="text-xs flex flex-col text-zinc-500 dark:text-zinc-400">
        {{ comment?.email }}
      </span>
    </div>
    <div class="mt-1 text-zinc-600 dark:text-zinc-300">
      <span :id="`commentMessage${comment?.id.slice(3, 7)}`">
        {{ comment?.message }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    comment: Object
})

const emit = defineEmits(["deleteComment", "selectComment"]);

const tempID = ref("");

onMounted(() => {
  tempID.value = localStorage.getItem("tempID");
})
</script>

<style>

</style>