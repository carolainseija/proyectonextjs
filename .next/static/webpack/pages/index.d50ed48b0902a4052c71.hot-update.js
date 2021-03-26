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
/* harmony import */ var context_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/Cart */ "./context/Cart.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\carolain Matea\\platzi cursos\\proyectonextjs\\components\\ProductSummary\\AddToCart.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var AddToCart = function AddToCart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      quantity = _useState3[0],
      setQuantity = _useState3[1];

  var nowAddToCart = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context_Cart__WEBPACK_IMPORTED_MODULE_3__["useCartMutations"]);

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
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

_s(AddToCart, "Xti0SYu41pyCI2VSS+Yomd9QjSk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9BZGRUb0NhcnQudHN4Il0sIm5hbWVzIjpbIkFkZFRvQ2FydCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm5vd0FkZFRvQ2FydCIsInVzZUNvbnRleHQiLCJ1c2VDYXJ0TXV0YXRpb25zIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiY29udGVudCIsImljb24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUVqQkMsT0FGaUI7QUFBQSxNQUVSQyxVQUZROztBQUFBLG1CQUdJRixzREFBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBLE1BR2ZHLEtBSGU7QUFBQSxNQUdSQyxRQUhROztBQUFBLG1CQUlVSixzREFBUSxDQUFDLENBQUQsQ0FKbEI7QUFBQSxNQUlmSyxRQUplO0FBQUEsTUFJTEMsV0FKSzs7QUFNeEIsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyw2REFBRCxDQUEvQjs7QUFHRSxNQUFNQyxZQUFZO0FBQUEsZ1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJQLFFBQTVCOztBQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU1GLE1BQU9HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTTtBQUMxQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBTixlQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUhEOztBQUtFLHNCQUNFO0FBQUEsMkJBQ0EscUVBQUMsdURBQUQ7QUFDSSxVQUFJLEVBQUMsUUFEVDtBQUVJLGlCQUFXLEVBQUMsVUFGaEI7QUFHSSxXQUFLLEVBQUVYLFFBSFg7QUFJSSxTQUFHLEVBQUUsQ0FKVDtBQUtJLFVBQUksRUFBRSxDQUxWO0FBTUksV0FBSyxFQUFFLENBQUMsQ0FBQ0YsS0FOYjtBQU9JLGNBQVEsRUFBRVUsWUFQZDtBQVFJLFlBQU0sRUFBRTtBQUNOSSxhQUFLLEVBQUUsT0FERDtBQUVOQyxlQUFPLEVBQUUsYUFGSDtBQUdOQyxZQUFJLEVBQUUsV0FIQTtBQUlOQyxlQUFPLEVBQUVWLFlBSkg7QUFLTlQsZUFBTyxFQUFQQSxPQUxNO0FBTU5vQixnQkFBUSxFQUFFcEI7QUFOSjtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQXVCRCxDQTNDRDs7R0FBTUYsUzs7S0FBQUEsUztBQTZDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDUwZWQ0OGIwOTAyYTQwNTJjNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhcnRNdXRhdGlvbnMgfSBmcm9tICdjb250ZXh0L0NhcnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEljb24sIFRyYW5zaXRpb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCBBZGRUb0NhcnQgPSAoKSA9PiB7XHJcbiBcclxuY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXHJcbiAgXHJcbmNvbnN0IG5vd0FkZFRvQ2FydCA9IHVzZUNvbnRleHQodXNlQ2FydE11dGF0aW9ucylcclxuICBcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnYWRkIHRvIENhcnQnKVxyXG4gICAgY29uc29sZS5sb2coJ3F1YW50eSB0b3RhbCcsIHF1YW50aXR5KVxyXG5cclxuICB9XHJcblxyXG5jb25zdCAgaGFuZGxlQ2hhbmdlID0gKGUpPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdoYW5kbGUgY2hhbmdlJylcclxuICBzZXRRdWFudGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgbWluPXsxfVxyXG4gICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgY29udGVudDogJ0FkZCB0byBDYXJ0JyxcclxuICAgICAgICAgIGljb246ICdwbHVzIGNhcnQnLFxyXG4gICAgICAgICAgb25DbGljazogaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkOiBsb2FkaW5nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+IFxyXG4gICBcclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb0NhcnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==