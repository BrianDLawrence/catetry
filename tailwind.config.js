module.exports = {
    plugins: [require("@tailwindcss/typography"), require('daisyui')],
    daisyui: {
        themes: ["emerald", "dark", "cmyk"],
    },
    theme: {
        fontFamily: {
            sans: ['Noto Sans', 'sans-serif'],
            serif: ['Cambria', 'serif'],
        },
    },
};
