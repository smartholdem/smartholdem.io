<template>
  <section id="about" class="about__area grey-bg-8 pt-200 pb-200">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper-4 p-relative">
            <div class="about__thumb-4">
              <img class="about-thumb-main" src="~/assets/img/logo/coin_sth.png" alt="STH Coin">
              <img class="about__thumb-shape-1" src="~/assets/img/about/4/about-shape-1.png" alt="STH">
            </div>
            <div class="about__experience-4 d-none d-sm-flex align-items-start">
              <div class="about__experience-icon-4 mr-15">
                <span>
                  <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.9708 15.1069C34.9708 18.029 34.1126 20.7094 32.6356 22.9463C30.48 26.1707 27.0671 28.448 23.0952 29.0324C22.4166 29.1533 21.7181 29.2138 20.9996 29.2138C20.281 29.2138 19.5825 29.1533 18.9039 29.0324C14.9321 28.448 11.5191 26.1707 9.36351 22.9463C7.88655 20.7094 7.02832 18.029 7.02832 15.1069C7.02832 7.30779 13.2755 1 20.9996 1C28.7237 1 34.9708 7.30779 34.9708 15.1069Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M39.462 34.1914L36.1688 34.9773C35.4303 35.1587 34.8515 35.723 34.6918 36.4686L33.9933 39.4311C33.614 41.0433 31.5782 41.527 30.5204 40.2574L21 29.2137L11.4796 40.2775C10.4218 41.5471 8.38597 41.0634 8.00675 39.4512L7.30819 36.4887C7.12856 35.7431 6.54975 35.1587 5.83123 34.9975L2.53801 34.2115C1.02113 33.8488 0.482239 31.9342 1.57998 30.8258L9.36395 22.9663C11.5195 26.1907 14.9325 28.468 18.9043 29.0525C19.5829 29.1734 20.2815 29.2338 21 29.2338C21.7185 29.2338 22.4171 29.1734 23.0957 29.0525C27.0675 28.468 30.4805 26.1907 32.636 22.9663L40.42 30.8258C41.5178 31.9141 40.9789 33.8286 39.462 34.1914Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M22.1574 9.0208L23.335 11.3988C23.4946 11.7212 23.9138 12.0437 24.293 12.1042L26.4286 12.4669C27.7858 12.6886 28.1051 13.6962 27.1271 14.6837L25.4706 16.3563C25.1911 16.6385 25.0315 17.1826 25.1313 17.5857L25.6103 19.6614C25.9895 21.2938 25.1313 21.9386 23.6942 21.0721L21.6983 19.8831C21.3391 19.6614 20.7403 19.6614 20.381 19.8831L18.3851 21.0721C16.9481 21.9185 16.0899 21.2938 16.4691 19.6614L16.9481 17.5857C17.0279 17.2028 16.8882 16.6385 16.6088 16.3563L14.9522 14.6837C13.9742 13.6962 14.2936 12.7087 15.6508 12.4669L17.7864 12.1042C18.1456 12.0437 18.5648 11.7212 18.7244 11.3988L19.902 9.0208C20.4808 7.73102 21.5187 7.73102 22.1574 9.0208Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <div class="about__experience-content-4">
                <h4><span>15</span>+</h4>
                <p v-html="$t('years_dev')"></p>
              </div>
            </div>
            <div class="about__thumb-shape-2 p-relative">
              <img class="about__thumb-shape-logo" src="~/assets/img/about/4/about-shape-2.png" alt="">
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
              <nuxt-link :to="localePath('/manifest')" class="tp-btn-brown mr-30 text-uppercase">{{$t('manifest_open')}}</nuxt-link>
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

