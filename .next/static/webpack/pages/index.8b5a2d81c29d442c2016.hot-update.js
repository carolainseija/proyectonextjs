webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductSummary/AddToCart.tsx":
/*!*************************************************!*\
  !*** ./components/ProductSummary/AddToCart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductSummary\\AddToCart.tsx",
    _this = undefined;




// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
var addToCartRequest = function addToCartRequest() {
  return new Promise(function (resolve, reject) {
    window.setTimeout(resolve, 600);
  });
};

var validate = function validate(quantity) {
  var error = '';
  if (quantity < 1) error = "Can't be blank";
  return error;
};

var AddToCart = function AddToCart() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      placeholder: "Quantity",
      value: quantity,
      min: 1,
      step: 1,
      action: {
        color: 'green',
        content: 'Add to Cart',
        icon: 'plus cart'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        color: 'red',
        position: 'absolute'
      },
      children: " error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        color: 'green',
        position: 'absolute'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), "Added to cart"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_c = AddToCart;
/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

var _c;

$RefreshReg$(_c, "AddToCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbImFkZFRvQ2FydFJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZSIsInF1YW50aXR5IiwiZXJyb3IiLCJBZGRUb0NhcnQiLCJjb2xvciIsImNvbnRlbnQiLCJpY29uIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsU0FDdkIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMsVUFBTSxDQUFDQyxVQUFQLENBQWtCSCxPQUFsQixFQUEyQixHQUEzQjtBQUNELEdBRkQsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFLQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQXNCO0FBQ3JDLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUQsUUFBUSxHQUFHLENBQWYsRUFBa0JDLEtBQUssR0FBRyxnQkFBUjtBQUVsQixTQUFPQSxLQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBTXRCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFXLEVBQUMsVUFGZDtBQUdFLFdBQUssRUFBRUYsUUFIVDtBQUlFLFNBQUcsRUFBRSxDQUpQO0FBS0UsVUFBSSxFQUFFLENBTFI7QUFNRSxZQUFNLEVBQUU7QUFDTkcsYUFBSyxFQUFFLE9BREQ7QUFFTkMsZUFBTyxFQUFFLGFBRkg7QUFHTkMsWUFBSSxFQUFFO0FBSEE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlSTtBQUFLLFdBQUssRUFBRTtBQUFFRixhQUFLLEVBQUUsS0FBVDtBQUFnQkcsZ0JBQVEsRUFBRTtBQUExQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosZUFrQkk7QUFBSyxXQUFLLEVBQUU7QUFBRUgsYUFBSyxFQUFFLE9BQVQ7QUFBa0JHLGdCQUFRLEVBQUU7QUFBNUIsT0FBWjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSjtBQUFBLGtCQURGO0FBMEJELENBaENEOztLQUFNSixTO0FBa0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YjVhMmQ4MWMyOWQ0NDJjMjAxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBJY29uLCBUcmFuc2l0aW9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IHVzZUNhcnRNdXRhdGlvbnMgfSBmcm9tICdAc3RvcmUvQ2FydCdcclxuXHJcbnR5cGUgQWRkVG9DYXJ0UHJvcHMgPSB7XHJcbiAgcHJvZHVjdDogVFByb2R1Y3RcclxufVxyXG5cclxuLy8gRmFrZSBhIHNlcnZlciBSZXNwb25zZSwgd2UgZG9uJ3QgY2FyZSBvbiB0aGlzIHByb2plY3RcclxuLy8gYWJvdXQgZGF0YSBwZXJzaXN0ZW5jeSwgYnV0IHlvdSBtYXkgYWRkIGl0IDopXHJcbmNvbnN0IGFkZFRvQ2FydFJlcXVlc3QgPSAoKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIDYwMClcclxuICB9KVxyXG5cclxuY29uc3QgdmFsaWRhdGUgPSAocXVhbnRpdHk6IG51bWJlcikgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnXHJcbiAgaWYgKHF1YW50aXR5IDwgMSkgZXJyb3IgPSBcIkNhbid0IGJlIGJsYW5rXCJcclxuXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmNvbnN0IEFkZFRvQ2FydCA9ICgpID0+IHtcclxuIFxyXG5cclxuICBcclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgIG1pbj17MX1cclxuICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICBjb250ZW50OiAnQWRkIHRvIENhcnQnLFxyXG4gICAgICAgICAgaWNvbjogJ3BsdXMgY2FydCcsXHJcbiAgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT4gZXJyb3I8L2Rpdj5cclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIC8+XHJcbiAgICAgICAgICBBZGRlZCB0byBjYXJ0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FydFxyXG4iXSwic291cmNlUm9vdCI6IiJ9