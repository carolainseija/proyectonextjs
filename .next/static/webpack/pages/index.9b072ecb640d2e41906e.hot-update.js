webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductList/ProductList */ "./components/ProductList/ProductList.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var HomePage = function HomePage(_ref) {
  _s();

  var productList = _ref.productList;
  //
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.fetch('/api/avo').then(function (response) {
      return response.json();
    }).then(function (_ref2) {
      var data = _ref2.data;
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
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      products: productList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = HomePage;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0UHJvZHVjdExpc3QiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE4QztBQUFBOztBQUFBLE1BQTVDQyxXQUE0QyxRQUE1Q0EsV0FBNEM7QUFFOUQ7QUFFQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FDSEMsS0FESCxDQUNTLFVBRFQsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLGlCQUErQjtBQUFBLFVBQTVCRyxJQUE0QixTQUE1QkEsSUFBNEI7QUFDbkNDLG9CQUFjLENBQUNELElBQUQsQ0FBZDtBQUNELEtBTEg7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUNFLGtCQUFRLEVBQUUsTUFBWDtBQUFtQkMsb0JBQVUsRUFBRSxXQUEvQjtBQUE0Q0MseUJBQWUsRUFBRSxRQUE3RDtBQUF1RUMsbUJBQVMsRUFBRTtBQUFsRixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsMkVBQUQ7QUFBYSxjQUFRLEVBQUVaO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBckJEOztHQUFNRCxROztLQUFBQSxROztBQXVCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWIwNzJlY2I2NDBkMmU0MTkwNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7cHJvZHVjdExpc3R9OiB7cHJvZHVjdExpc3Q6IFRQcm9kdWN0W119KSA9PiB7XHJcblxyXG4gLy9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvd1xyXG4gICAgICAuZmV0Y2goJy9hcGkvYXZvJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfTogVEFQSUF2b1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdExpc3QoZGF0YSlcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogXCI0MHB4XCIsIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIsIGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+IExhIHByaW1lcmEgdGllbmRhIE9ubGluZSBkZSBBZ3VhY2F0ZXMgZW4gVXJ1Z3VheSEhPC9wPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdExpc3R9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==