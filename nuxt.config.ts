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
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        openAIKey: process.env.OPENAIKEY,
        mongoURI: process.env.MONGOURI,
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    }, // availabe only server side
})
