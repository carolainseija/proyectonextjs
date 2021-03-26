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
              alert('Ya hemos añadido a tu canasta');
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
      lineNumber: 25,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbIkFkZFRvQ2FydCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImhhbmRsZVN1Ym1pdCIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiY29udGVudCIsImljb24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUVqQkMsT0FGaUI7QUFBQSxNQUVSQyxVQUZROztBQUFBLG1CQUdJRixzREFBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBLE1BR2ZHLEtBSGU7QUFBQSxNQUdSQyxRQUhROztBQUFBLG1CQUlVSixzREFBUSxDQUFDLENBQUQsQ0FKbEI7QUFBQSxNQUlmSyxRQUplO0FBQUEsTUFJTEMsV0FKSzs7QUFPdEIsTUFBTUMsWUFBWTtBQUFBLGdXQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLG1CQUFLLENBQUMsK0JBQUQsQ0FBTDtBQUNDQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkwsUUFBNUI7O0FBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpFLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBTUYsTUFBT0ksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFNO0FBQzFCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FKLGVBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBSEQ7O0FBS0Usc0JBQ0U7QUFBQSwyQkFDQSxxRUFBQyx1REFBRDtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksaUJBQVcsRUFBQyxVQUZoQjtBQUdJLFdBQUssRUFBRVQsUUFIWDtBQUlJLFNBQUcsRUFBRSxDQUpUO0FBS0ksVUFBSSxFQUFFLENBTFY7QUFNSSxXQUFLLEVBQUUsQ0FBQyxDQUFDRixLQU5iO0FBT0ksY0FBUSxFQUFFUSxZQVBkO0FBUUksWUFBTSxFQUFFO0FBQ05JLGFBQUssRUFBRSxPQUREO0FBRU5DLGVBQU8sRUFBRSxhQUZIO0FBR05DLFlBQUksRUFBRSxXQUhBO0FBSU5DLGVBQU8sRUFBRVgsWUFKSDtBQUtOTixlQUFPLEVBQVBBLE9BTE07QUFNTmtCLGdCQUFRLEVBQUVsQjtBQU5KO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBdUJELENBekNEOztHQUFNRixTOztLQUFBQSxTO0FBMkNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjc0ZmIzNWViZWUxYjc1NjQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ2NvbnRleHQvQ2FydCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgSWNvbiwgVHJhbnNpdGlvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IEFkZFRvQ2FydCA9ICgpID0+IHtcclxuIFxyXG5jb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuICBcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgIGFsZXJ0KCdZYSBoZW1vcyBhw7FhZGlkbyBhIHR1IGNhbmFzdGEnKVxyXG4gICAgY29uc29sZS5sb2coJ3F1YW50eSB0b3RhbCcsIHF1YW50aXR5KVxyXG5cclxuICB9XHJcblxyXG5jb25zdCAgaGFuZGxlQ2hhbmdlID0gKGUpPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdoYW5kbGUgY2hhbmdlJylcclxuICBzZXRRdWFudGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgbWluPXsxfVxyXG4gICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgY29udGVudDogJ0FkZCB0byBDYXJ0JyxcclxuICAgICAgICAgIGljb246ICdwbHVzIGNhcnQnLFxyXG4gICAgICAgICAgb25DbGljazogaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkOiBsb2FkaW5nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+IFxyXG4gICBcclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb0NhcnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==