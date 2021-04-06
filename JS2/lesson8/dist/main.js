/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('cart', {\r\n\t// создание компонента корзины\r\n\ttemplate: `<div>\r\n\t\t\t\t<button class=\"btn btn-primary cart-button\" @click=\"openCartHandler\" type=\"button\">Корзина</button>\r\n\t\t\t\t<div v-if=\"isVisibleCart\" v-on:click=\"removeHandler\">\r\n\t\t\t\t<slot></slot>\r\n\t\t\t\t</div>\r\n\t\t\t</div>`,\r\n\tdata() {\r\n\t\t// данные компонента (Обязательно в виде метода!)\r\n\t\treturn {\r\n\t\t\tisVisibleCart: false,\r\n\t\t};\r\n\t},\r\n\tmethods: {\r\n\t\topenCartHandler() {\r\n\t\t\tthis.isVisibleCart = !this.isVisibleCart;\r\n\t\t},\r\n\r\n\t\tremoveHandler(e) {\r\n\t\t\tthis.$emit('remove', e); // Генерируем пользовательское событие\r\n\t\t},\r\n\t},\r\n}));\n\n//# sourceURL=webpack:///./components/cart.js?");

/***/ }),

/***/ "./components/cartItem.js":
/*!********************************!*\
  !*** ./components/cartItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('cartItem', {\r\n\t// Создание нового компонента\r\n\ttemplate: `<div class=\"card cart-item\" :data-id=\"id\">\r\n\t\t\t\t<h5 class=\"card-title\">{{ title }}</h5>\r\n\t\t\t\t<p class=\"card-price\">{{ price }}</p>\r\n\t\t\t\t<slot></slot>\r\n\t\t\t</div>`,\r\n\tprops: ['title', 'price', 'id'], // задаем параметры компонента\r\n}));\n\n//# sourceURL=webpack:///./components/cartItem.js?");

/***/ }),

/***/ "./components/goodsItem.js":
/*!*********************************!*\
  !*** ./components/goodsItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('goods-item', {\r\n\t// Создание нового компонента\r\n\ttemplate: `<div :data-id=\"id\" class=\"card\" style=\"width: 18rem\">\r\n\t\t\t<img src=\"https://via.placeholder.com/100x80\" class=\"card-img-top\" alt=\"card-photo\"/>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h5 class=\"card-title\">{{ title }}</h5>\r\n\t\t\t\t\t<div class=\"card-bottom\">\r\n\t\t\t\t\t\t<p class=\"card-price\">{{ price }}</p>\r\n\t\t\t\t\t\t<slot></slot>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>`,\r\n\tprops: ['title', 'price', 'id'], // задаем параметры компонента\r\n}));\n\n//# sourceURL=webpack:///./components/goodsItem.js?");

/***/ }),

/***/ "./components/noCart.js":
/*!******************************!*\
  !*** ./components/noCart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('noCart', {\r\n\ttemplate: `<div class=\"no-cart\">Нет товаров</div>`,\r\n}));\n\n//# sourceURL=webpack:///./components/noCart.js?");

/***/ }),

/***/ "./components/noData.js":
/*!******************************!*\
  !*** ./components/noData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('noData', {\r\n\ttemplate: `<div class=\"fs-5 no-data\">Нет данных</div>`,\r\n}));\n\n//# sourceURL=webpack:///./components/noData.js?");

/***/ }),

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('search', {\r\n\ttemplate: `<input id=\"search\" @input=\"searchHandler\" placeholder=\"Поиск...\" />`,\r\n\r\n\tmethods: {\r\n\t\tsearchHandler(e) {\r\n\t\t\tthis.$emit('valueСhange', e);\r\n\t\t},\r\n\t},\r\n}));\n\n//# sourceURL=webpack:///./components/search.js?");

/***/ }),

/***/ "./components/searchform.js":
/*!**********************************!*\
  !*** ./components/searchform.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('searchForm', {\r\n\ttemplate: `<input id=\"search\" v-model=\"search\" v-on:input=\"searchHandler\" />`,\r\n}));\n\n//# sourceURL=webpack:///./components/searchform.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_noData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/noData */ \"./components/noData.js\");\n/* harmony import */ var _components_noCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/noCart */ \"./components/noCart.js\");\n/* harmony import */ var _components_goodsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/goodsItem */ \"./components/goodsItem.js\");\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart */ \"./components/cart.js\");\n/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search */ \"./components/search.js\");\n/* harmony import */ var _components_cartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cartItem */ \"./components/cartItem.js\");\n/* harmony import */ var _components_searchform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/searchform */ \"./components/searchform.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst vue = new Vue({\r\n\tel: '#app',\r\n\tdata: {\r\n\t\tcart: [],\r\n\t\tgoods: [],\r\n\t\tfiltredGoods: [],\r\n\t\tsearch: '',\r\n\t},\r\n\tmethods: {\r\n\r\n\t\tupdateCart() {\r\n\t\t\t// каждое изменение корзины закидываем на сервер и забираем копию с сервера.\r\n\t\t\t// Таким образом точкой истины является файл на сервере\r\n\t\t\tfetch('http://localhost:3003/cart', {\r\n\t\t\t  method: 'POST',\r\n\t\t\t  headers: {\r\n\t\t\t\t'Content-Type': 'application/json',\r\n\t\t\t  },\r\n\t\t\t  body: JSON.stringify(this.cart),\r\n\t\t\t})\r\n\t\t\t  .then((response) => {\r\n\t\t\t\treturn response.json();\r\n\t\t\t  })\r\n\t\t\t  .then((data) => {\r\n\t\t\t\tthis.cart = data;\r\n\t\t\t  });\r\n\t\t  },\r\n\r\n\t\taddToCartHandler(e) {\r\n\t\t\tconst id = e.target.closest('.card').dataset.id;\r\n\t\t\tconst good = this.goods.find(item => item.id == id);\r\n\r\n\t\t\tthis.cart.push(good);\r\n\r\n\t\t\tthis.updateCart();\r\n\t\t},\r\n\r\n\t\tremoveFromCartHandler(e) {\r\n\t\t\tconst id = e.target.closest('.cart-item').dataset.id;\r\n\t\t\tconst goodIndex = this.cart.findIndex(item => item.id == id);\r\n\r\n\t\t\tthis.cart.splice(goodIndex - 1, 1);\r\n\r\n\t\t\tthis.updateCart();\r\n\t\t},\r\n\r\n\t\tsearchHandler(e) {\r\n\t\t\tconst {\r\n\t\t\t\ttarget: { value },\r\n\t\t\t} = e;\r\n\t\t\tif (value === '') {\r\n\t\t\t\tthis.filtredGoods = this.goods;\r\n\t\t\t}\r\n\t\t\tconst regexp = new RegExp(value, 'gi');\r\n\t\t\tthis.filtredGoods = this.goods.filter(good => regexp.test(good.title));\r\n\t\t},\r\n\r\n\t\tmakeGETRequest() {\r\n\t\t\treturn new Promise((resolve, reject) => {\r\n\t\t\t\tfetch('http://localhost:3003/data')\r\n\t\t\t\t\t.then(response => response.json())\r\n\t\t\t\t\t.then(post => resolve(post))\r\n\t\t\t\t\t.catch(err => console.log(err));\r\n\t\t\t});\r\n\t\t},\r\n\t},\r\n\tmounted() {\r\n\t\tthis.makeGETRequest().then(posts => {\r\n\t\t\tthis.goods = posts;\r\n\t\t\tthis.filtredGoods = posts;\r\n\t\t});\r\n\t\tthis.makeGETRequest()\r\n\t\t\t.then(sum =>\r\n\t\t\t\tsum.reduce(function (acc, currentValue) {\r\n\t\t\t\t\treturn acc + currentValue.price;\r\n\t\t\t\t}, 0)\r\n\t\t\t)\r\n\t\t\t.then(sum => (this.sumCart = sum));\r\n\r\n\t\tfetch('http://localhost:3003/cart')\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tthis.cart = data;\r\n\t\t})\r\n\t\t.catch((err) => {\r\n\t\t\tconsole.log(err);\r\n\t\t});\r\n\t},\r\n});\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;