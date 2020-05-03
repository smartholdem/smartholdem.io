/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-2348ef1f":"ec7c8272","chunk-3ca3528e":"88b21267","chunk-d2f3c750":"6152ff2b","chunk-5617548b":"1ab08bce"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-2348ef1f":1,"chunk-3ca3528e":1,"chunk-d2f3c750":1,"chunk-5617548b":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"chunk-2348ef1f":"aa3a36d6","chunk-3ca3528e":"411c7a37","chunk-d2f3c750":"15132264","chunk-5617548b":"5270535f"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/smartholdem.io/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "06a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0efd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd1f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "13c5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1499":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cards/Card.vue?vue&type=template&id=ef5336d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:[_vm.type && ("card-" + _vm.type)]},[(_vm.$slots.image)?_c('div',{staticClass:"card-image"},[_vm._t("image")],2):_vm._e(),(_vm.$slots.header || _vm.title)?_c('div',{staticClass:"card-header",class:_vm.headerClasses},[_vm._t("header",[_c('h4',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.title))]),(_vm.subTitle)?_c('p',{staticClass:"card-category"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e()])],2):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"card-body",class:_vm.bodyClasses},[_vm._t("default")],2):_vm._e(),(_vm.$slots['image-bottom'])?_c('div',{staticClass:"card-image"},[_vm._t("image-bottom")],2):_vm._e(),_vm._t("raw-content"),(_vm.$slots.footer)?_c('div',{staticClass:"card-footer",class:_vm.footerClasses},[(_vm.showFooterLine)?_c('hr'):_vm._e(),_vm._t("footer")],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Cards/Card.vue?vue&type=template&id=ef5336d4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cards/Card.vue?vue&type=script&lang=js&
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'card',
  props: {
    title: {
      type: String,
      description: 'Card title'
    },
    subTitle: {
      type: String,
      description: 'Card subtitle'
    },
    type: {
      type: String,
      description: 'Card type (e.g primary/danger etc)'
    },
    showFooterLine: {
      type: Boolean,
      default: false
    },
    headerClasses: {
      type: [String, Object, Array],
      description: 'Card header css classes'
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: 'Card body css classes'
    },
    footerClasses: {
      type: [String, Object, Array],
      description: 'Card footer css classes'
    }
  }
});
// CONCATENATED MODULE: ./src/components/Cards/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Cards/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Card = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "1896":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_01e1f50f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dec1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_01e1f50f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_01e1f50f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_01e1f50f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "18f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1aa9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseDropdown.vue?vue&type=template&id=fdcaffd8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeDropDown),expression:"closeDropDown"}],tag:"component",staticClass:"dropdown",class:[{ show: _vm.isOpen }, ("drop" + _vm.direction)],on:{"click":_vm.toggleDropDown}},[_vm._t("title-container",[_c(_vm.titleTag,{tag:"component",staticClass:"dropdown-toggle no-caret",class:_vm.titleClasses,attrs:{"aria-label":_vm.title || 'dropdown',"aria-expanded":_vm.isOpen,"data-toggle":"dropdown"}},[_vm._t("title",[_c('i',{class:_vm.icon}),_vm._v(" "+_vm._s(_vm.title)+" ")],{"isOpen":_vm.isOpen})],2)],{"isOpen":_vm.isOpen}),_c('ul',{staticClass:"dropdown-menu",class:[
      { show: _vm.isOpen },
      { 'dropdown-menu-right': _vm.menuOnRight },
      _vm.menuClasses
    ]},[_vm._t("default")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseDropdown.vue?vue&type=template&id=fdcaffd8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseDropdown.vue?vue&type=script&lang=js&
/* harmony default export */ var BaseDropdownvue_type_script_lang_js_ = ({
  name: 'base-dropdown',
  props: {
    tag: {
      type: String,
      default: 'div',
      description: 'Dropdown html tag (e.g div, ul etc)'
    },
    titleTag: {
      type: String,
      default: 'button',
      description: 'Dropdown title (toggle) html tag'
    },
    title: {
      type: String,
      description: 'Dropdown title'
    },
    direction: {
      type: String,
      default: 'down',
      description: 'Dropdown menu direction (up|down)'
    },
    icon: {
      type: String,
      description: 'Dropdown icon'
    },
    titleClasses: {
      type: [String, Object, Array],
      description: 'Title css classes'
    },
    menuClasses: {
      type: [String, Object],
      description: 'Menu css classes'
    },
    menuOnRight: {
      type: Boolean,
      description: 'Whether menu should appear on the right'
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown: function toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    closeDropDown: function closeDropDown() {
      this.isOpen = false;
      this.$emit('change', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseDropdownvue_type_script_lang_js_ = (BaseDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BaseDropdown.vue?vue&type=style&index=0&id=fdcaffd8&lang=scss&scoped=true&
var BaseDropdownvue_type_style_index_0_id_fdcaffd8_lang_scss_scoped_true_ = __webpack_require__("64e7");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BaseDropdown.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BaseDropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fdcaffd8",
  null
  
)

/* harmony default export */ var BaseDropdown = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "1b32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "22d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be87");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "251d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("553d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/Inputs/BaseCheckbox.vue + 4 modules
var BaseCheckbox = __webpack_require__("ca64");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseAlert.vue?vue&type=template&id=8c9e6d94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fade-transition',[(_vm.visible)?_c('div',{staticClass:"alert",class:[("alert-" + _vm.type), { 'alert-with-icon': _vm.icon }],attrs:{"role":"alert"}},[(!_vm.dismissible)?_vm._t("default"):[_vm._t("dismiss-icon",[_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.dismissAlert}},[_c('i',{staticClass:"tim-icons icon-simple-remove"})])]),(_vm.icon || _vm.$slots.icon)?[_vm._t("icon",[_c('span',{class:_vm.icon,attrs:{"data-notify":"icon"}})])]:_vm._e(),_c('span',{attrs:{"data-notify":"message"}},[_vm._t("default")],2)]],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseAlert.vue?vue&type=template&id=8c9e6d94&

// EXTERNAL MODULE: ./node_modules/vue2-transitions/dist/vue2-transitions.m.js
var vue2_transitions_m = __webpack_require__("7c76");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseAlert.vue?vue&type=script&lang=js&

/* harmony default export */ var BaseAlertvue_type_script_lang_js_ = ({
  name: 'base-alert',
  components: {
    FadeTransition: vue2_transitions_m["b" /* FadeTransition */]
  },
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: 'Whether alert is dismissible (closeable)'
    },
    icon: {
      type: String,
      default: '',
      description: 'Alert icon to display'
    }
  },
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    dismissAlert: function dismissAlert() {
      this.visible = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseAlertvue_type_script_lang_js_ = (BaseAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BaseAlert.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BaseAlertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseAlert = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/IconCheckbox.vue?vue&type=template&id=2c622766&
var IconCheckboxvue_type_template_id_2c622766_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"choice",class:{ active: _vm.checked },attrs:{"data-toggle":"wizard-checkbox"},on:{"click":_vm.updateValue}},[_c('input',{attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disabled},domProps:{"checked":_vm.checked}}),_c('div',{staticClass:"icon"},[_vm._t("icon",[_c('i',{class:_vm.icon})])],2),_vm._t("title",[_c('h6',[_vm._v(_vm._s(_vm.title))])])],2)}
var IconCheckboxvue_type_template_id_2c622766_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Inputs/IconCheckbox.vue?vue&type=template&id=2c622766&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/IconCheckbox.vue?vue&type=script&lang=js&
/* harmony default export */ var IconCheckboxvue_type_script_lang_js_ = ({
  name: 'icon-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: String,
    title: String,
    icon: String,
    disabled: Boolean
  },
  methods: {
    updateValue: function updateValue() {
      this.$emit('input', !this.checked);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Inputs/IconCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_IconCheckboxvue_type_script_lang_js_ = (IconCheckboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Inputs/IconCheckbox.vue





/* normalize component */

var IconCheckbox_component = Object(componentNormalizer["a" /* default */])(
  Inputs_IconCheckboxvue_type_script_lang_js_,
  IconCheckboxvue_type_template_id_2c622766_render,
  IconCheckboxvue_type_template_id_2c622766_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCheckbox = (IconCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseRadio.vue?vue&type=template&id=a511e3fa&
var BaseRadiovue_type_template_id_a511e3fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-check form-check-radio",class:[_vm.inlineClass, { disabled: _vm.disabled }]},[_c('label',{staticClass:"form-check-label",attrs:{"for":_vm.cbId}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-check-input",attrs:{"id":_vm.cbId,"type":"radio","disabled":_vm.disabled},domProps:{"value":_vm.name,"checked":_vm._q(_vm.model,_vm.name)},on:{"change":function($event){_vm.model=_vm.name}}}),_vm._t("default"),_vm._v(" "),_c('span',{staticClass:"form-check-sign"})],2)])}
var BaseRadiovue_type_template_id_a511e3fa_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Inputs/BaseRadio.vue?vue&type=template&id=a511e3fa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseRadio.vue?vue&type=script&lang=js&




/* harmony default export */ var BaseRadiovue_type_script_lang_js_ = ({
  name: 'base-radio',
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label'
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled'
    },
    value: {
      type: [String, Boolean],
      description: 'Radio value'
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline'
    }
  },
  data: function data() {
    return {
      cbId: ''
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    inlineClass: function inlineClass() {
      if (this.inline) {
        return "form-check-inline";
      }

      return '';
    }
  },
  created: function created() {
    this.cbId = Math.random().toString(16).slice(2);
  }
});
// CONCATENATED MODULE: ./src/components/Inputs/BaseRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseRadiovue_type_script_lang_js_ = (BaseRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Inputs/BaseRadio.vue





/* normalize component */

var BaseRadio_component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseRadiovue_type_script_lang_js_,
  BaseRadiovue_type_template_id_a511e3fa_render,
  BaseRadiovue_type_template_id_a511e3fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseRadio = (BaseRadio_component.exports);
// EXTERNAL MODULE: ./src/components/Inputs/BaseInput.vue + 4 modules
var BaseInput = __webpack_require__("f6e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/TagsInput.vue?vue&type=template&id=44c3cf3d&
var TagsInputvue_type_template_id_44c3cf3d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.dynamicTags),function(tag,index){return _c('el-tag',{key:tag + index,attrs:{"size":"small","type":_vm.tagType,"closable":true,"close-transition":false},on:{"close":function($event){return _vm.handleClose(tag)}}},[_vm._v(" "+_vm._s(tag)+" ")])}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],ref:"saveTagInput",staticClass:"form-control input-new-tag",attrs:{"type":"text","placeholder":"Add new tag","size":"mini"},domProps:{"value":(_vm.inputValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value},_vm.onInput],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleInputConfirm($event)},"blur":_vm.handleInputConfirm}})],2)}
var TagsInputvue_type_template_id_44c3cf3d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Inputs/TagsInput.vue?vue&type=template&id=44c3cf3d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/tag.css
var tag = __webpack_require__("cbb5");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__("450d");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/tag.js
var lib_tag = __webpack_require__("8bbc");
var lib_tag_default = /*#__PURE__*/__webpack_require__.n(lib_tag);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/TagsInput.vue?vue&type=script&lang=js&








/* harmony default export */ var TagsInputvue_type_script_lang_js_ = ({
  name: 'tags-input',
  components: Object(defineProperty["a" /* default */])({}, lib_tag_default.a.name, lib_tag_default.a),
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      },
      description: 'List of tags'
    },
    tagType: {
      type: String,
      default: 'primary',
      description: 'Tag type (primary|danger etc)'
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data: function data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    handleClose: function handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.$emit('change', this.dynamicTags);
    },
    showInput: function showInput() {
      var _this = this;

      this.inputVisible = true;
      this.$nextTick(function () {
        _this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm: function handleInputConfirm() {
      var inputValue = this.inputValue;

      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.$emit('change', this.dynamicTags);
      }

      this.inputVisible = false;
      this.inputValue = '';
    },
    onInput: function onInput(evt) {
      this.$emit('input', evt.target.value);
    }
  },
  created: function created() {
    var _this2 = this;

    this.$watch('value', function (newVal) {
      _this2.dynamicTags = Object(toConsumableArray["a" /* default */])(newVal);
    }, {
      immediate: true
    });
  }
});
// CONCATENATED MODULE: ./src/components/Inputs/TagsInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_TagsInputvue_type_script_lang_js_ = (TagsInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Inputs/TagsInput.vue





/* normalize component */

