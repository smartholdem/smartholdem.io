export default {
    data() {
        return {
            menuData: {
                ru: [
                    {
                        id: 1,
                        hasDropdown: true,
                        title: "Купить STH",
                        link: "/ru/buy-sth",
                        submenus: [
                            {title: "Как купить STH", link: "/ru/buy-sth"},
                            {title: "Кошелёк", link: "https://wallet.smartholdem.io"},
                            {title: "Toobit", link: "https://www.toobit.com/ru-RU/spot/STH_USDT?invite_code=d2YhTz"},
                            {title: "Dex-Trade", link: "https://dex-trade.com/spot/trading/STHUSDT?interface=classic"},
                            {title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC"},
                            {title: "XBTS DeFi", link: "https://app.xbts.io/#/pools"},
                            {
                                title: "TON DEX",
                                link: "https://dedust.io/swap/USDT/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=100000000"
                            },
                            {title: "SmartHolder", link: "https://app.xbts.io/#/smartholder"},
                        ],
                    },
                    /*
                  {
                    id: 2,
                    hasDropdown: false,
                    pages: false,
                    title: "Кошелёк",
                    link: "https://wallet.smartholdem.io",
                  },

                     */
                    {
                        id: 3,
                        hasDropdown: true,
                        title: "TRNG",
                        link: "/ru/trng",
                        submenus: [
                            {title: "TRNG Описание", link: "/ru/trng"},
                            {title: "TRNG API", link: "https://api.smartholdem.io/trng"},
                            {title: "Пример игры DICE", link: "https://github.com/smartholdem/dice-game-example"},

                        ],
                    },
                    {
                        id: 4,
                        hasDropdown: false,
                        pages: true,
                        title: "Токеномика",
                        link: "/ru/tokenomics",
                    },
                    {
                        id: 5,
                        hasDropdown: false,
                        mobile: true,
                        title: "Инновации",
                        link: "/ru/innovations",
                    },
                    {
                        id: 5,
                        hasDropdown: false,
                        mobile: true,
                        title: "Создано в SmartHoldem",
                        link: "/ru/projects",
                    },
                    {
                        id: 6,
                        hasDropdown: false,
                        mobile: true,
                        title: "WEB3 Игры",
                        link: "/ru/web3-games",
                    },
                    {
                        id: 7,
                        hasDropdown: false,
                        mobile: true,
                        title: "О Кошельке",
                        link: "/ru/about-wallet",
                    },
                    {
                        id: 8,
                        hasDropdown: false,
                        mobile: true,
                        title: "Как стать делегатом",
                        link: "/ru/about-forging",
                    },
                    {
                        id: 9,
                        hasDropdown: false,
                        mobile: true,
                        title: "Документация",
                        link: "https://wiki.smartholdem.io/ru/home",
                    },
                    {
                        id: 10,
                        hasDropdown: false,
                        mobile: true,
                        title: "Форум Сообщества",
                        link: "https://community.smartholdem.io",
                    },
                    {
                        id: 11,
                        hasDropdown: false,
                        pages: true,
                        title: "Explorer",
                        link: "https://explorer.smartholdem.io/",
                    },
                    {
                        id: 12,
                        hasDropdown: false,
                        pages: true,
                        title: "Новости",
                        link: "/news",
                    },
                    {
                        id: 14,
                        hasDropdown: false,
                        pages: true,
                        title: "Проекты",
                        link: "/ru/projects",
                    },
                ],
                en: [
                    {
                        id: 2,
                        hasDropdown: true,
                        title: "Exchange STH",
                        link: "/buy-sth",
                        submenus: [
                            {title: "How To buy STH", link: "/buy-sth"},
                            {title: "Wallet", link: "https://wallet.smartholdem.io", target: "_blank"},
                            {title: "Toobit", link: "https://www.toobit.com/en-US/spot/STH_USDT?invite_code=d2YhTz"},
                            {title: "Dex-Trade", link: "https://dex-trade.com/spot/trading/STHUSDT?interface=classic"},
                            {title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC"},
                            {title: "XBTS DeFi", link: "https://app.xbts.io/#/pools"},
                            {
                                title: "TON DEX",
                                link: "https://dedust.io/swap/USDT/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=100000000"
                            },
                            {title: "SmartHolder", link: "https://app.xbts.io/#/smartholder"},
                        ],
                    },
                    /*
                  {
                    id: 1,
                    hasDropdown: false,
                    pages: false,
                    title: "Wallet",
                    link: "https://wallet.smartholdem.io",
                  },

                     */
                    {
                        id: 3,
                        hasDropdown: true,
                        title: "TRNG",
                        link: "/trng",
                        submenus: [
                            {title: "TRNG Specification", link: "/trng"},
                            {title: "TRNG API", link: "https://api.smartholdem.io/trng"},
                            {title: "DICE Game Example", link: "https://github.com/smartholdem/dice-game-example"},

                        ],
                    },
                    {
                        id: 5,
                        hasDropdown: false,
                        pages: true,
                        title: "Tokenomics",
                        link: "/tokenomics",
                    },
                    {
                        id: 5,
                        hasDropdown: false,
                        mobile: true,
                        title: "Innovations",
                        link: "/innovations",
                    },
                    {
                        id: 8,
                        hasDropdown: false,
                        mobile: true,
                        title: "Projects",
                        link: "/projects",
                    },
                    {
                        id: 6,
                        hasDropdown: false,
                        mobile: true,
                        title: "WEB3 Games",
                        link: "/web3-games",
                    },
                    {
                        id: 7,
                        hasDropdown: false,
                        mobile: true,
                        title: "About Wallet",
                        link: "/about-wallet",
                    },
                    {
                        id: 8,
                        hasDropdown: false,
                        mobile: true,
                        title: "Become a Delegate",
                        link: "/about-forging",
                    },
                    {
                        id: 8,
                        hasDropdown: false,
                        mobile: true,
                        title: "Documentation",
                        link: "https://wiki.smartholdem.io",
                    },
                    {
                        id: 9,
                        hasDropdown: false,
                        mobile: true,
                        title: "Community Forum",
                        link: "https://community.smartholdem.io",
                    },
                    {
                        id: 10,
                        hasDropdown: false,
                        pages: true,
                        title: "Explorer",
                        link: "https://explorer.smartholdem.io/",
                    },
                    {
                        id: 11,
                        hasDropdown: false,
                        pages: true,
                        title: "News",
                        link: "/news",
                    },
                    {
                        id: 14,
                        hasDropdown: false,
                        pages: true,
                        title: "Projects",
                        link: "/projects",
                    },
                ]
            },
        };
    },
};
