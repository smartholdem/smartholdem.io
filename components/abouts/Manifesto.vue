<template>
  <section id="about" class="about__area grey-bg-8 pt-150 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper-4 p-relative">
            <div class="about__thumb-4" style="background-color: transparent;">
              <img class="about-thumb-main" src="~/assets/img/logo/coin_sth.png" alt="STH Coin">
              <img class="about__thumb-shape-1" src="~/assets/img/about/4/about-shape-1.png" alt="STH">
            </div>

            <div class="about__thumb-shape-2 p-relative">
              <img v-if="$i18n.locale === 'ru'" class="about__thumb-shape-logo" src="~/assets/img/about/4/about-shape-ru.png" alt="STH Crypto">
              <img v-if="$i18n.locale !== 'ru'" class="about__thumb-shape-logo" src="~/assets/img/about/4/about-shape-en.png" alt="STH Crypto">
              <img class="about__thumb-shape-logo-icon" src="~/assets/img/logo/logo.png" height="72" alt="">
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__wrapper-4 pr-70">
            <div class="section__title-wrapper-4 pr-5 mb-15">
              <span class="section__title-pre-4">{{$t('manifest')}}</span>
              <h3 class="section__title-7-highlight">{{$t('manifest_title')}}</h3>
            </div>
            <p>{{$t('manifest_text')}}</p>
            <div class="about__btn-4 mt-45 d-sm-flex align-items-center">
              <nuxt-link :to="localePath('/manifesto')" class="tp-btn-brown mr-30 text-uppercase">{{$t('manifest_open')}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

