module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cors-middleware.ts":
/*!****************************!*\
  !*** ./cors-middleware.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */
const CORS_OPTIONS = {
  methods: ['GET', 'OPTIONS']
};

function promisifyMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
} // Initialize the cors middleware


const cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/[id].ts":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ "./cors-middleware.ts");



const AvoDetail = async (req, res) => {
  try {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const avoId = req.query.id;
    const avo = await db.getById(avoId); // https://nextjs.org/docs/api-routes/response-helpers

    res.status(200).json(avo);
  } catch (e) {
    console.error(e);
    res.status(404).end();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AvoDetail);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ycy1taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F2by8udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIl0sIm5hbWVzIjpbIkNPUlNfT1BUSU9OUyIsIm1ldGhvZHMiLCJwcm9taXNpZnlNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJjb3JzIiwiY29yc1dyYXBwZXIiLCJkYXRhIiwibmFtZSIsImlkIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiLCJiOHV0aGUyeSIsImV3eHNkNnhiIiwiZnByNzJtOWsiLCJ0OWR2MjVncyIsInQzNDV3NDh5IiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImdldEFsbCIsImFzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhbGxEYXRhIiwicmFuZG9tRGVsYXkiLCJnZXRCeUlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJBdm9EZXRhaWwiLCJlbmFibGVQdWJsaWNBY2Nlc3MiLCJkYiIsIkRCIiwiYXZvSWQiLCJxdWVyeSIsImF2byIsInN0YXR1cyIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F2by9baWRdLnRzXCIpO1xuIiwiaW1wb3J0IGNvcnNXcmFwcGVyIGZyb20gJ2NvcnMnXHJcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcydcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy9hcGktcm91dGVzLWNvcnNcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAqL1xyXG5jb25zdCBDT1JTX09QVElPTlMgPSB7XHJcbiAgbWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9taXNpZnlNaWRkbGV3YXJlKG1pZGRsZXdhcmU6IFJlcXVlc3RIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIChyZXE6IGFueSwgcmVzOiBhbnkpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQ6IEVycm9yIHwgdW5rbm93bikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxyXG5jb25zdCBjb3JzID0gcHJvbWlzaWZ5TWlkZGxld2FyZShjb3JzV3JhcHBlcihDT1JTX09QVElPTlMpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yc1xyXG4iLCJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xyXG4gICAgJzJ6ZDMzYjhjJzoge1xyXG4gICAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnMnpkMzNiOGMnLFxyXG4gICAgICBza3U6ICdOVVI3MktDTScsXHJcbiAgICAgIHByaWNlOiAxLjE1LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxyXG4gICAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnNnRyZmdra2onOiB7XHJcbiAgICAgIG5hbWU6ICdGdWVydGUgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnNnRyZmdra2onLFxyXG4gICAgICBza3U6ICdBWDRNOFNKVicsXHJcbiAgICAgIHByaWNlOiAxLjIxLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZnVlcnRlLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdUaGUgRnVlcnRlIGF2b2NhZG8gaXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvbW1lcmNpYWwgdmFyaWV0eSBiZWhpbmQgSGFzcy4gSXQgaXMgYSBsb25nIHRpbWUgQ2FsaWZvcm5pYSBjb21tZXJjaWFsIHZhcmlldHkgdmFsdWVkIGZvciBpdHMgd2ludGVyIHNlYXNvbiByaXBlbmluZyBhbmQgaXRzIEItVHlwZSBibG9zc29tIHR5cGUgd2hpY2ggbW9zdCBncm93ZXJzIHBsYW50IGFkamFjZW50IHRvIHRoZSBIYXNzIGZvciBhIG1vcmUgY29uc2lzdGVudCBwcm9kdWN0aW9uIGN5Y2xlLiBUaGlzIGF2b2NhZG8gdGVuZHMgdG8gcHJvZHVjZSBoZWF2aWx5IGluIGFsdGVybmF0ZSB5ZWFycy4nLFxyXG4gICAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnLTEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ01hZ25pZmljZW50LCBpcyBhIHN0cm9uZyBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnN2JjcjQ5ZW0nOiB7XHJcbiAgICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnN2JjcjQ5ZW0nLFxyXG4gICAgICBza3U6ICdIWUE3OEY2SicsXHJcbiAgICAgIHByaWNlOiAxLjI1LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZ3dlbi5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgc2VlZGxpbmcgYnJlZCBmcm9tICdIYXNzJyB4ICdUaGlsbGUnIGluIDE5ODIsICdHd2VuJyBpcyBoaWdoZXIgeWllbGRpbmcgYW5kIG1vcmUgZHdhcmZpbmcgdGhhbiAnSGFzcycgaW4gQ2FsaWZvcm5pYS4gVGhlIGZydWl0IGhhcyBhbiBvdmFsIHNoYXBlLCBzbGlnaHRseSBzbWFsbGVyIHRoYW4gJ0hhc3MnICgxMDDigJMyMDAgZyBvciAzLjXigJM3LjEgb3opLCB3aXRoIGEgcmljaCwgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiB0ZXh0dXJlIGlzIG1vcmUgZmluZWx5IHBlYmJsZWQgdGhhbiAnSGFzcycsIGFuZCBpcyBkdWxsIGdyZWVuIHdoZW4gcmlwZS4gSXQgaXMgZnJvc3QtaGFyZHkgZG93biB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICAgIHNoYXBlOiAnUGx1bXAnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ1N1cGVyYiwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJzA5ODMyM2tzJzoge1xyXG4gICAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnMDk4MzIza3MnLFxyXG4gICAgICBza3U6ICdCWEQxMDBCTEsnLFxyXG4gICAgICBwcmljZTogMS41MSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcclxuICAgICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYjh1dGhlMnk6IHtcclxuICAgICAgbmFtZTogJ0hhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnYjh1dGhlMnknLFxyXG4gICAgICBza3U6ICdSTVJDWk43RScsXHJcbiAgICAgIHByaWNlOiAxLjM5LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvaGFzcy5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSAnSGFzcycgaXMgdGhlIG1vc3QgY29tbW9uIGN1bHRpdmFyIG9mIGF2b2NhZG8uIEl0IHByb2R1Y2VzIGZydWl0IHllYXItcm91bmQgYW5kIGFjY291bnRzIGZvciA4MCUgb2YgY3VsdGl2YXRlZCBhdm9jYWRvcyBpbiB0aGUgd29ybGQuWzIxXVs1NV0gQWxsICdIYXNzJyB0cmVlcyBhcmUgZGVzY2VuZGVkIGZyb20gYSBzaW5nbGUgJ21vdGhlciB0cmVlJyByYWlzZWQgYnkgYSBtYWlsIGNhcnJpZXIgbmFtZWQgUnVkb2xwaCBIYXNzLCBvZiBMYSBIYWJyYSBIZWlnaHRzLCBDYWxpZm9ybmlhLlsyMF1bNTVdIEhhc3MgcGF0ZW50ZWQgdGhlIHByb2R1Y3RpdmUgdHJlZSBpbiAxOTM1LiBUaGUgJ21vdGhlciB0cmVlJywgb2YgdW5jZXJ0YWluIHN1YnNwZWNpZXMsIGRpZWQgb2Ygcm9vdCByb3QgYW5kIHdhcyBjdXQgZG93biBpbiBTZXB0ZW1iZXIgMjAwMi5bMjFdWzU1XVs1Nl0gJ0hhc3MnIHRyZWVzIGhhdmUgbWVkaXVtLXNpemVkICgxNTDigJMyNTAgZyBvciA1LjPigJM4Ljggb3opLCBvdmF0ZSBmcnVpdCB3aXRoIGEgYmxhY2ssIHBlYmJsZWQgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIG51dHR5LCByaWNoIGZsYXZvciB3aXRoIDE5JSBvaWwuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSBjYW4gd2l0aHN0YW5kIHRlbXBlcmF0dXJlcyB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnR29yZ2VvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV3eHNkNnhiOiB7XHJcbiAgICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnZXd4c2Q2eGInLFxyXG4gICAgICBza3U6ICdONTUyMjlaQScsXHJcbiAgICAgIHByaWNlOiAxLjM0LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbGFtYi5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuJyxcclxuICAgICAgICBzaGFwZTogJ09ib3ZhdGUnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXHJcbiAgICAgICAgdGFzdGU6ICdHcmVhdCwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZnByNzJtOWs6IHtcclxuICAgICAgbmFtZTogJ1BpbmtlcnRvbiBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICdmcHI3Mm05aycsXHJcbiAgICAgIHNrdTogJ0I0SFo0MlRNJyxcclxuICAgICAgcHJpY2U6IDEuMjcsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXHJcbiAgICAgICAgc2hhcGU6ICdMb25nIHBlYXInLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdDlkdjI1Z3M6IHtcclxuICAgICAgbmFtZTogJ1JlZWQgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAndDlkdjI1Z3MnLFxyXG4gICAgICBza3U6ICdaWTNUOVhYQycsXHJcbiAgICAgIHByaWNlOiAxLjE4LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvcmVlZC5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnRGV2ZWxvcGVkIGZyb20gYSBjaGFuY2Ugc2VlZGxpbmcgZm91bmQgaW4gMTk0OCBieSBKYW1lcyBTLiBSZWVkIGluIENhbGlmb3JuaWEsIHRoaXMgY3VsdGl2YXIgaGFzIGxhcmdlLCByb3VuZCwgZ3JlZW4gZnJ1aXQgd2l0aCBhIHNtb290aCB0ZXh0dXJlIGFuZCBkYXJrLCB0aGljaywgZ2xvc3N5IHNraW4uIFNtb290aCBhbmQgZGVsaWNhdGUsIHRoZSBmbGVzaCBoYXMgYSBzbGlnaHRseSBudXR0eSBmbGF2b3IuIFRoZSBza2luIHJpcGVucyBncmVlbi4gQSBHdWF0ZW1hbGFuIHR5cGUsIGl0IGlzIGhhcmR5IHRvIOKIkjEgwrBDICgzMCDCsEYpLiBUcmVlIHNpemUgaXMgYWJvdXQgNSBieSA0IG0gKDE2LjQgYnkgMTMuMSBmdCknLFxyXG4gICAgICAgIHNoYXBlOiAnUm91bmQnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0V4cXVpc2l0ZSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdDM0NXc0OHk6IHtcclxuICAgICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICd0MzQ1dzQ4eScsXHJcbiAgICAgIHNrdTogJ01XNzlaWjZZJyxcclxuICAgICAgcHJpY2U6IDEuMjUsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy96dXRhbm8uanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1RoZSBadXRhbm8gYXZvY2FkbyBpcyBhIGNvbGQgaGFyZHksIGNvbnNpc3RlbnQgcHJvZHVjaW5nIGF2b2NhZG8gdmFyaWV0eS4gSXQgcmVzZW1ibGVzIHRoZSBGdWVydGUgaW4gYXBwZWFyYW5jZSBidXQgaXMgbGVzcyBmbGF2b3JmdWwgYnV0IG1vcmUgY29sZCBoYXJkeS4gVGhlIGdyZWVuIGZydWl0cyBhcmUgb2JvdmF0ZSBpbiBzaGFwZSB3aXRoIHdheHkgYnVtcHMgb24gdGhlIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBsb3cgb2lsIGJ1dCBoaWdoIHdhdGVyIGNvbnRlbnQgd2hpY2ggY2F1c2VzIGl0IHRvIGhhdmUgYSBtb3JlIGZpYnJvdXMgdGV4dHVyZS4nLFxyXG4gICAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ1NwbGVuZGlkLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGRhdGEiLCIvLyBPaCB5b3UgY3VyaW91cy4uLlxyXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXHJcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxyXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnXHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxUUHJvZHVjdFtdPiB7XHJcbiAgICBjb25zdCBhc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKVxyXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxyXG4gICAgcmV0dXJuIGFzQXJyYXlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8VFByb2R1Y3QgfCBudWxsPiB7XHJcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGxEYXRhLCBpZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbnRyeSA9IGFsbERhdGFbaWRdXHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpXHJcbiAgICByZXR1cm4gZW50cnlcclxuICB9XHJcbn1cclxuXHJcbi8vIExldCdzIGFsc28gYWRkIGEgZGVsYXkgdG8gbWFrZSBpdCBhIGJpdCBjbG9zZXIgdG8gcmVhbGl0eVxyXG5jb25zdCByYW5kb21EZWxheSA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IG1heCA9IDM1MFxyXG4gICAgY29uc3QgbWluID0gMTAwXHJcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cclxuXHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZSIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xyXG5pbXBvcnQgZW5hYmxlUHVibGljQWNjZXNzIGZyb20gJ0Bjb3JzJ1xyXG5cclxuY29uc3QgQXZvRGV0YWlsID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGVuYWJsZVB1YmxpY0FjY2VzcyhyZXEsIHJlcylcclxuXHJcbiAgICBjb25zdCBkYiA9IG5ldyBEQigpXHJcbiAgICBjb25zdCBhdm9JZCA9IHJlcS5xdWVyeS5pZCBhcyBzdHJpbmdcclxuXHJcbiAgICBjb25zdCBhdm8gPSBhd2FpdCBkYi5nZXRCeUlkKGF2b0lkKVxyXG5cclxuICAgIC8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvcmVzcG9uc2UtaGVscGVyc1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXZvKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZvRGV0YWlsXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==