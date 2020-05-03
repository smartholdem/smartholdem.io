(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3ca3528e"],{

/***/ "14e9":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ({

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(16);

// EXTERNAL MODULE: external "element-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(39);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['el-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'el-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var main = ({
  name: 'ElScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util_["toObject"])(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['el-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'el-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'el-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = __webpack_require__("4010");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __webpack_require__("5924");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __webpack_require__("8122");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = __webpack_require__("e62d");

/***/ })

/******/ });

/***/ }),

/***/ "1f1a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2088":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AbFail.vue?vue&type=template&id=33f19ba9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('card',[_c('h1',{staticClass:"text-center"},[_vm._v("Auth Twitter Fail")]),_c('h2',{staticClass:"text-center"},[_vm._v("Account linked to another Smartholdem address")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Pages/AbFail.vue?vue&type=template&id=33f19ba9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AbFail.vue?vue&type=script&lang=js&
/* harmony default export */ var AbFailvue_type_script_lang_js_ = ({
  name: "AbFail"
});
// CONCATENATED MODULE: ./src/pages/Pages/AbFail.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_AbFailvue_type_script_lang_js_ = (AbFailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/AbFail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_AbFailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "33f19ba9",
  null
  
)

/* harmony default export */ var AbFail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2608":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2a5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = scrollIntoView;

var _vue = __webpack_require__("2b0e");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollIntoView(container, selected) {
  if (_vue2.default.prototype.$isServer) return;

  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  var offsetParents = [];
  var pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  var top = selected.offsetTop + offsetParents.reduce(function (prev, curr) {
    return prev + curr.offsetTop;
  }, 0);
  var bottom = top + selected.offsetHeight;
  var viewRectTop = container.scrollTop;
  var viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}

/***/ }),

/***/ "2ad6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Welcome.vue?vue&type=template&id=6879bc37&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h3',{staticClass:"text-center mt-0"},[_vm._v(_vm._s(_vm.$t('WEB.WELCOME')))]),_c('card',[_c('h4',{staticClass:"text-center"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.addInvite),expression:"addInvite"}],staticClass:"mr-2"},[_vm._v(_vm._s(_vm.$t('WEB.INVITED')))]),(!_vm.invited)?_c('span',{staticClass:"pointer text-info",on:{"click":function($event){return _vm.openLink('https://blockexplorer.smartholdem.io/#/wallets/' + _vm.$route.params.pAddress)}}},[_vm._v(_vm._s(_vm.$route.params.pAddress))]):_vm._e(),(_vm.invited)?_c('span',{staticClass:"pointer badge-secondary pl-2 pr-2 small rounded border border-info text-dark font-weight-bold",on:{"click":function($event){return _vm.openLink('https://blockexplorer.smartholdem.io/#/wallets/' + _vm.invited)}}},[_vm._v(_vm._s(_vm.invited))]):_vm._e()]),_c('div',{staticClass:"card-body"},[_c('p',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('WEB.INCUSTOMER')))]),_c('p',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('WEB.USE_DEX')))]),_c('p',{staticClass:"text-center"},[_c('base-button',{staticClass:"text-uppercase mt-3",attrs:{"round":"","simple":"","size":"lg","type":"primary"},on:{"click":_vm.openWallet}},[_c('i',{staticClass:"tim-icons icon-wallet-43"}),_vm._v(" "+_vm._s(_vm.$t('WEB.OPEN_WALLET'))+" ")])],1),_c('p',{staticClass:"text-center"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.addInvite),expression:"!addInvite"}],staticClass:"text-center badge badge-danger"},[_vm._v("!ERR: "+_vm._s(_vm.$t("ABOUNTY.AFF_ERR")))])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Pages/Welcome.vue?vue&type=template&id=6879bc37&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Welcome.vue?vue&type=script&lang=js&


/* harmony default export */ var Welcomevue_type_script_lang_js_ = ({
  name: "Welcome",
  data: function data() {
    return {
      addInvite: true
    };
  },
  computed: {
    invited: function invited() {
      return this.$store.getters['promo/invited'];
    }
  },
  methods: {
    openWallet: function openWallet() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.setInvite();

              case 2:
                _context.next = 4;
                return _this.$router.push({
                  path: '/wallet'
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setInvite: function setInvite() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.invited) {
                  if (_this2.myAddresses) {
                    for (i = 0; i < _this2.myAddresses.length; i++) {
                      if (_this2.myAddresses[i] === _this2.$route.params.pAddress) {
                        _this2.addInvite = false;
                      }
                    }
                  }
                }

                if (!_this2.addInvite) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return _this2.$store.dispatch('promo/setInvited', _this2.$route.params.pAddress);

              case 4:
                console.log('invited', _this2.invited);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.setInvite();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/Welcome.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_Welcomevue_type_script_lang_js_ = (Welcomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/Welcome.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_Welcomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6879bc37",
  null
  
)

/* harmony default export */ var Welcome = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "30e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Register.vue?vue&type=template&id=74558a8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(_vm.display)?_c('div',{staticClass:"row"},[(!_vm.isMobile)?_c('div',{staticClass:"col-md-5 ml-auto"},[_c('div',{staticClass:"info-area info-horizontal mt-5"},[_vm._m(0),_c('div',{staticClass:"description"},[_c('h3',{staticClass:"info-title"},[_vm._v(_vm._s(_vm.$t('APP.TITLE')))]),_c('p',{staticClass:"description"},[_vm._v(" "+_vm._s(_vm.$t('APP.BASED_STH'))+" ")])])]),_c('div',{staticClass:"info-area info-horizontal"},[_vm._m(1),_c('div',{staticClass:"description"},[_c('h3',{staticClass:"info-title"},[_vm._v(_vm._s(_vm.$t('APP.PROTECT')))]),_c('p',{staticClass:"description"},[_vm._v(" "+_vm._s(_vm.$t('APP.PROTECT_DATA'))+" ")])])]),_c('div',{staticClass:"info-area info-horizontal"},[_vm._m(2),_c('div',{staticClass:"description"},[_c('h3',{staticClass:"info-title"},[_vm._v(_vm._s(_vm.$t('WALLET.ADDRESS'))+" SmartHoldem")]),_c('p',{staticClass:"description"},[_vm._v(" "+_vm._s(_vm.$t('APP.GET_UADDR'))+" ")])]),(_vm.step === 2)?_c('div',{staticClass:"description text-center"},[_c('p',{staticClass:"text-white"},[_vm._v(" - "+_vm._s(_vm.$t('APP.OR'))+" - ")]),_c('base-button',{staticClass:"w-100 text-uppercase",attrs:{"type":"primary","round":""},on:{"click":_vm.importAccount}},[_c('i',{staticClass:"tim-icons icon-cloud-upload-94"}),_vm._v(" "+_vm._s(_vm.$t('APP.IMPORT_ACCOUNT')))])],1):_vm._e(),(_vm.step === 21)?_c('div',{staticClass:"description text-center"},[_c('p',[_vm._v(" - "+_vm._s(_vm.$t('APP.OR'))+" - ")]),_c('base-button',{staticClass:"w-100 text-uppercase",attrs:{"type":"primary","round":""},on:{"click":_vm.getNewAccount}},[_c('i',{staticClass:"tim-icons icon-single-02"}),_vm._v(" "+_vm._s(_vm.$t('APP.GET_NEW_ACC')))])],1):_vm._e()])]):_vm._e(),(_vm.isMobile)?_c('div',{staticClass:"col-md-12 ml-auto"},[_c('div',{staticClass:"info-area"},[(_vm.step === 2)?_c('div',{staticClass:"description text-center"},[_c('base-button',{staticClass:"w-100 text-uppercase",attrs:{"type":"dark"},on:{"click":_vm.importAccount}},[_c('i',{staticClass:"tim-icons icon-cloud-upload-94"}),_vm._v(" "+_vm._s(_vm.$t('APP.IMPORT_ACCOUNT')))])],1):_vm._e(),(_vm.step === 21)?_c('div',{staticClass:"description text-center"},[_c('base-button',{staticClass:"w-100 text-uppercase",attrs:{"type":"dark"},on:{"click":_vm.getNewAccount}},[_c('i',{staticClass:"tim-icons icon-single-02"}),_vm._v(" "+_vm._s(_vm.$t('APP.GET_NEW_ACC')))])],1):_vm._e()])]):_vm._e(),_c('div',{staticClass:"col-md-7 mr-auto"},[(_vm.step === 1)?_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.register($event)}}},[_c('card',{staticClass:"card-register card-white"},[_c('template',{slot:"header"},[_c('img',{staticClass:"card-img",attrs:{"src":"img/card-primary.png","alt":"register"}}),_c('h4',{staticClass:"card-title text-white"},[_vm._v("encryption")])]),_c('base-input',{directives:[{name:"validate",rawName:"v-validate",value:('required|min:4'),expression:"'required|min:4'"}],staticClass:"bg-white password",attrs:{"error":_vm.getError('pin'),"name":"pin","type":"text","placeholder":"* Pin Code","addon-left-icon":"tim-icons icon-lock-circle","autocomplete":"off"},model:{value:(_vm.model.pin),callback:function ($$v) {_vm.$set(_vm.model, "pin", $$v)},expression:"model.pin"}}),_c('base-input',{directives:[{name:"validate",rawName:"v-validate",value:('required|min:4'),expression:"'required|min:4'"}],staticClass:"bg-white password",attrs:{"error":_vm.getError('pinR'),"name":"pinR","type":"text","placeholder":'* '+_vm.$t('APP.REPEAT') + ' Pin',"addon-left-icon":"tim-icons icon-lock-circle","autocomplete":"off"},on:{"input":_vm.pinValidate},model:{value:(_vm.model.pinR),callback:function ($$v) {_vm.$set(_vm.model, "pinR", $$v)},expression:"model.pinR"}}),_c('base-checkbox',{staticClass:"text-left form-check-inline",staticStyle:{"z-index":"10000"},model:{value:(_vm.checks.agree),callback:function ($$v) {_vm.$set(_vm.checks, "agree", $$v)},expression:"checks.agree"}},[_vm._v(" "+_vm._s(_vm.$t('APP.AGREE1'))+" ")]),_c('span',{staticClass:"text-primary pointer position-relative",on:{"click":function($event){_vm.showConditions = true}}},[_vm._v(_vm._s(_vm.$t('APP.AGREE2')))]),_c('base-button',{staticClass:"text-uppercase",attrs:{"slot":"footer","disabled":!_vm.checks.agree,"native-type":"submit","type":"primary","round":"","block":"","size":"lg"},slot:"footer"},[_vm._v(" "+_vm._s(_vm.$t('APP.CONTINUE'))+" "),_c('i',{staticClass:"tim-icons icon-double-right"})])],2)],1):_vm._e(),(_vm.step === 2)?_c('card',{staticClass:"card-register card-white stacked-form"},[_c('template',{slot:"header"},[_c('img',{staticClass:"card-img",attrs:{"src":"img/card-primary.png","alt":"Card image"}}),_c('h4',{staticClass:"card-title"},[_vm._v("New Wallet")])]),_c('p',{staticClass:"text-black-50"},[_vm._v(_vm._s(_vm.$t('APP.YOUR_PUB_ADDR')))]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.account.address),expression:"account.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"top"}},[_c('base-input',{staticClass:"pointer",attrs:{"readonly":"","addon-left-icon":"tim-icons icon-single-copy-04"},model:{value:(_vm.account.address),callback:function ($$v) {_vm.$set(_vm.account, "address", $$v)},expression:"account.address"}})],1),_c('p',{staticClass:"text-black-50"},[_vm._v(_vm._s(_vm.$t('APP.YOUR_SECRET')))]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.account.secret),expression:"account.secret",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"top"}},[_c('base-input',{staticClass:"pointer",attrs:{"readonly":"","addon-left-icon":"tim-icons icon-single-copy-04"},model:{value:(_vm.account.secret),callback:function ($$v) {_vm.$set(_vm.account, "secret", $$v)},expression:"account.secret"}})],1),_c('base-checkbox',{staticClass:"text-left"},[_vm._v(" "+_vm._s(_vm.$t('APP.I_SAVED'))+" ")]),_c('base-checkbox',{staticClass:"text-left",model:{value:(_vm.checks.lose),callback:function ($$v) {_vm.$set(_vm.checks, "lose", $$v)},expression:"checks.lose"}},[_vm._v(" "+_vm._s(_vm.$t('APP.IF_LOSE'))+" ")]),_c('base-button',{staticClass:"text-uppercase",attrs:{"slot":"footer","disabled":!_vm.checks.lose,"type":"primary","round":"","block":"","size":"lg"},on:{"click":_vm.saveAccount},slot:"footer"},[_c('i',{staticClass:"tim-icons icon-check-2"}),_vm._v(" "+_vm._s(_vm.$t('APP.GET_STARTED'))+" ")])],2):_vm._e(),(_vm.step === 21)?_c('card',{staticClass:"card-register card-white stacked-form"},[_c('template',{slot:"header"},[_c('img',{staticClass:"card-img",attrs:{"src":"img/card-primary.png","alt":"Card image"}}),_c('h4',{staticClass:"card-title"},[_vm._v("Import")])]),_c('p',{staticClass:"text-black-50"},[_vm._v(_vm._s(_vm.$t('APP.ENTER_SECRET')))]),_c('base-input',{staticClass:"pointer",attrs:{"addon-left-icon":"tim-icons icon-single-copy-04"},on:{"input":_vm.validateImportAccount},model:{value:(_vm.account.secret),callback:function ($$v) {_vm.$set(_vm.account, "secret", $$v)},expression:"account.secret"}}),_c('base-alert',{directives:[{name:"show",rawName:"v-show",value:(_vm.isBip39 === false),expression:"isBip39 === false"}],staticClass:"mb-1 small p-1",attrs:{"type":"warning"}},[_c('i',{staticClass:"tim-icons icon-bell-55"}),_vm._v(" "+_vm._s(_vm.$t('APP.NO_BIP39')))]),_c('p',{staticClass:"text-black-50"},[_vm._v(_vm._s(_vm.$t('APP.YOUR_PUB')))]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.account.address),expression:"account.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"top"}},[_c('base-input',{staticClass:"pointer",attrs:{"readonly":"","addon-left-icon":"tim-icons icon-single-copy-04"},model:{value:(_vm.account.address),callback:function ($$v) {_vm.$set(_vm.account, "address", $$v)},expression:"account.address"}})],1),_c('base-checkbox',{staticClass:"text-left",model:{value:(_vm.checks.lose),callback:function ($$v) {_vm.$set(_vm.checks, "lose", $$v)},expression:"checks.lose"}},[_vm._v(" "+_vm._s(_vm.$t('APP.IF_LOSE'))+" ")]),_c('base-button',{staticClass:"text-uppercase",attrs:{"slot":"footer","disabled":!_vm.checks.lose || !_vm.account.address,"type":"primary","round":"","block":"","size":"lg"},on:{"click":_vm.saveAccount},slot:"footer"},[_c('i',{staticClass:"tim-icons icon-check-2"}),_vm._v(" "+_vm._s(_vm.$t('APP.GET_STARTED'))+" ")])],2):_vm._e()],1)]):_vm._e(),_c('modal',{staticClass:"modal-conditions h-100",attrs:{"show":_vm.showConditions,"headerClasses":"justify-content-center"},on:{"update:show":function($event){_vm.showConditions=$event}}},[_c('h2',{staticClass:"text-center"},[_vm._v("Terms and Conditions")]),_c('div',[_c('div',{staticClass:"card-body"},[_c('p',[_vm._v(" Technologies related to blockchain are subject to supervision and control by various regulatory bodies around the world. ")]),_c('p',[_vm._v("SmartHoldem tokens may fall under one or more requests or actions on their part, including but not limited to imposing restrictions on the use or possession of digital tokens such as SmartHoldem that can slow or limit the functionality of SmartHoldem tokens in the future.")]),_c('p',[_vm._v(" SmartHoldem tokens are not an investment. ")]),_c('p',[_vm._v(" SmartHoldem tokens are not a “surrogate currency”. ")]),_c('p',[_vm._v(" SmartHoldem tokens are not official or legally binding investment. Due to unforeseen circumstances, the objectives described in this document may be amended. Despite the fact that we intend to reach all the points described in this document, all persons and parties involved in the purchase of SmartHoldem tokens do this at their own risk. ")]),_c('p',[_c('span',{staticClass:"font-weight-bolder"},[_vm._v("The risk of using new technologies.")]),_c('br'),_vm._v(" Cryptographic tokens, such as SmartHoldem, are a new and experimental technology. In addition to the risks mentioned in this document, there are additional risks that the SmartHoldem team can not foresee. These risks can materialize in other forms of risk than those specified here. ")])])]),_c('h2',{staticClass:"text-center"},[_vm._v("Disclaimer of Warranties")]),_c('div',[_c('div',{staticClass:"card-body"},[_c('p',[_vm._v("You agree that your use or inability to use SmartHoldem cryptocoins is carried out solely at your own risk and")]),_c('p',[_vm._v("you don't put any responsibility on SmartHoldem Team.")]),_c('p',[_vm._v("You agree that your use or inability to use SmartHoldem tokens is carried out solely at your own risk and")]),_c('p',[_vm._v("you don't put any responsibility on SmartHoldem Team.")])])]),_c('template',{slot:"footer"})],2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon icon-warning"},[_c('i',{staticClass:"tim-icons icon-wallet-43"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon icon-warning"},[_c('i',{staticClass:"tim-icons icon-lock-circle"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon icon-warning"},[_c('i',{staticClass:"tim-icons icon-money-coins"})])}]


// CONCATENATED MODULE: ./src/pages/Pages/Register.vue?vue&type=template&id=74558a8c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// EXTERNAL MODULE: ./node_modules/sthjs/index.js
var sthjs = __webpack_require__("8a0e");
var sthjs_default = /*#__PURE__*/__webpack_require__.n(sthjs);

// EXTERNAL MODULE: ./node_modules/bip39/src/index.js
var src = __webpack_require__("29c9");

// EXTERNAL MODULE: ./node_modules/crypto-random-string/index.js
var crypto_random_string = __webpack_require__("4556");

// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__("3452");
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Register.vue?vue&type=script&lang=js&












/* harmony default export */ var Registervue_type_script_lang_js_ = ({
  components: {
    BaseCheckbox: components["b" /* BaseCheckbox */],
    BaseAlert: components["a" /* BaseAlert */],
    Modal: components["g" /* Modal */]
  },
  data: function data() {
    return {
      display: false,
      showConditions: false,
      isMobile: false,
      mobileClass: '',
      step: 1,
      checks: {
        agree: false,
        lose: false
      },
      isBip39: null,
      toolTipsContent: {
        copy: "Copy"
      },
      account: {
        address: null,
        secret: null,
        pubKey: null,
        name: 'SmartHoldem'
      },
      model: {
        pin: '',
        name: 'SmartHoldem',
        pinR: ''
      }
    };
  },
  methods: {
    importAccount: function importAccount() {
      this.account.address = null;
      this.account.secret = null;
      this.account.pubKey = null;
      this.isBip39 = null;
      this.step = 21;
    },
    getNewAccount: function getNewAccount() {
      this.step = 2;
      var privateKeyHex = crypto_random_string({
        length: 32
      });
      var mnemonic = Object(src["entropyToMnemonic"])(privateKeyHex);
      var PUB_KEY = sthjs_default.a.crypto.getKeys(mnemonic).publicKey;
      this.account.address = sthjs_default.a.crypto.getAddress(PUB_KEY);
      this.account.secret = mnemonic;
      this.account.pubKey = PUB_KEY;
    },
    validateImportAccount: function validateImportAccount() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var PUB_KEY;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.account.secret.length > 7) {
                  PUB_KEY = sthjs_default.a.crypto.getKeys(_this.account.secret).publicKey;
                  _this.account.address = sthjs_default.a.crypto.getAddress(PUB_KEY);
                  _this.isBip39 = Object(src["validateMnemonic"])(_this.account.secret);
                  _this.account.pubKey = PUB_KEY;
                } else {
                  _this.account.address = null;
                  _this.isBip39 = null;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveAccount: function saveAccount() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('app/setAccount', {
                  pin: crypto_js_default.a.SHA384(_this2.model.pin).toString(),
                  name: _this2.model.name,
                  address: _this2.account.address,
                  secret: _this2.account.secret,
                  pubKey: _this2.account.pubKey
                });

              case 2:
                _context2.next = 4;
                return _this2.$store.dispatch('app/setSettings', {
                  name: _this2.model.name,
                  sound: true,
                  partner: ''
                });

              case 4:
                _context2.next = 6;
                return _this2.$store.dispatch('wallet/getTxsByAddress');

              case 6:
                _this2.account.secret = null;
                _context2.next = 9;
                return _this2.$store.dispatch('wallet/setCurrentAddress', _this2.account.address);

              case 9:
                _context2.next = 11;
                return _this2.$router.push('/lock/');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    pinValidate: function pinValidate() {
      if (this.model.pin === this.model.pinR) {
        this.$store.dispatch('app/setPinEnc', this.model.pin);
        return true;
      } else {
        return false;
      }
    },
    getError: function getError(fieldName) {
      return this.errors.first(fieldName);
    },
    register: function register() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var isValidForm, privateKeyHex, mnemonic, PUB_KEY;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$validator.validateAll();

              case 2:
                isValidForm = _context3.sent;

                if (isValidForm && _this3.pinValidate()) {
                  _this3.step = 2;
                  privateKeyHex = crypto_random_string({
                    length: 32
                  });
                  mnemonic = Object(src["entropyToMnemonic"])(privateKeyHex);
                  PUB_KEY = sthjs_default.a.crypto.getKeys(mnemonic).publicKey;
                  _this3.account.address = sthjs_default.a.crypto.getAddress(PUB_KEY);
                  _this3.account.secret = mnemonic;
                  _this3.account.pubKey = PUB_KEY;
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (_this4.$store.getters['app/pinEncrypted']) {
                _this4.$router.push({
                  path: '/lock'
                });
              } else {
                _this4.display = true;
              }

              _this4.$store.dispatch('session/setAuth', false);

              _this4.$root.pin = null;
              _this4.isMobile = window.innerWidth < 720;

              window.onresize = function () {
                _this4.isMobile = window.innerWidth < 720;
              };

              if (_this4.isMobile) {
                _this4.mobileClass = 'ismobile';
              }

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Pages/Register.vue?vue&type=style&index=0&lang=css&
var Registervue_type_style_index_0_lang_css_ = __webpack_require__("ad5c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/Register.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3762":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalTerms.vue?vue&type=template&id=77383056&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('h1',[_vm._v("Terms and Conditions")])]),_c('p',{staticClass:"ml-3 small color-brown"},[_vm._v("20 November 2017")]),_c('div',[_c('div',{staticClass:"card-body"},[_c('p',[_vm._v(" Technologies related to blockchain are subject to supervision and control by various regulatory bodies around the world. ")]),_c('p',[_vm._v("SmartHoldem tokens may fall under one or more requests or actions on their part, including but not limited to imposing restrictions on the use or possession of digital tokens such as SmartHoldem that can slow or limit the functionality of SmartHoldem tokens in the future.")]),_c('p',[_vm._v(" SmartHoldem tokens are not an investment. ")]),_c('p',[_vm._v(" SmartHoldem tokens are not a “surrogate currency”. ")]),_c('p',[_vm._v(" SmartHoldem tokens are not official or legally binding investment. Due to unforeseen circumstances, the objectives described in this document may be amended. Despite the fact that we intend to reach all the points described in this document, all persons and parties involved in the purchase of SmartHoldem tokens do this at their own risk. ")]),_c('p',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("The risk of using new technologies.")]),_c('br'),_vm._v(" Cryptographic tokens, such as SmartHoldem, are a new and experimental technology. In addition to the risks mentioned in this document, there are additional risks that the SmartHoldem team can not foresee. These risks can materialize in other forms of risk than those specified here. ")])])])])])}]


// CONCATENATED MODULE: ./src/pages/Pages/LegalTerms.vue?vue&type=template&id=77383056&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalTerms.vue?vue&type=script&lang=js&
/* harmony default export */ var LegalTermsvue_type_script_lang_js_ = ({
  name: "LegalTerms"
});
// CONCATENATED MODULE: ./src/pages/Pages/LegalTerms.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_LegalTermsvue_type_script_lang_js_ = (LegalTermsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/LegalTerms.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_LegalTermsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "77383056",
  null
  
)

/* harmony default export */ var LegalTerms = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "39d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLinePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e68e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLinePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLinePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLinePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3db1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Contacts.vue?vue&type=template&id=5d603d6e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('base-button',{staticClass:"ml-2 text-uppercase",attrs:{"type":"danger","simple":"","round":""},on:{"click":function($event){return _vm.showModalAddContact()}}},[_c('i',{staticClass:"tim-icons icon-simple-add pb-1",staticStyle:{"font-size":"0.96rem"}}),_vm._v(" Add New Contact ")])],1)]),_c('card',{staticStyle:{"margin-bottom":"0px"},attrs:{"card-body-classes":"table-full-width"}},[_c('el-table',{attrs:{"data":_vm.contactList,"stripe":""}},[_c('el-table-column',{attrs:{"className":"","min-width":"50","label":"Name","property":"label","sortable":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_c('span',{staticClass:"font-weight-bolder"},[_vm._v(_vm._s(row.label))]),(_vm.$root.isMobile)?_c('span',{staticClass:"small"},[_c('br'),_vm._v(_vm._s(row.address)+" "),_c('br'),_vm._v(_vm._s(row.balance)+" STH ")]):_vm._e()])}}])}),(!_vm.$root.isMobile)?_c('el-table-column',{attrs:{"className":"","min-width":"100","label":"Address","property":"address"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_c('span',{staticClass:"text-info font-weight-normal pointer",on:{"click":function($event){return _vm.openLink('https://blockexplorer.smartholdem.io/#/wallets/'+row.address)}}},[_vm._v(_vm._s(row.address))])])}}],null,false,2864132908)}):_vm._e(),(!_vm.$root.isMobile)?_c('el-table-column',{attrs:{"sortable":"","className":"","min-width":"60","label":"Balance","property":"balance"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_vm._v(" "+_vm._s(row.balance)+" STH ")])}}],null,false,3933229430)}):_vm._e(),(!_vm.$root.isMobile)?_c('el-table-column',{attrs:{"className":"","min-width":"100","label":"Actions"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{staticClass:"mt-1"},[_c('base-button',{staticClass:"mr-2 btn-sm",attrs:{"type":"warning","icon":"","simple":""},on:{"click":function($event){return _vm.showModal('modal:qr', {address: row.address})}}},[_c('i',{staticClass:"fas fa-qrcode",staticStyle:{"font-size":"1.3rem"}})]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:copy",value:(row.address),expression:"row.address",arg:"copy"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300}},[_c('base-button',{staticClass:"mr-1 btn-sm",attrs:{"type":"info","icon":"","simple":""}},[_c('i',{staticClass:"tim-icons icon-single-copy-04"})])],1),_c('base-button',{staticClass:"mr-1 btn-sm",attrs:{"type":"danger","icon":"","simple":""},on:{"click":function($event){return _vm.removeContact(row.address)}}},[_c('el-tooltip',{attrs:{"content":"Remove Contact","effect":"light","open-delay":300,"placement":"top"}},[_c('i',{staticClass:"tim-icons icon-trash-simple"})])],1)],1)}}],null,false,27862133)}):_vm._e()],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dashboard/Contacts.vue?vue&type=template&id=5d603d6e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__("5466");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__("450d");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/table-column.js
var lib_table_column = __webpack_require__("ecdf");
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(lib_table_column);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__("38a0");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/table.js
var lib_table = __webpack_require__("ad41");
var lib_table_default = /*#__PURE__*/__webpack_require__.n(lib_table);

