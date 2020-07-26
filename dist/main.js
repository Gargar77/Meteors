/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// spacerock. it inherits from MovingObject\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\");\r\n\r\nconst DEFAULTS = {\r\n    COLOR: \"#505050\",\r\n    RADIUS: 25,\r\n    SPEED: 5\r\n};\r\n\r\nfunction Asteroid(options) {\r\n    options = options || {};\r\n    options.color = DEFAULTS.COLOR;\r\n    options.pos = options.pos\r\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\r\n    /* using call on the MovingObject module will allow us\r\n    to save the module to this object!\r\n    indirectly inheriting the constructor attributes\r\n    think of call as using super in Ruby */\r\n    MovingObject.call(this,options);\r\n\r\n    // this will not save any prototype functions however,\r\n    // we will need to do prototypal inheritance to link these two object's prototypes\r\n};\r\n\r\nUtil.inherits(MovingObject,Asteroid);\r\n\r\nmodule.exports = Asteroid;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\n\r\nwindow.MovingObject = MovingObject;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    var canvas = document.getElementById('game-canvas');\r\n    var ctx = canvas.getContext('2d');\r\n\r\n\r\n\r\n    const rock = new Asteroid({\r\n        pos: [30, 30],\r\n        vel: [10, 10],\r\n        radius: 5,\r\n        color: \"#00FF00\"\r\n      });\r\n    \r\n      rock.draw(ctx);\r\n     \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Base class for anything that moves.\r\n\r\nfunction MovingObject(options) {\r\n    this.pos = options[\"pos\"]\r\n    this.vel = options[\"vel\"]\r\n    this.radius = options[\"radius\"]\r\n    this.color = options[\"color\"]\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n    let posX = this.pos[0];\r\n    let posY = this.pos[1];\r\n    ctx.beginPath();\r\n    ctx.arc(posX,posY,this.radius,0,Math.PI * 2);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n    this.pos += this.vel;\r\n}\r\n\r\n\r\n  module.exports = MovingObject;\r\n\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Utility code, especially vector math stuff.\r\n\r\nconst Util = {\r\n    inherits: function(parent,child) {\r\n        let Surrogate = function() {};\r\n        Surrogate.prototype = parent.prototype;\r\n        child.prototype = new Surrogate();\r\n        child.prototype.constructor = child;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n      },\r\n      // Scale the length of a vector by the given amount.\r\n      scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n      }\r\n};\r\n\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });