// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@primevue/nuxt-module",
    "@pinia/nuxt"
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, tailwind-utilities, primevue',
          },
          darkModeSelector: ".dark"
        }
      }
    },
    autoImport: true,
  },

  ssr: false,
  compatibilityDate: "2024-12-27"
})