// EXTERNAL MODULE: ./src/plugins/event-bus.js
var event_bus = __webpack_require__("e00b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Contacts.vue?vue&type=script&lang=js&












var _components;


/* harmony default export */ var Contactsvue_type_script_lang_js_ = ({
  name: "Contacts",
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, lib_table_default.a.name, lib_table_default.a), Object(defineProperty["a" /* default */])(_components, lib_table_column_default.a.name, lib_table_column_default.a), _components),
  computed: {
    contactList: function contactList() {
      var data = this.$store.getters['app/contacts'];
      var keys = Object.keys(data);
      var result = [];

      for (var i = 0; i < keys.length; i++) {
        result.push(data[keys[i]]);
      }

      return result;
    }
  },
  methods: {
    showModal: function showModal(evt) {
      var _arguments = arguments,
          _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};

                if (_this.$root.pin) {
                  event_bus["a" /* default */].emit(evt, options);
                } else {
                  event_bus["a" /* default */].emit('modal:unlock');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeContact: function removeContact(key) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var accounts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.getters['app/contacts'];

              case 2:
                accounts = _context2.sent;
                delete accounts[key];
                _context2.next = 6;
                return _this2.$store.dispatch('app/updateContacts', accounts);

              case 6:
                _context2.next = 8;
                return _this2.$store.dispatch('app/fetchContacts');

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getAccount: function getAccount(address) {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('blockchain/getAccount', address);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showModalAddContact: function showModalAddContact() {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event_bus["a" /* default */].emit('modal:contacts');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this4.$store.dispatch('app/setPage', 'wallet');

            case 2:
              _context5.next = 4;
              return _this4.$store.dispatch('app/fetchContacts');

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Dashboard/Contacts.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dashboard_Contactsvue_type_script_lang_js_ = (Contactsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Dashboard/Contacts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Dashboard_Contactsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5d603d6e",
  null
  
)

/* harmony default export */ var Contacts = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4010":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeResizeListener = exports.addResizeListener = undefined;

var _resizeObserverPolyfill = __webpack_require__("6dd8");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = typeof window === 'undefined';

/* istanbul ignore next */
var resizeHandler = function resizeHandler(entries) {
  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var entry = _ref;

    var listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(function (fn) {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new _resizeObserverPolyfill2.default(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};

/***/ }),

/***/ "417f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__("2b0e");

var _vue2 = _interopRequireDefault(_vue);

var _dom = __webpack_require__("5924");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeList = [];
var ctx = '@@clickoutsideContext';

var startClick = void 0;
var seed = 0;

!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mousedown', function (e) {
  return startClick = e;
});

!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mouseup', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e, startClick);
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function () {
    var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};

/***/ }),

/***/ "4225":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_03ba0347_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2608");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_03ba0347_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_03ba0347_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_03ba0347_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4350":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AbountyAuth.vue?vue&type=template&id=0c60f8e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"col-md-12"},[_c('card',{staticClass:"w-100 text-center"},[_c('h2',[_vm._v("Welcome "+_vm._s(_vm.$route.params.name))]),_c('h3',{staticClass:"mt-3"},[_vm._v("AntiBounty auth success"),_c('br'),_vm._v(_vm._s(_vm.$route.params.address))]),_c('div',{staticClass:"w-100"},[(_vm.myAccount[_vm.$route.params.address])?_c('div',{staticClass:"ml-auto mr-auto text-center"},[_c('img',{attrs:{"src":_vm.myAccount[_vm.$route.params.address].profile_image_url_https}})]):_vm._e(),_c('hollow-dots-spinner',{directives:[{name:"show",rawName:"v-show",value:(!_vm.myAccount[_vm.$route.params.address]),expression:"!myAccount[$route.params.address]"}],staticClass:"ml-auto mr-auto",attrs:{"animation-duration":1000,"dot-size":15,"dots-num":5,"color":"#ff1d5e"}}),_c('p',[_c('router-link',{attrs:{"to":"/abounty/workers"}},[_c('base-button',{staticClass:"mt-4",attrs:{"type":"success","round":""}},[_vm._v("OPEN ACCOUNT")])],1)],1)],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Pages/AbountyAuth.vue?vue&type=template&id=0c60f8e8&scoped=true&

// EXTERNAL MODULE: ./node_modules/epic-spinners/src/lib.js + 101 modules
var lib = __webpack_require__("4583");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AbountyAuth.vue?vue&type=script&lang=js&

/* harmony default export */ var AbountyAuthvue_type_script_lang_js_ = ({
  name: "AntibountyAuth",
  components: {
    HollowDotsSpinner: lib["a" /* HollowDotsSpinner */]
  },
  data: function data() {
    return {
      tmr: null
    };
  },
  computed: {
    myAccount: function myAccount() {
      return this.$store.getters['abounty/twitter'];
    }
  },
  methods: {
    pageClose: function pageClose() {
      window.close();
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('abounty/twGetProfile', this.$route.params.address);
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/AbountyAuth.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_AbountyAuthvue_type_script_lang_js_ = (AbountyAuthvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/AbountyAuth.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_AbountyAuthvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0c60f8e8",
  null
  
)

/* harmony default export */ var AbountyAuth = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "49ec":
/***/ (function(module, exports, __webpack_require__) {

/*! @inotom/vue-go-top v1.3.0 inotom (http://www.serendip.ws/) | MIT */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=60)}([function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(35))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(1),o=n(11).f,i=n(9),a=n(17),c=n(24),u=n(63),s=n(48);t.exports=function(t,e){var n,f,l,p,h,d=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[d]||c(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!s(v?f:d+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},function(t,e,n){var r=n(3),o=n(38),i=n(7),a=n(13),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(37),o=n(12);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(6),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1),o=n(26),i=n(2),a=n(27),c=n(29),u=n(49),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(3),o=n(36),i=n(15),a=n(8),c=n(13),u=n(2),s=n(38),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(12);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(1),o=n(9),i=n(2),a=n(24),c=n(40),u=n(42),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e){t.exports={}},function(t,e,n){var r=n(45),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(46),o=n(28).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(97),o=n(98);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},function(t,e,n){var r=n(1),o=n(9);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(26),o=n(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(43),o=n(41);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(0);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(46),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(71),o=n(37),i=n(14),a=n(21),c=n(52),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(h,d,v,g){for(var y,m,b=i(h),x=o(b),w=r(d,v,3),S=a(x.length),O=0,E=g||c,_=e?E(h,S):n?E(h,0):void 0;S>O;O++)if((p||O in x)&&(m=w(y=x[O],O,b),t))if(e)_[O]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u.call(_,y)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){"use strict";var r,o,i=n(87),a=n(88),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var e,n,r,o,a=this,s=l&&a.sticky,h=i.call(a),d=a.source,v=0,g=t;return s&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",h)),p&&(n=new RegExp("^"+d+"$(?!\\s)",h)),f&&(e=a.lastIndex),r=c.call(s?n:a,g),s?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:f&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){"use strict";n(61),n(73),n(75),n(76),n(78),n(84),n(85),n(86),n(58),n(89),n(94);function r(t,e,n,r){var o,i=!1,a=0;function c(){o&&clearTimeout(o)}function u(){var u=this,s=Date.now()-a,f=arguments;function l(){a=Date.now(),n.apply(u,f)}function p(){o=void 0}i||(r&&!o&&l(),c(),void 0===r&&s>t?l():!0!==e&&(o=setTimeout(r?p:l,void 0===r?t-s:t)))}return"boolean"!=typeof e&&(r=n,n=e,e=void 0),u.cancel=function(){c(),i=!0},u}var o=n(59);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return"number"==typeof t?t+e:t},s=new(n.n(o).a),f={props:{size:{type:Number,default:70},right:{type:[String,Number],default:50},bottom:{type:[String,Number],default:100},bottomGap:{type:[String,Number],default:0},zIndex:{type:Number,default:1e3},fgColor:{type:String,default:"#ffffff"},bgColor:{type:String,default:"#ffc966"},radius:{type:[String,Number],default:"50%"},weight:{type:String,default:"normal"},rippleBg:{type:String,default:"rgba(255, 255, 255, .5)"},boundary:{type:Number,default:200},maxWidth:{type:Number,default:640},src:{type:String,default:null},alt:{type:String,default:""},hasOutline:{type:Boolean,default:!0},boxShadow:{type:String,default:"1px 1px 2px rgba(0, 0, 0, .3)"},tabindex:{type:Number,default:0}},data:function(){var t=this.hasOutline?{}:{outline:"0 none"};return{enabled:!1,isActive:!1,isRippleActive:!1,mainStyle:a({width:u(this.size),height:u(this.size),right:u(this.right),bottom:"calc(".concat(u(this.bottom)," - ").concat(u(this.bottomGap),")"),zIndex:this.zIndex,color:this.fgColor,backgroundColor:this.bgColor,backgroundImage:this.bgImage(),backgroundSize:"".concat(this.size," auto"),boxShadow:this.boxShadow,opacity:this.opacity,borderRadius:u(this.radius)},t),rippleStyle:{top:u(-this.size),left:u(-this.size),width:"200%",height:"200%",backgroundColor:this.rippleBg},throttleScroll:null,throttleResize:null}},created:function(){this.handleResize(),this.throttleScroll=r(100,this.handleScroll),this.throttleResize=r(100,this.handleResize),window.addEventListener("resize",this.throttleResize),window.addEventListener("scroll",this.throttleScroll)},beforeDestroy:function(){this.throttleResize&&window.removeEventListener("resize",this.throttleResize),this.throttleScroll&&window.removeEventListener("scroll",this.throttleScroll)},methods:{clickHandle:function(t){var e=this;if(!this.isRippleActive){var n=t.target;if(n){var r=n.getBoundingClientRect(),o=t.clientY-r.top,i=t.clientX-r.left;this.rippleStyle.top=u(o-this.size),this.rippleStyle.left=u(i-this.size)}this.isRippleActive=!0,setTimeout((function(){e.isRippleActive=!1}),750)}s.to(0)},handleScroll:function(){this.isActive=window.pageYOffset>this.boundary},handleResize:function(){this.maxWidth>0?this.enabled=!window.matchMedia("(max-width: ".concat(this.maxWidth,"px)")).matches:this.enabled=!0},keyEnter:function(t){13!==t.keyCode&&32!==t.keyCode||s.to(0)},bgImage:function(){return null!==this.src?"none":'url("'.concat((t=this.weight,e=this.fgColor,n=e.replace(/^#/,""),"bold"===t?"data:image/svg+xml;charset=utf8, %3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+n+"%27 stroke=%27none%27 points=%278.646,7.354 5,3.707 1.354,7.354 0.646,6.646 5,2.293 9.354,6.646%27 /%3E %3C/svg%3E":"data:image/svg+xml;charset=utf8,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+n+"%27 stroke=%27none%27 points=%278.589,6.945 5,3.22 1.413,6.945 1.052,6.598 5,2.499 8.948,6.598%27 /%3E %3C/svg%3E"),'")');var t,e,n}}};n(96);var l=function(t,e,n,r,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vue-go-top"}},[t.isActive&&t.enabled?n("div",{staticClass:"vue-go-top",style:t.mainStyle,attrs:{role:"button",tabindex:t.tabindex},on:{click:function(e){return e.preventDefault(),t.clickHandle(e)},keydown:function(e){return e.preventDefault(),t.keyEnter(e)}}},[null!==t.src?n("div",{staticClass:"vue-go-top__icon"},[n("img",{staticClass:"vue-go-top__image",attrs:{src:t.src,alt:t.alt}}),t._v(" "),n("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}})]):n("div",{staticClass:"vue-go-top__content"},[n("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}}),t._v(" "),t._t("default")],2)]):t._e()])}),[],!1,null,"0c20a6ee",null);e.a=l.exports},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(3),o=n(0),i=n(39);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(4),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r=n(41),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(1),o=n(24),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,a=n(62),c=n(1),u=n(4),s=n(9),f=n(2),l=n(25),p=n(18),h=c.WeakMap;if(a){var d=new h,v=d.get,g=d.has,y=d.set;r=function(t,e){return y.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(19),o=n(20),i=n(47),a=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(2),o=n(8),i=n(64).indexOf,a=n(18);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(0),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(29);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r,o=n(7),i=n(66),a=n(28),c=n(18),u=n(67),s=n(39),f=n(25),l=f("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete d.prototype[a[n]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=d(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(10);e.f=r},function(t,e,n){var r=n(4),o=n(30),i=n(10)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(13),o=n(6),i=n(15);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(0),o=n(10),i=n(55),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(1),a=n(74),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(3),o=n(0),i=n(2),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,l)}))}},function(t,e,n){"use strict";var r=n(32).forEach,o=n(77),i=n(56),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){"use strict";var r=n(5),o=n(33);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){
/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
t.exports=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var t=function(){return(t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},e=!("undefined"==typeof window||!window.document||!window.document.createElement),n=!!e&&window.history&&"pushState"in window.history&&"file:"!==window.location.protocol,r=function(){var t=!1;if(!e)return t;try{var n=window,r=Object.defineProperty({},"passive",{get:function(){t=!0}});n.addEventListener("test",null,r),n.removeEventListener("test",null,r)}catch(t){}return t}(),o=function(t){return"string"==typeof t},i=function(t){return"function"==typeof t},a=function(t){return Array.isArray(t)},c=function(t,e){return t&&t.hasOwnProperty(e)},u=e?window.requestAnimationFrame.bind(window):null,s=e?window.cancelAnimationFrame.bind(window):null,f=Math.cos,l=Math.sin,p=Math.pow,h=Math.sqrt,d=Math.PI,v={linear:function(t){return t},easeInQuad:function(t,e,n,r,o){return r*(e/=o)*e+n},easeOutQuad:function(t,e,n,r,o){return-r*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,r,o){return(e/=o/2)<1?r/2*e*e+n:-r/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,r,o){return r*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,r,o){return r*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,r,o){return(e/=o/2)<1?r/2*e*e*e+n:r/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,r,o){return r*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,r,o){return-r*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,r,o){return(e/=o/2)<1?r/2*e*e*e*e+n:-r/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,r,o){return r*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,r,o){return r*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,r,o){return(e/=o/2)<1?r/2*e*e*e*e*e+n:r/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,r,o){return-r*f(e/o*(d/2))+r+n},easeOutSine:function(t,e,n,r,o){return r*l(e/o*(d/2))+n},easeInOutSine:function(t,e,n,r,o){return-r/2*(f(d*e/o)-1)+n},easeInExpo:function(t,e,n,r,o){return 0===e?n:r*p(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,r,o){return e===o?n+r:r*(1-p(2,-10*e/o))+n},easeInOutExpo:function(t,e,n,r,o){return 0===e?n:e===o?n+r:(e/=o/2)<1?r/2*p(2,10*(e-1))+n:r/2*(2-p(2,-10*--e))+n},easeInCirc:function(t,e,n,r,o){return-r*(h(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,r,o){return r*h(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,r,o){return(e/=o/2)<1?-r/2*(h(1-e*e)-1)+n:r/2*(h(1-(e-=2)*e)+1)+n}},g=function(t){return Array.prototype.slice.call(t?document.querySelectorAll(t):[])},y=function(t){return g(t).shift()||null},m=function(t){return t instanceof Element},b=function(t){return t===window},x=function(t){return t===document.documentElement||t===document.body},w=function(t,e){if(m(e))return t===e;for(var n=g(e),r=n.length;--r>=0&&n[r]!==t;);return r>-1},S=function(t){return Math.max(t.scrollHeight,t.clientHeight,t.offsetHeight)},O=function(t){return Math.max(t.scrollWidth,t.clientWidth,t.offsetWidth)},E=function(t){return{width:O(t),height:S(t)}},_={y:"scrollTop",x:"scrollLeft"},C={y:"pageYOffset",x:"pageXOffset"},j=function(t,e){return b(t)?t[C[e]]:t[_[e]]},I=function(t,e,n){if(b(t)){var r="y"===n;t.scrollTo(r?t.pageXOffset:e,r?e:t.pageYOffset)}else t[_[n]]=e},P=function(t,e){var n=t.getBoundingClientRect();if(n.width||n.height){var r={top:0,left:0},o=void 0;if(b(e)||x(e))o=document.documentElement,r.top=window[C.y],r.left=window[C.x];else{var i=(o=e).getBoundingClientRect();r.top=-1*i.top+o[_.y],r.left=-1*i.left+o[_.x]}return{top:n.top+r.top-o.clientTop,left:n.left+r.left-o.clientLeft}}return n},T=e?"onwheel"in document?"wheel":"mousewheel":"wheel",A=function(t,e,n,o,i){n.split(" ").forEach((function(n){t[e](function(t){return"wheel"===t?T:t}(n),o,!!r&&{passive:i})}))},R=function(t,e,n,r){return A(t,"addEventListener",e,n,r)},k=function(t,e,n,r){return A(t,"removeEventListener",e,n,r)},N=/^(\+|-)=(\d+(?:\.\d+)?)$/,M=function(e,n){var r,i={top:0,left:0,relative:!1};if(c(e,"top")||c(e,"left"))i=t({},i,e);else if(a(e))if(e.length>1)i.top=e[0],i.left=e[1];else{if(1!==e.length)return null;i.top=n?e[0]:0,i.left=n?0:e[0]}else if(!a(r=e)&&r-parseFloat(r)+1>=0)n?i.top=e:i.left=e;else{if(!o(e))return null;var u=e.trim().match(N);if(!u)return null;var s=u[1],f=parseInt(u[2],10);"+"===s?(i.top=n?f:0,i.left=n?0:f):(i.top=n?-f:0,i.left=n?0:-f),i.relative=!0}return i},L={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,easing:"easeOutQuint",offset:0,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,before:null,after:null,cancel:null,complete:null,step:null};return function(){function r(n,o){var i=this;this.$el=null,this.ctx={$trigger:null,opts:null,progress:!1,pos:null,startPos:null,easing:null,start:0,id:0,cancel:!1,hash:null},this.loop=function(t){var e=i,n=e.$el,o=e.ctx;if(o.start||(o.start=t),o.progress&&n){var a=o.opts,c=o.pos,u=o.start,s=o.startPos,f=o.easing,l=a.duration,p={top:"y",left:"x"},h=t-u,d=Math.min(1,Math.max(h/l,0));Object.keys(c).forEach((function(t){var e=c[t],r=s[t],o=e-r;if(0!==o){var i=f(d,l*d,0,1,l);I(n,Math.round(r+o*i),p[t])}})),h<=l?(i.hook(a,"step",d),o.id=r.raf(i.loop)):i.stop(!0)}else i.stop()},this.handleClick=function(e){for(var n=i.opts,r=e.target;r&&r!==document;r=r.parentNode)if(w(r,n.trigger)){var o=JSON.parse(r.getAttribute("data-scroll-options")||"{}"),a=r.getAttribute("data-scroll")||r.getAttribute("href"),c=t({},n,o),u=c.preventDefault,s=c.stopPropagation,f=c.vertical,l=c.horizontal;u&&e.preventDefault(),s&&e.stopPropagation(),i.ctx.$trigger=r,l&&f?i.to(a,c):f?i.toTop(a,c):l&&i.toLeft(a,c);break}},this.handleStop=function(t){var e=i.ctx,n=e.opts;n&&n.cancellable?(e.cancel=!0,i.stop()):t.preventDefault()},this.opts=t({},L,n||{});var a=null;e&&(a="string"==typeof o?y(o):null!=o?o:window),this.$el=a,a&&this.bind(!0,!1)}return r.create=function(t,e){return new r(t,e)},r.prototype.to=function(n,r){if(e){var i=this.$el,a=this.ctx,c=this.opts,u=a.$trigger,s=t({},c,r||{}),f=s.offset,l=s.vertical,p=s.horizontal,h=m(s.header)?s.header:y(s.header),d=o(n)&&/^#/.test(n)?n:null;if(a.opts=s,a.cancel=!1,a.hash=d,this.stop(),i){var v=M(f,l),g=M(n,l),w={top:0,left:0};if(g)if(g.relative){var _=j(i,l?"y":"x");w.top=l?_+g.top:g.top,w.left=l?g.left:_+g.left}else w=g;else if(o(n)&&"#"!==n){var C=y(n);if(!C)return;w=P(C,i)}v&&(w.top+=v.top,w.left+=v.left),h&&(w.top=Math.max(0,w.top-E(h).height));var I=function(t){var e=b(t)||x(t);return{viewport:{width:e?Math.min(window.innerWidth,document.documentElement.clientWidth):t.clientWidth,height:e?window.innerHeight:t.clientHeight},size:e?{width:Math.max(O(document.body),O(document.documentElement)),height:Math.max(S(document.body),S(document.documentElement))}:E(t)}}(i),T=I.viewport,A=I.size;w.top=l?Math.max(0,Math.min(A.height-T.height,w.top)):j(i,"y"),w.left=p?Math.max(0,Math.min(A.width-T.width,w.left)):j(i,"x"),!1!==this.hook(s,"before",w,u)?(a.pos=w,this.start(s),this.bind(!1,!0)):a.opts=null}}},r.prototype.toTop=function(e,n){this.to(e,t({},n||{},{vertical:!0,horizontal:!1}))},r.prototype.toLeft=function(e,n){this.to(e,t({},n||{},{vertical:!1,horizontal:!0}))},r.prototype.toElement=function(t,n){var r=this.$el;e&&r&&this.to(P(t,r),n||{})},r.prototype.stop=function(t){void 0===t&&(t=!1);var e=this.$el,n=this.ctx,o=n.pos;e&&n.progress&&(r.caf(n.id),n.progress=!1,n.start=0,n.id=0,t&&o&&(I(e,o.left,"x"),I(e,o.top,"y")),this.complete())},r.prototype.update=function(e){if(this.$el){var n=t({},this.opts,e);this.stop(),this.unbind(!0,!0),this.opts=n,this.bind(!0,!1)}},r.prototype.destroy=function(){this.$el&&(this.stop(),this.unbind(!0,!0),this.$el=null)},r.prototype.onBefore=function(t,e){return!0},r.prototype.onStep=function(t){},r.prototype.onAfter=function(t,e){},r.prototype.onCancel=function(){},r.prototype.onComplete=function(t){},r.prototype.start=function(t){var e=this.ctx;e.opts=t,e.progress=!0,e.easing=i(t.easing)?t.easing:v[t.easing];var n=this.$el,o={top:j(n,"y"),left:j(n,"x")};e.startPos=o,e.id=r.raf(this.loop)},r.prototype.complete=function(){var t=this.$el,r=this.ctx,o=r.hash,i=r.cancel,a=r.opts,c=r.pos,u=r.$trigger;if(t&&a){if(null!=o&&o!==window.location.hash){var s=a.updateURL;e&&n&&!1!==s&&window.history["replace"===s?"replaceState":"pushState"](null,"",o)}this.unbind(!1,!0),r.opts=null,r.$trigger=null,i?this.hook(a,"cancel"):this.hook(a,"after",c,u),this.hook(a,"complete",i)}},r.prototype.hook=function(t,e){for(var n,r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];var a,c,u=t[e];return i(u)&&(a=u.apply(this,r.concat([this]))),c=(n=this)["on"+(e[0].toUpperCase()+e.slice(1))].apply(n,r),void 0!==a?a:c},r.prototype.bind=function(t,e){var n=this.$el,r=this.ctx.opts;n&&(t&&R(n,"click",this.handleClick,!1),e&&R(n,"wheel touchstart touchmove",this.handleStop,!r||r.cancellable))},r.prototype.unbind=function(t,e){var n=this.$el,r=this.ctx.opts;n&&(t&&k(n,"click",this.handleClick,!1),e&&k(n,"wheel touchstart touchmove",this.handleStop,!r||r.cancellable))},r.raf=u,r.caf=s,r}()}()},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"install",(function(){return o}));var r=n(34);function o(t){o.installed||(o.installed=!0,t.component("go-top",r.a))}var i={install:o},a=null;"undefined"!=typeof window?a=window.Vue:void 0!==t&&(a=t.Vue),a&&a.use(i),e.default=r.a}.call(this,n(35))},function(t,e,n){"use strict";var r=n(5),o=n(1),i=n(19),a=n(43),c=n(3),u=n(29),s=n(49),f=n(0),l=n(2),p=n(30),h=n(4),d=n(7),v=n(14),g=n(8),y=n(13),m=n(15),b=n(50),x=n(31),w=n(20),S=n(68),O=n(47),E=n(11),_=n(6),C=n(36),j=n(9),I=n(17),P=n(26),T=n(25),A=n(18),R=n(27),k=n(10),N=n(51),M=n(69),L=n(70),$=n(42),z=n(32).forEach,D=T("hidden"),F=k("toPrimitive"),U=$.set,G=$.getterFor("Symbol"),B=Object.prototype,V=o.Symbol,W=i("JSON","stringify"),H=E.f,Q=_.f,Y=S.f,X=C.f,q=P("symbols"),J=P("op-symbols"),K=P("string-to-symbol-registry"),Z=P("symbol-to-string-registry"),tt=P("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&f((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(B,e);r&&delete B[e],Q(t,e,n),r&&t!==B&&Q(B,e,r)}:Q,ot=function(t,e){var n=q[t]=b(V.prototype);return U(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},at=function(t,e,n){t===B&&at(J,e,n),d(t);var r=y(e,!0);return d(n),l(q,r)?(n.enumerable?(l(t,D)&&t[D][r]&&(t[D][r]=!1),n=b(n,{enumerable:m(0,!1)})):(l(t,D)||Q(t,D,m(1,{})),t[D][r]=!0),rt(t,r,n)):Q(t,r,n)},ct=function(t,e){d(t);var n=g(e),r=x(n).concat(lt(n));return z(r,(function(e){c&&!ut.call(n,e)||at(t,e,n[e])})),t},ut=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===B&&l(q,e)&&!l(J,e))&&(!(n||!l(this,e)||!l(q,e)||l(this,D)&&this[D][e])||n)},st=function(t,e){var n=g(t),r=y(e,!0);if(n!==B||!l(q,r)||l(J,r)){var o=H(n,r);return!o||!l(q,r)||l(n,D)&&n[D][r]||(o.enumerable=!0),o}},ft=function(t){var e=Y(g(t)),n=[];return z(e,(function(t){l(q,t)||l(A,t)||n.push(t)})),n},lt=function(t){var e=t===B,n=Y(e?J:g(t)),r=[];return z(n,(function(t){!l(q,t)||e&&!l(B,t)||r.push(q[t])})),r};(u||(I((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===B&&n.call(J,t),l(this,D)&&l(this[D],e)&&(this[D][e]=!1),rt(this,e,m(1,t))};return c&&nt&&rt(B,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return G(this).tag})),I(V,"withoutSetter",(function(t){return ot(R(t),t)})),C.f=ut,_.f=at,E.f=st,w.f=S.f=ft,O.f=lt,N.f=function(t){return ot(k(t),t)},c&&(Q(V.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),a||I(B,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:V}),z(x(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(K,e))return K[e];var n=V(e);return K[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),W)&&r({target:"JSON",stat:!0,forced:!u||f((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(h(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,W.apply(null,o)}});V.prototype[F]||j(V.prototype,F,V.prototype.valueOf),L(V,"Symbol"),A[D]=!0},function(t,e,n){var r=n(1),o=n(40),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(2),o=n(44),i=n(11),a=n(6);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},function(t,e,n){var r=n(8),o=n(21),i=n(65),a=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(22),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(3),o=n(6),i=n(7),a=n(31);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,u=0;c>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(19);t.exports=r("document","documentElement")},function(t,e,n){var r=n(8),o=n(20).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(45),o=n(2),i=n(51),a=n(6).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(6).f,o=n(2),i=n(10)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(72);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(5),o=n(0),i=n(30),a=n(4),c=n(14),u=n(21),s=n(53),f=n(52),l=n(54),p=n(10),h=n(55),d=p("isConcatSpreadable"),v=h>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),y=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!v||!g},{concat:function(t){var e,n,r,o,i,a=c(this),l=f(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],y(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(19);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(5),o=n(32).filter,i=n(54),a=n(56),c=i("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(5),o=n(57);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(3),o=n(1),i=n(48),a=n(17),c=n(2),u=n(16),s=n(79),f=n(13),l=n(0),p=n(50),h=n(20).f,d=n(11).f,v=n(6).f,g=n(82).trim,y=o.Number,m=y.prototype,b="Number"==u(p(m)),x=function(t){var e,n,r,o,i,a,c,u,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=g(s)).charCodeAt(0))||45===e){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>o)return NaN;return parseInt(i,r)}return+s};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(b?l((function(){m.valueOf.call(n)})):"Number"!=u(n))?s(new y(x(e)),n,S):x(e)},O=r?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)c(y,w=O[E])&&!c(S,w)&&v(S,w,d(y,w));S.prototype=m,m.constructor=S,a(o,"Number",S)}},function(t,e,n){var r=n(4),o=n(80);t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},function(t,e,n){var r=n(7),o=n(81);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(12),o="["+n(83)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(5),o=n(0),i=n(8),a=n(11).f,c=n(3),u=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},function(t,e,n){var r=n(5),o=n(3),i=n(44),a=n(8),c=n(11),u=n(53);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=a(t),o=c.f,s=i(r),f={},l=0;s.length>l;)void 0!==(n=o(r,e=s[l++]))&&u(f,e,n);return f}})},function(t,e,n){var r=n(5),o=n(14),i=n(31);r({target:"Object",stat:!0,forced:n(0)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(0);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(90),o=n(7),i=n(14),a=n(21),c=n(22),u=n(12),s=n(91),f=n(93),l=Math.max,p=Math.min,h=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!g&&y||"string"==typeof r&&-1===r.indexOf(m)){var i=n(e,t,this,r);if(i.done)return i.value}var u=o(t),h=String(this),d="function"==typeof r;d||(r=String(r));var v=u.global;if(v){var x=u.unicode;u.lastIndex=0}for(var w=[];;){var S=f(u,h);if(null===S)break;if(w.push(S),!v)break;""===String(S[0])&&(u.lastIndex=s(h,a(u.lastIndex),x))}for(var O,E="",_=0,C=0;C<w.length;C++){S=w[C];for(var j=String(S[0]),I=l(p(c(S.index),h.length),0),P=[],T=1;T<S.length;T++)P.push(void 0===(O=S[T])?O:String(O));var A=S.groups;if(d){var R=[j].concat(P,I,h);void 0!==A&&R.push(A);var k=String(r.apply(void 0,R))}else k=b(j,h,I,P,A,r);I>=_&&(E+=h.slice(_,I)+k,_=I+j.length)}return E+h.slice(_)}];function b(t,n,r,o,a,c){var u=r+t.length,s=o.length,f=v;return void 0!==a&&(a=i(a),f=d),e.call(c,f,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var l=h(f/10);return 0===l?e:l<=s?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):e}c=o[f-1]}return void 0===c?"":c}))}}))},function(t,e,n){"use strict";n(58);var r=n(17),o=n(0),i=n(10),a=n(33),c=n(9),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),h=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var d=i(t),v=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!g||"replace"===t&&(!s||!f||p)||"split"===t&&!h){var y=/./[d],m=n(d,""[t],(function(t,e,n,r,o){return e.exec===a?v&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],x=m[1];r(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}l&&c(RegExp.prototype[d],"sham",!0)}},function(t,e,n){"use strict";var r=n(92).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(22),o=n(12),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(16),o=n(33);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(1),o=n(95),i=n(57),a=n(9);for(var c in o){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(23);n.n(r).a},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=n[u]||0,f="".concat(u," ").concat(s);n[u]=s+1;var l=c(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:f,updater:g(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,v=0;function g(t,e){var n,r,o;if(e.singleton){var i=v++;n=d||(d=s(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(t,e),s=0;s<n.length;s++){var f=c(n[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(t,e,n){(e=n(99)(!1)).push([t.i,".vue-go-top[data-v-0c20a6ee]{overflow:hidden;position:fixed;cursor:pointer;background-repeat:no-repeat;background-position:50% 50%;background-size:70% auto;white-space:nowrap;text-indent:100%}.vue-go-top__content[data-v-0c20a6ee]{position:relative;left:0;top:0;width:100%;height:100%}.vue-go-top__ripple[data-v-0c20a6ee]{position:absolute;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);opacity:0;pointer-events:none}.vue-go-top__ripple[is-active][data-v-0c20a6ee]{-webkit-animation:vue-go-top-ripple-animation-data-v-0c20a6ee .75s ease-out;animation:vue-go-top-ripple-animation-data-v-0c20a6ee .75s ease-out}.vue-go-top__icon[data-v-0c20a6ee]{position:absolute;top:0;left:0;width:100%;height:100%}.vue-go-top__image[data-v-0c20a6ee]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.vue-go-top-enter-active[data-v-0c20a6ee],.vue-go-top-leave-active[data-v-0c20a6ee]{-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s}.vue-go-top-enter[data-v-0c20a6ee],.vue-go-top-leave-to[data-v-0c20a6ee]{opacity:0;-webkit-transform:translateY(50px);transform:translateY(50px)}@-webkit-keyframes vue-go-top-ripple-animation-data-v-0c20a6ee{from{opacity:1}to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes vue-go-top-ripple-animation-data-v-0c20a6ee{from{opacity:1}to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}}])}));
//# sourceMappingURL=vue-go-top.umd.js.map

/***/ }),

/***/ "4b0e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4dfc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4e4b":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("8122");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("d010");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("e974");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("6b7c");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("f3ad");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("417f");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("14e9");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("4010");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("0e15");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("4897");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("d397");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("12f2");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("2a5e");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "el-select-dropdown__item",
      class: {
        selected: _vm.itemSelected,
        "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
        hover: _vm.hover
      },
      on: {
        mouseenter: _vm.hoverItem,
        click: function($event) {
          $event.stopPropagation()
          return _vm.selectOptionClick($event)
        }
      }
    },
    [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'ElOption',

  componentName: 'ElOption',

  inject: ['select'],

  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },


  computed: {
    isObject: function isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    currentLabel: function currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },
    currentValue: function currentValue() {
      return this.value || this.label || '';
    },
    itemSelected: function itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached: function limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel: function currentLabel() {
      if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
    },
    value: function value(val, oldVal) {
      var _select = this.select,
          remote = _select.remote,
          valueKey = _select.valueKey;

      if (!this.created && !remote) {
        if (valueKey && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : _typeof(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        this.dispatch('ElSelect', 'setSelected');
      }
    }
  },

  methods: {
    isEqual: function isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        var valueKey = this.select.valueKey;
        return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
      }
    },
    contains: function contains() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var target = arguments[1];

      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        var valueKey = this.select.valueKey;
        return arr && arr.some(function (item) {
          return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
        });
      }
    },
    handleGroupDisabled: function handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem: function hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick: function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
      }
    },
    queryChange: function queryChange(query) {
      this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created: function created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on('queryChange', this.queryChange);
    this.$on('handleGroupDisabled', this.handleGroupDisabled);
  },
  beforeDestroy: function beforeDestroy() {
    var _select2 = this.select,
        selected = _select2.selected,
        multiple = _select2.multiple;

    var selectedOptions = multiple ? selected : [selected];
    var index = this.select.cachedOptions.indexOf(this);
    var selectedIndex = selectedOptions.indexOf(this);

    // if option is not selected, remove it from cache
    if (index > -1 && selectedIndex < 0) {
      this.select.cachedOptions.splice(index, 1);
    }
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
});
// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/select/src/option.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_optionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/select/src/option.vue"
/* harmony default export */ var src_option = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("8bbc");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.handleClose,
          expression: "handleClose"
        }
      ],
      staticClass: "el-select",
      class: [_vm.selectSize ? "el-select--" + _vm.selectSize : ""],
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.toggleMenu($event)
        }
      }
    },
    [
      _vm.multiple
        ? _c(
            "div",
            {
              ref: "tags",
              staticClass: "el-select__tags",
              style: { "max-width": _vm.inputWidth - 32 + "px", width: "100%" }
            },
            [
              _vm.collapseTags && _vm.selected.length
                ? _c(
                    "span",
                    [
                      _c(
                        "el-tag",
                        {
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: _vm.selected[0].hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              _vm.deleteTag($event, _vm.selected[0])
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(_vm.selected[0].currentLabel))
                          ])
                        ]
                      ),
                      _vm.selected.length > 1
                        ? _c(
                            "el-tag",
                            {
                              attrs: {
                                closable: false,
                                size: _vm.collapseTagSize,
                                type: "info",
                                "disable-transitions": ""
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "el-select__tags-text" },
                                [_vm._v("+ " + _vm._s(_vm.selected.length - 1))]
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.collapseTags
                ? _c(
                    "transition-group",
                    { on: { "after-leave": _vm.resetInputHeight } },
                    _vm._l(_vm.selected, function(item) {
                      return _c(
                        "el-tag",
                        {
                          key: _vm.getValueKey(item),
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: item.hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              _vm.deleteTag($event, item)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(item.currentLabel))
                          ])
                        ]
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm.filterable
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.query,
                        expression: "query"
                      }
                    ],
                    ref: "input",
                    staticClass: "el-select__input",
                    class: [_vm.selectSize ? "is-" + _vm.selectSize : ""],
                    style: {
                      "flex-grow": "1",
                      width: _vm.inputLength / (_vm.inputWidth - 32) + "%",
                      "max-width": _vm.inputWidth - 42 + "px"
                    },
                    attrs: {
                      type: "text",
                      disabled: _vm.selectDisabled,
                      autocomplete: _vm.autoComplete || _vm.autocomplete
                    },
                    domProps: { value: _vm.query },
                    on: {
                      focus: _vm.handleFocus,
                      blur: function($event) {
                        _vm.softFocus = false
                      },
                      keyup: _vm.managePlaceholder,
                      keydown: [
                        _vm.resetInputState,
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          _vm.navigateOptions("next")
                        },
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          _vm.navigateOptions("prev")
                        },
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.selectOption($event)
                        },
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "esc", 27, $event.key, [
                              "Esc",
                              "Escape"
                            ])
                          ) {
                            return null
                          }
                          $event.stopPropagation()
                          $event.preventDefault()
                          _vm.visible = false
                        },
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "delete",
                              [8, 46],
                              $event.key,
                              ["Backspace", "Delete", "Del"]
                            )
                          ) {
                            return null
                          }
                          return _vm.deletePrevTag($event)
                        },
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                          ) {
                            return null
                          }
                          _vm.visible = false
                        }
                      ],
                      compositionstart: _vm.handleComposition,
                      compositionupdate: _vm.handleComposition,
                      compositionend: _vm.handleComposition,
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.query = $event.target.value
                        },
                        _vm.debouncedQueryChange
                      ]
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _c(
        "el-input",
        {
          ref: "reference",
          class: { "is-focus": _vm.visible },
          attrs: {
            type: "text",
            placeholder: _vm.currentPlaceholder,
            name: _vm.name,
            id: _vm.id,
            autocomplete: _vm.autoComplete || _vm.autocomplete,
            size: _vm.selectSize,
            disabled: _vm.selectDisabled,
            readonly: _vm.readonly,
            "validate-event": false,
            tabindex: _vm.multiple && _vm.filterable ? "-1" : null
          },
          on: { focus: _vm.handleFocus, blur: _vm.handleBlur },
          nativeOn: {
            keyup: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            keydown: [
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                _vm.navigateOptions("next")
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                _vm.navigateOptions("prev")
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.selectOption($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                _vm.visible = false
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                ) {
                  return null
                }
                _vm.visible = false
              }
            ],
            paste: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            mouseenter: function($event) {
              _vm.inputHovering = true
            },
            mouseleave: function($event) {
              _vm.inputHovering = false
            }
          },
          model: {
            value: _vm.selectedLabel,
            callback: function($$v) {
              _vm.selectedLabel = $$v
            },
            expression: "selectedLabel"
          }
        },
        [
          _vm.$slots.prefix
            ? _c("template", { slot: "prefix" }, [_vm._t("prefix")], 2)
            : _vm._e(),
          _c("template", { slot: "suffix" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showClose,
                  expression: "!showClose"
                }
              ],
              class: [
                "el-select__caret",
                "el-input__icon",
                "el-icon-" + _vm.iconClass
              ]
            }),
            _vm.showClose
              ? _c("i", {
                  staticClass:
                    "el-select__caret el-input__icon el-icon-circle-close",
                  on: { click: _vm.handleClearClick }
                })
              : _vm._e()
          ])
        ],
        2
      ),
      _c(
        "transition",
        {
          attrs: { name: "el-zoom-in-top" },
          on: {
            "before-enter": _vm.handleMenuEnter,
            "after-leave": _vm.doDestroy
          }
        },
        [
          _c(
            "el-select-menu",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible && _vm.emptyText !== false,
                  expression: "visible && emptyText !== false"
                }
              ],
              ref: "popper",
              attrs: { "append-to-body": _vm.popperAppendToBody }
            },
            [
              _c(
                "el-scrollbar",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.options.length > 0 && !_vm.loading,
                      expression: "options.length > 0 && !loading"
                    }
                  ],
                  ref: "scrollbar",
                  class: {
                    "is-empty":
                      !_vm.allowCreate &&
                      _vm.query &&
                      _vm.filteredOptionsCount === 0
                  },
                  attrs: {
                    tag: "ul",
                    "wrap-class": "el-select-dropdown__wrap",
                    "view-class": "el-select-dropdown__list"
                  }
                },
                [
                  _vm.showNewOption
                    ? _c("el-option", {
                        attrs: { value: _vm.query, created: "" }
                      })
                    : _vm._e(),
                  _vm._t("default")
                ],
                2
              ),
              _vm.emptyText &&
              (!_vm.allowCreate ||
                _vm.loading ||
                (_vm.allowCreate && _vm.options.length === 0))
                ? [
                    _vm.$slots.empty
                      ? _vm._t("empty")
                      : _c("p", { staticClass: "el-select-dropdown__empty" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.emptyText) +
                              "\n        "
                          )
                        ])
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/focus"
var focus_ = __webpack_require__(22);
var focus_default = /*#__PURE__*/__webpack_require__.n(focus_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(10);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&
var select_dropdownvue_type_template_id_06828748_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-select-dropdown el-popper",
      class: [{ "is-multiple": _vm.$parent.multiple }, _vm.popperClass],
      style: { minWidth: _vm.minWidth }
    },
    [_vm._t("default")],
    2
  )
}
var select_dropdownvue_type_template_id_06828748_staticRenderFns = []
select_dropdownvue_type_template_id_06828748_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&

// EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(5);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var select_dropdownvue_type_script_lang_js_ = ({
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  mixins: [vue_popper_default.a],

  props: {
    placement: {
      default: 'bottom-start'
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      minWidth: ''
    };
  },


  computed: {
    popperClass: function popperClass() {
      return this.$parent.popperClass;
    }
  },

  watch: {
    '$parent.inputWidth': function $parentInputWidth() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on('updatePopper', function () {
      if (_this.$parent.visible) _this.updatePopper();
    });
    this.$on('destroyPopper', this.destroyPopper);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_select_dropdownvue_type_script_lang_js_ = (select_dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_select_dropdownvue_type_script_lang_js_,
  select_dropdownvue_type_template_id_06828748_render,
  select_dropdownvue_type_template_id_06828748_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/select/src/select-dropdown.vue"
/* harmony default export */ var select_dropdown = (component.exports);
// EXTERNAL MODULE: ./packages/select/src/option.vue + 4 modules
var src_option = __webpack_require__(34);

// EXTERNAL MODULE: external "element-ui/lib/tag"
var tag_ = __webpack_require__(38);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "element-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(14);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(17);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(12);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(16);

// EXTERNAL MODULE: external "element-ui/lib/locale"
var lib_locale_ = __webpack_require__(19);

// EXTERNAL MODULE: external "element-ui/lib/utils/scroll-into-view"
var scroll_into_view_ = __webpack_require__(31);
var scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(scroll_into_view_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/select/src/navigation-mixin.js
/* harmony default export */ var navigation_mixin = ({
  data: function data() {
    return {
      hoverOption: -1
    };
  },


  computed: {
    optionsAllDisabled: function optionsAllDisabled() {
      return this.options.filter(function (option) {
        return option.visible;
      }).every(function (option) {
        return option.disabled;
      });
    }
  },

  watch: {
    hoverIndex: function hoverIndex(val) {
      var _this = this;

      if (typeof val === 'number' && val > -1) {
        this.hoverOption = this.options[val] || {};
      }
      this.options.forEach(function (option) {
        option.hover = _this.hoverOption === option;
      });
    }
  },

  methods: {
    navigateOptions: function navigateOptions(direction) {
      var _this2 = this;

      if (!this.visible) {
        this.visible = true;
        return;
      }
      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
      if (!this.optionsAllDisabled) {
        if (direction === 'next') {
          this.hoverIndex++;
          if (this.hoverIndex === this.options.length) {
            this.hoverIndex = 0;
          }
        } else if (direction === 'prev') {
          this.hoverIndex--;
          if (this.hoverIndex < 0) {
            this.hoverIndex = this.options.length - 1;
          }
        }
        var option = this.options[this.hoverIndex];
        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          this.navigateOptions(direction);
        }
        this.$nextTick(function () {
          return _this2.scrollToOption(_this2.hoverOption);
        });
      }
    }
  }
});
// EXTERNAL MODULE: external "element-ui/lib/utils/shared"
var shared_ = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a, locale_default.a, focus_default()('reference'), navigation_mixin],

  name: 'ElSelect',

  componentName: 'ElSelect',

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  provide: function provide() {
    return {
      'select': this
    };
  },


  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    readonly: function readonly() {
      return !this.filterable || this.multiple || !Object(util_["isIE"])() && !Object(util_["isEdge"])() && !this.visible;
    },
    showClose: function showClose() {
      var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
      var criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue;
      return criteria;
    },
    iconClass: function iconClass() {
      return this.remote && this.filterable ? '' : this.visible ? 'arrow-up is-reverse' : 'arrow-up';
    },
    debounce: function debounce() {
      return this.remote ? 300 : 0;
    },
    emptyText: function emptyText() {
      if (this.loading) {
        return this.loadingText || this.t('el.select.loading');
      } else {
        if (this.remote && this.query === '' && this.options.length === 0) return false;
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || this.t('el.select.noMatch');
        }
        if (this.options.length === 0) {
          return this.noDataText || this.t('el.select.noData');
        }
      }
      return null;
    },
    showNewOption: function showNewOption() {
      var _this = this;

      var hasExistingOption = this.options.filter(function (option) {
        return !option.created;
      }).some(function (option) {
        return option.currentLabel === _this.query;
      });
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
    },
    selectSize: function selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    selectDisabled: function selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    collapseTagSize: function collapseTagSize() {
      return ['small', 'mini'].indexOf(this.selectSize) > -1 ? 'mini' : 'small';
    }
  },

  components: {
    ElInput: input_default.a,
    ElSelectMenu: select_dropdown,
    ElOption: src_option["a" /* default */],
    ElTag: tag_default.a,
    ElScrollbar: scrollbar_default.a
  },

  directives: { Clickoutside: clickoutside_default.a },

  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
          false && false;
        return true;
      }
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: function _default() {
        return Object(lib_locale_["t"])('el.select.placeholder');
      }
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      softFocus: false,
      selectedLabel: '',
      hoverIndex: -1,
      query: '',
      previousQuery: null,
      inputHovering: false,
      currentPlaceholder: '',
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false
    };
  },


  watch: {
    selectDisabled: function selectDisabled() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.resetInputHeight();
      });
    },
    placeholder: function placeholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },
    value: function value(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
        if (val && val.length > 0 || this.$refs.input && this.query !== '') {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = '';
          this.handleQueryChange(this.query);
        }
      }
      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
      if (!Object(util_["valueEquals"])(val, oldVal)) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },
    visible: function visible(val) {
      var _this3 = this;

      if (!val) {
        this.broadcast('ElSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = '';
        this.previousQuery = null;
        this.selectedLabel = '';
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
        this.$nextTick(function () {
          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
          }
        });
        if (!this.multiple) {
          if (this.selected) {
            if (this.filterable && this.allowCreate && this.createdSelected && this.createdLabel) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable) this.query = this.selectedLabel;
          }

          if (this.filterable) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        }
      } else {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        if (this.filterable) {
          this.query = this.remote ? '' : this.selectedLabel;
          this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              this.broadcast('ElOption', 'queryChange', '');
              this.broadcast('ElOptionGroup', 'queryChange');
            }

            if (this.selectedLabel) {
              this.currentPlaceholder = this.selectedLabel;
              this.selectedLabel = '';
            }
          }
        }
      }
      this.$emit('visible-change', val);
    },
    options: function options() {
      var _this4 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this4.broadcast('ElSelectDropdown', 'updatePopper');
      });
      if (this.multiple) {
        this.resetInputHeight();
      }
      var inputs = this.$el.querySelectorAll('input');
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected();
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    }
  },

  methods: {
    handleComposition: function handleComposition(event) {
      var _this5 = this;

      var text = event.target.value;
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.$nextTick(function (_) {
          return _this5.handleQueryChange(text);
        });
      } else {
        var lastCharacter = text[text.length - 1] || '';
        this.isOnComposition = !Object(shared_["isKorean"])(lastCharacter);
      }
    },
    handleQueryChange: function handleQueryChange(val) {
      var _this6 = this;

      if (this.previousQuery === val || this.isOnComposition) return;
      if (this.previousQuery === null && (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')) {
        this.previousQuery = val;
        return;
      }
      this.previousQuery = val;
      this.$nextTick(function () {
        if (_this6.visible) _this6.broadcast('ElSelectDropdown', 'updatePopper');
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        this.$nextTick(function () {
          var length = _this6.$refs.input.value.length * 15 + 20;
          _this6.inputLength = _this6.collapseTags ? Math.min(50, length) : length;
          _this6.managePlaceholder();
          _this6.resetInputHeight();
        });
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val);
        this.broadcast('ElOptionGroup', 'queryChange');
      } else {
        this.filteredOptionsCount = this.optionsCount;
        this.broadcast('ElOption', 'queryChange', val);
        this.broadcast('ElOptionGroup', 'queryChange');
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    },
    scrollToOption: function scrollToOption(option) {
      var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        var menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
        scroll_into_view_default()(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this7 = this;

      this.$nextTick(function () {
        return _this7.scrollToOption(_this7.selected);
      });
    },
    emitChange: function emitChange(val) {
      if (!Object(util_["valueEquals"])(this.value, val)) {
        this.$emit('change', val);
      }
    },
    getOption: function getOption(value) {
      var option = void 0;
      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      var isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
      var isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';

      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
        var cachedOption = this.cachedOptions[i];
        var isEqual = isObject ? Object(util_["getValueByPath"])(cachedOption.value, this.valueKey) === Object(util_["getValueByPath"])(value, this.valueKey) : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) return option;
      var label = !isObject && !isNull && !isUndefined ? value : '';
      var newOption = {
        value: value,
        currentLabel: label
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    setSelected: function setSelected() {
      var _this8 = this;

      if (!this.multiple) {
        var option = this.getOption(this.value);
        if (option.created) {
          this.createdLabel = option.currentLabel;
          this.createdSelected = true;
        } else {
          this.createdSelected = false;
        }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        if (this.filterable) this.query = this.selectedLabel;
        return;
      }
      var result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(function (value) {
          result.push(_this8.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(function () {
        _this8.resetInputHeight();
      });
    },
    handleFocus: function handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true;
          if (this.filterable) {
            this.menuVisibleOnFocus = true;
          }
        }
        this.$emit('focus', event);
      } else {
        this.softFocus = false;
      }
    },
    blur: function blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },
    handleBlur: function handleBlur(event) {
      var _this9 = this;

      setTimeout(function () {
        if (_this9.isSilentBlur) {
          _this9.isSilentBlur = false;
        } else {
          _this9.$emit('blur', event);
        }
      }, 50);
      this.softFocus = false;
    },
    handleClearClick: function handleClearClick(event) {
      this.deleteSelected(event);
    },
    doDestroy: function doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
    handleClose: function handleClose() {
      this.visible = false;
    },
    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      var option = this.selected[this.selected.length - 1];
      if (!option) return;

      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }

      option.hitState = !option.hitState;
      return option.hitState;
    },
    deletePrevTag: function deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        var value = this.value.slice();
        value.pop();
        this.$emit('input', value);
        this.emitChange(value);
      }
    },
    managePlaceholder: function managePlaceholder() {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
      }
    },
    resetInputState: function resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },
    resetInputHeight: function resetInputHeight() {
      var _this10 = this;

      if (this.collapseTags && !this.filterable) return;
      this.$nextTick(function () {
        if (!_this10.$refs.reference) return;
        var inputChildNodes = _this10.$refs.reference.$el.childNodes;
        var input = [].filter.call(inputChildNodes, function (item) {
          return item.tagName === 'INPUT';
        })[0];
        var tags = _this10.$refs.tags;
        var sizeInMap = _this10.initialInputHeight || 40;
        input.style.height = _this10.selected.length === 0 ? sizeInMap + 'px' : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px';
        if (_this10.visible && _this10.emptyText !== false) {
          _this10.broadcast('ElSelectDropdown', 'updatePopper');
        }
      });
    },
    resetHoverIndex: function resetHoverIndex() {
      var _this11 = this;

      setTimeout(function () {
        if (!_this11.multiple) {
          _this11.hoverIndex = _this11.options.indexOf(_this11.selected);
        } else {
          if (_this11.selected.length > 0) {
            _this11.hoverIndex = Math.min.apply(null, _this11.selected.map(function (item) {
              return _this11.options.indexOf(item);
            }));
          } else {
            _this11.hoverIndex = -1;
          }
        }
      }, 300);
    },
    handleOptionSelect: function handleOptionSelect(option, byClick) {
      var _this12 = this;

      if (this.multiple) {
        var value = (this.value || []).slice();
        var optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
        if (option.created) {
          this.query = '';
          this.handleQueryChange('');
          this.inputLength = 20;
        }
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      this.setSoftFocus();
      if (this.visible) return;
      this.$nextTick(function () {
        _this12.scrollToOption(option);
      });
    },
    setSoftFocus: function setSoftFocus() {
      this.softFocus = true;
      var input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },
    getValueIndex: function getValueIndex() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments[1];

      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      if (!isObject) {
        return arr.indexOf(value);
      } else {
        var valueKey = this.valueKey;
        var index = -1;
        arr.some(function (item, i) {
          if (Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(value, valueKey)) {
            index = i;
            return true;
          }
          return false;
        });
        return index;
      }
    },
    toggleMenu: function toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },
    selectOption: function selectOption() {
      if (!this.visible) {
        this.toggleMenu();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex]);
        }
      }
    },
    deleteSelected: function deleteSelected(event) {
      event.stopPropagation();
      var value = this.multiple ? [] : '';
      this.$emit('input', value);
      this.emitChange(value);
      this.visible = false;
      this.$emit('clear');
    },
    deleteTag: function deleteTag(event, tag) {
      var index = this.selected.indexOf(tag);
      if (index > -1 && !this.selectDisabled) {
        var value = this.value.slice();
        value.splice(index, 1);
        this.$emit('input', value);
        this.emitChange(value);
        this.$emit('remove-tag', tag.value);
      }
      event.stopPropagation();
    },
    onInputChange: function onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    onOptionDestroy: function onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
    resetInputWidth: function resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },
    handleResize: function handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },
    checkDefaultFirstOption: function checkDefaultFirstOption() {
      this.hoverIndex = -1;
      // highlight the created option
      var hasCreated = false;
      for (var i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].created) {
          hasCreated = true;
          this.hoverIndex = i;
          break;
        }
      }
      if (hasCreated) return;
      for (var _i = 0; _i !== this.options.length; ++_i) {
        var option = this.options[_i];
        if (this.query) {
          // highlight first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = _i;
            break;
          }
        } else {
          // highlight currently selected option
          if (option.itemSelected) {
            this.hoverIndex = _i;
            break;
          }
        }
      }
    },
    getValueKey: function getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value;
      } else {
        return Object(util_["getValueByPath"])(item.value, this.valueKey);
      }
    }
  },

  created: function created() {
    var _this13 = this;

    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = debounce_default()(this.debounce, function () {
      _this13.onInputChange();
    });

    this.debouncedQueryChange = debounce_default()(this.debounce, function (e) {
      _this13.handleQueryChange(e.target.value);
    });

    this.$on('handleOptionClick', this.handleOptionSelect);
    this.$on('setSelected', this.setSelected);
  },
  mounted: function mounted() {
    var _this14 = this;

    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = '';
    }
    Object(resize_event_["addResizeListener"])(this.$el, this.handleResize);

    var reference = this.$refs.reference;
    if (reference && reference.$el) {
      var sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      };
      var input = reference.$el.querySelector('input');
      this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize];
    }
    if (this.remote && this.multiple) {
      this.resetInputHeight();
    }
    this.$nextTick(function () {
      if (reference && reference.$el) {
        _this14.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.handleResize) Object(resize_event_["removeResizeListener"])(this.$el, this.handleResize);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = Object(componentNormalizer["a" /* default */])(
  src_selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


/* istanbul ignore next */
src_select.install = function (Vue) {
  Vue.component(src_select.name, src_select);
};

/* harmony default export */ var packages_select = __webpack_exports__["default"] = (src_select);

/***/ })
/******/ ]);