var TagsInput_component = Object(componentNormalizer["a" /* default */])(
  Inputs_TagsInputvue_type_script_lang_js_,
  TagsInputvue_type_template_id_44c3cf3d_render,
  TagsInputvue_type_template_id_44c3cf3d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TagsInput = (TagsInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseSwitch.vue?vue&type=template&id=115e7d02&
var BaseSwitchvue_type_template_id_115e7d02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate",class:_vm.switchClass},[_c('div',{staticClass:"bootstrap-switch-container",on:{"click":function($event){return _vm.triggerToggle()}}},[_c('span',{staticClass:"bootstrap-switch-handle-on "},[_vm._t("on",[_vm._v(" "+_vm._s(_vm.onText)+" ")])],2),_c('span',{staticClass:"bootstrap-switch-label"}),_c('span',{staticClass:"bootstrap-switch-handle-off bootstrap-switch-default"},[_vm._t("off",[_vm._v(" "+_vm._s(_vm.offText)+" ")])],2)])])}
var BaseSwitchvue_type_template_id_115e7d02_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseSwitch.vue?vue&type=template&id=115e7d02&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseSwitch.vue?vue&type=script&lang=js&
/* harmony default export */ var BaseSwitchvue_type_script_lang_js_ = ({
  name: 'base-switch',
  props: {
    value: [Array, Boolean],
    onText: String,
    offText: String
  },
  computed: {
    switchClass: function switchClass() {
      var base = 'bootstrap-switch-';
      var state = this.model ? 'on' : 'off';
      var classes = base + state;
      return classes;
    },
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    triggerToggle: function triggerToggle() {
      this.model = !this.model;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseSwitchvue_type_script_lang_js_ = (BaseSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BaseSwitch.vue





/* normalize component */

var BaseSwitch_component = Object(componentNormalizer["a" /* default */])(
  components_BaseSwitchvue_type_script_lang_js_,
  BaseSwitchvue_type_template_id_115e7d02_render,
  BaseSwitchvue_type_template_id_115e7d02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseSwitch = (BaseSwitch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Badge.vue?vue&type=template&id=a16c74d8&
var Badgevue_type_template_id_a16c74d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"badge",class:("badge-" + _vm.type)},[_vm._t("default")],2)}
var Badgevue_type_template_id_a16c74d8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Badge.vue?vue&type=template&id=a16c74d8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Badge.vue?vue&type=script&lang=js&

/* harmony default export */ var Badgevue_type_script_lang_js_ = ({
  name: 'badge',
  props: {
    tag: {
      type: String,
      default: 'span',
      description: 'Badge tag'
    },
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        var acceptedValues = ['primary', 'info', 'success', 'warning', 'danger', 'default'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Badge type (primary|info|success|warning|danger|default)'
    }
  }
});
// CONCATENATED MODULE: ./src/components/Badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Badgevue_type_script_lang_js_ = (Badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Badge.vue





/* normalize component */

var Badge_component = Object(componentNormalizer["a" /* default */])(
  components_Badgevue_type_script_lang_js_,
  Badgevue_type_template_id_a16c74d8_render,
  Badgevue_type_template_id_a16c74d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Badge = (Badge_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseProgress.vue?vue&type=template&id=3b694100&
var BaseProgressvue_type_template_id_3b694100_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-container",class:( _obj = {}, _obj[("progress-" + _vm.type)] = _vm.type, _obj[("progress-" + _vm.size)] = _vm.size, _obj )},[(_vm.label)?_c('span',{staticClass:"progress-badge"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"progress"},[(_vm.showValue && _vm.valuePosition === 'left')?_c('span',{staticClass:"progress-value"},[_vm._v(_vm._s(_vm.value)+"%")]):_vm._e(),_c('div',{staticClass:"progress-bar",class:_vm.computedClasses,style:(("width: " + _vm.value + "%;")),attrs:{"role":"progressbar","aria-valuenow":_vm.value,"aria-valuemin":"0","aria-valuemax":"100"}},[_vm._t("default",[(_vm.showValue && _vm.valuePosition === 'right')?_c('span',{staticClass:"progress-value"},[_vm._v(_vm._s(_vm.value)+"%")]):_vm._e()])],2)])])}
var BaseProgressvue_type_template_id_3b694100_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseProgress.vue?vue&type=template&id=3b694100&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseProgress.vue?vue&type=script&lang=js&

/* harmony default export */ var BaseProgressvue_type_script_lang_js_ = ({
  name: 'base-progress',
  props: {
    striped: Boolean,
    showValue: {
      type: Boolean,
      default: true
    },
    animated: Boolean,
    label: String,
    valuePosition: {
      type: String,
      default: 'left'
    },
    height: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'sm'
    },
    value: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    }
  },
  computed: {
    computedClasses: function computedClasses() {
      return [{
        'progress-bar-striped': this.striped
      }, {
        'progress-bar-animated': this.animated
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseProgressvue_type_script_lang_js_ = (BaseProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BaseProgress.vue





/* normalize component */

var BaseProgress_component = Object(componentNormalizer["a" /* default */])(
  components_BaseProgressvue_type_script_lang_js_,
  BaseProgressvue_type_template_id_3b694100_render,
  BaseProgressvue_type_template_id_3b694100_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseProgress = (BaseProgress_component.exports);
// EXTERNAL MODULE: ./src/components/BaseButton.vue + 4 modules
var BaseButton = __webpack_require__("82ea");

// EXTERNAL MODULE: ./src/components/BaseDropdown.vue + 4 modules
var BaseDropdown = __webpack_require__("1aa9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseTable.vue?vue&type=template&id=eb75b266&
var BaseTablevue_type_template_id_eb75b266_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table tablesorter",class:_vm.tableClass},[_c('thead',{class:_vm.theadClasses},[_c('tr',[_vm._t("columns",_vm._l((_vm.columns),function(column){return _c('th',{key:column},[_vm._v(_vm._s(column))])}),{"columns":_vm.columns})],2)]),_c('tbody',{class:_vm.tbodyClasses},_vm._l((_vm.data),function(item,index){return _c('tr',{key:index},[_vm._t("default",_vm._l((_vm.columns),function(column,index){return (_vm.hasValue(item, column))?_c('td',{key:index},[_vm._v(" "+_vm._s(_vm.itemValue(item, column))+" ")]):_vm._e()}),{"row":item,"index":index})],2)}),0)])}
var BaseTablevue_type_template_id_eb75b266_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseTable.vue?vue&type=template&id=eb75b266&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseTable.vue?vue&type=script&lang=js&
/* harmony default export */ var BaseTablevue_type_script_lang_js_ = ({
  name: 'base-table',
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      },
      description: 'Table columns'
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      },
      description: 'Table data'
    },
    type: {
      type: String,
      default: '',
      description: 'Whether table is striped or hover type'
    },
    theadClasses: {
      type: String,
      default: '',
      description: '<thead> css classes'
    },
    tbodyClasses: {
      type: String,
      default: '',
      description: '<tbody> css classes'
    }
  },
  computed: {
    tableClass: function tableClass() {
      return this.type && "table-".concat(this.type);
    }
  },
  methods: {
    hasValue: function hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined';
    },
    itemValue: function itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseTablevue_type_script_lang_js_ = (BaseTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BaseTable.vue





/* normalize component */

var BaseTable_component = Object(componentNormalizer["a" /* default */])(
  components_BaseTablevue_type_script_lang_js_,
  BaseTablevue_type_template_id_eb75b266_render,
  BaseTablevue_type_template_id_eb75b266_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseTable = (BaseTable_component.exports);
// EXTERNAL MODULE: ./src/components/Cards/Card.vue + 4 modules
var Card = __webpack_require__("1499");

// EXTERNAL MODULE: ./src/components/Cards/StatsCard.vue + 4 modules
var StatsCard = __webpack_require__("804b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/BaseNav.vue?vue&type=template&id=be8f8f60&
var BaseNavvue_type_template_id_be8f8f60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar",class:_vm.classes},[_c('div',{class:_vm.containerClasses},[_vm._t("brand"),_vm._t("toggle-button",[(_vm.hasMenu)?_c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","aria-expanded":"false","aria-label":"Toggle navigation"},on:{"click":_vm.toggleMenu}},[_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"}),_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"}),_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"})]):_vm._e()]),_c('CollapseTransition',{on:{"after-leave":_vm.onTransitionEnd,"before-enter":_vm.onTransitionStart}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"collapse navbar-collapse show",class:_vm.menuClasses},[_vm._t("default")],2)])],2)])}
var BaseNavvue_type_template_id_be8f8f60_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar/BaseNav.vue?vue&type=template&id=be8f8f60&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/BaseNav.vue?vue&type=script&lang=js&



/* harmony default export */ var BaseNavvue_type_script_lang_js_ = ({
  name: 'base-nav',
  props: {
    show: {
      type: Boolean,
      default: false,
      description: 'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description: 'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container-fluid',
      description: 'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
    type: {
      type: String,
      default: 'white',
      validator: function validator(value) {
        return ['dark', 'success', 'danger', 'warning', 'white', 'primary', 'info', 'vue'].includes(value);
      },
      description: 'Navbar color type'
    }
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  components: {
    CollapseTransition: vue2_transitions_m["a" /* CollapseTransition */]
  },
  data: function data() {
    return {
      transitionFinished: true
    };
  },
  computed: {
    classes: function classes() {
      var color = "bg-".concat(this.type);
      var classes = [{
        'navbar-transparent': !this.show && this.transparent
      }, Object(defineProperty["a" /* default */])({}, "navbar-expand-".concat(this.expand), this.expand)];

      if (this.position) {
        classes.push("navbar-".concat(this.position));
      }

      if (!this.transparent || this.show && !this.transitionFinished || !this.show && !this.transitionFinished) {
        classes.push(color);
      }

      return classes;
    },
    hasMenu: function hasMenu() {
      return this.$slots.default;
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.$emit('change', !this.show);
    },
    onTransitionStart: function onTransitionStart() {
      this.transitionFinished = false;
    },
    onTransitionEnd: function onTransitionEnd() {
      this.transitionFinished = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Navbar/BaseNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_BaseNavvue_type_script_lang_js_ = (BaseNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Navbar/BaseNav.vue





/* normalize component */

var BaseNav_component = Object(componentNormalizer["a" /* default */])(
  Navbar_BaseNavvue_type_script_lang_js_,
  BaseNavvue_type_template_id_be8f8f60_render,
  BaseNavvue_type_template_id_be8f8f60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseNav = (BaseNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/NavbarToggleButton.vue?vue&type=template&id=5f2303bb&
var NavbarToggleButtonvue_type_template_id_5f2303bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var NavbarToggleButtonvue_type_template_id_5f2303bb_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-bar bar1"}),_c('span',{staticClass:"navbar-toggler-bar bar2"}),_c('span',{staticClass:"navbar-toggler-bar bar3"})])}]


// CONCATENATED MODULE: ./src/components/Navbar/NavbarToggleButton.vue?vue&type=template&id=5f2303bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/NavbarToggleButton.vue?vue&type=script&lang=js&
/* harmony default export */ var NavbarToggleButtonvue_type_script_lang_js_ = ({
  name: 'navbar-toggle-button'
});
// CONCATENATED MODULE: ./src/components/Navbar/NavbarToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_NavbarToggleButtonvue_type_script_lang_js_ = (NavbarToggleButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Navbar/NavbarToggleButton.vue





/* normalize component */

var NavbarToggleButton_component = Object(componentNormalizer["a" /* default */])(
  Navbar_NavbarToggleButtonvue_type_script_lang_js_,
  NavbarToggleButtonvue_type_template_id_5f2303bb_render,
  NavbarToggleButtonvue_type_template_id_5f2303bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavbarToggleButton = (NavbarToggleButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=040cd698&
var Breadcrumbvue_type_template_id_040cd698_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"breadcrumb",class:{ 'bg-transparent': _vm.transparent }},[_vm._t("default")],2)}
var Breadcrumbvue_type_template_id_040cd698_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue?vue&type=template&id=040cd698&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'breadcrumb',
  props: {
    transparent: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Breadcrumb/Breadcrumb.vue





/* normalize component */

var Breadcrumb_component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_Breadcrumbvue_type_script_lang_js_,
  Breadcrumbvue_type_template_id_040cd698_render,
  Breadcrumbvue_type_template_id_040cd698_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Breadcrumb = (Breadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=6c486a29&
var BreadcrumbItemvue_type_template_id_6c486a29_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"breadcrumb-item",class:{ active: _vm.active }},[_vm._t("default")],2)}
var BreadcrumbItemvue_type_template_id_6c486a29_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=6c486a29&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
/* harmony default export */ var BreadcrumbItemvue_type_script_lang_js_ = ({
  name: 'breadcrumb-item',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Whether breadcrumb item is active'
    }
  }
});
// CONCATENATED MODULE: ./src/components/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_BreadcrumbItemvue_type_script_lang_js_ = (BreadcrumbItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Breadcrumb/BreadcrumbItem.vue





/* normalize component */

var BreadcrumbItem_component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_BreadcrumbItemvue_type_script_lang_js_,
  BreadcrumbItemvue_type_template_id_6c486a29_render,
  BreadcrumbItemvue_type_template_id_6c486a29_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BreadcrumbItem = (BreadcrumbItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/RouteBreadcrumb.vue?vue&type=template&id=34482f5f&scoped=true&
var RouteBreadcrumbvue_type_template_id_34482f5f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bread-crumb',_vm._l((_vm.$route.matched.slice()),function(route,index){return _c('BreadCrumbItem',{key:route.name,staticStyle:{"display":"inline-block"}},[(index < _vm.$route.matched.length - 1)?_c('router-link',{staticClass:"breadcrumb-link",attrs:{"to":{ name: route.name }}},[_vm._v(" "+_vm._s(route.name)+" ")]):_c('span',{staticClass:"breadcrumb-current"},[_vm._v(_vm._s(route.name))])],1)}),1)}
var RouteBreadcrumbvue_type_template_id_34482f5f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Breadcrumb/RouteBreadcrumb.vue?vue&type=template&id=34482f5f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/RouteBreadcrumb.vue?vue&type=script&lang=js&



/* harmony default export */ var RouteBreadcrumbvue_type_script_lang_js_ = ({
  name: 'route-breadcrumb',
  components: {
    BreadCrumb: Breadcrumb,
    BreadCrumbItem: BreadcrumbItem
  },
  methods: {
    getBreadName: function getBreadName(route) {
      return route.name;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Breadcrumb/RouteBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_RouteBreadcrumbvue_type_script_lang_js_ = (RouteBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Breadcrumb/RouteBreadcrumb.vue





/* normalize component */

var RouteBreadcrumb_component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_RouteBreadcrumbvue_type_script_lang_js_,
  RouteBreadcrumbvue_type_template_id_34482f5f_scoped_true_render,
  RouteBreadcrumbvue_type_template_id_34482f5f_scoped_true_staticRenderFns,
  false,
  null,
  "34482f5f",
  null
  
)

/* harmony default export */ var RouteBreadcrumb = (RouteBreadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageUpload.vue?vue&type=template&id=641c4b84&
var ImageUploadvue_type_template_id_641c4b84_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fileinput text-center"},[_c('div',{staticClass:"fileinput-new thumbnail",class:{ 'img-circle': _vm.type === 'avatar' }},[_c('img',{attrs:{"src":_vm.image,"alt":"preview"}})]),_c('div',[_c('span',{staticClass:"btn btn-primary btn-simple btn-file"},[_c('span',{staticClass:"fileinput-new"},[_vm._v(_vm._s(_vm.fileExists ? _vm.changeText : _vm.selectText))]),_c('input',{attrs:{"type":"hidden","value":"","name":""}}),_c('input',{staticClass:"valid",attrs:{"accept":"image/*","type":"file","name":"...","multiple":false,"aria-invalid":"false"},on:{"change":_vm.handlePreview}})]),(_vm.fileExists)?_c('base-button',{attrs:{"round":"","type":"danger"},on:{"click":_vm.removeFile}},[_c('i',{staticClass:"fas fa-times"}),_vm._v(" "+_vm._s(_vm.removeText)+" ")]):_vm._e()],1)])}
var ImageUploadvue_type_template_id_641c4b84_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImageUpload.vue?vue&type=template&id=641c4b84&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("2b3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageUpload.vue?vue&type=script&lang=js&




/* harmony default export */ var ImageUploadvue_type_script_lang_js_ = ({
  name: 'image-upload',
  props: {
    type: {
      type: String,
      default: '',
      description: 'Image upload type (""|avatar)'
    },
    src: {
      type: String,
      default: '',
      description: 'Initial image to display'
    },
    selectText: {
      type: String,
      default: 'Select image'
    },
    changeText: {
      type: String,
      default: 'Change'
    },
    removeText: {
      type: String,
      default: 'Remove'
    }
  },
  data: function data() {
    var avatarPlaceholder = 'img/placeholder.jpg';
    var imgPlaceholder = 'img/image_placeholder.jpg';
    return {
      placeholder: this.type === 'avatar' ? avatarPlaceholder : imgPlaceholder,
      imagePreview: null
    };
  },
  computed: {
    fileExists: function fileExists() {
      return this.imagePreview !== null;
    },
    image: function image() {
      return this.imagePreview || this.src || this.placeholder;
    }
  },
  methods: {
    handlePreview: function handlePreview(event) {
      var file = event.target.files[0];
      this.imagePreview = URL.createObjectURL(file);
      this.$emit('change', file);
    },
    removeFile: function removeFile() {
      this.imagePreview = null;
      this.$emit('change', null);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ImageUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageUploadvue_type_script_lang_js_ = (ImageUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ImageUpload.vue





/* normalize component */

var ImageUpload_component = Object(componentNormalizer["a" /* default */])(
  components_ImageUploadvue_type_script_lang_js_,
  ImageUploadvue_type_template_id_641c4b84_render,
  ImageUploadvue_type_template_id_641c4b84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImageUpload = (ImageUpload_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline/TimeLine.vue?vue&type=template&id=0e1cb4fc&
var TimeLinevue_type_template_id_0e1cb4fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',{staticClass:"card-timeline card-plain"},[_c('ul',{staticClass:"timeline",class:{ 'timeline-simple': _vm.type === 'simple' }},[_vm._t("default")],2)])}
var TimeLinevue_type_template_id_0e1cb4fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Timeline/TimeLine.vue?vue&type=template&id=0e1cb4fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline/TimeLine.vue?vue&type=script&lang=js&
/* harmony default export */ var TimeLinevue_type_script_lang_js_ = ({
  name: 'time-line',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/Timeline/TimeLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var Timeline_TimeLinevue_type_script_lang_js_ = (TimeLinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Timeline/TimeLine.vue





/* normalize component */

var TimeLine_component = Object(componentNormalizer["a" /* default */])(
  Timeline_TimeLinevue_type_script_lang_js_,
  TimeLinevue_type_template_id_0e1cb4fc_render,
  TimeLinevue_type_template_id_0e1cb4fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TimeLine = (TimeLine_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline/TimeLineItem.vue?vue&type=template&id=6ce2e0cb&
var TimeLineItemvue_type_template_id_6ce2e0cb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:{ 'timeline-inverted': _vm.inverted }},[_vm._t("badge",[_c('div',{staticClass:"timeline-badge",class:_vm.badgeType},[_c('i',{class:_vm.badgeIcon})])]),_c('div',{staticClass:"timeline-panel"},[_c('div',{staticClass:"timeline-heading"},[_vm._t("header")],2),(_vm.$slots.content)?_c('div',{staticClass:"timeline-body"},[_vm._t("content")],2):_vm._e(),(_vm.$slots.footer)?_c('div',{staticClass:"timeline-footer"},[_vm._t("footer")],2):_vm._e()])],2)}
var TimeLineItemvue_type_template_id_6ce2e0cb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Timeline/TimeLineItem.vue?vue&type=template&id=6ce2e0cb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline/TimeLineItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TimeLineItemvue_type_script_lang_js_ = ({
  name: 'time-line-item',
  props: {
    inverted: Boolean,
    badgeType: {
      type: String,
      default: 'success'
    },
    badgeIcon: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/Timeline/TimeLineItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Timeline_TimeLineItemvue_type_script_lang_js_ = (TimeLineItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Timeline/TimeLineItem.vue





/* normalize component */

var TimeLineItem_component = Object(componentNormalizer["a" /* default */])(
  Timeline_TimeLineItemvue_type_script_lang_js_,
  TimeLineItemvue_type_template_id_6ce2e0cb_render,
  TimeLineItemvue_type_template_id_6ce2e0cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TimeLineItem = (TimeLineItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/Tab.vue?vue&type=template&id=795947bc&
var Tabvue_type_template_id_795947bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tab-pane",class:{ active: _vm.active },attrs:{"id":_vm.id || _vm.label,"aria-expanded":_vm.active}},[_vm._t("default")],2)}
var Tabvue_type_template_id_795947bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tabs/Tab.vue?vue&type=template&id=795947bc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/Tab.vue?vue&type=script&lang=js&
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  name: 'tab-pane',
  props: ['label', 'id'],
  inject: ['addTab', 'removeTab'],
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    this.addTab(this);
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeTab(this);
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tabs/Tab.vue





/* normalize component */

var Tab_component = Object(componentNormalizer["a" /* default */])(
  Tabs_Tabvue_type_script_lang_js_,
  Tabvue_type_template_id_795947bc_render,
  Tabvue_type_template_id_795947bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tab = (Tab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/Tabs.vue?vue&type=template&id=116d7b87&scoped=true&
var Tabsvue_type_template_id_116d7b87_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:[
      { 'col-md-4': _vm.vertical && !_vm.tabNavWrapperClasses },
      { 'col-12': _vm.centered && !_vm.tabNavWrapperClasses },
      _vm.tabNavWrapperClasses
    ]},[_c('ul',{staticClass:"nav nav-pills",class:[
        ("nav-pills-" + _vm.type),
        { 'nav-pills-icons': _vm.square },
        { 'flex-column': _vm.vertical },
        { 'justify-content-center': _vm.centered },
        _vm.tabNavClasses
      ],attrs:{"role":"tablist"}},_vm._l((_vm.tabs),function(tab){return _c('li',{key:tab.id,staticClass:"nav-item active",attrs:{"data-toggle":"tab","role":"tablist","aria-expanded":"true"}},[_c('a',{staticClass:"nav-link",class:{ active: tab.active },attrs:{"data-toggle":"tab","role":"tablist","href":("#" + (tab.id)),"aria-expanded":tab.active},on:{"click":function($event){$event.preventDefault();return _vm.activateTab(tab)}}},[_c('tab-item-content',{attrs:{"tab":tab}})],1)])}),0)]),_c('div',{staticClass:"tab-content",class:[
      { 'tab-space': !_vm.vertical },
      { 'col-md-8': _vm.vertical && !_vm.tabContentClasses },
      _vm.tabContentClasses
    ]},[_vm._t("default")],2)])}
var Tabsvue_type_template_id_116d7b87_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue?vue&type=template&id=116d7b87&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/Tabs.vue?vue&type=script&lang=js&






/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: 'tabs',
  components: {
    TabItemContent: {
      props: ['tab'],
      render: function render(h) {
        return h('div', [this.tab.$slots.label || this.tab.label]);
      }
    }
  },
  provide: function provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: function validator(value) {
        var acceptedValues = ['primary', 'info', 'success', 'warning', 'danger'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    activeTab: {
      type: String,
      default: ''
    },
    tabNavWrapperClasses: {
      type: [String, Object],
      default: ''
    },
    tabNavClasses: {
      type: [String, Object],
      default: ''
    },
    tabContentClasses: {
      type: [String, Object],
      default: ''
    },
    vertical: Boolean,
    square: Boolean,
    centered: Boolean,
    value: String
  },
  data: function data() {
    return {
      tabs: []
    };
  },
  methods: {
    findAndActivateTab: function findAndActivateTab(label) {
      var tabToActivate = this.tabs.find(function (t) {
        return t.label === label;
      });

      if (tabToActivate) {
        this.activateTab(tabToActivate);
      }
    },
    activateTab: function activateTab(tab) {
      if (this.handleClick) {
        this.handleClick(tab);
      }

      this.deactivateTabs();
      tab.active = true;
    },
    deactivateTabs: function deactivateTabs() {
      this.tabs.forEach(function (tab) {
        tab.active = false;
      });
    },
    addTab: function addTab(tab) {
      var index = this.$slots.default.indexOf(tab.$vnode);

      if (!this.activeTab && index === 0) {
        tab.active = true;
      }

      if (this.activeTab === tab.name) {
        tab.active = true;
      }

      this.tabs.splice(index, 0, tab);
    },
    removeTab: function removeTab(tab) {
      var tabs = this.tabs;
      var index = tabs.indexOf(tab);

      if (index > -1) {
        tabs.splice(index, 1);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.value) {
        _this.findAndActivateTab(_this.value);
      }
    });
  },
  watch: {
    value: function value(newVal) {
      this.findAndActivateTab(newVal);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue





/* normalize component */

var Tabs_component = Object(componentNormalizer["a" /* default */])(
  Tabs_Tabsvue_type_script_lang_js_,
  Tabsvue_type_template_id_116d7b87_scoped_true_render,
  Tabsvue_type_template_id_116d7b87_scoped_true_staticRenderFns,
  false,
  null,
  "116d7b87",
  null
  
)

/* harmony default export */ var Tabs = (Tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Collapse/Collapse.vue?vue&type=template&id=4e924ab0&scoped=true&
var Collapsevue_type_template_id_4e924ab0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-collapse",attrs:{"id":"accordion","role":"tablist","aria-multiselectable":"true"}},[_vm._t("default")],2)}
var Collapsevue_type_template_id_4e924ab0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Collapse/Collapse.vue?vue&type=template&id=4e924ab0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Collapse/Collapse.vue?vue&type=script&lang=js&





/* harmony default export */ var Collapsevue_type_script_lang_js_ = ({
  name: 'collapse',
  props: {
    animationDuration: {
      type: Number,
      default: 250
    },
    multipleActive: {
      type: Boolean,
      default: true
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  provide: function provide() {
    return {
      animationDuration: this.animationDuration,
      multipleActive: this.multipleActive,
      addItem: this.addItem,
      removeItem: this.removeItem,
      deactivateAll: this.deactivateAll
    };
  },
  data: function data() {
    return {
      items: []
    };
  },
  methods: {
    addItem: function addItem(item) {
      var index = this.$slots.default.indexOf(item.$vnode);

      if (index !== -1) {
        this.items.splice(index, 0, item);
      }
    },
    removeItem: function removeItem(item) {
      var items = this.items;
      var index = items.indexOf(item);

      if (index > -1) {
        items.splice(index, 1);
      }
    },
    deactivateAll: function deactivateAll() {
      this.items.forEach(function (item) {
        item.active = false;
      });
    },
    activateItem: function activateItem() {
      if (this.activeIndex !== -1) {
        this.items[this.activeIndex].active = true;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.activateItem();
    });
  },
  watch: {
    activeIndex: function activeIndex() {
      this.activateItem();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Collapse/Collapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var Collapse_Collapsevue_type_script_lang_js_ = (Collapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Collapse/Collapse.vue





/* normalize component */

var Collapse_component = Object(componentNormalizer["a" /* default */])(
  Collapse_Collapsevue_type_script_lang_js_,
  Collapsevue_type_template_id_4e924ab0_scoped_true_render,
  Collapsevue_type_template_id_4e924ab0_scoped_true_staticRenderFns,
  false,
  null,
  "4e924ab0",
  null
  
)

/* harmony default export */ var Collapse = (Collapse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Collapse/CollapseItem.vue?vue&type=template&id=a8891474&
var CollapseItemvue_type_template_id_a8891474_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card card-plain"},[_c('div',{staticClass:"card-header",attrs:{"role":"tab","id":"headingOne"}},[_c('a',{attrs:{"data-toggle":"collapse","data-parent":"#accordion","href":("#" + _vm.itemId),"aria-expanded":_vm.active,"aria-controls":("content-" + _vm.itemId)},on:{"click":function($event){$event.preventDefault();return _vm.activate($event)}}},[_vm._t("title",[_vm._v(" "+_vm._s(_vm.title)+" ")]),_c('i',{staticClass:"tim-icons icon-minimal-down"})],2)]),_c('collapse-transition',{attrs:{"duration":_vm.animationDuration}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"collapsed",attrs:{"id":("content-" + _vm.itemId),"role":"tabpanel","aria-labelledby":_vm.title}},[_c('div',{staticClass:"card-body"},[_vm._t("default")],2)])])],1)}
var CollapseItemvue_type_template_id_a8891474_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Collapse/CollapseItem.vue?vue&type=template&id=a8891474&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Collapse/CollapseItem.vue?vue&type=script&lang=js&

/* harmony default export */ var CollapseItemvue_type_script_lang_js_ = ({
  name: 'collapse-item',
  components: {
    CollapseTransition: vue2_transitions_m["a" /* CollapseTransition */]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    id: String
  },
  inject: {
    animationDuration: {
      default: 250
    },
    multipleActive: {
      default: false
    },
    addItem: {
      default: function _default() {}
    },
    removeItem: {
      default: function _default() {}
    },
    deactivateAll: {
      default: function _default() {}
    }
  },
  computed: {
    itemId: function itemId() {
      return this.id || this.title;
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  methods: {
    activate: function activate() {
      var wasActive = this.active;

      if (!this.multipleActive) {
        this.deactivateAll();
      }

      this.active = !wasActive;
    }
  },
  mounted: function mounted() {
    this.addItem(this);
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeItem(this);
  }
});
// CONCATENATED MODULE: ./src/components/Collapse/CollapseItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Collapse_CollapseItemvue_type_script_lang_js_ = (CollapseItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Collapse/CollapseItem.vue





/* normalize component */

var CollapseItem_component = Object(componentNormalizer["a" /* default */])(
  Collapse_CollapseItemvue_type_script_lang_js_,
  CollapseItemvue_type_template_id_a8891474_render,
  CollapseItemvue_type_template_id_a8891474_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CollapseItem = (CollapseItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=template&id=0efd7667&
var Modalvue_type_template_id_0efd7667_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SlideYUpTransition',{attrs:{"duration":_vm.animationDuration}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"modal",staticClass:"modal fade",class:[
      { 'show d-block': _vm.show },
      { 'd-none': !_vm.show },
      { 'modal-mini': _vm.type === 'mini' }
    ],attrs:{"tabindex":"-1","role":"dialog","aria-hidden":!_vm.show},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.closeModal($event)}}},[_c('div',{staticClass:"modal-dialog",class:[
        { 'modal-notice': _vm.type === 'notice' },
        { 'modal-dialog-centered': _vm.centered },
        _vm.modalClasses
      ],attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content",class:[
          _vm.gradient ? ("bg-gradient-" + _vm.gradient) : '',
          _vm.modalContentClasses
        ]},[(_vm.$slots.header)?_c('div',{staticClass:"modal-header",class:[_vm.headerClasses]},[_vm._t("header"),_vm._t("close-button",[(_vm.showClose)?_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeModal}},[_c('i',{staticClass:"tim-icons icon-simple-remove"})]):_vm._e()])],2):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"modal-body",class:_vm.bodyClasses},[_vm._t("default")],2):_vm._e(),(_vm.$slots.footer)?_c('div',{staticClass:"modal-footer",class:_vm.footerClasses},[_vm._t("footer")],2):_vm._e()])])])])}
var Modalvue_type_template_id_0efd7667_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=template&id=0efd7667&

// EXTERNAL MODULE: ./src/plugins/event-bus.js
var event_bus = __webpack_require__("e00b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=script&lang=js&




/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'modal',
  components: {
    SlideYUpTransition: vue2_transitions_m["d" /* SlideYUpTransition */]
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    centered: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true,
      description: 'Whether modal should be appended to document body'
    },
    scrollToBottom: {
      type: Boolean,
      default: true,
      description: "Whether modal should scroll to it's bottom automatically"
    },
    type: {
      type: String,
      default: '',
      validator: function validator(value) {
        var acceptedValues = ['', 'notice', 'mini'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: 'Modal dialog css classes'
    },
    modalContentClasses: {
      type: [Object, String],
      description: 'Modal dialog content css classes'
    },
    gradient: {
      type: String,
      description: 'Modal gradient type (danger, primary etc)'
    },
    headerClasses: {
      type: [Object, String],
      description: 'Modal Header css classes'
    },
    bodyClasses: {
      type: [Object, String],
      description: 'Modal Body css classes'
    },
    footerClasses: {
      type: [Object, String],
      description: 'Modal Footer css classes'
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: 'Modal transition duration'
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('update:show', false);
      this.$emit('close');
      event_bus["a" /* default */].emit('close:modal');
    },
    scrollModalToBottom: function scrollModalToBottom() {
      if (!this.scrollToBottom) return;
      var elm = this.$refs.modal;
      elm.scrollTop = elm.scrollHeight - elm.clientHeight;
    }
  },
  mounted: function mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  },
  destroyed: function destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  watch: {
    show: function show(val) {
      var documentClasses = document.body.classList;

      if (val) {
        documentClasses.add('modal-open');
        this.$nextTick(this.scrollModalToBottom);
      } else {
        documentClasses.remove('modal-open');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal.vue?vue&type=style&index=0&lang=css&
var Modalvue_type_style_index_0_lang_css_ = __webpack_require__("22d7");

// CONCATENATED MODULE: ./src/components/Modal.vue






/* normalize component */

var Modal_component = Object(componentNormalizer["a" /* default */])(
  components_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_0efd7667_render,
  Modalvue_type_template_id_0efd7667_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slider.vue?vue&type=template&id=6b7b8665&
var Slidervue_type_template_id_6b7b8665_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider",class:[("slider-" + _vm.type)],attrs:{"disabled":_vm.disabled}})}
var Slidervue_type_template_id_6b7b8665_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Slider.vue?vue&type=template&id=6b7b8665&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__("a623");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/nouislider/distribute/nouislider.js
var nouislider = __webpack_require__("e9fa");
var nouislider_default = /*#__PURE__*/__webpack_require__.n(nouislider);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slider.vue?vue&type=script&lang=js&




/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  name: 'slider',
  props: {
    value: {
      type: [String, Array, Number],
      description: 'slider value'
    },
    disabled: {
      type: Boolean,
      default: false,
      description: 'whether the slider is disabled'
    },
    start: {
      type: [Number, Array],
      default: 0,
      description: '[noUi Slider start](https://refreshless.com/nouislider/slider-options/#section-start)'
    },
    connect: {
      type: [Boolean, Array],
      default: function _default() {
        return [true, false];
      },
      description: '[noUi Slider connect](https://refreshless.com/nouislider/slider-options/#section-connect)'
    },
    range: {
      type: Object,
      default: function _default() {
        return {
          min: 0,
          max: 100
        };
      },
      description: '[noUi Slider range](https://refreshless.com/nouislider/slider-values/#section-range)'
    },
    type: {
      type: String,
      default: '',
      description: 'slider type (color) '
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      },
      description: '[noUi Slider options](https://refreshless.com/nouislider/slider-options/)'
    }
  },
  data: function data() {
    return {
      slider: null
    };
  },
  methods: {
    createSlider: function createSlider() {
      var _this = this;

      nouislider_default.a.create(this.$el, Object(objectSpread2["a" /* default */])({
        start: this.value || this.start,
        connect: this.connect,
        range: this.range
      }, this.options));
      var slider = this.$el.noUiSlider;
      slider.on('slide', function () {
        var value = slider.get();

        if (value !== _this.value) {
          _this.$emit('input', value);
        }
      });
    }
  },
  mounted: function mounted() {
    this.createSlider();
  },
  watch: {
    value: function value(newValue, oldValue) {
      var slider = this.$el.noUiSlider;
      var sliderValue = slider.get();

      if (newValue !== oldValue && sliderValue !== newValue) {
        if (Array.isArray(sliderValue) && Array.isArray(newValue)) {
          if (oldValue.length === newValue.length && oldValue.every(function (v, i) {
            return v === newValue[i];
          })) {
            slider.set(newValue);
          }
        } else {
          slider.set(newValue);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Slider.vue





/* normalize component */

var Slider_component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  Slidervue_type_template_id_6b7b8665_render,
  Slidervue_type_template_id_6b7b8665_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Slider = (Slider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wizard/Wizard.vue?vue&type=template&id=1a4ec321&
var Wizardvue_type_template_id_1a4ec321_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-container"},[_c('div',{staticClass:"card card-wizard active",attrs:{"id":"wizardProfile"}},[_c('form',{on:{"submit":function($event){$event.preventDefault();}}},[_c('div',{staticClass:"card-header text-center"},[_vm._t("header",[(_vm.title)?_c('h3',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.subTitle)?_c('h5',{staticClass:"description"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e()]),_c('div',{staticClass:"wizard-navigation"},[_c('div',{staticClass:"progress-with-circle"},[_c('div',{staticClass:"progress-bar",style:({ width: (_vm.progress + "%") }),attrs:{"role":"progressbar","aria-valuenow":"1","aria-valuemin":"1","aria-valuemax":"3"}})]),_c('ul',{staticClass:"nav nav-pills"},_vm._l((_vm.tabs),function(tab,index){return _c('li',{key:tab.title,ref:("tab-" + index),refInFor:true,staticClass:"nav-item wizard-tab-link",style:(_vm.linkWidth),attrs:{"role":"tab","tabindex":tab.checked ? 0 : '',"id":("step-" + (tab.tabId)),"aria-controls":tab.tabId,"aria-disabled":!tab.active,"aria-selected":tab.active}},[_c('a',{staticClass:"nav-link",class:[
                  { 'disabled-wizard-link': !tab.checked },
                  { active: tab.active },
                  { checked: tab.checked }
                ],attrs:{"data-toggle":"tab"},on:{"click":function($event){return _vm.navigateToTab(index)}}},[_c('tab-item-content',{attrs:{"tab":tab}})],1)])}),0)])],2),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"tab-content"},[_vm._t("default",null,{"activeIndex":_vm.activeTabIndex,"activeTab":_vm.activeTab})],2)]),_c('div',{staticClass:"card-footer"},[_vm._t("footer",[_c('div',{staticClass:"pull-right"},[(_vm.activeTabIndex < _vm.tabCount - 1)?_c('base-button',{staticClass:"btn-next",attrs:{"type":"primary","wide":""},nativeOn:{"click":function($event){return _vm.nextTab($event)}}},[_vm._v(" "+_vm._s(_vm.nextButtonText)+" ")]):_c('base-button',{attrs:{"wide":""},nativeOn:{"click":function($event){return _vm.nextTab($event)}}},[_vm._v(_vm._s(_vm.finishButtonText))])],1),_c('div',{staticClass:"pull-left"},[(_vm.activeTabIndex > 0)?_c('base-button',{staticClass:"btn-previous",attrs:{"wide":"","type":"primary"},nativeOn:{"click":function($event){return _vm.prevTab($event)}}},[_vm._v(" "+_vm._s(_vm.prevButtonText)+" ")]):_vm._e()],1),_c('div',{staticClass:"clearfix"})],{"nextTab":_vm.nextTab,"prevTab":_vm.prevTab})],2)])])])}
var Wizardvue_type_template_id_1a4ec321_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wizard/Wizard.vue?vue&type=template&id=1a4ec321&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./src/components/Wizard/throttle.js
function throttle(handlerFunc) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
  var resizeTimeout;

  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      handlerFunc();
    }, timeout);
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wizard/Wizard.vue?vue&type=script&lang=js&











/* harmony default export */ var Wizardvue_type_script_lang_js_ = ({
  name: 'simple-wizard',
  props: {
    startIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Subtitle'
    },
    prevButtonText: {
      type: String,
      default: 'Previous'
    },
    nextButtonText: {
      type: String,
      default: 'Next'
    },
    finishButtonText: {
      type: String,
      default: 'Finish'
    },
    vertical: {
      type: Boolean
    }
  },
  components: {
    TabItemContent: {
      functional: true,
      props: ['tab'],
      render: function render(h, _ref) {
        var props = _ref.props;
        var content = props.tab.$slots.label;

        if (content && content.length) {
          return content;
        }

        return h('span', [props.tab.$slots.label, props.tab.label]);
      }
    }
  },
  provide: function provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },
  data: function data() {
    return {
      tabs: [],
      activeTabIndex: 0,
      tabLinkWidth: 0,
      tabLinkHeight: 50
    };
  },
  computed: {
    tabCount: function tabCount() {
      return this.tabs.length;
    },
    linkWidth: function linkWidth() {
      var width = 100;

      if (this.tabCount > 0) {
        width = 100 / this.tabCount;
      }

      if (this.vertical) {
        width = 100;
      }

      return {
        width: "".concat(width, "%")
      };
    },
    activeTab: function activeTab() {
      return this.tabs[this.activeTabIndex];
    },
    stepPercentage: function stepPercentage() {
      return 1 / (this.tabCount * 2) * 100;
    },
    progress: function progress() {
      var percentage = 0;

      if (this.activeTabIndex > 0) {
        var stepsToAdd = 1;
        var stepMultiplier = 2;
        percentage = this.stepPercentage * (this.activeTabIndex * stepMultiplier + stepsToAdd);
      } else {
        percentage = this.stepPercentage;
      }

      return percentage;
    }
  },
  methods: {
    addTab: function addTab(tab) {
      var index = this.$slots.default.indexOf(tab.$vnode);
      var tabTitle = tab.title || '';
      tab.tabId = "".concat(tabTitle.replace(/ /g, '')).concat(index);

      if (!this.activeTab && index === 0) {
        tab.active = true;
        tab.checked = true;
      }

      if (this.activeTab === tab.name) {
        tab.active = true;
        tab.checked = true;
      }

      this.tabs.splice(index, 0, tab);
    },
    removeTab: function removeTab(tab) {
      var tabs = this.tabs;
      var index = tabs.indexOf(tab);

      if (index > -1) {
        tabs.splice(index, 1);
      }
    },
    validate: function validate(tab) {
      var _this = this;

      var tabToValidate = tab || this.activeTab;
      var beforeChange = tabToValidate.beforeChange;

      if (beforeChange) {
        return Promise.resolve(beforeChange()).then(function (res) {
          _this.activeTab.hasError = res ? false : true;
          return res;
        }).catch(function () {
          _this.activeTab.hasError = true;
        });
      } else {
        return Promise.resolve(true);
      }
    },
    nextTab: function nextTab() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var isValid;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.validate();

              case 2:
                isValid = _context.sent;

                if (isValid && _this2.activeTabIndex < _this2.tabCount - 1) {
                  _this2.activeTabIndex++;
                }

                return _context.abrupt("return", isValid);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    prevTab: function prevTab() {
      this.activeTabIndex--;
    },
    navigateToTab: function navigateToTab(index) {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var valid;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.tabs[index].checked) {
                  _context2.next = 9;
                  break;
                }

                if (!(index > _this3.activeTabIndex)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return _this3.nextTab();

              case 4:
                valid = _context2.sent;

                if (valid) {
                  _this3.navigateToTab(index);
                }

                _context2.next = 9;
                break;

              case 8:
                _this3.activeTabIndex = index;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onResize: function onResize() {
      var tabLinks = document.getElementsByClassName('wizard-tab-link');

      if (tabLinks.length > 0 && this.tabCount > 0) {
        var _tabLinks$ = tabLinks[0],
            clientWidth = _tabLinks$.clientWidth,
            clientHeight = _tabLinks$.clientHeight;
        this.tabLinkWidth = clientWidth;
        this.tabLinkHeight = clientHeight;
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.activeTabIndex = this.startIndex;
    this.$nextTick(function () {
      _this4.tabs[_this4.activeTabIndex].active = true;
      _this4.tabs[_this4.activeTabIndex].checked = true;

      _this4.onResize();
    });
    window.addEventListener('resize', function () {
      throttle(_this4.onResize, 40);
    }, false);
  },
  watch: {
    activeTabIndex: function activeTabIndex(newValue, oldValue) {
      if (newValue !== oldValue) {
        var oldTab = this.tabs[oldValue];
        var newTab = this.tabs[newValue];
        oldTab.active = false;
        newTab.active = true;

        if (!newTab.checked) {
          newTab.checked = true;
        }

        this.$emit('tab-change', oldTab, newTab);
        this.$emit('update:startIndex', newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wizard/Wizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_Wizardvue_type_script_lang_js_ = (Wizardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Wizard/Wizard.vue?vue&type=style&index=0&lang=scss&
var Wizardvue_type_style_index_0_lang_scss_ = __webpack_require__("4e5d");

// CONCATENATED MODULE: ./src/components/Wizard/Wizard.vue






/* normalize component */

var Wizard_component = Object(componentNormalizer["a" /* default */])(
  Wizard_Wizardvue_type_script_lang_js_,
  Wizardvue_type_template_id_1a4ec321_render,
  Wizardvue_type_template_id_1a4ec321_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Wizard = (Wizard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wizard/WizardTab.vue?vue&type=template&id=5331bd0f&
var WizardTabvue_type_template_id_5331bd0f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tab-pane fade",class:{ 'active show': _vm.active },attrs:{"role":"tabpanel","id":_vm.tabId,"aria-hidden":!_vm.active,"aria-labelledby":("step-" + _vm.tabId)}},[_vm._t("default")],2)}
var WizardTabvue_type_template_id_5331bd0f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wizard/WizardTab.vue?vue&type=template&id=5331bd0f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wizard/WizardTab.vue?vue&type=script&lang=js&
/* harmony default export */ var WizardTabvue_type_script_lang_js_ = ({
  name: 'wizard-tab',
  props: {
    label: String,
    id: String,
    beforeChange: Function
  },
  inject: ['addTab', 'removeTab'],
  data: function data() {
    return {
      active: false,
      checked: false,
      hasError: false,
      tabId: ''
    };
  },
  mounted: function mounted() {
    this.addTab(this);
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeTab(this);
  }
});
// CONCATENATED MODULE: ./src/components/Wizard/WizardTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wizard_WizardTabvue_type_script_lang_js_ = (WizardTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wizard/WizardTab.vue





/* normalize component */

var WizardTab_component = Object(componentNormalizer["a" /* default */])(
  Wizard_WizardTabvue_type_script_lang_js_,
  WizardTabvue_type_template_id_5331bd0f_render,
  WizardTabvue_type_template_id_5331bd0f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardTab = (WizardTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingPanel.vue?vue&type=template&id=2f96ab9f&
var LoadingPanelvue_type_template_id_2f96ab9f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(true),expression:"true"}],staticClass:"row",attrs:{"id":"loading"}})}
var LoadingPanelvue_type_template_id_2f96ab9f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingPanel.vue?vue&type=template&id=2f96ab9f&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/loading.css
var loading = __webpack_require__("be4f");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/loading.js
var lib_loading = __webpack_require__("896a");
var lib_loading_default = /*#__PURE__*/__webpack_require__.n(lib_loading);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingPanel.vue?vue&type=script&lang=js&




vue_runtime_esm["default"].use(lib_loading_default.a.directive);
/* harmony default export */ var LoadingPanelvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/LoadingPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoadingPanelvue_type_script_lang_js_ = (LoadingPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LoadingPanel.vue?vue&type=style&index=0&lang=css&
var LoadingPanelvue_type_style_index_0_lang_css_ = __webpack_require__("c9d8");

// CONCATENATED MODULE: ./src/components/LoadingPanel.vue






/* normalize component */

var LoadingPanel_component = Object(componentNormalizer["a" /* default */])(
  components_LoadingPanelvue_type_script_lang_js_,
  LoadingPanelvue_type_template_id_2f96ab9f_render,
  LoadingPanelvue_type_template_id_2f96ab9f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoadingPanel = (LoadingPanel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasePagination.vue?vue&type=template&id=86932264&
var BasePaginationvue_type_template_id_86932264_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"pagination",class:_vm.paginationClass},[(_vm.showArrows)?_c('li',{staticClass:"page-item prev-page",class:{ disabled: _vm.value === 1 }},[_c('a',{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{"click":_vm.prevPage}},[_c('i',{staticClass:"tim-icons icon-double-left",attrs:{"aria-hidden":"true"}})])]):_vm._e(),_vm._l((_vm.range(_vm.minPage, _vm.maxPage)),function(item){return _c('li',{key:item,staticClass:"page-item",class:{ active: _vm.value === item }},[_c('a',{staticClass:"page-link",on:{"click":function($event){return _vm.changePage(item)}}},[_vm._v(_vm._s(item))])])}),(_vm.showArrows)?_c('li',{staticClass:"page-item page-pre next-page",class:{ disabled: _vm.value === _vm.totalPages }},[_c('a',{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{"click":_vm.nextPage}},[_c('i',{staticClass:"tim-icons icon-double-right",attrs:{"aria-hidden":"true"}})])]):_vm._e()],2)}
var BasePaginationvue_type_template_id_86932264_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasePagination.vue?vue&type=template&id=86932264&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasePagination.vue?vue&type=script&lang=js&


/* harmony default export */ var BasePaginationvue_type_script_lang_js_ = ({
  name: 'base-pagination',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: function validator(value) {
        return ['default', 'primary', 'danger', 'success', 'warning', 'info'].includes(value);
      }
    },
    pageCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    },
    pagesToDisplay: {
      type: Number,
      default: 5
    }
  },
  computed: {
    paginationClass: function paginationClass() {
      return "pagination-".concat(this.type);
    },
    totalPages: function totalPages() {
      if (this.pageCount > 0) return this.pageCount;

      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }

      return 1;
    },
    defaultPagesToDisplay: function defaultPagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.pagesToDisplay) {
        return this.totalPages;
      }

      return this.pagesToDisplay;
    },
    minPage: function minPage() {
      if (this.value >= this.defaultPagesToDisplay) {
        var pagesToAdd = Math.floor(this.defaultPagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.defaultPagesToDisplay + 1;
        }

        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage: function maxPage() {
      if (this.value >= this.defaultPagesToDisplay) {
        var pagesToAdd = Math.floor(this.defaultPagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.defaultPagesToDisplay;
      }
    }
  },
  methods: {
    range: function range(min, max) {
      var arr = [];

      for (var i = min; i <= max; i++) {
        arr.push(i);
      }

      return arr;
    },
    changePage: function changePage(item) {
      this.$emit('input', item);
    },
    nextPage: function nextPage() {
      if (this.value < this.totalPages) {
        this.$emit('input', this.value + 1);
      }
    },
    prevPage: function prevPage() {
      if (this.value > 1) {
        this.$emit('input', this.value - 1);
      }
    }
  },
  watch: {
    perPage: function perPage() {
      this.$emit('input', 1);
    },
    total: function total() {
      this.$emit('input', 1);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasePaginationvue_type_script_lang_js_ = (BasePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BasePagination.vue





/* normalize component */

var BasePagination_component = Object(componentNormalizer["a" /* default */])(
  components_BasePaginationvue_type_script_lang_js_,
  BasePaginationvue_type_template_id_86932264_render,
  BasePaginationvue_type_template_id_86932264_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasePagination = (BasePagination_component.exports);
// EXTERNAL MODULE: ./src/components/SidebarPlugin/index.js + 10 modules
var SidebarPlugin = __webpack_require__("b290");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AnimatedNumber.vue?vue&type=template&id=3e0a3493&
var AnimatedNumbervue_type_template_id_3e0a3493_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v(_vm._s(_vm.animatedNumber))])}
var AnimatedNumbervue_type_template_id_3e0a3493_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AnimatedNumber.vue?vue&type=template&id=3e0a3493&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/tween.js/src/Tween.js
var Tween = __webpack_require__("3911");
var Tween_default = /*#__PURE__*/__webpack_require__.n(Tween);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AnimatedNumber.vue?vue&type=script&lang=js&



/* harmony default export */ var AnimatedNumbervue_type_script_lang_js_ = ({
  props: {
    value: {
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: function data() {
    return {
      animatedNumber: 0
    };
  },
  methods: {
    initAnimation: function initAnimation(newValue, oldValue) {
      var vm = this;

      function animate() {
        if (Tween_default.a.update()) {
          requestAnimationFrame(animate);
        }
      }

      new Tween_default.a.Tween({
        tweeningNumber: oldValue
      }).easing(Tween_default.a.Easing.Quadratic.Out).to({
        tweeningNumber: newValue
      }, this.duration).onUpdate(function () {
        vm.animatedNumber = this.tweeningNumber.toFixed(0);
      }).start();
      animate();
    }
  },
  mounted: function mounted() {
    this.initAnimation(this.value, 0);
  },
  watch: {
    number: function number(newValue, oldValue) {
      this.initAnimation(newValue, oldValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/AnimatedNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AnimatedNumbervue_type_script_lang_js_ = (AnimatedNumbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AnimatedNumber.vue





/* normalize component */

var AnimatedNumber_component = Object(componentNormalizer["a" /* default */])(
  components_AnimatedNumbervue_type_script_lang_js_,
  AnimatedNumbervue_type_template_id_3e0a3493_render,
  AnimatedNumbervue_type_template_id_3e0a3493_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AnimatedNumber = (AnimatedNumber_component.exports);
// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport BaseCheckbox */__webpack_require__.d(__webpack_exports__, "b", function() { return BaseCheckbox["a" /* default */]; });
/* unused concated harmony import IconCheckbox */
/* concated harmony reexport BaseSwitch */__webpack_require__.d(__webpack_exports__, "d", function() { return BaseSwitch; });
/* unused concated harmony import Badge */
/* concated harmony reexport BaseAlert */__webpack_require__.d(__webpack_exports__, "a", function() { return BaseAlert; });
/* unused concated harmony import BaseProgress */
/* unused concated harmony import BasePagination */
/* unused concated harmony import BaseRadio */
/* unused concated harmony import BaseInput */
/* unused concated harmony import TagsInput */
/* unused concated harmony import Card */
/* unused concated harmony import StatsCard */
/* unused concated harmony import BaseTable */
/* unused concated harmony import BaseDropdown */
/* unused concated harmony import ImageUpload */
/* unused concated harmony import SidebarPlugin */
/* concated harmony reexport BaseNav */__webpack_require__.d(__webpack_exports__, "c", function() { return BaseNav; });
/* unused concated harmony import NavbarToggleButton */
/* unused concated harmony import Breadcrumb */
/* unused concated harmony import BreadcrumbItem */
/* unused concated harmony import RouteBreadCrumb */
/* concated harmony reexport TimeLine */__webpack_require__.d(__webpack_exports__, "j", function() { return TimeLine; });
/* concated harmony reexport TimeLineItem */__webpack_require__.d(__webpack_exports__, "k", function() { return TimeLineItem; });
/* concated harmony reexport TabPane */__webpack_require__.d(__webpack_exports__, "h", function() { return Tab; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "i", function() { return Tabs; });
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "g", function() { return Modal; });
/* unused concated harmony import Slider */
/* unused concated harmony import SimpleWizard */
/* unused concated harmony import WizardTab */
/* unused concated harmony import AnimatedNumber */
/* unused concated harmony import BaseButton */
/* concated harmony reexport Collapse */__webpack_require__.d(__webpack_exports__, "e", function() { return Collapse; });
/* concated harmony reexport CollapseItem */__webpack_require__.d(__webpack_exports__, "f", function() { return CollapseItem; });
/* unused concated harmony import LoadingPanel */




































/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3f67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4a7");
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Object
    }
  },
  watch: {
    value: function value() {
      this.generate();
    },
    options: function options() {
      this.generate();
    }
  },
  mounted: function mounted() {
    this.generate();
  },
  render: function render(h) {
    return h('canvas', this.$slots.default);
  },
  methods: {
    generate: function generate() {
      var qr = new qrious__WEBPACK_IMPORTED_MODULE_0___default.a(Object.assign({
        element: this.$el,
        value: this.value
      }, this.options));
      return qr;
    }
  }
});

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "43a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a15b");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b680");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1da1");
/* harmony import */ var C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("d4ec");
/* harmony import */ var C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bee2");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("db49");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("e07d");
/* harmony import */ var sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("c1df");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("1c46");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sthjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8a0e");
/* harmony import */ var sthjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sthjs__WEBPACK_IMPORTED_MODULE_15__);

















var Wallet = function () {
  function Wallet() {
    Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Wallet);
  }

  Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Wallet, [{
    key: "getSthMarket",
    value: function () {
      var _getSthMarket = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee() {
        var currencies, markets, url, result, preparedData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currencies = ['BTC', 'ETH', 'RUB', 'CNY', 'USD', 'JPY', 'EUR', 'GBP', 'PLN', 'TRY', 'MXN', 'BRL', 'NZD', 'NOK', 'KRW'];
                markets = currencies.join(',');
                url = 'https://api.coinpaprika.com/v1/tickers/sth-smartholdem?quotes=' + markets;
                _context.prev = 3;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(url);

              case 6:
                result = _context.sent.data;
                preparedData = {
                  "STH": 1,
                  "BTC": result.quotes.BTC ? result.quotes.BTC.price.toFixed(8) * 1 : 0,
                  "ETH": result.quotes.ETH ? result.quotes.ETH.price.toFixed(8) * 1 : 0,
                  "RUB": result.quotes.RUB ? result.quotes.RUB.price.toFixed(3) * 1 : 0,
                  "CNY": result.quotes.CNY ? result.quotes.CNY.price.toFixed(4) * 1 : 0,
                  "USD": result.quotes.USD ? result.quotes.USD.price.toFixed(5) * 1 : 0,
                  "JPY": result.quotes.JPY ? result.quotes.JPY.price.toFixed(5) * 1 : 0,
                  "EUR": result.quotes.EUR ? result.quotes.EUR.price.toFixed(5) * 1 : 0,
                  "GBP": result.quotes.GBP ? result.quotes.GBP.price.toFixed(5) * 1 : 0,
                  "PLN": result.quotes.PLN ? result.quotes.PLN.price.toFixed(5) * 1 : 0,
                  "TRY": result.quotes.TRY ? result.quotes.TRY.price.toFixed(5) * 1 : 0,
                  "MXN": result.quotes.MXN ? result.quotes.MXN.price.toFixed(5) * 1 : 0,
                  "BRL": result.quotes.BRL ? result.quotes.BRL.price.toFixed(5) * 1 : 0,
                  "NZD": result.quotes.NZD ? result.quotes.NZD.price.toFixed(5) * 1 : 0,
                  "NOK": result.quotes.NOK ? result.quotes.NOK.price.toFixed(5) * 1 : 0,
                  "KRW": result.quotes.KRW ? result.quotes.KRW.price.toFixed(5) * 1 : 0
                };
                return _context.abrupt("return", preparedData);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", null);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      function getSthMarket() {
        return _getSthMarket.apply(this, arguments);
      }

      return getSthMarket;
    }()
  }, {
    key: "networkInit",
    value: function () {
      var _networkInit = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee2(ip) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.setPreferredNode(ip);
                sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.init('main');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function networkInit(_x) {
        return _networkInit.apply(this, arguments);
      }

      return networkInit;
    }()
  }, {
    key: "getPeers",
    value: function () {
      var _getPeers = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.setPreferredNode(_config__WEBPACK_IMPORTED_MODULE_10__["network"].NODE);
                sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.init('main');
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.getPeersList(function (error, success, response) {
                    if (error) {
                      reject(null);
                    } else {
                      resolve(response.peers);
                    }
                  });
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getPeers() {
        return _getPeers.apply(this, arguments);
      }

      return getPeers;
    }()
  }, {
    key: "getBestPeer",
    value: function () {
      var _getBestPeer = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee4() {
        var peers, availablePeers, i, peer, ping, bestPeer, _i;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getPeers();

              case 2:
                peers = _context4.sent;
                availablePeers = [];
                i = 0;

              case 5:
                if (!(i < peers.length)) {
                  _context4.next = 20;
                  break;
                }

                if (!(peers[i].status === 'OK' && peers[i].errors === 0)) {
                  _context4.next = 17;
                  break;
                }

                _context4.prev = 7;
                _context4.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('http://' + peers[i].ip + ':' + peers[i].port + '/api/peers/version');

              case 10:
                peer = _context4.sent.data;

                if (peer.success === true) {
                  availablePeers.push({
                    ip: peers[i].ip,
                    port: peers[i].port,
                    delay: peers[i].delay
                  });
                }

                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](7);
                console.log(_context4.t0);

              case 17:
                i++;
                _context4.next = 5;
                break;

              case 20:
                ping = 1000;
                bestPeer = {};

                for (_i = 0; _i < availablePeers.length; _i++) {
                  if (availablePeers[_i].delay < ping) {
                    ping = availablePeers[_i].delay;
                    bestPeer = availablePeers[_i];
                  }
                }

                _context4.next = 25;
                return this.networkInit(bestPeer.ip);

              case 25:
                return _context4.abrupt("return", bestPeer);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 14]]);
      }));

      function getBestPeer() {
        return _getBestPeer.apply(this, arguments);
      }

      return getBestPeer;
    }()
  }, {
    key: "getDepAddress",
    value: function () {
      var _getDepAddress = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee5(options) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(_config__WEBPACK_IMPORTED_MODULE_10__["exchange"].API + '/' + options.coin + '/deposit-address/' + options.recipientId);

              case 2:
                return _context5.abrupt("return", _context5.sent.data.address);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getDepAddress(_x2) {
        return _getDepAddress.apply(this, arguments);
      }

      return getDepAddress;
    }()
  }, {
    key: "prepareTx",
    value: function () {
      var _prepareTx = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee6(options) {
        var msg, tx;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                msg = options.msg ? options.msg : null;
                tx = sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.createTransaction(options.secret, options.recipient, (options.amount * Math.pow(10, 8)).toPrecision(20).split('.')[0] * 1, {
                  vendorField: msg
                });
                return _context6.abrupt("return", tx);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function prepareTx(_x3) {
        return _prepareTx.apply(this, arguments);
      }

      return prepareTx;
    }()
  }, {
    key: "sendTx",
    value: function () {
      var _sendTx = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee7(options) {
        var tx;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                tx = sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.createTransaction(options.secret, options.recipient, (options.amount * Math.pow(10, 8)).toPrecision(20).split('.')[0] * 1, {
                  vendorField: options.msg
                });
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.sendTransactions([tx], function (error, success, response) {
                    if (response.success && !error && response.transactionIds) {
                      resolve(response.transactionIds[0]);
                    } else {
                      reject(null);
                    }
                  });
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function sendTx(_x4) {
        return _sendTx.apply(this, arguments);
      }

      return sendTx;
    }()
  }, {
    key: "fetchBalance",
    value: function () {
      var _fetchBalance = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee8(address) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise(function (resolve, reject) {
                  sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.getBalance(address, function (error, success, response) {
                    if (success) {
                      var balance = (response.balance / Math.pow(10, 8)).toFixed(2) * 1;
                      resolve(balance);
                    } else {
                      reject(0);
                    }
                  });
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function fetchBalance(_x5) {
        return _fetchBalance.apply(this, arguments);
      }

      return fetchBalance;
    }()
  }, {
    key: "getTransaction",
    value: function () {
      var _getTransaction = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee9(txId) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", new Promise(function (resolve, reject) {
                  sthjs_wrapper__WEBPACK_IMPORTED_MODULE_11___default.a.getTransaction(txId, function (error, success, response) {
                    if (!error) {
                      resolve(response.transaction);
                    } else {
                      reject(false);
                    }
                  });
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getTransaction(_x6) {
        return _getTransaction.apply(this, arguments);
      }

      return getTransaction;
    }()
  }, {
    key: "fetchTransactions",
    value: function () {
      var _fetchTransactions = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee10(address, offset) {
        var limit, uri, response, result, txs, i, op, tm, amount;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                limit = 25;
                uri = 'https://' + _config__WEBPACK_IMPORTED_MODULE_10__["network"].NODE + '/api/transactions?orderBy=timestamp:desc&offset=' + offset + '&limit=' + limit + '&recipientId=' + address + '&senderId=' + address;
                _context10.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(uri);

              case 4:
                response = _context10.sent.data;

                if (!response.success) {
                  _context10.next = 13;
                  break;
                }

                result = {
                  count: 0,
                  offset: offset,
                  transactions: []
                };
                txs = [];

                for (i = 0; i < response.transactions.length; i++) {
                  op = response.transactions[i].recipientId === address ? '+' : '-';
                  tm = moment__WEBPACK_IMPORTED_MODULE_12___default.a.unix(1511269200 + response.transactions[i].timestamp);
                  amount = response.transactions[i].amount / Math.pow(10, 8);

                  if (op === '-') {
                    amount = amount + response.transactions[i].fee / Math.pow(10, 8);
                  }

                  txs.push({
                    id: response.transactions[i].id,
                    confirmations: response.transactions[i].confirmations,
                    time: tm.format("YYYY.MM.DD HH:mm:ss"),
                    amount: op + amount.toFixed(2) * 1,
                    senderId: response.transactions[i].senderId,
                    recipientId: response.transactions[i].recipientId,
                    vendorField: response.transactions[i].vendorField,
                    op: op
                  });
                }

                result.offset = 0;
                result.count = response.count * 1;
                result.transactions = txs;
                return _context10.abrupt("return", result);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function fetchTransactions(_x7, _x8) {
        return _fetchTransactions.apply(this, arguments);
      }

      return fetchTransactions;
    }()
  }, {
    key: "signMessage",
    value: function () {
      var _signMessage = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee11(message, passphrase) {
        var hash, ecpair;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                hash = crypto__WEBPACK_IMPORTED_MODULE_14___default.a.createHash('sha256');
                hash = hash.update(Buffer.from(message, 'utf-8')).digest();
                ecpair = sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.getKeys(passphrase);
                return _context11.abrupt("return", {
                  signature: ecpair.sign(hash).toDER().toString('hex')
                });

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function signMessage(_x9, _x10) {
        return _signMessage.apply(this, arguments);
      }

      return signMessage;
    }()
  }, {
    key: "verifyMessage",
    value: function () {
      var _verifyMessage = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee12(message, publicKey, signature) {
        var re, hash, ecpair, ecsignature;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                re = /[0-9A-Fa-f]{6}/g;

                if (!(!re.test(publicKey) || !re.test(signature))) {
                  _context12.next = 3;
                  break;
                }

                return _context12.abrupt("return", false);

              case 3:
                hash = crypto__WEBPACK_IMPORTED_MODULE_14___default.a.createHash('sha256');
                hash = hash.update(Buffer.from(message, 'utf-8')).digest();
                ecpair = sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.ECPair.fromPublicKeyBuffer(Buffer.from(publicKey, 'hex'));
                ecsignature = sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.ECSignature.fromDER(Buffer.from(signature, 'hex'));
                return _context12.abrupt("return", ecpair.verify(hash, ecsignature));

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function verifyMessage(_x11, _x12, _x13) {
        return _verifyMessage.apply(this, arguments);
      }

      return verifyMessage;
    }()
  }, {
    key: "validateAddress",
    value: function () {
      var _validateAddress = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee13(address) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.crypto.validateAddress(address));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function validateAddress(_x14) {
        return _validateAddress.apply(this, arguments);
      }

      return validateAddress;
    }()
  }, {
    key: "prepareTxNative",
    value: function () {
      var _prepareTxNative = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee14(options) {
        var vendorField, secondPassphrase, version, fee;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                secondPassphrase = null;
                version = 0x3f;
                fee = 100000000;
                vendorField = options.memo ? options.memo : null;
                return _context14.abrupt("return", sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.transaction.createTransaction(options.recipient, (options.amount * Math.pow(10, 8)).toPrecision(21).split('.')[0] * 1, vendorField, options.secret, secondPassphrase, version, fee));

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function prepareTxNative(_x15) {
        return _prepareTxNative.apply(this, arguments);
      }

      return prepareTxNative;
    }()
  }, {
    key: "createVoteTransaction",
    value: function () {
      var _createVoteTransaction = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee15(passPhrase, votes, secondPass) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.vote.createVote(passPhrase, votes, secondPass));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      function createVoteTransaction(_x16, _x17, _x18) {
        return _createVoteTransaction.apply(this, arguments);
      }

      return createVoteTransaction;
    }()
  }, {
    key: "broadcastTxNative",
    value: function () {
      var _broadcastTxNative = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee16(tx, seed) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                result = {
                  success: false,
                  transactionIds: []
                };
                _context16.prev = 1;
                _context16.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('https://' + seed + '/peer/transactions', {
                  transactions: [tx]
                }, {
                  headers: {
                    "Content-Type": "application/json",
                    "os": "sth-client",
                    "version": "0.6.0",
                    "nethash": 'fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7',
                    "port": 1
                  }
                });

              case 4:
                data = _context16.sent;
                result = data.data;
                _context16.next = 11;
                break;

              case 8:
                _context16.prev = 8;
                _context16.t0 = _context16["catch"](1);
                result.success = false;

              case 11:
                return _context16.abrupt("return", result);

              case 12:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[1, 8]]);
      }));

      function broadcastTxNative(_x19, _x20) {
        return _broadcastTxNative.apply(this, arguments);
      }

      return broadcastTxNative;
    }()
  }, {
    key: "createDelegateTransaction",
    value: function () {
      var _createDelegateTransaction = Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(regeneratorRuntime.mark(function _callee17(passPhrase, delegateName, secondPass) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", sthjs__WEBPACK_IMPORTED_MODULE_15___default.a.delegate.createDelegate(passPhrase, delegateName, secondPass));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function createDelegateTransaction(_x21, _x22, _x23) {
        return _createDelegateTransaction.apply(this, arguments);
      }

      return createDelegateTransaction;
    }()
  }]);

  return Wallet;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Wallet());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-SG": "cdab",
	"./en-SG.js": "cdab",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "7333",
	"./en-il.js": "7333",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df4",
	"./fa.js": "8df4",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./ga": "5120",
	"./ga.js": "5120",
	"./gd": "f6b4",
	"./gd.js": "f6b4",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it-ch": "6f12",
	"./it-ch.js": "6f12",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ku": "2421",
	"./ku.js": "2421",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

/***/ }),

/***/ "46d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    marketPrices: function marketPrices() {
      return this.$store.getters['wallet/marketPrice'];
    },
    defaultMarketCurrency: function defaultMarketCurrency() {
      return this.$store.getters['wallet/defaultCurrency'];
    }
  }
});

/***/ }),

/***/ "4738":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c5ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "49f8":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "edd4",
	"./ru.json": "7704"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "49f8";

/***/ }),

/***/ "4e5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1b32");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wizard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "553d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// EXTERNAL MODULE: ./node_modules/vue-router-prefetch/dist/index.esm.js
var index_esm = __webpack_require__("ab5b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// EXTERNAL MODULE: ./node_modules/es6-promise/auto.js
var auto = __webpack_require__("54ba");

// CONCATENATED MODULE: ./src/polyfills.js






/* harmony default export */ var polyfills = ((function initPollyFills() {
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }

        var thisArg = arguments[1];
        var k = 0;

        while (k < len) {
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }

          k++;
        }

        return undefined;
      }
    });
  }

  if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        'use strict';

        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      },
      writable: true,
      configurable: true
    });
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
  }

  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
})());
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NotificationPlugin/Notifications.vue?vue&type=template&id=5b63049e&
var Notificationsvue_type_template_id_5b63049e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notifications"},[_c('transition-group',{attrs:{"name":_vm.transitionName,"mode":_vm.transitionMode}},_vm._l((_vm.notifications),function(notification){return _c('notification',_vm._b({key:notification.timestamp.getTime(),attrs:{"clickHandler":notification.onClick},on:{"close":_vm.removeNotification}},'notification',notification,false))}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notifications.vue?vue&type=template&id=5b63049e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NotificationPlugin/Notification.vue?vue&type=template&id=348106a7&
var Notificationvue_type_template_id_348106a7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert open",class:[
    { 'alert-with-icon': _vm.icon },
    _vm.verticalAlign,
    _vm.horizontalAlign,
    _vm.alertType
  ],style:(_vm.customPosition),attrs:{"data-notify":"container","role":"alert","data-notify-position":"top-center"},on:{"click":_vm.tryClose}},[(_vm.showClose)?_c('button',{staticClass:"close col-xs-1",attrs:{"type":"button","aria-hidden":"true","data-notify":"dismiss"},on:{"click":_vm.close}},[_c('i',{staticClass:"tim-icons icon-simple-remove"})]):_vm._e(),(_vm.icon)?_c('span',{class:['alert-icon', _vm.icon],attrs:{"data-notify":"icon"}}):_vm._e(),_c('span',{attrs:{"data-notify":"message"}},[(_vm.title)?_c('span',{staticClass:"title"},[_c('b',[_vm._v(_vm._s(_vm.title)),_c('br')])]):_vm._e(),(_vm.message)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),(!_vm.message && _vm.component)?_c('content-render',{attrs:{"component":_vm.component}}):_vm._e()],1)])}
