/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    background-color: #DAAD86;\n    font-size: 16px;\n    margin: 0;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: absolute; /* Stay in place */\n    top: 0;\n    left: 0;\n    z-index: 1; /* Sit on top */\n    width: 100%;\n    height: 100%; \n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.8); /* Black w/ opacity */\n  }\n\n.header {\n    background-color: #659DBD;\n}\n\n.task-form {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n    padding: 2rem;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    margin: auto;\n    opacity: 0.9;\n    position: absolute;\n    top: 10%;\n    left: 33%;\n}\n\n.task-form > * {\n    border-radius: 0.5rem;\n    padding: 0.3rem;\n}\n\n\n.delete-icon {\n    height: 1.5rem;\n    padding: 1.5rem;\n}\n\n.list-section {\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.list-container {\n    display: flex;\n    flex-direction: column;\n    align-items: space-around;\n    justify-items: center;\n    margin: 1.5rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: white;\n }\n\n .list-header {\n     display: flex;\n     align-items: center;\n     background-color: white;\n     justify-items: space-around;\n }\n\n .task-header {\n     display: grid;\n     grid-template-columns: 0.2fr 3fr 2fr 1fr 2fr;\n     grid-template-areas: \". title date priority modify\";\n     border-radius: 0.5rem;\n     justify-items: center;\n     align-items: center;\n     /* max-height: 3rem;; */\n }\n\n .task-heading {\n    padding: 0.25rem;\n    border-radius: 0.25rem;\n}\n\n\n.due-date {\n    grid-area: date;\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: rgb(215, 230, 173);\n}\n\n.priority {\n    grid-area: priority;\n    justify-self: flex-start;\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: rgb(230, 217, 173);\n}\n\n .svg-class {\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: lightblue;\n }\n\n .bullet-item {\n    height: 2rem;\n    width: 2rem;\n    border: orange 2px solid;\n    border-radius: 0.5rem;\n    background-color: black;\n }\n\n.text-style {\n    font-size: 1.5rem;\n}\n\n\n.edit-task {\n    grid-area: modify;\n}\n\n .task-card {\n     padding: 0.5rem;\n     margin: 0.2rem;\n }\n\n\n *[type='button'] {\n     padding: 0.5rem;\n     margin: 0.5rem;\n     font-weight: 700;\n     border: lightskyblue 2px solid;\n     box-shadow: 2px 2px lightblue;\n     border-radius: 0.5rem;\n     background-color: lightblue;\n }\n\ninput[type=\"text\"] {\n    margin: 0.5rem;\n    font-size: 1.2rem;\n    background-color: gainsboro;\n}\n\ntextarea, select, input[type=\"date\"] {\n    background-color: gainsboro;\n}\n\n.task-title {\n    font-size: 1.2rem;\n    justify-self: flex-start;\n    grid-area: title;\n    background-color: salmon;\n}\n\n.list-card {\n    background-color: #FBEEC1;\n    font-weight: bold;\n    flex: 1;\n    box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa,EAAE,sBAAsB;IACrC,kBAAkB,EAAE,kBAAkB;IACtC,MAAM;IACN,OAAO;IACP,UAAU,EAAE,eAAe;IAC3B,WAAW;IACX,YAAY;IACZ,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;AAEF;IACI,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;;AAGA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,uBAAuB;CAC1B;;CAEA;KACI,aAAa;KACb,mBAAmB;KACnB,uBAAuB;KACvB,2BAA2B;CAC/B;;CAEA;KACI,aAAa;KACb,4CAA4C;KAC5C,mDAAmD;KACnD,qBAAqB;KACrB,qBAAqB;KACrB,mBAAmB;KACnB,uBAAuB;CAC3B;;CAEA;IACG,gBAAgB;IAChB,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,2BAA2B;IAC3B,gCAAgC;IAChC,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,gCAAgC;IAChC,qBAAqB;IACrB,oCAAoC;AACxC;;CAEC;IACG,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,gCAAgC;IAChC,qBAAqB;IACrB,2BAA2B;CAC9B;;CAEA;IACG,YAAY;IACZ,WAAW;IACX,wBAAwB;IACxB,qBAAqB;IACrB,uBAAuB;CAC1B;;AAED;IACI,iBAAiB;AACrB;;;AAGA;IACI,iBAAiB;AACrB;;CAEC;KACI,eAAe;KACf,cAAc;CAClB;;;CAGA;KACI,eAAe;KACf,cAAc;KACd,gBAAgB;KAChB,8BAA8B;KAC9B,6BAA6B;KAC7B,qBAAqB;KACrB,2BAA2B;CAC/B;;AAED;IACI,cAAc;IACd,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,OAAO;IACP,gBAAgB;AACpB","sourcesContent":["html, body {\n    background-color: #DAAD86;\n    font-size: 16px;\n    margin: 0;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: absolute; /* Stay in place */\n    top: 0;\n    left: 0;\n    z-index: 1; /* Sit on top */\n    width: 100%;\n    height: 100%; \n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.8); /* Black w/ opacity */\n  }\n\n.header {\n    background-color: #659DBD;\n}\n\n.task-form {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n    padding: 2rem;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    margin: auto;\n    opacity: 0.9;\n    position: absolute;\n    top: 10%;\n    left: 33%;\n}\n\n.task-form > * {\n    border-radius: 0.5rem;\n    padding: 0.3rem;\n}\n\n\n.delete-icon {\n    height: 1.5rem;\n    padding: 1.5rem;\n}\n\n.list-section {\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.list-container {\n    display: flex;\n    flex-direction: column;\n    align-items: space-around;\n    justify-items: center;\n    margin: 1.5rem;\n    padding: 0.5rem;\n    border-radius: 1rem;\n    background-color: white;\n }\n\n .list-header {\n     display: flex;\n     align-items: center;\n     background-color: white;\n     justify-items: space-around;\n }\n\n .task-header {\n     display: grid;\n     grid-template-columns: 0.2fr 3fr 2fr 1fr 2fr;\n     grid-template-areas: \". title date priority modify\";\n     border-radius: 0.5rem;\n     justify-items: center;\n     align-items: center;\n     /* max-height: 3rem;; */\n }\n\n .task-heading {\n    padding: 0.25rem;\n    border-radius: 0.25rem;\n}\n\n\n.due-date {\n    grid-area: date;\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: rgb(215, 230, 173);\n}\n\n.priority {\n    grid-area: priority;\n    justify-self: flex-start;\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: rgb(230, 217, 173);\n}\n\n .svg-class {\n    padding: 0.5rem;\n    margin-left: 0.5rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    border: lightblue 2px solid;\n    box-shadow: 2px 2px lightskyblue;\n    border-radius: 0.5rem;\n    background-color: lightblue;\n }\n\n .bullet-item {\n    height: 2rem;\n    width: 2rem;\n    border: orange 2px solid;\n    border-radius: 0.5rem;\n    background-color: black;\n }\n\n.text-style {\n    font-size: 1.5rem;\n}\n\n\n.edit-task {\n    grid-area: modify;\n}\n\n .task-card {\n     padding: 0.5rem;\n     margin: 0.2rem;\n }\n\n\n *[type='button'] {\n     padding: 0.5rem;\n     margin: 0.5rem;\n     font-weight: 700;\n     border: lightskyblue 2px solid;\n     box-shadow: 2px 2px lightblue;\n     border-radius: 0.5rem;\n     background-color: lightblue;\n }\n\ninput[type=\"text\"] {\n    margin: 0.5rem;\n    font-size: 1.2rem;\n    background-color: gainsboro;\n}\n\ntextarea, select, input[type=\"date\"] {\n    background-color: gainsboro;\n}\n\n.task-title {\n    font-size: 1.2rem;\n    justify-self: flex-start;\n    grid-area: title;\n    background-color: salmon;\n}\n\n.list-card {\n    background-color: #FBEEC1;\n    font-weight: bold;\n    flex: 1;\n    box-shadow: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factory/listFactory.js":
/*!************************************!*\
  !*** ./src/factory/listFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderList */ "./src/render/renderList.js");
/* harmony import */ var _localStorageHelper_updateLocalStorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localStorageHelper/updateLocalStorageTasks */ "./src/localStorageHelper/updateLocalStorageTasks.js");



