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
      lineNumber: 44,
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
        lineNumber: 48,
        columnNumber: 11
      }, _this), "Added to cart"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbImFkZFRvQ2FydFJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZSIsInF1YW50aXR5IiwiZXJyb3IiLCJBZGRUb0NhcnQiLCJjb2xvciIsImNvbnRlbnQiLCJpY29uIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsU0FDdkIsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMsVUFBTSxDQUFDQyxVQUFQLENBQWtCSCxPQUFsQixFQUEyQixHQUEzQjtBQUNELEdBRkQsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFLQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQXNCO0FBQ3JDLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUQsUUFBUSxHQUFHLENBQWYsRUFBa0JDLEtBQUssR0FBRyxnQkFBUjtBQUVsQixTQUFPQSxLQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBTXRCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFXLEVBQUMsVUFGZDtBQUdFLFdBQUssRUFBRUYsUUFIVDtBQUdrQixTQUFHLEVBQUUsQ0FIdkI7QUFJRSxVQUFJLEVBQUUsQ0FKUjtBQUtFLFlBQU0sRUFBRTtBQUNORyxhQUFLLEVBQUUsT0FERDtBQUVOQyxlQUFPLEVBQUUsYUFGSDtBQUdOQyxZQUFJLEVBQUU7QUFIQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWNJO0FBQUssV0FBSyxFQUFFO0FBQUVGLGFBQUssRUFBRSxLQUFUO0FBQWdCRyxnQkFBUSxFQUFFO0FBQTFCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixlQWlCSTtBQUFLLFdBQUssRUFBRTtBQUFFSCxhQUFLLEVBQUUsT0FBVDtBQUFrQkcsZ0JBQVEsRUFBRTtBQUE1QixPQUFaO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUEsa0JBREY7QUF5QkQsQ0EvQkQ7O0tBQU1KLFM7QUFpQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3ZDc5ZDY3NWNiNDlhYzEyM2FjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEljb24sIFRyYW5zaXRpb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ0BzdG9yZS9DYXJ0J1xyXG5cclxudHlwZSBBZGRUb0NhcnRQcm9wcyA9IHtcclxuICBwcm9kdWN0OiBUUHJvZHVjdFxyXG59XHJcblxyXG4vLyBGYWtlIGEgc2VydmVyIFJlc3BvbnNlLCB3ZSBkb24ndCBjYXJlIG9uIHRoaXMgcHJvamVjdFxyXG4vLyBhYm91dCBkYXRhIHBlcnNpc3RlbmN5LCBidXQgeW91IG1heSBhZGQgaXQgOilcclxuY29uc3QgYWRkVG9DYXJ0UmVxdWVzdCA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgNjAwKVxyXG4gIH0pXHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IChxdWFudGl0eTogbnVtYmVyKSA9PiB7XHJcbiAgbGV0IGVycm9yID0gJydcclxuICBpZiAocXVhbnRpdHkgPCAxKSBlcnJvciA9IFwiQ2FuJ3QgYmUgYmxhbmtcIlxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuY29uc3QgQWRkVG9DYXJ0ID0gKCkgPT4ge1xyXG4gXHJcblxyXG4gIFxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICB2YWx1ZT17cXVhbnRpdHl9bWluPXsxfVxyXG4gICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgdG8gQ2FydCcsXHJcbiAgICAgICAgICBpY29uOiAncGx1cyBjYXJ0JyxcclxuICBcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PiBlcnJvcjwvZGl2PlxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrXCIgLz5cclxuICAgICAgICAgIEFkZGVkIHRvIGNhcnRcclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=