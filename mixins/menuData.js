export default {
  data() {
    return {
      menuData: {
        ru:  [
          {
            id: 1,
            hasDropdown: true,
            title: "Marketcap",
            link: "https://coinpaprika.com/coin/sth-smartholdem/",
            submenus: [
              { title: "Coinpaprika", link: "https://coinpaprika.com/coin/sth-smartholdem/" },
              { title: "Blockspot", link: "https://blockspot.io/coin/smartholdem/" },
              { title: "Coinmarketcap", link: "https://coinmarketcap.com/currencies/smartholdem/" },
            ],
          },
          {
            id: 2,
            hasDropdown: true,
            title: "Обмен",
            link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC",
            submenus: [
              { title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC" },
              { title: "XBTS DeFi", link: "https://app.xbts.io/#/pools" },
              { title: "Xeggex", link: "https://xeggex.com/market/STH_USDT" },
              { title: "Xeggex Pool", link: "https://xeggex.com/pool/STH_USDT" },
              { title: "Smart Holder", link: "https://app.xbts.io/#/smartholder" },
            ],
          },
          {
            id: 3,
            hasDropdown: false,
            title: "Обозреватель",
            link: "https://explorer.smartholdem.io/",

          },
          {
            id: 4,
            hasDropdown: false,
            title: "RNG",
            link: "/ru/rng",
          },
          {
            id: 4,
            hasDropdown: false,
            title: "Документация",
            link: "https://wiki.smartholdem.io/ru/home",
          },
        ],
        en: [
          {
            id: 1,
            hasDropdown: true,
            title: "Marketcap",
            link: "https://coinpaprika.com/coin/sth-smartholdem/",
            submenus: [
              { title: "Coinpaprika", link: "https://coinpaprika.com/coin/sth-smartholdem/" },
              { title: "Blockspot", link: "https://blockspot.io/coin/smartholdem/" },
              { title: "Coinmarketcap", link: "https://coinmarketcap.com/currencies/smartholdem/" },
            ],
          },
          {
            id: 2,
            hasDropdown: true,
            title: "Exchange",
            link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC",
            submenus: [
              { title: "XBTS DEX", link: "https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC" },
              { title: "XBTS DeFi", link: "https://app.xbts.io/#/pools" },
              { title: "Xeggex", link: "https://xeggex.com/market/STH_USDT" },
              { title: "Xeggex Pool", link: "https://xeggex.com/pool/STH_USDT" },
              { title: "Smart Holder", link: "https://app.xbts.io/#/smartholder" },
            ],
          },
          {
            id: 3,
            hasDropdown: false,
            title: "Block explorer",
            link: "https://explorer.smartholdem.io/",
          },
          {
            id: 4,
            hasDropdown: false,
            title: "Documentation",
            link: "https://wiki.smartholdem.io",
          },
        ]
      },
    };
  },
};