var Notificationvue_type_template_id_348106a7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notification.vue?vue&type=template&id=348106a7&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NotificationPlugin/Notification.vue?vue&type=script&lang=js&





var Notificationvue_type_script_lang_js_this = undefined;

/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  name: 'notification',
  components: {
    contentRender: {
      props: ['component'],
      render: function render(h) {
        return h(Notificationvue_type_script_lang_js_this.component);
      }
    }
  },
  props: {
    message: String,
    title: String,
    icon: String,
    verticalAlign: {
      type: String,
      default: 'top',
      validator: function validator(value) {
        var acceptedValues = ['top', 'bottom'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    horizontalAlign: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        var acceptedValues = ['left', 'center', 'right'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: 'info',
      validator: function validator(value) {
        var acceptedValues = ['info', 'primary', 'danger', 'warning', 'success'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    timeout: {
      type: Number,
      default: 5000,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    timestamp: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    component: {
      type: [Object, Function]
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    clickHandler: Function
  },
  data: function data() {
    return {
      elmHeight: 0
    };
  },
  computed: {
    hasIcon: function hasIcon() {
      return this.icon && this.icon.length > 0;
    },
    alertType: function alertType() {
      return "alert-".concat(this.type);
    },
    customPosition: function customPosition() {
      var _this2 = this;

      var initialMargin = 20;
      var alertHeight = this.elmHeight + 10;
      var sameAlerts = this.$notifications.state.filter(function (alert) {
        return alert.horizontalAlign === _this2.horizontalAlign && alert.verticalAlign === _this2.verticalAlign;
      });
      var sameAlertsCount = 1;
      var currentIndex = sameAlerts.findIndex(function (n) {
        return n.timestamp === _this2.timestamp;
      });

      if (this.$notifications.settings.overlap) {
        sameAlertsCount = 1;
      }

      if (currentIndex !== -1) {
        sameAlertsCount = currentIndex + 1;
      }

      var pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
      var styles = {};

      if (this.verticalAlign === 'top') {
        styles.top = "".concat(pixels, "px");
      } else {
        styles.bottom = "".concat(pixels, "px");
      }

      return styles;
    }
  },
  methods: {
    close: function close() {
      this.$emit('close', this.timestamp);
    },
    tryClose: function tryClose(evt) {
      if (this.clickHandler) {
        this.clickHandler(evt, this);
      }

      if (this.closeOnClick) {
        this.close();
      }
    }
  },
  mounted: function mounted() {
    this.elmHeight = this.$el.clientHeight;

    if (this.timeout) {
      setTimeout(this.close, this.timeout);
    }
  }
});
// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var NotificationPlugin_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NotificationPlugin/Notification.vue?vue&type=style&index=0&lang=scss&
var Notificationvue_type_style_index_0_lang_scss_ = __webpack_require__("f0fa");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notification.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  NotificationPlugin_Notificationvue_type_script_lang_js_,
  Notificationvue_type_template_id_348106a7_render,
  Notificationvue_type_template_id_348106a7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Notification = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NotificationPlugin/Notifications.vue?vue&type=script&lang=js&

/* harmony default export */ var Notificationsvue_type_script_lang_js_ = ({
  components: {
    Notification: Notification
  },
  props: {
    transitionName: {
      type: String,
      default: 'list'
    },
    transitionMode: {
      type: String,
      default: 'in-out'
    },
    overlap: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      notifications: this.$notifications.state
    };
  },
  methods: {
    removeNotification: function removeNotification(timestamp) {
      this.$notifications.removeNotification(timestamp);
    }
  },
  created: function created() {
    this.$notifications.settings.overlap = this.overlap;
  },
  watch: {
    overlap: function overlap(newVal) {
      this.$notifications.settings.overlap = newVal;
    }
  }
});
// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var NotificationPlugin_Notificationsvue_type_script_lang_js_ = (Notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NotificationPlugin/Notifications.vue?vue&type=style&index=0&lang=scss&
var Notificationsvue_type_style_index_0_lang_scss_ = __webpack_require__("6ae5");

// CONCATENATED MODULE: ./src/components/NotificationPlugin/Notifications.vue






/* normalize component */

var Notifications_component = Object(componentNormalizer["a" /* default */])(
  NotificationPlugin_Notificationsvue_type_script_lang_js_,
  Notificationsvue_type_template_id_5b63049e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Notifications = (Notifications_component.exports);
// CONCATENATED MODULE: ./src/components/NotificationPlugin/index.js





var NotificationStore = {
  state: [],
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'right',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true,
    order: 'reverse'
  },
  setOptions: function setOptions(options) {
    this.settings = Object.assign(this.settings, options);
  },
  removeNotification: function removeNotification(timestamp) {
    var indexToDelete = this.state.findIndex(function (n) {
      return n.timestamp === timestamp;
    });

    if (indexToDelete !== -1) {
      this.state.splice(indexToDelete, 1);
    }
  },
  addNotification: function addNotification(notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = {
        message: notification
      };
    }

    notification.timestamp = new Date();
    notification.timestamp.setMilliseconds(notification.timestamp.getMilliseconds() + this.state.length);
    notification = Object.assign({}, this.settings, notification);

    if (this.settings.order === 'reverse') {
      this.state.unshift(notification);
    } else {
      this.state.push(notification);
    }
  },
  notify: function notify(notification) {
    var _this = this;

    if (Array.isArray(notification)) {
      notification.forEach(function (notificationInstance) {
        _this.addNotification(notificationInstance);
      });
    } else {
      this.addNotification(notification);
    }
  }
};
var NotificationsPlugin = {
  install: function install(Vue, options) {
    var app = new Vue({
      data: {
        notificationStore: NotificationStore
      },
      methods: {
        notify: function notify(notification) {
          this.notificationStore.notify(notification);
        }
      }
    });
    Vue.prototype.$notify = app.notify;
    Vue.prototype.$notifications = app.notificationStore;
    Vue.component('Notifications', Notifications);

    if (options) {
      NotificationStore.setOptions(options);
    }
  }
};
/* harmony default export */ var NotificationPlugin = (NotificationsPlugin);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/popover.css
var popover = __webpack_require__("06f1");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__("450d");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/popover.js
var lib_popover = __webpack_require__("6ac9");
var lib_popover_default = /*#__PURE__*/__webpack_require__.n(lib_popover);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/tooltip.css
var tooltip = __webpack_require__("0c67");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/tooltip.js
var lib_tooltip = __webpack_require__("299c");
var lib_tooltip_default = /*#__PURE__*/__webpack_require__.n(lib_tooltip);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/input-number.css
var input_number = __webpack_require__("9d4c");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/input-number.js
var lib_input_number = __webpack_require__("e450");
var lib_input_number_default = /*#__PURE__*/__webpack_require__.n(lib_input_number);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/input.css
var input = __webpack_require__("10cb");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/input.js
var lib_input = __webpack_require__("f3ad");
var lib_input_default = /*#__PURE__*/__webpack_require__.n(lib_input);

// EXTERNAL MODULE: ./src/components/Inputs/BaseInput.vue + 4 modules
var BaseInput = __webpack_require__("f6e3");

// EXTERNAL MODULE: ./src/components/BaseDropdown.vue + 4 modules
var BaseDropdown = __webpack_require__("1aa9");

// EXTERNAL MODULE: ./src/components/Cards/Card.vue + 4 modules
var Card = __webpack_require__("1499");

// EXTERNAL MODULE: ./src/components/BaseButton.vue + 4 modules
var BaseButton = __webpack_require__("82ea");

// EXTERNAL MODULE: ./src/components/Inputs/BaseCheckbox.vue + 4 modules
var BaseCheckbox = __webpack_require__("ca64");

// CONCATENATED MODULE: ./src/plugins/globalComponents.js


















var GlobalComponents = {
  install: function install(Vue) {
    Vue.component(BaseInput["a" /* default */].name, BaseInput["a" /* default */]);
    Vue.component(BaseDropdown["a" /* default */].name, BaseDropdown["a" /* default */]);
    Vue.component(Card["a" /* default */].name, Card["a" /* default */]);
    Vue.component(BaseCheckbox["a" /* default */].name, BaseCheckbox["a" /* default */]);
    Vue.component(BaseButton["a" /* default */].name, BaseButton["a" /* default */]);
    Vue.component(lib_input_default.a.name, lib_input_default.a);
    Vue.component(lib_input_number_default.a.name, lib_input_number_default.a);
    Vue.use(lib_tooltip_default.a);
    Vue.use(lib_popover_default.a);
  }
};
/* harmony default export */ var globalComponents = (GlobalComponents);
// CONCATENATED MODULE: ./src/directives/click-ouside.js
/* harmony default export */ var click_ouside = ({
  bind: function bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});
// CONCATENATED MODULE: ./src/plugins/globalDirectives.js

var GlobalDirectives = {
  install: function install(Vue) {
    Vue.directive('click-outside', click_ouside);
  }
};
/* harmony default export */ var globalDirectives = (GlobalDirectives);
// EXTERNAL MODULE: ./src/components/SidebarPlugin/index.js + 10 modules
var SidebarPlugin = __webpack_require__("b290");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("8a79");

// CONCATENATED MODULE: ./src/plugins/RTLPlugin.js


/* harmony default export */ var RTLPlugin = ({
  install: function install(Vue) {
    var app = new Vue({
      data: function data() {
        return {
          isRTL: false
        };
      },
      methods: {
        getDocClasses: function getDocClasses() {
          return document.body.classList;
        },
        enableRTL: function enableRTL() {
          __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.t.bind(null, "4dfc", 7));
          this.isRTL = true;
          this.getDocClasses().add('rtl');
          this.getDocClasses().add('menu-on-right');
          this.toggleBootstrapRTL(true);
        },
        disableRTL: function disableRTL() {
          this.isRTL = false;
          this.getDocClasses().remove('rtl');
          this.getDocClasses().remove('menu-on-right');
          this.toggleBootstrapRTL(false);
        },
        toggleBootstrapRTL: function toggleBootstrapRTL(value) {
          for (var i = 0; i < document.styleSheets.length; i++) {
            var styleSheet = document.styleSheets[i];
            var href = styleSheet.href;

            if (href && href.endsWith('bootstrap-rtl.css')) {
              styleSheet.disabled = !value;
            }
          }
        }
      }
    });
    Vue.prototype.$rtl = app;
  }
});
// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/lang/en.js
var en = __webpack_require__("b2d6");
var en_default = /*#__PURE__*/__webpack_require__.n(en);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/locale/index.js
var locale = __webpack_require__("4897");
var locale_default = /*#__PURE__*/__webpack_require__.n(locale);

// EXTERNAL MODULE: ./src/assets/sass/black-dashboard-pro.scss
var black_dashboard_pro = __webpack_require__("13c5");

// EXTERNAL MODULE: ./src/assets/css/nucleo-icons.css
var nucleo_icons = __webpack_require__("6a5d");

// EXTERNAL MODULE: ./src/assets/css/demo.css
var demo = __webpack_require__("c6e3");

// CONCATENATED MODULE: ./src/plugins/dashboard-plugin.js









locale_default.a.use(en_default.a);



/* harmony default export */ var dashboard_plugin = ({
  install: function install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(RTLPlugin);
    Vue.use(SidebarPlugin["a" /* default */]);
    Vue.use(NotificationPlugin);
    Vue.use(vee_validate_esm["a" /* default */], {
      fieldsBagName: 'veeFields'
    });
  }
});
// EXTERNAL MODULE: ./node_modules/vue-clipboard2/vue-clipboard.js
var vue_clipboard = __webpack_require__("4eb5");
var vue_clipboard_default = /*#__PURE__*/__webpack_require__.n(vue_clipboard);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=385848d4&
var Appvue_type_template_id_385848d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var Appvue_type_template_id_385848d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=385848d4&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&


/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  computed: {
    myAccounts: function myAccounts() {
      return this.$store.getters['app/accounts'];
    }
  },
  methods: {
    getBroLang: function getBroLang() {
      return navigator.language;
    },
    initializeLayout: function initializeLayout() {
      if (!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    },
    modalColor: function modalColor() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var result, docClasses;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = 'modal-white';
                docClasses = document.body.classList;

                if (_this.$store.getters['app/settings'].darkMode) {
                  result = 'modal-dark';
                  docClasses.remove('white-content');
                } else {
                  docClasses.add('white-content');
                }

                return _context.abrupt("return", result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    isElectron: function isElectron() {
      return Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON;
    },
    remoteData: function remoteData(options) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (options.op === 'cyboritex') {}

                if (!(options.op === 'tw:up')) {
                  _context2.next = 5;
                  break;
                }

                if (!_this2.myAccounts[options.data.address]) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this2.$store.dispatch('abounty/twSetProfile', options.data);

              case 5:
                if (!(options.op === 'reward')) {
                  _context2.next = 11;
                  break;
                }

                if (!_this2.myAccounts[options.data.address]) {
                  _context2.next = 11;
                  break;
                }

                _this2.notify('bottom', 'right', 'success', 'AntiBounty Reward on ' + options.data.address.substr(0, 8) + '...' + options.data.address.substr(-8) + ' +' + options.data.amount + ' STH');

                _context2.next = 10;
                return _this2.$store.dispatch('abounty/setTaskSuccess', options.data);

              case 10:
                _this2.$eventBus.emit('reward', options.data);

              case 11:
                if (options.op === 'completed') {
                  if (_this2.myAccounts[options.data.sender]) {
                    _this2.notify('bottom', 'right', 'success', 'Your Task ' + options.data.orderId + ' completed ' + options.data.success);
                  }
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.initializeLayout();
  },
  created: function created() {
    var _this3 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
      var browserLang;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              browserLang = _this3.getBroLang();
              _context5.t0 = browserLang;
              _context5.next = _context5.t0 === 'ru-RU' ? 4 : 6;
              break;

            case 4:
              _this3.$i18n.locale = 'ru';
              return _context5.abrupt("break", 8);

            case 6:
              _this3.$i18n.locale = 'en';
              return _context5.abrupt("break", 8);

            case 8:
              _this3.$root.isMobile = window.innerWidth < 768;
              _this3.$root.height = window.innerHeight;
              _this3.$root.modalColor = 'modal-white';

              _this3.$store._vm.$on('vuex-persist:ready', Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
                var locale;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this3.modalColor();

                      case 2:
                        _this3.$root.modalColor = _context3.sent;
                        _context3.next = 5;
                        return _this3.$store.getters['app/language'];

                      case 5:
                        locale = _context3.sent;

                        if (locale) {
                          _this3.$i18n.locale = locale;
                        }

                        if (!_this3.isElectron()) {
                          _context3.next = 16;
                          break;
                        }

                        if (_this3.$store.getters['app/pinEncrypted']) {
                          _context3.next = 13;
                          break;
                        }

                        _context3.next = 11;
                        return _this3.$router.push({
                          path: '/register'
                        });

                      case 11:
                        _context3.next = 16;
                        break;

                      case 13:
                        if (_this3.$root.pin) {
                          _context3.next = 16;
                          break;
                        }

                        _context3.next = 16;
                        return _this3.$router.push({
                          path: '/lock'
                        });

                      case 16:
                        _this3.$synchronizer.defineAll();

                        _this3.$synchronizer.ready();

                      case 18:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })));

              _this3.$options.sockets.onopen = function (dataOpen) {
                _this3.$root.isOnline = true;

                _this3.$socket.sendObj({
                  op: 'hello'
                });
              };

              _this3.$options.sockets.onmessage = function () {
                var _ref2 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4(chainData) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return _this3.remoteData(JSON.parse(chainData.data));

                        case 3:
                          _context4.next = 8;
                          break;

                        case 5:
                          _context4.prev = 5;
                          _context4.t0 = _context4["catch"](0);
                          console.log('JSON err', chainData.data);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[0, 5]]);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }();

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_385848d4_render,
  Appvue_type_template_id_385848d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/DashboardLayout.vue?vue&type=template&id=05bd893c&
var DashboardLayoutvue_type_template_id_05bd893c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"wrapper",class:{ 'nav-open': _vm.$sidebar.showSidebar }},[_c('notifications'),_c('sidebar-fixed-toggle-button'),_c('side-bar',{attrs:{"background-color":_vm.sidebarBackground,"short-title":_vm.$t('sidebar.shortTitle'),"title":_vm.$t('sidebar.title')},scopedSlots:_vm._u([{key:"links",fn:function(props){return [_c('sidebar-item',{attrs:{"link":{
          name: _vm.$t('PG.WALLETS'),
          //icon: 'tim-icons icon-wallet-43',
          icon: 'sth-icons icon-wallet2 sth-icons-28',
          path: '/wallet'
        }}}),_c('sidebar-item',{attrs:{"link":{
          name: _vm.$t('PG.CONTACTS'),
          icon: 'tim-icons icon-book-bookmark',
          path: '/contacts'
        }}}),_c('sidebar-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.settingsData.smartholder),expression:"settingsData.smartholder"}],attrs:{"link":{
          name: 'SmartHolder',
          icon: 'tim-icons icon-money-coins',
          path: '/smartholder'
        }}}),_c('sidebar-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.settingsData.listing),expression:"settingsData.listing"}],attrs:{"link":{
          name: 'Vote listing XBTS',
          icon: 'tim-icons icon-trophy',
          path: '/xbts-listing'
        }}}),(!_vm.isElectron())?_c('sidebar-item',{attrs:{"link":{
          name: 'AntiBounty',
          icon: 'sth-icons icon-antibounty sth-icons-28',
          path: '/abounty/welcome'
        }}}):_vm._e(),_c('sidebar-item',{attrs:{"link":{
          name: _vm.$t('PG.SET'),
          icon: 'tim-icons icon-settings-gear-63',
          path: '/settings'
        }}})]}}])}),_c('div',{staticClass:"main-panel",attrs:{"data":_vm.sidebarBackground}},[_c('dashboard-navbar'),_c('router-view',{attrs:{"name":"header"}}),_c('div',{class:{ content: !_vm.$route.meta.hideContent },on:{"click":_vm.toggleSidebar}},[_c('zoom-center-transition',{attrs:{"duration":200,"mode":"out-in"}},[_c('router-view')],1)],1)],1)],1),(_vm.modal.label.show)?_c('div',[_c('ModalSetLabel',{attrs:{"address":_vm.modal.label.address,"showModal":_vm.modal.label.show},on:{"onModalClose":function($event){_vm.modal.label.show = false}}})],1):_vm._e(),_c('ModalUnlock',{attrs:{"modalPin":_vm.modal.unlock.show},on:{"onUnlockClose":function($event){_vm.modal.unlock.show = false}}}),(_vm.modal.contacts.show)?_c('div',[_c('ModalAddContact',{attrs:{"showModal":_vm.modal.contacts.show},on:{"onModalClose":function($event){_vm.modal.contacts.show = false}}})],1):_vm._e(),(_vm.modal.vote.show)?_c('div',[_c('ModalTxVote',{attrs:{"showModalVote":_vm.modal.vote.show,"voteData":_vm.modal.vote.data},on:{"onModalClose":function($event){_vm.modal.vote.show = false}}})],1):_vm._e(),(_vm.modal.send.show)?_c('div',[_c('ModalTxSend',{attrs:{"address":_vm.modal.send.address,"showModal":_vm.modal.send.show},on:{"onModalClose":function($event){_vm.modal.send.show = false}}})],1):_vm._e(),(_vm.modal.qr.show)?_c('div',[_c('ModalQrAddress',{attrs:{"address":_vm.modal.qr.address,"showModal":_vm.modal.qr.show},on:{"onModalClose":function($event){_vm.modal.qr.show = false}}})],1):_vm._e(),(_vm.modal.private.show)?_c('div',[_c('ModalPrivate',{attrs:{"address":_vm.modal.private.address,"showModal":_vm.modal.private.show},on:{"onModalClose":function($event){_vm.modal.private.show = false}}})],1):_vm._e()],1)}
var DashboardLayoutvue_type_template_id_05bd893c_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Layout/DashboardLayout.vue?vue&type=template&id=05bd893c&

// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js
var perfect_scrollbar_esm = __webpack_require__("b7f5");

// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
var perfect_scrollbar = __webpack_require__("7da8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/DashboardNavbar.vue?vue&type=template&id=d8569a12&scoped=true&
var DashboardNavbarvue_type_template_id_d8569a12_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-nav',{staticClass:"navbar-absolute top-navbar",attrs:{"transparent":false,"type":_vm.settings.darkMode ? 'dark' : 'white'},model:{value:(_vm.showMenu),callback:function ($$v) {_vm.showMenu=$$v},expression:"showMenu"}},[_c('div',{staticClass:"navbar-wrapper",attrs:{"slot":"brand"},slot:"brand"},[_c('div',{staticClass:"navbar-minimize d-inline"},[_c('sidebar-toggle-button')],1),_c('div',{staticClass:"navbar-toggle d-inline",class:{ toggled: _vm.$sidebar.showSidebar }},[_c('button',{staticClass:"navbar-toggler",attrs:{"type":"button"},on:{"click":_vm.toggleSidebar}},[_c('span',{staticClass:"navbar-toggler-bar bar1"}),_c('span',{staticClass:"navbar-toggler-bar bar2"}),_c('span',{staticClass:"navbar-toggler-bar bar3"})])]),(!_vm.$root.isMobile)?_c('span',{staticClass:"navbar-brand"},[_vm._v(_vm._s(_vm.routeName))]):_vm._e(),(!_vm.isElectron && !_vm.$root.isMobile)?_c('router-link',{staticClass:"navbar-brand",attrs:{"to":"/home"}},[_vm._v("HOME")]):_vm._e(),(_vm.$root.isMobile)?_c('router-link',{staticClass:"text-decoration-none font-weight-normal text-dark",staticStyle:{"font-size":"20px"},attrs:{"to":"/wallet"}},[_c('i',{staticClass:"sth-icons icon-sth sth-icons-24"}),_vm._v(" "+_vm._s(_vm.accountBalanceSTH)+" ")]):_vm._e(),(!_vm.$root.isMobile)?_c('base-dropdown',{staticClass:"navbar-brand currency-balance",attrs:{"menu-on-right":!_vm.$rtl.isRTL,"tag":"li","title-classes":"nav-link","title-tag":"a"}},[_c('template',{staticStyle:{"color":"rgb(9, 223, 251) !important"},slot:"title"},[_c('el-tooltip',{attrs:{"content":'1 ' + _vm.defaultMarketCurrency.ticker + ' = ' + (1 / _vm.marketPrices[_vm.defaultMarketCurrency.ticker]).toFixed(2) + ' STH',"open-delay":300,"visible-arrow":false,"placement":"bottom"}},[_c('span',{staticClass:"text-decoration-none font-weight-normal"},[_c('i',{staticClass:"sth-icons icon-sth sth-icons-24"}),_vm._v(" "+_vm._s(_vm.accountBalanceSTH)+" "),_c('small',{staticClass:"color-brown font-weight-bold"},[_vm._v("STH ")]),_c('span',{staticClass:"badge badge-white font-weight-normal",staticStyle:{"font-size":"0.9em","color":"lightslategray","border":"solid 1px lightslategray"}},[_vm._v(_vm._s(_vm.defaultMarketCurrency.symbol)+_vm._s(_vm.accountBalance))])])])],1),_vm._l((_vm.currencies),function(item,idx){return _c('li',{key:idx,staticClass:"nav-link bg-white"},[_c('span',{staticClass:"nav-item dropdown-item",on:{"click":function($event){return _vm.setDefaultCurrency(item.ticker, item.symbol, item.precision)}}},[_vm._v(_vm._s(item.title)+" "+_vm._s(item.symbol))])])})],2):_vm._e()],1),_c('ul',{staticClass:"navbar-nav",class:_vm.$rtl.isRTL ? 'mr-auto' : 'ml-auto'},[_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":!_vm.$rtl.isRTL,"tag":"li","title-classes":"nav-link","title-tag":"a"}},[_c('template',{slot:"title"},[_c('div',{staticClass:"notification-green d-none d-lg-block d-xl-block"}),_c('i',{staticClass:"tim-icons icon-wifi text-green",attrs:{"title":"online"}}),_c('p',{staticClass:"d-lg-none"},[_vm._v("Connection")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item"},[_vm._v("Manage Networks")])]),_c('div',{staticClass:"dropdown-divider"}),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item"},[_vm._v("Main Network (STH)")])])],2),_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":!_vm.$rtl.isRTL,"tag":"li","title-classes":"nav-link","title-tag":"a"}},[_c('template',{slot:"title"},[_c('div',{staticClass:"d-none d-lg-block d-xl-block"}),_c('i',{staticClass:"tim-icons icon-sound-wave"}),_c('p',{staticClass:"d-lg-none"},[_vm._v("Networks")])]),_c('el-tooltip',{attrs:{"content":"Click for change peer","open-delay":300,"placement":"left"}},[_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item",staticStyle:{"min-width":"250px","float":"left","border-bottom":"solid 1px #eee","clear":"both"},on:{"click":_vm.selectNextSeed}},[_c('span',{staticClass:"float-left"},[_vm._v("Peer")]),_c('span',{staticClass:"float-right text-dark"},[_vm._v(_vm._s(_vm.seed.url))])])])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item"},[_c('span',[_vm._v("Height")]),_c('span',{staticClass:"float-right text-dark"},[_vm._v(_vm._s(_vm.numericFormat('# ##0.', _vm.blockchainStatus.height)))])])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item"},[_vm._v("Delay "),_c('span',{staticClass:"float-right text-dark"},[_vm._v(_vm._s(_vm.seed.delay)+"ms")])])])],2),(!_vm.isElectron)?_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":!_vm.$rtl.isRTL,"menu-classes":"dropdown-navbar","tag":"li","title-classes":"nav-link","title-tag":"a"}},[_c('template',{slot:"title"},[_c('div',{staticClass:"d-none d-lg-block d-xl-block"}),_c('el-tooltip',{attrs:{"open-delay":300,"content":"Download Wallet","effect":"light","placement":"left"}},[_c('i',{staticClass:"fas fa-th-large"})]),_c('p',{staticClass:"d-lg-none"},[_vm._v("Download Wallet")])],1),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-green",on:{"click":function($event){return _vm.openLink('https://play.google.com/store/apps/details?id=io.smartholdem.client')}}},[_c('i',{staticClass:"fab fa-android"}),_vm._v(" Android")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-danger",on:{"click":function($event){return _vm.openLink('https://snapcraft.io/smartholdem')}}},[_c('i',{staticClass:"fab fa-linux"}),_vm._v(" Linux")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-info",on:{"click":function($event){return _vm.openLink('https://smartholdem.io/download/smartholdem-win.exe')}}},[_c('i',{staticClass:"fab fa-windows"}),_vm._v(" Windows")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-warning",on:{"click":function($event){return _vm.openLink('https://smartholdem.io/download/smartholdem-mac.dmg')}}},[_c('i',{staticClass:"fab fa-apple"}),_vm._v(" MacOs")])])],2):_vm._e(),_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":!_vm.$rtl.isRTL,"menu-classes":"dropdown-navbar","tag":"li","title-classes":"nav-link","title-tag":"a"}},[_c('template',{slot:"title"},[_c('div',{staticClass:"d-none d-lg-block d-xl-block"}),_c('i',{staticClass:"tim-icons icon-minimal-down"}),_c('p',{staticClass:"d-lg-none"},[_vm._v("APP")])]),_c('li',{staticClass:"nav-link"},[_c('router-link',{staticClass:"nav-item dropdown-item",attrs:{"to":"/lock"}},[_c('i',{staticClass:"tim-icons icon-lock-circle"}),_vm._v(" Lock ")])],1),_c('div',{staticClass:"dropdown-divider"}),_c('li',{staticClass:"nav-link",on:{"click":function($event){_vm.showReset = true}}},[_c('span',{staticClass:"nav-item dropdown-item"},[_c('i',{staticClass:"tim-icons icon-simple-remove"}),_vm._v(" "+_vm._s(_vm.$t('APP.RESET')))])]),(_vm.isElectron)?_c('li',{staticClass:"nav-link",on:{"click":_vm.close}},[_c('span',{staticClass:"nav-item dropdown-item"},[_c('i',{staticClass:"tim-icons icon-button-power"}),_vm._v(" QUIT")])]):_vm._e()],2)],1),_c('ResetAll',{attrs:{"modalReset":_vm.showReset},on:{"onResetCancel":function($event){_vm.showReset = false}}})],1)}
var DashboardNavbarvue_type_template_id_d8569a12_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Layout/DashboardNavbar.vue?vue&type=template&id=d8569a12&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/vue2-transitions/dist/vue2-transitions.m.js
var vue2_transitions_m = __webpack_require__("7c76");

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=6a5433d6&
var SidebarToggleButtonvue_type_template_id_6a5433d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-tooltip',{attrs:{"content":"Sidebar toggle","effect":"light","open-delay":300,"placement":"right"}},[_c('button',{staticClass:"minimize-sidebar btn btn-link btn-just-icon",attrs:{"rel":"tooltip","data-original-title":"Sidebar toggle","data-placement":"right"},on:{"click":_vm.minimizeSidebar}},[_c('i',{staticClass:"tim-icons icon-align-center visible-on-sidebar-regular"}),_c('i',{staticClass:"tim-icons icon-bullet-list-67 visible-on-sidebar-mini"})])])}
var SidebarToggleButtonvue_type_template_id_6a5433d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Layout/SidebarToggleButton.vue?vue&type=template&id=6a5433d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&
/* harmony default export */ var SidebarToggleButtonvue_type_script_lang_js_ = ({
  name: 'sidebar-toggle-button',
  methods: {
    minimizeSidebar: function minimizeSidebar() {
      var isMinimizedText = this.$sidebar.isMinimized ? 'deactivated' : 'activated';
      this.$sidebar.toggleMinimize();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Layout/SidebarToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_SidebarToggleButtonvue_type_script_lang_js_ = (SidebarToggleButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Layout/SidebarToggleButton.vue





/* normalize component */

var SidebarToggleButton_component = Object(componentNormalizer["a" /* default */])(
  Layout_SidebarToggleButtonvue_type_script_lang_js_,
  SidebarToggleButtonvue_type_template_id_6a5433d6_render,
  SidebarToggleButtonvue_type_template_id_6a5433d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarToggleButton = (SidebarToggleButton_component.exports);
// EXTERNAL MODULE: ./src/components/Wallet/ResetAll.vue + 4 modules
var ResetAll = __webpack_require__("d185");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Avatar.vue?vue&type=template&id=794fa77f&scoped=true&
var Avatarvue_type_template_id_794fa77f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"avatar-icon",domProps:{"innerHTML":_vm._s(_vm.avatarIcon)}})])}
var Avatarvue_type_template_id_794fa77f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Avatar.vue?vue&type=template&id=794fa77f&scoped=true&

// EXTERNAL MODULE: ./node_modules/jdenticon/dist/jdenticon.min.js
var jdenticon_min = __webpack_require__("5934");
var jdenticon_min_default = /*#__PURE__*/__webpack_require__.n(jdenticon_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Avatar.vue?vue&type=script&lang=js&



jdenticon_min_default.a.config = {
  backColor: "#fff",
  saturation: {
    color: 0.5,
    grayscale: 0.5
  },
  padding: 0.1
};
/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: "Avatar",
  props: {
    name: {
      default: 'Guest',
      type: String
    },
    size: {
      type: Number,
      default: 120
    }
  },
  computed: {
    avatarIcon: function avatarIcon() {
      var avName = 'Guest';

      if (this.name) {
        avName = this.name;
      }

      return jdenticon_min_default.a.toSvg(avName, this.size);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Avatar.vue





/* normalize component */

var Avatar_component = Object(componentNormalizer["a" /* default */])(
  components_Avatarvue_type_script_lang_js_,
  Avatarvue_type_template_id_794fa77f_scoped_true_render,
  Avatarvue_type_template_id_794fa77f_scoped_true_staticRenderFns,
  false,
  null,
  "794fa77f",
  null
  
)

/* harmony default export */ var Avatar = (Avatar_component.exports);
// EXTERNAL MODULE: ./node_modules/number-format.js/lib/format.min.js
var format_min = __webpack_require__("7b7c");
var format_min_default = /*#__PURE__*/__webpack_require__.n(format_min);

// CONCATENATED MODULE: ./src/util/electronSystem.js
var electron;

if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
  electron = __webpack_require__("bdb9");
}

function electronSystem_minimize() {
  if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
    var window = electron.remote.getCurrentWindow();
    window.minimize();
  }
}
function electronSystem_close() {
  if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
    var window = electron.remote.getCurrentWindow();
    window.close();
  }
}
function electronSystem_maximize() {
  if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
    var window = electron.remote.getCurrentWindow();
    window.isMaximized() ? window.unmaximize() : window.maximize();
  }
}
function electronSystem_screen() {
  if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
    var window = electron.remote.getCurrentWindow();
    window.isFullScreen() ? window.setFullScreen(false) : window.setFullScreen(true);
  }
}
function electronSystem_reload() {
  if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
    var window = electron.remote.getCurrentWindow();
    window.reload();
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/DashboardNavbar.vue?vue&type=script&lang=js&












/* harmony default export */ var DashboardNavbarvue_type_script_lang_js_ = ({
  components: {
    SidebarToggleButton: SidebarToggleButton,
    CollapseTransition: vue2_transitions_m["a" /* CollapseTransition */],
    BaseNav: components["c" /* BaseNav */],
    Modal: components["g" /* Modal */],
    ResetAll: ResetAll["a" /* default */],
    Avatar: Avatar
  },
  data: function data() {
    return {
      darkMode: false,
      showReset: false,
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  computed: {
    settings: function settings() {
      var result = this.$store.getters['app/settings'];
      return result;
    },
    isElectron: function isElectron() {
      return Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON;
    },
    seed: function seed() {
      return this.$store.getters['network/seed'];
    },
    routeName: function routeName() {
      var name = this.$route.name;
      return this.capitalizeFirstLetter(name);
    },
    isRTL: function isRTL() {
      return this.$rtl.isRTL;
    },
    accountBalanceSTH: function accountBalanceSTH() {
      var balances = this.$store.getters['wallet/balances'];
      return balances.totalBalance.toFixed(2);
    },
    currencies: function currencies() {
      return this.$store.getters['wallet/currencies'];
    },
    accountBalance: function accountBalance() {
      return (this.accountBalanceSTH * this.marketPrices[this.defaultMarketCurrency.ticker]).toFixed(this.defaultMarketCurrency.precision);
    },
    blockchainStatus: function blockchainStatus() {
      return this.$store.getters['blockchain/status'];
    }
  },
  methods: {
    selectNextSeed: function selectNextSeed() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var newSeed;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('network/getSeed');

              case 2:
                newSeed = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close() {
      if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
        electronSystem_close();
      }
    },
    toggleMode: function toggleMode() {
      this.darkMode = !this.darkMode;
      this.$store.dispatch('app/setSettings', {
        darkMode: this.darkMode
      });
      var docClasses = document.body.classList;

      if (this.darkMode) {
        docClasses.remove('white-content');
        this.$root.modalColor = 'modal-dark';
      } else {
        docClasses.add('white-content');
        this.$root.modalColor = 'modal-white';
      }
    },
    numericFormat: function numericFormat(format, amount) {
      return format_min_default()(format, amount);
    },
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown: function toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown: function closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar: function hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu: function toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    setDefaultCurrency: function setDefaultCurrency(ticker, symbol, precision) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('wallet/setDefaultCurrency', {
                  ticker: ticker,
                  symbol: symbol,
                  precision: precision
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Layout/DashboardNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_DashboardNavbarvue_type_script_lang_js_ = (DashboardNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Layout/DashboardNavbar.vue?vue&type=style&index=0&id=d8569a12&scoped=true&lang=css&
var DashboardNavbarvue_type_style_index_0_id_d8569a12_scoped_true_lang_css_ = __webpack_require__("cd0b");

// CONCATENATED MODULE: ./src/pages/Layout/DashboardNavbar.vue






/* normalize component */

var DashboardNavbar_component = Object(componentNormalizer["a" /* default */])(
  Layout_DashboardNavbarvue_type_script_lang_js_,
  DashboardNavbarvue_type_template_id_d8569a12_scoped_true_render,
  DashboardNavbarvue_type_template_id_d8569a12_scoped_true_staticRenderFns,
  false,
  null,
  "d8569a12",
  null
  
)

/* harmony default export */ var DashboardNavbar = (DashboardNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/ContentFooter.vue?vue&type=template&id=502b3d72&
var ContentFootervue_type_template_id_502b3d72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('div',{staticClass:"container-fluid"},[_vm._m(0),_c('div',{staticClass:"copyright"},[_vm._v(" © "+_vm._s(_vm.year)+", made with "),_c('i',{staticClass:"tim-icons icon-heart-2"}),_vm._v(" by SmartHoldem ")])])])}
var ContentFootervue_type_template_id_502b3d72_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"https://community.smartholdem.io","target":"_blank","rel":"noopener"}},[_vm._v(" Community ")])])])}]


