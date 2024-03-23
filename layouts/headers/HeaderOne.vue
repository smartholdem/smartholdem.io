 <template>
  <header>
    <div
      :class="`header__area ${
        header_solid ? 'header__white-solid' : 'header__transparent'
      } ${header_solid_2 ? 'header__white-solid-2 header__transparent' : ''}
      ${header_black ? 'header__black' : ''}`"
    >
      <div v-if="top_bar" class="header__top header__border d-none d-lg-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
              <header-info />
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-2">
              <div
                class="header__top-right d-flex justify-content-end align-items-center"
              >
                <div class="header__lang ml-30">
                  <Language />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="`header__bottom header__sticky ${
          header_solid ? '' : `header__bottom-border${transparent ? '-3' : ''}`
        } ${isSticky ? 'header-sticky' : ''}`"
        id="header-sticky"
      >
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo logo-border">
                  <nuxt-link :to="localePath('/')" v-if="!header_solid && !header_black">
                    <img
                      class="logo-light"
                      src="~/assets/img/logo/sth52-light.png"
                      alt="logo"
                      height="52"
                    />
                    <img
                      class="logo-dark"
                      src="~/assets/img/logo/sth52.png"
                      alt="logo sth"
                      height="52"
                    />
                  </nuxt-link>
                  <nuxt-link :to="localePath('/')" v-if="header_solid">
                    <img src="~/assets/img/logo/sth52.png" height="52" alt="logo" />
                  </nuxt-link>
                  <nuxt-link :to="localePath('/')" v-if="header_black">
                    <img src="~/assets/img/logo/sth52.png" height="52" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu pl-55 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div
                  class="header__bottom-right d-flex justify-content-end align-items-center pl-30"
                >
                  <div class="header__action d-none d-xl-block">
                    <ul>
                      <li>
                        <button
                        @click="handleOffCanvas"
                          type="button"
                          :class="`hamburger-btn ${
                            header_solid || header_black ? 'hamburger-btn-black' : ''
                          } offcanvas-open-btn`"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button
                     @click="handleOffCanvas"
                      type="button"
                      :class="`hamburger-btn ${
                            header_solid || header_black ? 'hamburger-btn-black' : ''
                          } offcanvas-open-btn`"
                    >
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

    <!-- search popup start -->
    <!--<SearchPopup ref="SearchPopup" />-->
    <!-- search popup end -->
  </header>

  <!-- off canvas full start -->
  <off-canvas-main ref="off_canvas" v-if="!commonOffcanvas"/>
  <!-- off canvas full end -->

  <!-- commonOffcanvas start -->
  <off-canvas-six ref="off_canvas" v-if="commonOffcanvas"/>
  <!-- commonOffcanvas end -->
</template>

<script>
import menus from "./menus.vue";
import HeaderInfo from "./component/HeaderInfo.vue";
import Language from "./component/Language.vue";
//import SearchPopup from "./component/SearchPopup.vue";
import { useUtilsStore } from '~~/store/utils';
import OffCanvasMain from '~~/components/common/off-canvas/OffCanvasMain.vue';
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';

export default {
  data() {
    return {
      isSticky: false,
    };
  },
  props: {
    header_solid: {
      type: Boolean,
      default: false,
    },
    header_solid_2: {
      type: Boolean,
      default: false,
    },
    header_black: {
      type: Boolean,
      default: false,
    },
    top_bar: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    commonOffcanvas: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    menus,
    HeaderInfo,
    Language,
  //  SearchPopup,
    OffCanvasMain,
    OffCanvasSix,
  },
  methods: {
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  setup () {
    const utils = useUtilsStore();
    return {utils}
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
