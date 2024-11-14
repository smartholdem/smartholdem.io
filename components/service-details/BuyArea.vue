<template>
  <section class="services__area pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 order-first order-lg-last">
          <div v-if="$i18n.locale === 'ru'" class="services__details-wrapper">
            <h3 class="services__details-title text-center">Как купить и продать STH</h3>
            <div class="row">

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://www.toobit.com/ru-RU/spot/STH_USDT">
                    <img
                        src="~/assets/img/sth/buy/toobit-cex.png" alt="smartholdem trade on toobit" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://www.toobit.com/ru-RU/spot/STH_USDT">
                  <h3>TooBit</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://dex-trade.com/spot/trading/STHUSDT?interface=classic">
                    <img
                        src="~/assets/img/sth/buy/dextrade-cex.png" alt="smartholdem trade on dextrade" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://dex-trade.com/spot/trading/STHUSDT?interface=classic">
                  <h3>Dex-Trade</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://ex.xbts.io/market/XBTSX.USDT_XBTSX.STH">
                    <img
                        src="~/assets/img/sth/buy/xbts-dex.png" alt="smartholdem xbts dex" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://ex.xbts.io/market/XBTSX.USDT_XBTSX.STH">
                  <h3>XBTS DEX</h3>
                  <p>Легко покупать и продавать STH</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://app.xbts.io/#/pools">
                    <img src="~/assets/img/sth/buy/xbts-defi.png" alt="smartholdem xbts defi" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://app.xbts.io/#/pools">
                  <h3>XBTS DeFi</h3>
                  <p>35+ STH DeFi пулов</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://xeggex.com/market/STH_USDT">
                    <img src="~/assets/img/sth/buy/xeggex.png" alt="smartholdem xeggex cex" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://xeggex.com/market/STH_USDT">
                  <h3>XeggeX</h3>
                  <p>STH/USDT/DOGE</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://xeggex.com/pool/STH_USDT">
                    <img src="~/assets/img/sth/buy/xeggex.png" alt="smartholdem xeggex defi pools" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://xeggex.com/pool/STH_USDT">
                  <h3>XeggeX</h3>
                  <p>STH DeFi пулы</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank"
                     href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                    <img
                        src="~/assets/img/sth/buy/Pancakes.png" alt="smartholdem PancakeSwap STH/USDT" class="w-100">
                  </a>
                </div>
                <a target="_blank"
                   href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                  <h3>PancakeSwap</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank"
                     href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                    <img
                        src="~/assets/img/sth/buy/Pancakes.png" alt="smartholdem PancakeSwap STH/USDT" class="w-100">
                  </a>
                </div>
                <a target="_blank"
                   href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                  <h3>PancakeSwap</h3>
                  <p>STH/BNB</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <img src="~/assets/img/sth/buy/listing1.png" alt="smartholdem new listing 1" class="w-100">
                </div>
                <h3>Новый Листинг</h3>
                <p>Скоро</p>
              </div>


              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <img src="~/assets/img/sth/buy/listing2.png" alt="smartholdem new listing 2" class="w-100">
                </div>
                <h3>Новый Листинг</h3>
                <p>Скоро</p>
              </div>

            </div>

          </div>

          <div v-else class="services__details-wrapper">
            <h3 class="services__details-title text-center">How to buy</h3>
            <div class="row">

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://www.toobit.com/en-US/spot/STH_USDT">
                    <img
                        src="~/assets/img/sth/buy/toobit-cex.png" alt="smartholdem trade on toobit" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://www.toobit.com/ru-RU/spot/STH_USDT">
                  <h3>TooBit</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://dex-trade.com/spot/trading/STHUSDT?interface=classic">
                    <img
                        src="~/assets/img/sth/buy/dextrade-cex.png" alt="smartholdem trade on dextrade" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://dex-trade.com/spot/trading/STHUSDT?interface=classic">
                  <h3>Dex-Trade</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://ex.xbts.io/market/XBTSX.USDT_XBTSX.STH">
                    <img
                        src="~/assets/img/sth/buy/xbts-dex.png" alt="smartholdem xbts dex" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://ex.xbts.io/market/XBTSX.USDT_XBTSX.STH">
                  <h3>XBTS DEX</h3>
                  <p>Easily Buy and Sell STH</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://app.xbts.io/#/pools">
                    <img src="~/assets/img/sth/buy/xbts-defi.png" alt="smartholdem xbts defi" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://app.xbts.io/#/pools">
                  <h3>XBTS DeFi</h3>
                  <p>35+ STH liquidity pools</p>
                </a>
              </div>



              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://xeggex.com/market/STH_USDT">
                    <img src="~/assets/img/sth/buy/xeggex.png" alt="smartholdem xeggex cex" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://xeggex.com/market/STH_USDT">
                  <h3>XeggeX</h3>
                  <p>STH/USDT/DOGE pairs</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank" href="https://xeggex.com/pool/STH_USDT">
                    <img src="~/assets/img/sth/buy/xeggex.png" alt="smartholdem xeggex defi pools" class="w-100">
                  </a>
                </div>
                <a target="_blank" href="https://xeggex.com/pool/STH_USDT">
                  <h3>XeggeX</h3>
                  <p>STH DeFi pools</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank"
                     href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                    <img
                        src="~/assets/img/sth/buy/Pancakes.png" alt="smartholdem PancakeSwap STH/USDT" class="w-100">
                  </a>
                </div>
                <a target="_blank"
                   href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                  <h3>PancakeSwap</h3>
                  <p>STH/USDT</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <a target="_blank"
                     href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                    <img
                        src="~/assets/img/sth/buy/Pancakes.png" alt="smartholdem PancakeSwap STH/USDT" class="w-100">
                  </a>
                </div>
                <a target="_blank"
                   href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                  <h3>PancakeSwap</h3>
                  <p>STH/BNB</p>
                </a>
              </div>

              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <img src="~/assets/img/sth/buy/listing1.png" alt="smartholdem new listing 1" class="w-100">
                </div>
                <h3>New Listing</h3>
                <p>Coming soon</p>
              </div>


              <div class="col-md-3 text-center">
                <div class="postbox__img-2 m-img w-100">
                  <img src="~/assets/img/sth/buy/listing2.png" alt="smartholdem new listing 2" class="w-100">
                </div>
                <h3>New Listing</h3>
                <p>Coming soon</p>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceDetailsFaq from '../faqs/ServiceDetailsFaq.vue';
import ServiceDetailsForm from '../forms/ServiceDetailsForm.vue';

export default {
  components: {ServiceDetailsFaq, ServiceDetailsForm},

}
</script>
