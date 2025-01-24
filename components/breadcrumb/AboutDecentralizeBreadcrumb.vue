<template>
  <section
      class="breadcrumb__area breadcrumb__style-6 p-relative include-bg pt-200 pb-120"
  >
    <div
        class="breadcrumb__bg-2 breadcrumb__overlay include-bg"
        :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="breadcrumb__content text-center p-relative z-index-1">
            <h3 class="breadcrumb__title">{{ $t('new_horizont') }}</h3>
            <div class="breadcrumb__list">
              <span>
                <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <a target="_blank" href="https://explorer.smartholdem.io/">DPoS Network</a>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span class="">
                PoST Network
              </span>
            </div>


            <span v-if="stats.height" class="product__badge-item mr-5 border border-primary">
               Blocks {{ stats.height }}
              </span>

            <span v-if="stats.wallets" class="product__badge-item mr-5 border border-primary">
               Wallets {{ stats.wallets }}
              </span>

            <span v-if="stats.transactions" class="product__badge-item mr-5 border border-primary">
               Tx {{ stats.transactions }}
              </span>

            <span v-if="stats.delegates" class="product__badge-item mr-5 border border-primary">
               Delegates {{ stats.delegates }}
              </span>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/sth/about-decentralize/header.png';
import axios from 'axios';

export default {
  data() {
    return {
      bg,
      stats: {},
    }
  },
  async created() {
    try {
      this.stats = (await axios.get('https://api.smartholdem.io/stats')).data;
    } catch (e) {
      //console.error(e);
    }
  }
};
</script>
