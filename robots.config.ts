export default [
    { UserAgent: '*' },
    { Allow: '/' },
    { BlankLine: true },
    { Comment: 'Catetry allows robots and points to the sitemap XML' },

    { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]