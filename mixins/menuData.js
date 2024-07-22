export default {
  data() {
    return {
      menuData: {
        ru:  [
          {
            id: 1,
            hasDropdown: true,
            title: "Купить STH",
            link: "/ru/buy-sth",
            submenus: [
              { title: "Как купить STH", link: "/ru/buy-sth" },
              { title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC" },
              { title: "XBTS DeFi", link: "https://app.xbts.io/#/pools" },
              { title: "Xeggex", link: "https://xeggex.com/market/STH_USDT" },
              { title: "Xeggex Pool", link: "https://xeggex.com/pool/STH_USDT" },
              { title: "SmartHolder DEX Staking", link: "https://app.xbts.io/#/smartholder" },
            ],
          },
          {
            id: 2,
            hasDropdown: false,
            pages: false,
            title: "Кошелёк",
            link: "https://wallet.smartholdem.io",
          },
          {
            id: 3,
            hasDropdown: false,
            pages: true,
            title: "TRNG",
            link: "/ru/rng",
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
        ],
        en: [
          {
            id: 2,
            hasDropdown: true,
            title: "Exchange STH",
            link: "/buy-sth",
            submenus: [
              { title: "How To buy STH", link: "/buy-sth" },
              { title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC" },
              { title: "XBTS DeFi", link: "https://app.xbts.io/#/pools" },
              { title: "Xeggex", link: "https://xeggex.com/market/STH_USDT" },
              { title: "Xeggex Pool", link: "https://xeggex.com/pool/STH_USDT" },
              { title: "SmartHolder DEX Staking", link: "https://app.xbts.io/#/smartholder" },
            ],
          },
          {
            id: 1,
            hasDropdown: false,
            pages: false,
            title: "Wallet",
            link: "https://wallet.smartholdem.io",
          },
          {
            id: 4,
            hasDropdown: false,
            pages: true,
            title: "TRNG",
            link: "/rng",
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
        ]
      },
    };
  },
};
