<template>
  <footer>

    <div class="footer__area" data-bg-color="footer-bg-green">

      <div class="footer__top footer__top-4">
        <div class="container">
          <div class="row">

            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-50 footer-col-4-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" style="height: 64px !important;" alt="SmartHoldem Logo">
                  </nuxt-link>
                </div>

                <div class="footer__widget-content">
                  <div class="footer__info">
                    <p>WEB3 Gaming Ecosystem</p>

                    <div class="footer__social-4">
                      <h5>{{$t('follow')}}</h5>
                      <social/>
                    </div>
                  </div>
                </div>


              </div>
            </div>


            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-2">
                <h3 class="footer__widget-title">{{ $t('links') }}</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <nuxt-link href="https://wallet.smartholdem.io/">Wallet</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://github.com/smartholdem/sth-core">Full Node</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://explorer.smartholdem.io/">Explorer</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://wiki.smartholdem.io/">API</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://wiki.smartholdem.io/">DOCS</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://community.smartholdem.io/">Forum</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-2">
                <h3 class="footer__widget-title">Tools</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <a target="_blank" href="https://paperwallet.top/">Paper Wallet</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://hasher.smartholdem.io">Hasher Tool</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/technologiespro/smart2fa">Smart 2FA</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://t.me/STHxBot">AI Bot</a>
                    </li>
                  </ul>
                </div>
              </div>


            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-3">
                <h3 class="footer__widget-title">Marketcaps</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <a target="_blank" href="https://coinpaprika.com/coin/new-layout/sth-smartholdem/">Coinpaprika</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://blockspot.io/coin/smartholdem">Blockspot</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://coinmarketcap.com/currencies/smartholdem/">Coinmarketcap</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-3">
                <h3 class="footer__widget-title">Trade</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <nuxt-link :to="localePath('/buy-sth')">How to buy</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://ex.xbts.io/market/XBTSX.STH_XBTSX.USDT">DEX</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://xeggex.com/market/STH_USDT">CEX</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://app.xbts.io/#/pools">DeFi</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://app.xbts.io/#/smartholder">SmartHolder</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-4">
                <h3 class="footer__widget-title">{{$t('posts')}}</h3>

                <div class="footer__widget-content">
                  <div class="footer__blog">
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a href="https://community.smartholdem.io/topic/993/ai-chatbot-mr-sth-robot-smartholdem-neural-network">SmartHoldem AI</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <nuxt-link href="https://community.smartholdem.io/topic/993/ai-chatbot-mr-sth-robot-smartholdem-neural-network">
                            Ai ChatBot Mr.STH Robot. SmartHoldem Neural Network
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>July 14, 2023</span>
                        </div>
                      </div>
                    </div>
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a href="#">Wallet 2.0</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <nuxt-link href="https://community.smartholdem.io/topic/1017/smartholdem-2-0-wallet">
                            SmartHoldem Wallet 2.0
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>October 10, 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer__bottom-4">
        <div class="container">
          <div class="footer__bottom-inner-4">
            <div class="row">
              <div class="col-sm-5">
                <div class="footer__copyright-4">
                  <p>
                    <nuxt-link href="/">© 2017 - {{ new Date().getFullYear() }} SmartHoldem Platform</nuxt-link>

                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="footer__link-4 text-sm-end">
                  <nuxt-link :to="localePath('/disclamers')">{{$t('disclaimers')}}</nuxt-link>
                  <nuxt-link :to="localePath('/terms')">{{$t('terms')}}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from '~~/components/social/Social.vue'
import bg_shape from '~/assets/img/footer/footer-shape-3.png';

export default {
  components: {Social},
  data() {
    return {
      bg_shape,
      open: false,
      formVal: '',
    }
  },
  methods: {
    handleToggle() {
      this.open = !this.open
    },
    handleSubmit() {
      console.log(this.formVal)
      this.formVal = ''
    }
  }
}
</script>

<style>
.footer__logo img {
  height: 64px;
}
</style>

