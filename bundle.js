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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/flappy_monkey.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/background.js":
/*!***************************!*\
  !*** ./lib/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Background {
  constructor(options){
    this.image = new Image();
    this.image.src = options.src;
    this.height = options.height;
    this.width = options.width;
    this.x_pos = options.x_pos;
    this.y_pos = options.y_pos;
    this.ctx = options.ctx;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    };
  }

  update(ctx) {
    ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    ctx.drawImage(this.image, this.x_pos + this.width, this.y_pos, this.width, this.height);
  }

  move() {
    this.x_pos -= 1;
    if (this.x_pos == -this.width){
      this.x_pos = 0;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),

/***/ "./lib/flappy_monkey.js":
/*!******************************!*\
  !*** ./lib/flappy_monkey.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");


document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  document.getElementById("start").addEventListener("click", ()=>{
     var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas);
  })
});


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monkey_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monkey_obj.js */ "./lib/monkey_obj.js");
/* harmony import */ var _pipes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes.js */ "./lib/pipes.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ "./lib/background.js");




class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.frameNo = 0;
    this.count = 0;
    this.flag = false;
    this.score = 0;
    this.dy = 1;
    this.rightPressed = false;

    this.monkey = new _monkey_obj_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      x_pos: 50,
      y_pos: 120,
      width: 50,
      height: 50,
      src: "./assets/images/monkeyRun.png",
      ctx: this.ctx
    });

    this.background = new _background_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x_pos: 0,
      y_pos: 0,
      width: 700,
      height: 450,
      src: "./assets/images/backgroundForest.jpg",
      ctx: this.ctx
    });

    this.pipes = [];
    this.intervalId = window.setInterval(this.updateGame.bind(this), 10);
  }

  bindKeyHandlers(){
    key('o', ()=>{
      this.rightPressed = true;
    });

    key('p', ()=>{
      this.rightPressed = false;
    });
  }


  drawScore() {
    this.ctx.font = "18px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 10, 30);
  }

  updateGame() {
    this.bindKeyHandlers();
    this.monkey.image.src = "./assets/images/monkeyRun.png",
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.frameNo += 1;
    this.background.move();
    this.background.update(this.ctx);
    this.renderPipes();
    this.isGameover();
    this.move_monkey();
    this.move_pipes();
    this.monkey.update(this.ctx);
    this.updateScore();
  }

  everyInterval(n) {
    if (this.frameNo % n === 0){
      return true;
    } else {
      return false;
    }
  }

  isGameover() {
    for (let i = 0; i < this.pipes.length; i++){
      if (this.monkey.collisionwith(this.pipes[i])) {
        this.ctx.font="30px Verdana";
        this.ctx.fillStyle='black';
        this.ctx.fillText("You crashed! Final score: "+ this.score, 150, 250);
        clearInterval(this.intervalId);
        return;
      }
    }
  }

  move_monkey() {
    if(this.rightPressed) {
      this.monkey.y_pos -= this.dy;
    }
    else if (!this.rightPressed) {
      this.monkey.image.src = "./assets/images/monkeyJump.png",
      this.monkey.y_pos += this.dy;
    }
  }

  move_pipes() {
    for (let i = 0; i < this.pipes.length; i++){
      this.pipes[i].x_pos += -1;
      this.pipes[i].update(this.ctx);
    }
  }

  updateScore() {
    this.drawScore();
    if (this.pipes[(this.count)].x_pos >= 49 && this.pipes[(this.count)].x_pos <= 50 ) {
      if(this.flag === true){
        this.score += 1;
        this.flag = false;
      } else {
      this.flag = true;
      }
      this.count += 2;
    }
  }

  renderPipe(x_pos, y_pos, width, height, ctx,src){
    this.pipes.push(new _pipes_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      x_pos: x_pos,
      y_pos: y_pos,
      width: width,
      height: height,
      src: src,
      ctx: ctx
    }));
  }

  renderPipes() {
    if (this.frameNo == 1 || this.everyInterval(150)) {
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random()*(maxHeight-minHeight + 1) + minHeight);
      let minGap = 120;
      let maxGap = 280;
      let gap = Math.floor(Math.random()*minGap + minGap);
      this.renderPipe(this.canvas.width, 0, 40, height, this.ctx, "./assets/images/pipe2.png" );
      this.renderPipe(this.canvas.width-5, height, 50, 10, this.ctx, "./assets/images/pipe1.png" );
      this.renderPipe(this.canvas.width, 150 + gap,40, this.canvas.height-150-gap, this.ctx, "./assets/images/pipe2.png");
      this.renderPipe(this.canvas.width-5, 150 + gap,50, 10, this.ctx, "./assets/images/pipe1.png");
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/monkey_obj.js":
/*!***************************!*\
  !*** ./lib/monkey_obj.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Monkey {
  constructor(options){
    this.image = new Image();
    this.image.src = options.src;
    this.height = options.height;
    this.width = options.width;
    this.x_pos = options.x_pos;
    this.y_pos = options.y_pos;
    this.ctx = options.ctx;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    };
  }

  update(ctx) {
    ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
  }

  collisionwith(otherobj) {
    var crash = true;
    if ((this.x_pos + this.width < otherobj.x_pos) ||
       (this.x_pos > otherobj.x_pos + otherobj.width) ||
       (this.y_pos + this.height < otherobj.y_pos) ||
       (this.y_pos > otherobj.y_pos + otherobj.height)) {
         crash = false;
      }
    if (this.y_pos === 0 || this.y_pos === 400) {
      crash = true;
    }
    return crash;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Monkey);


/***/ }),

/***/ "./lib/pipes.js":
/*!**********************!*\
  !*** ./lib/pipes.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pipe {
  constructor(options){
    this.image = new Image();
    this.image2 = new Image();
    this.image.src = options.src;
    this.image.src2 = options.src2;
    this.height = options.height;
    this.width = options.width;
    this.x_pos = options.x_pos;
    this.y_pos = options.y_pos;
    this.ctx = options.ctx;
    this.image.onload = () => {
      this.ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    };
    this.image2.onload = () => {
      this.ctx.drawImage(this.image2, this.x_pos-5, this.height, 50, 10);
    };
  }

  update(ctx) {
    ctx.drawImage(this.image, this.x_pos, this.y_pos, this.width, this.height);
    ctx.drawImage(this.image2, this.x_pos-5, this.height, 50, 10);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pipe);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map