webpackHotUpdate_N_E("pages/product/[id]",{

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["P\xE1gina producto: ", query.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: " na"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiaWQiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG1CQUNOQyw2REFBUyxFQURIO0FBQUEsTUFDaEJDLEtBRGdCLGNBQ2hCQSxLQURnQjs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBa0IsSUFBbEIsQ0FGZDtBQUFBLE1BRWpCQyxPQUZpQjtBQUFBLE1BRVJDLFVBRlE7O0FBSXhCQyx5REFBUyxDQUFDLFlBQUs7QUFDYixRQUFHSixLQUFLLENBQUNLLEVBQVQsRUFBWTtBQUNWQyxZQUFNLENBQ0xDLEtBREQsb0JBQ21CUCxLQUFLLENBQUNLLEVBRHpCLEdBRUNHLElBRkQsQ0FFTSxVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxPQUZOLEVBR0NGLElBSEQsQ0FHTSxVQUFDRyxJQUFELEVBQW9CO0FBQ3hCUixrQkFBVSxDQUFDUSxJQUFELENBQVY7QUFDRCxPQUxEO0FBTUQ7QUFDRixHQVRRLEVBU04sQ0FBQ1gsS0FBSyxDQUFDSyxFQUFQLENBVE0sQ0FBVDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0EscUVBQUMsaUZBQUQ7QUFBZ0IsYUFBTyxFQUFFSDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFQTtBQUFBLHlDQUFzQkYsS0FBSyxDQUFDSyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXZCRDs7R0FBTVAsVztVQUNjQyxxRDs7O0tBRGRELFc7QUF5QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5mMWVmYTRjMzc2Mzg0MWUxNGJjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBQcm9kdWN0U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L1Byb2R1Y3RTdW1tYXJ5JztcclxuXHJcbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGU8VFByb2R1Y3QgfCBudWxsPihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBpZihxdWVyeS5pZCl7XHJcbiAgICAgIHdpbmRvd1xyXG4gICAgICAuZmV0Y2goYC9hcGkvYXZvLyR7cXVlcnkuaWR9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhOiBUUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3QoZGF0YSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbcXVlcnkuaWRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICA8UHJvZHVjdFN1bW1hcnkgcHJvZHVjdD17cHJvZHVjdH0vPlxyXG4gICAgPGgxPlDDoWdpbmEgcHJvZHVjdG86IHtxdWVyeS5pZH08L2gxPlxyXG4gICAgPHA+IG5hPC9wPlxyXG4gICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9