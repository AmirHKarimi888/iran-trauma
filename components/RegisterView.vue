<template>
    <div class="register grid gap-2" style="direction: rtl;">
        <div class="text-lg" style="direction: rtl;">
            عضویت
        </div>
        <form @submit.prevent class="grid gap-5 bg-gray-100 dark:bg-zinc-800 px-1 py-3">
            <div class="grid gap-2">
                <label for="name">نام کامل</label>
                <input type="text" name="name"
                    class="border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md">
            </div>
            <div class="grid gap-2">
                <label for="email">ایمیل</label>
                <input type="email" name="email"
                    class="border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md">
            </div>
            <div class="grid gap-2">
                <label for="province">استان محل زندگی</label>
                <input type="text" name="province"
                    class="border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-600 w-full rounded-md">
            </div>

            <div class="mt-1">
                <span
                    class="text-xs p-2 border-[1px] w-[25%] text-white border-blue-800 bg-blue-900 hover:bg-blue-600 dark:border-zinc-800 dark:bg-zinc-900 duration-100 dark:hover:bg-white dark:hover:text-black cursor-pointer rounded-md">
                    ثبت نام
                </span>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style></style>