/***/ }),

/***/ "5785":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Settings.vue?vue&type=template&id=03ba0347&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-100"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4"},[_c('card',[_c('div',{staticClass:"layer-content w-100"},[_c('table',{staticClass:"table table-settings w-100"},[_c('tbody',[_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-world"})]),_c('td',[_vm._v(_vm._s(_vm.$t('SET.LANG')))]),_c('td',{staticClass:"text-right"},[_c('base-dropdown',{attrs:{"menu-on-right":"","tag":"div","title-classes":"btn btn-link font-weight-normal"}},[_c('span',{staticClass:"text-danger font-weight-bolder",attrs:{"slot":"title"},slot:"title"},[_vm._v(" "+_vm._s(_vm.$t('SET.LANG_NAME'))+" "),_c('i',{staticClass:"tim-icons icon-minimal-down pb-1 pl-1"})]),_c('span',{staticClass:"dropdown-item",on:{"click":function($event){return _vm.setLocale('en')}}},[_vm._v(" English")]),_c('span',{staticClass:"dropdown-item",on:{"click":function($event){return _vm.setLocale('ru')}}},[_vm._v(" Russian")])])],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-coins"})]),_c('td',[_vm._v(_vm._s(_vm.$t('SET.CURRENCY')))]),_c('td',{staticClass:"text-right"},[_c('base-dropdown',{staticClass:"currency-balance",attrs:{"menu-on-right":"","tag":"div","title-classes":"btn btn-link font-weight-normal"}},[_c('span',{staticClass:"text-danger font-weight-bolder",attrs:{"slot":"title"},slot:"title"},[_vm._v(" ["+_vm._s(_vm.defaultCurrency.symbol)+"] "+_vm._s(_vm.defaultCurrency.ticker)+" "),_c('i',{staticClass:"tim-icons icon-minimal-down pb-1 pl-1"})]),_vm._l((_vm.currencies),function(item,idx){return _c('li',{key:idx},[_c('span',{staticClass:"nav-item dropdown-item",on:{"click":function($event){return _vm.setDefaultCurrency(item.ticker, item.symbol, item.precision)}}},[_vm._v(_vm._s(item.title)+" "+_vm._s(item.symbol))])])})],2)],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-bulb-63"})]),_c('td',[_vm._v(_vm._s(_vm.$t('SET.MODE')))]),_c('td',{staticClass:"text-right  pointer"},[_c('base-switch',{attrs:{"off-text":"OFF","on-text":"ON"},on:{"input":_vm.toggleMode},model:{value:(_vm.settingsData.darkMode),callback:function ($$v) {_vm.$set(_vm.settingsData, "darkMode", $$v)},expression:"settingsData.darkMode"}})],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-bell-55"})]),_c('td',[_vm._v(_vm._s(_vm.$t('SET.NOTIF')))]),_c('td',{staticClass:"text-right"},[_c('base-switch',{attrs:{"off-text":"OFF","on-text":"ON","type":"primary"},on:{"input":_vm.notifyOnOff},model:{value:(_vm.settings.notification),callback:function ($$v) {_vm.$set(_vm.settings, "notification", $$v)},expression:"settings.notification"}})],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-trophy"})]),_c('td',[_vm._v("Vote Listing Service")]),_c('td',{staticClass:"text-right"},[_c('base-switch',{attrs:{"off-text":"OFF","on-text":"ON","type":"primary"},on:{"input":_vm.listingOnOff},model:{value:(_vm.settings.listing),callback:function ($$v) {_vm.$set(_vm.settings, "listing", $$v)},expression:"settings.listing"}})],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-money-coins"})]),_c('td',[_vm._v("SmartHolder Service")]),_c('td',{staticClass:"text-right"},[_c('base-switch',{attrs:{"off-text":"OFF","on-text":"ON","type":"primary"},on:{"input":_vm.smartholderOnOff},model:{value:(_vm.settings.smartholder),callback:function ($$v) {_vm.$set(_vm.settings, "smartholder", $$v)},expression:"settings.smartholder"}})],1)]),_c('tr',[_c('td',[_c('i',{staticClass:"text-danger tim-icons tim-icons-lg icon-alert-circle-exc"})]),_c('td',[_vm._v(_vm._s(_vm.$t('SET.VER')))]),_c('td',{staticClass:"text-right"},[_vm._v(" "+_vm._s(_vm.packageJson.version)+" ")])])])])])])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dashboard/Settings.vue?vue&type=template&id=03ba0347&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/Wallet/ResetAll.vue + 4 modules
var ResetAll = __webpack_require__("d185");

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Settings.vue?vue&type=script&lang=js&