// CONCATENATED MODULE: ./src/pages/Layout/ContentFooter.vue?vue&type=template&id=502b3d72&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/ContentFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var ContentFootervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});
// CONCATENATED MODULE: ./src/pages/Layout/ContentFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_ContentFootervue_type_script_lang_js_ = (ContentFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Layout/ContentFooter.vue





/* normalize component */

var ContentFooter_component = Object(componentNormalizer["a" /* default */])(
  Layout_ContentFootervue_type_script_lang_js_,
  ContentFootervue_type_template_id_502b3d72_render,
  ContentFootervue_type_template_id_502b3d72_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContentFooter = (ContentFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/Content.vue?vue&type=template&id=68471b6a&
var Contentvue_type_template_id_68471b6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"sthmain",staticClass:"content",attrs:{"id":"sth-main-content"}},[_c('FadeTransition',{attrs:{"duration":200,"mode":"out-in"}},[_c('router-view')],1)],1)}
var Contentvue_type_template_id_68471b6a_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Layout/Content.vue?vue&type=template&id=68471b6a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/Content.vue?vue&type=script&lang=js&

/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  components: {
    FadeTransition: vue2_transitions_m["b" /* FadeTransition */]
  }
});
// CONCATENATED MODULE: ./src/pages/Layout/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Layout/Content.vue





/* normalize component */

var Content_component = Object(componentNormalizer["a" /* default */])(
  Layout_Contentvue_type_script_lang_js_,
  Contentvue_type_template_id_68471b6a_render,
  Contentvue_type_template_id_68471b6a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Content = (Content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=a08542fa&
var SidebarFixedToggleButtonvue_type_template_id_a08542fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-minimize-fixed",staticStyle:{"opacity":"1"}},[_c('fade-transition',[(_vm.showButton)?_c('sidebar-toggle-button',{staticClass:"text-muted"}):_vm._e()],1)],1)}
var SidebarFixedToggleButtonvue_type_template_id_a08542fa_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Layout/SidebarFixedToggleButton.vue?vue&type=template&id=a08542fa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&


/* harmony default export */ var SidebarFixedToggleButtonvue_type_script_lang_js_ = ({
  name: 'sidebar-fixed-toggle-button',
  components: {
    SidebarToggleButton: SidebarToggleButton,
    FadeTransition: vue2_transitions_m["b" /* FadeTransition */]
  },
  data: function data() {
    return {
      showScrollThreshold: 50,
      currentScroll: 0,
      scrollTicking: false
    };
  },
  computed: {
    showButton: function showButton() {
      return this.currentScroll > this.showScrollThreshold;
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      var _this = this;

      this.currentScroll = window.scrollY;

      if (!this.scrollTicking) {
        window.requestAnimationFrame(function () {
          _this.scrollTicking = false;
        });
        this.scrollTicking = true;
      }
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
});
// CONCATENATED MODULE: ./src/pages/Layout/SidebarFixedToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_SidebarFixedToggleButtonvue_type_script_lang_js_ = (SidebarFixedToggleButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Layout/SidebarFixedToggleButton.vue





/* normalize component */

var SidebarFixedToggleButton_component = Object(componentNormalizer["a" /* default */])(
  Layout_SidebarFixedToggleButtonvue_type_script_lang_js_,
  SidebarFixedToggleButtonvue_type_template_id_a08542fa_render,
  SidebarFixedToggleButtonvue_type_template_id_a08542fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarFixedToggleButton = (SidebarFixedToggleButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SystemMenu.vue?vue&type=template&id=31be699a&
var SystemMenuvue_type_template_id_31be699a_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden"},[_c('div',{staticClass:"pl-4 noselect",attrs:{"id":"system-menu"}},[_c('div',{staticClass:"float-left ml-1"},[_vm._v(" v."+_vm._s(_vm.version)+" ")]),(!_vm.$root.isMobile)?_c('div',{staticClass:"system-menu-drag"}):_vm._e(),_c('div',{staticClass:"system-icons float-right"},[(_vm.$root.address)?_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.$root.address),expression:"$root.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"bottom"}},[_c('i',{staticClass:"tim-icons icon-single-copy-04 text-white"})]):_vm._e(),_c('el-tooltip',{attrs:{"content":_vm.toolTipsContent.copy,"effect":"light","open-delay":300,"placement":"bottom"}},[_c('span',{directives:[{name:"clipboard",rawName:"v-clipboard",value:(function () { return this$1.$root.address; }),expression:"() => this.$root.address"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccessHandler),expression:"clipboardSuccessHandler",arg:"success"}],staticClass:"text-white"},[_vm._v(" "+_vm._s(this.$root.address)+" ")])]),(!_vm.$root.isMobile && _vm.$root.address)?_c('span',{staticClass:"text-gold ml-3 mr-3"},[_c('img',{attrs:{"src":"/images/sth48.png","width":"20px"}}),_vm._v(" "+_vm._s(_vm.accountBalanceSTH)+" ")]):_vm._e(),(_vm.$root.address)?_c('base-dropdown',{staticClass:"nav-item currency-balance",attrs:{"tag":"span","menu-on-right":!_vm.$rtl.isRTL,"title-tag":"span","title-classes":"mr-3"}},[_c('template',{staticStyle:{"color":"rgb(9, 223, 251) !important"},slot:"title"},[_c('el-tooltip',{attrs:{"visible-arrow":false,"content":'1 ' + _vm.defaultCurrency.symbol + ' = ' + (1 / _vm.prices[_vm.defaultCurrency.ticker]).toFixed(2) + ' STH',"open-delay":300,"placement":"bottom"}},[_c('span',{staticClass:"text-gold text-decoration-none"},[_c('span',{staticClass:"text-white"},[_vm._v(_vm._s(_vm.defaultCurrency.symbol))]),_vm._v(_vm._s(_vm.accountBalance))])])],1),_vm._l((_vm.currencies),function(item,idx){return _c('li',{key:idx,staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-gold",on:{"click":function($event){return _vm.setDefaultCurrency(item.ticker, item.symbol, item.precision)}}},[_vm._v(_vm._s(item.title)+" "+_vm._s(item.symbol))])])})],2):_vm._e(),(!_vm.$root.isMobile && _vm.$root.address)?_c('span',{staticClass:"noselect mr-4"},[_c('router-link',{staticClass:"text-gold",attrs:{"to":"/wallet"}},[_c('i',{staticClass:"tim-icons icon-wallet-43"}),_vm._v(" "+_vm._s(_vm.$t('WALLET.WALLET')))])],1):_vm._e(),_c('span',{staticClass:"pointer position-relative text-gold",on:{"click":function($event){return _vm.setLocale('en')}}},[_vm._v("EN")]),_c('span',{staticClass:"pointer position-relative text-gold",on:{"click":function($event){return _vm.setLocale('ru')}}},[_vm._v(" RU")]),_c('span',{staticClass:"mr-4 pointer position-relative text-gold",on:{"click":function($event){return _vm.setLocale('cn')}}},[_vm._v(" CN")]),_c('router-link',{staticClass:"text-gold position-relative",attrs:{"to":"/lock"}},[_c('i',{staticClass:"tim-icons icon-lock-circle mr-3",attrs:{"title":"Lock Screen"},on:{"click":function($event){return _vm.minimize()}}})]),_c('i',{staticClass:"tim-icons icon-simple-delete mr-3 position-relative",attrs:{"title":"Minimize"},on:{"click":function($event){return _vm.minimize()}}}),_c('i',{staticClass:"tim-icons icon-tv-2 mr-3 position-relative",attrs:{"title":"Full screen (F11)"},on:{"click":function($event){return _vm.screen()}}}),_c('i',{staticClass:"tim-icons icon-refresh-01 mr-3 position-relative",attrs:{"title":"Reload App"},on:{"click":function($event){return _vm.reload()}}}),_c('i',{staticClass:"tim-icons icon-button-power mr-4 pr-2 position-relative",attrs:{"title":"Quit"},on:{"click":function($event){return _vm.close()}}})],1)])])}
var SystemMenuvue_type_template_id_31be699a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SystemMenu.vue?vue&type=template&id=31be699a&

// EXTERNAL MODULE: ./src/services/release.js
var release = __webpack_require__("a46f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SystemMenu.vue?vue&type=script&lang=js&





/* harmony default export */ var SystemMenuvue_type_script_lang_js_ = ({
  name: "SystemMenu",
  data: function data() {
    return {
      isElectron: Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON,
      isClosed: true,
      version: 0,
      toolTipsContent: {
        copy: "Copy My Address"
      },
      isOnline: true
    };
  },
  computed: {
    accountBalanceSTH: function accountBalanceSTH() {
      return (this.$store.getters['wallet/balance'] * 1).toFixed(2);
    },
    currencies: function currencies() {
      return this.$store.getters['wallet/currencies'];
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters['wallet/defaultCurrency'];
    },
    prices: function prices() {
      return this.$store.getters['wallet/marketPrice'];
    },
    accountBalance: function accountBalance() {
      return (this.$store.getters['wallet/balance'] * this.prices[this.defaultCurrency.ticker]).toFixed(this.defaultCurrency.precision);
    },
    usersOnline: function usersOnline() {
      return this.$store.getters['app/online'];
    }
  },
  methods: {
    clipboardSuccessHandler: function clipboardSuccessHandler(_ref) {
      var _this = this;

      var value = _ref.value,
          event = _ref.event;
      this.toolTipsContent.copy = 'Copied to clipboard';
      setTimeout(function () {
        return _this.toolTipsContent.copy = 'Copy My Address';
      }, 1500);
    },
    setDefaultCurrency: function setDefaultCurrency(ticker, symbol, precision) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$store.dispatch('wallet/setDefaultCurrency', {
                  ticker: ticker,
                  symbol: symbol,
                  precision: precision
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setLocale: function setLocale(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch('app/setLanguage', locale);
    },
    minimize: function minimize() {
      if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
        electronSystem_minimize();
      }
    },
    close: function close() {
      if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
        electronSystem_close();
      }
    },
    maximize: function maximize() {
      if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
        electronSystem_maximize();
      }
    },
    screen: function screen() {
      if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
        electronSystem_screen();
      }
    },
    reload: function reload() {
      electronSystem_reload();
    }
  },
  mounted: function mounted() {
    this.version = release["a" /* default */].currentVersion;

    if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {}
  },
  created: function created() {
    var _this3 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this3.$eventBus.on('app-isonline', function (data) {
                _this3.isOnline = data;
                _this3.$root.isOnline = data;
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/SystemMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SystemMenuvue_type_script_lang_js_ = (SystemMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SystemMenu.vue?vue&type=style&index=0&lang=css&
var SystemMenuvue_type_style_index_0_lang_css_ = __webpack_require__("4738");

// CONCATENATED MODULE: ./src/components/SystemMenu.vue






/* normalize component */

var SystemMenu_component = Object(componentNormalizer["a" /* default */])(
  components_SystemMenuvue_type_script_lang_js_,
  SystemMenuvue_type_template_id_31be699a_render,
  SystemMenuvue_type_template_id_31be699a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SystemMenu = (SystemMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalSetLabel.vue?vue&type=template&id=71b0bf60&scoped=true&
var ModalSetLabelvue_type_template_id_71b0bf60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModal,"show-close":true,"headerClasses":"justify-content-center","type":"default"},on:{"update:show":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"modal-profile modal-profile-primary",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-tag"})]),_c('p',{staticClass:"text-center"},[_vm._v("Set name for "+_vm._s(_vm.address))]),_c('base-input',{attrs:{"type":"text","placeholder":"Enter Wallet Name"},model:{value:(_vm.label),callback:function ($$v) {_vm.label=$$v},expression:"label"}}),_c('template',{slot:"footer"},[_c('base-button',{attrs:{"type":"neutral info","link":""},on:{"click":_vm.setLabel}},[_vm._v(_vm._s(_vm.$t('APP.CONFIRM')))]),_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":function($event){return _vm.$emit('onModalClose')}}},[_vm._v(" "+_vm._s(_vm.$t('APP.CANCEL'))+" ")])],1)],2)}
var ModalSetLabelvue_type_template_id_71b0bf60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalSetLabel.vue?vue&type=template&id=71b0bf60&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalSetLabel.vue?vue&type=script&lang=js&



/* harmony default export */ var ModalSetLabelvue_type_script_lang_js_ = ({
  name: "ModalSetLabel",
  components: {
    Modal: components["g" /* Modal */]
  },
  data: function data() {
    return {
      label: ''
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    address: {
      type: String
    }
  },
  methods: {
    setLabel: function setLabel() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.label.length > 0)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('wallet/setLabel', {
                  address: _this.address,
                  label: _this.label
                });

              case 3:
                _this.$emit('onModalClose');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.label = '';

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  mounted: function mounted() {
    this.label = '';
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalSetLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalSetLabelvue_type_script_lang_js_ = (ModalSetLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalSetLabel.vue





/* normalize component */

var ModalSetLabel_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalSetLabelvue_type_script_lang_js_,
  ModalSetLabelvue_type_template_id_71b0bf60_scoped_true_render,
  ModalSetLabelvue_type_template_id_71b0bf60_scoped_true_staticRenderFns,
  false,
  null,
  "71b0bf60",
  null
  
)

/* harmony default export */ var ModalSetLabel = (ModalSetLabel_component.exports);
// EXTERNAL MODULE: ./src/components/Wallet/Unlock.vue + 4 modules
var Unlock = __webpack_require__("cb9c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalAddContact.vue?vue&type=template&id=1b7c157a&scoped=true&
var ModalAddContactvue_type_template_id_1b7c157a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModal,"show-close":true,"headerClasses":"justify-content-center","type":"default"},on:{"update:show":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"modal-profile modal-profile-primary",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-book-bookmark"})]),_c('p',{staticClass:"text-center"},[_vm._v("Add New Contact "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isValidAddress && _vm.address),expression:"!isValidAddress && address"}],staticClass:"badge badge-danger"},[_c('i',{staticClass:"tim-icons icon-bell-55"}),_vm._v(" Address not valid ")])]),_c('base-input',{attrs:{"type":"text","placeholder":"Enter Contact Name","addon-left-icon":"tim-icons icon-tag"},model:{value:(_vm.label),callback:function ($$v) {_vm.label=$$v},expression:"label"}}),_c('base-input',{attrs:{"type":"text","placeholder":"Enter SmartHoldem Address","addon-left-icon":"tim-icons icon-wallet-43"},on:{"input":_vm.validateAddress},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_c('template',{slot:"footer"},[_c('base-button',{attrs:{"disabled":!_vm.isValidAddress,"type":"neutral info","link":""},on:{"click":_vm.setAction}},[_vm._v(_vm._s(_vm.$t('APP.CONFIRM')))]),_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":function($event){return _vm.$emit('onModalClose')}}},[_vm._v(" "+_vm._s(_vm.$t('APP.CANCEL'))+" ")])],1)],2)}
var ModalAddContactvue_type_template_id_1b7c157a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalAddContact.vue?vue&type=template&id=1b7c157a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalAddContact.vue?vue&type=script&lang=js&



/* harmony default export */ var ModalAddContactvue_type_script_lang_js_ = ({
  name: "ModalAddContact",
  components: {
    Modal: components["g" /* Modal */]
  },
  data: function data() {
    return {
      address: '',
      label: '',
      isValidAddress: false
    };
  },
  props: {
    showModal: Boolean,
    default: false
  },
  methods: {
    setAction: function setAction() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.label.length > 0 && _this.isValidAddress)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('app/setContact', {
                  address: _this.address,
                  label: _this.label,
                  balance: 0
                });

              case 3:
                _context.next = 5;
                return _this.$store.dispatch('app/fetchContacts');

              case 5:
                _this.$emit('onModalClose');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateAddress: function validateAddress() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('wallet/validateAddress', _this2.address);

              case 2:
                _this2.isValidAddress = _context2.sent;
                return _context2.abrupt("return", _this2.isValidAddress);

              case 4:
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
              _this3.label = '';
              _this3.address = '';

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalAddContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalAddContactvue_type_script_lang_js_ = (ModalAddContactvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalAddContact.vue





/* normalize component */

var ModalAddContact_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalAddContactvue_type_script_lang_js_,
  ModalAddContactvue_type_template_id_1b7c157a_scoped_true_render,
  ModalAddContactvue_type_template_id_1b7c157a_scoped_true_staticRenderFns,
  false,
  null,
  "1b7c157a",
  null
  
)

/* harmony default export */ var ModalAddContact = (ModalAddContact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalTxSend.vue?vue&type=template&id=268006af&scoped=true&
var ModalTxSendvue_type_template_id_268006af_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModal,"show-close":true,"headerClasses":"justify-content-center"},on:{"update:show":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"modal-profile",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-spaceship"})]),_c('p',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t("WALLET.SEND"))+" SmartHoldem "+_vm._s(_vm.$t("WALLET.FROM"))+" "+_vm._s(_vm.address))]),(!_vm.tx.id)?_c('div',[_c('div',{staticStyle:{"height":"30px"}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isValidAddress && _vm.send.address),expression:"!isValidAddress && send.address"}],staticClass:"badge badge-danger"},[_c('i',{staticClass:"tim-icons icon-bell-55"}),_vm._v(" Address not valid")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isValidAddress || !_vm.send.address),expression:"isValidAddress || !send.address"}],staticClass:"badge badge-success"},[_vm._v("Fee 1 STH")])]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-11 pr-1 mr-0"},[_c('base-input',{class:_vm.modalClasses.address,attrs:{"type":"text","placeholder":"Enter Recipient Address","addon-left-icon":"tim-icons icon-single-02"},on:{"input":_vm.validateAddress},model:{value:(_vm.send.address),callback:function ($$v) {_vm.$set(_vm.send, "address", $$v)},expression:"send.address"}})],1),(!_vm.$root.isMobile)?_c('div',{staticClass:"col-md-1 pl-1"},[(_vm.contactList.length > 0)?_c('base-dropdown',{staticClass:"pt-0 mt-0 pr-0",attrs:{"menuOnRight":false,"title-classes":"dropdown-toggle btn btn-dark btn-simple btn-block pb-2","icon":"tim-icons icon-minimal-down","type":"info","simple":""}},_vm._l((_vm.contactList),function(item,idx){return _c('span',{key:idx,staticClass:"dropdown-item",attrs:{"id":'ct-' + idx},on:{"click":function($event){_vm.send.address = item.address; _vm.validateAddress()}}},[_vm._v(_vm._s(item.label)+" - "+_vm._s(item.address))])}),0):_vm._e()],1):_vm._e(),_c('div',{staticClass:"col-md-11 pr-1 mr-0"},[_c('base-input',{class:_vm.modalClasses.amount,attrs:{"type":"text","placeholder":"Enter Amount STH","addon-left-icon":"tim-icons icon-coins"},on:{"input":_vm.validateAmount},model:{value:(_vm.send.amount),callback:function ($$v) {_vm.$set(_vm.send, "amount", $$v)},expression:"send.amount"}}),_c('base-input',{directives:[{name:"validate",rawName:"v-validate",value:('max:64'),expression:"'max:64'"}],attrs:{"type":"text","placeholder":"Memo Optional","addon-left-icon":"tim-icons icon-paper","maxlength":"64"},model:{value:(_vm.send.memo),callback:function ($$v) {_vm.$set(_vm.send, "memo", $$v)},expression:"send.memo"}})],1)]),_c('span',[_vm._v(_vm._s(_vm.$t("WALLET.REMAINING"))+" "),_c('span',{staticClass:"pointer font-weight-bolder",on:{"click":function($event){_vm.send.amount = _vm.remainingBalance}}},[_vm._v(" "+_vm._s(_vm.remainingBalance)+" ")]),_vm._v(" STH ")])]):_vm._e(),(_vm.tx.id)?_c('div',{},[_c('hr',{staticClass:"bg-success"}),_c('table',[_c('tbody',[_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("TX ID")]),_c('td',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.tx.id.substr(0,10))+"..."+_vm._s(_vm.tx.id.substr(-10)))])]),_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("From")]),_c('td',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.address.substr(0,12))+"..."+_vm._s(_vm.address.substr(-12)))])]),_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("To")]),_c('td',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.tx.recipientId.substr(0,12))+"..."+_vm._s(_vm.tx.recipientId.substr(-12)))])]),_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("Amount")]),_c('td',{staticClass:"text-right"},[_vm._v(_vm._s(_vm.send.amount)+" STH")])]),_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("Fee")]),_c('td',{staticClass:"text-right"},[_vm._v("1 STH")])]),_c('tr',{staticClass:"border-bottom"},[_c('th',[_vm._v("Memo")]),_c('td',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.send.memo))])])])])]):_vm._e(),_c('template',{slot:"footer"},[(_vm.tx.id)?_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":_vm.broadcastTx}},[_vm._v("Send "+_vm._s(_vm.send.amount * 1 + 1)+" STH "),_c('i',{staticClass:"tim-icons icon-check-2"})]):_vm._e(),(!_vm.tx.id)?_c('base-button',{attrs:{"disabled":!_vm.isValidAddress || _vm.remainingBalance < 0 || !_vm.send.amount,"type":"neutral","link":""},on:{"click":_vm.prepareTx}},[_vm._v("Next "),_c('i',{staticClass:"tim-icons icon-check-2"})]):_vm._e(),_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":function($event){return _vm.$emit('onModalClose')}}},[_c('i',{staticClass:"tim-icons icon-simple-remove"}),_vm._v(" Cancel ")])],1)],2)}
var ModalTxSendvue_type_template_id_268006af_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalTxSend.vue?vue&type=template&id=268006af&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./src/plugins/event-bus.js
var event_bus = __webpack_require__("e00b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalTxSend.vue?vue&type=script&lang=js&






/* harmony default export */ var ModalTxSendvue_type_script_lang_js_ = ({
  name: "ModalTxSend",
  components: {
    Modal: components["g" /* Modal */]
  },
  data: function data() {
    return {
      isValidAddress: false,
      tx: {},
      account: {
        address: null,
        secret: null
      },
      send: {
        address: null,
        amount: null,
        memo: null
      },
      modalClasses: {
        address: '',
        amount: ''
      }
    };
  },
  props: {
    showModal: false,
    address: {
      type: String
    }
  },
  computed: {
    contactList: function contactList() {
      var data = this.$store.getters['app/contacts'];
      var keys = Object.keys(data);
      var result = [];

      for (var i = 0; i < keys.length; i++) {
        result.push(data[keys[i]]);
      }

      return result;
    },
    walletBalance: function walletBalance() {
      return this.$store.getters['wallet/balances']['accounts'][this.address] || {
        balance: 0
      };
    },
    remainingBalance: function remainingBalance() {
      var result = (this.walletBalance.balance - this.send.amount * 1).toFixed(8) * 1 - 1;

      if (result < 0) {
        this.setClassAmount();
      }

      return result;
    }
  },
  methods: {
    setClassAmount: function setClassAmount() {
      this.modalClasses.amount = 'has-danger';
    },
    validateAmount: function validateAmount() {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    broadcastTx: function broadcastTx() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.$store.dispatch('wallet/broadcastTxNative', _this.tx);

              case 2:
                response = _context3.sent;

                if (response.success === true) {
                  event_bus["a" /* default */].emit('addtx:unconfirmed', {
                    id: response.transactionIds[0],
                    confirmations: 0,
                    time: "wait",
                    amount: '-' + _this.send.amount,
                    senderId: _this.address,
                    recipientId: _this.send.address,
                    vendorField: _this.send.memo,
                    type: 0,
                    asset: null,
                    op: "-"
                  });

                  _this.notifyVue('bottom', 'right', 'success', 'Success send ' + _this.send.amount + ' STH');

                  setTimeout(Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this.$store.dispatch('wallet/getTxsByAddress');

                          case 2:
                            _this.tx = {};
                            _this.send = {
                              address: null,
                              amount: null,
                              memo: null
                            };

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  })), 10000);

                  _this.$emit('onModalClose');
                } else {
                  _this.notifyVue('top', 'center', 'danger', 'Error send tx, please retry!');
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    notifyVue: function notifyVue(verticalAlign, horizontalAlign) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
      var msg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Success';
      this.$notify({
        message: msg,
        timeout: 10000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type
      });
    },
    walletDecrypt: function walletDecrypt(address) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var secret;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this2.$store.dispatch('app/walletDecrypt', {
                  address: address,
                  pin: _this2.$root.pin
                });

              case 2:
                secret = _context4.sent;
                _this2.account.address = address;
                _this2.account.secret = secret;
                return _context4.abrupt("return", _this2.account);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    prepareTx: function prepareTx() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        var decryptData, preparedTx;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this3.isValidAddress) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return _this3.walletDecrypt(_this3.address);

              case 4:
                decryptData = _context5.sent;

                if (!decryptData.secret) {
                  _context5.next = 13;
                  break;
                }

                _this3.tx = {};
                _context5.next = 9;
                return _this3.$store.dispatch('wallet/prepareTxNative', {
                  secret: decryptData.secret,
                  secondSecret: null,
                  recipient: _this3.send.address,
                  amount: _this3.send.amount,
                  memo: _this3.send.memo
                });

              case 9:
                preparedTx = _context5.sent;
                _this3.tx = preparedTx;
                _context5.next = 14;
                break;

              case 13:
                event_bus["a" /* default */].emit('modal:unlock');

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    validateAddress: function validateAddress() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this4.$store.dispatch('wallet/validateAddress', _this4.send.address);

              case 2:
                _this4.isValidAddress = _context6.sent;
                result = false;

                if (_this4.isValidAddress) {
                  _this4.modalClasses.address = 'has-success';
                  result = true;
                } else {
                  _this4.modalClasses.address = 'has-danger';
                }

                return _context6.abrupt("return", result);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalTxSend.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalTxSendvue_type_script_lang_js_ = (ModalTxSendvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalTxSend.vue





/* normalize component */

var ModalTxSend_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalTxSendvue_type_script_lang_js_,
  ModalTxSendvue_type_template_id_268006af_scoped_true_render,
  ModalTxSendvue_type_template_id_268006af_scoped_true_staticRenderFns,
  false,
  null,
  "268006af",
  null
  
)

/* harmony default export */ var ModalTxSend = (ModalTxSend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalTxVote.vue?vue&type=template&id=93ca8f96&scoped=true&
var ModalTxVotevue_type_template_id_93ca8f96_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModalVote,"show-close":true,"headerClasses":"justify-content-center","type":"default"},on:{"update:show":function($event){_vm.showModalVote=$event}}},[(_vm.voteData)?_c('div',{staticClass:"modal-profile",attrs:{"slot":"header"},slot:"header"},[(_vm.voteData.voteType === '-')?_c('i',{staticClass:"tim-icons icon-simple-delete"}):_vm._e(),(_vm.voteData.voteType === '+')?_c('i',{staticClass:"tim-icons icon-simple-add"}):_vm._e()]):_vm._e(),(_vm.voteData && _vm.voteData.delegate)?_c('div',[_c('p',{staticClass:"text-center"},[(_vm.voteData.voteType === '-' && _vm.voteData.delegate)?_c('span',[_vm._v("Remove")]):_vm._e(),_vm._v(" Vote for "),_c('strong',[_vm._v(_vm._s(_vm.voteData.delegate.username))])]),_c('p',{staticClass:"text-center"},[_vm._v("VOTE FEE 1 STH")]),_c('hr'),(_vm.voteData.delegate)?_c('p',[_vm._v(" DELEGATE RATE "+_vm._s(this.voteData.delegate.rate)+" "),_c('br'),_vm._v("DELEGATE PRODUCTIVITY "+_vm._s(this.voteData.delegate.productivity)+"% ")]):_vm._e()]):_vm._e(),(_vm.voteData)?_c('template',{slot:"footer"},[_c('base-button',{attrs:{"type":"neutral info","link":""},on:{"click":_vm.confirmAction}},[_vm._v(_vm._s(_vm.$t('APP.CONFIRM'))+" "),(_vm.voteData.voteType === '-')?_c('span',[_vm._v("Unvote")]):_vm._e(),(_vm.voteData.voteType === '+')?_c('span',[_vm._v("Add Vote")]):_vm._e()]),_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":function($event){return _vm.$emit('onModalClose')}}},[_vm._v(" "+_vm._s(_vm.$t('APP.CANCEL'))+" ")])],1):_vm._e()],2)}
var ModalTxVotevue_type_template_id_93ca8f96_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalTxVote.vue?vue&type=template&id=93ca8f96&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalTxVote.vue?vue&type=script&lang=js&




/* harmony default export */ var ModalTxVotevue_type_script_lang_js_ = ({
  components: {
    Modal: components["g" /* Modal */]
  },
  props: {
    showModalVote: false,
    voteData: {}
  },
  data: function data() {
    return {
      account: {
        secret: null,
        secondSecret: null
      }
    };
  },
  methods: {
    walletDecrypt: function walletDecrypt(address) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var secret;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('app/walletDecrypt', {
                  address: address,
                  pin: _this.$root.pin
                });

              case 2:
                secret = _context.sent;
                _this.account.address = address;
                _this.account.secret = secret;
                return _context.abrupt("return", _this.account);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirmAction: function confirmAction() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var decryptData, response, votes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.walletDecrypt(_this2.voteData.address);

              case 2:
                decryptData = _context3.sent;
                _context3.next = 5;
                return _this2.$store.dispatch('wallet/TxVote', {
                  secret: decryptData.secret,
                  vote: _this2.voteData.voteType + _this2.voteData.delegate.publicKey,
                  secondSecret: null
                });

              case 5:
                response = _context3.sent;

                if (response.success === true) {
                  _this2.notifyVue('bottom', 'right', 'success', _this2.voteData.voteType + 'Vote Success');

                  votes = [_this2.voteData.voteType + _this2.voteData.delegate.publicKey];
                  event_bus["a" /* default */].emit('addtx:unconfirmed', {
                    id: response.transactionIds[0],
                    confirmations: 0,
                    time: "wait",
                    amount: '-1',
                    senderId: _this2.account.address,
                    recipientId: _this2.account.address,
                    vendorField: 'send vote',
                    type: 3,
                    asset: votes,
                    op: "-"
                  });
                  setTimeout(Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this2.$store.dispatch('blockchain/getAccount', _this2.voteData.address);

                          case 2:
                            _context2.next = 4;
                            return _this2.$store.dispatch('wallet/getTxsByAddress');

                          case 4:
                            _context2.next = 6;
                            return _this2.$store.dispatch('wallet/getBalances');

                          case 6:
                            _this2.account = {
                              secret: null,
                              secondSecret: null
                            };

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  })), 10000);
                } else {
                  _this2.notifyVue('top', 'center', 'danger', 'Error send tx, please retry!');
                }

                _this2.$emit('onModalClose');

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    notifyVue: function notifyVue(verticalAlign, horizontalAlign) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
      var msg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Success';
      this.$notify({
        message: msg,
        timeout: 10000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalTxVote.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalTxVotevue_type_script_lang_js_ = (ModalTxVotevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalTxVote.vue





/* normalize component */

var ModalTxVote_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalTxVotevue_type_script_lang_js_,
  ModalTxVotevue_type_template_id_93ca8f96_scoped_true_render,
  ModalTxVotevue_type_template_id_93ca8f96_scoped_true_staticRenderFns,
  false,
  null,
  "93ca8f96",
  null
  
)

/* harmony default export */ var ModalTxVote = (ModalTxVote_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalQrAddress.vue?vue&type=template&id=bf00e204&scoped=true&
var ModalQrAddressvue_type_template_id_bf00e204_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModal,"show-close":true,"headerClasses":"justify-content-center","type":"default"},on:{"update:show":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"title",attrs:{"slot":"header"},slot:"header"},[_vm._v(" SmartHoldem "+_vm._s(_vm.$t('WALLET.QR_INVOICE'))+" ")]),_c('div',{staticClass:"text-center"},[(_vm.address)?_c('VueQrcode',{staticClass:"qr-wallet",attrs:{"value":_vm.qrData,"options":{size:192}}}):_vm._e(),_c('p',{staticClass:"p-3"},[_vm._v(_vm._s(_vm.$t('WALLET.CLICK_ADDRESS')))]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.address),expression:"address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"effect":"light","open-delay":300,"placement":"top"}},[_c('p',{staticClass:"text-center font-weight-bolder pointer"},[_c('i',{staticClass:"tim-icons icon-single-copy-04 pointer"}),_vm._v(" "+_vm._s(_vm.address))])])],1),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('base-input',{attrs:{"type":"text","label":_vm.$t('WALLET.AMOUNT'),"placeholder":"Enter Amount","addon-left-icon":"tim-icons icon-coins"},model:{value:(_vm.model.amount),callback:function ($$v) {_vm.$set(_vm.model, "amount", $$v)},expression:"model.amount"}})],1),_c('div',{staticClass:"col-md-6"},[_c('base-input',{attrs:{"type":"text","label":_vm.$t('WALLET.MEMO'),"placeholder":"Enter Memo","addon-left-icon":"tim-icons icon-paper"},model:{value:(_vm.model.memo),callback:function ($$v) {_vm.$set(_vm.model, "memo", $$v)},expression:"model.memo"}})],1)]),_c('template',{slot:"footer"},[_c('p',{staticClass:"pl-3 pb-3 pointer text-center font-weight-bolder text-info",on:{"click":function($event){return _vm.openLink('https://play.google.com/store/apps/details?id=io.smartholdem.client')}}},[_c('i',{staticClass:"fab fa-google-play text-green sth-icons-24 float-left mr-3"}),_vm._v(" "+_vm._s(_vm.$t('WALLET.SCAN_INVOICE_MOB'))+" ")])])],2)}
var ModalQrAddressvue_type_template_id_bf00e204_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalQrAddress.vue?vue&type=template&id=bf00e204&scoped=true&

// EXTERNAL MODULE: ./src/util/QRCode.js
var QRCode = __webpack_require__("3f67");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalQrAddress.vue?vue&type=script&lang=js&




/* harmony default export */ var ModalQrAddressvue_type_script_lang_js_ = ({
  name: "ModalQrAddress",
  components: {
    Modal: components["g" /* Modal */],
    VueQrcode: QRCode["a" /* default */]
  },
  props: {
    showModal: false,
    address: null
  },
  data: function data() {
    return {
      model: {
        amount: '',
        memo: ''
      },
      toolTipsContent: {
        copy: "Copy"
      }
    };
  },
  computed: {
    qrData: function qrData() {
      return JSON.stringify({
        a: this.address,
        amount: this.model.amount || null,
        vendorField: this.model.memo || null,
        asset: 'sth'
      });
    }
  },
  methods: {
    clipboardSuccessHandler: function clipboardSuccessHandler(_ref) {
      var _this = this;

      var value = _ref.value,
          event = _ref.event;
      this.toolTipsContent.copy = 'Copied to clipboard';
      setTimeout(function () {
        return _this.toolTipsContent.copy = 'Copy';
      }, 1500);
    },
    setAction: function setAction() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.model = {
                  amount: '',
                  memo: ''
                };

                _this2.$emit('onModalClose');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalQrAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalQrAddressvue_type_script_lang_js_ = (ModalQrAddressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalQrAddress.vue





/* normalize component */

var ModalQrAddress_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalQrAddressvue_type_script_lang_js_,
  ModalQrAddressvue_type_template_id_bf00e204_scoped_true_render,
  ModalQrAddressvue_type_template_id_bf00e204_scoped_true_staticRenderFns,
  false,
  null,
  "bf00e204",
  null
  
)

/* harmony default export */ var ModalQrAddress = (ModalQrAddress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalPrivate.vue?vue&type=template&id=c1ecc70e&scoped=true&
var ModalPrivatevue_type_template_id_c1ecc70e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.showModal,"show-close":true,"headerClasses":"justify-content-center"},on:{"update:show":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"modal-profile",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-key-25"})]),_c('h4',{staticClass:"text-center"},[_vm._v("Private Data")]),_c('p',{staticClass:"text-center"},[_vm._v("For address "),_c('i',{staticClass:"tim-icons icon-wallet-43"}),_vm._v(" "+_vm._s(_vm.account.address))]),_c('p',{staticClass:"text-white small text-center badge badge-danger"},[_vm._v(" "+_vm._s(_vm.$t('WALLET.NEVER_SHARE_PRIV'))+" ")]),_c('hr',{staticClass:"bg-primary"}),_c('p',{staticClass:"text-center"},[_vm._v("- "+_vm._s(_vm.$t('WALLET.YOUR_SECRET'))+" -")]),_c('el-tooltip',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.account.secret),expression:"account.secret",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.clipboardSuccess),expression:"clipboardSuccess",arg:"success"}],attrs:{"content":_vm.mixval.copied,"open-delay":300}},[_c('p',{staticClass:"font-weight-light text-center"},[_c('i',{staticClass:"tim-icons icon-single-copy-04 pointer"}),_vm._v(" "),_c('span',{staticClass:"text-primary ml-2"},[_vm._v(_vm._s(_vm.account.secret))])])]),_c('hr',{staticClass:"bg-primary"}),_c('div',{staticClass:"text-center w-100 pb-3"},[_c('div',{},[_c('p',[_vm._v(_vm._s(_vm.$t('WALLET.QR_PRIV')))]),(_vm.account.secret)?_c('VueQrcode',{staticClass:"qr-wallet",attrs:{"value":_vm.qrData,"options":{size: 180}}}):_vm._e(),_c('p',[_vm._v(_vm._s(_vm.addressName(_vm.address)))]),_c('p',{staticClass:"pointer text-center font-weight-bolder text-info",on:{"click":function($event){return _vm.openLink('https://play.google.com/store/apps/details?id=io.smartholdem.client')}}},[_c('i',{staticClass:"fab fa-google-play text-green sth-icons-24 float-left mr-3"}),_vm._v(" "+_vm._s(_vm.$t('WALLET.QR_PRIV_SCAN'))+" ")])],1)]),_c('template',{slot:"footer"})],2)}
var ModalPrivatevue_type_template_id_c1ecc70e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ModalPrivate.vue?vue&type=template&id=c1ecc70e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ModalPrivate.vue?vue&type=script&lang=js&




/* harmony default export */ var ModalPrivatevue_type_script_lang_js_ = ({
  name: "ModalPrivate",
  components: {
    Modal: components["g" /* Modal */],
    VueQrcode: QRCode["a" /* default */]
  },
  props: {
    showModal: false,
    address: null
  },
  data: function data() {
    return {
      toolTipsContent: 'Click Copy',
      account: {
        address: null,
        secret: null,
        secondSecret: null
      }
    };
  },
  computed: {
    qrData: function qrData() {
      return JSON.stringify({
        address: this.account.address,
        secret: this.account.secret || null,
        secondSecret: this.account.secondSecret || null,
        asset: 'sth',
        label: this.addressName(this.address) || null
      });
    }
  },
  methods: {
    addressName: function addressName(address) {
      return this.$store.getters['wallet/labels'][address];
    },
    walletDecrypt: function walletDecrypt(address) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.$root.pin) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('app/walletDecrypt', {
                  address: address,
                  pin: _this.$root.pin
                });

              case 3:
                result = _context.sent;
                _this.account.address = address;
                _this.account.secret = result;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.walletDecrypt(_this2.address);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ModalPrivate.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ModalPrivatevue_type_script_lang_js_ = (ModalPrivatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Wallet/ModalPrivate.vue





/* normalize component */

var ModalPrivate_component = Object(componentNormalizer["a" /* default */])(
  Wallet_ModalPrivatevue_type_script_lang_js_,
  ModalPrivatevue_type_template_id_c1ecc70e_scoped_true_render,
  ModalPrivatevue_type_template_id_c1ecc70e_scoped_true_staticRenderFns,
  false,
  null,
  "c1ecc70e",
  null
  
)

/* harmony default export */ var ModalPrivate = (ModalPrivate_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&






function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function _initScrollbar(className) {
  if (hasElement(className)) {
    new perfect_scrollbar_esm["a" /* default */](".".concat(className));
  } else {
    setTimeout(function () {
      _initScrollbar(className);
    }, 100);
  }
}














/* harmony default export */ var DashboardLayoutvue_type_script_lang_js_ = ({
  components: {
    DashboardNavbar: DashboardNavbar,
    ContentFooter: ContentFooter,
    SidebarFixedToggleButton: SidebarFixedToggleButton,
    DashboardContent: Content,
    SlideYDownTransition: vue2_transitions_m["c" /* SlideYDownTransition */],
    ZoomCenterTransition: vue2_transitions_m["e" /* ZoomCenterTransition */],
    SystemMenu: SystemMenu,
    ModalSetLabel: ModalSetLabel,
    ModalTxVote: ModalTxVote,
    ModalUnlock: Unlock["a" /* default */],
    ModalAddContact: ModalAddContact,
    ModalTxSend: ModalTxSend,
    ModalQrAddress: ModalQrAddress,
    ModalPrivate: ModalPrivate
  },
  data: function data() {
    return {
      modal: {
        label: {
          show: false,
          address: ''
        },
        vote: {
          show: false,
          data: {
            username: ''
          }
        },
        unlock: {
          show: false
        },
        contacts: {
          show: false
        },
        send: {
          show: false,
          address: ''
        },
        qr: {
          show: false,
          address: ''
        },
        private: {
          show: false,
          address: ''
        }
      },
      sidebarBackground: 'red'
    };
  },
  computed: {
    settingsData: function settingsData() {
      return this.$store.getters['app/settings'];
    }
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this.$store.dispatch('app/setPage', 'wallet');

            case 2:
              if (_this.isElectron()) {
                _context9.next = 9;
                break;
              }

              if (_this.$store.getters['app/pinEncrypted']) {
                _context9.next = 8;
                break;
              }

              _context9.next = 6;
              return _this.$router.push({
                path: '/register'
              });

            case 6:
              _context9.next = 9;
              break;

            case 8:
              if (!_this.$root.pin) {}

            case 9:
              _context9.next = 11;
              return _this.getFees();

            case 11:
              _this.$eventBus.on('close:modal', Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this.modal = {
                          label: {
                            show: false,
                            address: ''
                          },
                          vote: {
                            show: false,
                            data: {}
                          },
                          unlock: {
                            show: false
                          },
                          contacts: {
                            show: false
                          },
                          send: {
                            show: false,
                            address: ''
                          },
                          qr: {
                            show: false,
                            address: ''
                          },
                          private: {
                            show: false,
                            address: ''
                          }
                        };

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

              _this.$eventBus.on('modal:label', function () {
                var _ref2 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2(address) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this.modal.label.show = false;
                          _this.modal.label.address = address;
                          _this.modal.label.show = true;
                          _context2.next = 5;
                          return _this.$store.dispatch('wallet/getBalances');

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

              _this.$eventBus.on('modal:unlock', Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _this.modal.unlock.show = false;
                        _this.modal.unlock.show = true;

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })));

              _this.$eventBus.on('modal:vote', function () {
                var _ref4 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4(data) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _this.modal.vote.show = false;
                          _this.modal.vote.data = data;
                          _this.modal.vote.show = true;

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }());

              _this.$eventBus.on('modal:contacts', Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _this.modal.contacts.show = false;
                        _this.modal.contacts.show = true;

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })));

              _this.$eventBus.on('modal:send', function () {
                var _ref6 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6(address) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _this.modal.send.show = false;
                          _this.modal.send.address = address;
                          _this.modal.send.show = true;

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x3) {
                  return _ref6.apply(this, arguments);
                };
              }());

              _this.$eventBus.on('modal:qr', function () {
                var _ref7 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7(options) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _this.modal.qr.show = false;
                          _this.modal.qr.address = options.address;
                          _this.modal.qr.show = true;

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x4) {
                  return _ref7.apply(this, arguments);
                };
              }());

              _this.$eventBus.on('modal:private', function () {
                var _ref8 = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8(options) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _this.modal.private.show = false;
                          _this.modal.private.address = options.address;
                          _this.modal.private.show = true;

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x5) {
                  return _ref8.apply(this, arguments);
                };
              }());

              _context9.next = 21;
              return _this.$store.dispatch('network/getSeed');

            case 21:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  methods: {
    isElectron: function isElectron() {
      return Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON;
    },
    toggleSidebar: function toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    initScrollbar: function initScrollbar() {
      var docClasses = document.body.classList;
      var isWindows = navigator.platform.startsWith('Win');

      if (isWindows) {
        _initScrollbar('sidebar');

        _initScrollbar('main-panel');

        _initScrollbar('sidebar-wrapper');

        docClasses.add('perfect-scrollbar-on');
      } else {
        docClasses.add('perfect-scrollbar-off');
      }
    },
    getFees: function getFees() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this2.$store.dispatch('blockchain/getFees');

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_DashboardLayoutvue_type_script_lang_js_ = (DashboardLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Layout/DashboardLayout.vue?vue&type=style&index=0&lang=scss&
var DashboardLayoutvue_type_style_index_0_lang_scss_ = __webpack_require__("67d3");

// CONCATENATED MODULE: ./src/pages/Layout/DashboardLayout.vue






/* normalize component */

var DashboardLayout_component = Object(componentNormalizer["a" /* default */])(
  Layout_DashboardLayoutvue_type_script_lang_js_,
  DashboardLayoutvue_type_template_id_05bd893c_render,
  DashboardLayoutvue_type_template_id_05bd893c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DashboardLayout = (DashboardLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AuthLayout.vue?vue&type=template&id=68c738c1&
var AuthLayoutvue_type_template_id_68c738c1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"background":"#fefdf9"}},[(!_vm.isElectron)?_c('base-nav',{staticClass:"auth-navbar fixed-top navbar-gold noselect",attrs:{"type":"white","transparent":false,"menu-classes":"justify-content-end"},model:{value:(_vm.showMenu),callback:function ($$v) {_vm.showMenu=$$v},expression:"showMenu"}},[_c('div',{staticClass:"navbar-wrapper",attrs:{"slot":"brand"},slot:"brand"},[_c('router-link',{staticClass:"navbar-brand",attrs:{"to":"/home"}},[_c('img',{staticClass:"mr-2",attrs:{"src":"/images/sth80.png","height":"28px"}}),_c('span',{staticClass:"hide-small"},[_vm._v("SmartHoldem")])]),(_vm.title !== 'SmartHoldem')?_c('router-link',{staticClass:"navbar-brand",attrs:{"to":"/home"}},[_vm._v("Home")]):_vm._e()],1),_c('ul',{staticClass:"navbar-nav"},[_c('router-link',{staticClass:"nav-item",attrs:{"tag":"li","to":"/wallet"}},[_c('a',{staticClass:"nav-link text-dark"},[_c('i',{staticClass:"tim-icons icon-planet sth-icons-24"}),_vm._v(" Online "),_c('span',{staticClass:"hide-small"},[_vm._v("Wallet")])])]),_c('router-link',{staticClass:"nav-item",attrs:{"tag":"li","to":"/coin"}},[_c('a',{staticClass:"nav-link"},[_c('i',{staticClass:"sth-icons icon-sth sth-icons-24"}),_vm._v(" STH "),_c('span',{staticClass:"hide-small"},[_vm._v("Coin")])])]),_c('router-link',{staticClass:"nav-item",attrs:{"tag":"li","to":"/antibounty"}},[_c('a',{staticClass:"nav-link"},[_c('i',{staticClass:"sth-icons icon-antibounty sth-icons-24"}),_vm._v(" AntiBounty ")])]),(!_vm.isElectron)?_c('base-dropdown',{staticClass:"nav-item",attrs:{"tag":"li","menu-on-right":!_vm.$rtl.isRTL,"title-tag":"a","title-classes":"nav-link","menu-classes":"dropdown-navbar"}},[_c('template',{slot:"title"},[_c('div',{staticClass:"d-none d-lg-block d-xl-block"}),_c('el-tooltip',{attrs:{"content":"Download Wallet","effect":"light","open-delay":300,"placement":"right"}},[_c('span',[_c('i',{staticClass:"tim-icons icon-wallet-43"}),_vm._v(" Wallets")])]),_c('p',{staticClass:"d-lg-none"},[_vm._v("Download Wallet")])],1),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-green",on:{"click":function($event){return _vm.openLink('https://play.google.com/store/apps/details?id=io.smartholdem.client')}}},[_c('i',{staticClass:"fab fa-android"}),_vm._v(" Android")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-danger",on:{"click":function($event){return _vm.openLink('https://snapcraft.io/smartholdem')}}},[_c('i',{staticClass:"fab fa-linux"}),_vm._v(" Linux")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-info",on:{"click":function($event){return _vm.openLink('https://smartholdem.io/download/smartholdem-win.exe')}}},[_c('i',{staticClass:"fab fa-windows"}),_vm._v(" Windows")])]),_c('li',{staticClass:"nav-link"},[_c('span',{staticClass:"nav-item dropdown-item text-warning",on:{"click":function($event){return _vm.openLink('https://smartholdem.io/download/smartholdem-mac.dmg')}}},[_c('i',{staticClass:"fab fa-apple"}),_vm._v(" MacOs")])]),_c('li',{staticClass:"nav-link"},[_c('a',{staticClass:"nav-item dropdown-item",attrs:{"target":"_blank","href":"https://github.com/smartholdem/smartholdem-wallet/releases"}},[_c('i',{staticClass:"tim-icons icon-tv-2"}),_vm._v(" Old Wallets ")])])],2):_vm._e(),_c('span',{staticClass:"nav-item",attrs:{"tag":"li"}},[_c('a',{staticClass:"nav-link",attrs:{"target":"_blank","href":"https://dexgames.net"}},[_c('i',{staticClass:"sth-icons icon-games sth-icons-24"}),_vm._v(" "),_c('span',{staticClass:"hide-small"},[_vm._v("DEX")]),_vm._v(" Games ")])]),_c('span',{staticClass:"nav-item",attrs:{"tag":"li"}},[_c('a',{staticClass:"nav-link",attrs:{"target":"_blank","href":"https://xbts.io/coin/sth"}},[_c('i',{staticClass:"tim-icons icon-chart-bar-32"}),_vm._v(" "),_c('span',{staticClass:"hide-small"},[_vm._v("Exchange")])])]),_c('span',{staticClass:"nav-item",attrs:{"tag":"li"}},[_c('a',{staticClass:"nav-link",attrs:{"target":"_blank","href":"https://api.smartholdem.io"}},[_c('i',{staticClass:"tim-icons icon-settings"}),_vm._v(" "),_c('span',{staticClass:"hide-small"},[_vm._v("API")])])]),_c('span',{staticClass:"nav-item",attrs:{"tag":"li"}},[_c('a',{staticClass:"nav-link",attrs:{"target":"_blank","href":"https://blockexplorer.smartholdem.io"}},[_c('i',{staticClass:"tim-icons icon-app"}),_vm._v(" "),_c('span',{staticClass:"hide-small"},[_vm._v("Explorer")])])])],1)]):_vm._e(),_c('div',{staticClass:"wrapper wrapper-full-page"},[_c('div',{staticClass:"full-page",class:_vm.pageClass,staticStyle:{"background":"#fefdf9"}},[_c('div',{staticClass:"content"},[_c('zoom-center-transition',{attrs:{"duration":_vm.pageTransitionDuration,"mode":"out-in"}},[_c('router-view')],1)],1)])])],1)}
var AuthLayoutvue_type_template_id_68c738c1_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Pages/AuthLayout.vue?vue&type=template&id=68c738c1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Pages/AuthLayout.vue?vue&type=script&lang=js&





/* harmony default export */ var AuthLayoutvue_type_script_lang_js_ = ({
  components: {
    BaseNav: components["c" /* BaseNav */],
    ZoomCenterTransition: vue2_transitions_m["e" /* ZoomCenterTransition */]
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data: function data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
      showFooter: false
    };
  },
  computed: {
    isElectron: function isElectron() {
      return Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON;
    },
    title: function title() {
      return "".concat(this.$route.name);
    }
  },
  methods: {
    toggleNavbar: function toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu: function closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
    setPageClass: function setPageClass() {
      this.pageClass = "".concat(this.$route.name, "-page").toLowerCase();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.closeMenu();
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(function () {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  mounted: function mounted() {
    this.setPageClass();
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('app/setPage', 'auth');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    $route: function $route() {
      this.setPageClass();
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Pages/AuthLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pages_AuthLayoutvue_type_script_lang_js_ = (AuthLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Pages/AuthLayout.vue?vue&type=style&index=0&lang=scss&
var AuthLayoutvue_type_style_index_0_lang_scss_ = __webpack_require__("6cd0");

// CONCATENATED MODULE: ./src/pages/Pages/AuthLayout.vue






/* normalize component */

var AuthLayout_component = Object(componentNormalizer["a" /* default */])(
  Pages_AuthLayoutvue_type_script_lang_js_,
  AuthLayoutvue_type_template_id_68c738c1_render,
  AuthLayoutvue_type_template_id_68c738c1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuthLayout = (AuthLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/GeneralViews/NotFoundPage.vue?vue&type=template&id=47b4619e&
var NotFoundPagevue_type_template_id_47b4619e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('auth-layout',{staticClass:"not-found-page"},[_c('div',{staticClass:"centered"},[_c('h1',[_c('i',{staticClass:"not-found-icon nc-icon nc-puzzle-10"}),_vm._v("404")]),_c('p',[_vm._v("The page you requested could not be found.")])])])}
var NotFoundPagevue_type_template_id_47b4619e_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/GeneralViews/NotFoundPage.vue?vue&type=template&id=47b4619e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/GeneralViews/NotFoundPage.vue?vue&type=script&lang=js&

/* harmony default export */ var NotFoundPagevue_type_script_lang_js_ = ({
  components: {
    AuthLayout: AuthLayout
  }
});
// CONCATENATED MODULE: ./src/pages/GeneralViews/NotFoundPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var GeneralViews_NotFoundPagevue_type_script_lang_js_ = (NotFoundPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/GeneralViews/NotFoundPage.vue?vue&type=style&index=0&lang=scss&
var NotFoundPagevue_type_style_index_0_lang_scss_ = __webpack_require__("6c4c");

// CONCATENATED MODULE: ./src/pages/GeneralViews/NotFoundPage.vue






/* normalize component */

var NotFoundPage_component = Object(componentNormalizer["a" /* default */])(
  GeneralViews_NotFoundPagevue_type_script_lang_js_,
  NotFoundPagevue_type_template_id_47b4619e_render,
  NotFoundPagevue_type_template_id_47b4619e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NotFoundPage = (NotFoundPage_component.exports);
// CONCATENATED MODULE: ./src/routes/routes.js





var Board = function Board() {
  return __webpack_require__.e(/* import() */ "chunk-d2f3c750").then(__webpack_require__.bind(null, "8afc"));
};

var Wallet = function Wallet() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "1a73"));
};

var WalletImport = function WalletImport() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "33b1"));
};

var WalletCreate = function WalletCreate() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "d850"));
};

var Address = function Address() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "a4d1"));
};

var AddressView = function AddressView() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "206a"));
};

var XbtsVote = function XbtsVote() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-2348ef1f")]).then(__webpack_require__.bind(null, "922a"));
};

var routes_SmartHolder = function SmartHolder() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "9e90"));
};

var Contacts = function Contacts() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-2348ef1f")]).then(__webpack_require__.bind(null, "3db1"));
};

var Settings = function Settings() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "5785"));
};

var AbountyWelcome = function AbountyWelcome() {
  return __webpack_require__.e(/* import() */ "chunk-d2f3c750").then(__webpack_require__.bind(null, "dc8a"));
};

var AbountyWorkers = function AbountyWorkers() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "6114"));
};

var AbountyCustomer = function AbountyCustomer() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-5617548b"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "ebb7"));
};

var AbountyTasks = function AbountyTasks() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "ff66"));
};