const listProto = {
    addTask(taskObj) {
        this.tasks.push(taskObj);
        //update local storage
        (0,_localStorageHelper_updateLocalStorageTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(this.name, this.tasks);

    },
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.taskId != taskId);
        //update local storage
        (0,_localStorageHelper_updateLocalStorageTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(this.name, this.tasks);
    },
    editTask(taskId, newTask) {
        for(let ii=0; ii<this.tasks.length; ii++) {
            const curTaskObj = this.tasks[ii];
            if(curTaskObj.taskId == taskId) {
                this.tasks[ii] = newTask;
            }
        }
        //update local storage
        (0,_localStorageHelper_updateLocalStorageTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(this.name, this.tasks);
    },
    showList() {
        console.log("List object : ", this);
        (0,_render_renderList__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((listname, tasksArr=[]) => {
    const tasks = tasksArr;
    const name = listname;
    const listObj = Object.create(listProto);
    Object.assign(listObj, {tasks, name});
    console.log('List Object Created: ', listObj);
    return listObj;
});


/***/ }),

/***/ "./src/factory/listsFactory.js":
/*!*************************************!*\
  !*** ./src/factory/listsFactory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listFactory */ "./src/factory/listFactory.js");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory */ "./src/factory/taskFactory.js");
/* harmony import */ var _localStorageHelper_updateLocalStorageLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorageHelper/updateLocalStorageLists */ "./src/localStorageHelper/updateLocalStorageLists.js");




const listsProto = {
    addList(listname) {
        const newList = (0,_listFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(listname);
        this.lists.push(newList);
        //update local storage
        (0,_localStorageHelper_updateLocalStorageLists__WEBPACK_IMPORTED_MODULE_2__["default"])(this.lists);
        return newList;
    },
    deleteList(listname) {
        this.lists = this.lists.filter(list => list.name != listname);
        //update local storage
        (0,_localStorageHelper_updateLocalStorageLists__WEBPACK_IMPORTED_MODULE_2__["default"])(this.lists);
        return this.lists;
    },
    showAll() {
        this.lists.forEach(list => {
            console.log("List object is: ", list);
            list.showList();
        });
    },
    showList(list) {
        list.showList();
    }
}


const lists = (() => {
    let lists = [];
    const storedLists = JSON.parse(localStorage.getItem('lists'));
    
    if(storedLists) {
        console.log('Previously stored lists available.');
        storedLists.forEach(list => {
            //create list objects and push them to lists array
            lists.push((0,_listFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(list.name, list.tasks));
        });
        //create task objects and push them to tasks array
        for(let ii=0; ii<lists.length; ii++) {
            const curListObj = lists[ii];
            for(let jj=0; jj<curListObj.tasks.length; jj++) {
                const curTaskObj = curListObj.tasks[jj];
                curListObj.tasks[jj] = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(curTaskObj.title, curTaskObj.description, curTaskObj.dueDate,
                                            curTaskObj.priority, curTaskObj.notes, curTaskObj.listName);
            }
        }

    } else {
        console.log('No previous lists available.')
        lists = [(0,_listFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('Default List')];
        //update local storage
        (0,_localStorageHelper_updateLocalStorageLists__WEBPACK_IMPORTED_MODULE_2__["default"])(lists);
    }

    const listsObj = Object.create(listsProto);
    return Object.assign(listsObj, {lists});
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lists);

/***/ }),

/***/ "./src/factory/taskFactory.js":
/*!************************************!*\
  !*** ./src/factory/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderTask */ "./src/render/renderTask.js");


const taskProto = {
    showTask() { 
        (0,_render_renderTask__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    },
}

function Task(title, description, dueDate, priority, notes, listName) {

    const taskId = (listName+title).replaceAll(" ","");
    return Object.assign(Object.create(taskProto), {taskId, listName, title, description,
                                                    dueDate, priority, notes});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/localStorageHelper/updateLocalStorageLists.js":
/*!***********************************************************!*\
  !*** ./src/localStorageHelper/updateLocalStorageLists.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateLocalStorageLists(newLists) {
    localStorage.setItem('lists', JSON.stringify(newLists));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorageLists);

/***/ }),

/***/ "./src/localStorageHelper/updateLocalStorageTasks.js":
/*!***********************************************************!*\
  !*** ./src/localStorageHelper/updateLocalStorageTasks.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateLocalStorageTasks(listName, tasksArr) {
    const storedLists = JSON.parse(localStorage.getItem('lists'));

    for(let ii=0; ii<storedLists.length; ii++) {
        if(storedLists[ii].name == listName) {
            storedLists[ii].tasks = tasksArr;
        } 
    }
    localStorage.setItem('lists', JSON.stringify(storedLists));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorageTasks);

/***/ }),

/***/ "./src/render/renderList.js":
/*!**********************************!*\
  !*** ./src/render/renderList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskModals_createTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskModals/createTaskModal */ "./src/taskModals/createTaskModal.js");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _factory_taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/taskFactory */ "./src/factory/taskFactory.js");
/* harmony import */ var _factory_listsFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory/listsFactory */ "./src/factory/listsFactory.js");






function renderList(listObj) {
    const listSection = document.getElementById('list-section');
    const cardHTML = `
        <div class="list-container" id='${listObj.name}-container'>
            <div class='list-header'>
                <div class='list-card' type='button' id='${listObj.name}'><p class='text-style'>${listObj.name}</p></div>
                <img class='svg-class' title='Add Task' src=${_assets_add_svg__WEBPACK_IMPORTED_MODULE_1__} id='create-task-${listObj.name}'/>&nbsp;&nbsp;
                <img class='svg-class' title='Delete List' src=${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_2__} id='delete-list-${listObj.name}'/>
            </div>
            <div class='task-container' id='${listObj.name}-task-container'>
            </div>
        </div>
        `;

    listSection.insertAdjacentHTML('beforeend', cardHTML);
    listObj.tasks.forEach(task => task.showTask());
    const createTask = document.getElementById(`create-task-${listObj.name}`);
    const deleteList = document.getElementById(`delete-list-${listObj.name}`);

    // console.log("Create and delete tasks: ", createTask, deleteList);
    createTask.addEventListener('click', event => createTaskHandler(listObj));
    deleteList.addEventListener('click', event => deleteListHandler(listObj));
}


function createTaskHandler(listObj) {
    console.log('Create task handler called');
    // const createTaskBtn = document.getElementById(`create-task-${listName}`);
    // createTaskBtn.disabled = true;
    const modalElem = document.getElementById('modal');
    modalElem.appendChild((0,_taskModals_createTaskModal__WEBPACK_IMPORTED_MODULE_0__["default"])());
    modalElem.style.display = 'block';

    const addTaskBtn = document.getElementById('add-task');
    const cancelTaskBtn = document.getElementById('cancel-task');

    addTaskBtn.addEventListener('click', event => {
        const taskForm = document.getElementById('task-form');
        const formData = new FormData(taskForm);
        if(formData.get('title').length == 0) {
            alert('Task title cannot be empty.');
        } else if(formData.get('dueDate').length == 0) {
            alert('Due date cannot be empty.');
        } else {
        const newTask = (0,_factory_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(
            formData.get('title'),
            formData.get('description'),
            formData.get('dueDate'),
            formData.get('priority'),
            formData.get('notes'),
            listObj.name
        );     
        listObj.addTask(newTask);
        modalElem.innerHTML = '';
        newTask.showTask();
        modalElem.style.display = 'none';
        }
    });

    cancelTaskBtn.addEventListener('click', event => {
        modalElem.innerHTML = '';
        createTaskBtn.disabled = false;
        modalElem.style.display = 'none';
    });
}

function deleteListHandler(listObj) {
    console.log('Delete list handler called');
    if(confirm('Are you sure to delete this list?'))
    {   const listContainerElement = document.getElementById(listObj.name+'-container');
        listContainerElement.remove();
        _factory_listsFactory__WEBPACK_IMPORTED_MODULE_4__["default"].deleteList(listObj.name);
        console.log('After deleting: ', _factory_listsFactory__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);

/***/ }),

/***/ "./src/render/renderTask.js":
/*!**********************************!*\
  !*** ./src/render/renderTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/listsFactory */ "./src/factory/listsFactory.js");
/* harmony import */ var _taskModals_modifyTaskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskModals/modifyTaskModal */ "./src/taskModals/modifyTaskModal.js");
/* harmony import */ var _assets_view_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/view.svg */ "./src/assets/view.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_listitem_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/listitem.svg */ "./src/assets/listitem.svg");
/* harmony import */ var _taskModals_viewTaskModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskModals/viewTaskModal */ "./src/taskModals/viewTaskModal.js");








