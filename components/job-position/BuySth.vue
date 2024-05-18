<template>
  <section :class="`job__area pb-140 ${style_2?'':'pt-35'}`">
    <div v-if="$i18n.locale === 'ru'" class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-4 mb-50">
            <h3 class="tp-section-title-4">
              <img src="~/assets/img/icon/section-title-bag.png" alt="" />
              Как купить/продать/обменять SmartHoldem STH
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__item-wrapper">
            <sth-item
                delay="130"
                title="Создать кошелек SmartHoldem"
                text="Регистрация кошелька в блокчейне SmartHoldem занимает меньше минуты"
                value="Ваш путь в Web3"
                info=""
                detail="https://wallet.smartholdem.io"
            />

            <sth-item
                delay="150"
                title="Войдите или зарегистриуйтесь на бирже"
                text="Выберите биржу из списка для покупки, продажи или обмена SmartHoldem STH"
                value="Dex, DeFi, Cex, Cross-Chain"
                info=""
                detail="https://ex.xbts.io/market/XBTSX.STH_XBTSX.USDT"
            />

            <sth-item
                delay="180"
                title="Купить или обменять SmartHoldem STH"
                text="Торгуйте STH ко всем популярным криптовалютам"
                value="Более 45 торговых пар"
                info=""
                detail="https://app.xbts.io"
            />

            <sth-item
                delay="190"
                title="Внесите STH в свой кошелек SmartHoldem"
                text="Вы контролируете свои приватные ключи. Только у вас есть доступ к вашим средствам. "
                value="Настоящее владение криптовалютой "
                info="SmartHoldem"
                detail="https://wallet.smartholdem.io"
            />

          </div>
          <a target="_blank" href="https://community.smartholdem.io/category/200/listed-exchanges">
            <h3 class="mt-40 text-primary"><i class="fa fa-info-square"></i> Пошаговые руководства</h3>
          </a>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-4 mb-50">
            <h3 class="tp-section-title-4">
              <img src="~/assets/img/icon/section-title-bag.png" alt="How to buy/sell/trade SmartHoldem STH" />
              How to buy/sell/trade SmartHoldem STH
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__item-wrapper">
            <sth-item
                delay="130"
                title="Create a SmartHoldem Wallet"
                text="Registering a wallet in the SmartHoldem blockchain takes less than a minute"
                value="Your Gateway to Web3"
                info=""
                detail="https://wallet.smartholdem.io"
            />

            <sth-item
                delay="150"
                title="Log in to the exchange"
                text="Select an exchange from the list to buy, sell, or trade SmartHoldem STH"
                value="Dex, DeFi, Cex, Cross-Chain"
                info=""
                detail="https://ex.xbts.io/market/XBTSX.STH_XBTSX.USDT"
            />

            <sth-item
                delay="180"
                title="Buy or Swap SmartHoldem STH"
                text="Trade STH for all popular cryptocurrencies"
                value="More than 45 trading pairs"
                info=""
                detail="https://app.xbts.io"
            />

            <sth-item
                delay="190"
                title="Deposit STH into your SmartHoldem wallet"
                text="You have constant access to your funds and control of your private keys"
                value="True crypto ownership  "
                info="SmartHoldem"
                detail="https://wallet.smartholdem.io"
            />

          </div>
          <a target="_blank" href="https://community.smartholdem.io/category/200/listed-exchanges">
            <h3 class="mt-40 text-primary"><i class="fa fa-info-square"></i> Step-by-step guides</h3>
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

import SthItem from "./CreateSthItem.vue";

export default {
  props:{
    style_2: {
      type: Boolean,
      default: false,
   },
  },
  components: { SthItem },
};
</script>
