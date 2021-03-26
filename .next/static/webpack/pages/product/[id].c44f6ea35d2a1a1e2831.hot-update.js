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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var ProductSummary = function ProductSummary(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: "Tu producto seleccionado iria aqui"
  }, void 0, false);
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

/***/ }),

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductSummary/ProductSummary */ "./components/ProductSummary/ProductSummary.tsx");


var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\pages\\product\\[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ProductPage = function ProductPage() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      product = _useState[0],
      setProduct = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (query.id) {
      window.fetch("/api/avo/".concat(query.id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        setProduct(data);
      });
    }
  }, [query.id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(ProductPage, "HaLw+FSgmaxuMih0UOQiqXlS8ok=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ProductPage;
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

var _c;

$RefreshReg$(_c, "ProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9Qcm9kdWN0U3VtbWFyeS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvLnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0U3VtbWFyeSIsInByb2R1Y3QiLCJQcm9kdWN0UGFnZSIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJzZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiaWQiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxzQkFDckI7QUFBQTtBQUFBLG1CQURxQjtBQUFBLENBQXZCOztLQUFNRCxjO0FBcUJTQSw2RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsbUJBQ05DLDZEQUFTLEVBREg7QUFBQSxNQUNoQkMsS0FEZ0IsY0FDaEJBLEtBRGdCOztBQUFBLGtCQUVNQyxzREFBUSxDQUFrQixJQUFsQixDQUZkO0FBQUEsTUFFakJKLE9BRmlCO0FBQUEsTUFFUkssVUFGUTs7QUFJeEJDLHlEQUFTLENBQUMsWUFBSztBQUNiLFFBQUdILEtBQUssQ0FBQ0ksRUFBVCxFQUFZO0FBQ1ZDLFlBQU0sQ0FDTEMsS0FERCxvQkFDbUJOLEtBQUssQ0FBQ0ksRUFEekIsR0FFQ0csSUFGRCxDQUVNLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BRk4sRUFHQ0YsSUFIRCxDQUdNLFVBQUNHLElBQUQsRUFBb0I7QUFDeEJSLGtCQUFVLENBQUNRLElBQUQsQ0FBVjtBQUNELE9BTEQ7QUFNRDtBQUNGLEdBVFEsRUFTTixDQUFDVixLQUFLLENBQUNJLEVBQVAsQ0FUTSxDQUFUO0FBV0Esc0JBQ0U7QUFBQSwyQkFDQSxxRUFBQyxpRkFBRDtBQUFnQixhQUFPLEVBQUVQO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXJCRDs7R0FBTUMsVztVQUNjQyxxRDs7O0tBRGRELFc7QUF1QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5jNDRmNmVhMzVkMmExYTFlMjgzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJdGVtLCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydCdcclxuaW1wb3J0IFByb2R1Y3RBdHRyaWJ1dGVzIGZyb20gJy4vUHJvZHVjdEF0dHJpYnV0ZXMnXHJcblxyXG50eXBlIFByb2R1Y3RTdW1tYXJ5UHJvcHMgPSB7XHJcbiAgcHJvZHVjdDogVFByb2R1Y3RcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdFN1bW1hcnkgPSAoeyBwcm9kdWN0IH06IFByb2R1Y3RTdW1tYXJ5UHJvcHMpID0+IChcclxuICA8PlxyXG4gICB7IC8qPEl0ZW0uR3JvdXAgYXM9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxJdGVtIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxJdGVtLkltYWdlIHNpemU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICA8L0l0ZW0uSW1hZ2U+XHJcbiAgICAgICAgPEl0ZW0uQ29udGVudD5cclxuICAgICAgICAgIDxJdGVtLkhlYWRlciBhcz1cImgxXCI+e3Byb2R1Y3QubmFtZX08L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPExhYmVsPntgU0tVOiAke3Byb2R1Y3Quc2t1fWB9PC9MYWJlbD5cclxuICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cclxuICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgPC9JdGVtLkdyb3VwPlxyXG48UHJvZHVjdEF0dHJpYnV0ZXMgey4uLnByb2R1Y3QuYXR0cmlidXRlc30gLz4qL31cclxuVHUgcHJvZHVjdG8gc2VsZWNjaW9uYWRvIGlyaWEgYXF1aVxyXG4gIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeVxyXG4iLCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUHJvZHVjdFN1bW1hcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9Qcm9kdWN0U3VtbWFyeSc7XHJcblxyXG5jb25zdCBQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlPFRQcm9kdWN0IHwgbnVsbD4obnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgaWYocXVlcnkuaWQpe1xyXG4gICAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKGAvYXBpL2F2by8ke3F1ZXJ5LmlkfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YTogVFByb2R1Y3QpID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0KGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW3F1ZXJ5LmlkXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPFByb2R1Y3RTdW1tYXJ5IHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgIFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==