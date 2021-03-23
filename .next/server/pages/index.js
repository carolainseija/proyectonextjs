module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/KawaiiHeader/AnimatedHeader.tsx":
/*!****************************************************!*\
  !*** ./components/KawaiiHeader/AnimatedHeader.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SVGIcons/Avocado */ "./components/SVGIcons/Avocado.tsx");
/* harmony import */ var _KawaiiHeader_ProductCanast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../KawaiiHeader/ProductCanast */ "./components/KawaiiHeader/ProductCanast.tsx");

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\KawaiiHeader\\AnimatedHeader.tsx";





const AnimatedHeader = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  size: "huge",
  as: "h1",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginLeft: "700px"
    },
    children: ["TIENDA", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "58px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), "AVOS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_KawaiiHeader_ProductCanast__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedHeader);

/***/ }),

/***/ "./components/KawaiiHeader/ProductCanast.tsx":
/*!***************************************************!*\
  !*** ./components/KawaiiHeader/ProductCanast.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SVGIcons_Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SVGIcons/Basket */ "./components/SVGIcons/Basket.tsx");

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\KawaiiHeader\\ProductCanast.tsx";



const ProductCanast = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  style: {
    marginLeft: "450px"
  },
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SVGIcons_Basket__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    style: {
      fontSize: "15px",
      position: 'absolute',
      marginLeft: "-15px"
    },
    children: "Productos: (0)"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 20
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ProductCanast);

/***/ }),

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductSummary/AddToCart */ "./components/ProductSummary/AddToCart.tsx");

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductList\\ProductList.tsx";




