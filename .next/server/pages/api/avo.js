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
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const allEntries = await db.getAll();
    const lenght = allEntries.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ycy1taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F2by9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09SU19PUFRJT05TIiwibWV0aG9kcyIsInByb21pc2lmeU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJjb3JzV3JhcHBlciIsImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbEF2b3MiLCJlbmFibGVQdWJsaWNBY2Nlc3MiLCJkYiIsIkRCIiwiYWxsRW50cmllcyIsImxlbmdodCIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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RCxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FuRCxPQUFHLENBQUNxRCxHQUFKLENBQ0VDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVMLFlBQU0sRUFBRSxDQUFWO0FBQWExQyxVQUFJLEVBQUUsRUFBbkI7QUFBdUJrRCxXQUFLLEVBQUU7QUFBOUIsS0FBZixDQURGO0FBR0Q7QUFDRixDQWxCRDs7QUFvQmVkLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEJBLGlDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdm8vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgY29yc1dyYXBwZXIgZnJvbSAnY29ycydcclxuaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJ1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL2FwaS1yb3V0ZXMtY29yc1xyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcclxuICovXHJcbmNvbnN0IENPUlNfT1BUSU9OUyA9IHtcclxuICBtZXRob2RzOiBbJ0dFVCcsICdPUFRJT05TJ10sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb21pc2lmeU1pZGRsZXdhcmUobWlkZGxld2FyZTogUmVxdWVzdEhhbmRsZXIpIHtcclxuICByZXR1cm4gKHJlcTogYW55LCByZXM6IGFueSkgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdDogRXJyb3IgfCB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXHJcbmNvbnN0IGNvcnMgPSBwcm9taXNpZnlNaWRkbGV3YXJlKGNvcnNXcmFwcGVyKENPUlNfT1BUSU9OUykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3JzXHJcbiIsImNvbnN0IGRhdGE6IFJlY29yZDxUUHJvZHVjdElkLCBUUHJvZHVjdD4gPSB7XHJcbiAgICAnMnpkMzNiOGMnOiB7XHJcbiAgICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICcyemQzM2I4YycsXHJcbiAgICAgIHNrdTogJ05VUjcyS0NNJyxcclxuICAgICAgcHJpY2U6IDEuMTUsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9tYWx1bWEuanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0EgcmVsYXRpdmVseSBuZXcgY3VsdGl2YXIsIGl0IHdhcywgdGhlIHByZXR0eSBib3kgYmFieSwgZGlzY292ZXJlZCBpbiBTb3V0aCBBZnJpY2EgaW4gdGhlIGVhcmx5IDE5OTBzIGJ5IE1yLiBBLkcuIChEcmllcykgSm91YmVydC4gTWFsdW1hIEJhYnl5LiBJdCBpcyBhIGNoYW5jZSBzZWVkbGluZyBvZiB1bmtub3duIHBhcmVudGFnZScsXHJcbiAgICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXHJcbiAgICAgICAgdGFzdGU6ICdDYXRjaHksIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICc2dHJmZ2traic6IHtcclxuICAgICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICc2dHJmZ2traicsXHJcbiAgICAgIHNrdTogJ0FYNE04U0pWJyxcclxuICAgICAgcHJpY2U6IDEuMjEsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXHJcbiAgICAgICAgc2hhcGU6ICdQZWFyJyxcclxuICAgICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICc3YmNyNDllbSc6IHtcclxuICAgICAgbmFtZTogJ0d3ZW4gSGFzcyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICc3YmNyNDllbScsXHJcbiAgICAgIHNrdTogJ0hZQTc4RjZKJyxcclxuICAgICAgcHJpY2U6IDEuMjUsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgICAgc2hhcGU6ICdQbHVtcCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnMDk4MzIza3MnOiB7XHJcbiAgICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICcwOTgzMjNrcycsXHJcbiAgICAgIHNrdTogJ0JYRDEwMEJMSycsXHJcbiAgICAgIHByaWNlOiAxLjUxLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvYmFjb24uanBnJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0RldmVsb3BlZCBieSBhIGZhcm1lciwgSmFtZXMgQmFjb24sIGluIDE5NTQsIEJhY29uIGhhcyBtZWRpdW0tc2l6ZWQgZnJ1aXQgd2l0aCBzbW9vdGgsIGdyZWVuIHNraW4gd2l0aCB5ZWxsb3ctZ3JlZW4sIGxpZ2h0LXRhc3RpbmcgZmxlc2guIFdoZW4gcmlwZSwgdGhlIHNraW4gcmVtYWlucyBncmVlbiwgYnV0IGRhcmtlbnMgc2xpZ2h0bHksIGFuZCBmcnVpdCB5aWVsZHMgdG8gZ2VudGxlIHByZXNzdXJlLiBJdCBpcyBjb2xkLWhhcmR5IGRvd24gdG8g4oiSNSDCsEMgKDIzIMKwRiknLFxyXG4gICAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnQ3JlYW15LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiOHV0aGUyeToge1xyXG4gICAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICdiOHV0aGUyeScsXHJcbiAgICAgIHNrdTogJ1JNUkNaTjdFJyxcclxuICAgICAgcHJpY2U6IDEuMzksXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXd4c2Q2eGI6IHtcclxuICAgICAgbmFtZTogJ0xhbWIgSGFzcyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICdld3hzZDZ4YicsXHJcbiAgICAgIHNrdTogJ041NTIyOVpBJyxcclxuICAgICAgcHJpY2U6IDEuMzQsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxyXG4gICAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnLTIgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmcHI3Mm05azoge1xyXG4gICAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxyXG4gICAgICBpZDogJ2ZwcjcybTlrJyxcclxuICAgICAgc2t1OiAnQjRIWjQyVE0nLFxyXG4gICAgICBwcmljZTogMS4yNyxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3BpbmtlcnRvbi5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkZpcnN0IGdyb3duIG9uIHRoZSBQaW5rZXJ0b24gUmFuY2ggaW4gU2F0aWNveSwgQ2FsaWZvcm5pYSwgaW4gdGhlIGVhcmx5IDE5NzBzLCAnUGlua2VydG9uJyBpcyBhIHNlZWRsaW5nIG9mICdIYXNzJyB4ICdSaW5jb24nLiBUaGUgbGFyZ2UgZnJ1aXQgaGFzIGEgc21hbGwgc2VlZCwgYW5kIGl0cyBncmVlbiBza2luIGRlZXBlbnMgaW4gY29sb3IgYXMgaXQgcmlwZW5zLiBUaGUgdGhpY2sgZmxlc2ggaGFzIGEgc21vb3RoLCBjcmVhbXkgdGV4dHVyZSwgcGFsZSBncmVlbiBjb2xvciwgZ29vZCBmbGF2b3IsIGFuZCBoaWdoIG9pbCBjb250ZW50LiBJdCBzaG93cyBzb21lIGNvbGQgdG9sZXJhbmNlLCB0byDiiJIxIMKwQyAoMzAgwrBGKSBhbmQgYmVhcnMgY29uc2lzdGVudGx5IGhlYXZ5IGNyb3BzLiBBIGh5YnJpZCBHdWF0ZW1hbGFuIHR5cGUsIGl0IGhhcyBleGNlbGxlbnQgcGVlbGluZyBjaGFyYWN0ZXJpc3RpY3NcIixcclxuICAgICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnTWFydmVsb3VzLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0OWR2MjVnczoge1xyXG4gICAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICd0OWR2MjVncycsXHJcbiAgICAgIHNrdTogJ1pZM1Q5WFhDJyxcclxuICAgICAgcHJpY2U6IDEuMTgsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXHJcbiAgICAgICAgc2hhcGU6ICdSb3VuZCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0MzQ1dzQ4eToge1xyXG4gICAgICBuYW1lOiAnWnV0YW5vIEF2b2NhZG8nLFxyXG4gICAgICBpZDogJ3QzNDV3NDh5JyxcclxuICAgICAgc2t1OiAnTVc3OVpaNlknLFxyXG4gICAgICBwcmljZTogMS4yNSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXHJcbiAgICAgICAgc2hhcGU6ICdQZWFyJyxcclxuICAgICAgICBoYXJkaW5lc3M6ICctNSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZGF0YSIsIi8vIE9oIHlvdSBjdXJpb3VzLi4uXHJcbi8vIFRoaXMgaXMgbm90IGEgcmVhbCBkYXRhYmFzZSxcclxuLy8gQnV0IGxldCdzIGltYWdpbmUgaXQgaXMgb25lIDopXHJcbmltcG9ydCBhbGxEYXRhIGZyb20gJy4vZGF0YSdcclxuXHJcbmNsYXNzIERhdGFiYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFRQcm9kdWN0W10+IHtcclxuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpXHJcbiAgICByZXR1cm4gYXNBcnJheVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxUUHJvZHVjdCB8IG51bGw+IHtcclxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbERhdGEsIGlkKSkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF1cclxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcclxuICAgIHJldHVybiBlbnRyeVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwXHJcbiAgICBjb25zdCBtaW4gPSAxMDBcclxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXHJcbiAgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXHJcbmltcG9ydCBEQiBmcm9tICdAZGF0YWJhc2UnXHJcbmltcG9ydCBlbmFibGVQdWJsaWNBY2Nlc3MgZnJvbSAnQGNvcnMnXHJcblxyXG5jb25zdCBhbGxBdm9zID0gYXN5bmMgKHJlcTogSW5jb21pbmdNZXNzYWdlLCByZXM6IFNlcnZlclJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGVuYWJsZVB1YmxpY0FjY2VzcyhyZXEsIHJlcylcclxuXHJcbiAgICBjb25zdCBkYiA9IG5ldyBEQigpXHJcbiAgICBjb25zdCBhbGxFbnRyaWVzID0gYXdhaXQgZGIuZ2V0QWxsKClcclxuICAgIGNvbnN0IGxlbmdodCA9IGFsbEVudHJpZXMubGVuZ3RoXHJcblxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBsZW5naHQsIGRhdGE6IGFsbEVudHJpZXMgfSkpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDBcclxuICAgIHJlcy5lbmQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGVuZ3RoOiAwLCBkYXRhOiBbXSwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSlcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3NcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9