var AbountyPromo = function AbountyPromo() {
  return __webpack_require__.e(/* import() */ "chunk-d2f3c750").then(__webpack_require__.bind(null, "6bfb"));
};

var TimeLine = function TimeLine() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "8136"));
};

var Register = function Register() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-2348ef1f"), __webpack_require__.e("chunk-3ca3528e")]).then(__webpack_require__.bind(null, "30e9"));
};

var Lock = function Lock() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "aa32"));
};

var Home = function Home() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-5617548b")]).then(__webpack_require__.bind(null, "60a6"));
};

var LegalLimitations = function LegalLimitations() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "f886"));
};

var LegalTerms = function LegalTerms() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "3762"));
};

var LegalWarranties = function LegalWarranties() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "c7e6"));
};

var AbountyAuth = function AbountyAuth() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-5617548b"), __webpack_require__.e("chunk-3ca3528e")]).then(__webpack_require__.bind(null, "4350"));
};

var AbountyFail = function AbountyFail() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "2088"));
};

var routes_Abounty = function Abounty() {
  return Promise.all(/* import() */[__webpack_require__.e("chunk-3ca3528e"), __webpack_require__.e("chunk-d2f3c750")]).then(__webpack_require__.bind(null, "4807"));
};

var Welcome = function Welcome() {
  return __webpack_require__.e(/* import() */ "chunk-3ca3528e").then(__webpack_require__.bind(null, "2ad6"));
};

var authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [{
    path: '/home',
    name: 'SmartHoldem',
    component: Home
  }, {
    path: '/legal-limitations',
    name: 'Disclaimers and Limitation of Liability ',
    component: LegalLimitations
  }, {
    path: '/legal-terms',
    name: 'Terms and Conditions',
    component: LegalTerms
  }, {
    path: 'coin',
    name: 'About SmartHoldem Coin',
    components: {
      default: TimeLine
    }
  }, {
    path: '/legal-warranties',
    name: 'Disclaimer of Warranties',
    component: LegalWarranties
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/lock',
    name: 'Lock',
    component: Lock
  }, {
    path: '/abounty-auth/:address/:name',
    name: 'AntiBounty Auth',
    component: AbountyAuth
  }, {
    path: '/ab-fail',
    name: 'AntiBounty Auth Fail',
    component: AbountyFail
  }, {
    path: '/antibounty',
    name: 'SmartHoldem AntiBounty',
    component: routes_Abounty
  }, {
    path: '/welcome/:pAddress',
    name: 'Welcome',
    component: Welcome
  }]
};
var routes = [Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON ? {
  path: '/',
  redirect: '/lock',
  name: 'lock',
  meta: {
    title: 'SmartHoldem Wallet - Unlock',
    metaTags: [{
      name: 'description',
      content: 'SmartHoldem Platform'
    }, {
      property: 'og:description',
      content: 'SmartHoldem Platform'
    }]
  }
} : {
  path: '/',
  redirect: '/home',
  name: 'Home'
}, authPages, {
  path: '/',
  component: DashboardLayout,
  redirect: '/wallet',
  name: 'Dashboard layout',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    components: {
      default: Board
    }
  }, {
    path: 'wallet',
    name: 'Wallet',
    components: {
      default: Wallet
    }
  }, {
    path: 'wallet-import',
    name: 'Import Wallet',
    components: {
      default: WalletImport
    }
  }, {
    path: 'wallet-create',
    name: 'Create Wallet',
    components: {
      default: WalletCreate
    }
  }, {
    path: 'address/:address',
    name: 'Address',
    components: {
      default: Address
    }
  }, {
    path: 'address-view/:address',
    name: 'Address View',
    components: {
      default: AddressView
    }
  }, {
    path: 'xbts-listing',
    name: 'XBTS Listing',
    components: {
      default: XbtsVote
    }
  }, {
    path: 'smartholder',
    name: 'SmartHolder',
    components: {
      default: routes_SmartHolder
    }
  }, {
    path: 'contacts',
    name: 'Contacts',
    components: {
      default: Contacts
    }
  }, {
    path: 'settings',
    name: 'Settings',
    components: {
      default: Settings
    }
  }, {
    path: 'abounty/welcome',
    name: 'AntiBounty',
    components: {
      default: AbountyWelcome
    }
  }, {
    path: 'abounty/customer',
    name: 'AntiBounty Customer',
    components: {
      default: AbountyCustomer
    }
  }, {
    path: 'abounty/workers',
    name: 'AntiBounty Workers',
    components: {
      default: AbountyWorkers
    }
  }, {
    path: 'abounty/promo',
    name: 'AntiBounty Promo',
    components: {
      default: AbountyPromo
    }
  }, {
    path: 'abounty/tasks/:address',
    name: 'AntiBounty Tasks',
    components: {
      default: AbountyTasks
    }
  }]
}, {
  path: '*',
  component: NotFoundPage
}];
/* harmony default export */ var routes_routes = (routes);
// CONCATENATED MODULE: ./src/routes/router.js


var router = new vue_router_esm["a" /* default */]({
  routes: routes_routes,
  linkActiveClass: 'active',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
/* harmony default export */ var routes_router = (router);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// EXTERNAL MODULE: ./src/config.js
var src_config = __webpack_require__("db49");

// CONCATENATED MODULE: ./src/i18n.js









vue_runtime_esm["default"].use(vue_i18n_esm["a" /* default */]);

function loadLocaleMessages() {
  var locales = __webpack_require__("49f8");

  var messages = {};
  locales.keys().forEach(function (key) {
    var matched = key.match(/([a-z0-9]+)\./i);

    if (matched && matched.length > 1) {
      var locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/* harmony default export */ var i18n = (new vue_i18n_esm["a" /* default */]({
  locale: "en" || false,
  fallbackLocale: "en" || false,
  messages: loadLocaleMessages()
}));
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// CONCATENATED MODULE: ./src/mixins/index.js

var mixins = [__webpack_require__("6dac").default, __webpack_require__("46d6").default];
/* harmony default export */ var src_mixins = (lodash["merge"].apply(void 0, mixins));
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__("9483");

// CONCATENATED MODULE: ./src/registerServiceWorker.js


if (true) {
  Object(register_service_worker["a" /* register */])("".concat("/smartholdem.io/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    registered: function registered() {
      console.log('Service worker has been registered.');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound: function updatefound() {
      console.log('New content is downloading.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vuex-persist/dist/esm/index.js
var esm = __webpack_require__("bfa9");

// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__("a002");
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// CONCATENATED MODULE: ./src/store/plugins/vuex-persist-ready.js
/* harmony default export */ var vuex_persist_ready = (function (store) {
  store._IS_READY = false;
  store.subscribe(function (mutation) {
    if (mutation.type === 'RESTORE_MUTATION') {
      store._vm.$root.$emit('vuex-persist:ready');

      store._IS_READY = true;
    }
  });
});
// CONCATENATED MODULE: ./src/store/modules/session.js
/* harmony default export */ var session = ({
  namespaced: true,
  state: {
    isAuth: false
  },
  getters: {
    isAuth: function isAuth(state) {
      return state.isAuth;
    }
  },
  mutations: {
    SET_AUTH: function SET_AUTH(state, payload) {
      state.isAuth = payload;
    }
  },
  actions: {
    setAuth: function setAuth(_ref, value) {
      var commit = _ref.commit;
      commit('SET_AUTH', value);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__("3452");
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/services/blockchain.js










var blockchain_Blockchain = function () {
  function Blockchain() {
    Object(classCallCheck["a" /* default */])(this, Blockchain);
  }

  Object(createClass["a" /* default */])(Blockchain, [{
    key: "findPeers",
    value: function () {
      var _findPeers = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findPeers() {
        return _findPeers.apply(this, arguments);
      }

      return findPeers;
    }()
  }, {
    key: "getDelegates",
    value: function () {
      var _getDelegates = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var offset,
            result,
            data,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                offset = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 0;
                result = {
                  list: [],
                  count: 0
                };
                _context2.prev = 2;
                _context2.next = 5;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/delegates?limit=64&offset=' + offset);

              case 5:
                data = _context2.sent.data;
                result = {
                  list: data.delegates,
                  count: data.totalCount
                };
                _context2.next = 11;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);

              case 11:
                return _context2.abrupt("return", result);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      function getDelegates() {
        return _getDelegates.apply(this, arguments);
      }

      return getDelegates;
    }()
  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var result, data, dataTx;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = {
                  "epoch": "2017-11-21T13:00:00.000Z",
                  "height": 835759,
                  "fee": 10000000,
                  "milestone": 0,
                  "nethash": "fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7",
                  "reward": 200000000,
                  "supply": 24167151800000000
                };
                _context3.prev = 1;
                _context3.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/blocks/getStatus');

              case 4:
                data = _context3.sent.data;
                result.height = data.height;
                result.supply = data.supply / Math.pow(10, 8);
                result.fee = (data.fee / Math.pow(10, 8)).toFixed(2);
                result.reward = (data.reward / Math.pow(10, 8)).toFixed(2);
                _context3.next = 11;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/transactions?limit=1&orderBy=timestamp:desc');

              case 11:
                dataTx = _context3.sent.data;
                result.txCount = dataTx.count;
                _context3.next = 17;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);

              case 17:
                return _context3.abrupt("return", result);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 15]]);
      }));

      function getStatus() {
        return _getStatus.apply(this, arguments);
      }

      return getStatus;
    }()
  }, {
    key: "getAddressBalance",
    value: function () {
      var _getAddressBalance = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4(address) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = 0;
                _context4.prev = 1;
                _context4.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/accounts/getBalance?address=' + address);

              case 4:
                data = _context4.sent.data;
                result = data.balance / Math.pow(10, 8);
                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);

              case 10:
                return _context4.abrupt("return", result);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function getAddressBalance(_x) {
        return _getAddressBalance.apply(this, arguments);
      }

      return getAddressBalance;
    }()
  }, {
    key: "getVote",
    value: function () {
      var _getVote = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5(address) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = null;
                _context5.prev = 1;
                _context5.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/accounts/delegates?address=' + address);

              case 4:
                data = _context5.sent.data;

                if (data.delegates.length > 0) {
                  result = data.delegates[0];
                }

                _context5.next = 10;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);

              case 10:
                return _context5.abrupt("return", result);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function getVote(_x2) {
        return _getVote.apply(this, arguments);
      }

      return getVote;
    }()
  }, {
    key: "getBalances",
    value: function () {
      var _getBalances = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6(addresses) {
        var result, keys, total, i, balance, vote, delegate;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = {
                  accounts: [],
                  totalBalance: 0
                };
                keys = Object.keys(addresses);
                total = 0;
                i = 0;

              case 4:
                if (!(i < keys.length)) {
                  _context6.next = 22;
                  break;
                }

                _context6.next = 7;
                return this.getAddressBalance(keys[i]);

              case 7:
                balance = _context6.sent;
                _context6.next = 10;
                return this.getVote(keys[i]);

              case 10:
                vote = _context6.sent;
                _context6.next = 13;
                return this.getDelegate(addresses[keys[i]].pubKey);

              case 13:
                _context6.t0 = _context6.sent;

                if (_context6.t0) {
                  _context6.next = 16;
                  break;
                }

                _context6.t0 = null;

              case 16:
                delegate = _context6.t0;
                result.accounts[keys[i]] = {
                  address: addresses[keys[i]].address,
                  balance: balance,
                  vote: vote,
                  delegate: delegate
                };
                total = total + balance;

              case 19:
                i++;
                _context6.next = 4;
                break;

              case 22:
                result.totalBalance = total;
                return _context6.abrupt("return", result);

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getBalances(_x3) {
        return _getBalances.apply(this, arguments);
      }

      return getBalances;
    }()
  }, {
    key: "fetchTxsByAddress",
    value: function () {
      var _fetchTxsByAddress = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7(address) {
        var offset,
            limit,
            uri,
            response,
            result,
            txs,
            i,
            op,
            tm,
            amount,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                offset = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 0;
                limit = 25;
                uri = 'https://' + src_config["network"].NODE + '/api/transactions?orderBy=timestamp:desc&offset=' + offset + '&limit=' + limit + '&recipientId=' + address + '&senderId=' + address;
                _context7.next = 5;
                return axios_default.a.get(uri);

              case 5:
                response = _context7.sent.data;

                if (!response.success) {
                  _context7.next = 13;
                  break;
                }

                result = {
                  count: 0,
                  transactions: []
                };
                txs = [];

                for (i = 0; i < response.transactions.length; i++) {
                  op = response.transactions[i].recipientId === address ? '+' : '-';
                  tm = moment_default.a.unix(1511269200 + response.transactions[i].timestamp);
                  amount = response.transactions[i].amount > 0 ? response.transactions[i].amount / Math.pow(10, 8) : 0;

                  if (response.transactions[i].type === 3) {
                    op = '-';
                  }

                  if (op === '-') {
                    amount = amount + response.transactions[i].fee / Math.pow(10, 8);
                  }

                  txs.push({
                    id: response.transactions[i].id,
                    confirmations: response.transactions[i].confirmations,
                    time: tm.format("YYYY.MM.DD HH:mm:ss"),
                    amount: op + amount.toFixed(2) * 1,
                    senderId: response.transactions[i].senderId,
                    recipientId: response.transactions[i].recipientId,
                    vendorField: response.transactions[i].vendorField,
                    type: response.transactions[i].type,
                    asset: response.transactions[i].asset,
                    op: op
                  });
                }

                result.count = response.count * 1;
                result.transactions = txs;
                return _context7.abrupt("return", result);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function fetchTxsByAddress(_x4) {
        return _fetchTxsByAddress.apply(this, arguments);
      }

      return fetchTxsByAddress;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8(address) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = {
                  balance: 0,
                  delegate: null
                };
                _context8.prev = 1;
                _context8.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/accounts?address=' + address);

              case 4:
                data = _context8.sent.data;

                if (!data.success) {
                  _context8.next = 20;
                  break;
                }

                result = data.account;
                result.balance = data.account.balance / Math.pow(10, 8);
                _context8.next = 10;
                return this.getDelegate(result.publicKey);

              case 10:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 13;
                  break;
                }

                _context8.t0 = null;

              case 13:
                result.delegate = _context8.t0;
                _context8.next = 16;
                return this.getVote(result.address);

              case 16:
                _context8.t1 = _context8.sent;

                if (_context8.t1) {
                  _context8.next = 19;
                  break;
                }

                _context8.t1 = null;

              case 19:
                result.vote = _context8.t1;

              case 20:
                _context8.next = 24;
                break;

              case 22:
                _context8.prev = 22;
                _context8.t2 = _context8["catch"](1);

              case 24:
                return _context8.abrupt("return", result);

              case 25:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 22]]);
      }));

      function getAccount(_x5) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "getDelegate",
    value: function () {
      var _getDelegate = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9(pubKey) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = {};
                _context9.prev = 1;
                _context9.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/delegates/get?publicKey=' + pubKey);

              case 4:
                data = _context9.sent.data;
                result = data.delegate;
                result.vote = data.delegate.vote / Math.pow(10, 8);
                _context9.next = 11;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](1);

              case 11:
                return _context9.abrupt("return", result);

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[1, 9]]);
      }));

      function getDelegate(_x6) {
        return _getDelegate.apply(this, arguments);
      }

      return getDelegate;
    }()
  }, {
    key: "delegateSearch",
    value: function () {
      var _delegateSearch = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10(name) {
        var result, data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                result = {};
                _context10.prev = 1;
                _context10.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/delegates/search?q=' + name);

              case 4:
                data = _context10.sent.data;
                result = data.delegates;
                _context10.next = 10;
                break;

              case 8:
                _context10.prev = 8;
                _context10.t0 = _context10["catch"](1);

              case 10:
                return _context10.abrupt("return", result);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 8]]);
      }));

      function delegateSearch(_x7) {
        return _delegateSearch.apply(this, arguments);
      }

      return delegateSearch;
    }()
  }, {
    key: "getFees",
    value: function () {
      var _getFees = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee11() {
        var result, data;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = {};
                _context11.prev = 1;
                _context11.next = 4;
                return axios_default.a.get('https://' + src_config["network"].NODE + '/api/blocks/getFees');

              case 4:
                data = _context11.sent.data;
                result = data.fees;
                result.send = data.fees.send / Math.pow(10, 8);
                result.vote = data.fees.vote / Math.pow(10, 8);
                result.secondsignature = data.fees.secondsignature / Math.pow(10, 8);
                result.delegate = data.fees.delegate / Math.pow(10, 8);
                result.multisignature = data.fees.multisignature / Math.pow(10, 8);
                _context11.next = 15;
                break;

              case 13:
                _context11.prev = 13;
                _context11.t0 = _context11["catch"](1);

              case 15:
                return _context11.abrupt("return", result);

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 13]]);
      }));

      function getFees() {
        return _getFees.apply(this, arguments);
      }

      return getFees;
    }()
  }, {
    key: "xbtsCandidates",
    value: function () {
      var _xbtsCandidates = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee12() {
        var result, data;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                result = [];
                _context12.prev = 1;
                _context12.next = 4;
                return axios_default.a.get(src_config["network"].XBTS_VOTE + 'list/candidates');

              case 4:
                data = _context12.sent.data;
                result = data;
                _context12.next = 10;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](1);

              case 10:
                return _context12.abrupt("return", result);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 8]]);
      }));

      function xbtsCandidates() {
        return _xbtsCandidates.apply(this, arguments);
      }

      return xbtsCandidates;
    }()
  }, {
    key: "xbtsWinners",
    value: function () {
      var _xbtsWinners = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee13() {
        var result, data;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                result = [];
                _context13.prev = 1;
                _context13.next = 4;
                return axios_default.a.get(src_config["network"].XBTS_VOTE + 'list/winners');

              case 4:
                data = _context13.sent.data;
                result = data;
                _context13.next = 10;
                break;

              case 8:
                _context13.prev = 8;
                _context13.t0 = _context13["catch"](1);

              case 10:
                return _context13.abrupt("return", result);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[1, 8]]);
      }));

      function xbtsWinners() {
        return _xbtsWinners.apply(this, arguments);
      }

      return xbtsWinners;
    }()
  }]);

  return Blockchain;
}();

/* harmony default export */ var blockchain = (new blockchain_Blockchain());
// CONCATENATED MODULE: ./src/store/modules/app.js