function getTaskHtml(taskId, title, dueDate, priority)
    {
        return `
            <div class='task-header' id='task-header-${taskId}'>
                <img src=${_assets_listitem_svg__WEBPACK_IMPORTED_MODULE_5__} class='bullet-item' title='Do it with Love!'/>
                <div class='task-title task-heading' type='button'>${title}</div>
                <div class='due-date task-heading' title='Due Date'>${dueDate}</div>
                <div class='priority type='button' title='Priority' task-heading'>${priority}</div>
                <div class='edit-task'>
                    <img class='svg-class' title='View Task' src=${_assets_view_svg__WEBPACK_IMPORTED_MODULE_2__} id='view-task-${taskId}'/>
                    <img class='svg-class' title='Edit Task' src=${_assets_edit_svg__WEBPACK_IMPORTED_MODULE_4__} id='modify-task-${taskId}'/>
                    <img class='svg-class' title='Delete Task' src=${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_3__} id='delete-task-${taskId}'/>
                </div>
            </div>
        `;
    }

function renderTask(taskObj) {
        const listTaskContainer = document.getElementById(taskObj.listName+'-task-container');
        const uiTaskElement = document.createElement('div');
        uiTaskElement.classList.add('task-card');
        uiTaskElement.innerHTML = getTaskHtml(taskObj.taskId, taskObj.title, taskObj.dueDate, taskObj.priority);
        listTaskContainer.append(uiTaskElement);
        const listObj = _factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__["default"].lists.filter(obj => obj.name == taskObj.listName)[0];
        document.getElementById(`delete-task-${taskObj.taskId}`).addEventListener('click', event => deleteTaskHandler(listObj, taskObj));
        document.getElementById(`modify-task-${taskObj.taskId}`).addEventListener('click', event => editTaskHandler(listObj, taskObj));
        document.getElementById(`view-task-${taskObj.taskId}`).addEventListener('click', event => viewTaskHandler(taskObj));
}

function deleteTaskHandler(listObj, taskObj) {
    console.log('Inside delete task handler');
    const taskHeader = document.getElementById(`task-header-${taskObj.taskId}`);
    taskHeader.remove();
    listObj.deleteTask(taskObj.taskId);
}

function viewTaskHandler(taskObj) {
    const modalElem = document.getElementById('modal');
    modalElem.appendChild((0,_taskModals_viewTaskModal__WEBPACK_IMPORTED_MODULE_6__["default"])(taskObj));
    modalElem.style.display = 'block';
    
    const closeTaskBtn = document.getElementById('close-view-task');
    closeTaskBtn.addEventListener('click', event => {
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });
}

function editTaskHandler(listObj, taskObj) {
    const modalElem = document.getElementById('modal');
    modalElem.appendChild((0,_taskModals_modifyTaskModal__WEBPACK_IMPORTED_MODULE_1__["default"])());
    modalElem.style.display = 'block';

    const taskForm = document.getElementById('task-form');
    taskForm.title.value = taskObj.title;
    taskForm.description.value = taskObj.description;
    taskForm.notes.value = taskObj.notes;
    taskForm.dueDate.value = taskObj.dueDate;
    taskForm.priority.value = taskObj.priority;
    
    const saveTaskBtn = document.getElementById('save-edit-task');
    const cancelTaskBtn = document.getElementById('cancel-edit-task');


    saveTaskBtn.addEventListener('click', event => {
        //change task obj properties
        console.log('Inside edit task handler');
        const formData = new FormData(taskForm);
        taskObj.title = formData.get('title');
        taskObj.description = formData.get('description');
        taskObj.dueDate = formData.get('dueDate');
        taskObj.priority = formData.get('priority');
        taskObj.notes = formData.get('notes');
        const prevTaskId = taskObj.taskId;
        taskObj.taskId = (taskObj.listName+taskObj.title).replaceAll(" ","");

        //create new DOM element with the new task properties
        const newNode = document.createElement('div');
        newNode.classList.add('task-card');
        newNode.innerHTML = getTaskHtml(taskObj.taskId, taskObj.title, taskObj.dueDate, taskObj.priority);
        console.log('prev and new task id are: ', prevTaskId, taskObj.taskId);
        //render the changes by replacing the old node with new node in DOM
        const oldNode = document.getElementById('task-header-'+prevTaskId);
        oldNode.parentNode.replaceChild(newNode, oldNode);

        document.getElementById(`delete-task-${taskObj.taskId}`).addEventListener('click', event => deleteTaskHandler(listObj, taskObj));
        document.getElementById(`modify-task-${taskObj.taskId}`).addEventListener('click', event => editTaskHandler(listObj, taskObj));
        document.getElementById(`view-task-${taskObj.taskId}`).addEventListener('click', event => viewTaskHandler(taskObj));
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });

    cancelTaskBtn.addEventListener('click', event => {
        console.log('Cancel edit is called');
        modalElem.innerHTML = '';
        modalElem.style.display = 'none';
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTask);

/***/ }),

/***/ "./src/taskModals/createTaskModal.js":
/*!*******************************************!*\
  !*** ./src/taskModals/createTaskModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taskModal() {
    const divElem = document.createElement('div');
    divElem.classList.add("task-modal");
    const form = '\
            <form action="#" id="task-form" class="task-form">\
                Title:<input type="text" name="title" id="task-title" required/><br>\
                Description: <textarea name="description" class="textarea" id="task-description" cols="10" rows="5"></textarea><br>\
                Notes: <textarea name="notes" id="task-notes" cols="30" rows="10"></textarea><br>\
                <label for="priority">Priority:</label>\
                <select name="priority" id="task-priority">\
                    <option value="P0">P0</option>\
                    <option value="P1">P1</option>\
                    <option value="P2">P2</option>\
                    <option value="P3">P3</option>\
                </select><br>\
                <label for="dueDate">Due Date:</label>\
                <input type="date" name="dueDate" id="task-date" required><br>\
                <button type="button" id="add-task">Save task</button>\
                <button type="button" id="cancel-task">Cancel</button>\
            </form>\
        ';
    divElem.innerHTML = form;
    return divElem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal);

/***/ }),

/***/ "./src/taskModals/modifyTaskModal.js":
/*!*******************************************!*\
  !*** ./src/taskModals/modifyTaskModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taskModal() {
    const divElem = document.createElement('div');
    divElem.classList.add("task-modal");
    const form = `\
            <form action="#" id="task-form" class="task-form">\
                Title:<input type="text" name="title" id="task-title"/><br>\
                Description: <textarea name="description" class="textarea" id="task-description" cols="10" rows="5"></textarea><br>\
                Notes: <textarea name="notes" id="task-notes" cols="30" rows="10"></textarea><br>\
                <label for="priority">Priority:</label>\
                <select name="priority" id="task-priority">\
                    <option value="P0">P0</option>\
                    <option value="P1">P1</option>\
                    <option value="P2">P2</option>\
                    <option value="P3">P3</option>\
                </select><br>\
                <label for="dueDate">Due Date:</label>\
                <input type="date" name="dueDate" id="task-date"><br>\
                <button type="button" id="save-edit-task">Save Changes</button>\
                <button type="button" id="cancel-edit-task">Cancel</button>\
            </form>\
        `;
    divElem.innerHTML = form;
    return divElem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal);

/***/ }),

/***/ "./src/taskModals/viewTaskModal.js":
/*!*****************************************!*\
  !*** ./src/taskModals/viewTaskModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function viewTaskModal(task) {
    const divElem = document.createElement('div');
    divElem.classList.add("task-modal");
    const form = `\
            <form action="#" id="task-form" class="task-form">\
                Title:<input type="text" name="title" id="task-title" value=${task.title} disabled/><br>\
                Description: <textarea name="description" class="textarea" id="task-description" cols="10" rows="5" disabled>${task.description}</textarea><br>\
                Notes: <textarea name="notes" id="task-notes" cols="30" rows="10" disabled>${task.notes}</textarea><br>\
                <label for="priority">Priority:</label>\
                <input type="text" name="priority" id="task-priority" value=${task.title} disabled/><br>\
                <label for="dueDate">Due Date:</label>\
                <input type="date" name="dueDate" id="task-date" value=${task.dueDate} disabled /><br>\
                <button type="button" id="close-view-task">Close</button>\
            </form>\
        `;
    divElem.innerHTML = form;
    return divElem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewTaskModal);

/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a30b60c6e11ec7506cef.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cf9578d7bee99e6f1b9b.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/92ece0451142f19ca27d.svg";

/***/ }),

/***/ "./src/assets/listitem.svg":
/*!*********************************!*\
  !*** ./src/assets/listitem.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/eca63bb01684809e57de.svg";

/***/ }),

/***/ "./src/assets/view.svg":
/*!*****************************!*\
  !*** ./src/assets/view.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/294e7fc0a9f23fa587e4.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/listsFactory */ "./src/factory/listsFactory.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__["default"].showAll();
showCreateList();

