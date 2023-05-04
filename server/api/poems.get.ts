//https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler((event) => {
    const query = getQuery(event);
    console.log(query.user)
    return "Arturo, the Siamese cat so fine,\nHis eyes like sapphires, elegant and divine,\nHis chocolate coat, so glossy and sleek,\nA Siamese cat, not meek.\n\nHis breed is known for loyalty and love,\nBut Arturo's stubbornness can make you shove,\nAnd though he creeps around like a spooky wraith,\nHe'll still play and frolic, despite the late hour's wait.\n\nArturo's love is like a fickle tide,\nThat ebbs and flows, from side to side,\nFor his human mother, he shows little care,\nAs if the bond between them wasn't there.\n\nHis purrs are sweet, his meows divine,\nBut when it comes to his human, his love's on decline,\nThough he may seem creepy and aloof,\nArturo's still a cat, with charm and poof.\n\nSo, if you see Arturo in the night,\nWith his eyes so bright, like stars so bright,\nDon't be afraid, he's just a cat,\nAnd one day, he may love his human back."

});