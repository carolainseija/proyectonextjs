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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\igles\\Desktop\\nextjs\\proyectonextjs\\components\\ProductList\\ProductList.tsx",
    _this = undefined;





var mapProductsToCards = function mapProductsToCards(products) {
  return products.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id,
        price = _ref.price,
        image = _ref.image;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(id),
      passHref: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "300px",
          backgroundColor: "red",
          height: "500px",
          display: "inline-block"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          as: "a",
          header: name,
          image: image,
          meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            style: {
              color: 'dimgray'
            },
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)
    }, id, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
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
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJkaXNwbGF5IiwiY29sb3IiLCJQcm9kdWN0TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FDekJBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsRUFBVCxRQUFTQSxFQUFUO0FBQUEsUUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsUUFBb0JDLEtBQXBCLFFBQW9CQSxLQUFwQjtBQUFBLHdCQUNYLHFFQUFDLGdEQUFEO0FBQWUsVUFBSSxFQUFDLGVBQXBCO0FBQW9DLFFBQUUscUJBQWNGLEVBQWQsQ0FBdEM7QUFBMEQsY0FBUSxNQUFsRTtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUNHLGVBQUssRUFBRSxPQUFSO0FBQWlCQyx5QkFBZSxFQUFFLEtBQWxDO0FBQXlDQyxnQkFBTSxFQUFFLE9BQWpEO0FBQTBEQyxpQkFBTyxFQUFFO0FBQW5FLFNBQVo7QUFBQSwrQkFFQSxxRUFBQyxzREFBRDtBQUNFLFlBQUUsRUFBQyxHQURMO0FBRUUsZ0JBQU0sRUFBRVAsSUFGVjtBQUdFLGVBQUssRUFBRUcsS0FIVDtBQUlFLGNBQUksZUFBRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxpQkFBSyxFQUFFO0FBQUVLLG1CQUFLLEVBQUU7QUFBVCxhQUFsQjtBQUFBLHNCQUF5Q047QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBV0QsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFc7QUFBQSxHQUFiLENBRHlCO0FBQUEsQ0FBM0I7O0FBZUEsSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxzQkFDbEIscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksZUFBVyxFQUFFLENBQXpCO0FBQTRCLGFBQVMsTUFBckM7QUFBQSxjQUNHRCxrQkFBa0IsQ0FBQ0MsUUFBRDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBcEI7O0tBQU1XLFc7QUFNU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjUzZjlhMjkyMGI2NzJiYjk3ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG50eXBlIFByb2R1Y3RMaXN0UHJvcHMgPSB7XHJcbiAgcHJvZHVjdHM6IFRQcm9kdWN0W11cclxufVxyXG5cclxuY29uc3QgbWFwUHJvZHVjdHNUb0NhcmRzID0gKHByb2R1Y3RzOiBUUHJvZHVjdFtdKSA9PlxyXG4gIHByb2R1Y3RzLm1hcCgoeyBuYW1lLCBpZCwgcHJpY2UsIGltYWdlIH0pID0+IChcclxuICAgIDxMaW5rIGtleT17aWR9IGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke2lkfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMzAwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLCBoZWlnaHQ6IFwiNTAwcHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PlxyXG5cclxuICAgICAgPENhcmRcclxuICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgIGhlYWRlcj17bmFtZX1cclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgbWV0YT17PENhcmQuTWV0YSBzdHlsZT17eyBjb2xvcjogJ2RpbWdyYXknIH19PntwcmljZX08L0NhcmQuTWV0YT59XHJcbiAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICkpXHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IHByb2R1Y3RzIH06IFByb2R1Y3RMaXN0UHJvcHMpID0+IChcclxuICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gc3RhY2thYmxlPlxyXG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XHJcbiAgPC9DYXJkLkdyb3VwPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9