webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductList/ProductList */ "./components/ProductList/ProductList.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      productList = _useState[0],
      setProductList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.fetch('/api/avo').then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      setProductList(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      products: productList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "OqBFtcRPuEK5n5yG0OhgJizsaa8=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBYSxFQUFiLENBRHpCO0FBQUEsTUFDZEMsV0FEYztBQUFBLE1BQ0RDLGNBREM7O0FBS3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUNIQyxLQURILENBQ1MsVUFEVCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FGUixFQUdHRixJQUhILENBR1EsZ0JBQStCO0FBQUEsVUFBNUJHLElBQTRCLFFBQTVCQSxJQUE0QjtBQUNuQ1Asb0JBQWMsQ0FBQ08sSUFBRCxDQUFkO0FBQ0QsS0FMSDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRSxNQUFYO0FBQW1CQyxvQkFBVSxFQUFFLFdBQS9CO0FBQTRDQyx5QkFBZSxFQUFFLFFBQTdEO0FBQXVFQyxtQkFBUyxFQUFFO0FBQWxGLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQywyRUFBRDtBQUFhLGNBQVEsRUFBRVo7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0F0QkQ7O0dBQU1GLFE7O0tBQUFBLFE7QUF3QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0Y2VjZTFjNDg0NmIwYjY0YmRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSlcclxuXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKCcvYXBpL2F2bycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH06IFRBUElBdm9SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IFwiNDBweFwiLCBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PiBMYSBwcmltZXJhIHRpZW5kYSBPbmxpbmUgZGUgQWd1YWNhdGVzIGVuIFVydWd1YXkhITwvcD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RMaXN0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=