// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //ssr: false,
    rootDir: __dirname,
    css: [
        "bootstrap/scss/bootstrap.scss",
        "swiper/css/bundle",
        "vue3-carousel/dist/carousel.css",
        "~/assets/scss/main.scss",
    ],
    build: {
        // transpile: ['vue-i18n']
    },
    modules: [
        //'@nuxtjs/sitemap',
        [
            '@nuxtjs/i18n',
            {
                //baseUrl: 'http://localhost:3001',
                defaultLocale: 'en',
                detectBrowserLanguage: {
                    fallbackLocale: 'en',
                    useCookie: true,
                    cookieKey: 'i18n_redirected_sth1',
                    alwaysRedirect: false,
                    cookieCrossOrigin: true,
                    //redirectOn: 'root',
                },
                lazy: false,
                langDir: 'locales/',
                locales: [
                    {
                        code: 'en',
                        file: 'en.json',
                        name: 'English'
                    },
                    {
                        code: 'ru',
                        file: 'ru.json',
                        name: 'Русский'
                    },
                ],
            },
        ],
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
    app: {
        head: {
            title: "SmartHoldem Platform",
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Decentralized Blockchain SmartHoldem Platform'
                }
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                    crossorigin: "anonymous",
                },
                {
                    src: "https://cdn.conveythis.com/javascript/conveythis.js?api_key=pub_982ef11843bb0c98791cb4fc05572d91",
                }
            ],
        },
    },
});
