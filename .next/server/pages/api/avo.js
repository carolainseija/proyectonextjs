module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.ts");
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

/***/ "./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ "./cors-middleware.ts");



const allAvos = async (req, res) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const allEntries = await db.getAll();
    const lenght = allEntries.length; // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      lenght,
      data: allEntries
    }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(JSON.stringify({
      length: 0,
      data: [],
      error: 'Something went wrong'
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ycy1taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F2by9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09SU19PUFRJT05TIiwibWV0aG9kcyIsInByb21pc2lmeU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJjb3JzV3JhcHBlciIsImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbEF2b3MiLCJlbmFibGVQdWJsaWNBY2Nlc3MiLCJkYiIsIkRCIiwiYWxsRW50cmllcyIsImxlbmdodCIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QVIsQ0FBY0YsQ0FBZDtBQUNBeEQsT0FBRyxDQUFDbUQsVUFBSixHQUFpQixHQUFqQjtBQUNBbkQsT0FBRyxDQUFDcUQsR0FBSixDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFTCxZQUFNLEVBQUUsQ0FBVjtBQUFhMUMsVUFBSSxFQUFFLEVBQW5CO0FBQXVCa0QsV0FBSyxFQUFFO0FBQTlCLEtBQWYsQ0FERjtBQUdEO0FBQ0YsQ0F2QkQ7O0FBeUJlZCxzRUFBZixFOzs7Ozs7Ozs7OztBQzdCQSxpQyIsImZpbGUiOiJwYWdlcy9hcGkvYXZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXZvL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IGNvcnNXcmFwcGVyIGZyb20gJ2NvcnMnXHJcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcydcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy9hcGktcm91dGVzLWNvcnNcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAqL1xyXG5jb25zdCBDT1JTX09QVElPTlMgPSB7XHJcbiAgbWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9taXNpZnlNaWRkbGV3YXJlKG1pZGRsZXdhcmU6IFJlcXVlc3RIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIChyZXE6IGFueSwgcmVzOiBhbnkpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQ6IEVycm9yIHwgdW5rbm93bikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxyXG5jb25zdCBjb3JzID0gcHJvbWlzaWZ5TWlkZGxld2FyZShjb3JzV3JhcHBlcihDT1JTX09QVElPTlMpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yc1xyXG4iLCJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xyXG4gICAgJzJ6ZDMzYjhjJzoge1xyXG4gICAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnMnpkMzNiOGMnLFxyXG4gICAgICBza3U6ICdOVVI3MktDTScsXHJcbiAgICAgIHByaWNlOiAxLjE1LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxyXG4gICAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnNnRyZmdra2onOiB7XHJcbiAgICAgIG5hbWU6ICdGdWVydGUgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnNnRyZmdra2onLFxyXG4gICAgICBza3U6ICdBWDRNOFNKVicsXHJcbiAgICAgIHByaWNlOiAxLjIxLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZnVlcnRlLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdUaGUgRnVlcnRlIGF2b2NhZG8gaXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvbW1lcmNpYWwgdmFyaWV0eSBiZWhpbmQgSGFzcy4gSXQgaXMgYSBsb25nIHRpbWUgQ2FsaWZvcm5pYSBjb21tZXJjaWFsIHZhcmlldHkgdmFsdWVkIGZvciBpdHMgd2ludGVyIHNlYXNvbiByaXBlbmluZyBhbmQgaXRzIEItVHlwZSBibG9zc29tIHR5cGUgd2hpY2ggbW9zdCBncm93ZXJzIHBsYW50IGFkamFjZW50IHRvIHRoZSBIYXNzIGZvciBhIG1vcmUgY29uc2lzdGVudCBwcm9kdWN0aW9uIGN5Y2xlLiBUaGlzIGF2b2NhZG8gdGVuZHMgdG8gcHJvZHVjZSBoZWF2aWx5IGluIGFsdGVybmF0ZSB5ZWFycy4nLFxyXG4gICAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnLTEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ01hZ25pZmljZW50LCBpcyBhIHN0cm9uZyBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnN2JjcjQ5ZW0nOiB7XHJcbiAgICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnN2JjcjQ5ZW0nLFxyXG4gICAgICBza3U6ICdIWUE3OEY2SicsXHJcbiAgICAgIHByaWNlOiAxLjI1LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvZ3dlbi5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgc2VlZGxpbmcgYnJlZCBmcm9tICdIYXNzJyB4ICdUaGlsbGUnIGluIDE5ODIsICdHd2VuJyBpcyBoaWdoZXIgeWllbGRpbmcgYW5kIG1vcmUgZHdhcmZpbmcgdGhhbiAnSGFzcycgaW4gQ2FsaWZvcm5pYS4gVGhlIGZydWl0IGhhcyBhbiBvdmFsIHNoYXBlLCBzbGlnaHRseSBzbWFsbGVyIHRoYW4gJ0hhc3MnICgxMDDigJMyMDAgZyBvciAzLjXigJM3LjEgb3opLCB3aXRoIGEgcmljaCwgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiB0ZXh0dXJlIGlzIG1vcmUgZmluZWx5IHBlYmJsZWQgdGhhbiAnSGFzcycsIGFuZCBpcyBkdWxsIGdyZWVuIHdoZW4gcmlwZS4gSXQgaXMgZnJvc3QtaGFyZHkgZG93biB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICAgIHNoYXBlOiAnUGx1bXAnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ1N1cGVyYiwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJzA5ODMyM2tzJzoge1xyXG4gICAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnMDk4MzIza3MnLFxyXG4gICAgICBza3U6ICdCWEQxMDBCTEsnLFxyXG4gICAgICBwcmljZTogMS41MSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcclxuICAgICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYjh1dGhlMnk6IHtcclxuICAgICAgbmFtZTogJ0hhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnYjh1dGhlMnknLFxyXG4gICAgICBza3U6ICdSTVJDWk43RScsXHJcbiAgICAgIHByaWNlOiAxLjM5LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvaGFzcy5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSAnSGFzcycgaXMgdGhlIG1vc3QgY29tbW9uIGN1bHRpdmFyIG9mIGF2b2NhZG8uIEl0IHByb2R1Y2VzIGZydWl0IHllYXItcm91bmQgYW5kIGFjY291bnRzIGZvciA4MCUgb2YgY3VsdGl2YXRlZCBhdm9jYWRvcyBpbiB0aGUgd29ybGQuWzIxXVs1NV0gQWxsICdIYXNzJyB0cmVlcyBhcmUgZGVzY2VuZGVkIGZyb20gYSBzaW5nbGUgJ21vdGhlciB0cmVlJyByYWlzZWQgYnkgYSBtYWlsIGNhcnJpZXIgbmFtZWQgUnVkb2xwaCBIYXNzLCBvZiBMYSBIYWJyYSBIZWlnaHRzLCBDYWxpZm9ybmlhLlsyMF1bNTVdIEhhc3MgcGF0ZW50ZWQgdGhlIHByb2R1Y3RpdmUgdHJlZSBpbiAxOTM1LiBUaGUgJ21vdGhlciB0cmVlJywgb2YgdW5jZXJ0YWluIHN1YnNwZWNpZXMsIGRpZWQgb2Ygcm9vdCByb3QgYW5kIHdhcyBjdXQgZG93biBpbiBTZXB0ZW1iZXIgMjAwMi5bMjFdWzU1XVs1Nl0gJ0hhc3MnIHRyZWVzIGhhdmUgbWVkaXVtLXNpemVkICgxNTDigJMyNTAgZyBvciA1LjPigJM4Ljggb3opLCBvdmF0ZSBmcnVpdCB3aXRoIGEgYmxhY2ssIHBlYmJsZWQgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIG51dHR5LCByaWNoIGZsYXZvciB3aXRoIDE5JSBvaWwuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSBjYW4gd2l0aHN0YW5kIHRlbXBlcmF0dXJlcyB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxyXG4gICAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnR29yZ2VvdXMsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV3eHNkNnhiOiB7XHJcbiAgICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnZXd4c2Q2eGInLFxyXG4gICAgICBza3U6ICdONTUyMjlaQScsXHJcbiAgICAgIHByaWNlOiAxLjM0LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbGFtYi5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuJyxcclxuICAgICAgICBzaGFwZTogJ09ib3ZhdGUnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXHJcbiAgICAgICAgdGFzdGU6ICdHcmVhdCwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZnByNzJtOWs6IHtcclxuICAgICAgbmFtZTogJ1BpbmtlcnRvbiBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICdmcHI3Mm05aycsXHJcbiAgICAgIHNrdTogJ0I0SFo0MlRNJyxcclxuICAgICAgcHJpY2U6IDEuMjcsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXHJcbiAgICAgICAgc2hhcGU6ICdMb25nIHBlYXInLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdDlkdjI1Z3M6IHtcclxuICAgICAgbmFtZTogJ1JlZWQgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAndDlkdjI1Z3MnLFxyXG4gICAgICBza3U6ICdaWTNUOVhYQycsXHJcbiAgICAgIHByaWNlOiAxLjE4LFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvcmVlZC5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnRGV2ZWxvcGVkIGZyb20gYSBjaGFuY2Ugc2VlZGxpbmcgZm91bmQgaW4gMTk0OCBieSBKYW1lcyBTLiBSZWVkIGluIENhbGlmb3JuaWEsIHRoaXMgY3VsdGl2YXIgaGFzIGxhcmdlLCByb3VuZCwgZ3JlZW4gZnJ1aXQgd2l0aCBhIHNtb290aCB0ZXh0dXJlIGFuZCBkYXJrLCB0aGljaywgZ2xvc3N5IHNraW4uIFNtb290aCBhbmQgZGVsaWNhdGUsIHRoZSBmbGVzaCBoYXMgYSBzbGlnaHRseSBudXR0eSBmbGF2b3IuIFRoZSBza2luIHJpcGVucyBncmVlbi4gQSBHdWF0ZW1hbGFuIHR5cGUsIGl0IGlzIGhhcmR5IHRvIOKIkjEgwrBDICgzMCDCsEYpLiBUcmVlIHNpemUgaXMgYWJvdXQgNSBieSA0IG0gKDE2LjQgYnkgMTMuMSBmdCknLFxyXG4gICAgICAgIHNoYXBlOiAnUm91bmQnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0V4cXVpc2l0ZSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdDM0NXc0OHk6IHtcclxuICAgICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICd0MzQ1dzQ4eScsXHJcbiAgICAgIHNrdTogJ01XNzlaWjZZJyxcclxuICAgICAgcHJpY2U6IDEuMjUsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy96dXRhbm8uanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1RoZSBadXRhbm8gYXZvY2FkbyBpcyBhIGNvbGQgaGFyZHksIGNvbnNpc3RlbnQgcHJvZHVjaW5nIGF2b2NhZG8gdmFyaWV0eS4gSXQgcmVzZW1ibGVzIHRoZSBGdWVydGUgaW4gYXBwZWFyYW5jZSBidXQgaXMgbGVzcyBmbGF2b3JmdWwgYnV0IG1vcmUgY29sZCBoYXJkeS4gVGhlIGdyZWVuIGZydWl0cyBhcmUgb2JvdmF0ZSBpbiBzaGFwZSB3aXRoIHdheHkgYnVtcHMgb24gdGhlIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBsb3cgb2lsIGJ1dCBoaWdoIHdhdGVyIGNvbnRlbnQgd2hpY2ggY2F1c2VzIGl0IHRvIGhhdmUgYSBtb3JlIGZpYnJvdXMgdGV4dHVyZS4nLFxyXG4gICAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ1NwbGVuZGlkLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGRhdGEiLCIvLyBPaCB5b3UgY3VyaW91cy4uLlxyXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXHJcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxyXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnXHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxUUHJvZHVjdFtdPiB7XHJcbiAgICBjb25zdCBhc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKVxyXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxyXG4gICAgcmV0dXJuIGFzQXJyYXlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8VFByb2R1Y3QgfCBudWxsPiB7XHJcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGxEYXRhLCBpZCkpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbnRyeSA9IGFsbERhdGFbaWRdXHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpXHJcbiAgICByZXR1cm4gZW50cnlcclxuICB9XHJcbn1cclxuXHJcbi8vIExldCdzIGFsc28gYWRkIGEgZGVsYXkgdG8gbWFrZSBpdCBhIGJpdCBjbG9zZXIgdG8gcmVhbGl0eVxyXG5jb25zdCByYW5kb21EZWxheSA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IG1heCA9IDM1MFxyXG4gICAgY29uc3QgbWluID0gMTAwXHJcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cclxuXHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZSIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xyXG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xyXG5pbXBvcnQgZW5hYmxlUHVibGljQWNjZXNzIGZyb20gJ0Bjb3JzJ1xyXG5cclxuY29uc3QgYWxsQXZvcyA9IGFzeW5jIChyZXE6IEluY29taW5nTWVzc2FnZSwgcmVzOiBTZXJ2ZXJSZXNwb25zZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZW5lcmFsbHksIHlvdSB3b3VsZCBub3Qgd2FudCB0aGlzIGluIHlvdXIgYXBwcy5cclxuICAgIC8vIFNlZSBtb3JlIGluICdjb3JzLmpzJ1xyXG4gICAgYXdhaXQgZW5hYmxlUHVibGljQWNjZXNzKHJlcSwgcmVzKVxyXG5cclxuICAgIGNvbnN0IGRiID0gbmV3IERCKClcclxuICAgIGNvbnN0IGFsbEVudHJpZXMgPSBhd2FpdCBkYi5nZXRBbGwoKVxyXG4gICAgY29uc3QgbGVuZ2h0ID0gYWxsRW50cmllcy5sZW5ndGhcclxuXHJcbiAgICAvLyBOb3RpY2U6IFdlJ3JlIG1hbnVhbGx5IHNldHRpbmcgdGhlIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgLy8gSG93ZXZlciBOZXh0LkpTIG9mZmVycyBFeHByZXNzLWxpa2UgaGVscGVycyA6KVxyXG4gICAgLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9yZXNwb25zZS1oZWxwZXJzXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxyXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGxlbmdodCwgZGF0YTogYWxsRW50cmllcyB9KSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDUwMFxyXG4gICAgcmVzLmVuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsZW5ndGg6IDAsIGRhdGE6IFtdLCBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyB9KVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsQXZvc1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=