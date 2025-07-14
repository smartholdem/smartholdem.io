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

                      <p class="text-white mt-20">
                        contact@smartholdem.io
                      </p>

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
                      <a target="_blank" href="https://coinpaprika.com/coin/sth-smartholdem/">Coinpaprika</a>
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
                      <nuxt-link href="https://www.toobit.com/en-US/spot/STH_USDT?invite_code=d2YhTz">Toobit CEX</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://ex.xbts.io/market/XBTSX.STH_XBTSX.USDT">BitShares DEX</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://app.xbts.io/#/pools">DeFi</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://app.xbts.io/#/smartholder">SmartHolder</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://dedust.io/swap/USDT/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=100000000">DeDust TON</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38">Pancakeswap STH</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link href="https://app.uniswap.org/swap?inputCurrency=0x625d64c3384aa6d6841a1608ae0ce48776981d38">Uniswap STH</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-25 footer-col-4-4">
                <h3 class="footer__widget-title">{{$t('posts')}}</h3>

                <div v-if="newsData[0]" class="footer__widget-content">
                  <div class="footer__blog">
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a @click="openNews(0)" :href="'/news-details?id=' + newsData[0].id">{{newsData[0].title}}</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <img class="rounded-pill p-1" width="32px" :src="newsData[0].img" :alt="newsData[0].title"/>
                          <nuxt-link class="pl-2" @click="openNews(0)" :href="'/news-details?id='+ newsData[0].id">
                            {{newsData[0].sm_desc}}
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>{{newsData[0].date}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a @click="openNews(1)" :href="'/news-details?id='+ newsData[1].id">{{newsData[1].title}}</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <img class="rounded-pill p-1" width="32px" :src="newsData[1].img" :alt="newsData[1].title"/>
                          <nuxt-link @click="openNews(1)" :href="'/news-details?id='+ newsData[1].id">
                            {{newsData[1].sm_desc}}
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>{{newsData[1].date}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else class="footer__widget-content">
                  Loading...
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
                    <nuxt-link href="/">© 2017 - {{ new Date().getFullYear() }} SmartHoldem Platform</nuxt-link> v2.0
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
import axios from 'axios';

export default {
  components: {Social},
  data() {
    return {
      bg_shape,
      open: false,
      formVal: '',
      newsData: [],
    }
  },
  methods: {
    async openNews(i) {
      this.$root['blog'] = this.newsData[i];
      await this.$router.push({ path: '/news-details', query: {id: this.newsData[i].id}})
    },
    handleToggle() {
      this.open = !this.open
    },
    handleSubmit() {
      console.log(this.formVal)
      this.formVal = ''
    }
  },
  async created() {
    try {
      const newsRaw = (await axios.get('https://news.smartholdem.io/api/sthnews?populate=img&&pagination[pageSize]=2&sort=date:desc')).data.data;
      //console.log(newsRaw)
      for (let i=0; i < newsRaw.length; i++) {
        this.newsData.push(
            {
              id: newsRaw[i].id,
              tag: newsRaw[i].attributes.tag,
              img: 'https://news.smartholdem.io' + newsRaw[i].attributes.img.data.attributes.url,
              date: newsRaw[i].attributes.date,
              title: newsRaw[i].attributes.title,
              sm_desc: newsRaw[i].attributes.text,
              article: newsRaw[i].attributes.article,
              blog_masonry:true,
            }
        )
      }
    } catch (e) {
      console.log('err get news');
    }
  }
}
</script>

<style>
.footer__logo img {
  height: 64px;
}
</style>

