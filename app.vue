<template>
  <div id="app">
    <header style="direction: rtl;">
      <HeaderView />
    </header>
    <main class="w-full min-h-screen">
      <NuxtPage />
    </main>
    <footer style="direction: rtl;">
      <FooterView />
    </footer>
  </div>
</template>

<script setup>
onMounted(() => {
  let tempID = Math.round(Math.random() * 100000000000);

  if ("tempID" in localStorage) {
    null;
  } else {
    localStorage.setItem("tempID", tempID);
  }
})

useHead({
  link: [
    { rel: "icon", href: "/logo.png" }
  ]
})
</script>