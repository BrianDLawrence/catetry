//https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler((event) => {
    const breeds = [
        { id: 1, value: "Abyssinian" },
        { id: 2, value: "American Bobtail" },
        { id: 3, value: "American Shorthair" },
        { id: 4, value: "American Longhair" },
        { id: 5, value: "Balinese" },
        { id: 6, value: "Bengal" },
        { id: 7, value: "Birman" },
        { id: 8, value: "British Shorthair" },
        { id: 9, value: "Burmese" },
        { id: 10, value: "Chartreux" },
        { id: 11, value: "Cornish Rex" },
        { id: 12, value: "Devon Rex" },
        { id: 13, value: "Egyptian Mau" },
        { id: 14, value: "Exotic Shorthair" },
        { id: 15, value: "Maine Coon" },
        { id: 16, value: "Norwegian Forest Cat" },
        { id: 17, value: "Oriental Shorthair" },
        { id: 18, value: "Persian" },
        { id: 19, value: "Ragdoll" },
        { id: 20, value: "Russian Blue" },
        { id: 21, value: "Scottish Fold" },
        { id: 22, value: "Siamese" },
        { id: 23, value: "Siberian" },
        { id: 24, value: "Somali" },
        { id: 25, value: "Sphynx" },
        { id: 26, value: "Tonkinese" },
        { id: 27, value: "Turkish Angora" },
        { id: 28, value: "Turkish Van" },
        { id: 29, value: "other" },
    ]

    return breeds
});