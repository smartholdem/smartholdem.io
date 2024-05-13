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
            <h3 class="breadcrumb__title">{{$t('web3')}}</h3>
            <div class="breadcrumb__list">
              <span>
                <nuxt-link :to="localePath('/rng')">TRNG</nuxt-link>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <nuxt-link  :to="localePath('/projects')">{{$t('all_projects')}}</nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/sth/web3/cover-web3-games.png';

export default {
  data () {
    return {bg}
  }
};
</script>
