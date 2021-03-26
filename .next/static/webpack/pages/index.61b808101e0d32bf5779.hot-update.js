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
          lineNumber: 17,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
    lineNumber: 26,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlByb2R1Y3RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQ3pCQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLEVBQVQsUUFBU0EsRUFBVDtBQUFBLFFBQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLFFBQW9CQyxLQUFwQixRQUFvQkEsS0FBcEI7QUFBQSx3QkFDVDtBQUFLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUUsY0FBVjtBQUEwQkMsa0JBQVUsRUFBRSxPQUF0QztBQUErQ0MsY0FBTSxFQUFFO0FBQXZELE9BQVo7QUFBQSw4QkFDQSxxRUFBQyxzREFBRDtBQUNFLFVBQUUsRUFBQyxHQURMO0FBRUUsY0FBTSxFQUFFTixJQUZWO0FBR0UsYUFBSyxFQUFFRyxLQUhUO0FBSUUsWUFBSSxlQUFFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGVBQUssRUFBRTtBQUFFSSwyQkFBZSxFQUFFLFFBQW5CO0FBQThCQyxpQkFBSyxFQUFFO0FBQXJDLFdBQWxCO0FBQUEsa0NBQTZFTixLQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFPTixxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFM7QUFBQSxHQUFiLENBRHlCO0FBQUEsQ0FBM0I7O0FBZUEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxzQkFDbEIscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZUFBVyxFQUFFLENBQXpCO0FBQTRCLGFBQVMsTUFBckM7QUFBQSxjQUNHRCxrQkFBa0IsQ0FBQ0MsUUFBRDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBcEI7O0tBQU1XLFc7QUFNU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFiODA4MTAxZTBkMzJiZjU3NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi4vUHJvZHVjdFN1bW1hcnkvQWRkVG9DYXJ0JztcclxuXHJcbnR5cGUgUHJvZHVjdExpc3RQcm9wcyA9IHtcclxuICBwcm9kdWN0czogVFByb2R1Y3RbXVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9kdWN0c1RvQ2FyZHMgPSAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+XHJcbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKCBcclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiMTUwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MClcIn19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgaGVhZGVyPXtuYW1lfVxyXG4gICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICBtZXRhPXs8Q2FyZC5NZXRhIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiAsIGNvbG9yOiAnZGltZ3JheSd9fT4gUHJlY2lvOiB7cHJpY2V9ICQgPC9DYXJkLk1ldGE+fVxyXG4gICAgICAvPlxyXG48QWRkVG9DYXJ0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIFxyXG4gICkpXHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IHByb2R1Y3RzIH06IFByb2R1Y3RMaXN0UHJvcHMpID0+IChcclxuICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gc3RhY2thYmxlPlxyXG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XHJcbiAgPC9DYXJkLkdyb3VwPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9