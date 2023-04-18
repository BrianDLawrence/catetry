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
    modules: ["@vuestic/nuxt"],
    vuestic: {
        config: {
            colors: {
                variables: {
                    primary: "#EACA15",
                    secondary: "#1535EA",
                },
            },
        },
    },
})
