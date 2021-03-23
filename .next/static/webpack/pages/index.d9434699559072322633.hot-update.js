webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductSummary/AddToCart */ "./components/ProductSummary/AddToCart.tsx");


var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductList\\ProductList.tsx",
    _this = undefined;





var mapProductsToCards = function mapProductsToCards(products) {
  return products.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id,
        price = _ref.price,
        image = _ref.image;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this);
  });
};

var ProductList = function ProductList(_ref2) {
  var products = _ref2.products;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    itemsPerRow: 2,
    stackable: true,
    children: mapProductsToCards(products)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, _this);
};

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdFN1bW1hcnkvQWRkVG9DYXJ0LnRzeCJdLCJuYW1lcyI6WyJtYXBQcm9kdWN0c1RvQ2FyZHMiLCJwcm9kdWN0cyIsIm1hcCIsIm5hbWUiLCJpZCIsInByaWNlIiwiaW1hZ2UiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiUHJvZHVjdExpc3QiLCJhZGRUb0NhcnRSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidmFsaWRhdGUiLCJxdWFudGl0eSIsImVycm9yIiwiQWRkVG9DYXJ0IiwicHJvZHVjdCIsImNvbnRlbnQiLCJpY29uIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FDekJBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsRUFBVCxRQUFTQSxFQUFUO0FBQUEsUUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsUUFBb0JDLEtBQXBCLFFBQW9CQSxLQUFwQjtBQUFBLHdCQUdUO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRSxjQUFWO0FBQTBCQyxrQkFBVSxFQUFFLE9BQXRDO0FBQStDQyxjQUFNLEVBQUU7QUFBdkQsT0FBWjtBQUFBLDhCQUNBLHFFQUFDLHNEQUFEO0FBQ0UsVUFBRSxFQUFDLEdBREw7QUFFRSxjQUFNLEVBQUVOLElBRlY7QUFHRSxhQUFLLEVBQUVHLEtBSFQ7QUFJRSxZQUFJLGVBQUUscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBSyxFQUFFO0FBQUVJLDJCQUFlLEVBQUUsUUFBbkI7QUFBOEJDLGlCQUFLLEVBQUU7QUFBckMsV0FBbEI7QUFBQSxrQ0FBNkVOLEtBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQVFOLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIUztBQUFBLEdBQWIsQ0FEeUI7QUFBQSxDQUEzQjs7QUFrQkEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxzQkFDbEIscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZUFBVyxFQUFFLENBQXpCO0FBQTRCLGFBQVMsTUFBckM7QUFBQSxjQUNHRCxrQkFBa0IsQ0FBQ0MsUUFBRDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBcEI7O0tBQU1XLFc7QUFNU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQ3ZCLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0JDLFVBQU0sQ0FBQ0MsVUFBUCxDQUFrQkgsT0FBbEIsRUFBMkIsR0FBM0I7QUFDRCxHQUZELENBRHVCO0FBQUEsQ0FBekI7O0FBS0EsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFzQjtBQUNyQyxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlELFFBQVEsR0FBRyxDQUFmLEVBQWtCQyxLQUFLLEdBQUcsZ0JBQVI7QUFFbEIsU0FBT0EsS0FBUDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBaUM7QUFBQSxNQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCO0FBTWpELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFXLEVBQUMsVUFGZDtBQUdFLFdBQUssRUFBRUgsUUFIVDtBQUlFLFNBQUcsRUFBRSxDQUpQO0FBS0UsVUFBSSxFQUFFLENBTFI7QUFNRSxZQUFNLEVBQUU7QUFDTlQsYUFBSyxFQUFFLE9BREQ7QUFFTmEsZUFBTyxFQUFFLGFBRkg7QUFHTkMsWUFBSSxFQUFFO0FBSEE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlSTtBQUFLLFdBQUssRUFBRTtBQUFFZCxhQUFLLEVBQUUsS0FBVDtBQUFnQmUsZ0JBQVEsRUFBRTtBQUExQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosZUFrQkk7QUFBSyxXQUFLLEVBQUU7QUFBRWYsYUFBSyxFQUFFLE9BQVQ7QUFBa0JlLGdCQUFRLEVBQUU7QUFBNUIsT0FBWjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSjtBQUFBLGtCQURGO0FBMEJELENBaENEOztLQUFNSixTO0FBa0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTQzNDY5OTU1OTA3MjMyMjYzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuLi9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQnO1xyXG5cclxudHlwZSBQcm9kdWN0TGlzdFByb3BzID0ge1xyXG4gIHByb2R1Y3RzOiBUUHJvZHVjdFtdXHJcbn1cclxuXHJcbmNvbnN0IG1hcFByb2R1Y3RzVG9DYXJkcyA9IChwcm9kdWN0czogVFByb2R1Y3RbXSkgPT5cclxuICBwcm9kdWN0cy5tYXAoKHsgbmFtZSwgaWQsIHByaWNlLCBpbWFnZSB9KSA9PiAoXHJcblxyXG4gICAgICBcclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiMTUwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MClcIn19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgaGVhZGVyPXtuYW1lfVxyXG4gICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICBtZXRhPXs8Q2FyZC5NZXRhIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiAsIGNvbG9yOiAnZGltZ3JheSd9fT4gUHJlY2lvOiB7cHJpY2V9ICQgPC9DYXJkLk1ldGE+fVxyXG4gICAgICAvPlxyXG5cclxuPEFkZFRvQ2FydCAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICApKVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBwcm9kdWN0cyB9OiBQcm9kdWN0TGlzdFByb3BzKSA9PiAoXHJcbiAgPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9ezJ9IHN0YWNrYWJsZT5cclxuICAgIHttYXBQcm9kdWN0c1RvQ2FyZHMocHJvZHVjdHMpfVxyXG4gIDwvQ2FyZC5Hcm91cD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBJY29uLCBUcmFuc2l0aW9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7IHVzZUNhcnRNdXRhdGlvbnMgfSBmcm9tICdAc3RvcmUvQ2FydCdcclxuXHJcbnR5cGUgQWRkVG9DYXJ0UHJvcHMgPSB7XHJcbiAgcHJvZHVjdDogVFByb2R1Y3RcclxufVxyXG5cclxuLy8gRmFrZSBhIHNlcnZlciBSZXNwb25zZSwgd2UgZG9uJ3QgY2FyZSBvbiB0aGlzIHByb2plY3RcclxuLy8gYWJvdXQgZGF0YSBwZXJzaXN0ZW5jeSwgYnV0IHlvdSBtYXkgYWRkIGl0IDopXHJcbmNvbnN0IGFkZFRvQ2FydFJlcXVlc3QgPSAoKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIDYwMClcclxuICB9KVxyXG5cclxuY29uc3QgdmFsaWRhdGUgPSAocXVhbnRpdHk6IG51bWJlcikgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnXHJcbiAgaWYgKHF1YW50aXR5IDwgMSkgZXJyb3IgPSBcIkNhbid0IGJlIGJsYW5rXCJcclxuXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmNvbnN0IEFkZFRvQ2FydCA9ICh7IHByb2R1Y3QgfTogQWRkVG9DYXJ0UHJvcHMpID0+IHtcclxuIFxyXG5cclxuICBcclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgIG1pbj17MX1cclxuICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICBjb250ZW50OiAnQWRkIHRvIENhcnQnLFxyXG4gICAgICAgICAgaWNvbjogJ3BsdXMgY2FydCcsXHJcbiAgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT4gZXJyb3I8L2Rpdj5cclxuICAgICAgXHJcbiAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIC8+XHJcbiAgICAgICAgICBBZGRlZCB0byBjYXJ0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FydFxyXG4iXSwic291cmNlUm9vdCI6IiJ9