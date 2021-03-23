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
          height: "300px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJjb2xvciIsIlByb2R1Y3RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUN6QkEsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxFQUFULFFBQVNBLEVBQVQ7QUFBQSxRQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxRQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsd0JBQ1gscUVBQUMsZ0RBQUQ7QUFBZSxVQUFJLEVBQUMsZUFBcEI7QUFBb0MsUUFBRSxxQkFBY0YsRUFBZCxDQUF0QztBQUEwRCxjQUFRLE1BQWxFO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBQ0csZUFBSyxFQUFFLE9BQVI7QUFBaUJDLHlCQUFlLEVBQUUsS0FBbEM7QUFBeUNDLGdCQUFNLEVBQUU7QUFBakQsU0FBWjtBQUFBLCtCQUVBLHFFQUFDLHNEQUFEO0FBQ0UsWUFBRSxFQUFDLEdBREw7QUFFRSxnQkFBTSxFQUFFTixJQUZWO0FBR0UsZUFBSyxFQUFFRyxLQUhUO0FBSUUsY0FBSSxlQUFFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGlCQUFLLEVBQUU7QUFBRUksbUJBQUssRUFBRTtBQUFULGFBQWxCO0FBQUEsc0JBQXlDTDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFXRCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVztBQUFBLEdBQWIsQ0FEeUI7QUFBQSxDQUEzQjs7QUFlQSxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdWLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHNCQUNsQixxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxlQUFXLEVBQUUsQ0FBekI7QUFBNEIsYUFBUyxNQUFyQztBQUFBLGNBQ0dELGtCQUFrQixDQUFDQyxRQUFEO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7S0FBTVUsVztBQU1TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ODg1YzRlNmFlNGY1YTQ1YmZlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbnR5cGUgUHJvZHVjdExpc3RQcm9wcyA9IHtcclxuICBwcm9kdWN0czogVFByb2R1Y3RbXVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9kdWN0c1RvQ2FyZHMgPSAocHJvZHVjdHM6IFRQcm9kdWN0W10pID0+XHJcbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxyXG4gICAgPExpbmsga2V5PXtpZH0gaHJlZj1cIi9wcm9kdWN0L1tpZF1cIiBhcz17YC9wcm9kdWN0LyR7aWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIzMDBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsIGhlaWdodDogXCIzMDBweFwifX0+XHJcblxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgaGVhZGVyPXtuYW1lfVxyXG4gICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICBtZXRhPXs8Q2FyZC5NZXRhIHN0eWxlPXt7IGNvbG9yOiAnZGltZ3JheScgfX0+e3ByaWNlfTwvQ2FyZC5NZXRhPn1cclxuICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKSlcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgcHJvZHVjdHMgfTogUHJvZHVjdExpc3RQcm9wcykgPT4gKFxyXG4gIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBzdGFja2FibGU+XHJcbiAgICB7bWFwUHJvZHVjdHNUb0NhcmRzKHByb2R1Y3RzKX1cclxuICA8L0NhcmQuR3JvdXA+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=