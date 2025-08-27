<template>
  <div :class="`offcanvas__area offcanvas__area-1 ${isOffCanvasOpen?'offcanvas-opened':''}`">
    <div class="offcanvas__wrapper">
      <div class="offcanvas__shape">
        <img class="offcanvas__shape-1" src="~/assets/img/shape/offcanvas-shape-1.png" alt="shape">
      </div>
      <div class="offcanvas__close">
        <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas-close-btn">
          <i class="fa-regular fa-xmark"></i>
        </button>
      </div>
      <div class="offcanvas__content">
        <div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
          <div class="offcanvas__logo logo">
            <nuxt-link :to="localePath('/')">
              <img src="~/assets/img/logo/sth52.png" alt="logo smartholdem">
            </nuxt-link>
          </div>

        </div>
        <div class="row">
          <div class="mb-2">
            <span class="text-primary tp-btn-offcanvas mr-10 text-dark bg-light"><nuxt-link
                :to="switchLocalePath('en')">ENGLISH</nuxt-link></span>
            <span class="text-primary tp-btn-offcanvas text-dark bg-light"><nuxt-link :to="switchLocalePath('ru')">РУССКИЙ</nuxt-link></span>
            <hr/>
          </div>
        </div>
        <div class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
          <div class="mean-bar">
            <!-- MobileMenus start -->
            <mobile-menus/>
            <!-- MobileMenus end -->
          </div>

        </div>

        <!--
        <p class=""><nuxt-link :to="localePath('/manifesto')" class="text-primary"><i class="fa fa-list"></i> {{$t('manifest')}}</nuxt-link></p>
        -->
        <div class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block">
          <nav>
            <ul>
              <li>
                <nuxt-link :to="localePath('/')">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://app.xbts.io/#/pools">DeFi</nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://ex.xbts.io/market/XBTSX.STH_XBTSX.BTC">BitShares DEX</nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://www.toobit.com/en-US/spot/STH_USDT?invite_code=d2YhTz">Toobit</nuxt-link>
              </li>
              <li>
                <nuxt-link
                    href="https://dedust.io/swap/USDT/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=100000000">
                  DeDust TON
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                    href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">
                  Pancakeswap STH
                </nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://coinpaprika.com/coin/sth-smartholdem/">Coinpaprika</nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://blockspot.io/coin/smartholdem/">Blockspot</nuxt-link>
              </li>
              <li>
                <nuxt-link href="https://coinmarketcap.com/currencies/smartholdem/">Coinmarketcap</nuxt-link>
              </li>


            </ul>
          </nav>
        </div>

        <div class="offcanvas__btn">
          <a target="_blank" href="https://wallet.smartholdem.io"
             class="tp-btn-offcanvas bg-success text-uppercase">{{ $t('wallet') }} <i class="fa icon_wallet"></i> <i
              class="fa-regular fa-chevron-right"></i></a>

          <div class="offcanvas__social">
            <social/>
          </div>


          <!--
          <div class="offcanvas__contact">
            <p class="offcanvas__contact-call"><a href="https://community.smartholdem.io">{{$t('manifest')}}</a></p>
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';
import MobileMenus from './MobileMenus.vue';
import Language from "/layouts/headers/component/Language.vue";

export default {
  components: {MobileMenus, Social, Language},
  data() {
    return {
      isOffCanvasOpen: false,
    }
  },
  methods: {
    openOffcanvas() {
      this.isOffCanvasOpen = true
    },
    closeOffcanvas() {
      this.isOffCanvasOpen = false
    }
  },
}
</script>

