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
/* harmony import */ var _ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductSummary/AddToCart */ "./components/ProductSummary/AddToCart.tsx");


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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/product%[id]",
        as: "/product/".concat(id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
            lineNumber: 18,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 1
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductSummary_AddToCart__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlByb2R1Y3RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUN6QkEsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxFQUFULFFBQVNBLEVBQVQ7QUFBQSxRQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxRQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsd0JBQ1g7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLGNBQVg7QUFBMkJDLGtCQUFVLEVBQUUsT0FBdkM7QUFBZ0RDLGNBQU0sRUFBRTtBQUF4RCxPQUFaO0FBQUEsOEJBQ0oscUVBQUMsZ0RBQUQ7QUFBZSxZQUFJLEVBQUMsZUFBcEI7QUFBb0MsVUFBRSxxQkFBZUwsRUFBZixDQUF0QztBQUFBLCtCQUNNLHFFQUFDLHNEQUFEO0FBQ0UsWUFBRSxFQUFDLEdBREw7QUFFRSxnQkFBTSxFQUFFRCxJQUZWO0FBR0UsZUFBSyxFQUFFRyxLQUhUO0FBSUUsY0FBSSxlQUFFLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLGlCQUFLLEVBQUU7QUFBRUksNkJBQWUsRUFBRSxRQUFuQjtBQUE2QkMsbUJBQUssRUFBRTtBQUFwQyxhQUFsQjtBQUFBLG9DQUE2RU4sS0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROLFNBQVdELEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJLGVBU0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURXO0FBQUEsR0FBYixDQUR5QjtBQUFBLENBQTNCOztBQWVBLElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR1gsUUFBSCxTQUFHQSxRQUFIO0FBQUEsc0JBQ2xCLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGVBQVcsRUFBRSxDQUF6QjtBQUE0QixhQUFTLE1BQXJDO0FBQUEsY0FDR0Qsa0JBQWtCLENBQUNDLFFBQUQ7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNVyxXO0FBTVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiYTRjM2JhYzA0OWE1MzAyZjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4uL1Byb2R1Y3RTdW1tYXJ5L0FkZFRvQ2FydCc7XHJcblxyXG50eXBlIFByb2R1Y3RMaXN0UHJvcHMgPSB7XHJcbiAgcHJvZHVjdHM6IFRQcm9kdWN0W11cclxufVxyXG5cclxuY29uc3QgbWFwUHJvZHVjdHNUb0NhcmRzID0gKHByb2R1Y3RzOiBUUHJvZHVjdFtdKSA9PlxyXG4gIHByb2R1Y3RzLm1hcCgoeyBuYW1lLCBpZCwgcHJpY2UsIGltYWdlIH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luTGVmdDogXCIxNTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKVwiIH19PlxyXG48TGluayBrZXk9e2lkfSBocmVmPVwiL3Byb2R1Y3QlW2lkXVwiIGFzID17YC9wcm9kdWN0LyR7aWR9YH0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICBoZWFkZXI9e25hbWV9XHJcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgIG1ldGE9ezxDYXJkLk1ldGEgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLCBjb2xvcjogJ2RpbWdyYXknIH19PiBQcmVjaW86IHtwcmljZX0gJCA8L0NhcmQuTWV0YT59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDxBZGRUb0NhcnQgLz5cclxuICAgIDwvZGl2PlxyXG4gICkpXHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IHByb2R1Y3RzIH06IFByb2R1Y3RMaXN0UHJvcHMpID0+IChcclxuICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gc3RhY2thYmxlPlxyXG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XHJcbiAgPC9DYXJkLkdyb3VwPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9