// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: "Catetry: %s",
            htmlAttrs: {
                lang: "en"
            },
            bodyAttrs: {
                class: ["body"]
            },
            meta: [
                { charset: "utf-8" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: "description",
                    content: "Cats and poetry come together to create Catetry.",
                }
            ]
        },
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/google-adsense'],
    runtimeConfig: {// availabe only server side
        openAIKey: process.env.OPENAIKEY,
        mongoURI: process.env.MONGOURI,
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        // Public keys that are exposed to the client
        public: {
            'google-adsense': {
                id: process.env.GOOGLE_ADSENSE_ID,
                test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',

            },
        },
    },
    gtag: {
        id: 'G-MESC18QFLG'
    },
})
