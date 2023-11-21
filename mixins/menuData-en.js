export default {
  data() {
    return {
      menuData: [
        {
          id: 6,
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
          id: 7,
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
          id: 8,
          hasDropdown: false,
          title: "Block explorer",
          link: "https://explorer.smartholdem.io/",

        },
      ],
    };
  },
};
