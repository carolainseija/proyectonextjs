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
/* harmony import */ var C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductSummary\\AddToCart.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var AddToCart = function AddToCart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      quantity = _useState3[0],
      setQuantity = _useState3[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_Usuario_Desktop_carolain_Matea_platzi_cursos_proyectonextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('add to Cart');
              console.log('quanty total', quantity);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    console.log('handle change');
    setQuantity(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
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
      lineNumber: 27,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(AddToCart, "zYoI6JCK0EgcVWGMaAxZODkFvOw=");

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

/***/ }),

/***/ "./context/Cart.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbIkFkZFRvQ2FydCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImNvbnRlbnQiLCJpY29uIiwib25DbGljayIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFakJDLE9BRmlCO0FBQUEsTUFFUkMsVUFGUTs7QUFBQSxtQkFHSUYsc0RBQVEsQ0FBQyxFQUFELENBSFo7QUFBQSxNQUdmRyxLQUhlO0FBQUEsTUFHUkMsUUFIUTs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxDQUFELENBSmxCO0FBQUEsTUFJZkssUUFKZTtBQUFBLE1BSUxDLFdBSks7O0FBU3RCLE1BQU1DLFlBQVk7QUFBQSxnV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkosUUFBNUI7O0FBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpFLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBTUYsTUFBT0csWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFNO0FBQzFCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FILGVBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBSEQ7O0FBS0Usc0JBQ0U7QUFBQSwyQkFDQSxxRUFBQyx1REFBRDtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksaUJBQVcsRUFBQyxVQUZoQjtBQUdJLFdBQUssRUFBRVIsUUFIWDtBQUlJLFNBQUcsRUFBRSxDQUpUO0FBS0ksVUFBSSxFQUFFLENBTFY7QUFNSSxXQUFLLEVBQUUsQ0FBQyxDQUFDRixLQU5iO0FBT0ksY0FBUSxFQUFFTyxZQVBkO0FBUUksWUFBTSxFQUFFO0FBQ05JLGFBQUssRUFBRSxPQUREO0FBRU5DLGVBQU8sRUFBRSxhQUZIO0FBR05DLFlBQUksRUFBRSxXQUhBO0FBSU5DLGVBQU8sRUFBRVYsWUFKSDtBQUtOTixlQUFPLEVBQVBBLE9BTE07QUFNTmlCLGdCQUFRLEVBQUVqQjtBQU5KO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBdUJELENBM0NEOztHQUFNRixTOztLQUFBQSxTO0FBNkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYmFmZWY5ODI1ZjE2YjNkMmI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ2NvbnRleHQvQ2FydCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgSWNvbiwgVHJhbnNpdGlvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IEFkZFRvQ2FydCA9ICgpID0+IHtcclxuIFxyXG5jb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuICBcclxuXHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2FkZCB0byBDYXJ0JylcclxuICAgIGNvbnNvbGUubG9nKCdxdWFudHkgdG90YWwnLCBxdWFudGl0eSlcclxuXHJcbiAgfVxyXG5cclxuY29uc3QgIGhhbmRsZUNoYW5nZSA9IChlKT0+IHtcclxuICBjb25zb2xlLmxvZygnaGFuZGxlIGNoYW5nZScpXHJcbiAgc2V0UXVhbnRpdHkoZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPElucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgIG1pbj17MX1cclxuICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgdG8gQ2FydCcsXHJcbiAgICAgICAgICBpY29uOiAncGx1cyBjYXJ0JyxcclxuICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICBkaXNhYmxlZDogbG9hZGluZyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPiBcclxuICAgXHJcbiAgICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=