/* harmony default export */ var modules_app = ({
  namespaced: true,
  state: {
    language: '',
    pinEncrypted: null,
    settings: {
      darkMode: false,
      sound: true,
      listing: true,
      smartholder: true
    },
    accounts: [],
    contacts: {},
    page: 'front'
  },
  getters: {
    language: function language(state) {
      return state.language;
    },
    pinEncrypted: function pinEncrypted(state) {
      return state.pinEncrypted;
    },
    latestReleaseVersion: function latestReleaseVersion(state) {
      return state.latestReleaseVersion;
    },
    settings: function settings(state) {
      return state.settings;
    },
    accounts: function accounts(state) {
      return state.accounts;
    },
    contacts: function contacts(state) {
      return state.contacts;
    },
    page: function page(state) {
      return state.page;
    }
  },
  mutations: {
    SET_SETTINGS: function SET_SETTINGS(state, payload) {
      var keys = Object.keys(payload);

      for (var i = 0; i < keys.length; i++) {
        state.settings[keys[i]] = payload[keys[i]];
      }
    },
    SET_LATEST_RELEASE_VERSION: function SET_LATEST_RELEASE_VERSION(state, version) {
      state.latestReleaseVersion = version;
    },
    SET_RESET: function SET_RESET(state) {
      state.language = 'en';
      state.pinEncrypted = null;
      state.accounts = [];
    },
    SET_LANGUAGE: function SET_LANGUAGE(state, payload) {
      state.language = payload;
    },
    SET_PIN_ENC: function SET_PIN_ENC(state, payload) {
      var hash = crypto_js_default.a.SHA384(payload).toString();
      state.pinEncrypted = crypto_js_default.a.AES.encrypt(hash, hash).toString();
    },
    SET_ACCOUNT: function SET_ACCOUNT(state, payload) {
      var hashPin = payload.pin;
      state.accounts[payload.address] = {
        address: payload.address,
        secret: crypto_js_default.a.AES.encrypt(payload.secret, hashPin).toString(),
        pubKey: payload.pubKey
      };
    },
    UPD_ACCOUNTS: function UPD_ACCOUNTS(state, payload) {
      state.accounts = payload;
    },
    SET_CONTACT: function SET_CONTACT(state, payload) {
      state.contacts[payload.address] = payload;
    },
    UPD_CONTACTS: function UPD_CONTACTS(state, payload) {
      state.contacts = payload;
    },
    SET_PAGE: function SET_PAGE(state, payload) {
      state.page = payload;
    }
  },
  actions: {
    setPage: function setPage(_ref, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                commit('SET_PAGE', value);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setSettings: function setSettings(_ref2, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                commit('SET_SETTINGS', value);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    checkNewVersion: function checkNewVersion(_ref3) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var commit, latestRelease;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit;
                _context3.next = 3;
                return release["a" /* default */].fetchLatestRelease();

              case 3:
                latestRelease = _context3.sent;
                commit('SET_LATEST_RELEASE_VERSION', latestRelease.tag_name);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    appReset: function appReset(_ref4) {
      var commit = _ref4.commit;
      commit('SET_RESET');
    },
    setLanguage: function setLanguage(_ref5, value) {
      var commit = _ref5.commit;
      commit('SET_LANGUAGE', value);
      i18n.locale = value;
    },
    setPinEnc: function setPinEnc(_ref6, value) {
      var commit = _ref6.commit;
      commit('SET_PIN_ENC', value);
    },
    setAccount: function setAccount(_ref7, value) {
      var commit = _ref7.commit;
      commit('SET_ACCOUNT', value);
    },
    updateAccounts: function updateAccounts(_ref8, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var commit;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref8.commit;
                commit('UPD_ACCOUNTS', value);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    walletDecrypt: function walletDecrypt(_ref9, value) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        var commit, account, accountBytes;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref9.commit;
                _context5.next = 3;
                return _this.getters['app/accounts'][value.address];

              case 3:
                account = _context5.sent;
                accountBytes = crypto_js_default.a.AES.decrypt(account.secret.toString(), value.pin);
                return _context5.abrupt("return", accountBytes.toString(crypto_js_default.a.enc.Utf8));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setContact: function setContact(_ref10, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var commit;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref10.commit;
                _context6.t0 = commit;
                _context6.t1 = value.address;
                _context6.t2 = value.label;
                _context6.next = 6;
                return blockchain.getAddressBalance(value.address);

              case 6:
                _context6.t3 = _context6.sent;
                _context6.t4 = {
                  address: _context6.t1,
                  label: _context6.t2,
                  balance: _context6.t3
                };
                (0, _context6.t0)('SET_CONTACT', _context6.t4);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    updateContacts: function updateContacts(_ref11, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7() {
        var commit;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref11.commit;
                commit('UPD_CONTACTS', value);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    fetchContacts: function fetchContacts(_ref12) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8() {
        var commit, contacts, result, keys, i;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref12.commit;
                _context8.next = 3;
                return _this2.getters['app/contacts'];

              case 3:
                contacts = _context8.sent;
                result = {};
                keys = Object.keys(contacts);
                i = 0;

              case 7:
                if (!(i < keys.length)) {
                  _context8.next = 17;
                  break;
                }

                _context8.t0 = contacts[keys[i]].address;
                _context8.t1 = contacts[keys[i]].label;
                _context8.next = 12;
                return blockchain.getAddressBalance(contacts[keys[i]].address);

              case 12:
                _context8.t2 = _context8.sent;
                result[keys[i]] = {
                  address: _context8.t0,
                  label: _context8.t1,
                  balance: _context8.t2
                };

              case 14:
                i++;
                _context8.next = 7;
                break;

              case 17:
                commit('UPD_CONTACTS', result);

              case 18:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }
});
// EXTERNAL MODULE: ./src/services/wallet.js
var wallet = __webpack_require__("43a5");

// CONCATENATED MODULE: ./src/store/modules/wallet.js





/* harmony default export */ var modules_wallet = ({
  namespaced: true,
  state: {
    currencies: [{
      ticker: "BTC",
      title: "Bitcoin",
      precision: 8,
      symbol: 'Ƀ'
    }, {
      ticker: "ETH",
      title: "Ethereum",
      precision: 8,
      symbol: '⬨'
    }, {
      ticker: "RUB",
      title: "Russian Ruble",
      precision: 2,
      symbol: '₽'
    }, {
      ticker: "CNY",
      title: "Yuan",
      precision: 2,
      symbol: '¥'
    }, {
      ticker: "USD",
      title: "Dollars",
      precision: 4,
      symbol: '$'
    }, {
      ticker: "JPY",
      title: "Japanese Yen",
      precision: 2,
      symbol: '¥'
    }, {
      ticker: "EUR",
      title: "Euro",
      precision: 4,
      symbol: '€'
    }, {
      ticker: "GBP",
      title: "Pound Sterling",
      precision: 4,
      symbol: '£'
    }, {
      ticker: "PLN",
      title: "Polish Zloty",
      precision: 2,
      symbol: 'zł'
    }, {
      ticker: "TRY",
      title: "Turkish Lira",
      precision: 2,
      symbol: '₺'
    }, {
      ticker: "MXN",
      title: "Mexican Peso",
      precision: 2,
      symbol: '₱'
    }, {
      ticker: "BRL",
      title: "Brazil Real",
      precision: 2,
      symbol: 'R$'
    }, {
      ticker: "NZD",
      title: "New Zeland Dollar",
      precision: 2,
      symbol: 'NZ$'
    }, {
      ticker: "NOK",
      title: "Norway Krone",
      precision: 2,
      symbol: 'kr'
    }, {
      ticker: "KRW",
      title: "South Korea Won",
      precision: 2,
      symbol: '₩'
    }],
    marketPrice: {
      "STH": 1,
      "BTC": 0.00000100,
      "ETH": 0,
      "RUB": 0,
      "CNY": 0,
      "USD": 0,
      "JPY": 0,
      "EUR": 0
    },
    defaultCurrency: {
      ticker: 'USD',
      symbol: '$',
      precision: 2
    },
    balance: 0.00,
    txOffset: 0,
    txCount: 0,
    transactions: [],
    depHistory: [],
    depAddrs: {
      "bts": "smartholdem",
      "btc": "",
      "ltc": "",
      "doge": "",
      "post": "",
      "42": "",
      "mdl": "",
      "onion": "",
      "xspec": "",
      "uni": "",
      "cny": "smartholdem",
      "usd": "smartholdem",
      "ruble": "smartholdem",
      "jpy": "smartholdem",
      "evraz": "smartholdem",
      "deex": "smartholdem"
    },
    balances: {
      accounts: [],
      totalBalance: 0
    },
    currentAddress: '',
    txs: {},
    labels: {}
  },
  getters: {
    currencies: function currencies(state) {
      return state.currencies;
    },
    marketPrice: function marketPrice(state) {
      return state.marketPrice;
    },
    defaultCurrency: function defaultCurrency(state) {
      return state.defaultCurrency;
    },
    balance: function balance(state) {
      return state.balance;
    },
    txOffset: function txOffset(state) {
      return state.txOffset;
    },
    txCount: function txCount(state) {
      return state.txCount;
    },
    transactions: function transactions(state) {
      return state.transactions;
    },
    depHistory: function depHistory(state) {
      return state.depHistory;
    },
    depAddrs: function depAddrs(state) {
      return state.depAddrs;
    },
    balances: function balances(state) {
      return state.balances;
    },
    currentAddress: function currentAddress(state) {
      return state.currentAddress;
    },
    txs: function txs(state) {
      return state.txs;
    },
    labels: function labels(state) {
      return state.labels;
    }
  },
  mutations: {
    SET_DEFAULT_CURRENCY: function SET_DEFAULT_CURRENCY(state, payload) {
      state.defaultCurrency = payload;
    },
    SET_STH_MARKET: function SET_STH_MARKET(state, payload) {
      state.marketPrice = payload;
    },
    SET_WALLET_RESET: function SET_WALLET_RESET(state) {
      state.balance = 0.00;
      state.txOffset = 0;
      state.txCount = 0;
      state.transactions = [];
      state.depHistory = [];
      state.depAddrs = {
        "bts": "smartholdem",
        "btc": "",
        "ltc": "",
        "doge": "",
        "post": "",
        "42": "",
        "mdl": "",
        "onion": ""
      };
      state.balances = {
        accounts: [],
        totalBalance: 0
      };
      state.currentAddress = '';
      state.txs = [];
      state.labels = {};
    },
    SET_DEP_ADDR: function SET_DEP_ADDR(state, payload) {
      state.depAddrs[payload.coin] = payload.address;
    },
    SET_DEP_HISTORY: function SET_DEP_HISTORY(state, payload) {
      state.depHistory = payload;
    },
    SET_BALANCE: function SET_BALANCE(state, payload) {
      state.balance = payload;
    },
    SET_TX_OFFSET: function SET_TX_OFFSET(state, payload) {
      state.txOffset = payload;
    },
    SET_TX_COUNT: function SET_TX_COUNT(state, payload) {
      state.txCount = payload;
    },
    SET_TRANSACTIONS: function SET_TRANSACTIONS(state, payload) {
      state.transactions = payload;
    },
    SET_BALANCES: function SET_BALANCES(state, payload) {
      state.balances = payload;
    },
    SET_CURRENT_ADDRESS: function SET_CURRENT_ADDRESS(state, payload) {
      state.currentAddress = payload;
    },
    SET_TXS: function SET_TXS(state, payload) {
      state.txs[payload.address] = payload.data;
    },
    SET_LABEL: function SET_LABEL(state, payload) {
      state.labels[payload.address] = payload.label;
    }
  },
  actions: {
    setDefaultCurrency: function setDefaultCurrency(_ref, value) {
      var commit = _ref.commit;
      commit('SET_DEFAULT_CURRENCY', value);
    },
    walletReset: function walletReset(_ref2) {
      var commit = _ref2.commit;
      commit('SET_WALLET_RESET', true);
    },
    setDepHistory: function setDepHistory(_ref3, value) {
      var commit = _ref3.commit;
      commit('SET_DEP_HISTORY', value);
    },
    setBalance: function setBalance(_ref4, value) {
      var commit = _ref4.commit;
      commit('SET_BALANCE', value);
    },
    setTxOffset: function setTxOffset(_ref5, value) {
      var commit = _ref5.commit;
      commit('SET_TX_OFFSET', value);
    },
    setTxCount: function setTxCount(_ref6, value) {
      var commit = _ref6.commit;
      commit('SET_TX_COUNT', value);
    },
    setTransactions: function setTransactions(_ref7, value) {
      var commit = _ref7.commit;
      commit('SET_TRANSACTIONS', value);
    },
    getDepAddress: function getDepAddress(_ref8, value) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, address;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref8.commit;
                _context.next = 3;
                return _this.getters['wallet/depAddrs'][value.coin];

              case 3:
                address = _context.sent;

                if (address) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return wallet["a" /* default */].getDepAddress(value);

              case 7:
                address = _context.sent;

                if (address) {
                  commit('SET_DEP_ADDR', {
                    coin: value.coin,
                    address: address
                  });
                }

              case 9:
                return _context.abrupt("return", address);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSthMarket: function getSthMarket(_ref9, value) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit, page, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref9.commit;
                page = _this2.getters['app/page'];

                if (!(page !== 'wallet')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.next = 6;
                return wallet["a" /* default */].getSthMarket(value);

              case 6:
                data = _context2.sent;

                if (data) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return");

              case 9:
                commit('SET_STH_MARKET', data);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sendTx: function sendTx(_ref10, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var commit;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref10.commit;
                _context3.next = 3;
                return wallet["a" /* default */].sendTx(value);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    prepareTx: function prepareTx(_ref11, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var commit;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref11.commit;
                _context4.next = 3;
                return wallet["a" /* default */].prepareTx(value);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    broadcastTx: function broadcastTx(_ref12, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        var commit;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref12.commit;
                _context5.next = 3;
                return wallet["a" /* default */].broadcastTx(value);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fetchTransactions: function fetchTransactions(_ref13) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var commit;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref13.commit;

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getTransaction: function getTransaction(_ref14, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7() {
        var commit;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref14.commit;
                _context7.next = 3;
                return wallet["a" /* default */].getTransaction(value);

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getBalances: function getBalances(_ref15) {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8() {
        var commit, accounts, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref15.commit;
                _context8.next = 3;
                return _this3.getters['app/accounts'];

              case 3:
                accounts = _context8.sent;

                if (!accounts) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 7;
                return blockchain.getBalances(accounts);

              case 7:
                data = _context8.sent;

                if (data) {
                  commit('SET_BALANCES', data);
                }

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    setCurrentAddress: function setCurrentAddress(_ref16, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9() {
        var commit;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                commit = _ref16.commit;

                if (value) {
                  commit('SET_CURRENT_ADDRESS', value);
                }

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    getTxsByAddress: function getTxsByAddress(_ref17) {
      var _arguments = arguments,
          _this4 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10() {
        var commit, offset, page, currentAddress, data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                commit = _ref17.commit;
                offset = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
                page = _this4.getters['app/page'];

                if (!(page !== 'wallet')) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return");

              case 5:
                currentAddress = _this4.getters['wallet/currentAddress'];

                if (currentAddress) {
                  _context10.next = 8;
                  break;
                }

                return _context10.abrupt("return");

              case 8:
                _context10.next = 10;
                return blockchain.fetchTxsByAddress(currentAddress, offset);

              case 10:
                data = _context10.sent;

                if (data) {
                  _context10.next = 13;
                  break;
                }

                return _context10.abrupt("return");

              case 13:
                if (data) {
                  commit('SET_TXS', {
                    address: currentAddress,
                    data: data
                  });
                }

              case 14:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    setLabel: function setLabel(_ref18, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee11() {
        var commit;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                commit = _ref18.commit;

                if (value) {
                  commit('SET_LABEL', value);
                }

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    validateAddress: function validateAddress(_ref19, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee12() {
        var commit;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                commit = _ref19.commit;
                _context12.next = 3;
                return wallet["a" /* default */].validateAddress(value);

              case 3:
                return _context12.abrupt("return", _context12.sent);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    prepareTxNative: function prepareTxNative(_ref20, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee13() {
        var commit;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                commit = _ref20.commit;
                _context13.next = 3;
                return wallet["a" /* default */].prepareTxNative(value);

              case 3:
                return _context13.abrupt("return", _context13.sent);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    broadcastTxNative: function broadcastTxNative(_ref21, value) {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee14() {
        var commit, seed;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                commit = _ref21.commit;
                seed = _this5.getters['network/seed'];
                _context14.next = 4;
                return wallet["a" /* default */].broadcastTxNative(value, seed.url);

              case 4:
                return _context14.abrupt("return", _context14.sent);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    TxVote: function TxVote(_ref22, value) {
      var _this6 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee15() {
        var commit, seed, tx;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                commit = _ref22.commit;
                seed = _this6.getters['network/seed'];
                _context15.next = 4;
                return wallet["a" /* default */].createVoteTransaction(value.secret, [value.vote], value.secondSecret || null);

              case 4:
                tx = _context15.sent;
                _context15.next = 7;
                return wallet["a" /* default */].broadcastTxNative(tx, seed.url);

              case 7:
                return _context15.abrupt("return", _context15.sent);

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    TxDelegateRegister: function TxDelegateRegister(_ref23, value) {
      var _this7 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee16() {
        var commit, seed, tx;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                commit = _ref23.commit;
                seed = _this7.getters['network/seed'];
                _context16.next = 4;
                return wallet["a" /* default */].createDelegateTransaction(value.secret, value.name, value.secondSecret || null);

              case 4:
                tx = _context16.sent;
                _context16.next = 7;
                return wallet["a" /* default */].broadcastTxNative(tx, seed.url);

              case 7:
                return _context16.abrupt("return", _context16.sent);

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    SignMsg: function SignMsg(_ref24, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee17() {
        var commit;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                commit = _ref24.commit;
                _context17.next = 3;
                return wallet["a" /* default */].signMessage(value.msg, value.secret);

              case 3:
                return _context17.abrupt("return", _context17.sent);

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    VerifMsg: function VerifMsg(_ref25, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee18() {
        var commit;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                commit = _ref25.commit;
                _context18.next = 3;
                return wallet["a" /* default */].verifyMessage(value.msg, value.pubKey, value.signature);

              case 3:
                return _context18.abrupt("return", _context18.sent);

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/services/network.js






var protocol = src_config["network"].isOnion ? 'http' : 'https';

var network_Network = function () {
  function Network() {
    Object(classCallCheck["a" /* default */])(this, Network);
  }

  Object(createClass["a" /* default */])(Network, [{
    key: "getSeed",
    value: function () {
      var _getSeed = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(index) {
        var result, start, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = {};
                start = Date.now();
                url = src_config["network"].isOnion ? 'http://' + src_config["network"].ONION[index] + '/api/loader/status' : 'https://' + src_config["network"].SEEDS[index] + '/api/loader/status';
                _context.next = 5;
                return axios_default.a.get(url).then(function (data) {
                  result.url = src_config["network"].isOnion ? src_config["network"].ONION[index] : src_config["network"].SEEDS[index];
                  result.delay = Date.now() - start;
                  result.success = true;
                  result.index = index;
                  result.protocol = protocol;
                }).catch(function (error) {
                  if (!error.status) {
                    result.success = false;
                    return result;
                  }
                });

              case 5:
                return _context.abrupt("return", result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSeed(_x) {
        return _getSeed.apply(this, arguments);
      }

      return getSeed;
    }()
  }, {
    key: "networkInit",
    value: function () {
      var _networkInit = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var result, minPing, bestPingIdx, seeds, netSeeds, i, seed;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = {};
                minPing = 15000;
                bestPingIdx = 0;
                seeds = [];
                netSeeds = src_config["network"].isOnion ? src_config["network"].ONION : src_config["network"].SEEDS;
                i = 0;

              case 6:
                if (!(i < netSeeds.length)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 9;
                return this.getSeed(i);

              case 9:
                seed = _context2.sent;

                if (seed.success === true) {
                  seeds[i] = seed;

                  if (seed.delay < minPing) {
                    minPing = seed.delay;
                    bestPingIdx = i;
                  }

                  result = seeds[bestPingIdx];
                }

              case 11:
                i++;
                _context2.next = 6;
                break;

              case 14:
                return _context2.abrupt("return", result);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function networkInit() {
        return _networkInit.apply(this, arguments);
      }

      return networkInit;
    }()
  }]);

  return Network;
}();

/* harmony default export */ var network = (new network_Network());
// CONCATENATED MODULE: ./src/store/modules/network.js




/* harmony default export */ var modules_network = ({
  namespaced: true,
  state: {
    bestPeer: {
      ip: '80.211.220.200',
      port: 6100,
      delay: 6
    },
    seed: {
      url: 'node0.smartholdem.io',
      delay: 0
    }
  },
  getters: {
    bestPeer: function bestPeer(state) {
      return state.bestPeer;
    },
    seed: function seed(state) {
      return state.seed;
    }
  },
  mutations: {
    SET_BEST_PEER: function SET_BEST_PEER(state, payload) {
      state.bestPeer = payload;
    },
    SET_SEED: function SET_SEED(state, payload) {
      state.seed = payload;
    }
  },
  actions: {
    getBestPeer: function getBestPeer(_ref) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, bestPeer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return wallet["a" /* default */].getBestPeer();

              case 3:
                bestPeer = _context.sent;

                if (bestPeer) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                commit('SET_BEST_PEER', bestPeer);
                return _context.abrupt("return", bestPeer);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSeed: function getSeed(_ref2) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit, seed;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.next = 3;
                return network.networkInit();

              case 3:
                seed = _context2.sent;

                if (seed) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                commit('SET_SEED', seed);
                return _context2.abrupt("return", seed);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/store/modules/blockchain.js



/* harmony default export */ var modules_blockchain = ({
  namespaced: true,
  state: {
    delegates: {
      list: [],
      count: 296
    },
    status: {
      "epoch": "2017-11-21T13:00:00.000Z",
      "height": 835759,
      "fee": 10000000,
      "milestone": 0,
      "nethash": "fc46bfaf9379121dd6b09f5014595c7b7bd52a0a6d57c5aff790b42a73c76da7",
      "reward": 200000000,
      "supply": 24167151800000000
    },
    fees: {
      "send": 10000000,
      "vote": 100000000,
      "secondsignature": 500000000,
      "delegate": 5500000000,
      "multisignature": 500000000
    },
    xbtsCandidates: [],
    xbtsWinners: [],
    selectedAccount: {}
  },
  getters: {
    delegates: function delegates(state) {
      return state.delegates;
    },
    status: function status(state) {
      return state.status;
    },
    fees: function fees(state) {
      return state.fees;
    },
    xbtsCandidates: function xbtsCandidates(state) {
      return state.xbtsCandidates;
    },
    xbtsWinners: function xbtsWinners(state) {
      return state.xbtsWinners;
    },
    selectedAccount: function selectedAccount(state) {
      return state.selectedAccount;
    }
  },
  mutations: {
    SET_DELEGATES: function SET_DELEGATES(state, payload) {
      state.delegates = payload;
    },
    SET_STATUS: function SET_STATUS(state, payload) {
      state.status = payload;
    },
    SET_FEES: function SET_FEES(state, payload) {
      state.fees = payload;
    },
    SET_CANDIDATE: function SET_CANDIDATE(state, payload) {
      state.xbtsCandidates = payload;
    },
    SET_WINNERS: function SET_WINNERS(state, payload) {
      state.xbtsWinners = payload;
    },
    SET_SELECTED_ACCOUNT: function SET_SELECTED_ACCOUNT(state, payload) {
      state.selectedAccount = payload;
    }
  },
  actions: {
    fetchDelegates: function fetchDelegates(_ref) {
      var _arguments = arguments;
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, value, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                value = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
                _context.next = 4;
                return blockchain.getDelegates(value);

              case 4:
                data = _context.sent;

                if (data.count > 0) {
                  commit('SET_DELEGATES', data);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStatus: function getStatus(_ref2) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.next = 3;
                return blockchain.getStatus();

              case 3:
                data = _context2.sent;
                commit('SET_STATUS', data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getAccount: function getAccount(_ref3, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit;

                if (value) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.next = 5;
                return blockchain.getAccount(value);

              case 5:
                data = _context3.sent;
                commit('SET_SELECTED_ACCOUNT', data);
                return _context3.abrupt("return", data);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getFees: function getFees(_ref4) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref4.commit;
                _context4.next = 3;
                return blockchain.getFees();

              case 3:
                data = _context4.sent;
                commit('SET_FEES', data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getXbtsCandidates: function getXbtsCandidates(_ref5) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref5.commit;
                _context5.next = 3;
                return blockchain.xbtsCandidates();

              case 3:
                data = _context5.sent;

                if (data) {
                  commit('SET_CANDIDATE', data);
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getXbtsWinners: function getXbtsWinners(_ref6) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref6.commit;
                _context6.next = 3;
                return blockchain.xbtsWinners();

              case 3:
                data = _context6.sent;

                if (data) {
                  commit('SET_WINNERS', data);
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/services/market.js








var market_Market = function () {
  function Market() {
    Object(classCallCheck["a" /* default */])(this, Market);
  }

  Object(createClass["a" /* default */])(Market, [{
    key: "priceHistory",
    value: function () {
      var _priceHistory = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var result, startDay, chartDay, i, startWeek, chartWeek, _i, startMonth, chartMonth, _i2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = {
                  day: {
                    values: [],
                    labels: []
                  },
                  week: {
                    values: [],
                    labels: []
                  },
                  month: {
                    values: [],
                    labels: []
                  },
                  min: 100,
                  max: 0
                };
                startDay = Math.floor(Date.now() / 1000) - 60 * 60 * 24;
                _context.prev = 2;
                _context.next = 5;
                return axios_default.a.get('https://api.coinpaprika.com/v1/tickers/sth-smartholdem/historical?start=' + startDay + '&interval=1h');

              case 5:
                chartDay = _context.sent.data;

                for (i = 0; i < chartDay.length; i++) {
                  result.day.values.push(chartDay[i].price);
                  result.day.labels.push(new Date(new Date(chartDay[i].timestamp).getTime()).toLocaleTimeString().substr(0, 5));

                  if (result.min > chartDay[i].price) {
                    result.min = chartDay[i].price;
                  }

                  if (chartDay[i].price > result.max) {
                    result.max = chartDay[i].price;
                  }
                }

                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
                startWeek = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 7;
                _context.prev = 12;
                _context.next = 15;
                return axios_default.a.get('https://api.coinpaprika.com/v1/tickers/sth-smartholdem/historical?start=' + startWeek + '&interval=1d');

              case 15:
                chartWeek = _context.sent.data;

                for (_i = 0; _i < chartWeek.length; _i++) {
                  result.week.values.push(chartWeek[_i].price);
                  result.week.labels.push(new Date(new Date(chartWeek[_i].timestamp).getTime()).toLocaleDateString().substr(0, 5));

                  if (result.min > chartWeek[_i].price) {
                    result.min = chartWeek[_i].price;
                  }

                  if (chartWeek[_i].price > result.max) {
                    result.max = chartWeek[_i].price;
                  }
                }

                _context.next = 21;
                break;

              case 19:
                _context.prev = 19;
                _context.t1 = _context["catch"](12);

              case 21:
                startMonth = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30;
                _context.prev = 22;
                _context.next = 25;
                return axios_default.a.get('https://api.coinpaprika.com/v1/tickers/sth-smartholdem/historical?start=' + startMonth + '&interval=1d');

              case 25:
                chartMonth = _context.sent.data;

                for (_i2 = 0; _i2 < chartMonth.length; _i2++) {
                  result.month.values.push(chartMonth[_i2].price);
                  result.month.labels.push(new Date(new Date(chartMonth[_i2].timestamp).getTime()).toLocaleDateString().substr(0, 5));

                  if (result.min > chartMonth[_i2].price) {
                    result.min = chartMonth[_i2].price;
                  }

                  if (chartMonth[_i2].price > result.max) {
                    result.max = chartMonth[_i2].price;
                  }
                }

                _context.next = 31;
                break;

              case 29:
                _context.prev = 29;
                _context.t2 = _context["catch"](22);

              case 31:
                return _context.abrupt("return", result);

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9], [12, 19], [22, 29]]);
      }));

      function priceHistory() {
        return _priceHistory.apply(this, arguments);
      }

      return priceHistory;
    }()
  }, {
    key: "getPriceChart",
    value: function () {
      var _getPriceChart = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var priceData, labels, values, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.priceHistory();

              case 2:
                priceData = _context2.sent;
                labels = [[], [], []];
                labels[0] = priceData.day.labels;
                labels[1] = priceData.week.labels;
                labels[2] = priceData.month.labels;
                values = [[], [], []];
                values[0] = priceData.day.values;
                values[1] = priceData.week.values;
                values[2] = priceData.month.values;
                result = {
                  activeIndex: 0,
                  labels: labels,
                  values: values,
                  min: priceData.min,
                  max: priceData.max,
                  chartData: {
                    datasets: [{
                      fill: true,
                      borderColor: '#42b883',
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: '#42b883',
                      pointBorderColor: 'rgba(255,255,255,0)',
                      pointHoverBackgroundColor: '#42b883',
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: labels[0]
                    }],
                    labels: values[0]
                  },
                  extraOptions: {
                    maintainAspectRatio: false,
                    legend: {
                      display: false
                    },
                    responsive: true,
                    tooltips: {
                      backgroundColor: '#f5f5f5',
                      titleFontColor: '#333',
                      bodyFontColor: '#666',
                      bodySpacing: 4,
                      xPadding: 12,
                      mode: 'nearest',
                      intersect: 0,
                      position: 'nearest'
                    },
                    scales: {
                      yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: false,
                          color: 'rgba(29,140,248,0.0)',
                          zeroLineColor: 'transparent'
                        },
                        ticks: {
                          suggestedMin: priceData.min,
                          suggestedMax: priceData.max,
                          padding: 0.0002,
                          fontColor: '#9a9a9a'
                        }
                      }],
                      xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: false,
                          color: 'rgba(225,78,202,0.1)',
                          zeroLineColor: 'transparent'
                        },
                        ticks: {
                          padding: 20,
                          fontColor: '#9a9a9a'
                        }
                      }]
                    }
                  },
                  gradientColors: ['rgba(76, 211, 150, 0.1)', 'rgba(53, 183, 125, 0)', 'rgba(119,52,169,0)'],
                  gradientStops: [1, 0.4, 0],
                  categories: []
                };
                return _context2.abrupt("return", result);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPriceChart() {
        return _getPriceChart.apply(this, arguments);
      }

      return getPriceChart;
    }()
  }]);

  return Market;
}();

/* harmony default export */ var market = (new market_Market());
// CONCATENATED MODULE: ./src/store/modules/market.js



/* harmony default export */ var modules_market = ({
  namespaced: true,
  state: {
    priceHistory: {
      day: {
        values: [],
        labels: []
      },
      week: {
        values: [],
        labels: []
      },
      month: {
        values: [],
        labels: []
      },
      min: 100,
      max: 0
    },
    chartData: {}
  },
  getters: {
    priceHistory: function priceHistory(state) {
      return state.priceHistory;
    },
    chartData: function chartData(state) {
      return state.chartData;
    }
  },
  mutations: {
    SET_PRICE_HISTORY: function SET_PRICE_HISTORY(state, payload) {
      state.priceHistory = payload;
    },
    SET_CHART_DATA: function SET_CHART_DATA(state, payload) {
      state.chartData = payload;
    }
  },
  actions: {
    getPriceChart: function getPriceChart(_ref) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return market.getPriceChart();

              case 3:
                data = _context.sent;
                commit('SET_CHART_DATA', data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/services/smartholder.js







var smartholder_SmartHolder = function () {
  function SmartHolder() {
    Object(classCallCheck["a" /* default */])(this, SmartHolder);
  }

  Object(createClass["a" /* default */])(SmartHolder, [{
    key: "getHolders",
    value: function () {
      var _getHolders = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios_default.a.get(src_config["network"].SMARTHOLDER + '/api/public/percents');

              case 2:
                _context.t0 = _context.sent.data;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = null;

              case 5:
                return _context.abrupt("return", _context.t0);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getHolders() {
        return _getHolders.apply(this, arguments);
      }

      return getHolders;
    }()
  }, {
    key: "getAssetsPay",
    value: function () {
      var _getAssetsPay = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios_default.a.get(src_config["network"].SMARTHOLDER + '/api/get/assets');

              case 2:
                _context2.t0 = _context2.sent.data;

                if (_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.t0 = null;

              case 5:
                return _context2.abrupt("return", _context2.t0);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAssetsPay() {
        return _getAssetsPay.apply(this, arguments);
      }

      return getAssetsPay;
    }()
  }, {
    key: "getAssetsNoq",
    value: function () {
      var _getAssetsNoq = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios_default.a.get(src_config["network"].SMARTHOLDER + '/api/get/noassets');

              case 2:
                _context3.t0 = _context3.sent.data;

                if (_context3.t0) {
                  _context3.next = 5;
                  break;
                }

                _context3.t0 = null;

              case 5:
                return _context3.abrupt("return", _context3.t0);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAssetsNoq() {
        return _getAssetsNoq.apply(this, arguments);
      }

      return getAssetsNoq;
    }()
  }, {
    key: "latestReportCountRemote",
    value: function () {
      var _latestReportCountRemote = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios_default.a.get('https://news.xbts.io/xbtsreports/count');

              case 2:
                _context4.t0 = _context4.sent.data;

                if (_context4.t0) {
                  _context4.next = 5;
                  break;
                }

                _context4.t0 = null;

              case 5:
                return _context4.abrupt("return", _context4.t0);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function latestReportCountRemote() {
        return _latestReportCountRemote.apply(this, arguments);
      }

      return latestReportCountRemote;
    }()
  }, {
    key: "fetchLatestReports",
    value: function () {
      var _fetchLatestReports = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios_default.a.get('https://news.xbts.io/xbtsreports?_limit=12&_sort=id:DESC');

              case 2:
                _context5.t0 = _context5.sent.data;

                if (_context5.t0) {
                  _context5.next = 5;
                  break;
                }

                _context5.t0 = null;

              case 5:
                return _context5.abrupt("return", _context5.t0);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function fetchLatestReports() {
        return _fetchLatestReports.apply(this, arguments);
      }

      return fetchLatestReports;
    }()
  }]);

  return SmartHolder;
}();

/* harmony default export */ var smartholder = (new smartholder_SmartHolder());
// CONCATENATED MODULE: ./src/store/modules/smartholder.js



/* harmony default export */ var modules_smartholder = ({
  namespaced: true,
  state: {
    holders: {
      total: {
        bonusesAmount: "",
        holders: 10,
        realAmount: ""
      },
      holders: []
    },
    assetsPay: [],
    assetsNoq: [],
    reports: [],
    latestReport: 0
  },
  getters: {
    holders: function holders(state) {
      return state.holders;
    },
    assetsPay: function assetsPay(state) {
      return state.assetsPay;
    },
    assetsNoq: function assetsNoq(state) {
      return state.assetsNoq;
    },
    reports: function reports(state) {
      return state.reports;
    },
    latestReport: function latestReport(state) {
      return state.latestReport;
    }
  },
  mutations: {
    SET_HOLDERS: function SET_HOLDERS(state, payload) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state.holders = payload;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    SET_ASSETS_PAY: function SET_ASSETS_PAY(state, payload) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state.assetsPay = payload;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    SET_ASSETS_NOQ: function SET_ASSETS_NOQ(state, payload) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                state.assetsNoq = payload;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    SET_REPORTS: function SET_REPORTS(state, payload) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                state.reports = payload;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    SET_LATEST_REPORT: function SET_LATEST_REPORT(state, payload) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                state.latestReport = payload;

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  actions: {
    getHolders: function getHolders(_ref) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var commit, isAuth, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref.commit;
                _context6.next = 3;
                return _this.getters['session/isAuth'];

              case 3:
                isAuth = _context6.sent;

                if (isAuth) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return");

              case 6:
                _context6.next = 8;
                return smartholder.getHolders();

              case 8:
                data = _context6.sent;

                if (data) {
                  _context6.next = 11;
                  break;
                }

                return _context6.abrupt("return");

              case 11:
                commit('SET_HOLDERS', data);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getAssetsPay: function getAssetsPay(_ref2) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7() {
        var commit, isAuth, data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref2.commit;
                _context7.next = 3;
                return _this2.getters['session/isAuth'];

              case 3:
                isAuth = _context7.sent;

                if (isAuth) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return");

              case 6:
                _context7.next = 8;
                return smartholder.getAssetsPay();

              case 8:
                data = _context7.sent;

                if (data) {
                  _context7.next = 11;
                  break;
                }

                return _context7.abrupt("return");

              case 11:
                commit('SET_ASSETS_PAY', data);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getAssetsNoq: function getAssetsNoq(_ref3) {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8() {
        var commit, isAuth, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref3.commit;
                _context8.next = 3;
                return _this3.getters['session/isAuth'];

              case 3:
                isAuth = _context8.sent;

                if (isAuth) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return");

              case 6:
                _context8.next = 8;
                return smartholder.getAssetsNoq();

              case 8:
                data = _context8.sent;

                if (data) {
                  _context8.next = 11;
                  break;
                }

                return _context8.abrupt("return");

              case 11:
                commit('SET_ASSETS_NOQ', data);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    setLatestReport: function setLatestReport(_ref4, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9() {
        var commit;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                commit = _ref4.commit;
                commit('SET_LATEST_REPORT', data);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    latestReportCountRemote: function latestReportCountRemote() {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return smartholder.latestReportCountRemote();

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    fetchLatestReports: function fetchLatestReports(_ref5) {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee11() {
        var commit, isAuth, result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                commit = _ref5.commit;
                _context11.next = 3;
                return _this4.getters['session/isAuth'];

              case 3:
                isAuth = _context11.sent;

                if (isAuth) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return");

              case 6:
                _context11.next = 8;
                return smartholder.fetchLatestReports();

              case 8:
                result = _context11.sent;

                if (result) {
                  _context11.next = 11;
                  break;
                }

                return _context11.abrupt("return");

              case 11:
                commit('SET_REPORTS', result);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./src/services/abounty.js









var cryptoRandomString = __webpack_require__("4556");

var abounty_Abounty = function () {
  function Abounty() {
    Object(classCallCheck["a" /* default */])(this, Abounty);
  }

  Object(createClass["a" /* default */])(Abounty, [{
    key: "prices",
    value: function () {
      var _prices = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;
                _context.prev = 1;
                _context.next = 4;
                return axios_default.a.get(src_config["network"].ABOUNTY + '/api/prices');

              case 4:
                result = _context.sent.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                result = null;

              case 10:
                return _context.abrupt("return", result);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      function prices() {
        return _prices.apply(this, arguments);
      }

      return prices;
    }()
  }, {
    key: "twGetAuthUrl",
    value: function () {
      var _twGetAuthUrl = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2(address) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = null;
                _context2.prev = 1;
                _context2.next = 4;
                return axios_default.a.get(src_config["network"].ABOUNTY + '/twitter/auth-url/' + address);

              case 4:
                result = _context2.sent.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                result = null;

              case 10:
                return _context2.abrupt("return", result);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7]]);
      }));

      function twGetAuthUrl(_x) {
        return _twGetAuthUrl.apply(this, arguments);
      }

      return twGetAuthUrl;
    }()
  }, {
    key: "twGetProfile",
    value: function () {
      var _twGetProfile = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3(address) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = null;
                _context3.prev = 1;
                _context3.next = 4;
                return axios_default.a.get(src_config["network"].ABOUNTY + '/twitter/user-data/' + address);

              case 4:
                result = _context3.sent.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                result = null;

              case 10:
                return _context3.abrupt("return", result);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 7]]);
      }));

      function twGetProfile(_x2) {
        return _twGetProfile.apply(this, arguments);
      }

      return twGetProfile;
    }()
  }, {
    key: "twValidateAdvFollow",
    value: function () {
      var _twValidateAdvFollow = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4(name) {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = null;
                _context4.prev = 1;
                _context4.next = 4;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/validate/adv-follow', {
                  name: name
                });

              case 4:
                result = _context4.sent.data;
                result.data.orderId = cryptoRandomString({
                  length: 10
                });
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                result = null;

              case 11:
                return _context4.abrupt("return", result);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function twValidateAdvFollow(_x3) {
        return _twValidateAdvFollow.apply(this, arguments);
      }

      return twValidateAdvFollow;
    }()
  }, {
    key: "twValidateAdvRetweet",
    value: function () {
      var _twValidateAdvRetweet = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5(url) {
        var result, arrUrl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = null;
                arrUrl = url.split('/');

                if (!(arrUrl[2] !== 'twitter.com' && arrUrl[4] !== 'status')) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", result);

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return axios_default.a.get(src_config["network"].ABOUNTY + '/twitter/validate/adv-retweet/' + arrUrl[5]);

              case 7:
                result = _context5.sent.data;
                result.data.orderId = cryptoRandomString({
                  length: 10
                });
                _context5.next = 14;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](4);
                result = null;

              case 14:
                return _context5.abrupt("return", result);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 11]]);
      }));

      function twValidateAdvRetweet(_x4) {
        return _twValidateAdvRetweet.apply(this, arguments);
      }

      return twValidateAdvRetweet;
    }()
  }, {
    key: "sendOrder",
    value: function () {
      var _sendOrder = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6(options) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = null;
                _context6.prev = 1;
                _context6.next = 4;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/put-order', options).data;

              case 4:
                result = _context6.sent;
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                result = null;

              case 10:
                return _context6.abrupt("return", result);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 7]]);
      }));

      function sendOrder(_x5) {
        return _sendOrder.apply(this, arguments);
      }

      return sendOrder;
    }()
  }, {
    key: "getTasks",
    value: function () {
      var _getTasks = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7(uid) {
        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = null;
                _context7.prev = 1;
                _context7.next = 4;
                return axios_default.a.get(src_config["network"].ABOUNTY + '/twitter/get-tasks/' + uid);

              case 4:
                result = _context7.sent.data;
                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                result = null;

              case 10:
                return _context7.abrupt("return", result);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 7]]);
      }));

      function getTasks(_x6) {
        return _getTasks.apply(this, arguments);
      }

      return getTasks;
    }()
  }, {
    key: "inWork",
    value: function () {
      var _inWork = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8(options) {
        var result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = null;
                _context8.prev = 1;
                _context8.next = 4;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/in-work', options);

              case 4:
                result = _context8.sent.data;
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](1);
                result = null;

              case 10:
                return _context8.abrupt("return", result);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[1, 7]]);
      }));

      function inWork(_x7) {
        return _inWork.apply(this, arguments);
      }

      return inWork;
    }()
  }, {
    key: "processAdd",
    value: function () {
      var _processAdd = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9(options) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/process-add', options).data;

              case 3:
                _context9.next = 7;
                break;

              case 5:
                _context9.prev = 5;
                _context9.t0 = _context9["catch"](0);

              case 7:
                return _context9.abrupt("return", true);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 5]]);
      }));

      function processAdd(_x8) {
        return _processAdd.apply(this, arguments);
      }

      return processAdd;
    }()
  }, {
    key: "twGetOrders",
    value: function () {
      var _twGetOrders = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10(addresses) {
        var result;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                result = null;
                _context10.prev = 1;
                _context10.next = 4;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/my-orders', {
                  addresses: addresses
                });

              case 4:
                result = _context10.sent.data;
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](1);
                result = null;

              case 10:
                return _context10.abrupt("return", result);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 7]]);
      }));

      function twGetOrders(_x9) {
        return _twGetOrders.apply(this, arguments);
      }

      return twGetOrders;
    }()
  }, {
    key: "getInviters",
    value: function () {
      var _getInviters = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee11(addresses) {
        var result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = [];
                _context11.prev = 1;
                _context11.next = 4;
                return axios_default.a.post(src_config["network"].ABOUNTY + '/twitter/inviters', {
                  addresses: addresses
                });

              case 4:
                result = _context11.sent.data;
                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](1);
                result = null;

              case 10:
                return _context11.abrupt("return", result);

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 7]]);
      }));

      function getInviters(_x10) {
        return _getInviters.apply(this, arguments);
      }

      return getInviters;
    }()
  }]);

  return Abounty;
}();

/* harmony default export */ var abounty = (new abounty_Abounty());
// CONCATENATED MODULE: ./src/store/modules/abounty.js



/* harmony default export */ var modules_abounty = ({
  namespaced: true,
  state: {
    bank: "SiRB1We8M6G81iRioitDWB8bqJeW5vQJqh",
    prices: {
      twitter: {
        reward: 5,
        retweet: 10,
        like: 10,
        follow: 10
      }
    },
    twitter: {},
    tasks: {
      success: {},
      twitter: []
    },
    orders: {}
  },
  getters: {
    bank: function bank(state) {
      return state.bank;
    },
    prices: function prices(state) {
      return state.prices;
    },
    twitter: function twitter(state) {
      return state.twitter;
    },
    tasks: function tasks(state) {
      return state.tasks;
    },
    orders: function orders(state) {
      return state.orders;
    }
  },
  mutations: {
    RESET_TWITTER_ACCOUNT: function RESET_TWITTER_ACCOUNT(state, payload) {
      state.twitter = {};
    },
    SET_PRICES: function SET_PRICES(state, payload) {
      state.prices = payload;
    },
    SET_ORDER: function SET_ORDER(state, payload) {
      state.orders = payload;
    },
    ADD_TWITTER_ACCOUNT: function ADD_TWITTER_ACCOUNT(state, payload) {
      state.twitter[payload.address] = payload;
    },
    SET_TASKS_TW: function SET_TASKS_TW(state, payload) {
      state.tasks.twitter = payload;
    },
    SET_TASK_SUCCESS: function SET_TASK_SUCCESS(state, payload) {
      state.tasks.success[payload.tid] = {
        timestamp: Date.now(),
        tid: payload.tid,
        amount: payload.amount,
        address: payload.address
      };
    }
  },
  actions: {
    twGetOrders: function twGetOrders(_ref, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return abounty.twGetOrders(value);

              case 3:
                result = _context.sent;

                if (result) {
                  commit('SET_ORDER', result);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    prices: function prices(_ref2) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.next = 3;
                return abounty.prices();

              case 3:
                result = _context2.sent;

                if (result) {
                  commit('SET_PRICES', result);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    twGetAuthUrl: function twGetAuthUrl(_ref3, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        var commit;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit;
                _context3.next = 3;
                return abounty.twGetAuthUrl(value);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    twGetProfile: function twGetProfile(_ref4, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref4.commit;
                _context4.next = 3;
                return abounty.twGetProfile(value);

              case 3:
                result = _context4.sent;

                if (result) {
                  commit('ADD_TWITTER_ACCOUNT', result);
                } else {
                  commit('RESET_TWITTER_ACCOUNT', result);
                }

                return _context4.abrupt("return", result);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    twSetProfile: function twSetProfile(_ref5, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        var commit;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref5.commit;
                commit('ADD_TWITTER_ACCOUNT', value);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    twValidateAdvFollow: function twValidateAdvFollow(_ref6, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        var commit;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref6.commit;
                _context6.next = 3;
                return abounty.twValidateAdvFollow(value);

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    twValidateAdvRetweet: function twValidateAdvRetweet(_ref7, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7() {
        var commit;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref7.commit;
                _context7.next = 3;
                return abounty.twValidateAdvRetweet(value);

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    sendOrder: function sendOrder(_ref8, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8() {
        var commit;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref8.commit;
                _context8.next = 3;
                return abounty.sendOrder(value);

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getTasks: function getTasks(_ref9, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                commit = _ref9.commit;
                _context9.next = 3;
                return abounty.getTasks(value);

              case 3:
                result = _context9.sent;

                if (result) {
                  commit('SET_TASKS_TW', result);
                }

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    processAdd: function processAdd(_ref10, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee10() {
        var commit;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                commit = _ref10.commit;
                _context10.next = 3;
                return abounty.processAdd(value);

              case 3:
                return _context10.abrupt("return");

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    setTaskSuccess: function setTaskSuccess(_ref11, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee11() {
        var commit;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                commit = _ref11.commit;
                commit('SET_TASK_SUCCESS', value);

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/store/modules/promo.js



/* harmony default export */ var promo = ({
  namespaced: true,
  state: {
    invited: null,
    inviters: []
  },
  getters: {
    invited: function invited(state) {
      return state.invited;
    },
    inviters: function inviters(state) {
      return state.inviters;
    }
  },
  mutations: {
    SET_INVITED: function SET_INVITED(state, payload) {
      state.invited = payload;
    },
    SET_INVITERS: function SET_INVITERS(state, payload) {
      state.inviters = payload;
    }
  },
  actions: {
    setInvited: function setInvited(_ref, value) {
      var commit = _ref.commit;
      commit('SET_INVITED', value);
    },
    getInviters: function getInviters(_ref2, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit;
                _context.next = 3;
                return abounty.getInviters(value);

              case 3:
                result = _context.sent;

                if (result) {
                  commit('SET_INVITERS', result);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    inWork: function inWork(_ref3, value) {
      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        var commit, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit;
                _context2.next = 3;
                return abounty.inWork(value);

              case 3:
                result = _context2.sent;

                if (result.inviter) {
                  commit('SET_INVITED', result.inviter);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js















vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
var modules = {
  app: modules_app,
  session: session,
  wallet: modules_wallet,
  network: modules_network,
  blockchain: modules_blockchain,
  market: modules_market,
  smartholder: modules_smartholder,
  abounty: modules_abounty,
  promo: promo
};
var ignoreModules = [];
var vuexPersist = new esm["a" /* default */]({
  strictMode: true,
  asyncStorage: true,
  key: 'sth-wallet',
  storage: localforage_default.a,
  modules: Object(lodash["pullAll"])(Object(lodash["keys"])(modules), ignoreModules)
});
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  modules: modules,
  strict: "production" !== 'production',
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION
  },
  actions: {
    resetData: function resetData() {
      return localforage_default.a.clear();
    }
  },
  plugins: [vuexPersist.plugin, vuex_persist_ready]
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./src/services/synchronizer/balance.js


/* harmony default export */ var balance = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('wallet/getBalances');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/tx.js


/* harmony default export */ var synchronizer_tx = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/market.js


/* harmony default export */ var synchronizer_market = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('wallet/getSthMarket');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/status.js


/* harmony default export */ var synchronizer_status = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('blockchain/getStatus');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/priceHistory.js


/* harmony default export */ var synchronizer_priceHistory = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('market/getPriceChart');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/holders.js


/* harmony default export */ var holders = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('smartholder/getHolders');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/assets-pay.js


/* harmony default export */ var assets_pay = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('smartholder/getAssetsPay');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/assets-noq.js


/* harmony default export */ var assets_noq = ((function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(synchronizer) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return synchronizer.$store.dispatch('smartholder/getAssetsNoq');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/services/synchronizer/index.js









// CONCATENATED MODULE: ./src/services/synchronizer.js











var synchronizer_Synchronizer = function () {
  Object(createClass["a" /* default */])(Synchronizer, [{
    key: "intervals",
    get: function get() {
      var block = 8000;
      var intervals = {
        longest: block * 300,
        longer: block * 100,
        medium: block * 25,
        shorter: block * 10,
        shortest: block * 3,
        block: block,
        loop: 2000
      };
      return intervals;
    }
  }, {
    key: "config",
    get: function get() {
      var _this$intervals = this.intervals,
          loop = _this$intervals.loop,
          shortest = _this$intervals.shortest,
          shorter = _this$intervals.shorter,
          medium = _this$intervals.medium,
          longer = _this$intervals.longer,
          longest = _this$intervals.longest;
      var config = {
        balance: {
          default: {
            interval: shortest
          },
          focus: {
            interval: loop
          }
        },
        tx: {
          default: {
            interval: shorter
          },
          focus: {
            interval: loop
          }
        },
        market: {
          default: {
            interval: medium
          },
          focus: {
            interval: loop
          }
        },
        status: {
          default: {
            interval: shortest
          },
          focus: {
            interval: loop
          }
        },
        priceHistory: {
          default: {
            interval: medium
          },
          focus: {
            interval: loop
          }
        },
        holders: {
          default: {
            interval: longest
          },
          focus: {
            interval: loop
          }
        },
        assetsPay: {
          default: {
            interval: longest
          },
          focus: {
            interval: loop
          }
        },
        assetsNoq: {
          default: {
            interval: longest
          },
          focus: {
            interval: loop
          }
        }
      };
      return config;
    }
  }, {
    key: "$store",
    get: function get() {
      return this.scope.$store;
    }
  }]);

  function Synchronizer(_ref) {
    var scope = _ref.scope;

    Object(classCallCheck["a" /* default */])(this, Synchronizer);

    this.scope = scope;
    this.actions = {};
    this.focused = [];
    this.paused = [];
  }

  Object(createClass["a" /* default */])(Synchronizer, [{
    key: "define",
    value: function define(actionId, config, actionFn) {
      if (!Object(lodash["isFunction"])(actionFn)) {
        throw new Error('[$synchronizer] action is not a function');
      }

      ['default', 'focus'].forEach(function (mode) {
        var interval = config[mode].interval;

        if (!interval && interval !== null) {
          throw new Error("[$synchronizer] `interval` for `".concat(mode, "` mode should be a Number bigger than 0 (or `null` to ignore it)"));
        }
      });
      this.actions[actionId] = Object(objectSpread2["a" /* default */])({
        calledAt: 0,
        isCalling: false,
        fn: actionFn
      }, config);
    }
  }, {
    key: "focus",
    value: function focus() {
      for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
        actions[_key] = arguments[_key];
      }

      this.focused = Object(lodash["flatten"])(actions);
      this.unpause(this.focused);
    }
  }, {
    key: "pause",
    value: function pause() {
      for (var _len2 = arguments.length, actions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        actions[_key2] = arguments[_key2];
      }

      this.paused = Object(lodash["flatten"])(actions);
    }
  }, {
    key: "unpause",
    value: function unpause() {
      for (var _len3 = arguments.length, actions = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        actions[_key3] = arguments[_key3];
      }

      Object(lodash["pullAll"])(this.paused, Object(lodash["flatten"])(actions));
    }
  }, {
    key: "trigger",
    value: function trigger() {
      var _this = this;

      for (var _len4 = arguments.length, actions = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        actions[_key4] = arguments[_key4];
      }

      Object(lodash["flatten"])(actions).forEach(function (actionId) {
        return _this.call(actionId);
      });
    }
  }, {
    key: "call",
    value: function () {
      var _call = Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee(actionId) {
        var action;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                action = this.actions[actionId];

                if (action) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                action.isCalling = true;
                _context.next = 6;
                return action.fn();

              case 6:
                action.calledAt = new Date().getTime();
                action.isCalling = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
  }, {
    key: "ready",
    value: function ready() {
      var _this2 = this;

      var run = function run() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        Object.keys(_this2.actions).forEach(function (actionId) {
          if (!Object(lodash["includes"])(_this2.paused, actionId)) {
            var action = _this2.actions[actionId];

            if (!action.isCalling) {
              if (options.immediate) {
                _this2.call(actionId);
              } else {
                var mode = Object(lodash["includes"])(_this2.focused, actionId) ? 'focus' : 'default';
                var interval = action[mode].interval;

                if (interval !== null) {
                  if (!action.calledAt && action[mode].delay) {
                    action.calledAt += action.delay;
                  }

                  var nextCallAt = action.calledAt + interval;
                  var now = new Date().getTime();

                  if (nextCallAt <= now) {
                    _this2.call(actionId);
                  }
                }
              }
            }
          }
        });
      };

      var runLoop = function runLoop() {
        setTimeout(function () {
          run();
          runLoop();
        }, _this2.intervals.loop);
      };

      run({
        immediate: true
      });
      runLoop();
    }
  }, {
    key: "defineAll",
    value: function defineAll() {
      var _this3 = this;

      this.define('balance', this.config.balance, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return balance(_this3);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
      this.define('tx', this.config.tx, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return synchronizer_tx(_this3);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
      this.define('market', this.config.market, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return synchronizer_market(_this3);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
      this.define('status', this.config.status, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return synchronizer_status(_this3);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
      this.define('priceHistory', this.config.priceHistory, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return synchronizer_priceHistory(_this3);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })));
      this.define('holders', this.config.holders, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return holders(_this3);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      })));
      this.define('assetsPay', this.config.assetsPay, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return assets_pay(_this3);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      })));
      this.define('assetsNoq', this.config.assetsNoq, Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return assets_noq(_this3);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      })));
    }
  }]);

  return Synchronizer;
}();


// CONCATENATED MODULE: ./src/plugins/synchronizer.js

/* harmony default export */ var plugins_synchronizer = ({
  install: function install(Vue, _options) {
    var synchronizer;
    Object.defineProperty(Vue.prototype, '$synchronizer', {
      get: function get() {
        if (!synchronizer) {
          synchronizer = new synchronizer_Synchronizer({
            scope: this
          });
        }

        return synchronizer;
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/vue-native-websocket/dist/build.js
var build = __webpack_require__("b408");
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// CONCATENATED MODULE: ./src/main.js



















vue_runtime_esm["default"].config.productionTip = false;
vue_runtime_esm["default"].prototype.$eventBus = event_bus["a" /* default */];
vue_runtime_esm["default"].use(dashboard_plugin);
vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
vue_runtime_esm["default"].use(index_esm["a" /* default */]);
vue_clipboard_default.a.config.autoSetContainer = true;
vue_runtime_esm["default"].use(vue_clipboard_default.a);
vue_runtime_esm["default"].use(plugins_synchronizer);
vue_runtime_esm["default"].mixin(src_mixins);
vue_runtime_esm["default"].use(build_default.a, src_config["network"].WS, {
  format: 'json',
  reconnection: true,
  reconnectionDelay: 5000
});
new vue_runtime_esm["default"]({
  el: '#app',
  render: function render(h) {
    return h(App);
  },
  router: routes_router,
  store: store,
  i18n: i18n
});

/***/ }),

/***/ "57f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "64e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_fdcaffd8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c880");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_fdcaffd8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_fdcaffd8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_fdcaffd8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "67d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6a5d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ae5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b5b2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6c4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d0cf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6cd0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("57f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6dac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b64b");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1da1");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("db49");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);




var open;

if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
  open = __webpack_require__("10b9");
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      coins: _config__WEBPACK_IMPORTED_MODULE_3__["coins"],
      mixval: {
        copied: 'Copy to clipboard'
      }
    };
  },
  computed: {
    myAddresses: function myAddresses() {
      return Object.keys(this.$store.getters['app/accounts']);
    },
    isAuth: function isAuth() {
      return this.$store.getters['session/isAuth'];
    }
  },
  methods: {
    notify: function notify(verticalAlign, horizontalAlign) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
      var msg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Success';
      this.$notify({
        message: msg,
        timeout: 5000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type
      });
    },
    openLink: function openLink(url) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_blank';

      if (url) {
        if (Object({"NODE_ENV":"production","VUE_APP_I18N_FALLBACK_LOCALE":"en","VUE_APP_I18N_LOCALE":"en","BASE_URL":"/smartholdem.io/"}).IS_ELECTRON) {
          Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return open(url);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        } else {
          window.open(url, type);
        }
      }
    },
    clipboardSuccess: function clipboardSuccess(value) {
      var _this = this;

      this.mixval.copied = 'Copied to clipboard';
      setTimeout(function () {
        return _this.mixval.copied = 'Copy to clipboard';
      }, 1500);
    },
    addressDecrypt: function addressDecrypt(address, pin) {
      var _this2 = this;

      return Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(regeneratorRuntime.mark(function _callee2() {
        var secret;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('app/walletDecrypt', {
                  address: address,
                  pin: pin
                });

              case 2:
                secret = _context2.sent;
                return _context2.abrupt("return", secret);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "7704":
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar\":{\"title\":\"SmartHoldem\",\"shortTitle\":\"STH\"},\"APP\":{\"NO_WALLETS\":\"Нет Адресов\",\"CREATE_PROFILE\":\"Создать кошелёк\",\"COME_UP\":\"Придумайте\",\"MY_WALLETS\":\"МОИ КОШЕЛЬКИ\",\"CREATE_SAVE\":\"СОЗДАТЬ & СОХРАНИТЬ\",\"CONNECTION\":\"Подключение\",\"ADDR_COPY\":\"Нажмите на адрес для копирования\",\"PRIV_DATA\":\"Приватные Данные\",\"SURE\":\"Вы Уверены?\",\"MSG_SECURE\":\"!Никогда не передавайте свой секретный ключ третьим лицам. Храните ваш пароль в надёжном месте.\",\"CONFIRM\":\"Подтвердить\",\"CONTINUE\":\"Продолжить\",\"CANCEL\":\"Отмена\",\"WELCOME\":\"Добро пожаловать в SmartHoldem\",\"OPEN_WALLET\":\"Мой кошелёк\",\"OR\":\"ИЛИ\",\"ENTER\":\"Укажите\",\"SETTINGS\":\"Настройки\",\"SOUND\":\"Звук\",\"SW_OFF\":\"OFF\",\"SW_ON\":\"ON\",\"UNLOCK\":\"Разблокировать\",\"NO_BIP39\":\"The secret phrase is not a BIP39 standard\",\"RESET\":\"Стереть все данные\",\"CLOSE\":\"Закрыть\",\"ALL_DATA_RESET\":\"Все ваши данные, включая созданные учетные записи, сети и статистика, будут удалены из приложения и сброшены по умолчанию.\",\"HELP\":\"Помощь\",\"TITLE\":\"Кошелёк SmartHoldem\",\"GET_UADDR\":\"Получите новый или импортируйте ваш адрес\",\"BASED_STH\":\"Основано на децентрализованном blockchain\",\"PROTECT\":\"Защита ваших данных\",\"PROTECT_DATA\":\"Придумайте pin-код для шифрования ваших данных\",\"IMPORT_ACCOUNT\":\"Импорт существующего адреса\",\"GET_STARTED\":\"Начать\",\"YOUR_PUB_ADDR\":\"Ваш адрес\",\"YOUR_SECRET\":\"Секретная фраза. Храните в секрете!\",\"I_SAVED\":\"Я сохранил секретную фразу в безопасное место\",\"IF_LOSE\":\"Если я потеряю свою секретную фразу, я не могу восстановить доступ к своей учетной записи\",\"YOUR_PUB\":\"Ваш публичный адрес для получения и отправки\",\"ENTER_SECRET\":\"Секретная фраза\",\"GET_NEW_ACC\":\"Получить новый аккаунт\",\"AGREE1\":\"Я принимаю \",\"AGREE2\":\"соглашения и условия\",\"REPEAT\":\"Повторите\",\"LOCK\":\"Lock Screen\",\"QUIT\":\"Выход\",\"ON\":\"на\",\"OP\":\"операцию\",\"DELEGATES_DESCRIPTION\":\"Голосование является необязательным, но важным механизмом, обеспечивающим безопасность сети SmartHoldem. 64 делегата с наибольшим количеством голосов в сети отвечают за проверку и подтверждение транзакций в новых блоках. Сейчас зарегистрированы {delegates} делегатов.\"},\"WALLET\":{\"SIGN_MSG\":\"Подпишите сообщение, чтобы подтвердить свой кошелек\",\"QR_PRIV_SCAN\":\"Импорт адреса в мобильное приложение SmartHoldem с приватным QR\",\"QR_PRIV\":\"QR Приватного и Публичного ключа (никогда не передавайте)\",\"YOUR_SECRET\":\"Ваша секретная фраза\",\"NEVER_SHARE_PRIV\":\"Никогда не передавайте свой секретный ключ третьим лицам. Храните ваш пароль в надёжном месте\",\"SCAN_INVOICE_MOB\":\"Отсканируйте QR-счёт с мобильным приложением SmartHoldem\",\"QR_INVOICE\":\"QR-счёт получения платежей\",\"CLICK_ADDRESS\":\"Кликните на адрес для копирования в буфер обмена\",\"RECEIVE_ADDRESS\":\"Получить STH/Выставить QR-Счёт\",\"SET_WALLET_NAME\":\"Задать Имя Кошелька\",\"SHOW_PRIVATE\":\"Показать Приватный Ключ\",\"REGISTER_DELEGATE\":\"Регистрация делегата\",\"SIGN\":\"Подпись\",\"DELEGATES\":\"Делегаты\",\"UNLOCK\":\"Разблокировать Кошелёк\",\"NAME\":\"Имя\",\"MEMO\":\"Примечание\",\"SCAN_QR_ERR\":\"Для сканирования QR-кода необходимо включить разрешение на использование камеры в настройках приложения\",\"SCAN_QR_SEND\":\"Скан QR для отправки\",\"REMAINING\":\"Остаток\",\"SEND\":\"Отправить\",\"VOTED_FOR\":\"Голос За\",\"CREATE_WALLET\":\"Создать Адрес\",\"IMPORT_WALLET\":\"Импортировать Адрес\",\"TOTAL\":\"Общий баланс\",\"AMOUNT\":\"Сумма\",\"CONF\":\"Подтв.\",\"WALLET\":\"Кошелёк\",\"AVAILABLE\":\"Доступны\",\"ADDRESSES\":\"Адресов\",\"BALANCE\":\"Баланс\",\"TRANSACTIONS\":\"Транзакции\",\"BUY\":\"Приобрести\",\"ADDRESS\":\"Адрес\",\"MY\":\"Мой\",\"EXCHANGE\":\"Обменять сейчас\",\"YOU_SEND\":\"ВЫ ОТПРАВЛЯЕТЕ\",\"YOU_GET\":\"ВЫ ПОЛУЧИТЕ\",\"GET_DEPOSIT_ADDRESS\":\"Получить адрес депозита\",\"TIME\":\"Время\",\"SENDER\":\"Отправитель\",\"RECIPIENT\":\"Получатель\",\"REQ-MEMO\":\"Обязательное поле примечания (memo)\",\"MIN_SEND\":\"Минимум к отправке\",\"MAX_RECEIVE\":\"МАксимум к получению\",\"HISTORY\":\"История\",\"SENT\":\"Отправлены\",\"FROM\":\"от\",\"PRICE\":\"Цена\",\"RECEIVED\":\"Получено\",\"DEPOSIT_ADDRESS\":\"Адрес Депозита\",\"RECEIVE\":\"Получить\",\"PER\":\"per\",\"PROVIDED\":\"Обмен предоставлен \",\"SEND_YOUR\":\"Отправьте ваши\",\"BY_DETAILS\":\"на предоставленный адрес\",\"I_SEND\":\"Я отправил\",\"RECEIVING\":\"Получение\",\"CHECK_DEP\":\"Проверить депозиты\",\"AFTER_CONF\":\"После подтверждения транзакции ваш STH-Адрес будет пополнен\",\"GET_ADDR_DEP\":\"Получить адрес депозита\"},\"TERMS\":{\"C_TITLE\":\"Please arrange your time reasonably\",\"C1\":\"\",\"C2\":\"\"},\"SET\":{\"LANG\":\"Язык\",\"LANG_NAME\":\"Русский\",\"CURRENCY\":\"Валюта\",\"MODE\":\"Тёмный режим\",\"NOTIF\":\"Оповещения\",\"CLEAR\":\"Очистить все данные\",\"VER\":\"Версия\"},\"PG\":{\"WALLETS\":\"Кошельки\",\"CONTACTS\":\"Контакты\",\"DELEGATES\":\"Делегаты\",\"QUIT\":\"Выход\",\"SET\":\"Настройки\"},\"XBTS\":{\"REQ_MEMO\":\"Обязательно добавьте в поле примечания/memo текст: {address}\",\"MAX\":\"Максимум к получению\",\"INSTRUCTION\":\"<br><ul><li>Выберите актив для обмена (ex. BTC, LTC etc.)</li><li>Укажите сумму для отправки</li><li>Нажмите кнопку Exchange</li><li>Получите адрес депозита для выбранного актива</li><li>Отправить свой актив (ex. BTC, LTC etc.) на полученный адрес депозита</li><li>Нажмите History Deps для проверки статуса вашей транзакции</li><li>После подтверждения транзакции, ваш STH - Адрес будет пополнен!</li></ul>\"},\"WEB\":{\"WELCOME\":\"Приветствуем вас в SmartHoldem\",\"OPEN_WALLET\":\"Открыть онлайн кошелёк\",\"INVITED\":\"Вы приглашены\",\"USE_DEX\":\"Войдите в свой кошелёк или создайте новый для использования децентрализованных сервисов SmartHoldem Platform\",\"INCUSTOMER\":\"Каждый приглашённый участник платформы получает дополнительное вознаграждение за выполнение заданий\"},\"ABOUNTY\":{\"REAL_PEOPLES\":\"Только Реальные Люди!\",\"TRY\":\"Попробуйте инструменты Crypto Twitter бесплатно\",\"GROW_BRAND\":\"Продвигайте свой бренд Twitter вместе с Crypto Сообществом!\",\"EXPLORE\":\"Обзор\",\"P4\":\"Мгновенная оплата за ретвит, лайк, подписчика в твиттере!\",\"P3\":\"3. Зарабатывайте криптовалюту и наслаждайтесь ANTIBOUNTY!\",\"P2\":\"2. Получите кошелёк! Только ВЫ имеете доступ к своему аккаунту!\",\"P1\":\"1. Откройте онлайн-кошелёк на веб-сайте платформы https://smartholdem.io\",\"PART\":\"Вы можете принять участие в ANTIBOUNTY Сейчас!\",\"PROTECT_WORK\":\"Защита от нечестных работников\",\"W_ADDR\":\"Адрес кошелька это ваш баунти-аккаунт\",\"DEPOSIT_IN\":\"Используйте популярные крипто\",\"INSTANT_PAY\":\"Мгновенные платежи\",\"EASY\":\"Простота использования\",\"REAL_ACC\":\"Реальные Аккаунты\",\"GUARANT\":\"Гарантировано\",\"SOCIAL_SERVICES\":\"Социальные Сервисы\",\"SIGN_UP\":\"ВОЙТИ\",\"AF_D4\":\"Antibounty - это беспроигрышный вариант для всех!\",\"AF_D3\":\"Получайте больше STH за каждые выполненные задания, которы ваши партнеры делают в Twitter!\",\"AF_D2\":\"Пользователь получает больше STH вознаграждений после активации реферальной ссылки\",\"AF_D1\":\"Поделитесь своей личной реферальной ссылкой с пользователями в Интернете\",\"AFF4\":\"4. Партнёрская программа\",\"AFF3\":\"3. Чистый профит\",\"AFF2\":\"2. Пригласите пользователей\",\"AFF1\":\"1. Получите ссылку\",\"AFF_T1\":\"Пригласите пользователей в Antibounty и заработайте больше STH! Antibounty выплачивает вознаграждение за все выполненные задания, которые ваш партнер делает в течение жизни своего аккаунта.\",\"AFF_T2\":\"Партнерские выплаты по Antibounty происходят каждое воскресенье, начиная с 1 воскресенья со дня, когда ваш реферал активировал свою ссылку и выполнил свое первое задание. Antibounty платит вам в STH на адрес кошелька STH.\",\"AFF_ERR\":\"Вы не можете приглашать себя\",\"MY_PLINKS\":\"Мои партнёрские ссылки\",\"MY_PLINK_INFO\":\"Поделитесь ссылкой с друзьями и получайте вознаграждение за каждое выполненное задание\",\"MY_PSTAT_INFO\":\"Накопленные выплаты по партнёрской программе проводятся каждую неделю\",\"MY_PSTAT\":\"Моя партнёрская статистика\",\"PENDING\":\"В ожидании\",\"PAID_OUT\":\"Выплачено\",\"INVITED\":\"Приглашены\",\"MEMBER\":\"Партнёр\",\"MORE\":\"Больше\",\"MY_ACCOUNT\":\"Мой аккаунт\",\"NO_TASKS\":\"Нет доступных заданий\",\"NEGATIVE\":\"Негативный рейтинг\",\"RECEIVE_REWARDS\":\"Получите мгновенные награды в монетах STH на этот адрес\",\"AUTH_TEXT\":\"Ваш адрес кошелька это ваш AntiBounty аккаунт.<br>По этому адресу будут отправлены криптовалюты за выполнение заданий.<br>Выплаты происходят мгновенно.<br>С каждым успешным завершением задания ваш рейтинг AntiBounty растет.\",\"FEE\":\"Комиссия Blockchain\",\"RECIPIENT\":\"Получатель\",\"SELECT_ADDR\":\"Выберите Ваш Адрес\",\"COUNT\":\"Количество\",\"AMOUNT\":\"Сумма\",\"PAYMENT\":\"ПЛАТЁЖ\",\"EXPLORER\":\"Смотреть транзакцию в Обозревателе Блоков\",\"CLOSE\":\"Закрыть\",\"CONFIRM\":\"Подтвердить\",\"OR\":\"или\",\"NAME_LINK\":\"Twitter аккаунт имя или ссылка\",\"COUNT_FOLLOW\":\"Число подписчиков\",\"COMPLETED\":\"Завершённые\",\"MY_ORDERS\":\"Мои Заказы\",\"RETWEETS\":\"Ретвиты\",\"ADD\":\"Заказать\",\"PAY_ORDER\":\"Оплатить заказ\",\"ORDER_AUTO\":\"Заказ будет размещен автоматически после подтвеждения транзакции. На вашем балансе должно быть достаточно STH монет для оплаты.\",\"VALIDATE\":\"ПРОВЕРИТЬ\",\"AMOUNT_PAY\":\"Сумма к оплате\",\"COUNT_TWEETS\":\"Количество ретвитов\",\"LINK_TWEET\":\"Ссылка на ваш твит\",\"ORDER\":\"Заказ\",\"STATS\":\"Статистика\",\"TASKS\":\"Задания\",\"AV_TASKS\":\"Доступные задания\",\"DAYS\":\"дней\",\"ACCOUNT\":\"Аккаунт\",\"FOLLOWERS\":\"Подписчики\",\"FRIENDS\":\"Друзей\",\"WORK_INFO\":\"Получайте мгновенные награды в монетах STH за честное выполнение заданий\",\"MIN_REQ\":\"Минимальные требования\",\"JOINED\":\"Присоединился к AntiBounty\",\"PAYMENT_TASKS\":\"ЗАДАНИЯ\",\"ADD_TASK\":\"Добавить Задание\",\"EARN\":\"Заработать STH\",\"GROW\":\"Развивайте свой Twitter бренд с помощью крипто-сообщества!\",\"CUSTOMER\":\"ЗАКАЗЧИК\",\"WORKER\":\"РАБОТНИК\",\"GET_STARTED\":\"Начать\",\"D1\":\"Antibounty - это мощный инструмент заработка криптовалюты для всех участников. Зарабатывайте криптовалюту за выполнение заданий. Публикуйте задания и получайте обратную связь от реальных пользователей.\",\"D2\":\"Antibounty - единственный сервис в мире, который предоставляет реальную активность от реальных людей с подтверждением заказов и задач на блокчейне! Используйте блокчейн Twitter инструменты уже сейчас и получайте профит и рост своего Twitter аккаунта!\",\"WORK_TEXT\":\"<p>Ваш адрес кошелька это ваш AntiBounty аккаунт.<br>По этому адресу выплачиваются вознаграждения за выполненные задания.<br>Выплаты происходят мгновенно.<br>Позитивный рейтинг AntiBounty участника растёт с каждым успешным выполнением задания.<br>!!!AntiBounty имеет встроенную защиту от недобросовестных работников.<br>За каждую отмененную работу ваш негативный рейтинг растёт.</p><p>Негативный рейтинг растет в таких случаях:</p><ul><li>Если вы подписались, получили выплату и отписались;</li>\\n            <li>Если вы ретвитнули и отменили ретвит;</li>\\n            <li>Если вы выполнили like и отменили действие.</li>\\n          </ul>\\n          <p>За каждое отменённое задание начисляется 10 баллов негативного рейтинга.</p>\\n          <p>\\n            За каждую единицу негативного рейтинга необходимо выполнить 1 задание без оплаты. <br>Пока не будет достигнуто нулевое значение негативного рейтинга Вам не будет начисляться криптовалюта за выполнение заданий.<br>Такая система защищает всех участников AntiBounty от недобросовестных работников.<br>Выполняйте задания честно и получайте мгновенные выплаты!<br>Время получения вознаграждений на ваш кошелек SmartHoldem составляет 3-8 секунд.</p>\"}}");

/***/ }),

/***/ "804b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cards/StatsCard.vue?vue&type=template&id=26104730&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',{staticClass:"card-stats",attrs:{"show-footer-line":true}},[_c('div',{staticClass:"row"},[(_vm.$slots.icon || _vm.icon)?_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"info-icon text-center",class:("icon-" + _vm.type)},[_vm._t("icon",[_c('i',{class:_vm.icon})])],2)]):_vm._e(),(_vm.$slots.content || _vm.title || _vm.subTitle)?_c('div',{staticClass:"col-7"},[_c('div',{staticClass:"numbers"},[_vm._t("default",[(_vm.subTitle)?_c('p',{staticClass:"card-category"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e(),(_vm.title)?_c('h3',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()])],2)]):_vm._e()]),(_vm.$slots.footer)?_c('div',{staticClass:"stats",attrs:{"slot":"footer"},slot:"footer"},[_vm._t("footer")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Cards/StatsCard.vue?vue&type=template&id=26104730&

// EXTERNAL MODULE: ./src/components/Cards/Card.vue + 4 modules
var Card = __webpack_require__("1499");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Cards/StatsCard.vue?vue&type=script&lang=js&

/* harmony default export */ var StatsCardvue_type_script_lang_js_ = ({
  name: 'stats-card',
  components: {
    Card: Card["a" /* default */]
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    title: String,
    subTitle: String
  }
});
// CONCATENATED MODULE: ./src/components/Cards/StatsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_StatsCardvue_type_script_lang_js_ = (StatsCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Cards/StatsCard.vue?vue&type=style&index=0&lang=css&
var StatsCardvue_type_style_index_0_lang_css_ = __webpack_require__("e681");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Cards/StatsCard.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_StatsCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StatsCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "82ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseButton.vue?vue&type=template&id=01e1f50f&scoped=true&
var render = function () {
var _obj, _obj$1;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"btn",class:[
    { 'btn-round': _vm.round },
    { 'btn-block': _vm.block },
    { 'btn-wd': _vm.wide },
    { 'btn-icon btn-fab': _vm.icon },
    ( _obj = {}, _obj[("btn-" + _vm.type)] = _vm.type, _obj ),
    ( _obj$1 = {}, _obj$1[("btn-" + _vm.size)] = _vm.size, _obj$1 ),
    { 'btn-simple': _vm.simple },
    { 'btn-link': _vm.link },
    { disabled: _vm.disabled && _vm.tag !== 'button' }
  ],attrs:{"type":_vm.tag === 'button' ? _vm.nativeType : '',"disabled":_vm.disabled || _vm.loading},on:{"click":_vm.handleClick}},[_vm._t("loading",[(_vm.loading)?_c('i',{staticClass:"fas fa-spinner fa-spin"}):_vm._e()]),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseButton.vue?vue&type=template&id=01e1f50f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseButton.vue?vue&type=script&lang=js&
/* harmony default export */ var BaseButtonvue_type_script_lang_js_ = ({
  name: 'base-button',
  props: {
    tag: {
      type: String,
      default: 'button',
      description: 'Button html tag'
    },
    round: Boolean,
    icon: Boolean,
    block: Boolean,
    loading: Boolean,
    wide: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default',
      description: 'Button type (primary|secondary|danger etc)'
    },
    nativeType: {
      type: String,
      default: 'button',
      description: 'Button native type (e.g button, input etc)'
    },
    size: {
      type: String,
      default: '',
      description: 'Button size (sm|lg)'
    },
    simple: {
      type: Boolean,
      description: 'Whether button is simple (outlined)'
    },
    link: {
      type: Boolean,
      description: 'Whether button is a link (no borders or background)'
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseButtonvue_type_script_lang_js_ = (BaseButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BaseButton.vue?vue&type=style&index=0&id=01e1f50f&scoped=true&lang=scss&
var BaseButtonvue_type_style_index_0_id_01e1f50f_scoped_true_lang_scss_ = __webpack_require__("1896");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/BaseButton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BaseButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "01e1f50f",
  null
  
)

/* harmony default export */ var BaseButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"smartholdem\",\"version\":\"1.0.31\",\"private\":true,\"description\":\"SmartHoldem Project\",\"author\":\"technolog <technologies.bro@gmail.com>\",\"scripts\":{\"serve\":\"vue-cli-service serve --open\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\",\"dev\":\"npm run serve -- --port 8083 --open\",\"electron:build\":\"vue-cli-service electron:build\",\"electron:serve\":\"vue-cli-service electron:serve\",\"postinstall\":\"electron-builder install-app-deps\",\"postuninstall\":\"electron-builder install-app-deps\"},\"main\":\"background.js\",\"dependencies\":{\"@inotom/vue-go-top\":\"^1.3.0\",\"axios\":\"^0.19.2\",\"bip39\":\"^3.0.2\",\"bootstrap\":\"^4.3.0\",\"chart.js\":\"^2.7.1\",\"core-js\":\"^3.6.5\",\"crypto-js\":\"^4.0.0\",\"crypto-random-string\":\"^3.2.0\",\"d3\":\"^5.15.1\",\"electron-window-state\":\"^5.0.3\",\"element-ui\":\"^2.13.1\",\"emittery\":\"^0.5.1\",\"epic-spinners\":\"^1.1.0\",\"es6-promise\":\"^4.1.1\",\"fuse.js\":\"^3.6.1\",\"jdenticon\":\"^2.2.0\",\"jquery\":\"^1.12.4\",\"localforage\":\"^1.7.3\",\"lodash\":\"^4.17.15\",\"moment\":\"^2.24.0\",\"nouislider\":\"^12.1.0\",\"number-format.js\":\"^2.0.9\",\"parallax-js\":\"^3.1.0\",\"perfect-scrollbar\":\"^1.3.0\",\"popper.js\":\"^1.16.1\",\"qrious\":\"^4.0.2\",\"register-service-worker\":\"^1.7.1\",\"sthjs\":\"git+https://github.com/smartholdem/sth-js.git#wallet\",\"sthjs-wrapper\":\"^0.1.9\",\"sweetalert2\":\"^7.29.0\",\"tween.js\":\"^16.6.0\",\"vee-validate\":\"^2.0.5\",\"vue\":\"^2.6.10\",\"vue-chartjs\":\"^3.4.0\",\"vue-clipboard2\":\"^0.3.1\",\"vue-easeljs\":\"^0.1.13\",\"vue-i18n\":\"^8.17.0\",\"vue-native-websocket\":\"^2.0.14\",\"vue-router\":\"^3.1.6\",\"vue-router-prefetch\":\"^1.4.0\",\"vue2-transitions\":\"^0.2.3\",\"vuex\":\"^3.1.3\",\"vuex-persist\":\"^2.2.0\"},\"devDependencies\":{\"@vue/cli-plugin-babel\":\"^4.3.1\",\"@vue/cli-plugin-eslint\":\"^4.3.1\",\"@vue/cli-plugin-pwa\":\"^4.3.1\",\"@vue/cli-plugin-router\":\"^4.3.1\",\"@vue/cli-plugin-vuex\":\"^4.3.1\",\"@vue/cli-service\":\"^4.3.1\",\"babel-eslint\":\"^10.0.3\",\"babel-plugin-component\":\"^1.1.0\",\"electron\":\"^8.2.1\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^6.1.2\",\"node-sass\":\"^4.13.1\",\"parcel-plugin-wrapper\":\"^0.2.2\",\"sass-loader\":\"^8.0.2\",\"vue-cli-plugin-electron-builder\":\"^1.4.6\",\"vue-cli-plugin-i18n\":\"^0.5.0\",\"vue-loader\":\"^15.9.1\",\"vue-template-compiler\":\"^2.6.11\"},\"postcss\":{\"plugins\":{\"autoprefixer\":{}}},\"browserslist\":[\"> 1%\",\"last 2 versions\",\"not ie <= 10\"]}");

/***/ }),

/***/ "a46f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1da1");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9224");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("9224", 1);




var project = 'smartholdem/smartholdem-wallet';
/* harmony default export */ __webpack_exports__["a"] = ({
  get currentVersion() {
    return _package_json__WEBPACK_IMPORTED_MODULE_3__.version;
  },

  get latestReleaseUrl() {
    return "https://github.com/".concat(project, "/releases/latest");
  },

  get latestReleaseApiUrl() {
    return "https://api.github.com/repos/".concat(project, "/releases/latest");
  },

  fetchLatestRelease: function fetchLatestRelease(url) {
    var _this = this;

    return Object(C_projects_smartholdem2020_smartholdem_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(regeneratorRuntime.mark(function _callee() {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_this.latestReleaseApiUrl);

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "a5a0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sb-icon.d78c99e3.png";

/***/ }),

/***/ "b290":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SidebarPlugin/SideBar.vue?vue&type=template&id=54d6d59b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar",attrs:{"data":_vm.backgroundColor}},[_c('div',{ref:"sidebarScrollArea",staticClass:"sidebar-wrapper"},[_c('div',{staticClass:"logo"},[_c('router-link',{staticClass:"simple-text logo-mini",attrs:{"to":"/dashboard"}},[_c('img',{attrs:{"src":__webpack_require__("a5a0"),"alt":"app-logo"}})]),_c('router-link',{staticClass:"simple-text logo-normal",attrs:{"to":"/dashboard"}},[_vm._v(" "+_vm._s(_vm.title)+" ")])],1),_vm._t("default"),_c('ul',{staticClass:"nav"},[_vm._t("links",_vm._l((_vm.sidebarLinks),function(link,index){return _c('sidebar-item',{key:link.name + index,attrs:{"link":link}},_vm._l((link.children),function(subLink,index){return _c('sidebar-item',{key:subLink.name + index,attrs:{"link":subLink}})}),1)}))],2),_c('div',{staticClass:"text-center position-absolute bottom-1 pl-4"},[_c('span',{staticClass:"text-white font-weight-lighter small"},[_vm._v("v"+_vm._s(_vm.releaseService.currentVersion))])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SidebarPlugin/SideBar.vue?vue&type=template&id=54d6d59b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./src/services/release.js
var release = __webpack_require__("a46f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SidebarPlugin/SideBar.vue?vue&type=script&lang=js&


/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({
  name: 'sidebar',
  data: function data() {
    return {
      releaseService: release["a" /* default */]
    };
  },
  props: {
    title: {
      type: String,
      default: 'SmartHoldem',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'SH',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: '/img/icon-vue.png',
      description: 'SmartHoldem app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: function validator(value) {
        var acceptedValues = ['', 'vue', 'blue', 'green', 'orange', 'red', 'primary'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: function _default() {
        return [];
      },
      description: "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide: function provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    minimizeSidebar: function minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SidebarPlugin/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SidebarPlugin_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SidebarPlugin/SideBar.vue?vue&type=style&index=0&lang=css&
var SideBarvue_type_style_index_0_lang_css_ = __webpack_require__("0efd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/SidebarPlugin/SideBar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SidebarPlugin_SideBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SideBar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SidebarPlugin/SidebarItem.vue?vue&type=template&id=90fe560e&
var SidebarItemvue_type_template_id_90fe560e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.baseComponent,{tag:"component",class:{ active: _vm.isActive },attrs:{"to":_vm.link.path ? _vm.link.path : '/',"tag":"li"}},[(_vm.isMenu)?_c('a',{staticClass:"sidebar-menu-item",attrs:{"aria-expanded":!_vm.collapsed,"data-toggle":"collapse"},on:{"click":function($event){$event.preventDefault();return _vm.collapseMenu($event)}}},[(_vm.addLink)?[_c('span',{staticClass:"sidebar-mini-icon"},[_vm._v(_vm._s(_vm.linkPrefix))]),_c('span',{staticClass:"sidebar-normal"},[_vm._v(" "+_vm._s(_vm.link.name)+" "),_c('b',{staticClass:"caret"})])]:[_c('i',{class:_vm.link.icon}),_c('p',[_vm._v(_vm._s(_vm.link.name)+" "),_c('b',{staticClass:"caret"})])]],2):_vm._e(),_c('collapse-transition',[(_vm.$slots.default || this.isMenu)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.collapsed),expression:"!collapsed"}],staticClass:"collapse show"},[_c('ul',{staticClass:"nav"},[_vm._t("default")],2)]):_vm._e()]),(_vm.children.length === 0 && !_vm.$slots.default && _vm.link.path)?_vm._t("title",[_c(_vm.elementType(_vm.link, false),{tag:"component",class:{ active: _vm.link.active },attrs:{"to":_vm.link.path,"target":_vm.link.target,"href":_vm.link.path},nativeOn:{"click":function($event){return _vm.linkClick($event)}}},[(_vm.addLink)?[_c('span',{staticClass:"sidebar-mini-icon"},[_vm._v(_vm._s(_vm.linkPrefix))]),_c('span',{staticClass:"sidebar-normal"},[_vm._v(_vm._s(_vm.link.name))])]:[_c('i',{class:_vm.link.icon}),_c('p',[_vm._v(_vm._s(_vm.link.name))])]],2)]):_vm._e()],2)}
var SidebarItemvue_type_template_id_90fe560e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SidebarPlugin/SidebarItem.vue?vue&type=template&id=90fe560e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: ./node_modules/vue2-transitions/dist/vue2-transitions.m.js
var vue2_transitions_m = __webpack_require__("7c76");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SidebarPlugin/SidebarItem.vue?vue&type=script&lang=js&












/* harmony default export */ var SidebarItemvue_type_script_lang_js_ = ({
  name: 'sidebar-item',
  components: {
    CollapseTransition: vue2_transitions_m["a" /* CollapseTransition */]
  },
  props: {
    menu: {
      type: Boolean,
      default: false,
      description: "Whether the item is a menu. Most of the item it's not used and should be used only if you want to override the default behavior."
    },
    link: {
      type: Object,
      default: function _default() {
        return {
          name: '',
          path: '',
          children: []
        };
      },
      description: 'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
    }
  },
  provide: function provide() {
    return {
      addLink: this.addChild,
      removeLink: this.removeChild
    };
  },
  inject: {
    addLink: {
      default: null
    },
    removeLink: {
      default: null
    },
    autoClose: {
      default: true
    }
  },
  data: function data() {
    return {
      children: [],
      collapsed: true
    };
  },
  computed: {
    baseComponent: function baseComponent() {
      return this.isMenu || this.link.isRoute ? 'li' : 'router-link';
    },
    linkPrefix: function linkPrefix() {
      if (this.link.name) {
        var words = this.link.name.split(' ');
        return words.map(function (word) {
          return word.substring(0, 1);
        }).join('');
      }
    },
    isMenu: function isMenu() {
      return this.children.length > 0 || this.menu === true;
    },
    isActive: function isActive() {
      var _this = this;

      if (this.$route && this.$route.path) {
        var matchingRoute = this.children.find(function (c) {
          return _this.$route.path.startsWith(c.link.path);
        });

        if (matchingRoute !== undefined) {
          return true;
        }
      }

      return false;
    }
  },
  methods: {
    addChild: function addChild(item) {
      var index = this.$slots.default.indexOf(item.$vnode);
      this.children.splice(index, 0, item);
    },
    removeChild: function removeChild(item) {
      var tabs = this.children;
      var index = tabs.indexOf(item);
      tabs.splice(index, 1);
    },
    elementType: function elementType(link) {
      var isParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (link.isRoute === false) {
        return isParent ? 'li' : 'a';
      } else {
        return 'router-link';
      }
    },
    linkAbbreviation: function linkAbbreviation(name) {
      var matches = name.match(/\b(\w)/g);
      return matches.join('');
    },
    linkClick: function linkClick() {
      if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
        this.$sidebar.displaySidebar(false);
      }
    },
    collapseMenu: function collapseMenu() {
      this.collapsed = !this.collapsed;
    },
    collapseSubMenu: function collapseSubMenu(link) {
      link.collapsed = !link.collapsed;
    }
  },
  mounted: function mounted() {
    if (this.addLink) {
      this.addLink(this);
    }

    if (this.link.collapsed !== undefined) {
      this.collapsed = this.link.collapsed;
    }

    if (this.isActive && this.isMenu) {
      this.collapsed = false;
    }
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    if (this.removeLink) {
      this.removeLink(this);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SidebarPlugin/SidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SidebarPlugin_SidebarItemvue_type_script_lang_js_ = (SidebarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SidebarPlugin/SidebarItem.vue?vue&type=style&index=0&lang=css&
var SidebarItemvue_type_style_index_0_lang_css_ = __webpack_require__("251d");

// CONCATENATED MODULE: ./src/components/SidebarPlugin/SidebarItem.vue






/* normalize component */

var SidebarItem_component = Object(componentNormalizer["a" /* default */])(
  SidebarPlugin_SidebarItemvue_type_script_lang_js_,
  SidebarItemvue_type_template_id_90fe560e_render,
  SidebarItemvue_type_template_id_90fe560e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarItem = (SidebarItem_component.exports);
// CONCATENATED MODULE: ./src/components/SidebarPlugin/index.js


var SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  displaySidebar: function displaySidebar(value) {
    this.showSidebar = value;
  },
  toggleMinimize: function toggleMinimize() {
    document.body.classList.toggle('sidebar-mini');
    var simulateWindowResize = setInterval(function () {
      window.dispatchEvent(new Event('resize'));
    }, 180);
    setTimeout(function () {
      clearInterval(simulateWindowResize);
    }, 1000);
    this.isMinimized = !this.isMinimized;
  }
};
var SidebarPlugin = {
  install: function install(Vue, options) {
    if (options && options.sidebarLinks) {
      SidebarStore.sidebarLinks = options.sidebarLinks;
    }

    var app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    });
    Vue.prototype.$sidebar = app.sidebarStore;
    Vue.component('side-bar', SideBar);
    Vue.component('sidebar-item', SidebarItem);
  }
};
/* harmony default export */ var components_SidebarPlugin = __webpack_exports__["a"] = (SidebarPlugin);

/***/ }),

/***/ "b5b2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "be87":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c5ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c6e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c880":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f7b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ca64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseCheckbox.vue?vue&type=template&id=a5bef61e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-check",class:[{ disabled: _vm.disabled }, _vm.inlineClass]},[_c('label',{staticClass:"form-check-label",attrs:{"for":_vm.cbId}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"form-check-input",attrs:{"id":_vm.cbId,"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:(_vm.model)},on:{"change":function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}}}}),_c('span',{staticClass:"form-check-sign"}),_vm._t("default",[(_vm.inline)?_c('span'):_vm._e()])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Inputs/BaseCheckbox.vue?vue&type=template&id=a5bef61e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseCheckbox.vue?vue&type=script&lang=js&



/* harmony default export */ var BaseCheckboxvue_type_script_lang_js_ = ({
  name: 'base-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: [Array, Boolean],
    disabled: Boolean,
    inline: Boolean,
    hasError: Boolean
  },
  data: function data() {
    return {
      cbId: '',
      touched: false
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.checked;
      },
      set: function set(check) {
        if (!this.touched) {
          this.touched = true;
        }

        this.$emit('input', check);
      }
    },
    inlineClass: function inlineClass() {
      if (this.inline) {
        return "form-check-inline";
      }
    }
  },
  created: function created() {
    this.cbId = Math.random().toString(16).slice(2);
  }
});
// CONCATENATED MODULE: ./src/components/Inputs/BaseCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseCheckboxvue_type_script_lang_js_ = (BaseCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Inputs/BaseCheckbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseCheckbox = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "cb9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/Unlock.vue?vue&type=template&id=4e917a02&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.modalPin,"show-close":false,"headerClasses":"justify-content-center","type":"mini"},on:{"update:show":function($event){_vm.modalPin=$event}}},[_c('div',{staticClass:"modal-profile ",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-lock-circle"})]),_c('p',[_vm._v(_vm._s(_vm.$t("WALLET.UNLOCK")))]),_c('base-input',{attrs:{"type":"text","name":"pin","placeholder":"Enter Pin Code","addon-left-icon":"tim-icons icon-key-25"},on:{"input":_vm.validatePin},model:{value:(_vm.pin),callback:function ($$v) {_vm.pin=$$v},expression:"pin"}}),_c('template',{slot:"footer"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/Unlock.vue?vue&type=template&id=4e917a02&scoped=true&

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

// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__("3452");
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/Unlock.vue?vue&type=script&lang=js&






/* harmony default export */ var Unlockvue_type_script_lang_js_ = ({
  name: "Unlock",
  components: {
    Modal: components["g" /* Modal */]
  },
  data: function data() {
    return {
      pin: ''
    };
  },
  props: {
    modalPin: false,
    enterPin: null
  },
  methods: {
    validatePin: function validatePin() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])(regeneratorRuntime.mark(function _callee() {
        var currentHashPin, decryptCompare;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.pin.length > 3 && _this.$store.getters['app/pinEncrypted']) {
                  currentHashPin = crypto_js_default.a.SHA384(_this.pin.toString()).toString();
                  decryptCompare = crypto_js_default.a.AES.decrypt(_this.$store.getters['app/pinEncrypted'], currentHashPin).toString(crypto_js_default.a.enc.Utf8);

                  if (decryptCompare && decryptCompare === currentHashPin) {
                    _this.$root.pin = currentHashPin;
                    setTimeout(function () {
                      _this.$emit('onUnlockClose');
                    }, 500);
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/Unlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_Unlockvue_type_script_lang_js_ = (Unlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Wallet/Unlock.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Wallet_Unlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4e917a02",
  null
  
)

/* harmony default export */ var Unlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "cd0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_style_index_0_id_d8569a12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d603");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_style_index_0_id_d8569a12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_style_index_0_id_d8569a12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_style_index_0_id_d8569a12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d0cf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d185":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ResetAll.vue?vue&type=template&id=69e6b2c9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('modal',{class:_vm.$root.modalColor,attrs:{"show":_vm.modalReset,"show-close":true,"headerClasses":"justify-content-center"},on:{"update:show":function($event){_vm.modalReset=$event}}},[_c('div',{staticClass:"modal-profile",attrs:{"slot":"header"},slot:"header"},[_c('i',{staticClass:"tim-icons icon-alert-circle-exc"})]),_c('h4',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('APP.SURE')))]),_c('p',[_vm._v(_vm._s(_vm.$t('APP.ALL_DATA_RESET')))]),_c('template',{slot:"footer"},[_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":_vm.onResetData}},[_vm._v(_vm._s(_vm.$t('APP.CONFIRM')))]),_c('base-button',{attrs:{"type":"neutral","link":""},on:{"click":_vm.onResetCancel}},[_vm._v(_vm._s(_vm.$t('APP.CANCEL'))+" ")])],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet/ResetAll.vue?vue&type=template&id=69e6b2c9&scoped=true&

// EXTERNAL MODULE: ./src/components/index.js + 136 modules
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet/ResetAll.vue?vue&type=script&lang=js&

/* harmony default export */ var ResetAllvue_type_script_lang_js_ = ({
  components: {
    Modal: components["g" /* Modal */]
  },
  name: "ResetAll",
  props: {
    modalReset: {
      type: Boolean
    }
  },
  methods: {
    onResetCancel: function onResetCancel(value) {
      this.$emit('onResetCancel', value);
    },
    onResetData: function onResetData() {
      this.$store.dispatch('wallet/walletReset');
      this.$store.dispatch('app/appReset');
      this.$store.dispatch('session/setAuth', false);
      this.$store.dispatch('resetData');
      this.$router.push('/register');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Wallet/ResetAll.vue?vue&type=script&lang=js&
 /* harmony default export */ var Wallet_ResetAllvue_type_script_lang_js_ = (ResetAllvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Wallet/ResetAll.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Wallet_ResetAllvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "69e6b2c9",
  null
  
)

/* harmony default export */ var ResetAll = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "d603":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db49":
/***/ (function(module, exports) {

exports.errs = {
  "100": "The order is in the list of active tasks, please wait until the completion of the placed task.",
  "101": "Tweet is not valid, please enter valid data"
};
exports.I18N = {
  defaultLocale: 'en',
  enabledLocales: ['en', 'ru']
};
exports.colors = {
  default: '#000000',
  primary: '#42b883',
  info: '#1d8cf8',
  danger: '#fd5d93',
  orange: '#ff8a76',
  teal: '#00d6b4',
  primaryGradient: ['rgba(76, 211, 150, 0.1)', 'rgba(53, 183, 125, 0)', 'rgba(119,52,169,0)'],
  purpleGradient: ['rgba(253,93,147,0.8)', 'rgba(253,93,147,0)']
};
exports.network = {
  ABOUNTY: 'https://abapi.smartholdem.io',
  WS: 'wss://abapi.smartholdem.io/ws',
  EXPLORER: 'https://blockexplorer.smartholdem.io/#/',
  AGENT: 'sth-wallet',
  XBTS_VOTE: 'https://vote.xbts.io/api/',
  SMARTHOLDER: 'https://smartholder.xbts.io',
  NODE: 'node0.smartholdem.io',
  PEERS: ['80.211.31.231', '212.237.17.171', '213.239.207.170', '94.177.213.55', '80.211.32.86', '188.213.168.227', '194.182.68.74', '194.182.74.218', '194.182.74.212', '194.182.74.130', '194.182.74.228', '194.182.66.20', '80.211.208.154', '80.211.220.200'],
  SEEDS: ['node0.smartholdem.io', 'node1.smartholdem.io', 'node2.smartholdem.io', 'node3.smartholdem.io', 'node4.smartholdem.io'],
  isOnion: false,
  ONION: ['sthxxcpnpncphhmz.onion']
};
exports.exchange = {
  API: 'https://ex.smartholdem.io'
};
exports.I18N = {
  defaultLocale: 'en',
  enabledLocales: ['en', 'ru']
};
exports.chains = [{
  title: "SmartHoldem",
  ticker: "STH"
}, {
  title: "Bitshares",
  ticker: "BTS"
}];
exports.abounty = {
  bank: "SiRB1We8M6G81iRioitDWB8bqJeW5vQJqh",
  requirements: {
    failBan: 250,
    followers: 24,
    days: 0
  }
};

/***/ }),

/***/ "dec1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e00b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7bdd");
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emittery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (new emittery__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "e681":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fd84");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "edd4":
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar\":{\"title\":\"SmartHoldem\",\"shortTitle\":\"STH\",\"dashboard\":\"Dashboard\",\"register\":\"Register\",\"lock\":\"Lock Screen\",\"userProfile\":\"User Profile\"},\"APP\":{\"SETTINGS\":\"Settings\",\"SOUND\":\"Sound\",\"SW_OFF\":\"OFF\",\"SW_ON\":\"ON\",\"UNLOCK\":\"Unlock\",\"NO_BIP39\":\"The secret phrase is not a BIP39 standard\",\"OR\":\"OR\",\"RESET\":\"Reset All Data\",\"CLOSE\":\"Close\",\"CANCEL\":\"Cancel\",\"SURE\":\"Are you sure?\",\"CONFIRM\":\"Confirm\",\"ALL_DATA_RESET\":\"All your data, including created accounts, networks and stats will be removed from the app and reset to default.\",\"HELP\":\"Help\",\"TITLE\":\"SmartHoldem Wallet\",\"GET_UADDR\":\"Get or import your unique address\",\"BASED_STH\":\"Based on decentralized blockchain\",\"PROTECT\":\"Protect your data\",\"PROTECT_DATA\":\"Enter the pin code to encrypt your local data\",\"IMPORT_ACCOUNT\":\"Import Existing Account\",\"CONTINUE\":\"Continue\",\"GET_STARTED\":\"Get Started\",\"YOUR_PUB_ADDR\":\"Your Public Address\",\"YOUR_SECRET\":\"Secret Pass Phrase. Please keep safe!\",\"I_SAVED\":\"I saved the secret phrase to a safe place\",\"IF_LOSE\":\"If I lose my secret phrase, I can’t regain access to my account\",\"YOUR_PUB\":\"Your Public Address for receiving and sending\",\"ENTER_SECRET\":\"Enter Secret Pass Phrase\",\"GET_NEW_ACC\":\"Get new account\",\"AGREE1\":\"I agree to the\",\"AGREE2\":\"terms and conditions\",\"REPEAT\":\"Repeat\",\"LOCK\":\"Lock Screen\",\"QUIT\":\"Quit\",\"ON\":\"on\",\"OP\":\"operation\",\"DELEGATES_DESCRIPTION\":\"Voting is an optional, but important mechanism that keeps the SmartHoldem network secure. The 64 delegates with the most votes from the network are responsible for verifying and forging transactions into new blocks. Now registered {delegates} delegates.\"},\"WALLET\":{\"SIGN_MSG\":\"Sign a message to verify you own the wallet\",\"QR_PRIV_SCAN\":\"Import addresses into SmartHoldem mobile app with private QR\",\"QR_PRIV\":\"QR Private & Public Key\",\"YOUR_SECRET\":\"YOUR SECRET PASSPHRASE\",\"NEVER_SHARE_PRIV\":\"!Never share your secret key with third parties. Store your passphrase in a secure place\",\"SCAN_INVOICE_MOB\":\"You can scan a QR account using the SmartHoldem mobile application\",\"QR_INVOICE\":\"QR-Invoice for receive payments\",\"CLICK_ADDRESS\":\"Click on the address to copy to the clipboard\",\"RECEIVE_ADDRESS\":\"Receive STH Coins/QR-Invoice\",\"SET_WALLET_NAME\":\"Set Wallet Name\",\"SHOW_PRIVATE\":\"Show Private Key\",\"REGISTER_DELEGATE\":\"Register Delegate\",\"SIGN\":\"Sign\",\"DELEGATES\":\"Delegates\",\"UNLOCK\":\"Unlock Wallet\",\"NAME\":\"Name\",\"MEMO\":\"Memo\",\"SCAN_QR_ERR\":\"To scan the QR-code, you must enable the permission to use the camera in the application settings\",\"SCAN_QR_SEND\":\"Scan QR for Send\",\"REMAINING\":\"Remaining\",\"SEND\":\"Send\",\"VOTED_FOR\":\"Voted For\",\"CREATE_WALLET\":\"Create Wallet\",\"IMPORT_WALLET\":\"Import Wallet\",\"TOTAL\":\"Total\",\"AMOUNT\":\"Amount\",\"CONF\":\"Confirmations\",\"WALLET\":\"Wallet\",\"AVAILABLE\":\"Available\",\"ADDRESSES\":\"Addresses\",\"BALANCE\":\"Balance\",\"TRANSACTIONS\":\"Transactions\",\"BUY\":\"Purchase\",\"ADDRESS\":\"Address\",\"MY\":\"My\",\"EXCHANGE\":\"Exchange now\",\"YOU_SEND\":\"YOU SEND\",\"YOU_GET\":\"YOU GET\",\"GET_DEPOSIT_ADDRESS\":\"Get deposit address\",\"TIME\":\"Time\",\"SENDER\":\"Sender\",\"RECIPIENT\":\"Recipient\",\"REQ-MEMO\":\"Required field notes (memo)\",\"MIN_SEND\":\"Min to send\",\"MAX_RECEIVE\":\"Max to receive\",\"HISTORY\":\"History\",\"SENT\":\"Sent\",\"FROM\":\"from\",\"PRICE\":\"Price\",\"RECEIVED\":\"Received\",\"DEPOSIT_ADDRESS\":\"Deposit Address\",\"RECEIVE\":\"Receive\",\"PER\":\"per\",\"PROVIDED\":\"Exchange provided by \",\"SEND_YOUR\":\"Send your\",\"BY_DETAILS\":\"on the provided details\",\"I_SEND\":\"Im Send\",\"RECEIVING\":\"Receiving\",\"CHECK_DEP\":\"To check deposits, see the section\",\"AFTER_CONF\":\"After confirming the transaction, your STH balance will be recharged\",\"GET_ADDR_DEP\":\"Get a deposit address\"},\"TERMS\":{\"C_TITLE\":\"Please arrange your time reasonably\",\"C1\":\"\",\"C2\":\"\"},\"SET\":{\"LANG\":\"Language\",\"LANG_NAME\":\"English\",\"CURRENCY\":\"Currency\",\"MODE\":\"Dark Mode\",\"NOTIF\":\"Notifications\",\"CLEAR\":\"Clear All Data\",\"VER\":\"Version\"},\"PG\":{\"WALLETS\":\"Wallets\",\"CONTACTS\":\"Contacts\",\"DELEGATES\":\"Delegates\",\"QUIT\":\"Quit\",\"SET\":\"Settings\"},\"XBTS\":{\"REQ_MEMO\":\"Be sure to add the following text to the memo: {address}\",\"MAX\":\"Max to receive\",\"INSTRUCTION\":\"<p><ul><li>Select asset for exchange (ex. BTC, LTC etc.)</li><li>Enter asset amount for send & get STH for receive</li><li>Press button Exchange</li><li>Get Deposit Address for selected asset</li><li>Send your asset (ex. BTC, LTC etc.) on deposit address</li><li>Click History Deps for check your deposit</li><li>After confirming the transaction, your STH balance will be update!</li></ul></p>\"},\"WEB\":{\"WELCOME\":\"Welcome to SmartHoldem\",\"OPEN_WALLET\":\"Open Online Wallet\",\"INVITED\":\"You are invited\",\"USE_DEX\":\"Log in to your wallet or create a new one to use the decentralized services of SmartHoldem Platform\",\"INCUSTOMER\":\"Each invited member of the platform receives an additional reward for completing tasks\"},\"ABOUNTY\":{\"REAL_PEOPLES\":\"Only Real Peoples!\",\"TRY\":\"Try our Crypto Twitter Tools for Free\",\"GROW_BRAND\":\"Grow Your Twitter Brand with the Power of Crypto Community!\",\"EXPLORE\":\"Explore\",\"P4\":\"Instant payment for Retweet, Like, Follower on Twitter!\",\"P3\":\"3. Earn Cryptocurrency and Enjoy ANTIBOUNTY!\",\"P2\":\"2. Register a wallet! Only YOU have access to your account!\",\"P1\":\"Open the Online STH wallet on the platform website https://smartholdem.io\",\"PART\":\"You can take part in the ANTIBOUNTY Now!\",\"PROTECT_WORK\":\"Protection against dishonest workers\",\"W_ADDR\":\"Wallet address is your bounty account\",\"DEPOSIT_IN\":\"Deposit in a popular cryptocurrencies\",\"INSTANT_PAY\":\"Instant Payments\",\"EASY\":\"Easy of use\",\"REAL_ACC\":\"Real Accounts\",\"GUARANT\":\"Guarantees\",\"SOCIAL_SERVICES\":\"Social Services\",\"SIGN_UP\":\"SIGN UP\",\"AF_D4\":\"The Antibounty is a Win-Win for everyone!\",\"AF_D3\":\"Get more STH for each completed task your affiliate makes on Twitter!\",\"AF_D2\":\"Crypto user receives more STH rewards after activating your referral link\",\"AF_D1\":\"Share your personal referral link across the web\",\"AFF4\":\"4. Lifetime Affiliate Program\",\"AFF3\":\"3. Be rewarded\",\"AFF2\":\"2. Invite users\",\"AFF1\":\"1. Get a link\",\"AFF_T1\":\"Invite users to Antibounty and earn more STH! Antibounty pay out for every completed tasks your affiliate makes in their lifetime.\",\"AFF_T2\":\"Antibounty is paid out every Sunday, starting from 1 Sunday from the date that your referral add to your account. Antibounty pay you in STH straight to the wallet address.\",\"AFF_ERR\":\"You cannot invite yourself\",\"MY_PLINKS\":\"My affiliate links\",\"MY_PLINK_INFO\":\"Share the link with your friends and get rewards for each completed task\",\"MY_PSTAT_INFO\":\"Accrued payments are made every week\",\"MY_PSTAT\":\"My affiliate statistics\",\"PENDING\":\"Pending\",\"PAID_OUT\":\"Paid out\",\"INVITED\":\"Invited\",\"MEMBER\":\"Affiliate\",\"MORE\":\"More\",\"MY_ACCOUNT\":\"My Account\",\"NO_TASKS\":\"No available tasks\",\"NEGATIVE\":\"Negative rating\",\"RECEIVE_REWARDS\":\"Receive instant rewards in STH coins to this address\",\"AUTH_TEXT\":\"Your wallet address is your AntiBounty account.\\n              <br>At this address will be sent crypto-rewards for completing tasks.\\n              <br>Payments occur instantly.\\n              <br>For each successful completion of the task, your AntiBounty rating grows.\",\"FEE\":\"Blockchain Fee\",\"RECIPIENT\":\"Recipient\",\"SELECT_ADDR\":\"Select Address\",\"COUNT\":\"Count\",\"AMOUNT\":\"Amount\",\"PAYMENT\":\"PAYMENT\",\"EXPLORER\":\"View Tx in BlockExplorer\",\"CLOSE\":\"Close\",\"CONFIRM\":\"Confirm\",\"OR\":\"or\",\"NAME_LINK\":\"Twitter account name or link\",\"COUNT_FOLLOW\":\"Count followers\",\"COMPLETED\":\"Completed\",\"MY_ORDERS\":\"My Orders\",\"RETWEETS\":\"RETWEETS\",\"ADD\":\"Add\",\"PAY_ORDER\":\"PAY ORDER\",\"ORDER_AUTO\":\"An order will be placed automatically after transaction confirmation. On your balance should be enough STH coins to pay.\",\"VALIDATE\":\"VALIDATE\",\"AMOUNT_PAY\":\"Amount to be paid\",\"COUNT_TWEETS\":\"Count Retweets\",\"LINK_TWEET\":\"Link on tweet\",\"ORDER\":\"Order\",\"STATS\":\"Stats\",\"TASKS\":\"Tasks\",\"AV_TASKS\":\"Available Tasks\",\"DAYS\":\"days\",\"ACCOUNT\":\"Account\",\"FOLLOWERS\":\"Followers\",\"FRIENDS\":\"Friends\",\"WORK_INFO\":\"Receive instant rewards in STH coins for honestly completing tasks\",\"MIN_REQ\":\"Minimum requirements\",\"JOINED\":\"Joined the AntiBounty\",\"PAYMENT_TASKS\":\"PAYMENT TASKS\",\"ADD_TASK\":\"Add Task\",\"EARN\":\"Earn Crypto\",\"GROW\":\"Grow your Twitter account by new Crypto Followers, Retweets & Likes every day!\",\"CUSTOMER\":\"CUSTOMER\",\"WORKER\":\"WORKER\",\"GET_STARTED\":\"Get Started\",\"D1\":\"Antibounty is a simple to use, yet very powerful Twitter tool on blockchain that will help you get Twitter followers fast.\",\"D2\":\"Instead of spending many hours of your time trying to find and engage with Crypto users on Twitter, Antibounty's ​Twitter tools will help you spend only a few minutes of your time on actions that will help you earn cryptocurrency and add more Twitter followers, so you can concentrate on doing the things you like most, while your followers continue to grow.\",\"WORK_TEXT\":\"<p>\\n            Your wallet address is your AntiBounty account.\\n            <br>At this address will be sent crypto-rewards for completing tasks.\\n            <br>Payments occur instantly.\\n            <br>For each successful completion of the task, your AntiBounty rating grows.\\n            <br>!!!AntiBounty has built-in protection against dishonest workers.\\n            <br>For each dishonest worked of the task your rating is lowered.\\n          </p>\\n          <p>\\n            In what cases the rating is lowered:\\n          </p>\\n          <ul>\\n            <li>if you have followed, received payment, and then unfollowed;</li>\\n            <li>If you retweeted and then canceled it;</li>\\n            <li>if you like and then remove it.</li>\\n          </ul>\\n          <p>If the rating is -1, you will not be able to earn cryptocurrency until you raise the rating to 0 or +1.</p>\\n          <p>\\n            To raise the rating you need to complete tasks.\\n            <br>Such a system protects all AntiBounty participants\\n            <br>from unscrupulous workers.\\n            <br>Work honestly and get instant payouts for tasks.\\n            <br>The time of receipt of payment to your SmartHoldem wallet is 3-8 seconds.\\n          </p>\"}}");

/***/ }),

/***/ "f0fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("18f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74efb784-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseInput.vue?vue&type=template&id=772dea4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:{
    'input-group-focus': _vm.focused,
    'has-danger': _vm.error,
    'has-success': !_vm.error && _vm.touched,
    'has-label': _vm.label,
    'has-icon': _vm.hasIcon,
  }},[_vm._t("label",[(_vm.label)?_c('label',[_vm._v(" "+_vm._s(_vm.label)+" "+_vm._s(_vm.required ? '*' : '')+" ")]):_vm._e()]),_c('div',{staticClass:"mb-0",class:{'input-group': _vm.hasIcon}},[_vm._t("addonLeft",[(_vm.addonLeftIcon)?_c('span',{staticClass:"input-group-prepend"},[_c('div',{staticClass:"input-group-text"},[_c('i',{class:_vm.addonLeftIcon})])]):_vm._e()]),_vm._t("default",[_c('input',_vm._g(_vm._b({staticClass:"form-control",attrs:{"aria-describedby":"addon-right addon-left"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners))]),_vm._t("addonRight",[(_vm.addonRightIcon)?_c('span',{staticClass:"input-group-append"},[_c('div',{staticClass:"input-group-text"},[_c('i',{class:_vm.addonRightIcon})])]):_vm._e()])],2),(_vm.error || _vm.$slots.error)?_vm._t("error",[_c('label',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])]):_vm._e(),_vm._t("helperText")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Inputs/BaseInput.vue?vue&type=template&id=772dea4e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inputs/BaseInput.vue?vue&type=script&lang=js&


/* harmony default export */ var BaseInputvue_type_script_lang_js_ = ({
  inheritAttrs: false,
  name: 'base-input',
  props: {
    required: Boolean,
    label: {
      type: String,
      description: 'Input label'
    },
    error: {
      type: String,
      description: 'Input error',
      default: ''
    },
    value: {
      type: [String, Number],
      description: 'Input value'
    },
    addonRightIcon: {
      type: String,
      description: 'Input icon on the right'
    },
    addonLeftIcon: {
      type: String,
      description: 'Input icon on the left'
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data: function data() {
    return {
      focused: false,
      touched: false
    };
  },
  computed: {
    hasIcon: function hasIcon() {
      return this.hasLeftAddon || this.hasRightAddon;
    },
    hasLeftAddon: function hasLeftAddon() {
      var addonLeft = this.$slots.addonLeft;
      return addonLeft !== undefined || this.addonLeftIcon !== undefined;
    },
    hasRightAddon: function hasRightAddon() {
      var addonRight = this.$slots.addonRight;
      return addonRight !== undefined || this.addonRightIcon !== undefined;
    },
    listeners: function listeners() {
      return Object(objectSpread2["a" /* default */])({}, this.$listeners, {
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus
      });
    }
  },
  methods: {
    onInput: function onInput(evt) {
      if (!this.touched) {
        this.touched = true;
      }

      this.$emit('input', evt.target.value);
    },
    onFocus: function onFocus(evt) {
      this.focused = true;
      this.$emit('focus', evt);
    },
    onBlur: function onBlur(evt) {
      this.focused = false;
      this.$emit('blur', evt);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Inputs/BaseInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseInputvue_type_script_lang_js_ = (BaseInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Inputs/BaseInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseInput = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "f7b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fd84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });