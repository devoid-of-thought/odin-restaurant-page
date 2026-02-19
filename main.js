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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dobby310-cheese-877866_1280.jpg */ \"./src/images/dobby310-cheese-877866_1280.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Add your styles here */\n/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n*:not(dialog) {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Add accessible line-height */\n  line-height: 1.5;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/*\n  10. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  font-size: 16px;\n  --far-background-color: #cccccc;\n  --close-background-color: #eeeeee;\n  --text-on-primary-color: #eeeeee;\n  --primary-color: #020100;\n  --secondary-color: #801a86;\n  --accent-color: #e768f3;\n}\nbody {\n  background-color: var(--far-background-color);\n  font-family: 'Space Grotesk', sans-serif;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-attachment: fixed;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\nheader {\n  background-color: var(--primary-color);\n  padding: 0 2rem 1rem 2rem;\n}\nnav {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-areas: \"home menu logo logo cheese contact\";\n  gap: 2rem;\n}\nnav .header-link {\n  color: var(--text-on-primary-color);\n  font-size: 2rem;\n  text-decoration: none;\n  align-self: end;\n  cursor: pointer;\n  -webkit-user-select: none;\n}\nnav .header-link:nth-of-type(1),\nnav .header-link:nth-of-type(2),\nnav .header-link:nth-of-type(3){\n  justify-self: start;\n}\nnav .header-link:nth-of-type(4),\nnav .header-link:nth-of-type(5),\nnav .header-link:nth-of-type(6){\n  justify-self: end;\n}\nnav .header-link:nth-of-type(1) {\n  grid-area: home;\n  }\nnav .header-link:nth-of-type(2) {\n  grid-area: menu;\n  }\n\nnav .header-logo {\n  grid-area: logo;\n  align-self: baseline;\n  justify-self: center;\n  font-size: 3rem;\n  color: var(--text-on-primary-color)\n}\nnav .header-link:nth-of-type(3){\n  grid-area: cheese;\n}\nnav .header-link:nth-of-type(4){\n  grid-area: contact;\n}\n\nheader{\n  grid-row:1/2;\n  min-height: 10%;\n  max-height: max-content;\n}\n#content {\n  grid-row: 2/3;\n  min-height: 60%;\n  max-height: max-content;\n}\n.footer {\n  grid-row: 3/4;\n  min-height: 10%;\n  max-height: max-content;\n  align-self: end;\n}\n.main-content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 9fr;\n  grid-template-areas: \"welcome-message welcome-message\" \"left-content locations\";\n}\n.welcome-message {\n  grid-area: welcome-message;\n  background-color: var(--close-background-color);\n  padding: 2rem;\n  margin: 2rem;\n  align-self: center;\n}\n.main-content .left-content {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--close-background-color);\n  padding: 2rem;\n  margin: 2rem;\n  grid-area: left-content;\n  justify-self: start;\n  gap:3rem;\n}\n.left-content p{\n  font-size: 1.5rem;\n  padding: 10px;\n  border-bottom: #020100 solid 2px;\n}\n.left-content p:last-child{\n  border-bottom: none;\n}\n.main-content .locations {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--close-background-color);\n  padding: 2rem;\n  grid-area: locations;\n  justify-self: end;\n  margin: 2rem;\n  width:80%\n}\n.main-content .locations .location {\n  display: flex;\n  flex-direction: row;\n  padding: 1rem;\n  gap: 2rem;\n  flex: 1;\n  gap: 1rem;\n  border-bottom: #020100 solid 2px;\n}\n.main-content .locations .location:last-child {\n  border-bottom: none;\n}\n.main-content .locations .location .image-container img \n{\n  border: 5px solid white;\n  width: 300px;\n  height: 400px;\n  object-fit: cover;}\n\n.footer {\n  grid-row: 3/4;\n  background-color: var(--primary-color);\n  color: var(--text-on-primary-color);\n  display: flex;\n  align-items: center;\n}\n.footer .important-footer-information {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  gap: 0.5rem;\n  margin-left: auto;\n  margin-right: 2rem;\n  align-items: center;\n}\n.footer .footer-logo {\n  align-self: end;\n  font-size: 5rem;\n  margin-left: 2rem;\n}\n\n.menu{\n  display:flex ;\n  flex-direction: column;\n  align-items: center;\n  padding: 6rem 4rem;  \n  background-color: var(--close-background-color);\n  width: 50%;\n  justify-self: center;\n  align-self: center;\n  margin: 3rem;\n}\n\n.name-and-details{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.name-and-details .details{\n  grid-column:2/3;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: end;\n}   \n.name-and-details h2{\n  grid-column: 1/2;\n}\n.menu-item p{\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: #020100 solid 1px;\n}\n\n\n.contact-card{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--close-background-color);\n  width: 50%;\n  padding: 2rem;\n  margin: 3rem auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n\nfunction loadContact() {\n    const content = document.getElementById(\"content\");\n        const locationsData = [\n            {\n                city: \"Warsaw\",\n                address: \"123 Żurawia, Warszawa, PL 00-001\",\n                phoneNumber: \"+48 123 456 789\",\n            },\n            {\n            \n                city: \"Kraków\",\n                address: \"456 Studencka, Kraków, PL 30-001\",\n                phoneNumber: \"+48 987 654 321\",\n            },\n            {\n    \n                city: \"Wrocław\",\n                address: \"789 Jęcznienna, Wrocław, PL 50-001\",\n                phoneNumber: \"+48 555 444 333\",\n            }\n        ];  \n    for (const item of locationsData) {\n        const contactCard = document.createElement(\"div\");\n    contactCard.classList.add(\"contact-card\");\n        const location = document.createElement(\"div\");\n        location.classList.add(\"location\");\n\n        const city = document.createElement(\"h2\");\n        city.textContent = item.city;\n        location.appendChild(city);\n\n        const address = document.createElement(\"p\");\n        address.textContent = `Address: ${item.address}`;\n        location.appendChild(address);\n\n        const phoneNumber = document.createElement(\"p\");\n        phoneNumber.textContent = `Phone: ${item.phoneNumber}`;\n        location.appendChild(phoneNumber);\n\n        contactCard.appendChild(location);\n        content.appendChild(contactCard);\n\n    }\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_page */ \"./src/main_page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\n(0,_main_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst wipeContent = () => {\n    content.textContent = \"\";\n}\n \nconst navContainer = document.querySelector(\"nav\");\n\nnavContainer.addEventListener(\"click\", (event) => {\n    if (event.target.classList.contains(\"header-link\")) {\n        const clickedId = event.target.id;\n        console.log(clickedId);\n        \n        wipeContent();\n\n        switch(clickedId) {\n            case \"home-button\":\n                (0,_main_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                break;\n            case \"menu-button\":\n                (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                break;\n            case \"delivery-button\":\n                break;\n            case \"about-us-button\":\n                break;\n            case \"our-cheese-button\":\n                break;\n            case \"contact-button\":\n                (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                break;\n        }\n    }\n});\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/main_page.js"
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_ctrlaltdck_cheese_4072040_1280_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ctrlaltdck-cheese-4072040_1280.jpg */ \"./src/images/ctrlaltdck-cheese-4072040_1280.jpg\");\n/* harmony import */ var _images_jhenning_cheese_8437668_1280_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/jhenning-cheese-8437668_1280.jpg */ \"./src/images/jhenning-cheese-8437668_1280.jpg\");\n/* harmony import */ var _images_davidvives90_cheese_8274861_1280_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/davidvives90-cheese-8274861_1280.jpg */ \"./src/images/davidvives90-cheese-8274861_1280.jpg\");\n\n\n\n\n\nfunction loadHome() {\n    const content = document.getElementById(\"content\");\n    const mainContent = document.createElement(\"div\");\n    mainContent.classList.add(\"main-content\");\n    const welcomeMessage = document.createElement(\"h1\");\n    welcomeMessage.classList.add(\"welcome-message\");\n    welcomeMessage.textContent = \"Welcome to our restaurant!\";\n    mainContent.appendChild(welcomeMessage);\n\n    const leftContent = document.createElement(\"div\");\n    leftContent.classList.add(\"left-content\");\n    for (let i = 0; i < 3; i++) {\n        const paragraph = document.createElement(\"p\");\n        paragraph.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n        leftContent.appendChild(paragraph);\n    }\n    mainContent.appendChild(leftContent);\n\n    const locations = document.createElement(\"div\");\n    locations.classList.add(\"locations\");\n\n    const locationsData = [\n        {\n            city: \"Warsaw\",\n            address: \"123 Żurawia, Warszawa, PL 00-001\",\n            image: _images_ctrlaltdck_cheese_4072040_1280_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        },\n        {\n        \n            city: \"Kraków\",\n            address: \"456 Studencka, Kraków, PL 30-001\",\n            image: _images_jhenning_cheese_8437668_1280_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        },\n        {\n\n            city: \"Wrocław\",\n            address: \"789 Jęcznienna, Wrocław, PL 50-001\",\n            image: _images_davidvives90_cheese_8274861_1280_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        }\n    ];  \n    for (const item of locationsData) {\n        const location = document.createElement(\"div\");\n        location.classList.add(\"location\");\n\n        const imageContainer = document.createElement(\"div\");\n        imageContainer.classList.add(\"image-container\");\n        const image = document.createElement(\"img\");\n        image.src = item.image;\n        image.alt = `${item.city} location`;\n        imageContainer.appendChild(image);\n        location.appendChild(imageContainer);\n\n        const locationInfo = document.createElement(\"div\");\n        locationInfo.classList.add(\"text-container\");\n        const city = document.createElement(\"h2\");\n        city.textContent = item.city;\n        const address = document.createElement(\"p\");\n        address.textContent = item.address;\n        locationInfo.appendChild(city);\n        locationInfo.appendChild(address);\n        location.appendChild(locationInfo);\n\n        locations.appendChild(location);\n    }\n\n    mainContent.appendChild(locations);\n    content.appendChild(mainContent);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/main_page.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const contentDiv = document.getElementById('content');\n\n  const menuContainer = document.createElement('div');\n  menuContainer.className = 'menu';\n\n  const mainHeading = document.createElement('h1');\n  mainHeading.textContent = 'Menu';\n  menuContainer.appendChild(mainHeading);\n\n  const menuSections = [\n    {\n      title: 'Our Cheese',\n      items: [\n        {\n          name: 'Cheese 1',\n          price: '$5.99',\n          origin: 'Poland',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Cheese 2',\n          price: '$6.99',\n          origin: 'France',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Cheese 3',\n          price: '$7.99',\n          origin: 'Italy',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        }\n      ]\n    },\n    {\n      title: 'Mains',\n      items: [\n        {\n          name: 'Main 1',\n          price: '$10.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Main 2',\n          price: '$12.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Main 3',\n          price: '$14.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        }\n      ]\n    },\n    {\n      title: 'Drinks',\n      items: [\n        {\n          name: 'Water',\n          price: '$2.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Soda',\n          price: '$3.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Wine',\n          price: '$8.99',\n          origin: 'Spain',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        },\n        {\n          name: 'Beer',\n          price: '$4.99',\n          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'\n        }\n      ]\n    }\n  ];\n\n  menuSections.forEach(section => {\n    const sectionHeading = document.createElement('h2');\n    sectionHeading.textContent = section.title;\n    menuContainer.appendChild(sectionHeading);\n\n    section.items.forEach(item => {\n      const menuItem = document.createElement('div');\n      menuItem.className = 'menu-item';\n\n      const nameAndDetails = document.createElement('div');\n      nameAndDetails.className = 'name-and-details';\n\n      const itemName = document.createElement('h2');\n      itemName.textContent = item.name;\n      nameAndDetails.appendChild(itemName);\n        const details = document.createElement('div');\n        details.className = 'details';\n\n        const itemPrice = document.createElement('h3');\n        itemPrice.textContent = `Price: ${item.price}`;\n        details.appendChild(itemPrice);\n\n        if (item.origin) {\n          const itemOrigin = document.createElement('h4');\n          itemOrigin.textContent = `Origin: ${item.origin}`;\n          details.appendChild(itemOrigin);\n        }\n\n        nameAndDetails.appendChild(details);\n      \n\n      menuItem.appendChild(nameAndDetails);\n\n      const itemDesc = document.createElement('p');\n      itemDesc.textContent = item.description;\n      menuItem.appendChild(itemDesc);\n\n      menuContainer.appendChild(menuItem);\n    });\n  });\n\n  contentDiv.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/images/ctrlaltdck-cheese-4072040_1280.jpg"
/*!*******************************************************!*\
  !*** ./src/images/ctrlaltdck-cheese-4072040_1280.jpg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8e767e8639f6f562f7f3.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/ctrlaltdck-cheese-4072040_1280.jpg?\n}");

/***/ },

/***/ "./src/images/davidvives90-cheese-8274861_1280.jpg"
/*!*********************************************************!*\
  !*** ./src/images/davidvives90-cheese-8274861_1280.jpg ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"edbfaceb6158ffd5a1eb.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/davidvives90-cheese-8274861_1280.jpg?\n}");

/***/ },

/***/ "./src/images/dobby310-cheese-877866_1280.jpg"
/*!****************************************************!*\
  !*** ./src/images/dobby310-cheese-877866_1280.jpg ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1b115d14fc990b59a238.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/dobby310-cheese-877866_1280.jpg?\n}");

/***/ },

/***/ "./src/images/jhenning-cheese-8437668_1280.jpg"
/*!*****************************************************!*\
  !*** ./src/images/jhenning-cheese-8437668_1280.jpg ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3b1e5ec15a417d45fae8.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/jhenning-cheese-8437668_1280.jpg?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;