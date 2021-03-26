webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/ProductSummary/ProductSummary.tsx":
/*!******************************************************!*\
  !*** ./components/ProductSummary/ProductSummary.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ProductAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductAttributes */ "./components/ProductSummary/ProductAttributes.tsx");




var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductSummary\\ProductSummary.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ProductSummary = function ProductSummary(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Group, {
      as: "section",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"], {
        style: {
          alignItems: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Image, {
          size: "medium",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: product.image,
            alt: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Content, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Header, {
            as: "h1",
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: product.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
              children: "SKU: ".concat(product.sku)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductAttributes__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, product.attributes), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = ProductSummary;
/* harmony default export */ __webpack_exports__["default"] = (ProductSummary);

var _c;

$RefreshReg$(_c, "ProductSummary");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9Qcm9kdWN0U3VtbWFyeS50c3giXSwibmFtZXMiOlsiUHJvZHVjdFN1bW1hcnkiLCJwcm9kdWN0IiwiYWxpZ25JdGVtcyIsImltYWdlIiwibmFtZSIsInByaWNlIiwic2t1IiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBTUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLHNCQUNyQjtBQUFBLDRCQUNFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLFFBQUUsRUFBQyxTQUFmO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRUMsb0JBQVUsRUFBRTtBQUFkLFNBQWI7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFJLEVBQUMsUUFBakI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUFsQjtBQUF5QixlQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQSxrQ0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxjQUFFLEVBQUMsSUFBaEI7QUFBQSxzQkFBc0JILE9BQU8sQ0FBQ0c7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLHNEQUFELENBQU0sV0FBTjtBQUFBLG9DQUNFO0FBQUEsd0JBQUlILE9BQU8sQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsdURBQUQ7QUFBQSx1Q0FBZ0JKLE9BQU8sQ0FBQ0ssR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZUUscUVBQUMsMERBQUQsb0JBQXVCTCxPQUFPLENBQUNNLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBLGtCQURxQjtBQUFBLENBQXZCOztLQUFNUCxjO0FBb0JTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uYmMyMTRhY2M1ZDc3OTU4OWUyYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSXRlbSwgTGFiZWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQnXHJcbmltcG9ydCBQcm9kdWN0QXR0cmlidXRlcyBmcm9tICcuL1Byb2R1Y3RBdHRyaWJ1dGVzJ1xyXG5cclxudHlwZSBQcm9kdWN0U3VtbWFyeVByb3BzID0ge1xyXG4gIHByb2R1Y3Q6IFRQcm9kdWN0XHJcbn1cclxuXHJcbmNvbnN0IFByb2R1Y3RTdW1tYXJ5ID0gKHsgcHJvZHVjdCB9OiBQcm9kdWN0U3VtbWFyeVByb3BzKSA9PiAoXHJcbiAgPD5cclxuICAgIDxJdGVtLkdyb3VwIGFzPVwic2VjdGlvblwiPlxyXG4gICAgICA8SXRlbSBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICA8SXRlbS5JbWFnZSBzaXplPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPC9JdGVtLkltYWdlPlxyXG4gICAgICAgIDxJdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8SXRlbS5IZWFkZXIgYXM9XCJoMVwiPntwcm9kdWN0Lm5hbWV9PC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgIDxMYWJlbD57YFNLVTogJHtwcm9kdWN0LnNrdX1gfTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgIDwvSXRlbS5Hcm91cD5cclxuICAgIDxQcm9kdWN0QXR0cmlidXRlcyB7Li4ucHJvZHVjdC5hdHRyaWJ1dGVzfSAvPlxyXG4gIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeVxyXG4iXSwic291cmNlUm9vdCI6IiJ9