function showListModal(listModalElem) {
    console.log('Inside show modal');
    listModalElem.innerHTML = '\
    <label for="listname" class="text-style">Name:&nbsp;</label>\
    <input type="text" name="listname" id="newlist" required/>\
    <button type="button" id="add-list">Save</button>&nbsp;&nbsp;\
    <button type="button" id="cancel-list">Cancel</button>\
    ';
}

function hideListModal(listModalElem) {
    console.log('Inside hide modal');
    listModalElem.innerHTML = "";
}

function showCreateList() {
    const listModalElem = document.getElementById('list-modal');
    try {
        const createListBtn = document.getElementById('create-list');
        createListBtn.addEventListener('click', event => {
            showListModal(listModalElem);
            const addListBtn = document.getElementById('add-list');
            addListBtn.addEventListener('click', event => {
                const listNameInput = document.getElementById('newlist');
                if(listNameInput.value.length == 0) {
                    alert("List name cannot be empty.");
                }
                else {
                    const list = _factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__["default"].addList(listNameInput.value);
                    listNameInput.value='';
                    _factory_listsFactory__WEBPACK_IMPORTED_MODULE_0__["default"].showList(list);
                    hideListModal(listModalElem);
                }
            });
            const cancelListBtn = document.getElementById('cancel-list');
            cancelListBtn.addEventListener('click', event => {
                hideListModal(listModalElem);
            });
        });
    } catch (error) {
        console.log("Error creating the list: ", error);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELGdDQUFnQyxzQkFBc0IsZ0JBQWdCLEdBQUcsWUFBWSxxQkFBcUIsaURBQWlELGdDQUFnQyxjQUFjLGtCQUFrQixrQ0FBa0Msb0JBQW9CLHNCQUFzQixpRUFBaUUsNkRBQTZELDJCQUEyQixhQUFhLGdDQUFnQyxHQUFHLGdCQUFnQixtQ0FBbUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQix5QkFBeUIsZUFBZSxnQkFBZ0IsR0FBRyxvQkFBb0IsNEJBQTRCLHNCQUFzQixHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsNENBQTRDLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLDRCQUE0QixxQkFBcUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsSUFBSSxtQkFBbUIscUJBQXFCLDJCQUEyQiwrQkFBK0IsbUNBQW1DLElBQUksbUJBQW1CLHFCQUFxQixvREFBb0QsNkRBQTZELDZCQUE2Qiw2QkFBNkIsMkJBQTJCLDZCQUE2QixNQUFNLG9CQUFvQix1QkFBdUIsNkJBQTZCLEdBQUcsaUJBQWlCLHNCQUFzQixzQkFBc0IsMEJBQTBCLHFCQUFxQixrQkFBa0Isa0NBQWtDLHVDQUF1Qyw0QkFBNEIsMkNBQTJDLEdBQUcsZUFBZSwwQkFBMEIsK0JBQStCLHNCQUFzQiwwQkFBMEIscUJBQXFCLG9CQUFvQixrQ0FBa0MsdUNBQXVDLDRCQUE0QiwyQ0FBMkMsR0FBRyxpQkFBaUIsc0JBQXNCLDBCQUEwQixxQkFBcUIsb0JBQW9CLGtDQUFrQyx1Q0FBdUMsNEJBQTRCLGtDQUFrQyxJQUFJLG1CQUFtQixtQkFBbUIsa0JBQWtCLCtCQUErQiw0QkFBNEIsOEJBQThCLElBQUksaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxpQkFBaUIsdUJBQXVCLHNCQUFzQixJQUFJLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixzQ0FBc0MscUNBQXFDLDZCQUE2QixtQ0FBbUMsSUFBSSwwQkFBMEIscUJBQXFCLHdCQUF3QixrQ0FBa0MsR0FBRyw0Q0FBNEMsa0NBQWtDLEdBQUcsaUJBQWlCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLCtCQUErQixHQUFHLGdCQUFnQixnQ0FBZ0Msd0JBQXdCLGNBQWMsdUJBQXVCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLHNCQUFzQix5QkFBeUIsV0FBVyxVQUFVLG9CQUFvQixXQUFXLFVBQVUsc0JBQXNCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksc0NBQXNDLGdDQUFnQyxzQkFBc0IsZ0JBQWdCLEdBQUcsWUFBWSxxQkFBcUIsaURBQWlELGdDQUFnQyxjQUFjLGtCQUFrQixrQ0FBa0Msb0JBQW9CLHNCQUFzQixpRUFBaUUsNkRBQTZELDJCQUEyQixhQUFhLGdDQUFnQyxHQUFHLGdCQUFnQixtQ0FBbUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQix5QkFBeUIsZUFBZSxnQkFBZ0IsR0FBRyxvQkFBb0IsNEJBQTRCLHNCQUFzQixHQUFHLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsNENBQTRDLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLDRCQUE0QixxQkFBcUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsSUFBSSxtQkFBbUIscUJBQXFCLDJCQUEyQiwrQkFBK0IsbUNBQW1DLElBQUksbUJBQW1CLHFCQUFxQixvREFBb0QsNkRBQTZELDZCQUE2Qiw2QkFBNkIsMkJBQTJCLDZCQUE2QixNQUFNLG9CQUFvQix1QkFBdUIsNkJBQTZCLEdBQUcsaUJBQWlCLHNCQUFzQixzQkFBc0IsMEJBQTBCLHFCQUFxQixrQkFBa0Isa0NBQWtDLHVDQUF1Qyw0QkFBNEIsMkNBQTJDLEdBQUcsZUFBZSwwQkFBMEIsK0JBQStCLHNCQUFzQiwwQkFBMEIscUJBQXFCLG9CQUFvQixrQ0FBa0MsdUNBQXVDLDRCQUE0QiwyQ0FBMkMsR0FBRyxpQkFBaUIsc0JBQXNCLDBCQUEwQixxQkFBcUIsb0JBQW9CLGtDQUFrQyx1Q0FBdUMsNEJBQTRCLGtDQUFrQyxJQUFJLG1CQUFtQixtQkFBbUIsa0JBQWtCLCtCQUErQiw0QkFBNEIsOEJBQThCLElBQUksaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxpQkFBaUIsdUJBQXVCLHNCQUFzQixJQUFJLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixzQ0FBc0MscUNBQXFDLDZCQUE2QixtQ0FBbUMsSUFBSSwwQkFBMEIscUJBQXFCLHdCQUF3QixrQ0FBa0MsR0FBRyw0Q0FBNEMsa0NBQWtDLEdBQUcsaUJBQWlCLHdCQUF3QiwrQkFBK0IsdUJBQXVCLCtCQUErQixHQUFHLGdCQUFnQixnQ0FBZ0Msd0JBQXdCLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzF0UjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjhDO0FBQ3FDOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUZBQXNCOztBQUU5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RkFBc0I7QUFDOUIsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVGQUFzQjtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsOERBQVU7QUFDbEI7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2dDO0FBQ0E7QUFDbUQ7O0FBRXBGO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQUk7QUFDNUI7QUFDQTtBQUNBLFFBQVEsdUZBQXVCO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUZBQXVCO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBSTtBQUMzQixTQUFTO0FBQ1Q7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBLHVDQUF1Qyx3REFBSTtBQUMzQztBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsaUJBQWlCLHdEQUFJO0FBQ3JCO0FBQ0EsUUFBUSx1RkFBdUI7QUFDL0I7O0FBRUE7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQyxDQUFDOztBQUVELGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQzdEMEI7O0FBRTlDO0FBQ0E7QUFDQSxRQUFRLDhEQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBLG9EQUFvRDtBQUNwRCw2RUFBNkU7O0FBRTdFOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDaEJuQjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsdUJBQXVCOzs7Ozs7Ozs7Ozs7OztBQ0p0QztBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hnQjtBQUNmO0FBQ007QUFDSDtBQUNFOztBQUU1QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsYUFBYTtBQUN2RDtBQUNBLDJEQUEyRCxhQUFhLDBCQUEwQixhQUFhO0FBQy9HLDhEQUE4RCw0Q0FBTSxFQUFFLGtCQUFrQixhQUFhLFNBQVM7QUFDOUcsaUVBQWlFLCtDQUFTLEVBQUUsa0JBQWtCLGFBQWE7QUFDM0c7QUFDQSw4Q0FBOEMsYUFBYTtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RCxhQUFhO0FBQzNFLDhEQUE4RCxhQUFhOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9FQUFvRSxTQUFTO0FBQzdFO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQVM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWLHdCQUF3QixnRUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVEsd0VBQWdCO0FBQ3hCLHdDQUF3Qyw2REFBSztBQUM3QztBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGc0I7QUFDTztBQUNiO0FBQ0k7QUFDSjtBQUNNO0FBQ1M7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlELDJCQUEyQixpREFBUyxFQUFFO0FBQ3RDLHFFQUFxRSxNQUFNO0FBQzNFLHNFQUFzRSxRQUFRO0FBQzlFLG9GQUFvRixTQUFTO0FBQzdGO0FBQ0EsbUVBQW1FLDZDQUFPLEVBQUUsZ0JBQWdCLE9BQU87QUFDbkcsbUVBQW1FLDZDQUFPLEVBQUUsa0JBQWtCLE9BQU87QUFDckcscUVBQXFFLCtDQUFTLEVBQUUsa0JBQWtCLE9BQU87QUFDekc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBFQUFxQjtBQUM3QywrQ0FBK0MsZUFBZTtBQUM5RCwrQ0FBK0MsZUFBZTtBQUM5RCw2Q0FBNkMsZUFBZTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0EsOERBQThELGVBQWU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIscUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLGVBQWU7QUFDOUQsK0NBQStDLGVBQWU7QUFDOUQsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMzR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ3pCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDekJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLFlBQVk7QUFDMUYsK0hBQStILGlCQUFpQjtBQUNoSiw2RkFBNkYsV0FBVztBQUN4RztBQUNBLDhFQUE4RSxZQUFZO0FBQzFGO0FBQ0EseUVBQXlFLGNBQWM7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUN0Qjs7QUFFckIscUVBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwyREFBMkQsTUFBTTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUVBQWE7QUFDOUM7QUFDQSxvQkFBb0Isc0VBQWM7QUFDbEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS9saXN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS9saXN0c0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZUhlbHBlci91cGRhdGVMb2NhbFN0b3JhZ2VMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlSGVscGVyL3VwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIvcmVuZGVyTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyL3JlbmRlclRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tNb2RhbHMvY3JlYXRlVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrTW9kYWxzL21vZGlmeVRhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza01vZGFscy92aWV3VGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUFEODY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NTlEQkQ7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAzMyU7XFxufVxcblxcbi50YXNrLWZvcm0gPiAqIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5saXN0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiB9XFxuXFxuIC5saXN0LWhlYWRlciB7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAganVzdGlmeS1pdGVtczogc3BhY2UtYXJvdW5kO1xcbiB9XFxuXFxuIC50YXNrLWhlYWRlciB7XFxuICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAzZnIgMmZyIDFmciAyZnI7XFxuICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiB0aXRsZSBkYXRlIHByaW9yaXR5IG1vZGlmeVxcXCI7XFxuICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLyogbWF4LWhlaWdodDogM3JlbTs7ICovXFxuIH1cXG5cXG4gLnRhc2staGVhZGluZyB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogbGlnaHRibHVlIDJweCBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjMwLCAxNzMpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGJvcmRlcjogbGlnaHRibHVlIDJweCBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjE3LCAxNzMpO1xcbn1cXG5cXG4gLnN2Zy1jbGFzcyB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGJvcmRlcjogbGlnaHRibHVlIDJweCBzb2xpZDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiB9XFxuXFxuIC5idWxsZXQtaXRlbSB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGJvcmRlcjogb3JhbmdlIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gfVxcblxcbi50ZXh0LXN0eWxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcblxcbi5lZGl0LXRhc2sge1xcbiAgICBncmlkLWFyZWE6IG1vZGlmeTtcXG59XFxuXFxuIC50YXNrLWNhcmQge1xcbiAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgbWFyZ2luOiAwLjJyZW07XFxuIH1cXG5cXG5cXG4gKlt0eXBlPSdidXR0b24nXSB7XFxuICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICBib3JkZXI6IGxpZ2h0c2t5Ymx1ZSAycHggc29saWQ7XFxuICAgICBib3gtc2hhZG93OiAycHggMnB4IGxpZ2h0Ymx1ZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gfVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbn1cXG5cXG50ZXh0YXJlYSwgc2VsZWN0LCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xcbn1cXG5cXG4ubGlzdC1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVSxFQUFFLGVBQWU7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0FBRUY7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQzFCOztDQUVBO0tBQ0ksYUFBYTtLQUNiLG1CQUFtQjtLQUNuQix1QkFBdUI7S0FDdkIsMkJBQTJCO0NBQy9COztDQUVBO0tBQ0ksYUFBYTtLQUNiLDRDQUE0QztLQUM1QyxtREFBbUQ7S0FDbkQscUJBQXFCO0tBQ3JCLHFCQUFxQjtLQUNyQixtQkFBbUI7S0FDbkIsdUJBQXVCO0NBQzNCOztDQUVBO0lBQ0csZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7Q0FFQztJQUNHLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQiwyQkFBMkI7Q0FDOUI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7Q0FFQztLQUNJLGVBQWU7S0FDZixjQUFjO0NBQ2xCOzs7Q0FHQTtLQUNJLGVBQWU7S0FDZixjQUFjO0tBQ2QsZ0JBQWdCO0tBQ2hCLDhCQUE4QjtLQUM5Qiw2QkFBNkI7S0FDN0IscUJBQXFCO0tBQ3JCLDJCQUEyQjtDQUMvQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFBRDg2O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgfVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU5REJEO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogMzMlO1xcbn1cXG5cXG4udGFzay1mb3JtID4gKiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWljb24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4ubGlzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gfVxcblxcbiAubGlzdC1oZWFkZXIge1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgIGp1c3RpZnktaXRlbXM6IHNwYWNlLWFyb3VuZDtcXG4gfVxcblxcbiAudGFzay1oZWFkZXIge1xcbiAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgM2ZyIDJmciAxZnIgMmZyO1xcbiAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gdGl0bGUgZGF0ZSBwcmlvcml0eSBtb2RpZnlcXFwiO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC8qIG1heC1oZWlnaHQ6IDNyZW07OyAqL1xcbiB9XFxuXFxuIC50YXNrLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IGxpZ2h0Ymx1ZSAycHggc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIzMCwgMTczKTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IGxpZ2h0Ymx1ZSAycHggc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIxNywgMTczKTtcXG59XFxuXFxuIC5zdmctY2xhc3Mge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IGxpZ2h0Ymx1ZSAycHggc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gfVxcblxcbiAuYnVsbGV0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBib3JkZXI6IG9yYW5nZSAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuIH1cXG5cXG4udGV4dC1zdHlsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4uZWRpdC10YXNrIHtcXG4gICAgZ3JpZC1hcmVhOiBtb2RpZnk7XFxufVxcblxcbiAudGFzay1jYXJkIHtcXG4gICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgIG1hcmdpbjogMC4ycmVtO1xcbiB9XFxuXFxuXFxuICpbdHlwZT0nYnV0dG9uJ10ge1xcbiAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgbWFyZ2luOiAwLjVyZW07XFxuICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgYm9yZGVyOiBsaWdodHNreWJsdWUgMnB4IHNvbGlkO1xcbiAgICAgYm94LXNoYWRvdzogMnB4IDJweCBsaWdodGJsdWU7XFxuICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuIH1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXG59XFxuXFxudGV4dGFyZWEsIHNlbGVjdCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuLmxpc3QtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkVFQzE7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW5kZXJMaXN0IGZyb20gJy4uL3JlbmRlci9yZW5kZXJMaXN0JztcbmltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrIGZyb20gJy4uL2xvY2FsU3RvcmFnZUhlbHBlci91cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcyc7XG5cbmNvbnN0IGxpc3RQcm90byA9IHtcbiAgICBhZGRUYXNrKHRhc2tPYmopIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2tPYmopO1xuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2sodGhpcy5uYW1lLCB0aGlzLnRhc2tzKTtcblxuICAgIH0sXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YXNrSWQgIT0gdGFza0lkKTtcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrKHRoaXMubmFtZSwgdGhpcy50YXNrcyk7XG4gICAgfSxcbiAgICBlZGl0VGFzayh0YXNrSWQsIG5ld1Rhc2spIHtcbiAgICAgICAgZm9yKGxldCBpaT0wOyBpaTx0aGlzLnRhc2tzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VyVGFza09iaiA9IHRoaXMudGFza3NbaWldO1xuICAgICAgICAgICAgaWYoY3VyVGFza09iai50YXNrSWQgPT0gdGFza0lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc1tpaV0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlVGFzayh0aGlzLm5hbWUsIHRoaXMudGFza3MpO1xuICAgIH0sXG4gICAgc2hvd0xpc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdCBvYmplY3QgOiBcIiwgdGhpcyk7XG4gICAgICAgIHJlbmRlckxpc3QodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAobGlzdG5hbWUsIHRhc2tzQXJyPVtdKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSB0YXNrc0FycjtcbiAgICBjb25zdCBuYW1lID0gbGlzdG5hbWU7XG4gICAgY29uc3QgbGlzdE9iaiA9IE9iamVjdC5jcmVhdGUobGlzdFByb3RvKTtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RPYmosIHt0YXNrcywgbmFtZX0pO1xuICAgIGNvbnNvbGUubG9nKCdMaXN0IE9iamVjdCBDcmVhdGVkOiAnLCBsaXN0T2JqKTtcbiAgICByZXR1cm4gbGlzdE9iajtcbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdEZhY3RvcnknO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrRmFjdG9yeSc7XG5pbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlTGlzdHMgZnJvbSAnLi4vbG9jYWxTdG9yYWdlSGVscGVyL3VwZGF0ZUxvY2FsU3RvcmFnZUxpc3RzJztcblxuY29uc3QgbGlzdHNQcm90byA9IHtcbiAgICBhZGRMaXN0KGxpc3RuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBMaXN0KGxpc3RuYW1lKTtcbiAgICAgICAgdGhpcy5saXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICAvL3VwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZUxpc3RzKHRoaXMubGlzdHMpO1xuICAgICAgICByZXR1cm4gbmV3TGlzdDtcbiAgICB9LFxuICAgIGRlbGV0ZUxpc3QobGlzdG5hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0cyA9IHRoaXMubGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdC5uYW1lICE9IGxpc3RuYW1lKTtcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VMaXN0cyh0aGlzLmxpc3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHM7XG4gICAgfSxcbiAgICBzaG93QWxsKCkge1xuICAgICAgICB0aGlzLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3Qgb2JqZWN0IGlzOiBcIiwgbGlzdCk7XG4gICAgICAgICAgICBsaXN0LnNob3dMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd0xpc3QobGlzdCkge1xuICAgICAgICBsaXN0LnNob3dMaXN0KCk7XG4gICAgfVxufVxuXG5cbmNvbnN0IGxpc3RzID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdHMgPSBbXTtcbiAgICBjb25zdCBzdG9yZWRMaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RzJykpO1xuICAgIFxuICAgIGlmKHN0b3JlZExpc3RzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcmV2aW91c2x5IHN0b3JlZCBsaXN0cyBhdmFpbGFibGUuJyk7XG4gICAgICAgIHN0b3JlZExpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBsaXN0IG9iamVjdHMgYW5kIHB1c2ggdGhlbSB0byBsaXN0cyBhcnJheVxuICAgICAgICAgICAgbGlzdHMucHVzaChMaXN0KGxpc3QubmFtZSwgbGlzdC50YXNrcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jcmVhdGUgdGFzayBvYmplY3RzIGFuZCBwdXNoIHRoZW0gdG8gdGFza3MgYXJyYXlcbiAgICAgICAgZm9yKGxldCBpaT0wOyBpaTxsaXN0cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpc3RPYmogPSBsaXN0c1tpaV07XG4gICAgICAgICAgICBmb3IobGV0IGpqPTA7IGpqPGN1ckxpc3RPYmoudGFza3MubGVuZ3RoOyBqaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VyVGFza09iaiA9IGN1ckxpc3RPYmoudGFza3NbampdO1xuICAgICAgICAgICAgICAgIGN1ckxpc3RPYmoudGFza3NbampdID0gVGFzayhjdXJUYXNrT2JqLnRpdGxlLCBjdXJUYXNrT2JqLmRlc2NyaXB0aW9uLCBjdXJUYXNrT2JqLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRhc2tPYmoucHJpb3JpdHksIGN1clRhc2tPYmoubm90ZXMsIGN1clRhc2tPYmoubGlzdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJldmlvdXMgbGlzdHMgYXZhaWxhYmxlLicpXG4gICAgICAgIGxpc3RzID0gW0xpc3QoJ0RlZmF1bHQgTGlzdCcpXTtcbiAgICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VMaXN0cyhsaXN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdHNPYmogPSBPYmplY3QuY3JlYXRlKGxpc3RzUHJvdG8pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGxpc3RzT2JqLCB7bGlzdHN9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RzOyIsImltcG9ydCByZW5kZXJUYXNrIGZyb20gJy4uL3JlbmRlci9yZW5kZXJUYXNrJztcblxuY29uc3QgdGFza1Byb3RvID0ge1xuICAgIHNob3dUYXNrKCkgeyBcbiAgICAgICAgcmVuZGVyVGFzayh0aGlzKTtcbiAgICB9LFxufVxuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0TmFtZSkge1xuXG4gICAgY29uc3QgdGFza0lkID0gKGxpc3ROYW1lK3RpdGxlKS5yZXBsYWNlQWxsKFwiIFwiLFwiXCIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUodGFza1Byb3RvKSwge3Rhc2tJZCwgbGlzdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXN9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZUxpc3RzKG5ld0xpc3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgSlNPTi5zdHJpbmdpZnkobmV3TGlzdHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTG9jYWxTdG9yYWdlTGlzdHM7IiwiZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlVGFza3MobGlzdE5hbWUsIHRhc2tzQXJyKSB7XG4gICAgY29uc3Qgc3RvcmVkTGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0cycpKTtcblxuICAgIGZvcihsZXQgaWk9MDsgaWk8c3RvcmVkTGlzdHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgIGlmKHN0b3JlZExpc3RzW2lpXS5uYW1lID09IGxpc3ROYW1lKSB7XG4gICAgICAgICAgICBzdG9yZWRMaXN0c1tpaV0udGFza3MgPSB0YXNrc0FycjtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkTGlzdHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3M7IiwiaW1wb3J0IHRhc2tNb2RhbCBmcm9tICcuLi90YXNrTW9kYWxzL2NyZWF0ZVRhc2tNb2RhbCc7XG5pbXBvcnQgbmV3U3ZnIGZyb20gJy4uL2Fzc2V0cy9hZGQuc3ZnJztcbmltcG9ydCBkZWxldGVTdmcgZnJvbSAnLi4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vZmFjdG9yeS90YXNrRmFjdG9yeSc7XG5pbXBvcnQgbGlzdHMgZnJvbSBcIi4uL2ZhY3RvcnkvbGlzdHNGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdE9iaikge1xuICAgIGNvbnN0IGxpc3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3Qtc2VjdGlvbicpO1xuICAgIGNvbnN0IGNhcmRIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1jb250YWluZXJcIiBpZD0nJHtsaXN0T2JqLm5hbWV9LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LWhlYWRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGlzdC1jYXJkJyB0eXBlPSdidXR0b24nIGlkPScke2xpc3RPYmoubmFtZX0nPjxwIGNsYXNzPSd0ZXh0LXN0eWxlJz4ke2xpc3RPYmoubmFtZX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nc3ZnLWNsYXNzJyB0aXRsZT0nQWRkIFRhc2snIHNyYz0ke25ld1N2Z30gaWQ9J2NyZWF0ZS10YXNrLSR7bGlzdE9iai5uYW1lfScvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3N2Zy1jbGFzcycgdGl0bGU9J0RlbGV0ZSBMaXN0JyBzcmM9JHtkZWxldGVTdmd9IGlkPSdkZWxldGUtbGlzdC0ke2xpc3RPYmoubmFtZX0nLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFzay1jb250YWluZXInIGlkPScke2xpc3RPYmoubmFtZX0tdGFzay1jb250YWluZXInPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgbGlzdFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXJkSFRNTCk7XG4gICAgbGlzdE9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5zaG93VGFzaygpKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZS10YXNrLSR7bGlzdE9iai5uYW1lfWApO1xuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlLWxpc3QtJHtsaXN0T2JqLm5hbWV9YCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNyZWF0ZSBhbmQgZGVsZXRlIHRhc2tzOiBcIiwgY3JlYXRlVGFzaywgZGVsZXRlTGlzdCk7XG4gICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGNyZWF0ZVRhc2tIYW5kbGVyKGxpc3RPYmopKTtcbiAgICBkZWxldGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZGVsZXRlTGlzdEhhbmRsZXIobGlzdE9iaikpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tIYW5kbGVyKGxpc3RPYmopIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlIHRhc2sgaGFuZGxlciBjYWxsZWQnKTtcbiAgICAvLyBjb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZS10YXNrLSR7bGlzdE5hbWV9YCk7XG4gICAgLy8gY3JlYXRlVGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgbW9kYWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWxFbGVtLmFwcGVuZENoaWxkKHRhc2tNb2RhbCgpKTtcbiAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtdGFzaycpO1xuXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tGb3JtKTtcbiAgICAgICAgaWYoZm9ybURhdGEuZ2V0KCd0aXRsZScpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBhbGVydCgnVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHkuJyk7XG4gICAgICAgIH0gZWxzZSBpZihmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoJ0R1ZSBkYXRlIGNhbm5vdCBiZSBlbXB0eS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgncHJpb3JpdHknKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmdldCgnbm90ZXMnKSxcbiAgICAgICAgICAgIGxpc3RPYmoubmFtZVxuICAgICAgICApOyAgICAgXG4gICAgICAgIGxpc3RPYmouYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgbW9kYWxFbGVtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdUYXNrLnNob3dUYXNrKCk7XG4gICAgICAgIG1vZGFsRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBtb2RhbEVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNyZWF0ZVRhc2tCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RIYW5kbGVyKGxpc3RPYmopIHtcbiAgICBjb25zb2xlLmxvZygnRGVsZXRlIGxpc3QgaGFuZGxlciBjYWxsZWQnKTtcbiAgICBpZihjb25maXJtKCdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgbGlzdD8nKSlcbiAgICB7ICAgY29uc3QgbGlzdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0T2JqLm5hbWUrJy1jb250YWluZXInKTtcbiAgICAgICAgbGlzdENvbnRhaW5lckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGxpc3RzLmRlbGV0ZUxpc3QobGlzdE9iai5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FmdGVyIGRlbGV0aW5nOiAnLCBsaXN0cyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJMaXN0OyIsImltcG9ydCBsaXN0c09iaiBmcm9tIFwiLi4vZmFjdG9yeS9saXN0c0ZhY3RvcnlcIjtcbmltcG9ydCB0YXNrTW9kYWwgZnJvbSAnLi4vdGFza01vZGFscy9tb2RpZnlUYXNrTW9kYWwnO1xuaW1wb3J0IHZpZXdTdmcgZnJvbSAnLi4vYXNzZXRzL3ZpZXcuc3ZnJztcbmltcG9ydCBkZWxldGVTdmcgZnJvbSAnLi4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSAnLi4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCBidWxsZXRTdmcgZnJvbSAnLi4vYXNzZXRzL2xpc3RpdGVtLnN2Zyc7XG5pbXBvcnQgdmlld1Rhc2tNb2RhbCBmcm9tICcuLi90YXNrTW9kYWxzL3ZpZXdUYXNrTW9kYWwnO1xuXG5mdW5jdGlvbiBnZXRUYXNrSHRtbCh0YXNrSWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YXNrLWhlYWRlcicgaWQ9J3Rhc2staGVhZGVyLSR7dGFza0lkfSc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9JHtidWxsZXRTdmd9IGNsYXNzPSdidWxsZXQtaXRlbScgdGl0bGU9J0RvIGl0IHdpdGggTG92ZSEnLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YXNrLXRpdGxlIHRhc2staGVhZGluZycgdHlwZT0nYnV0dG9uJz4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2R1ZS1kYXRlIHRhc2staGVhZGluZycgdGl0bGU9J0R1ZSBEYXRlJz4ke2R1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJpb3JpdHkgdHlwZT0nYnV0dG9uJyB0aXRsZT0nUHJpb3JpdHknIHRhc2staGVhZGluZyc+JHtwcmlvcml0eX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdlZGl0LXRhc2snPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzdmctY2xhc3MnIHRpdGxlPSdWaWV3IFRhc2snIHNyYz0ke3ZpZXdTdmd9IGlkPSd2aWV3LXRhc2stJHt0YXNrSWR9Jy8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3N2Zy1jbGFzcycgdGl0bGU9J0VkaXQgVGFzaycgc3JjPSR7ZWRpdFN2Z30gaWQ9J21vZGlmeS10YXNrLSR7dGFza0lkfScvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzdmctY2xhc3MnIHRpdGxlPSdEZWxldGUgVGFzaycgc3JjPSR7ZGVsZXRlU3ZnfSBpZD0nZGVsZXRlLXRhc2stJHt0YXNrSWR9Jy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2sodGFza09iaikge1xuICAgICAgICBjb25zdCBsaXN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tPYmoubGlzdE5hbWUrJy10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB1aVRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVpVGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkJyk7XG4gICAgICAgIHVpVGFza0VsZW1lbnQuaW5uZXJIVE1MID0gZ2V0VGFza0h0bWwodGFza09iai50YXNrSWQsIHRhc2tPYmoudGl0bGUsIHRhc2tPYmouZHVlRGF0ZSwgdGFza09iai5wcmlvcml0eSk7XG4gICAgICAgIGxpc3RUYXNrQ29udGFpbmVyLmFwcGVuZCh1aVRhc2tFbGVtZW50KTtcbiAgICAgICAgY29uc3QgbGlzdE9iaiA9IGxpc3RzT2JqLmxpc3RzLmZpbHRlcihvYmogPT4gb2JqLm5hbWUgPT0gdGFza09iai5saXN0TmFtZSlbMF07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGUtdGFzay0ke3Rhc2tPYmoudGFza0lkfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZGVsZXRlVGFza0hhbmRsZXIobGlzdE9iaiwgdGFza09iaikpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbW9kaWZ5LXRhc2stJHt0YXNrT2JqLnRhc2tJZH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGVkaXRUYXNrSGFuZGxlcihsaXN0T2JqLCB0YXNrT2JqKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3LXRhc2stJHt0YXNrT2JqLnRhc2tJZH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHZpZXdUYXNrSGFuZGxlcih0YXNrT2JqKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tIYW5kbGVyKGxpc3RPYmosIHRhc2tPYmopIHtcbiAgICBjb25zb2xlLmxvZygnSW5zaWRlIGRlbGV0ZSB0YXNrIGhhbmRsZXInKTtcbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2staGVhZGVyLSR7dGFza09iai50YXNrSWR9YCk7XG4gICAgdGFza0hlYWRlci5yZW1vdmUoKTtcbiAgICBsaXN0T2JqLmRlbGV0ZVRhc2sodGFza09iai50YXNrSWQpO1xufVxuXG5mdW5jdGlvbiB2aWV3VGFza0hhbmRsZXIodGFza09iaikge1xuICAgIGNvbnN0IG1vZGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsRWxlbS5hcHBlbmRDaGlsZCh2aWV3VGFza01vZGFsKHRhc2tPYmopKTtcbiAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgXG4gICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXZpZXctdGFzaycpO1xuICAgIGNsb3NlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgbW9kYWxFbGVtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tIYW5kbGVyKGxpc3RPYmosIHRhc2tPYmopIHtcbiAgICBjb25zdCBtb2RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbEVsZW0uYXBwZW5kQ2hpbGQodGFza01vZGFsKCkpO1xuICAgIG1vZGFsRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLnRpdGxlLnZhbHVlID0gdGFza09iai50aXRsZTtcbiAgICB0YXNrRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tPYmouZGVzY3JpcHRpb247XG4gICAgdGFza0Zvcm0ubm90ZXMudmFsdWUgPSB0YXNrT2JqLm5vdGVzO1xuICAgIHRhc2tGb3JtLmR1ZURhdGUudmFsdWUgPSB0YXNrT2JqLmR1ZURhdGU7XG4gICAgdGFza0Zvcm0ucHJpb3JpdHkudmFsdWUgPSB0YXNrT2JqLnByaW9yaXR5O1xuICAgIFxuICAgIGNvbnN0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtZWRpdC10YXNrJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC10YXNrJyk7XG5cblxuICAgIHNhdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAvL2NoYW5nZSB0YXNrIG9iaiBwcm9wZXJ0aWVzXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgZWRpdCB0YXNrIGhhbmRsZXInKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICB0YXNrT2JqLnRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpO1xuICAgICAgICB0YXNrT2JqLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICB0YXNrT2JqLmR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKTtcbiAgICAgICAgdGFza09iai5wcmlvcml0eSA9IGZvcm1EYXRhLmdldCgncHJpb3JpdHknKTtcbiAgICAgICAgdGFza09iai5ub3RlcyA9IGZvcm1EYXRhLmdldCgnbm90ZXMnKTtcbiAgICAgICAgY29uc3QgcHJldlRhc2tJZCA9IHRhc2tPYmoudGFza0lkO1xuICAgICAgICB0YXNrT2JqLnRhc2tJZCA9ICh0YXNrT2JqLmxpc3ROYW1lK3Rhc2tPYmoudGl0bGUpLnJlcGxhY2VBbGwoXCIgXCIsXCJcIik7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IERPTSBlbGVtZW50IHdpdGggdGhlIG5ldyB0YXNrIHByb3BlcnRpZXNcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICAgICAgICBuZXdOb2RlLmlubmVySFRNTCA9IGdldFRhc2tIdG1sKHRhc2tPYmoudGFza0lkLCB0YXNrT2JqLnRpdGxlLCB0YXNrT2JqLmR1ZURhdGUsIHRhc2tPYmoucHJpb3JpdHkpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJldiBhbmQgbmV3IHRhc2sgaWQgYXJlOiAnLCBwcmV2VGFza0lkLCB0YXNrT2JqLnRhc2tJZCk7XG4gICAgICAgIC8vcmVuZGVyIHRoZSBjaGFuZ2VzIGJ5IHJlcGxhY2luZyB0aGUgb2xkIG5vZGUgd2l0aCBuZXcgbm9kZSBpbiBET01cbiAgICAgICAgY29uc3Qgb2xkTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWhlYWRlci0nK3ByZXZUYXNrSWQpO1xuICAgICAgICBvbGROb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGUtdGFzay0ke3Rhc2tPYmoudGFza0lkfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZGVsZXRlVGFza0hhbmRsZXIobGlzdE9iaiwgdGFza09iaikpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbW9kaWZ5LXRhc2stJHt0YXNrT2JqLnRhc2tJZH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGVkaXRUYXNrSGFuZGxlcihsaXN0T2JqLCB0YXNrT2JqKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3LXRhc2stJHt0YXNrT2JqLnRhc2tJZH1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHZpZXdUYXNrSGFuZGxlcih0YXNrT2JqKSk7XG4gICAgICAgIG1vZGFsRWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsIGVkaXQgaXMgY2FsbGVkJyk7XG4gICAgICAgIG1vZGFsRWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2s7IiwiZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFbGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsXCIpO1xuICAgIGNvbnN0IGZvcm0gPSAnXFxcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBpZD1cInRhc2stZm9ybVwiIGNsYXNzPVwidGFzay1mb3JtXCI+XFxcbiAgICAgICAgICAgICAgICBUaXRsZTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRhc2stdGl0bGVcIiByZXF1aXJlZC8+PGJyPlxcXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRleHRhcmVhXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uXCIgY29scz1cIjEwXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPjxicj5cXFxuICAgICAgICAgICAgICAgIE5vdGVzOiA8dGV4dGFyZWEgbmFtZT1cIm5vdGVzXCIgaWQ9XCJ0YXNrLW5vdGVzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT48YnI+XFxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInRhc2stcHJpb3JpdHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUDBcIj5QMDwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQMVwiPlAxPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlAyXCI+UDI8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUDNcIj5QMzwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+PGJyPlxcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cInRhc2stZGF0ZVwiIHJlcXVpcmVkPjxicj5cXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLXRhc2tcIj5TYXZlIHRhc2s8L2J1dHRvbj5cXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLXRhc2tcIj5DYW5jZWw8L2J1dHRvbj5cXFxuICAgICAgICAgICAgPC9mb3JtPlxcXG4gICAgICAgICc7XG4gICAgZGl2RWxlbS5pbm5lckhUTUwgPSBmb3JtO1xuICAgIHJldHVybiBkaXZFbGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTW9kYWw7IiwiZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFbGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBgXFxcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBpZD1cInRhc2stZm9ybVwiIGNsYXNzPVwidGFzay1mb3JtXCI+XFxcbiAgICAgICAgICAgICAgICBUaXRsZTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRhc2stdGl0bGVcIi8+PGJyPlxcXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRleHRhcmVhXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uXCIgY29scz1cIjEwXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPjxicj5cXFxuICAgICAgICAgICAgICAgIE5vdGVzOiA8dGV4dGFyZWEgbmFtZT1cIm5vdGVzXCIgaWQ9XCJ0YXNrLW5vdGVzXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT48YnI+XFxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInRhc2stcHJpb3JpdHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUDBcIj5QMDwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQMVwiPlAxPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlAyXCI+UDI8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUDNcIj5QMzwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+PGJyPlxcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiBpZD1cInRhc2stZGF0ZVwiPjxicj5cXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic2F2ZS1lZGl0LXRhc2tcIj5TYXZlIENoYW5nZXM8L2J1dHRvbj5cXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWVkaXQtdGFza1wiPkNhbmNlbDwvYnV0dG9uPlxcXG4gICAgICAgICAgICA8L2Zvcm0+XFxcbiAgICAgICAgYDtcbiAgICBkaXZFbGVtLmlubmVySFRNTCA9IGZvcm07XG4gICAgcmV0dXJuIGRpdkVsZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2RhbDsiLCJmdW5jdGlvbiB2aWV3VGFza01vZGFsKHRhc2spIHtcbiAgICBjb25zdCBkaXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RWxlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbFwiKTtcbiAgICBjb25zdCBmb3JtID0gYFxcXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgaWQ9XCJ0YXNrLWZvcm1cIiBjbGFzcz1cInRhc2stZm9ybVwiPlxcXG4gICAgICAgICAgICAgICAgVGl0bGU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0YXNrLXRpdGxlXCIgdmFsdWU9JHt0YXNrLnRpdGxlfSBkaXNhYmxlZC8+PGJyPlxcXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cInRleHRhcmVhXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uXCIgY29scz1cIjEwXCIgcm93cz1cIjVcIiBkaXNhYmxlZD4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT48YnI+XFxcbiAgICAgICAgICAgICAgICBOb3RlczogPHRleHRhcmVhIG5hbWU9XCJub3Rlc1wiIGlkPVwidGFzay1ub3Rlc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGRpc2FibGVkPiR7dGFzay5ub3Rlc308L3RleHRhcmVhPjxicj5cXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XFxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInRhc2stcHJpb3JpdHlcIiB2YWx1ZT0ke3Rhc2sudGl0bGV9IGRpc2FibGVkLz48YnI+XFxcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XFxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwidGFzay1kYXRlXCIgdmFsdWU9JHt0YXNrLmR1ZURhdGV9IGRpc2FibGVkIC8+PGJyPlxcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZS12aWV3LXRhc2tcIj5DbG9zZTwvYnV0dG9uPlxcXG4gICAgICAgICAgICA8L2Zvcm0+XFxcbiAgICAgICAgYDtcbiAgICBkaXZFbGVtLmlubmVySFRNTCA9IGZvcm07XG4gICAgcmV0dXJuIGRpdkVsZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdUYXNrTW9kYWw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbGlzdHMgZnJvbSBcIi4vZmFjdG9yeS9saXN0c0ZhY3RvcnlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxpc3RzLnNob3dBbGwoKTtcbnNob3dDcmVhdGVMaXN0KCk7XG5cbmZ1bmN0aW9uIHNob3dMaXN0TW9kYWwobGlzdE1vZGFsRWxlbSkge1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgc2hvdyBtb2RhbCcpO1xuICAgIGxpc3RNb2RhbEVsZW0uaW5uZXJIVE1MID0gJ1xcXG4gICAgPGxhYmVsIGZvcj1cImxpc3RuYW1lXCIgY2xhc3M9XCJ0ZXh0LXN0eWxlXCI+TmFtZTombmJzcDs8L2xhYmVsPlxcXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpc3RuYW1lXCIgaWQ9XCJuZXdsaXN0XCIgcmVxdWlyZWQvPlxcXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtbGlzdFwiPlNhdmU8L2J1dHRvbj4mbmJzcDsmbmJzcDtcXFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWxpc3RcIj5DYW5jZWw8L2J1dHRvbj5cXFxuICAgICc7XG59XG5cbmZ1bmN0aW9uIGhpZGVMaXN0TW9kYWwobGlzdE1vZGFsRWxlbSkge1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgaGlkZSBtb2RhbCcpO1xuICAgIGxpc3RNb2RhbEVsZW0uaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gc2hvd0NyZWF0ZUxpc3QoKSB7XG4gICAgY29uc3QgbGlzdE1vZGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW1vZGFsJyk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdCcpO1xuICAgICAgICBjcmVhdGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc2hvd0xpc3RNb2RhbChsaXN0TW9kYWxFbGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcbiAgICAgICAgICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdsaXN0Jyk7XG4gICAgICAgICAgICAgICAgaWYobGlzdE5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkxpc3QgbmFtZSBjYW5ub3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGxpc3RzLmFkZExpc3QobGlzdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lSW5wdXQudmFsdWU9Jyc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RzLnNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlTGlzdE1vZGFsKGxpc3RNb2RhbEVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtbGlzdCcpO1xuICAgICAgICAgICAgY2FuY2VsTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBoaWRlTGlzdE1vZGFsKGxpc3RNb2RhbEVsZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY3JlYXRpbmcgdGhlIGxpc3Q6IFwiLCBlcnJvcik7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==