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

eval("// spacerock. it inherits from MovingObject\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\");\r\n\r\nconst DEFAULTS = {\r\n    COLOR: \"#505050\",\r\n    RADIUS: 20,\r\n    SPEED: 3\r\n};\r\n\r\nfunction Asteroid(options) {\r\n    options = options || {};\r\n    options.color = DEFAULTS.COLOR;\r\n    options.pos = options.pos\r\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\r\n    options.radius = DEFAULTS.RADIUS;\r\n    /* using call on the MovingObject module will allow us\r\n    to save the module to this object!\r\n    indirectly inheriting the constructor attributes\r\n    think of call as using super in Ruby */\r\n    MovingObject.call(this,options);\r\n\r\n    // this will not save any prototype functions however,\r\n    // we will need to do prototypal inheritance to link these two object's prototypes\r\n};\r\n\r\nUtil.inherits(MovingObject,Asteroid);\r\n\r\nmodule.exports = Asteroid;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\n\r\nfunction Game() {\r\n    this.asteroids = [];\r\n    this.ship = null;\r\n};\r\n/* these constants are directly placed on the constructor function,\r\nBecause we want to make a clear distinction between the constants with the instace attributes\r\n*/\r\nGame.DIM_X = 400;\r\nGame.DIM_Y = 400;\r\nGame.NUM_ASTEROIDS = 20;\r\n\r\nGame.prototype.allObjects = function() {\r\n    return [].concat(this.ship,this.asteroids);\r\n}\r\n\r\nGame.prototype.addShip = function() {\r\n    let randPos = Util.randomPos(Game.DIM_X,Game.DIM_Y);\r\n    console.log(randPos)\r\n    this.ship = new Ship({pos: randPos, game: this});\r\n}\r\n\r\nGame.prototype.addAsteroids = function() {\r\n    let numAsteroids = Game.NUM_ASTEROIDS;\r\n    while (numAsteroids > 0) {\r\n      let randPos = Util.randomPos(Game.DIM_X,Game.DIM_Y);\r\n      let asteroid = new Asteroid({pos: randPos,game: this});\r\n      this.asteroids.push(asteroid);\r\n      numAsteroids--;\r\n    };\r\n};\r\n\r\nGame.prototype.draw = function(ctx) {\r\n    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);\r\n    this.allObjects().forEach(function(object) {\r\n        object.draw(ctx);\r\n    })\r\n};\r\n\r\nGame.prototype.addObjects = function() {\r\n    this.addAsteroids();\r\n    this.addShip();\r\n    console.log(this.ship);\r\n}\r\n\r\nGame.prototype.moveObjects = function() {\r\n    this.allObjects().forEach(function(object) {\r\n        object.move();\r\n    })\r\n};\r\n\r\nGame.prototype.wrap = function(x,y,r) {\r\n    let pos = [x,y];\r\n    \r\n    if (pos[0] > Game.DIM_X + r) {\r\n        x = 0;\r\n    } else if (pos[0] < 0 - r) {\r\n        x = Game.DIM_X;\r\n    } else if (pos[1] > Game.DIM_Y + r) {\r\n        y = 0;\r\n    }else if (pos[1] < 0 - r) {\r\n        y = Game.DIM_Y;\r\n    };       \r\n\r\n    return [x,y];\r\n}\r\n\r\nGame.prototype.checkCollisions = function() {\r\n    let i = 0;\r\n    const objects = this.allObjects();\r\n    while (i < objects.length) {\r\n        let currentObject = objects[i];\r\n        objects.forEach((object)=> {\r\n            if(\r\n                (currentObject.isCollidedWith(object)) &&\r\n                (currentObject !== object)\r\n            ) {\r\n                currentObject.collideWith(object);\r\n                return true;\r\n            }\r\n        });\r\n        i++;\r\n    }\r\n}\r\n\r\nGame.prototype.step = function() {\r\n    this.moveObjects();\r\n    this.checkCollisions();\r\n};\r\n\r\nGame.prototype.remove = function(asteroid) {\r\n    index = this.asteroids.indexOf(asteroid);\r\n    this.asteroids.splice(index,1);\r\n    return true;\r\n};\r\n\r\n\r\n\r\n\r\nmodule.exports =  Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\n\r\n\r\nfunction GameView(game,ctx) {\r\n    this.game = game;\r\n    this.ctx = ctx;\r\n}\r\n\r\nGameView.prototype.start = function() {\r\n    let game = this.game;\r\n    let ctx = this.ctx\r\n setInterval(function() {\r\n    game.draw(ctx);\r\n    game.step();\r\n },20);\r\n\r\n}\r\n\r\n\r\nmodule.exports = GameView;\r\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\r\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\r\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\r\n\r\n\r\nwindow.MovingObject = MovingObject;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    var canvas = document.getElementById('game-canvas');\r\n    canvas.height = 500;\r\n    canvas.width = 500;\r\n\r\n    var ctx = canvas.getContext('2d');\r\nGame.DIM_X = 500;\r\nGame.DIM_Y = 500;\r\n\r\nconst game = new Game();\r\n\r\ngame.addObjects();\r\n\r\nconst gameView = new GameView(game,ctx);\r\nconsole.log(game);\r\ngameView.start();\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Base class for anything that moves.\r\n\r\n\r\nfunction MovingObject(options) {\r\n    this.pos = options[\"pos\"]\r\n    this.vel = options[\"vel\"]\r\n    this.radius = options[\"radius\"]\r\n    this.color = options[\"color\"]\r\n    this.game = options[\"game\"]\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n    let posX = this.pos[0];\r\n    let posY = this.pos[1];\r\n    ctx.beginPath();\r\n    ctx.arc(posX,posY,this.radius,0,Math.PI * 2);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n    let dx = this.vel[0];\r\n    let dy = this.vel[1];\r\n    let r = this.radius;\r\n\r\n    let wrappedPos = this.game.wrap(this.pos[0],this.pos[1],r);\r\n\r\n    let x = wrappedPos[0];\r\n    let y = wrappedPos[1];\r\n    this.pos = [x + dx , y + dy]; \r\n}\r\n\r\nMovingObject.prototype.isCollidedWith= function(otherObject) {\r\n    const pos1 = this.pos;\r\n    const pos2 = otherObject.pos;\r\n    const distance = this.distanceBetweenTwoPos(pos1,pos2);\r\n    /* collision occurs if the distance between their center points\r\n     is less than the sum of their radii*/\r\n\r\n     return distance < (this.radius + otherObject.radius);\r\n\r\n};\r\n\r\nMovingObject.prototype.distanceBetweenTwoPos = function(pos1,pos2) {\r\n   let diffX = pos1[0] - pos2[0];\r\n   let diffY = pos1[1] - pos2[1];\r\n\r\n    return Math.sqrt(Math.pow(diffX,2) + Math.pow(diffY,2));\r\n};\r\n\r\nMovingObject.prototype.collideWith = function(otherObject) {\r\n   \r\n};\r\n\r\n  module.exports = MovingObject;\r\n\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// the player! a MovingObject subclass\r\n\r\nconst MovingObject = __webpack_require__(/*! ./moving_objects */ \"./src/moving_objects.js\");\r\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\r\n\r\n\r\nfunction Ship(options) {   \r\n    options.vel = [0,0];\r\n    options.radius = Ship.RADIUS;\r\n    options.color = Ship.COLOR;\r\n\r\n    MovingObject.call(this,options);\r\n}\r\n\r\nUtil.inherits(MovingObject,Ship);\r\n\r\nShip.RADIUS = 10;\r\nShip.COLOR = \"blue\";\r\n\r\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Utility code, especially vector math stuff.\r\n\r\nconst Util = {\r\n    inherits: function(parent,child) {\r\n        let Surrogate = function() {};\r\n        Surrogate.prototype = parent.prototype;\r\n        child.prototype = new Surrogate();\r\n        child.prototype.constructor = child;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n      },\r\n      // Scale the length of a vector by the given amount.\r\n      scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n      },\r\n\r\n    randomPos(dimX,dimY) {\r\n      let randX = Math.floor(Math.random() * dimX);\r\n      let randY = Math.floor(Math.random() * dimY);\r\n      return [randX,randY];\r\n    }\r\n};\r\n\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });