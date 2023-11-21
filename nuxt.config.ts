// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    rootDir: __dirname,
    css: [
        "bootstrap/scss/bootstrap.scss",
        "swiper/css/bundle",
        "vue3-carousel/dist/carousel.css",
        "~/assets/scss/main.scss",
    ],
    build: {
        transpile: ['vue-i18n']
    },
    modules: [
        //'@nuxtjs/i18n',
        //'@nuxtjs/sitemap',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    /*
    i18n: {
        detectBrowserLanguage: false,
        defaultLocale: 'ru',

        lazy: true,
        langDir: 'locales/',
        locales: [
            {
                code: 'ru',
                file: 'ru.json',
                name: 'Русский'
            },
            {
                code: 'en',
                file: 'en.json',
                name: 'English'
            },
        ],

    },
    */
    app: {
        head: {
            title: "SmartHoldem Platform",
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
});
