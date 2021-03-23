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
          display: "inline-block",
          marginLeft: "150px",
          boxShadow: "inherit"
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
        lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJib3hTaGFkb3ciLCJjb2xvciIsIlByb2R1Y3RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUN6QkEsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxFQUFULFFBQVNBLEVBQVQ7QUFBQSxRQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxRQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsd0JBQ1gscUVBQUMsZ0RBQUQ7QUFBZSxVQUFJLEVBQUMsZUFBcEI7QUFBb0MsUUFBRSxxQkFBY0YsRUFBZCxDQUF0QztBQUEwRCxjQUFRLE1BQWxFO0FBQUEsNkJBRUU7QUFBSyxhQUFLLEVBQUU7QUFBQ0csaUJBQU8sRUFBRSxjQUFWO0FBQTBCQyxvQkFBVSxFQUFFLE9BQXRDO0FBQStDQyxtQkFBUyxFQUFFO0FBQTFELFNBQVo7QUFBQSwrQkFDQSxxRUFBQyxzREFBRDtBQUNFLFlBQUUsRUFBQyxHQURMO0FBRUUsZ0JBQU0sRUFBRU4sSUFGVjtBQUdFLGVBQUssRUFBRUcsS0FIVDtBQUlFLGNBQUksZUFBRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxpQkFBSyxFQUFFO0FBQUVJLG1CQUFLLEVBQUU7QUFBVCxhQUFsQjtBQUFBLHNCQUF5Q0w7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FBV0QsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFc7QUFBQSxHQUFiLENBRHlCO0FBQUEsQ0FBM0I7O0FBZ0JBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR1YsUUFBSCxTQUFHQSxRQUFIO0FBQUEsc0JBQ2xCLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGVBQVcsRUFBRSxDQUF6QjtBQUE0QixhQUFTLE1BQXJDO0FBQUEsY0FDR0Qsa0JBQWtCLENBQUNDLFFBQUQ7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNVSxXO0FBTVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlMTRiYWY0YjE5Nzg1ZDQwZjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxudHlwZSBQcm9kdWN0TGlzdFByb3BzID0ge1xyXG4gIHByb2R1Y3RzOiBUUHJvZHVjdFtdXHJcbn1cclxuXHJcbmNvbnN0IG1hcFByb2R1Y3RzVG9DYXJkcyA9IChwcm9kdWN0czogVFByb2R1Y3RbXSkgPT5cclxuICBwcm9kdWN0cy5tYXAoKHsgbmFtZSwgaWQsIHByaWNlLCBpbWFnZSB9KSA9PiAoXHJcbiAgICA8TGluayBrZXk9e2lkfSBocmVmPVwiL3Byb2R1Y3QvW2lkXVwiIGFzPXtgL3Byb2R1Y3QvJHtpZH1gfSBwYXNzSHJlZj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiBcIjE1MHB4XCIsIGJveFNoYWRvdzogXCJpbmhlcml0XCJ9fT5cclxuICAgICAgPENhcmRcclxuICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgIGhlYWRlcj17bmFtZX1cclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgbWV0YT17PENhcmQuTWV0YSBzdHlsZT17eyBjb2xvcjogJ2RpbWdyYXknIH19PntwcmljZX08L0NhcmQuTWV0YT59XHJcbiAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvTGluaz5cclxuICApKVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBwcm9kdWN0cyB9OiBQcm9kdWN0TGlzdFByb3BzKSA9PiAoXHJcbiAgPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9ezJ9IHN0YWNrYWJsZT5cclxuICAgIHttYXBQcm9kdWN0c1RvQ2FyZHMocHJvZHVjdHMpfVxyXG4gIDwvQ2FyZC5Hcm91cD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==