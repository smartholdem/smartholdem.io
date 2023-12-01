<template>
  <header>
    <div class="header__area ">
      <div
        :class="`header__bottom-8 header__sticky header__sticky-black header__sticky-black-2 ${isSticky ? 'header-sticky' : 'header-sticky'}`"
        id="header-sticky">
        <div class="container-fluid">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <nuxt-link :to="localePath('/')">
                    <img style="width:172px !important" src="~/assets/img/logo/logo.svg" alt="SmartHoldem Logo">
                  </nuxt-link>
                  <span class="text-white pl-10"><nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link></span>
                  <span class="text-white pl-10"><nuxt-link :to="switchLocalePath('ru')">RUS</nuxt-link></span>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu main-menu-8 pl-95 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div class="header__bottom-right-8 d-flex justify-content-end align-items-center">
                  <div class="header__info-8 mr-90 d-none d-xxl-block">
                    <ul>
                      <li>
                        <span>
                          <a target="_blank" href="https://wallet.smartholdem.io">
                            <i class="fa icon_wallet"></i>
                            {{$t('wallet')}}
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="header__action-8 d-none d-xl-block">
                    <ul>
                      <!--
                      <li>
                        <a href="#" class="search-open-btn">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.0004 17L15.4004 15.4" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </a>
                      </li>
                      -->

                      <li>
                        <button @click="handleOffCanvas" type="button" class="hamburger-btn-8 offcanvas-open-btn">{{$t('menu')}}</button>
                      </li>
                    </ul>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button @click="handleOffCanvas" type="button" class="hamburger-btn offcanvas-open-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- off canvas full start -->
  <off-canvas-main ref="off_canvas"/>
  <!-- off canvas full end -->
</template>

<script>
import menus from "./menus.vue";
import OffCanvasMain from '~~/components/common/off-canvas/OffCanvasMain.vue';

export default {
  components: { menus, OffCanvasMain },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
}
</script>

<style>
.logo img {
  height: 42px;
}
</style>