const mapProductsToCards = products => products.map(({
  name,
  id,
  price,
  image
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  style: {
    display: "inline-block",
    marginLeft: "150px",
    border: "1px solid rgb(180, 180, 180)"
  },
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    as: "a",
    header: name,
    image: image,
    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      style: {
        backgroundColor: "orange",
        color: 'dimgray'
      },
      children: [" Precio: ", price, " $ "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 7
}, undefined));

const ProductList = ({
  products
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
  itemsPerRow: 2,
  stackable: true,
  children: mapProductsToCards(products)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 29,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./components/ProductSummary/AddToCart.tsx":
/*!*************************************************!*\
  !*** ./components/ProductSummary/AddToCart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductSummary\\AddToCart.tsx";



const AddToCart = () => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      placeholder: "Cantidad",
      min: 1,
      step: 1,
      error: !!error,
      action: {
        fontSize: "30px",
        className: "carts",
        content: 'Añadir al Carro',
        icon: 'plus cart'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./components/SVGIcons/Avocado.tsx":
/*!*****************************************!*\
  !*** ./components/SVGIcons/Avocado.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\SVGIcons\\Avocado.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Avocado = (_ref) => {
  let {
    size = '34px'
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["size"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: size,
    height: size,
    viewBox: "-99 0 511 512"
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M187.8 38.09c-20.324 20.32-27.742 48.996-30.41 69.043-1.723 12.91 9.266 23.895 22.176 22.176 20.047-2.672 48.719-10.09 69.043-30.41 20.32-20.324 27.742-48.996 30.41-69.047 1.719-12.906-9.266-23.895-22.176-22.176-20.047 2.672-48.723 10.09-69.043 30.414z",
      fill: "#8ee2cf"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M198.63 95.566a7.496 7.496 0 01-5.305-2.195 7.509 7.509 0 010-10.61l39.145-39.144c2.93-2.926 7.68-2.926 10.605 0a7.502 7.502 0 010 10.609L203.93 93.37a7.48 7.48 0 01-5.3 2.195z",
      fill: "#6fce91"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M156.62 115.68c-8.629 0-15.621-6.992-15.621-15.621 0-22.523-18.324-40.848-40.848-40.848-8.629 0-15.625-6.992-15.625-15.621s6.996-15.625 15.625-15.625c39.75 0 72.094 32.344 72.094 72.094 0 8.629-6.996 15.621-15.625 15.621z",
      fill: "#e1b89a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M172.24 100.06a71.81 71.81 0 00-2.86-20.043 123.29 123.29 0 00-33.098 1.031c3 5.684 4.712 12.148 4.712 19.012 0 8.63 6.992 15.621 15.62 15.621 8.63 0 15.626-6.992 15.626-15.62z",
      fill: "#d2996f"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M156.62 504.5C74.671 504.5 8 437.828 8 355.88c0-44.492 13.129-67.688 24.711-88.152 10.344-18.281 18.52-32.723 18.52-65.512 0-58.109 47.277-105.39 105.39-105.39 58.109 0 105.39 47.277 105.39 105.39 0 32.789 8.172 47.23 18.52 65.512 11.582 20.465 24.711 43.66 24.711 88.152 0 81.945-66.672 148.62-148.62 148.62z",
      fill: "#4e5660"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M250.63 470.89C89.4 448.304 64.94 206.77 120.97 103.04c-40.621 14.645-69.742 53.57-69.742 99.18 0 32.789-8.176 47.227-18.52 65.508-11.586 20.465-24.711 43.66-24.711 88.152 0 81.949 66.668 148.62 148.62 148.62 35.641 0 68.383-12.613 94.016-33.605z",
      fill: "#383c43"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M34.039 355.88c0-75.926 43.23-75.051 43.23-153.66 0-43.824 35.523-79.348 79.348-79.348 43.824 0 79.352 35.523 79.352 79.348 0 78.613 43.23 77.738 43.23 153.66 0 67.699-54.883 122.58-122.58 122.58-67.699 0-122.58-54.879-122.58-122.58z",
      fill: "#89d47f"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M105.57 141.48c-17.301 14.555-28.305 36.355-28.305 60.738 0 78.609-43.23 77.734-43.23 153.66 0 67.699 54.879 122.58 122.58 122.58 22.035 0 42.707-5.816 60.578-15.992-115.52-43.246-142.49-215.11-111.62-320.98z",
      fill: "#5ec783"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M199.05 313.44c-23.438-23.438-61.438-23.438-84.875 0s-23.438 61.434 0 84.871 61.438 23.438 84.875 0 23.438-61.434 0-84.871z",
      fill: "#e1b89a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M205.79 390.27c-64.918 10.973-95.234-59.492-62.641-92.875-26.656 6.117-46.547 29.969-46.547 58.48 0 33.145 26.871 60.016 60.016 60.016 20.348 0 38.316-10.137 49.172-25.621z",
      fill: "#d2996f"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M120.71 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719zM234.52 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M201.29 266.19a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zM156.622 423.4c37.23 0 67.516-30.289 67.516-67.516 0-37.23-30.285-67.516-67.516-67.516-37.227 0-67.516 30.285-67.516 67.516 0 37.227 30.289 67.516 67.516 67.516zm0-120.03c28.957 0 52.516 23.559 52.516 52.516 0 28.957-23.559 52.516-52.516 52.516-28.957 0-52.516-23.559-52.516-52.516 0-28.957 23.559-52.516 52.516-52.516zm130.43-39.332c-10.184-17.996-17.543-31-17.543-61.812 0-32.555-13.859-61.93-35.977-82.551 7.688-4.445 14.527-9.613 20.383-15.465 5.121-5.121 9.762-11.02 13.793-17.527a7.507 7.507 0 00-2.426-10.328 7.501 7.501 0 00-10.324 2.426c-3.426 5.531-7.347 10.516-11.652 14.82-6.18 6.18-13.703 11.508-22.41 15.879-12.328-8.57-26.43-14.754-41.645-17.863a79.24 79.24 0 00-4.734-19.902c4.812-11.242 11.043-20.773 18.586-28.312 18.746-18.746 45.547-25.727 64.73-28.281 3.816-.508 7.566.758 10.28 3.473 2.716 2.714 3.981 6.46 3.474 10.28-.883 6.626-2.157 13.09-3.782 19.216a7.501 7.501 0 005.32 9.175c4.005 1.055 8.11-1.32 9.176-5.324 1.79-6.738 3.188-13.832 4.153-21.086 1.133-8.488-1.688-16.824-7.73-22.867-6.048-6.047-14.38-8.867-22.872-7.734-21.477 2.86-51.64 10.828-73.355 32.543-6.379 6.379-11.945 13.89-16.637 22.422a80.293 80.293 0 00-10.227-12.152c-14.953-14.566-34.656-22.59-55.484-22.59-12.75 0-23.125 10.37-23.125 23.125 0 12.75 10.375 23.12 23.125 23.12 15.57 0 28.72 10.657 32.352 25.22-50.695 11.078-88.77 56.316-88.77 110.29 0 30.812-7.36 43.816-17.547 61.82C14.145 285.323.5 309.432.5 355.893c0 32.602 9.989 63.852 28.883 90.383a7.5 7.5 0 0010.461 1.754c3.371-2.403 4.16-7.086 1.758-10.457C24.524 413.6 15.5 385.353 15.5 355.893c0-42.512 12.609-64.793 23.738-84.457 10.457-18.48 19.492-34.438 19.492-69.203 0-53.977 43.914-97.887 97.887-97.887 4.836 0 9.586.355 14.23 1.035.07.015.145.02.219.031 47.148 7.004 83.44 47.754 83.44 96.82 0 34.766 9.032 50.723 19.493 69.207 11.129 19.66 23.738 41.941 23.738 84.453 0 77.816-63.305 141.12-141.12 141.12-33.891 0-66.676-12.246-92.32-34.48-3.13-2.715-7.867-2.375-10.582.754a7.506 7.506 0 00.754 10.582c28.37 24.598 64.648 38.145 102.15 38.145 86.086 0 156.12-70.035 156.12-156.12 0-46.465-13.645-70.574-25.688-91.848zm-130.43-174.7c-3.113 0-6.195.133-9.246.379-4.746-21.844-24.145-37.996-47.223-37.996-4.48 0-8.125-3.645-8.125-8.121 0-4.48 3.644-8.125 8.125-8.125 16.895 0 32.883 6.512 45.016 18.332 10.016 9.758 16.48 22.23 18.69 35.77a113.892 113.892 0 00-7.237-.238zm0 396.63c71.727 0 130.08-58.352 130.08-130.08 0-39.609-11.34-59.645-22.309-79.02-10.762-19.016-20.926-36.973-20.926-74.645 0-47.891-38.957-86.852-86.848-86.852s-86.852 38.961-86.852 86.852c0 37.672-10.164 55.629-20.922 74.645-10.969 19.375-22.309 39.41-22.309 79.02.004 71.727 58.355 130.08 130.08 130.08zm-94.719-201.71c11.242-19.867 22.871-40.406 22.871-82.031 0-39.617 32.23-71.848 71.848-71.848 39.617 0 71.852 32.23 71.852 71.848 0 41.625 11.625 62.164 22.871 82.031 10.469 18.5 20.359 35.977 20.359 71.633 0 63.453-51.625 115.08-115.08 115.08-63.453 0-115.08-51.625-115.08-115.08 0-35.656 9.89-53.133 20.359-71.633zm50.055-18.059a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zm44.664 5.695a23.107 23.107 0 0017.43-7.941 7.492 7.492 0 00-.727-10.578 7.497 7.497 0 00-10.582.726c-1.543 1.774-3.777 2.793-6.12 2.793s-4.575-1.019-6.122-2.793a7.492 7.492 0 00-10.578-.726 7.496 7.496 0 00-.73 10.578 23.112 23.112 0 0017.43 7.941z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Avocado);

/***/ }),

/***/ "./components/SVGIcons/Basket.tsx":
/*!****************************************!*\
  !*** ./components/SVGIcons/Basket.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\SVGIcons\\Basket.tsx";


const Basket = ({
  size = '34px'
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: size,
  height: size,
  viewBox: "0 0 512 512",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M490.1 292.03H21.9c-7.953 0-14.4-6.447-14.4-14.4v-34.391c0-7.953 6.447-14.4 14.4-14.4h468.2c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.952-6.447 14.4-14.4 14.4z",
    fill: "#FAD97E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M490.1 228.84h-38.076c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.953-6.447 14.4-14.4 14.4H490.1c7.953 0 14.4-6.447 14.4-14.4V243.24c0-7.953-6.447-14.4-14.4-14.4z",
    opacity: 0.1
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M466.42 292.03H45.57l21.084 153.34c2.439 17.741 17.599 30.959 35.507 30.959h307.67c17.908 0 33.068-13.218 35.507-30.959l21.084-153.34z",
    fill: "#A16B4E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M45.576 292.03l3.561 25.899h375.65l-17.523 127.44c-2.439 17.741-17.599 30.959-35.507 30.959h38.076c17.908 0 33.068-13.218 35.507-30.959l17.523-127.44 3.561-25.899H45.574z",
    opacity: 0.1
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M427.22 228.84h-47.241v-94.743c0-28.224-22.962-51.186-51.186-51.186h-145.59c-28.224 0-51.186 22.962-51.186 51.186v94.743H84.776v-94.743c0-54.272 44.154-98.427 98.427-98.427h145.59c54.273 0 98.427 44.154 98.427 98.427v94.743z",
    fill: "#A16B4E"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    opacity: 0.1,
    d: "M84.78 202.94H132.02V228.84199999999998H84.78z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    opacity: 0.1,
    d: "M379.98 202.94H427.22V228.84199999999998H379.98z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    fill: "#FAD97E",
    d: "M193.91 35.672H318.09000000000003V82.912H193.91z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
    opacity: 0.1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M152.94 438.94l6.718-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717-6.717-6.718 6.717-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.607 10.606l6.717 6.718-6.717 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 13.435 13.435-6.718 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 6.717 6.717c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197a7.5 7.5 0 000-10.606l-6.721-6.718zM426.23 363.1l6.718-6.718a7.5 7.5 0 00-.001-10.607 7.498 7.498 0 00-10.606 0l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.606 0 7.5 7.5 0 00-.001 10.607l6.718 6.718-6.718 6.718a7.5 7.5 0 00.001 10.607c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.304-2.197l6.717-6.717 6.717 6.717a7.476 7.476 0 005.304 2.197 7.474 7.474 0 005.303-2.197 7.5 7.5 0 00.001-10.607l-6.72-6.718z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
    fill: "#F15B70",
    opacity: 0.3,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ellipse", {
      cx: 193.02,
      cy: 369.52,
      rx: 26.96,
      ry: 11.698
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ellipse", {
      cx: 318.98,
      cy: 369.52,
      rx: 26.96,
      ry: 11.698
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M490.1 221.34h-55.378v-87.243c0-58.408-47.519-105.93-105.93-105.93h-145.59c-58.408 0-105.93 47.519-105.93 105.93v87.243H21.894c-12.076 0-21.9 9.824-21.9 21.9v34.391c0 12.076 9.824 21.9 21.9 21.9h17.137l14.35 104.36a7.5 7.5 0 1014.859-2.044l-14.07-102.32h346.6c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H21.9a6.907 6.907 0 01-6.9-6.9v-34.391c0-3.805 3.096-6.9 6.9-6.9h62.868l.01.001.01-.001h47.221l.01.001.01-.001h247.94l.01.001.01-.001h47.221l.01.001.01-.001h62.867c3.805 0 6.9 3.095 6.9 6.9v34.391c0 3.805-3.096 6.9-6.9 6.9h-56.094c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h23.817l-19.913 144.82c-1.92 13.956-13.99 24.48-28.077 24.48H102.16c-14.087 0-26.157-10.524-28.077-24.481l-1.696-12.333a7.5 7.5 0 10-14.859 2.044l1.696 12.332c2.935 21.343 21.394 37.438 42.937 37.438h307.67c21.543 0 40.002-16.095 42.936-37.438l20.193-146.86h17.137c12.076 0 21.9-9.824 21.9-21.9v-34.391c0-12.073-9.824-21.899-21.9-21.899zM296.76 43.17h13.835v32.241H296.76V43.17zm-33.255 0h18.255v32.241h-18.255V43.17zm-33.255 0h18.255v32.241H230.25V43.17zm-28.835 0h13.835v32.241h-13.835V43.17zm171.07 178.17h-232.96v-48.044c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.044h-32.24v-87.243c0-50.137 40.79-90.927 90.927-90.927h3.205v32.241h-3.205c-32.36 0-58.686 26.327-58.686 58.686V143c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-8.903c0-24.088 19.598-43.686 43.686-43.686h145.59c24.089 0 43.687 19.598 43.687 43.686v87.243h-.002zm47.241 0h-32.24v-87.243c0-32.359-26.326-58.686-58.687-58.686h-3.205v-32.24h3.205c50.137 0 90.927 40.79 90.927 90.927v87.242zm-93.24 122.15v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-125.96 0v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455a7.5 7.5 0 0015 0zm55.482 15.528a29.528 29.528 0 0022.26-10.137 7.499 7.499 0 00-.727-10.582 7.5 7.5 0 00-10.582.726c-2.765 3.173-6.757 4.993-10.951 4.993s-8.186-1.82-10.951-4.993a7.5 7.5 0 00-10.582-.726 7.5 7.5 0 00-.727 10.582 29.524 29.524 0 0022.26 10.137z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductList/ProductList */ "./components/ProductList/ProductList.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_KawaiiHeader_AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/KawaiiHeader/AnimatedHeader */ "./components/KawaiiHeader/AnimatedHeader.tsx");

var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\pages\\index.tsx";




const HomePage = () => {
  const {
    0: productList,
    1: setProductList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.fetch('/api/avo').then(response => response.json()).then(({
      data
    }) => {
      setProductList(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_KawaiiHeader_AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: "40px",
          fontFamily: "monospace",
          backgroundColor: "orange",
          textAlign: "center"
        },
        children: " La primera tienda Online de Aguacates en Uruguay!!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      products: productList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9LYXdhaWlIZWFkZXIvQW5pbWF0ZWRIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvS2F3YWlpSGVhZGVyL1Byb2R1Y3RDYW5hc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QvUHJvZHVjdExpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdFN1bW1hcnkvQWRkVG9DYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NWR0ljb25zL0F2b2NhZG8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU1ZHSWNvbnMvQmFza2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkFuaW1hdGVkSGVhZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiUHJvZHVjdENhbmFzdCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJtYXBQcm9kdWN0c1RvQ2FyZHMiLCJwcm9kdWN0cyIsIm1hcCIsIm5hbWUiLCJpZCIsInByaWNlIiwiaW1hZ2UiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlByb2R1Y3RMaXN0IiwiQWRkVG9DYXJ0IiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiY2xhc3NOYW1lIiwiY29udGVudCIsImljb24iLCJBdm9jYWRvIiwic2l6ZSIsIm90aGVyUHJvcHMiLCJCYXNrZXQiLCJIb21lUGFnZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1BLGNBQWMsR0FBRyxtQkFDckIscUVBQUMsd0RBQUQ7QUFBUSxNQUFJLEVBQUMsTUFBYjtBQUFvQixJQUFFLEVBQUMsSUFBdkI7QUFBQSx5QkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsZ0JBQVUsRUFBRSxRQUEvQjtBQUF5Q0MsZ0JBQVUsRUFBRTtBQUFyRCxLQUFaO0FBQUEsc0NBRUUscUVBQUMseURBQUQ7QUFBUyxVQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlC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QmtDLG9CQUFVLEVBQUUsV0FBL0I7QUFBNEN4Qix5QkFBZSxFQUFFLFFBQTdEO0FBQXVFeUIsbUJBQVMsRUFBRTtBQUFsRixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLHFFQUFDLDJFQUFEO0FBQWEsY0FBUSxFQUFFVjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FyQkQ7O0FBdUJlRCx1RUFBZixFOzs7Ozs7Ozs7OztBQzNCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IEF2b2NhZG8gZnJvbSAnLi4vU1ZHSWNvbnMvQXZvY2Fkbyc7XHJcbmltcG9ydCBQcm9kdWN0Q2FuYXN0IGZyb20gJy4uL0thd2FpaUhlYWRlci9Qcm9kdWN0Q2FuYXN0JztcclxuXHJcblxyXG5jb25zdCBBbmltYXRlZEhlYWRlciA9ICgpID0+IChcclxuICA8SGVhZGVyIHNpemU9XCJodWdlXCIgYXM9XCJoMVwiPlxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luTGVmdDogXCI3MDBweFwiIH19PlxyXG4gICAgICBUSUVOREFcclxuICAgICAgPEF2b2NhZG8gc2l6ZT1cIjU4cHhcIiAvPlxyXG4gICAgQVZPU1xyXG4gIDxQcm9kdWN0Q2FuYXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L0hlYWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRIZWFkZXIiLCJpbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJhc2tldCBmcm9tICcuLi9TVkdJY29ucy9CYXNrZXQnO1xyXG5cclxuY29uc3QgUHJvZHVjdENhbmFzdCA9ICgpID0+IChcclxuICAgIFxyXG4gICAgXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNDUwcHhcIiB9fT5cclxuICAgICAgICA8QmFza2V0IC8+IDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgcG9zaXRpb246ICdhYnNvbHV0ZScsIG1hcmdpbkxlZnQ6IFwiLTE1cHhcIiB9fT5Qcm9kdWN0b3M6ICgwKTwvcD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FuYXN0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi4vUHJvZHVjdFN1bW1hcnkvQWRkVG9DYXJ0JztcclxuXHJcbnR5cGUgUHJvZHVjdExpc3RQcm9wcyA9IHtcclxuICBwcm9kdWN0czogVFByb2R1Y3RbXVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9kdWN0c1RvQ2FyZHMgPSAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+XHJcbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxyXG5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiBcIjE1MHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApXCJ9fT5cclxuICAgICAgPENhcmRcclxuICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgIGhlYWRlcj17bmFtZX1cclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgbWV0YT17PENhcmQuTWV0YSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgLCBjb2xvcjogJ2RpbWdyYXknfX0+IFByZWNpbzoge3ByaWNlfSAkIDwvQ2FyZC5NZXRhPn1cclxuICAgICAgLz5cclxuXHJcbjxBZGRUb0NhcnQgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHJcbiAgKSlcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgcHJvZHVjdHMgfTogUHJvZHVjdExpc3RQcm9wcykgPT4gKFxyXG4gIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBzdGFja2FibGU+XHJcbiAgICB7bWFwUHJvZHVjdHNUb0NhcmRzKHByb2R1Y3RzKX1cclxuICA8L0NhcmQuR3JvdXA+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgSWNvbiwgVHJhbnNpdGlvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IEFkZFRvQ2FydCA9ICgpID0+IHtcclxuIFxyXG5jb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDYW50aWRhZFwiXHJcbiAgICAgICAgbWluPXsxfVxyXG4gICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgICBjbGFzc05hbWU6XCJjYXJ0c1wiLFxyXG4gICAgICAgICAgY29udGVudDogJ0HDsWFkaXIgYWwgQ2Fycm8nLFxyXG4gICAgICAgICAgaWNvbjogJ3BsdXMgY2FydCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgXHJcbiAgICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU1ZHSWNvblByb3BzIH0gZnJvbSAnLi9zdmcudHlwZXMnXHJcblxyXG5jb25zdCBBdm9jYWRvID0gKHsgc2l6ZSA9ICczNHB4JywgLi4ub3RoZXJQcm9wcyB9OiBTVkdJY29uUHJvcHMpID0+IChcclxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCItOTkgMCA1MTEgNTEyXCIgey4uLm90aGVyUHJvcHN9PlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xODcuOCAzOC4wOWMtMjAuMzI0IDIwLjMyLTI3Ljc0MiA0OC45OTYtMzAuNDEgNjkuMDQzLTEuNzIzIDEyLjkxIDkuMjY2IDIzLjg5NSAyMi4xNzYgMjIuMTc2IDIwLjA0Ny0yLjY3MiA0OC43MTktMTAuMDkgNjkuMDQzLTMwLjQxIDIwLjMyLTIwLjMyNCAyNy43NDItNDguOTk2IDMwLjQxLTY5LjA0NyAxLjcxOS0xMi45MDYtOS4yNjYtMjMuODk1LTIyLjE3Ni0yMi4xNzYtMjAuMDQ3IDIuNjcyLTQ4LjcyMyAxMC4wOS02OS4wNDMgMzAuNDE0elwiXHJcbiAgICAgIGZpbGw9XCIjOGVlMmNmXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTE5OC42MyA5NS41NjZhNy40OTYgNy40OTYgMCAwMS01LjMwNS0yLjE5NSA3LjUwOSA3LjUwOSAwIDAxMC0xMC42MWwzOS4xNDUtMzkuMTQ0YzIuOTMtMi45MjYgNy42OC0yLjkyNiAxMC42MDUgMGE3LjUwMiA3LjUwMiAwIDAxMCAxMC42MDlMMjAzLjkzIDkzLjM3YTcuNDggNy40OCAwIDAxLTUuMyAyLjE5NXpcIlxyXG4gICAgICBmaWxsPVwiIzZmY2U5MVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNTYuNjIgMTE1LjY4Yy04LjYyOSAwLTE1LjYyMS02Ljk5Mi0xNS42MjEtMTUuNjIxIDAtMjIuNTIzLTE4LjMyNC00MC44NDgtNDAuODQ4LTQwLjg0OC04LjYyOSAwLTE1LjYyNS02Ljk5Mi0xNS42MjUtMTUuNjIxczYuOTk2LTE1LjYyNSAxNS42MjUtMTUuNjI1YzM5Ljc1IDAgNzIuMDk0IDMyLjM0NCA3Mi4wOTQgNzIuMDk0IDAgOC42MjktNi45OTYgMTUuNjIxLTE1LjYyNSAxNS42MjF6XCJcclxuICAgICAgZmlsbD1cIiNlMWI4OWFcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTcyLjI0IDEwMC4wNmE3MS44MSA3MS44MSAwIDAwLTIuODYtMjAuMDQzIDEyMy4yOSAxMjMuMjkgMCAwMC0zMy4wOTggMS4wMzFjMyA1LjY4NCA0LjcxMiAxMi4xNDggNC43MTIgMTkuMDEyIDAgOC42MyA2Ljk5MiAxNS42MjEgMTUuNjIgMTUuNjIxIDguNjMgMCAxNS42MjYtNi45OTIgMTUuNjI2LTE1LjYyelwiXHJcbiAgICAgIGZpbGw9XCIjZDI5OTZmXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTE1Ni42MiA1MDQuNUM3NC42NzEgNTA0LjUgOCA0MzcuODI4IDggMzU1Ljg4YzAtNDQuNDkyIDEzLjEyOS02Ny42ODggMjQuNzExLTg4LjE1MiAxMC4zNDQtMTguMjgxIDE4LjUyLTMyLjcyMyAxOC41Mi02NS41MTIgMC01OC4xMDkgNDcuMjc3LTEwNS4zOSAxMDUuMzktMTA1LjM5IDU4LjEwOSAwIDEwNS4zOSA0Ny4yNzcgMTA1LjM5IDEwNS4zOSAwIDMyLjc4OSA4LjE3MiA0Ny4yMyAxOC41MiA2NS41MTIgMTEuNTgyIDIwLjQ2NSAyNC43MTEgNDMuNjYgMjQuNzExIDg4LjE1MiAwIDgxLjk0NS02Ni42NzIgMTQ4LjYyLTE0OC42MiAxNDguNjJ6XCJcclxuICAgICAgZmlsbD1cIiM0ZTU2NjBcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMjUwLjYzIDQ3MC44OUM4OS40IDQ0OC4zMDQgNjQuOTQgMjA2Ljc3IDEyMC45NyAxMDMuMDRjLTQwLjYyMSAxNC42NDUtNjkuNzQyIDUzLjU3LTY5Ljc0MiA5OS4xOCAwIDMyLjc4OS04LjE3NiA0Ny4yMjctMTguNTIgNjUuNTA4LTExLjU4NiAyMC40NjUtMjQuNzExIDQzLjY2LTI0LjcxMSA4OC4xNTIgMCA4MS45NDkgNjYuNjY4IDE0OC42MiAxNDguNjIgMTQ4LjYyIDM1LjY0MSAwIDY4LjM4My0xMi42MTMgOTQuMDE2LTMzLjYwNXpcIlxyXG4gICAgICBmaWxsPVwiIzM4M2M0M1wiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0zNC4wMzkgMzU1Ljg4YzAtNzUuOTI2IDQzLjIzLTc1LjA1MSA0My4yMy0xNTMuNjYgMC00My44MjQgMzUuNTIzLTc5LjM0OCA3OS4zNDgtNzkuMzQ4IDQzLjgyNCAwIDc5LjM1MiAzNS41MjMgNzkuMzUyIDc5LjM0OCAwIDc4LjYxMyA0My4yMyA3Ny43MzggNDMuMjMgMTUzLjY2IDAgNjcuNjk5LTU0Ljg4MyAxMjIuNTgtMTIyLjU4IDEyMi41OC02Ny42OTkgMC0xMjIuNTgtNTQuODc5LTEyMi41OC0xMjIuNTh6XCJcclxuICAgICAgZmlsbD1cIiM4OWQ0N2ZcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTA1LjU3IDE0MS40OGMtMTcuMzAxIDE0LjU1NS0yOC4zMDUgMzYuMzU1LTI4LjMwNSA2MC43MzggMCA3OC42MDktNDMuMjMgNzcuNzM0LTQzLjIzIDE1My42NiAwIDY3LjY5OSA1NC44NzkgMTIyLjU4IDEyMi41OCAxMjIuNTggMjIuMDM1IDAgNDIuNzA3LTUuODE2IDYwLjU3OC0xNS45OTItMTE1LjUyLTQzLjI0Ni0xNDIuNDktMjE1LjExLTExMS42Mi0zMjAuOTh6XCJcclxuICAgICAgZmlsbD1cIiM1ZWM3ODNcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTk5LjA1IDMxMy40NGMtMjMuNDM4LTIzLjQzOC02MS40MzgtMjMuNDM4LTg0Ljg3NSAwcy0yMy40MzggNjEuNDM0IDAgODQuODcxIDYxLjQzOCAyMy40MzggODQuODc1IDAgMjMuNDM4LTYxLjQzNCAwLTg0Ljg3MXpcIlxyXG4gICAgICBmaWxsPVwiI2UxYjg5YVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0yMDUuNzkgMzkwLjI3Yy02NC45MTggMTAuOTczLTk1LjIzNC01OS40OTItNjIuNjQxLTkyLjg3NS0yNi42NTYgNi4xMTctNDYuNTQ3IDI5Ljk2OS00Ni41NDcgNTguNDggMCAzMy4xNDUgMjYuODcxIDYwLjAxNiA2MC4wMTYgNjAuMDE2IDIwLjM0OCAwIDM4LjMxNi0xMC4xMzcgNDkuMTcyLTI1LjYyMXpcIlxyXG4gICAgICBmaWxsPVwiI2QyOTk2ZlwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xMjAuNzEgMjc1LjM3YzAtOS4yMzQtOS4zOTgtMTYuNzE5LTIwLjk5Ni0xNi43MTktMTEuNTk0IDAtMjAuOTk2IDcuNDg0LTIwLjk5NiAxNi43MTkgMCA5LjIzNCA5LjQwMiAxNi43MTkgMjAuOTk2IDE2LjcxOSAxMS41OTggMCAyMC45OTYtNy40ODQgMjAuOTk2LTE2LjcxOXpNMjM0LjUyIDI3NS4zN2MwLTkuMjM0LTkuMzk4LTE2LjcxOS0yMC45OTYtMTYuNzE5LTExLjU5NCAwLTIwLjk5NiA3LjQ4NC0yMC45OTYgMTYuNzE5IDAgOS4yMzQgOS40MDIgMTYuNzE5IDIwLjk5NiAxNi43MTkgMTEuNTk4IDAgMjAuOTk2LTcuNDg0IDIwLjk5Ni0xNi43MTl6XCJcclxuICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjI5IDI2Ni4xOWE3LjUgNy41IDAgMDA3LjUtNy41di03LjQxNGE3LjUgNy41IDAgMDAtNy41LTcuNSA3LjQ5NyA3LjQ5NyAwIDAwLTcuNSA3LjV2Ny40MTRjMCA0LjE0NCAzLjM1NiA3LjUgNy41IDcuNXpNMTU2LjYyMiA0MjMuNGMzNy4yMyAwIDY3LjUxNi0zMC4yODkgNjcuNTE2LTY3LjUxNiAwLTM3LjIzLTMwLjI4NS02Ny41MTYtNjcuNTE2LTY3LjUxNi0zNy4yMjcgMC02Ny41MTYgMzAuMjg1LTY3LjUxNiA2Ny41MTYgMCAzNy4yMjcgMzAuMjg5IDY3LjUxNiA2Ny41MTYgNjcuNTE2em0wLTEyMC4wM2MyOC45NTcgMCA1Mi41MTYgMjMuNTU5IDUyLjUxNiA1Mi41MTYgMCAyOC45NTctMjMuNTU5IDUyLjUxNi01Mi41MTYgNTIuNTE2LTI4Ljk1NyAwLTUyLjUxNi0yMy41NTktNTIuNTE2LTUyLjUxNiAwLTI4Ljk1NyAyMy41NTktNTIuNTE2IDUyLjUxNi01Mi41MTZ6bTEzMC40My0zOS4zMzJjLTEwLjE4NC0xNy45OTYtMTcuNTQzLTMxLTE3LjU0My02MS44MTIgMC0zMi41NTUtMTMuODU5LTYxLjkzLTM1Ljk3Ny04Mi41NTEgNy42ODgtNC40NDUgMTQuNTI3LTkuNjEzIDIwLjM4My0xNS40NjUgNS4xMjEtNS4xMjEgOS43NjItMTEuMDIgMTMuNzkzLTE3LjUyN2E3LjUwNyA3LjUwNyAwIDAwLTIuNDI2LTEwLjMyOCA3LjUwMSA3LjUwMSAwIDAwLTEwLjMyNCAyLjQyNmMtMy40MjYgNS41MzEtNy4zNDcgMTAuNTE2LTExLjY1MiAxNC44Mi02LjE4IDYuMTgtMTMuNzAzIDExLjUwOC0yMi40MSAxNS44NzktMTIuMzI4LTguNTctMjYuNDMtMTQuNzU0LTQxLjY0NS0xNy44NjNhNzkuMjQgNzkuMjQgMCAwMC00LjczNC0xOS45MDJjNC44MTItMTEuMjQyIDExLjA0My0yMC43NzMgMTguNTg2LTI4LjMxMiAxOC43NDYtMTguNzQ2IDQ1LjU0Ny0yNS43MjcgNjQuNzMtMjguMjgxIDMuODE2LS41MDggNy41NjYuNzU4IDEwLjI4IDMuNDczIDIuNzE2IDIuNzE0IDMuOTgxIDYuNDYgMy40NzQgMTAuMjgtLjg4MyA2LjYyNi0yLjE1NyAxMy4wOS0zLjc4MiAxOS4yMTZhNy41MDEgNy41MDEgMCAwMDUuMzIgOS4xNzVjNC4wMDUgMS4wNTUgOC4xMS0xLjMyIDkuMTc2LTUuMzI0IDEuNzktNi43MzggMy4xODgtMTMuODMyIDQuMTUzLTIxLjA4NiAxLjEzMy04LjQ4OC0xLjY4OC0xNi44MjQtNy43My0yMi44NjctNi4wNDgtNi4wNDctMTQuMzgtOC44NjctMjIuODcyLTcuNzM0LTIxLjQ3NyAyLjg2LTUxLjY0IDEwLjgyOC03My4zNTUgMzIuNTQzLTYuMzc5IDYuMzc5LTExLjk0NSAxMy44OS0xNi42MzcgMjIuNDIyYTgwLjI5MyA4MC4yOTMgMCAwMC0xMC4yMjctMTIuMTUyYy0xNC45NTMtMTQuNTY2LTM0LjY1Ni0yMi41OS01NS40ODQtMjIuNTktMTIuNzUgMC0yMy4xMjUgMTAuMzctMjMuMTI1IDIzLjEyNSAwIDEyLjc1IDEwLjM3NSAyMy4xMiAyMy4xMjUgMjMuMTIgMTUuNTcgMCAyOC43MiAxMC42NTcgMzIuMzUyIDI1LjIyLTUwLjY5NSAxMS4wNzgtODguNzcgNTYuMzE2LTg4Ljc3IDExMC4yOSAwIDMwLjgxMi03LjM2IDQzLjgxNi0xNy41NDcgNjEuODJDMTQuMTQ1IDI4NS4zMjMuNSAzMDkuNDMyLjUgMzU1Ljg5M2MwIDMyLjYwMiA5Ljk4OSA2My44NTIgMjguODgzIDkwLjM4M2E3LjUgNy41IDAgMDAxMC40NjEgMS43NTRjMy4zNzEtMi40MDMgNC4xNi03LjA4NiAxLjc1OC0xMC40NTdDMjQuNTI0IDQxMy42IDE1LjUgMzg1LjM1MyAxNS41IDM1NS44OTNjMC00Mi41MTIgMTIuNjA5LTY0Ljc5MyAyMy43MzgtODQuNDU3IDEwLjQ1Ny0xOC40OCAxOS40OTItMzQuNDM4IDE5LjQ5Mi02OS4yMDMgMC01My45NzcgNDMuOTE0LTk3Ljg4NyA5Ny44ODctOTcuODg3IDQuODM2IDAgOS41ODYuMzU1IDE0LjIzIDEuMDM1LjA3LjAxNS4xNDUuMDIuMjE5LjAzMSA0Ny4xNDggNy4wMDQgODMuNDQgNDcuNzU0IDgzLjQ0IDk2LjgyIDAgMzQuNzY2IDkuMDMyIDUwLjcyMyAxOS40OTMgNjkuMjA3IDExLjEyOSAxOS42NiAyMy43MzggNDEuOTQxIDIzLjczOCA4NC40NTMgMCA3Ny44MTYtNjMuMzA1IDE0MS4xMi0xNDEuMTIgMTQxLjEyLTMzLjg5MSAwLTY2LjY3Ni0xMi4yNDYtOTIuMzItMzQuNDgtMy4xMy0yLjcxNS03Ljg2Ny0yLjM3NS0xMC41ODIuNzU0YTcuNTA2IDcuNTA2IDAgMDAuNzU0IDEwLjU4MmMyOC4zNyAyNC41OTggNjQuNjQ4IDM4LjE0NSAxMDIuMTUgMzguMTQ1IDg2LjA4NiAwIDE1Ni4xMi03MC4wMzUgMTU2LjEyLTE1Ni4xMiAwLTQ2LjQ2NS0xMy42NDUtNzAuNTc0LTI1LjY4OC05MS44NDh6bS0xMzAuNDMtMTc0LjdjLTMuMTEzIDAtNi4xOTUuMTMzLTkuMjQ2LjM3OS00Ljc0Ni0yMS44NDQtMjQuMTQ1LTM3Ljk5Ni00Ny4yMjMtMzcuOTk2LTQuNDggMC04LjEyNS0zLjY0NS04LjEyNS04LjEyMSAwLTQuNDggMy42NDQtOC4xMjUgOC4xMjUtOC4xMjUgMTYuODk1IDAgMzIuODgzIDYuNTEyIDQ1LjAxNiAxOC4zMzIgMTAuMDE2IDkuNzU4IDE2LjQ4IDIyLjIzIDE4LjY5IDM1Ljc3YTExMy44OTIgMTEzLjg5MiAwIDAwLTcuMjM3LS4yMzh6bTAgMzk2LjYzYzcxLjcyNyAwIDEzMC4wOC01OC4zNTIgMTMwLjA4LTEzMC4wOCAwLTM5LjYwOS0xMS4zNC01OS42NDUtMjIuMzA5LTc5LjAyLTEwLjc2Mi0xOS4wMTYtMjAuOTI2LTM2Ljk3My0yMC45MjYtNzQuNjQ1IDAtNDcuODkxLTM4Ljk1Ny04Ni44NTItODYuODQ4LTg2Ljg1MnMtODYuODUyIDM4Ljk2MS04Ni44NTIgODYuODUyYzAgMzcuNjcyLTEwLjE2NCA1NS42MjktMjAuOTIyIDc0LjY0NS0xMC45NjkgMTkuMzc1LTIyLjMwOSAzOS40MS0yMi4zMDkgNzkuMDIuMDA0IDcxLjcyNyA1OC4zNTUgMTMwLjA4IDEzMC4wOCAxMzAuMDh6bS05NC43MTktMjAxLjcxYzExLjI0Mi0xOS44NjcgMjIuODcxLTQwLjQwNiAyMi44NzEtODIuMDMxIDAtMzkuNjE3IDMyLjIzLTcxLjg0OCA3MS44NDgtNzEuODQ4IDM5LjYxNyAwIDcxLjg1MiAzMi4yMyA3MS44NTIgNzEuODQ4IDAgNDEuNjI1IDExLjYyNSA2Mi4xNjQgMjIuODcxIDgyLjAzMSAxMC40NjkgMTguNSAyMC4zNTkgMzUuOTc3IDIwLjM1OSA3MS42MzMgMCA2My40NTMtNTEuNjI1IDExNS4wOC0xMTUuMDggMTE1LjA4LTYzLjQ1MyAwLTExNS4wOC01MS42MjUtMTE1LjA4LTExNS4wOCAwLTM1LjY1NiA5Ljg5LTUzLjEzMyAyMC4zNTktNzEuNjMzem01MC4wNTUtMTguMDU5YTcuNSA3LjUgMCAwMDcuNS03LjV2LTcuNDE0YTcuNSA3LjUgMCAwMC03LjUtNy41IDcuNDk3IDcuNDk3IDAgMDAtNy41IDcuNXY3LjQxNGMwIDQuMTQ0IDMuMzU2IDcuNSA3LjUgNy41em00NC42NjQgNS42OTVhMjMuMTA3IDIzLjEwNyAwIDAwMTcuNDMtNy45NDEgNy40OTIgNy40OTIgMCAwMC0uNzI3LTEwLjU3OCA3LjQ5NyA3LjQ5NyAwIDAwLTEwLjU4Mi43MjZjLTEuNTQzIDEuNzc0LTMuNzc3IDIuNzkzLTYuMTIgMi43OTNzLTQuNTc1LTEuMDE5LTYuMTIyLTIuNzkzYTcuNDkyIDcuNDkyIDAgMDAtMTAuNTc4LS43MjYgNy40OTYgNy40OTYgMCAwMC0uNzMgMTAuNTc4IDIzLjExMiAyMy4xMTIgMCAwMDE3LjQzIDcuOTQxelwiIC8+XHJcbiAgPC9zdmc+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2b2NhZG9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTVkdJY29uUHJvcHMgfSBmcm9tICcuL3N2Zy50eXBlcydcclxuXHJcbmNvbnN0IEJhc2tldCA9ICh7IHNpemUgPSAnMzRweCcgfTogU1ZHSWNvblByb3BzKSA9PiAoXHJcbiAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNNDkwLjEgMjkyLjAzSDIxLjljLTcuOTUzIDAtMTQuNC02LjQ0Ny0xNC40LTE0LjR2LTM0LjM5MWMwLTcuOTUzIDYuNDQ3LTE0LjQgMTQuNC0xNC40aDQ2OC4yYzcuOTUzIDAgMTQuNCA2LjQ0NyAxNC40IDE0LjR2MzQuMzkxYzAgNy45NTItNi40NDcgMTQuNC0xNC40IDE0LjR6XCJcclxuICAgICAgZmlsbD1cIiNGQUQ5N0VcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNNDkwLjEgMjI4Ljg0aC0zOC4wNzZjNy45NTMgMCAxNC40IDYuNDQ3IDE0LjQgMTQuNHYzNC4zOTFjMCA3Ljk1My02LjQ0NyAxNC40LTE0LjQgMTQuNEg0OTAuMWM3Ljk1MyAwIDE0LjQtNi40NDcgMTQuNC0xNC40VjI0My4yNGMwLTcuOTUzLTYuNDQ3LTE0LjQtMTQuNC0xNC40elwiXHJcbiAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgIC8+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTQ2Ni40MiAyOTIuMDNINDUuNTdsMjEuMDg0IDE1My4zNGMyLjQzOSAxNy43NDEgMTcuNTk5IDMwLjk1OSAzNS41MDcgMzAuOTU5aDMwNy42N2MxNy45MDggMCAzMy4wNjgtMTMuMjE4IDM1LjUwNy0zMC45NTlsMjEuMDg0LTE1My4zNHpcIlxyXG4gICAgICBmaWxsPVwiI0ExNkI0RVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk00NS41NzYgMjkyLjAzbDMuNTYxIDI1Ljg5OWgzNzUuNjVsLTE3LjUyMyAxMjcuNDRjLTIuNDM5IDE3Ljc0MS0xNy41OTkgMzAuOTU5LTM1LjUwNyAzMC45NTloMzguMDc2YzE3LjkwOCAwIDMzLjA2OC0xMy4yMTggMzUuNTA3LTMwLjk1OWwxNy41MjMtMTI3LjQ0IDMuNTYxLTI1Ljg5OUg0NS41NzR6XCJcclxuICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNNDI3LjIyIDIyOC44NGgtNDcuMjQxdi05NC43NDNjMC0yOC4yMjQtMjIuOTYyLTUxLjE4Ni01MS4xODYtNTEuMTg2aC0xNDUuNTljLTI4LjIyNCAwLTUxLjE4NiAyMi45NjItNTEuMTg2IDUxLjE4NnY5NC43NDNIODQuNzc2di05NC43NDNjMC01NC4yNzIgNDQuMTU0LTk4LjQyNyA5OC40MjctOTguNDI3aDE0NS41OWM1NC4yNzMgMCA5OC40MjcgNDQuMTU0IDk4LjQyNyA5OC40Mjd2OTQuNzQzelwiXHJcbiAgICAgIGZpbGw9XCIjQTE2QjRFXCJcclxuICAgIC8+XHJcbiAgICA8cGF0aCBvcGFjaXR5PXswLjF9IGQ9XCJNODQuNzggMjAyLjk0SDEzMi4wMlYyMjguODQxOTk5OTk5OTk5OThIODQuNzh6XCIgLz5cclxuICAgIDxwYXRoIG9wYWNpdHk9ezAuMX0gZD1cIk0zNzkuOTggMjAyLjk0SDQyNy4yMlYyMjguODQxOTk5OTk5OTk5OThIMzc5Ljk4elwiIC8+XHJcbiAgICA8cGF0aCBmaWxsPVwiI0ZBRDk3RVwiIGQ9XCJNMTkzLjkxIDM1LjY3MkgzMTguMDkwMDAwMDAwMDAwMDNWODIuOTEySDE5My45MXpcIiAvPlxyXG4gICAgPGcgb3BhY2l0eT17MC4xfT5cclxuICAgICAgPHBhdGggZD1cIk0xNTIuOTQgNDM4Ljk0bDYuNzE4LTYuNzE4YTcuNSA3LjUgMCAwMC0xMC42MDctMTAuNjA2bC02LjcxNyA2LjcxNy02LjcxNy02LjcxNy02LjcxNy02LjcxOCA2LjcxNy02LjcxOGE3LjUgNy41IDAgMDAtMTAuNjA3LTEwLjYwNmwtNi43MTcgNi43MTctNi43MTctNi43MTdhNy41IDcuNSAwIDAwLTEwLjYwNyAxMC42MDZsNi43MTcgNi43MTgtNi43MTcgNi43MThhNy41IDcuNSAwIDAwNS4zMDQgMTIuODAzIDcuNDc4IDcuNDc4IDAgMDA1LjMwNC0yLjE5N2w2LjcxNy02LjcxNyAxMy40MzUgMTMuNDM1LTYuNzE4IDYuNzE4YTcuNSA3LjUgMCAwMDUuMzA0IDEyLjgwMyA3LjQ3OCA3LjQ3OCAwIDAwNS4zMDQtMi4xOTdsNi43MTctNi43MTcgNi43MTcgNi43MTdjMS40NjUgMS40NjQgMy4zODUgMi4xOTcgNS4zMDQgMi4xOTdzMy44MzktLjczMiA1LjMwNC0yLjE5N2E3LjUgNy41IDAgMDAwLTEwLjYwNmwtNi43MjEtNi43MTh6TTQyNi4yMyAzNjMuMWw2LjcxOC02LjcxOGE3LjUgNy41IDAgMDAtLjAwMS0xMC42MDcgNy40OTggNy40OTggMCAwMC0xMC42MDYgMGwtNi43MTcgNi43MTctNi43MTctNi43MTdhNy41IDcuNSAwIDAwLTEwLjYwNiAwIDcuNSA3LjUgMCAwMC0uMDAxIDEwLjYwN2w2LjcxOCA2LjcxOC02LjcxOCA2LjcxOGE3LjUgNy41IDAgMDAuMDAxIDEwLjYwN2MxLjQ2NCAxLjQ2NSAzLjM4NCAyLjE5NyA1LjMwMyAyLjE5N3MzLjgzOS0uNzMyIDUuMzA0LTIuMTk3bDYuNzE3LTYuNzE3IDYuNzE3IDYuNzE3YTcuNDc2IDcuNDc2IDAgMDA1LjMwNCAyLjE5NyA3LjQ3NCA3LjQ3NCAwIDAwNS4zMDMtMi4xOTcgNy41IDcuNSAwIDAwLjAwMS0xMC42MDdsLTYuNzItNi43MTh6XCIgLz5cclxuICAgIDwvZz5cclxuICAgIDxnIGZpbGw9XCIjRjE1QjcwXCIgb3BhY2l0eT17MC4zfT5cclxuICAgICAgPGVsbGlwc2UgY3g9ezE5My4wMn0gY3k9ezM2OS41Mn0gcng9ezI2Ljk2fSByeT17MTEuNjk4fSAvPlxyXG4gICAgICA8ZWxsaXBzZSBjeD17MzE4Ljk4fSBjeT17MzY5LjUyfSByeD17MjYuOTZ9IHJ5PXsxMS42OTh9IC8+XHJcbiAgICA8L2c+XHJcbiAgICA8cGF0aCBkPVwiTTQ5MC4xIDIyMS4zNGgtNTUuMzc4di04Ny4yNDNjMC01OC40MDgtNDcuNTE5LTEwNS45My0xMDUuOTMtMTA1LjkzaC0xNDUuNTljLTU4LjQwOCAwLTEwNS45MyA0Ny41MTktMTA1LjkzIDEwNS45M3Y4Ny4yNDNIMjEuODk0Yy0xMi4wNzYgMC0yMS45IDkuODI0LTIxLjkgMjEuOXYzNC4zOTFjMCAxMi4wNzYgOS44MjQgMjEuOSAyMS45IDIxLjloMTcuMTM3bDE0LjM1IDEwNC4zNmE3LjUgNy41IDAgMTAxNC44NTktMi4wNDRsLTE0LjA3LTEwMi4zMmgzNDYuNmM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNUgyMS45YTYuOTA3IDYuOTA3IDAgMDEtNi45LTYuOXYtMzQuMzkxYzAtMy44MDUgMy4wOTYtNi45IDYuOS02LjloNjIuODY4bC4wMS4wMDEuMDEtLjAwMWg0Ny4yMjFsLjAxLjAwMS4wMS0uMDAxaDI0Ny45NGwuMDEuMDAxLjAxLS4wMDFoNDcuMjIxbC4wMS4wMDEuMDEtLjAwMWg2Mi44NjdjMy44MDUgMCA2LjkgMy4wOTUgNi45IDYuOXYzNC4zOTFjMCAzLjgwNS0zLjA5NiA2LjktNi45IDYuOWgtNTYuMDk0Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDIzLjgxN2wtMTkuOTEzIDE0NC44MmMtMS45MiAxMy45NTYtMTMuOTkgMjQuNDgtMjguMDc3IDI0LjQ4SDEwMi4xNmMtMTQuMDg3IDAtMjYuMTU3LTEwLjUyNC0yOC4wNzctMjQuNDgxbC0xLjY5Ni0xMi4zMzNhNy41IDcuNSAwIDEwLTE0Ljg1OSAyLjA0NGwxLjY5NiAxMi4zMzJjMi45MzUgMjEuMzQzIDIxLjM5NCAzNy40MzggNDIuOTM3IDM3LjQzOGgzMDcuNjdjMjEuNTQzIDAgNDAuMDAyLTE2LjA5NSA0Mi45MzYtMzcuNDM4bDIwLjE5My0xNDYuODZoMTcuMTM3YzEyLjA3NiAwIDIxLjktOS44MjQgMjEuOS0yMS45di0zNC4zOTFjMC0xMi4wNzMtOS44MjQtMjEuODk5LTIxLjktMjEuODk5ek0yOTYuNzYgNDMuMTdoMTMuODM1djMyLjI0MUgyOTYuNzZWNDMuMTd6bS0zMy4yNTUgMGgxOC4yNTV2MzIuMjQxaC0xOC4yNTVWNDMuMTd6bS0zMy4yNTUgMGgxOC4yNTV2MzIuMjQxSDIzMC4yNVY0My4xN3ptLTI4LjgzNSAwaDEzLjgzNXYzMi4yNDFoLTEzLjgzNVY0My4xN3ptMTcxLjA3IDE3OC4xN2gtMjMyLjk2di00OC4wNDRjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2NDguMDQ0aC0zMi4yNHYtODcuMjQzYzAtNTAuMTM3IDQwLjc5LTkwLjkyNyA5MC45MjctOTAuOTI3aDMuMjA1djMyLjI0MWgtMy4yMDVjLTMyLjM2IDAtNTguNjg2IDI2LjMyNy01OC42ODYgNTguNjg2VjE0M2MwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di04LjkwM2MwLTI0LjA4OCAxOS41OTgtNDMuNjg2IDQzLjY4Ni00My42ODZoMTQ1LjU5YzI0LjA4OSAwIDQzLjY4NyAxOS41OTggNDMuNjg3IDQzLjY4NnY4Ny4yNDNoLS4wMDJ6bTQ3LjI0MSAwaC0zMi4yNHYtODcuMjQzYzAtMzIuMzU5LTI2LjMyNi01OC42ODYtNTguNjg3LTU4LjY4NmgtMy4yMDV2LTMyLjI0aDMuMjA1YzUwLjEzNyAwIDkwLjkyNyA0MC43OSA5MC45MjcgOTAuOTI3djg3LjI0MnptLTkzLjI0IDEyMi4xNXYtMTAuNDU1YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djEwLjQ1NWMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41em0tMTI1Ljk2IDB2LTEwLjQ1NWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXYxMC40NTVhNy41IDcuNSAwIDAwMTUgMHptNTUuNDgyIDE1LjUyOGEyOS41MjggMjkuNTI4IDAgMDAyMi4yNi0xMC4xMzcgNy40OTkgNy40OTkgMCAwMC0uNzI3LTEwLjU4MiA3LjUgNy41IDAgMDAtMTAuNTgyLjcyNmMtMi43NjUgMy4xNzMtNi43NTcgNC45OTMtMTAuOTUxIDQuOTkzcy04LjE4Ni0xLjgyLTEwLjk1MS00Ljk5M2E3LjUgNy41IDAgMDAtMTAuNTgyLS43MjYgNy41IDcuNSAwIDAwLS43MjcgMTAuNTgyIDI5LjUyNCAyOS41MjQgMCAwMDIyLjI2IDEwLjEzN3pcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNrZXRcclxuIiwiaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QvUHJvZHVjdExpc3QnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFuaW1hdGVkSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvS2F3YWlpSGVhZGVyL0FuaW1hdGVkSGVhZGVyJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGU8VFByb2R1Y3RbXT4oW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKCcvYXBpL2F2bycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH06IFRBUElBdm9SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxBbmltYXRlZEhlYWRlciAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IFwiNDBweFwiLCBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PiBMYSBwcmltZXJhIHRpZW5kYSBPbmxpbmUgZGUgQWd1YWNhdGVzIGVuIFVydWd1YXkhITwvcD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RMaXN0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9