webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Eventos.js":
/*!********************************!*\
  !*** ./componentes/Eventos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\vipat\\Desktop\\bitcoinapp\\componentes\\Eventos.js";


var Eventos = function Eventos(props) {
  var eventoId = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.eventos);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentes_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/Master */ "./componentes/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componentes_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/Precio */ "./componentes/Precio.js");
/* harmony import */ var _componentes_Noticias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/Noticias */ "./componentes/Noticias.js");
/* harmony import */ var _componentes_Eventos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/Eventos */ "./componentes/Eventos.js");


var _jsxFileName = "C:\\Users\\vipat\\Desktop\\bitcoinapp\\pages\\index.js";







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Noticias sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Noticias__WEBPACK_IMPORTED_MODULE_6__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Pr\xF3ximos Eventos Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_componentes_Eventos__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventos: props.eventos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, noticas, eventos, resPrecio, resNoticas, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=bb7f731971db45a088b78983e25e4103&languaje=es');

        case 5:
          noticas = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=BY6SXWKXQGIN7TL7F3HW');

        case 8:
          eventos = _context.sent;
          _context.next = 11;
          return precio.json();

        case 11:
          resPrecio = _context.sent;
          _context.next = 14;
          return noticas.json();

        case 14:
          resNoticas = _context.sent;
          _context.next = 17;
          return eventos.json();

        case 17:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticas.articles,
            eventos: resEventos.events
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.770e95575c15f122e3c1.hot-update.js.map