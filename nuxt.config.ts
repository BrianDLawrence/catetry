// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Catetry: %s",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: ["body"],
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Cats and poetry come together to create Catetry.",
        },
        {
          name: "monetag",
          content: "e03b3ca405723d150690f57719312483",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    // availabe only server side
    openAIKey: process.env.OPENAIKEY,
    mongoURI: process.env.MONGOURI,
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    // Public keys that are exposed to the client
    public: {
      siteUrl: "https://catetry.com",
    },
  },
  gtag: {
    id: "G-MESC18QFLG",
    initialConsent: false,
  },
  sitemap: {
    siteUrl: "https://catetry.com",
  },
});
