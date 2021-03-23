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

var AddToCart = function AddToCart(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      placeholder: "Quantity",
      value: quantity,
      min: 1,
      step: 1,
      error: !!error,
      onChange: handleChange,
      action: {
        color: 'green',
        content: 'Add to Cart',
        icon: 'plus cart',
        onClick: handleSubmit,
        loading: loading,
        disabled: loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        color: 'red',
        position: 'absolute'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
        lineNumber: 51,
        columnNumber: 11
      }, _this), "Added to cart"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbImFkZFRvQ2FydFJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ2YWxpZGF0ZSIsInF1YW50aXR5IiwiZXJyb3IiLCJBZGRUb0NhcnQiLCJwcm9kdWN0IiwiaGFuZGxlQ2hhbmdlIiwiY29sb3IiLCJjb250ZW50IiwiaWNvbiIsIm9uQ2xpY2siLCJoYW5kbGVTdWJtaXQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUN2QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CQyxVQUFNLENBQUNDLFVBQVAsQ0FBa0JILE9BQWxCLEVBQTJCLEdBQTNCO0FBQ0QsR0FGRCxDQUR1QjtBQUFBLENBQXpCOztBQUtBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBc0I7QUFDckMsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJRCxRQUFRLEdBQUcsQ0FBZixFQUFrQkMsS0FBSyxHQUFHLGdCQUFSO0FBRWxCLFNBQU9BLEtBQVA7QUFDRCxDQUxEOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlDO0FBQUEsTUFBOUJDLE9BQThCLFFBQTlCQSxPQUE4QjtBQUlqRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBVyxFQUFDLFVBRmQ7QUFHRSxXQUFLLEVBQUVILFFBSFQ7QUFJRSxTQUFHLEVBQUUsQ0FKUDtBQUtFLFVBQUksRUFBRSxDQUxSO0FBTUUsV0FBSyxFQUFFLENBQUMsQ0FBQ0MsS0FOWDtBQU9FLGNBQVEsRUFBRUcsWUFQWjtBQVFFLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsT0FERDtBQUVOQyxlQUFPLEVBQUUsYUFGSDtBQUdOQyxZQUFJLEVBQUUsV0FIQTtBQUlOQyxlQUFPLEVBQUVDLFlBSkg7QUFLTkMsZUFBTyxFQUFQQSxPQUxNO0FBTU5DLGdCQUFRLEVBQUVEO0FBTko7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFrQkdULEtBQUssaUJBQ0o7QUFBSyxXQUFLLEVBQUU7QUFBRUksYUFBSyxFQUFFLEtBQVQ7QUFBZ0JPLGdCQUFRLEVBQUU7QUFBMUIsT0FBWjtBQUFBLGdCQUFxRFg7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSixlQXNCSTtBQUFLLFdBQUssRUFBRTtBQUFFSSxhQUFLLEVBQUUsT0FBVDtBQUFrQk8sZ0JBQVEsRUFBRTtBQUE1QixPQUFaO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUEsa0JBREY7QUE4QkQsQ0FsQ0Q7O0tBQU1WLFM7QUFvQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2ZjdjOGQxNDIwZjc4OWRjZmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEljb24sIFRyYW5zaXRpb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ0BzdG9yZS9DYXJ0J1xyXG5cclxudHlwZSBBZGRUb0NhcnRQcm9wcyA9IHtcclxuICBwcm9kdWN0OiBUUHJvZHVjdFxyXG59XHJcblxyXG4vLyBGYWtlIGEgc2VydmVyIFJlc3BvbnNlLCB3ZSBkb24ndCBjYXJlIG9uIHRoaXMgcHJvamVjdFxyXG4vLyBhYm91dCBkYXRhIHBlcnNpc3RlbmN5LCBidXQgeW91IG1heSBhZGQgaXQgOilcclxuY29uc3QgYWRkVG9DYXJ0UmVxdWVzdCA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgNjAwKVxyXG4gIH0pXHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IChxdWFudGl0eTogbnVtYmVyKSA9PiB7XHJcbiAgbGV0IGVycm9yID0gJydcclxuICBpZiAocXVhbnRpdHkgPCAxKSBlcnJvciA9IFwiQ2FuJ3QgYmUgYmxhbmtcIlxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuY29uc3QgQWRkVG9DYXJ0ID0gKHsgcHJvZHVjdCB9OiBBZGRUb0NhcnRQcm9wcykgPT4ge1xyXG4gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgIG1pbj17MX1cclxuICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgdG8gQ2FydCcsXHJcbiAgICAgICAgICBpY29uOiAncGx1cyBjYXJ0JyxcclxuICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICBkaXNhYmxlZDogbG9hZGluZyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIC8+XHJcbiAgICAgICAgICBBZGRlZCB0byBjYXJ0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=