/* harmony default export */ var Settingsvue_type_script_lang_js_ = ({
  name: "Settings",
  components: {
    ResetAll: ResetAll["a" /* default */],
    BaseSwitch: components["d" /* BaseSwitch */]
  },
  data: function data() {
    return {
      settings: {
        darkMode: false,
        notification: false,
        listing: true,
        smartholder: true
      },
      showReset: false,
      packageJson: package_0,
      headColor: 'modal-white'
    };
  },
  computed: {
    settingsData: function settingsData() {
      return this.$store.getters['app/settings'];
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters['wallet/defaultCurrency'];
    },
    currencies: function currencies() {
      return this.$store.getters['wallet/currencies'];
    }
  },
  methods: {
    smartholderOnOff: function smartholderOnOff() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('app/setSettings', {
                  smartholder: _this.settings.smartholder
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    listingOnOff: function listingOnOff() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('app/setSettings', {
                  listing: _this2.settings.listing
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    notifyOnOff: function notifyOnOff() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('app/setSettings', {
                  notify: _this3.settings.notification
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    toggleMode: function toggleMode() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var docClasses;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.darkMode = !_this4.darkMode;
                _context4.next = 3;
                return _this4.$store.dispatch('app/setSettings', {
                  darkMode: _this4.darkMode
                });

              case 3:
                docClasses = document.body.classList;

                if (_this4.darkMode) {
                  docClasses.remove('white-content');
                  _this4.$root.modalColor = 'modal-dark';
                } else {
                  docClasses.add('white-content');
                  _this4.$root.modalColor = 'modal-white';
                }

                _this4.headColor = _this4.$root.modalColor;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setDefaultCurrency: function setDefaultCurrency(ticker, symbol, precision) {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.$store.dispatch('wallet/setDefaultCurrency', {
                  ticker: ticker,
                  symbol: symbol,
                  precision: precision
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setLocale: function setLocale(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch('app/setLanguage', locale);
    }
  },
  created: function created() {
    var _this6 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this6.headColor = _this6.$root.modalColor;
              _this6.settings.notification = _this6.settingsData.notify;
              _this6.settings.smartholder = _this6.settingsData.smartholder;
              _this6.settings.listing = _this6.settingsData.listing;

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Dashboard/Settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dashboard_Settingsvue_type_script_lang_js_ = (Settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Dashboard/Settings.vue?vue&type=style&index=0&id=03ba0347&scoped=true&lang=css&
var Settingsvue_type_style_index_0_id_03ba0347_scoped_true_lang_css_ = __webpack_require__("4225");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Dashboard/Settings.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Dashboard_Settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "03ba0347",
  null
  
)

/* harmony default export */ var Settings = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "57b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6611":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6b7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _locale = __webpack_require__("4897");

exports.default = {
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _locale.t.apply(this, args);
    }
  }
};

/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "75cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFront_vue_vue_type_style_index_0_id_0de88626_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b0e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFront_vue_vue_type_style_index_0_id_0de88626_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFront_vue_vue_type_style_index_0_id_0de88626_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterFront_vue_vue_type_style_index_0_id_0de88626_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8136":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/TimeLinePage.vue?vue&type=template&id=a5f0a63a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"card p-2"},[_c('h2',{staticClass:"card-title text-center color-gold"},[_vm._v("Technical Specifications")]),_c('div',{staticClass:"card-body"},[_c('p',[_vm._v("Global decentralized platform. Advanced Blockchain for scalability projects. SmartHoldem blockchain has innovative features in decentralized in-game networks, p2p networks, and new technologies in distributed systems. High-tech blockchain system. ")]),_c('p',[_vm._v("Platform provides reliability of the distributed database using the newest cyphering and data verification technologies. Simple integration of the SmartHoldem blockchain into new projects.")]),_c('ul',{staticClass:"text-decoration-none"},[_vm._m(0),_vm._m(1),_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Current Supply")]),_vm._v(" "+_vm._s(_vm.supply)+" STH")]),_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Total Transactions")]),_vm._v(" "+_vm._s(_vm.txCount))]),_vm._m(2),_vm._m(3),_vm._m(4),_c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Online")]),_vm._v(" "+_vm._s(_vm.daysOnline)+" days")]),_vm._m(5)])])])]),_vm._m(6),_c('div',{staticClass:"col-md-12"},[_c('hr',{staticClass:"bg-success"}),_vm._m(7),_c('time-line',[_c('time-line-item',{attrs:{"inverted":"","badge-type":"danger","badge-icon":"sth-icons icon-onion"}},[_c('span',{staticClass:"badge badge-pill badge-dark font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Onion Mirror")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":" http://sthcoinbqnetlagg.onion"}},[_c('i',{staticClass:"sth-icons icon-onion-round"}),_vm._v(" SmartHoldem UI Available in TOR Onion ")])]),_c('p',[_vm._v("url "),_c('strong',[_vm._v("sthcoinbqnetlagg.onion")])]),_c('p',{staticClass:"mt-2"},[_vm._v("use tor app "),_c('strong',[_vm._v("https://www.torproject.org/download/tor/")])]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 26.04.2020 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"sth-icons icon-antibounty"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("AntiBounty")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('router-link',{staticClass:"font-weight-bolder",attrs:{"to":"/antibounty"}},[_c('i',{staticClass:"sth-icons icon-antibounty"}),_vm._v(" AntiBounty SMM Service ")])],1),_c('p',{staticClass:"text-white"},[_vm._v("Antibounty is a powerful tool for earning cryptocurrency.")]),_c('p',{staticClass:"text-white"},[_vm._v("Antibounty is the only service in the world that provides you with activity from real crypto users with confirmation of orders & tasks on the blockchain!")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 15.04.2020 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-mobile"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Mobile Client")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/smartholdem/smartholdem-mobile"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" SmartHoldem Mobile Wallet ")])]),_c('a',{attrs:{"target":"_blank","href":"https://play.google.com/store/apps/details?id=io.smartholdem.client"}},[_c('img',{attrs:{"src":"https://user-images.githubusercontent.com/9394904/62034254-56551b00-b1f6-11e9-9e71-7d8e5c7564e3.png"}})]),_c('p',{staticClass:"mt-2"},[_vm._v("It is fully client side which means your seed and private keys are generated in your mobile device and transactions are signed locally. None of your wallet data is ever stored on any server in any format.")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 08.03.2020 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-mobile"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Online Client")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://smartholdem.io/#/wallet"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" SmartHoldem Wallet Online (PWA) ")])]),_c('p',{staticClass:"text-white"},[_vm._v("It is fully client side which means your seed and private keys are generated in your browser device and transactions are signed locally. None of your wallet data is ever stored on any server in any format.")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 28.02.2020 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-trash-simple"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Coin burning function available")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._v(" Address for burn STH coins "),_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://blockexplorer.smartholdem.io/#/wallets/STHsmartHoLdemBurnAddrHereXXXmUW7f"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" STHsmartHoLdemBurnAddrHereXXXmUW7f ")])]),_c('p',[_vm._v("When sending coins to this address, the coins will be burned"),_c('br'),_vm._v("block explorer displays the amount of coins burned")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 30.11.2019 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-link-72"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Poker Room beta")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('p',{staticClass:"text-white"},[_vm._v("Texas Hold`em poker room based on DPOS blockchain technology. Texas Hold`em is a guaranteed fair, transparent and qualitatively new format of Dex Poker-Room and related segments.")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 29.11.2019 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-tv-2"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Secured Paper Wallet APP")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/technologiespro/paper-wallet-generator/releasess"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" Source Code & Desktop Releases ")])]),_c('p',[_vm._v(" Supports 36+ different cryptocurrencies for generating addresses ")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 24.08.2019 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-link-72"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("DEX Games Portal")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://dexgames.net"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" View Game Portal")])]),_c('p',{staticClass:"text-white"},[_vm._v("All blockchain multiplayer games in one place")]),_c('a',{attrs:{"target":"_blank","href":"https://dexgames.net"}},[_c('img',{attrs:{"src":"https://dexgames.net/img/logo128.7d2ba190.png","width":"280px"}})]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 20.08.2019 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-controller"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Open Beta Heads or Tails Blockchain Game")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/SmartHoldemDAPPs/heads-tails/releases"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" Download Heads or Tails Game ")])]),_c('a',{attrs:{"target":"_blank","href":"https://play.google.com/store/apps/details?id=io.smartholdem.headstails"}},[_c('img',{attrs:{"src":"https://user-images.githubusercontent.com/9394904/62034254-56551b00-b1f6-11e9-9e71-7d8e5c7564e3.png"}})]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 17.08.2019 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-coins"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("SmartHolder")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h4',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://xbts.io/smart-holder"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" See More Info")])]),_c('p',{staticClass:"text-white"},[_vm._v("You can place your SmartHoldem coins (STH) and get profit from XBTS twice a month. The stake in the SmartHOLDER Staking Program will freeze and block your coins in the blockchain for the timer of 1-3-6-12 months. The longer duration of the stake provides for the higher pay-out rate. During the staking period you will automatically take part in the distribution of payments on the 1st and 15th day of each month.")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 10.01.2019 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-coins"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Rewarder")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h4',[_c('a',{staticClass:"font-weight-light",attrs:{"target":"_blank","href":"https://github.com/smartholdem/rewarder"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" Source Code Rewarder")])]),_c('p',{},[_vm._v("Automatic rewards for users who vote for delegates")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 12.12.2018 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-paper"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("XBTS Voting")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h4',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://vote.xbts.io/"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" WIN LISTING AT DEX EXCHANGE")])]),_c('p',{staticClass:"text-white"},[_vm._v("TOP 3 projects with 600 000 STH balances are determined as winners on the 1st day of each month 15:00:00 UTC. The minimum amount for a token to get into the winning top-3 is 600 000 STH.")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 15.11.2018 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"warning","badge-icon":"tim-icons icon-chart-bar-32"}},[_c('span',{staticClass:"badge badge-pill badge-warning font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Created Decentralized Exchange XBTS")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://xbts.io"}},[_c('img',{attrs:{"width":"200px","src":"https://xbts.io/img/xbts-logo.png"}})])]),_c('p',[_vm._v("DEX EXCHANGE FOR TRADERS AND GAMERS")]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 01.06.2018 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-coins"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Faucet")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://faucet.smartholdem.io/"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" Get Free STH")])]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 16.04.2018 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"fab fa-github"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("STH API JS Libs")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/smartholdem/sthjs-wrapper"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" API Wrapper")]),_c('br'),_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/smartholdem/sth-js"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" STH JS")])]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 08.03.2018 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-bullet-list-67"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("New BlockExplorer")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://blockexplorer.smartholdem.io/#/"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" BlockExplorer Online")])]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 06.03.2018 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"fab fa-github"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Unity3D SDK on SmartHoldem")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/smartholdem/smartholdem-cs"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" SmartHoldem-CS")])]),_c('a',{attrs:{"target":"_blank","href":"https://github.com/smartholdem/smartholdem-cs"}},[_c('img',{attrs:{"src":"/images/logos/unity.png","width":"200px"}})]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 25.02.2018 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-book-bookmark"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("SmartHoldem API")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://api.smartholdem.io/"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" api.smartholdem.io")])]),_c('p',{staticClass:"text-white"},[_vm._v("This is official documentation SmartHoldem API! You can use our API to access SmartHoldem API endpoints Node-A.")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 04.01.2018 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"fab fa-github"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Full node available for installation")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-bolder",attrs:{"target":"_blank","href":"https://github.com/smartholdem/smartholdem-node-a"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" GitHub")])]),_vm._v(" This full node level A SmartHoldem network "),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 21.12.2017 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-wallet-43"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("First Paper Wallet")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light text-white",attrs:{"target":"_blank","href":"https://paperwallet.smartholdem.io/"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" paperwallet.smartholdem.io")])]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 20.12.2017 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-chat-33"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Started Community Forum")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_c('a',{staticClass:"font-weight-light",attrs:{"target":"_blank","href":"https://community.smartholdem.io"}},[_c('i',{staticClass:"tim-icons icon-tap-02"}),_vm._v(" community.smartholdem.io")])]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 18.12.2017 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-molecule-40"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("MainNet SmartHoldem")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('p',{staticClass:"text-white"},[_vm._v(" All coins distribution ")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 14.12.2017 ")])]),_c('time-line-item',{attrs:{"inverted":"","badge-type":"info","badge-icon":"tim-icons icon-wallet-43"}},[_c('span',{staticClass:"badge badge-pill badge-info font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("Desktop Wallet Official Release v0.1.1")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('h3',[_vm._v(" Available on "),_c('a',{attrs:{"href":"https://github.com/smartholdem/smartholdem-wallet/releases/tag/0.1.1"}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" GitHub")])]),_c('p',{staticClass:"font-weight-bolder"},[_vm._v("Features")]),_c('ul',[_c('li',[_vm._v("Testnet SmartHoldem")]),_c('li',[_vm._v("Check for updates client")]),_c('li',[_vm._v("Sent/Receive Tx")]),_c('li',[_vm._v("Register Delegates")]),_c('li',[_vm._v("Votes")]),_c('li',[_vm._v("Added addresses for observation")]),_c('li',[_vm._v("Built-in BlockExplorer")])]),_c('hr'),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 11.12.2017 ")])]),_c('time-line-item',{attrs:{"badge-type":"success","badge-icon":"tim-icons icon-spaceship"}},[_c('span',{staticClass:"badge badge-pill badge-success font-weight-light big-badge",attrs:{"slot":"header"},slot:"header"},[_vm._v("END ICO")]),_c('div',{staticClass:"text-white",attrs:{"slot":"content"},slot:"content"},[_c('p',{staticClass:"text-white"},[_vm._v(" Total amount ~5 BTC into escrow ")]),_c('hr',{staticClass:"bg-success"}),_c('i',{staticClass:"tim-icons icon-calendar-60"}),_vm._v(" 10.12.2017 ")])])],1),_c('hr',{staticClass:"bg-success"})],1)])]),_c('FooterFront'),_c('go-top',{staticStyle:{"box-shadow":"none","outline":"none"},attrs:{"src":"/images/go-top.png","radius":0,"bg-color":"#00000000","fg-color":"#00000000","size":48}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Algorithm")]),_vm._v(" 2nd Level Delegate PoS")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("BlockTime")]),_vm._v(" 8 sec")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Max Supply")]),_vm._v(" Limited up to 256 425 000 STH on 14 Aug 2041")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Gaming IDE")]),_vm._v(" Unity 3D & Unreal Engine")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Blockchain Started")]),_vm._v(" 11/21/2017 @ 01:00pm (UTC)")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"font-weight-bold"},[_vm._v("Sign blocks")]),_vm._v(" TOP 64 delegates "),_c('small',[_vm._v("[BFT Algorithm]")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"card p-2"},[_c('h2',{staticClass:"card-title text-center text-danger"},[_vm._v("Fair Blockchain games")]),_c('div',{staticClass:"card-body"},[_c('p',[_vm._v("SmartHoldem is a universal platform to create Blockchain games. The platform has everything to develop game projects. Use new Blockchain monetizing methods during all living cycle of the game. ")]),_c('p',[_vm._v(" All games are copyrighted by their authors. Instant transactions. Balance refill and withdrawal in popular cryptocurrencies. "),_c('br'),_vm._v("The ownership for assets, including gaming virtual ones are guaranteed and confirmed by the Blockchain. Only you have the access to your account! ")]),_c('p',[_c('span',{staticClass:"font-weight-bolder"},[_vm._v("Tools to build Blockchain Games")])]),_c('ul',{staticClass:"text-decoration-none"},[_c('li',[_vm._v("2ndLDPoS technology saves servers costs.")]),_c('li',[_vm._v("Blockchain safety and protection for users’ accounts and in-gaming propriety.")]),_c('li',[_vm._v("The compatibility of the game client and SmartHoldem Wallet.")]),_c('li',[_vm._v("Integration of gaming algorithms into Blockchain.")]),_c('li',[_vm._v("Full management of your own finances from selling the game assets.")]),_c('li',[_vm._v("Release of your own token at Sidechain.")]),_c('li',[_vm._v("Adding of released gaming tokens to the decentralized cryptocurrency exchanges.")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header text-center"},[_c('h2',{staticClass:"title"},[_vm._v("Platform Development")])])}]


// CONCATENATED MODULE: ./src/pages/Pages/TimeLinePage.vue?vue&type=template&id=a5f0a63a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/components/FooterFront.vue + 4 modules
var FooterFront = __webpack_require__("e96a");

// EXTERNAL MODULE: ./node_modules/@inotom/vue-go-top/dist/vue-go-top.umd.js
var vue_go_top_umd = __webpack_require__("49ec");
var vue_go_top_umd_default = /*#__PURE__*/__webpack_require__.n(vue_go_top_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/TimeLinePage.vue?vue&type=script&lang=js&







/* harmony default export */ var TimeLinePagevue_type_script_lang_js_ = ({
  components: {
    TimeLine: components["j" /* TimeLine */],
    TimeLineItem: components["k" /* TimeLineItem */],
    FooterFront: FooterFront["a" /* default */],
    GoTop: vue_go_top_umd_default.a
  },
  data: function data() {
    return {
      tlData: [],
      daysOnline: 808,
      txCount: 0,
      supply: 246000000
    };
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
      var dataTxCount, supply;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.daysOnline = ((Math.floor(Date.now() / 1000) - 1511269200) / 60 / 60 / 24).toFixed(2);
              _context.next = 3;
              return axios_default.a.get('https://node0.smartholdem.io/api/transactions?limit=1');

            case 3:
              dataTxCount = _context.sent.data;
              _this.txCount = dataTxCount.count;
              _context.next = 7;
              return axios_default.a.get('https://node0.smartholdem.io/api/blocks/getSupply');

            case 7:
              supply = _context.sent.data;
              _this.supply = (supply.supply / 100000000).toFixed(0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/TimeLinePage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_TimeLinePagevue_type_script_lang_js_ = (TimeLinePagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Pages/TimeLinePage.vue?vue&type=style&index=0&lang=css&
var TimeLinePagevue_type_style_index_0_lang_css_ = __webpack_require__("39d7");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/TimeLinePage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_TimeLinePagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TimeLinePage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "922a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/ListingVote.vue?vue&type=template&id=fa05a65c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('card',{staticStyle:{"margin-bottom":"0px"}},[_c('template',{slot:"header"},[_c('h2',[_vm._v("WIN LISTING AT XBTS DEX EXCHANGE")]),_c('p',[_vm._v("Adding token to the XBTS Dex exchange is very easy! XBTS Blockchain voting! Conditions "),_c('span',{staticClass:"font-weight-bold pointer",on:{"click":function($event){return _vm.openLink('https://vote.xbts.io')}}},[_vm._v("vote.xbts.io")])]),_c('p',[_vm._v(" Voting is carried out in SmartHoldem coins (STH). You can vote from the SmartHoldem Wallet or your XBTS or BitShares account. SmartHoldem Coin (STH) is the core asset of XBTS DEX. Internal name in BitShares blockchain XBTSX.STH ")]),_c('p',[_vm._v(" After submitting the Blockchain voting form, the project receives a personal voting address. This address is added to the Candidates list section "),_c('span',{staticClass:"font-weight-bold pointer",on:{"click":function($event){return _vm.openLink('https://vote.xbts.io')}}},[_vm._v("vote.xbts.io")]),_vm._v(" . Voting addresses are available in the Smartholdem wallet in this section too. ")]),_c('p',[_vm._v(" Project and community should deposit at least 600 000 STH votes and thus project coin may jump one of the 3 positions in the Voting Candidates list and can win listing ")])]),(!_vm.$root.isMobile)?_c('div',{staticClass:"wallet-tabs"},[_c('tabs',{attrs:{"type":"primary"}},[_c('tab-pane',{attrs:{"label":'Candidates '}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('XbtsListCandidates')],1)])]),_c('tab-pane',{attrs:{"label":"Winners"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('XbtsListWinners')],1)])])],1)],1):_vm._e()],2)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dashboard/ListingVote.vue?vue&type=template&id=fa05a65c&scoped=true&

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Exchange/XbtsListCandidates.vue?vue&type=template&id=59046480&scoped=true&
var XbtsListCandidatesvue_type_template_id_59046480_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',{staticClass:"shadow-none",staticStyle:{"margin-bottom":"0px"},attrs:{"card-body-classes":"table-full-width"}},[_c('el-table',{attrs:{"data":_vm.candidates}},[_c('el-table-column',{attrs:{"className":"","min-width":"20","label":"Ticker"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_vm._v(" "+_vm._s(row.ticker)+" ")])}}])}),_c('el-table-column',{attrs:{"className":"","min-width":"100","label":"Coin"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_vm._v(" "+_vm._s(row.name)+" ")])}}])}),_c('el-table-column',{attrs:{"min-width":"100","label":"Vote Address"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{staticClass:"font-weight-bold "},[_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:copy",value:(row.address),expression:"row.address",arg:"copy"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"top"}},[_c('i',{staticClass:"tim-icons icon-single-copy-04 pointer"})]),_vm._v(" "+_vm._s(row.address)+" ")],1)}}])}),_c('el-table-column',{attrs:{"className":"","min-width":"100","label":"Votes STH"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{staticClass:"font-weight-bold"},[_vm._v(" "+_vm._s(row.weight)+" ")])}}])})],1)],1)}
var XbtsListCandidatesvue_type_template_id_59046480_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Exchange/XbtsListCandidates.vue?vue&type=template&id=59046480&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table-column.css
var table_column = __webpack_require__("5466");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__("450d");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/table-column.js
var lib_table_column = __webpack_require__("ecdf");
var lib_table_column_default = /*#__PURE__*/__webpack_require__.n(lib_table_column);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/table.css
var table = __webpack_require__("38a0");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/table.js
var lib_table = __webpack_require__("ad41");
var lib_table_default = /*#__PURE__*/__webpack_require__.n(lib_table);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Exchange/XbtsListCandidates.vue?vue&type=script&lang=js&











var _components;

/* harmony default export */ var XbtsListCandidatesvue_type_script_lang_js_ = ({
  name: "XbtsListCandidates",
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, lib_table_default.a.name, lib_table_default.a), Object(defineProperty["a" /* default */])(_components, lib_table_column_default.a.name, lib_table_column_default.a), _components),
  computed: {
    candidates: function candidates() {
      return this.$store.getters['blockchain/xbtsCandidates'];
    }
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('blockchain/getXbtsCandidates');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/Exchange/XbtsListCandidates.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_XbtsListCandidatesvue_type_script_lang_js_ = (XbtsListCandidatesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Exchange/XbtsListCandidates.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_XbtsListCandidatesvue_type_script_lang_js_,
  XbtsListCandidatesvue_type_template_id_59046480_scoped_true_render,
  XbtsListCandidatesvue_type_template_id_59046480_scoped_true_staticRenderFns,
  false,
  null,
  "59046480",
  null
  
)

/* harmony default export */ var XbtsListCandidates = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Exchange/XbtsListWinners.vue?vue&type=template&id=15f4fe02&scoped=true&
var XbtsListWinnersvue_type_template_id_15f4fe02_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',{staticClass:"shadow-none",staticStyle:{"margin-bottom":"0px"},attrs:{"card-body-classes":"table-full-width"}},[_c('el-table',{attrs:{"data":_vm.winners}},[_c('el-table-column',{attrs:{"className":"","min-width":"10","label":"#"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_c('img',{attrs:{"width":"32px","src":'https://ex.xbts.io/asset-symbols/'+row.ticker.toLowerCase()+'.png'}})])}}])}),_c('el-table-column',{attrs:{"className":"","min-width":"20","label":"Ticker"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{},[_vm._v(" "+_vm._s(row.ticker)+" ")])}}])}),_c('el-table-column',{attrs:{"className":"","min-width":"50","label":"Coin"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{staticClass:"text-uppercase"},[_vm._v(" "+_vm._s(row.name)+" ")])}}])}),_c('el-table-column',{attrs:{"className":"","min-width":"50","label":"State"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _c('div',{staticClass:"text-uppercase mt-1"},[(row.state === 'listed')?_c('span',[_vm._v(_vm._s(row.state)+" "),_c('base-button',{staticClass:"ml-2",attrs:{"type":"danger","round":"","icon":"","simple":""},on:{"click":function($event){_vm.openTicker(row.ticker.toUpperCase())}}},[_c('el-tooltip',{attrs:{"content":"Trade Now","effect":"light","open-delay":300,"placement":"top"}},[_c('i',{staticClass:"tim-icons icon-chart-bar-32",staticStyle:{"font-size":"1rem"}})])],1)],1):_vm._e(),(row.state === 'winner')?_c('span',[_vm._v(_vm._s(row.state))]):_vm._e()])}}])})],1)],1)}
var XbtsListWinnersvue_type_template_id_15f4fe02_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Exchange/XbtsListWinners.vue?vue&type=template&id=15f4fe02&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Exchange/XbtsListWinners.vue?vue&type=script&lang=js&











var XbtsListWinnersvue_type_script_lang_js_components;

/* harmony default export */ var XbtsListWinnersvue_type_script_lang_js_ = ({
  name: "XbtsListCandidates",
  components: (XbtsListWinnersvue_type_script_lang_js_components = {}, Object(defineProperty["a" /* default */])(XbtsListWinnersvue_type_script_lang_js_components, lib_table_default.a.name, lib_table_default.a), Object(defineProperty["a" /* default */])(XbtsListWinnersvue_type_script_lang_js_components, lib_table_column_default.a.name, lib_table_column_default.a), XbtsListWinnersvue_type_script_lang_js_components),
  methods: {
    openTicker: function openTicker(ticker) {
      this.openLink('https://ex.xbts.io/#/market/XBTSX.' + ticker + '_BTS');
    }
  },
  computed: {
    winners: function winners() {
      var result = [];
      var data = this.$store.getters['blockchain/xbtsWinners'];

      for (var i = 0; i < data.length; i++) {
        if (data[i].state === 'listed' || data[i].state === 'winner') {
          result.push(data[i]);
        }
      }

      return result;
    }
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('blockchain/getXbtsWinners');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/Exchange/XbtsListWinners.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_XbtsListWinnersvue_type_script_lang_js_ = (XbtsListWinnersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Exchange/XbtsListWinners.vue





/* normalize component */

var XbtsListWinners_component = Object(componentNormalizer["a" /* default */])(
  Exchange_XbtsListWinnersvue_type_script_lang_js_,
  XbtsListWinnersvue_type_template_id_15f4fe02_scoped_true_render,
  XbtsListWinnersvue_type_template_id_15f4fe02_scoped_true_staticRenderFns,
  false,
  null,
  "15f4fe02",
  null
  
)

/* harmony default export */ var XbtsListWinners = (XbtsListWinners_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/ListingVote.vue?vue&type=script&lang=js&



/* harmony default export */ var ListingVotevue_type_script_lang_js_ = ({
  name: "BuySell",
  components: {
    TabPane: components["h" /* TabPane */],
    Tabs: components["i" /* Tabs */],
    Collapse: components["e" /* Collapse */],
    CollapseItem: components["f" /* CollapseItem */],
    XbtsListCandidates: XbtsListCandidates,
    XbtsListWinners: XbtsListWinners
  }
});
// CONCATENATED MODULE: ./src/pages/Dashboard/ListingVote.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dashboard_ListingVotevue_type_script_lang_js_ = (ListingVotevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Dashboard/ListingVote.vue





/* normalize component */

var ListingVote_component = Object(componentNormalizer["a" /* default */])(
  Dashboard_ListingVotevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fa05a65c",
  null
  
)

/* harmony default export */ var ListingVote = __webpack_exports__["default"] = (ListingVote_component.exports);

/***/ }),

/***/ "9396":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d791");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9e90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/SmartHolder.vue?vue&type=template&id=656a3b72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('card',{},[_c('div',{staticClass:"mb-3"},[_c('span',{staticClass:"badge badge-success big-badge mr-3"},[_vm._v("SmartHolders "),_c('span',{staticClass:"font-weight-bolder p-2"},[_vm._v(_vm._s(_vm.holders.total.holders))])]),_c('span',{staticClass:"badge badge-success big-badge"},[_vm._v("Total Hold "),_c('span',{staticClass:"font-weight-bolder p-2"},[_vm._v(_vm._s((_vm.holders.total.realAmount * 1).toFixed(0)))]),_vm._v(" STH")]),_c('span',{staticClass:"btn btn-outline-warning btn-simple btn-sm float-right pointer",on:{"click":function($event){return _vm.openLink('https://community.smartholdem.io/topic/530/staking-at-xbts-up-to-50-of-trading-profit')}}},[_vm._v(" Join Now ")]),_c('p',[_vm._v(" The "),_c('strong',[_vm._v("SmartHOLDER Staking Program")]),_vm._v(" gives benefits to the STH owners. Investing in SmartHoldem Coin, you have the right for a share of earnings 50% of the XBTS DEX trading proceeds, which are generated by trading fees on the XBTS exchange. Increase your crypto portfolio regardless of how the market moves. ")]),_c('p',[_vm._v(" You can place your SmartHoldem coins STH and get profit from XBTS twice a month. The stake in the SmartHOLDER Staking Program will freeze and block your coins in the blockchain for the timer of 1-3-6-12 months. The longer duration of the stake provides for the higher pay-out rate. During the staking period you will automatically take part in the distribution of payments on the 1st and 15th day of each month. ")])]),(!_vm.$root.isMobile)?_c('div',[_c('tabs',{attrs:{"type":"primary"}},[_c('tab-pane',{attrs:{"label":"Assets"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('table',{staticClass:"table mb-0"},[_c('thead',{},[_c('tr',[_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Asset")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Total trading fees")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("* 50 % trading fees payable")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("** Quorum progress")])])]),_c('tbody',[_vm._l((_vm.assetsPay),function(itemPay,idxPay){return _c('tr',{key:'Pay'+ idxPay,staticClass:"pointer"},[_c('td',{staticClass:"text-left"},[_c('img',{staticClass:"asset-symbol mr-2",attrs:{"width":"24px","src":'https://ex.xbts.io/asset-symbols/'+itemPay.ticker.toLowerCase()+'.png'}}),_vm._v(_vm._s(itemPay.title)+" ")]),_c('td',{staticClass:"text-left text-info"},[_vm._v(_vm._s(itemPay.ticker)+" "+_vm._s(itemPay.accumulated_fees))]),_c('td',{staticClass:"text-left"},[_vm._v(_vm._s(itemPay.ticker)+" "+_vm._s((itemPay.accumulated_fees / 2).toFixed(8)))]),_c('td',{staticClass:"text-left text-success"},[_c('i',{staticClass:"far fa-check-square"}),_vm._v(" "+_vm._s((itemPay.accumulated_fees / itemPay.min * 100).toFixed(0))+"% ")])])}),_vm._l((_vm.assetsNoq),function(item,idxNoq){return _c('tr',{key:idxNoq,staticClass:"pointer"},[_c('td',{staticClass:"text-left"},[_c('img',{staticClass:"asset-symbol mr-2",attrs:{"width":"24px","src":'https://ex.xbts.io/asset-symbols/'+item.ticker.toLowerCase()+'.png'}}),_vm._v(_vm._s(item.title)+" ")]),_c('td',{staticClass:"text-left"},[_c('span',{},[_vm._v(_vm._s(item.ticker))]),_vm._v(" "+_vm._s(item.accumulated_fees)+" ")]),_c('td',{staticClass:"text-left"},[_c('span',{},[_vm._v(_vm._s(item.ticker))]),_vm._v(" "+_vm._s((item.accumulated_fees / 2).toFixed(8))+" ")]),_c('td',{staticClass:"text-left "},[_c('i',{staticClass:"far fa-clock"}),_vm._v(" "+_vm._s((item.accumulated_fees / item.min * 100).toFixed(0))+"% ")])])})],2)])])])]),_c('tab-pane',{attrs:{"label":"Holders"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('table',{staticClass:"table mb-0",attrs:{"maxHeight":_vm.$root.height - 350,"stripe":""}},[_c('thead',{},[_c('tr',[_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("#")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Holder")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Amount STH")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("+Bonus amount")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Bonus %")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Personal %")]),_c('th',{staticClass:"border-bottom-0",attrs:{"scope":"col"}},[_vm._v("Months")])])]),_c('tbody',_vm._l((_vm.holders.holders),function(item,idxHolder){return _c('tr',{key:idxHolder},[_c('td',[_vm._v(_vm._s(idxHolder + 1))]),_c('td',[_vm._v(_vm._s(item.name))]),_c('td',[_vm._v(_vm._s(item.real_amount))]),_c('td',[_vm._v(_vm._s(item.bonus_amount))]),_c('td',[_vm._v(_vm._s(item.bonus_percent)+"%")]),_c('td',[_vm._v(_vm._s(item.person_percent)+"%")]),_c('td',[_vm._v(_vm._s(item.months))])])}),0)])])])])],1)],1):_vm._e()])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dashboard/SmartHolder.vue?vue&type=template&id=656a3b72&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/SmartHolder.vue?vue&type=script&lang=js&



/* harmony default export */ var SmartHoldervue_type_script_lang_js_ = ({
  name: "SmartHolder",
  components: {
    TabPane: components["h" /* TabPane */],
    Tabs: components["i" /* Tabs */],
    Collapse: components["e" /* Collapse */],
    CollapseItem: components["f" /* CollapseItem */]
  },
  computed: {
    assetsNoq: function assetsNoq() {
      return this.$store.getters['smartholder/assetsNoq'];
    },
    assetsPay: function assetsPay() {
      return this.$store.getters['smartholder/assetsPay'];
    },
    holders: function holders() {
      return this.$store.getters['smartholder/holders'];
    }
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
      var months, timestamp, currDate, currDay, currMonth, currYr, payDay, payMonth;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              timestamp = Date.now();
              currDate = new Date(timestamp);
              currDay = currDate.getDate();
              currMonth = currDate.getMonth();
              currYr = currDate.getFullYear();
              payDay = currDay > 15 ? 1 : 15;

              if (currMonth === 11 && currDay > 15) {
                currMonth = -1;
                currYr++;
              }

              payMonth = currDay > 15 ? currMonth + 1 : currMonth;
              _this.nextPayout = payDay + ' ' + months[payMonth] + ' ' + currYr;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Dashboard/SmartHolder.vue?vue&type=script&lang=js&
 /* harmony default export */ var Dashboard_SmartHoldervue_type_script_lang_js_ = (SmartHoldervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Dashboard/SmartHolder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Dashboard_SmartHoldervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "656a3b72",
  null
  
)

/* harmony default export */ var SmartHolder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "aa32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Lock.vue?vue&type=template&id=1abe801e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"col-lg-4 col-md-6 ml-auto mr-auto"},[_c('card',{staticClass:"card-lock card-white text-center"},[_c('span',{staticClass:"sth-icons icon-sth text-primary",staticStyle:{"margin-top":"-60px","background":"#fff","border-radius":"50%","font-size":"85px"},attrs:{"slot":"header"},slot:"header"}),_c('h4',{staticClass:"card-title text-uppercase"},[_vm._v(_vm._s(_vm.$t('WALLET.WALLET')))]),_c('base-input',{attrs:{"type":"text","name":"pin","placeholder":"Enter Pin Code","addon-left-icon":"tim-icons icon-key-25","autocomplete":"off"},on:{"input":_vm.validatePin},model:{value:(_vm.pin),callback:function ($$v) {_vm.pin=$$v},expression:"pin"}}),_c('button',{staticClass:"btn btn-round btn-primary btn-md text-uppercase",attrs:{"type":"button"},on:{"click":_vm.validatePin}},[_vm._v(" "+_vm._s(_vm.$t('APP.UNLOCK'))+" ")]),_c('div',{staticClass:"card-footer"},[_c('p',{staticClass:"text-dark"},[_vm._v("- "+_vm._s(_vm.$t('APP.OR'))+" - ")]),_c('base-button',{staticClass:"text-uppercase",attrs:{"type":"neutral"},nativeOn:{"click":function($event){_vm.showReset = true}}},[_vm._v(_vm._s(_vm.$t('APP.RESET'))+" ")])],1)],1)],1),_c('ResetAll',{attrs:{"modalReset":_vm.showReset},on:{"onResetCancel":function($event){_vm.showReset = false}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Pages/Lock.vue?vue&type=template&id=1abe801e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__("3452");

// EXTERNAL MODULE: ./src/plugins/event-bus.js
var event_bus = __webpack_require__("e00b");

// EXTERNAL MODULE: ./src/components/Wallet/ResetAll.vue + 4 modules
var ResetAll = __webpack_require__("d185");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/Lock.vue?vue&type=script&lang=js&







/* harmony default export */ var Lockvue_type_script_lang_js_ = ({
  components: {
    ResetAll: ResetAll["a" /* default */]
  },
  data: function data() {
    return {
      showReset: false,
      account: {
        address: null,
        secret: null
      },
      pin: '',
      pinEnc: null
    };
  },
  computed: {
    currentAddress: function currentAddress() {
      return this.$store.getters['wallet/currentAddress'];
    }
  },
  methods: {
    validatePin: function validatePin() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var currentHashPin, decryptCompare;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this.pin.length > 3 && _this.$root.pinEnc)) {
                  _context2.next = 12;
                  break;
                }

                currentHashPin = crypto_js["SHA384"](_this.pin.toString()).toString();
                decryptCompare = crypto_js["AES"].decrypt(_this.$root.pinEnc, currentHashPin).toString(crypto_js["enc"].Utf8);

                if (!(decryptCompare && decryptCompare === currentHashPin)) {
                  _context2.next = 12;
                  break;
                }

                _this.$root.pin = currentHashPin;
                _context2.next = 7;
                return _this.$store.dispatch('session/setAuth', true);

              case 7:
                _context2.next = 9;
                return _this.$store.dispatch('app/setPage', 'wallet');

              case 9:
                _context2.next = 11;
                return _this.$store.dispatch('blockchain/getAccount', _this.currentAddress);

              case 11:
                setTimeout(Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!_this.currentAddress) {
                            _context.next = 7;
                            break;
                          }

                          _context.next = 3;
                          return _this.$store.dispatch('wallet/getTxsByAddress');

                        case 3:
                          _context.next = 5;
                          return _this.$router.push('/address/' + _this.currentAddress);

                        case 5:
                          _context.next = 9;
                          break;

                        case 7:
                          _context.next = 9;
                          return _this.$router.push('/dashboard');

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 500);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2.$root.pin = null;
              _this2.$root.pinEnc = _this2.$store.getters['app/pinEncrypted'];
              _context3.next = 4;
              return _this2.$store.dispatch('session/setAuth', false);

            case 4:
              if (_this2.$root.pinEnc) {
                _context3.next = 10;
                break;
              }

              if (!Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
                _context3.next = 8;
                break;
              }

              _context3.next = 8;
              return _this2.$router.push('/register');

            case 8:
              _context3.next = 12;
              break;

            case 10:
              _context3.next = 12;
              return _this2.$store.dispatch('wallet/getBalances');

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/Lock.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_Lockvue_type_script_lang_js_ = (Lockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Pages/Lock.vue?vue&type=style&index=0&lang=css&
var Lockvue_type_style_index_0_lang_css_ = __webpack_require__("9396");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/Lock.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_Lockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Lock = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ad5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f030");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c282":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbountyTasks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("57b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbountyTasks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbountyTasks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbountyTasks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c7e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalWarranties.vue?vue&type=template&id=5e0cb2ab&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('h1',[_vm._v("Disclaimer of Warranties")])]),_c('p',{staticClass:"ml-3 small color-brown"},[_vm._v("20 November 2017")]),_c('div',[_c('div',{staticClass:"card-body"},[_c('p',[_vm._v("You agree that your use or inability to use SmartHoldem cryptocoins is carried out solely at your own risk and")]),_c('p',[_vm._v("you don't put any responsibility on SmartHoldem Team.")]),_c('p',[_vm._v("You agree that your use or inability to use SmartHoldem tokens is carried out solely at your own risk and")]),_c('p',[_vm._v("you don't put any responsibility on SmartHoldem Team.")])])])])])}]


// CONCATENATED MODULE: ./src/pages/Pages/LegalWarranties.vue?vue&type=template&id=5e0cb2ab&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalWarranties.vue?vue&type=script&lang=js&
/* harmony default export */ var LegalWarrantiesvue_type_script_lang_js_ = ({
  name: "LegalWarranties"
});
// CONCATENATED MODULE: ./src/pages/Pages/LegalWarranties.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_LegalWarrantiesvue_type_script_lang_js_ = (LegalWarrantiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/LegalWarranties.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_LegalWarrantiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5e0cb2ab",
  null
  
)

/* harmony default export */ var LegalWarranties = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d791":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e68e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e772":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __webpack_require__("8122");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "el-select-dropdown__item",
      class: {
        selected: _vm.itemSelected,
        "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
        hover: _vm.hover
      },
      on: {
        mouseenter: _vm.hoverItem,
        click: function($event) {
          $event.stopPropagation()
          return _vm.selectOptionClick($event)
        }
      }
    },
    [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'ElOption',

  componentName: 'ElOption',

  inject: ['select'],

  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },


  computed: {
    isObject: function isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    currentLabel: function currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },
    currentValue: function currentValue() {
      return this.value || this.label || '';
    },
    itemSelected: function itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached: function limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel: function currentLabel() {
      if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
    },
    value: function value(val, oldVal) {
      var _select = this.select,
          remote = _select.remote,
          valueKey = _select.valueKey;

      if (!this.created && !remote) {
        if (valueKey && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : _typeof(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        this.dispatch('ElSelect', 'setSelected');
      }
    }
  },

  methods: {
    isEqual: function isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        var valueKey = this.select.valueKey;
        return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
      }
    },
    contains: function contains() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var target = arguments[1];

      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        var valueKey = this.select.valueKey;
        return arr && arr.some(function (item) {
          return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
        });
      }
    },
    handleGroupDisabled: function handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem: function hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick: function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
      }
    },
    queryChange: function queryChange(query) {
      this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created: function created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on('queryChange', this.queryChange);
    this.$on('handleGroupDisabled', this.handleGroupDisabled);
  },
  beforeDestroy: function beforeDestroy() {
    var _select2 = this.select,
        selected = _select2.selected,
        multiple = _select2.multiple;

    var selectedOptions = multiple ? selected : [selected];
    var index = this.select.cachedOptions.indexOf(this);
    var selectedIndex = selectedOptions.indexOf(this);

    // if option is not selected, remove it from cache
    if (index > -1 && selectedIndex < 0) {
      this.select.cachedOptions.splice(index, 1);
    }
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
});
// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/select/src/option.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_optionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/select/src/option.vue"
/* harmony default export */ var src_option = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __webpack_require__("d010");

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_src_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);


/* istanbul ignore next */
_select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].install = function (Vue) {
  Vue.component(_select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].name, _select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

/******/ });

/***/ }),

/***/ "e96a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FooterFront.vue?vue&type=template&id=0de88626&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('footer',{staticClass:"footer"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_vm._m(0),_vm._m(1),_c('div',{staticClass:"col-md-4 pt-5 text-left"},[_vm._m(2),_c('ul',[_c('li',[_c('router-link',{staticClass:"font-weight-bold color-gold",attrs:{"to":"/legal-limitations"}},[_vm._v(" Disclaimers and Limitation of Liability ")])],1),_c('li',[_c('router-link',{staticClass:"font-weight-bold color-gold",attrs:{"to":"/legal-terms"}},[_vm._v(" Terms and Conditions")])],1),_c('li',[_c('router-link',{staticClass:"font-weight-bold color-gold",attrs:{"to":"/legal-warranties"}},[_vm._v(" Disclaimer of Warranties ")])],1)])])])]),_c('div',{staticClass:"text-center mt-5"},[_c('p',{staticClass:"text-center color-brown"},[_vm._v("© 2017 - "+_vm._s(_vm.year)+", powered by SmartHoldem")]),_c('p',{staticClass:"text-center color-brown"},[_vm._v("All trademarks & copyrights belong to their owners")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-4 pt-5 text-left"},[_c('h4',{staticClass:"font-weight-bolder text-dark"},[_c('i',{staticClass:"tim-icons icon-chat-33"}),_vm._v(" Community")]),_c('ul',{staticStyle:{"list-style-type":"none"}},[_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"href":"https://community.smartholdem.io"}},[_c('i',{staticClass:"tim-icons icon-chat-33"}),_vm._v(" Forum ")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://t.me/smartholdem/"}},[_c('i',{staticClass:"fab fa-telegram-plane"}),_vm._v(" Telegram")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://twitter.com/smartholdem"}},[_c('i',{staticClass:"fab fa-twitter"}),_vm._v(" Twitter")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://twitter.com/dexgamesnet"}},[_c('i',{staticClass:"fab fa-twitter"}),_vm._v(" Twitter 2")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://www.youtube.com/channel/UC5m98uMBjEQeFSfKag8X4-Q"}},[_c('i',{staticClass:"fab fa-youtube"}),_vm._v(" YouTube")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://bitcointalk.org/index.php?topic=2169457.0"}},[_c('i',{staticClass:"fab fa-bitcoin"}),_vm._v(" BitcoinTalk")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://www.instagram.com/smartholdem/"}},[_c('i',{staticClass:"fab fa-instagram"}),_vm._v(" Instagram")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"mailto:contact@smartholdem.io"}},[_c('i',{staticClass:"far fa-envelope"}),_vm._v(" contact@smartholdem.io")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-4 pt-5 text-left"},[_c('h4',{staticClass:"font-weight-bolder text-dark"},[_c('i',{staticClass:"tim-icons icon-book-bookmark"}),_vm._v(" Resources")]),_c('ul',[_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://blockexplorer.smartholdem.io/"}},[_vm._v("BlockExplorer")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://github.com/smartholdem"}},[_vm._v("GitHub")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://api.smartholdem.io/"}},[_vm._v("API")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://dexgames.net"}},[_vm._v("DEX Games")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://onlinewallet.smartholdem.io/"}},[_vm._v("Online Wallet")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://faucet.smartholdem.io/"}},[_vm._v("Faucet")])]),_c('li',[_c('a',{staticClass:"font-weight-bold color-gold",attrs:{"target":"_blank","href":"https://ex.xbts.io"}},[_vm._v("DEX Exchange")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{staticClass:"font-weight-bolder text-dark"},[_c('i',{staticClass:"tim-icons icon-paper"}),_vm._v(" Legal")])}]


// CONCATENATED MODULE: ./src/components/FooterFront.vue?vue&type=template&id=0de88626&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FooterFront.vue?vue&type=script&lang=js&
/* harmony default export */ var FooterFrontvue_type_script_lang_js_ = ({
  name: "FooterFront",
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});
// CONCATENATED MODULE: ./src/components/FooterFront.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterFrontvue_type_script_lang_js_ = (FooterFrontvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FooterFront.vue?vue&type=style&index=0&id=0de88626&scoped=true&lang=css&
var FooterFrontvue_type_style_index_0_id_0de88626_scoped_true_lang_css_ = __webpack_require__("75cd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/FooterFront.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterFrontvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0de88626",
  null
  
)

/* harmony default export */ var FooterFront = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "f030":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f886":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalLimitations.vue?vue&type=template&id=0725e473&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('h1',[_vm._v("Disclaimers and Limitation of Liability")])]),_c('p',{staticClass:"ml-3 small color-brown"},[_vm._v("20 November 2017")]),_c('div',[_c('div',{staticClass:"card-body"},[_c('p',[_vm._v(" The Licensed Technology and all other materials and information provided by SmartHoldem (the “SmartHoldem Materials”) are provided on an “as is” and “as available” basis, “with all faults” and without warranty of any kind. ")]),_c('p',[_vm._v("SmartHoldem and its affiliates disclaim all warranties, conditions, common law duties, and representations (express, implied, oral, and written) with respect to the SmartHoldem Materials, including without limitation all express, implied, and statutory warranties and conditions of any kind, such as title, non-interference with your enjoyment, authority, non-infringement, merchantability, fitness or suitability for any purpose (whether or not SmartHoldem knows or has reason to know of any such purpose), system integration, accuracy or completeness, results, reasonable care, workmanlike effort, lack of negligence, and lack of viruses, whether alleged to arise under law, by reason of custom or usage in the trade, or by course of dealing.")]),_c('p',{staticClass:"font-weight-bolder"},[_vm._v("Without limiting the generality of the foregoing, SmartHoldem and its affiliates make no warranty that")]),_c('ul',[_c('li',[_vm._v("(1) any of the SmartHoldem Materials will operate properly, including as integrated in any Product,")]),_c('li',[_vm._v("(2) that the SmartHoldem Materials will meet your requirements,")]),_c('li',[_vm._v("(3) that the operation of the SmartHoldem Materials will be uninterrupted, bug free, or error free in any or all circumstances,")]),_c('li',[_vm._v("(4) that any defects in the SmartHoldem Materials can or will be corrected,")]),_c('li',[_vm._v("(5) that the SmartHoldem Materials are or will be in compliance with a platform manufacturer’s rules or requirements, or")]),_c('li',[_vm._v("(6) that a platform manufacturer will approve any of your Products, or will not revoke approval of any Product for any or no reason.")])]),_c('p',[_vm._v(" Any warranty against infringement that may be provided in the Uniform Code or in any other comparable statute is expressly disclaimed. SmartHoldem and its affiliates do not guarantee continuous, error-free, virus-free, or secure operation of or access to the SmartHoldem Materials. This paragraph will apply to the maximum extent permitted by applicable law. ")]),_c('p',[_vm._v(" To the maximum extent permitted by applicable law, neither SmartHoldem, its licensors, nor its or their affiliates, nor any of SmartHoldem’s service providers, shall be liable in any way for loss or damage of any kind resulting from the use or inability to use the SmartHoldem Materials or otherwise in connection with this Agreement, including but not limited to loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses. In no event will SmartHoldem, its licensors, nor its or their affiliates, nor any of SmartHoldem’s service providers be liable for any loss of profits or any indirect, incidental, consequential, special, punitive, or exemplary damages, or any other damages arising out of or in connection with this Agreement or the SmartHoldem Materials, or the delay or inability to use or lack of functionality of the SmartHoldem Materials, even in the event of SmartHoldem’s or its affiliates’ fault, tort (including negligence), strict liability, indemnity, product liability, breach of contract, breach of warranty, or otherwise and even if SmartHoldem or its affiliates have been advised of the possibility of such damages. ")]),_c('p',[_vm._v(" These limitations and exclusions regarding damages apply even if any remedy fails to provide adequate compensation. ")]),_c('p',[_vm._v(" Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, the liability of SmartHoldem, its licensors, its and their affiliates, and any of SmartHoldem’s service providers shall be limited to the full extent permitted by law. ")])])])])])}]


// CONCATENATED MODULE: ./src/pages/Pages/LegalLimitations.vue?vue&type=template&id=0725e473&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/LegalLimitations.vue?vue&type=script&lang=js&
/* harmony default export */ var LegalLimitationsvue_type_script_lang_js_ = ({
  name: "LegalLimitations"
});
// CONCATENATED MODULE: ./src/pages/Pages/LegalLimitations.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_LegalLimitationsvue_type_script_lang_js_ = (LegalLimitationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Pages/LegalLimitations.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Pages_LegalLimitationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0725e473",
  null
  
)

/* harmony default export */ var LegalLimitations = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ff66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Antibounty/AbountyTasks.vue?vue&type=template&id=11959cb8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2 text-center"},[_c('card',{staticClass:"h-100"},[(_vm.twitterAccount.profile_image_url_https)?_c('img',{attrs:{"src":_vm.twitterAccount.profile_image_url_https}}):_vm._e(),_c('p',[_vm._v(" "+_vm._s(_vm.twitterAccount.screen_name)+" ")]),_c('p',[_vm._v(" "+_vm._s(_vm.twitterAccount.id_str)+" ")]),_c('p',[_c('base-button',{staticClass:"w-100 text-uppercase border-bottom",attrs:{"link":"","type":"primary"},on:{"click":function($event){_vm.section = 0}}},[_c('i',{staticClass:"tim-icons icon-bullet-list-67 mr-1"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("ABOUNTY.TASKS")))])])],1),_c('p',[_c('base-button',{staticClass:"w-100 text-uppercase border-bottom",attrs:{"link":""},on:{"click":function($event){_vm.section = 1}}},[_c('i',{staticClass:"tim-icons icon-check-2 mr-3"}),_vm._v(" "+_vm._s(_vm.$t("ABOUNTY.STATS"))+" ")])],1),_c('p',[_c('router-link',{attrs:{"to":"/abounty/customer"}},[_c('base-button',{staticClass:"font-16 text-uppercase w-100 border-bottom",attrs:{"link":""}},[_c('i',{staticClass:"fas fa-user-tie mr-3"}),_vm._v(" "+_vm._s(_vm.$t("ABOUNTY.CUSTOMER"))+" ")])],1)],1),_c('p',[_c('router-link',{attrs:{"to":"/abounty/workers"}},[_c('base-button',{staticClass:"font-16 text-uppercase w-100 border-bottom",attrs:{"link":""}},[_c('i',{staticClass:"fas fa-user-astronaut mr-3"}),_vm._v(" "+_vm._s(_vm.$t("ABOUNTY.WORKER"))+" ")])],1)],1)])],1),_c('div',{staticClass:"col-md-10 h-100"},[(_vm.section === 0)?_c('card',{staticClass:"h-100"},[_c('h3',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t("ABOUNTY.AV_TASKS")))]),(_vm.tasks.length < 1)?_c('p',{staticClass:"text-center"},[_vm._v(" "+_vm._s(_vm.$t("ABOUNTY.NO_TASKS"))+" ")]):_vm._e(),(_vm.tasks.length > 0 && _vm.twitterAccount.fail < 250)?_c('table',{staticClass:"table"},[_c('tbody',_vm._l((_vm.tasks),function(item,idx){return _c('tr',{class:'pointer ',attrs:{"refs":item.id_str},on:{"click":function($event){return _vm.openTask(item.link, item.id_str, item.type, idx)}}},[_c('td',{staticClass:"text-center"},[(item.img)?_c('span',[_c('img',{attrs:{"src":item.img,"width":"32px"}})]):_vm._e(),_c('br'),_c('span',{staticClass:"badge badge-info"},[_vm._v(_vm._s(item.success)+" / "+_vm._s(item.count))])]),_c('td',{staticClass:"text-uppercase text-center"},[_c('span',{class:'font-weight-bold ' + (_vm.process[idx] ? 'text-info font-weight-bolder' : '')},[_vm._v(_vm._s(_vm.type[item.type]))]),_c('br'),_c('span',{staticClass:"text-danger font-weight-bolder"},[_vm._v("+"+_vm._s(_vm.rewardAmount))]),_vm._v(" STH ")]),_c('td',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.twitterAccount.address === item.sender),expression:"twitterAccount.address === item.sender"}],staticClass:"float-left pr-2"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.twitterAccount.screen_name === item.account || _vm.twitterAccount.screen_name === item.author),expression:"twitterAccount.screen_name === item.account || twitterAccount.screen_name === item.author"}],staticClass:"badge badge-success mr-2 w-100"},[_vm._v(" "+_vm._s(_vm.$t("ABOUNTY.MY_ACCOUNT"))+" ")]),_c('br'),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.twitterAccount.address === item.sender),expression:"twitterAccount.address === item.sender"}],staticClass:"badge badge-info w-100"},[_vm._v(" This is my task ")])]),(item.text)?_c('span',[_vm._v(_vm._s(item.text))]):_vm._e(),(item.account)?_c('span',[_vm._v("@"+_vm._s(item.account))]):_vm._e()]),_c('td',[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.process[idx]),expression:"process[idx]"}],staticClass:"tim-icons icon-shape-star tim-icons-is-spinning tim-icons-32 text-primary"})])])}),0)]):_vm._e()]):_vm._e(),(_vm.section === 1)?_c('card',{staticClass:"h-100"},[_c('h3',{staticClass:"text-center"},[_vm._v("Stats")]),(_vm.tasksSuccess)?_c('table',{staticClass:"table"},[_c('tbody',_vm._l((_vm.tasksSuccess),function(item){return _c('tr',[_c('td',[_vm._v(_vm._s(_vm.getDateTime(item.timestamp)))]),_c('td',[_vm._v(_vm._s(item.tid))]),_c('td',[_vm._v("+"+_vm._s(item.amount)+" STH")]),_c('td',[_vm._v(_vm._s(item.address))])])}),0)]):_vm._e()]):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dashboard/Antibounty/AbountyTasks.vue?vue&type=template&id=11959cb8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__("db49");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard/Antibounty/AbountyTasks.vue?vue&type=script&lang=js&





function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

/* harmony default export */ var AbountyTasksvue_type_script_lang_js_ = ({
  name: "AbountyTasks",
  components: {},
  data: function data() {
    return {
      abounty: config["abounty"],
      section: 0,
      rewardAmount: 5,
      type: {
        "0": "retweet",
        "1": "follow",
        "2": "like"
      },
      process: []
    };
  },
  computed: {
    prices: function prices() {
      return this.$store.getters['abounty/prices'];
    },
    tasksSuccess: function tasksSuccess() {
      return this.$store.getters['abounty/tasks'].success || {};
    },
    tasks: function tasks() {
      var result = [];
      var data = this.$store.getters['abounty/tasks'] || [];
      var twitter = data.twitter;

      for (var i = 0; i < twitter.length; i++) {
        if (!data.success[twitter[i].id_str]) {
          result.push({
            timestamp: twitter[i].timestamp || 0,
            sender: twitter[i].sender,
            type: twitter[i].type,
            link: twitter[i].link,
            id_str: twitter[i].id_str,
            img: twitter[i].img,
            account: twitter[i].account || null,
            author: twitter[i].author,
            text: twitter[i].text || null,
            count: twitter[i].count,
            success: twitter[i].success,
            process: false
          });
        }
      }

      result.sort(dynamicSort("-timestamp"));
      return result;
    },
    twitterAccount: function twitterAccount() {
      return this.$store.getters['abounty/twitter'][this.$route.params.address] || null;
    }
  },
  methods: {
    getDateTime: function getDateTime(timestamp) {
      var a = new Date(timestamp);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
      return time;
    },
    openTask: function openTask(link, tid, type, idx) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.twitterAccount.fail < 255)) {
                  _context.next = 7;
                  break;
                }

                _this.process[idx] = true;

                _this.$set(_this.process, idx, true);

                _context.next = 5;
                return _this.$store.dispatch('abounty/processAdd', {
                  uid: _this.twitterAccount.id_str,
                  tid: tid,
                  type: type * 1
                });

              case 5:
                _context.next = 7;
                return _this.openLink(link);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getNewTasks: function getNewTasks() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.twitterAccount.id_str && _this2.twitterAccount.fail < _this2.abounty.requirements.failBan)) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _this2.$store.dispatch('abounty/getTasks', _this2.twitterAccount.id_str);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    if (this.twitterAccount) {
      if (this.twitterAccount.followers_count > this.abounty.requirements.followers) {
        this.getNewTasks();
        clearInterval(this.$root.timerPeriodic);
        this.$root.timerPeriodic = setInterval(Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this3.process = [];
                  _context3.next = 3;
                  return _this3.getNewTasks();

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })), 60000);
      }
    }
  },
  created: function created() {
    var _this4 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this4.$store.getters['promo/invited']) {
                _this4.rewardAmount = 4;
              }

              _this4.$eventBus.on('reward', function () {
                var _ref2 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4(data) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!_this4.twitterAccount.id_str) {
                            _context4.next = 6;
                            break;
                          }

                          _this4.process = [];
                          _context4.next = 4;
                          return _this4.$store.dispatch('abounty/getTasks', _this4.twitterAccount.id_str);

                        case 4:
                          _context4.next = 6;
                          return _this4.$store.dispatch('wallet/getTxsByAddress');

                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});
// CONCATENATED MODULE: ./src/pages/Dashboard/Antibounty/AbountyTasks.vue?vue&type=script&lang=js&
 /* harmony default export */ var Antibounty_AbountyTasksvue_type_script_lang_js_ = (AbountyTasksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Dashboard/Antibounty/AbountyTasks.vue?vue&type=style&index=0&lang=css&
var AbountyTasksvue_type_style_index_0_lang_css_ = __webpack_require__("c282");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Dashboard/Antibounty/AbountyTasks.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Antibounty_AbountyTasksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AbountyTasks = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);