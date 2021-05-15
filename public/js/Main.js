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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/js/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/js/Main.js":
/*!*************************!*\
  !*** ./dist/js/Main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var _route_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route/global.js */ "./dist/js/route/global.js");
/* harmony import */ var _route_dashboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route/dashboard.js */ "./dist/js/route/dashboard.js");
/* harmony import */ var _route_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route/index.js */ "./dist/js/route/index.js");
/* harmony import */ var _route_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route/login.js */ "./dist/js/route/login.js");
/* harmony import */ var _route_register_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route/register.js */ "./dist/js/route/register.js");
/* harmony import */ var _route_temp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/temp.js */ "./dist/js/route/temp.js");






class Router {
    static initialise() {
        Router._route('*', _route_global_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        Router._route('/', _route_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        Router._route('/dashboard', _route_dashboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
        Router._route('/login', _route_login_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
        Router._route('/register', _route_register_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
        Router._route('/temp', _route_temp_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }
    static _route(context, Class) {
        if (context === window.location.pathname || context === '*')
            Class.initialise();
    }
}
Router.initialise();


/***/ }),

/***/ "./dist/js/class/Compute/Compute.js":
/*!******************************************!*\
  !*** ./dist/js/class/Compute/Compute.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compute; });
class Compute {
}
Compute.constrain = (x, min, max) => Math.min(Math.max(x, min), max);


/***/ }),

/***/ "./dist/js/class/Engine/Action/Action.js":
/*!***********************************************!*\
  !*** ./dist/js/class/Engine/Action/Action.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
class Action {
    constructor(callback) {
        this._derivedClass = this.constructor;
        if (!(this._derivedClass.callbackList))
            this._derivedClass.callbackList = [];
        this.register(callback);
    }
    register(callback) {
        this._derivedClass.callbackList.push(callback);
        if (this._derivedClass.callbackList.length === 1)
            this.listen();
    }
    dispatch(event) {
        event.preventDefault();
        const defaultDetails = {
            'timestamp': event.timeStamp,
            'type': `${this._derivedClass.name}`,
        };
        this._derivedClass.callbackList.forEach((callback) => callback(Object.assign(Object.assign({}, defaultDetails), this.getActionDetails(event))));
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/KeyAction/KeyAction.js":
/*!************************************************************!*\
  !*** ./dist/js/class/Engine/Action/KeyAction/KeyAction.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyAction; });
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action.js */ "./dist/js/class/Engine/Action/Action.js");

class KeyAction extends _Action_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getActionDetails(event) {
        return {
            'key': event.key,
            'code': event.code,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/KeyAction/KeyPressAction.js":
/*!*****************************************************************!*\
  !*** ./dist/js/class/Engine/Action/KeyAction/KeyPressAction.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyPressAction; });
/* harmony import */ var _KeyAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyAction.js */ "./dist/js/class/Engine/Action/KeyAction/KeyAction.js");

class KeyPressAction extends _KeyAction_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('keydown', this.dispatch.bind(this));
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/KeyAction/KeyReleaseAction.js":
/*!*******************************************************************!*\
  !*** ./dist/js/class/Engine/Action/KeyAction/KeyReleaseAction.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyReleaseAction; });
/* harmony import */ var _KeyAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyAction.js */ "./dist/js/class/Engine/Action/KeyAction/KeyAction.js");

class KeyReleaseAction extends _KeyAction_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('keyup', this.dispatch.bind(this));
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonAction.js":
/*!****************************************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonAction.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseButtonAction; });
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action.js */ "./dist/js/class/Engine/Action/Action.js");

class MouseButtonAction extends _Action_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'button': event.button,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonPressAction.js":
/*!*********************************************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonPressAction.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseButtonPressAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _MouseButtonAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseButtonAction.js */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonAction.js");


class MouseButtonPressAction extends _MouseButtonAction_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mousedown', this.dispatch.bind(this));
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonReleaseAction.js":
/*!***********************************************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonReleaseAction.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseButtonReleaseAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _MouseButtonAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseButtonAction.js */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonAction.js");


class MouseButtonReleaseAction extends _MouseButtonAction_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mouseup', this.dispatch.bind(this));
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('contextmenu', event => event.preventDefault());
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseEnterAction.js":
/*!*********************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseEnterAction.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseEnterAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");


class MouseEnterAction extends _Action_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mouseenter', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseLeaveAction.js":
/*!*********************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseLeaveAction.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseLeaveAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");


class MouseLeaveAction extends _Action_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mouseleave', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseMoveAction.js":
/*!********************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseMoveAction.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseMoveAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");


class MouseMoveAction extends _Action_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mousemove', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/MouseScrollAction.js":
/*!**********************************************************!*\
  !*** ./dist/js/class/Engine/Action/MouseScrollAction.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseScrollAction; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");


class MouseScrollAction extends _Action_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('wheel', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        const cameraBoundingRectangle = event.target.getBoundingClientRect();
        return {
            'cameraX': event.clientX - cameraBoundingRectangle.left,
            'cameraY': event.clientY - cameraBoundingRectangle.top,
            'worldX': 0,
            'worldY': 0,
            'deltaX': event.deltaX,
            'deltaY': event.deltaY,
            'altKeyFlag': event.altKey,
            'shiftKeyFlag': event.shiftKey,
            'controlKeyFlag': event.ctrlKey,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/WindowCloseAction.js":
/*!**********************************************************!*\
  !*** ./dist/js/class/Engine/Action/WindowCloseAction.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowCloseAction; });
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");

class WindowCloseAction extends _Action_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('beforeunload', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        return {};
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Action/WindowResizeAction.js":
/*!***********************************************************!*\
  !*** ./dist/js/class/Engine/Action/WindowResizeAction.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowResizeAction; });
/* harmony import */ var _Action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action.js */ "./dist/js/class/Engine/Action/Action.js");

class WindowResizeAction extends _Action_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(callback) {
        super(callback);
    }
    listen() {
        window.addEventListener('resize', this.dispatch.bind(this));
    }
    getActionDetails(event) {
        return {
            'width': window.innerWidth,
            'height': window.innerHeight,
        };
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Camera/Camera.js":
/*!***********************************************!*\
  !*** ./dist/js/class/Engine/Camera/Camera.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var _Engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engine.js */ "./dist/js/class/Engine/Engine.js");
/* harmony import */ var _World_World_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../World/World.js */ "./dist/js/class/Engine/World/World.js");
/* harmony import */ var _Log_Log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Log/Log.js */ "./dist/js/class/Log/Log.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.js */ "./dist/js/class/Engine/config.js");




class Camera {
    static initialise() {
        Camera.targetFps = _config_js__WEBPACK_IMPORTED_MODULE_3__["CAMERA"].TARGET_FPS;
        Camera._generateCanvas();
        Camera.resize();
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_2__["default"].info('Camera initialised.');
    }
    static getPosition() {
        return Camera._position;
    }
    static setPosition(position) {
        return (Object.assign(Camera._position, _World_World_js__WEBPACK_IMPORTED_MODULE_1__["default"].constrainEntity(position, Camera.width, Camera.height)));
    }
    static _generateCanvas() {
        Camera.canvas = document.createElement('canvas');
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context = Camera.canvas.getContext('2d');
        Camera._pixelRatio = Camera._getPixelRatio();
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.setTransform(Camera._pixelRatio, 0, 0, Camera._pixelRatio, 0, 0);
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].container = document.querySelector(`[${_config_js__WEBPACK_IMPORTED_MODULE_3__["ENGINE"].DEFAULT_CONTAINER_ATTRIBUTE}]`);
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].container.insertBefore(Camera.canvas, _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].container.firstChild);
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_2__["default"].info('Canvas generated.');
    }
    static resize(width = window.innerWidth, height = window.innerHeight) {
        Camera.width = width;
        Camera.height = height;
        Camera.canvas.width = Math.round(Camera.width * Camera._pixelRatio);
        Camera.canvas.height = Math.round(Camera.height * Camera._pixelRatio);
        Camera.canvas.style.width = `${Camera.width}px`;
        Camera.canvas.style.height = `${Camera.height}px`;
    }
    static _getPixelRatio(scope) {
        if (!(scope instanceof CanvasRenderingContext2D))
            scope = _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const backingStoreRatio = scope.webkitBackingStorePixelRatio
            || scope.mozBackingStorePixelRatio
            || scope.msBackingStorePixelRatio
            || scope.oBackingStorePixelRatio
            || scope.backingStorePixelRatio
            || 1;
        return devicePixelRatio / backingStoreRatio;
    }
}
Camera._position = {
    'x': 0,
    'y': 0,
};
Camera.zoomX = 1;
Camera.zoomY = 1;


/***/ }),

/***/ "./dist/js/class/Engine/Core/Core.js":
/*!*******************************************!*\
  !*** ./dist/js/class/Engine/Core/Core.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Core; });
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _Interface_Interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interface/Interface.js */ "./dist/js/class/Engine/Interface/Interface.js");
/* harmony import */ var _World_World_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../World/World.js */ "./dist/js/class/Engine/World/World.js");



class Core {
    static loopHandler() {
        Core._fpsInterval = 1000 / _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].targetFps;
        Core._timestampPre = window.performance.now();
        Core.update();
        Core.render();
        Core._loop();
    }
    static _loop(timestamp = 0) {
        Core.frameId = window.requestAnimationFrame(Core._loop);
        let timestampElapsed = timestamp - Core._timestampPre;
        if (timestampElapsed <= Core._fpsInterval)
            return;
        Core._timestampPre = timestamp - (timestampElapsed % Core._fpsInterval);
        Object.values(Core._frameContainer).forEach(group => {
            group.frameCount += 1;
            group.timestampElapsed = timestamp - group.timestampStart;
        });
        const frameGroupActive = Core._frameContainer[Core._frameContainerPosition];
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].fps = Math.round(1000 / (frameGroupActive.timestampElapsed / frameGroupActive.frameCount) * 100) / 100;
        const resetIntervalTarget = (Core._frameContainer.left.frameCount === Core._frameContainer.right.frameCount)
            ? Core._resetInterval * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].targetFps
            : (Core._resetInterval * 2) * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"].targetFps;
        if (frameGroupActive.frameCount > resetIntervalTarget) {
            Core._frameContainer[Core._frameContainerPosition].frameCount = 0;
            Core._frameContainer[Core._frameContainerPosition].timestampStart = timestamp;
            Core._frameContainer[Core._frameContainerPosition].timestampElapsed = 0;
            Core._frameContainerPosition = (Core._frameContainerPosition === 'left')
                ? 'right'
                : 'left';
        }
        Core.update();
        Core.render();
    }
    static update() {
        _World_World_js__WEBPACK_IMPORTED_MODULE_2__["default"].tempProcess();
    }
    static render() {
        _Interface_Interface_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearScreen();
        // Draw background.
        _World_World_js__WEBPACK_IMPORTED_MODULE_2__["default"].tempRender();
        _Interface_Interface_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawDebug();
    }
}
Core._resetInterval = 5;
Core._frameGroup = {
    'frameCount': 0,
    'timestampStart': Core._timestampPre,
    'timestampElapsed': 0,
};
Core._frameContainer = {
    'left': Object.assign({}, Core._frameGroup),
    'right': Object.assign({}, Core._frameGroup),
};
Core._frameContainerPosition = 'left';


/***/ }),

/***/ "./dist/js/class/Engine/Engine.js":
/*!****************************************!*\
  !*** ./dist/js/class/Engine/Engine.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
/* harmony import */ var _Log_Log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Log/Log.js */ "./dist/js/class/Log/Log.js");
/* harmony import */ var _Core_Core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/Core.js */ "./dist/js/class/Engine/Core/Core.js");
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");
/* harmony import */ var _World_World_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./World/World.js */ "./dist/js/class/Engine/World/World.js");
/* harmony import */ var _Input_Input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input/Input.js */ "./dist/js/class/Engine/Input/Input.js");
/* harmony import */ var _Action_MouseButtonAction_MouseButtonPressAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Action/MouseButtonAction/MouseButtonPressAction */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonPressAction.js");
/* harmony import */ var _Action_MouseButtonAction_MouseButtonReleaseAction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Action/MouseButtonAction/MouseButtonReleaseAction.js */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonReleaseAction.js");
/* harmony import */ var _Action_MouseMoveAction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Action/MouseMoveAction.js */ "./dist/js/class/Engine/Action/MouseMoveAction.js");
/* harmony import */ var _Action_MouseScrollAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Action/MouseScrollAction.js */ "./dist/js/class/Engine/Action/MouseScrollAction.js");
/* harmony import */ var _Action_MouseEnterAction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Action/MouseEnterAction.js */ "./dist/js/class/Engine/Action/MouseEnterAction.js");
/* harmony import */ var _Action_MouseLeaveAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Action/MouseLeaveAction.js */ "./dist/js/class/Engine/Action/MouseLeaveAction.js");
/* harmony import */ var _Action_KeyAction_KeyPressAction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Action/KeyAction/KeyPressAction.js */ "./dist/js/class/Engine/Action/KeyAction/KeyPressAction.js");
/* harmony import */ var _Action_KeyAction_KeyReleaseAction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Action/KeyAction/KeyReleaseAction.js */ "./dist/js/class/Engine/Action/KeyAction/KeyReleaseAction.js");
/* harmony import */ var _Action_WindowResizeAction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Action/WindowResizeAction.js */ "./dist/js/class/Engine/Action/WindowResizeAction.js");
/* harmony import */ var _Action_WindowCloseAction_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Action/WindowCloseAction.js */ "./dist/js/class/Engine/Action/WindowCloseAction.js");
/* harmony import */ var _Entity_Agent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Entity/Agent.js */ "./dist/js/class/Engine/Entity/Agent.js");
















class Engine {
    static initialise() {
        _World_World_js__WEBPACK_IMPORTED_MODULE_3__["default"].initialise();
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialise();
        Engine._initialiseAction(); // temp.
        _Input_Input_js__WEBPACK_IMPORTED_MODULE_4__["default"].initialise();
        _World_World_js__WEBPACK_IMPORTED_MODULE_3__["default"].registerEntity(new _Entity_Agent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({ 'x': 0, 'y': 0, 'z': 0 }));
        Engine.state = 'initialised';
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Engine initialised.');
        Engine.start();
    }
    // private static _initControls() : void {
    //     new KeyPressAction(Engine._moveCameraCallback);
    // }
    // private static _moveCameraCallback(details : ActionDetails) : void {
    //     let x = Camera.getPosition().x;
    //     let y = Camera.getPosition().y;
    //     if (details.key === 'ArrowUp') y = Camera.getPosition().y + 1;
    //     else if (details.key === 'ArrowLeft') x = Camera.getPosition().x - 1;
    //     else if (details.key === 'ArrowRight') x = Camera.getPosition().x + 1;
    //     else if (details.key === 'ArrowDown') y = Camera.getPosition().y - 1;
    //     Camera.setPosition({ x, y });
    // }
    static start() {
        _Core_Core_js__WEBPACK_IMPORTED_MODULE_1__["default"].loopHandler();
        Engine.state = 'running';
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Engine started.');
    }
    static stop() {
        window.cancelAnimationFrame(_Core_Core_js__WEBPACK_IMPORTED_MODULE_1__["default"].frameId);
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"].fps = 0;
        Engine.state = 'stopped';
        _Core_Core_js__WEBPACK_IMPORTED_MODULE_1__["default"].render();
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Engine stopped.');
    }
    // Temp
    static _initialiseAction() {
        new _Action_MouseButtonAction_MouseButtonPressAction__WEBPACK_IMPORTED_MODULE_5__["default"]((details) => this._debugAction(`MOUSE_BUTTON_PRESS (${details.button})`));
        new _Action_MouseButtonAction_MouseButtonReleaseAction_js__WEBPACK_IMPORTED_MODULE_6__["default"]((details) => this._debugAction(`MOUSE_BUTTON_RELEASE (${details.button})`));
        new _Action_MouseMoveAction_js__WEBPACK_IMPORTED_MODULE_7__["default"]((details) => {
            Engine.mouseCameraX = details.cameraX;
            Engine.mouseCameraY = details.cameraY;
            Engine.mouseWorldX = details.worldX;
            Engine.mouseWorldY = details.worldY;
        });
        new _Action_MouseScrollAction_js__WEBPACK_IMPORTED_MODULE_8__["default"]((details) => this._debugAction(`MOUSE_SCROLL (${details.deltaX},${details.deltaY})`));
        new _Action_MouseEnterAction_js__WEBPACK_IMPORTED_MODULE_9__["default"]((details) => this._debugAction(`MOUSE_ENTER`));
        new _Action_MouseLeaveAction_js__WEBPACK_IMPORTED_MODULE_10__["default"]((details) => this._debugAction(`MOUSE_LEAVE`));
        new _Action_KeyAction_KeyPressAction_js__WEBPACK_IMPORTED_MODULE_11__["default"]((details) => this._debugAction(`KEY_PRESS (${details.code} - ${details.key})`));
        new _Action_KeyAction_KeyReleaseAction_js__WEBPACK_IMPORTED_MODULE_12__["default"]((details) => this._debugAction(`KEY_RELEASE (${details.code} - ${details.key})`));
        new _Action_WindowResizeAction_js__WEBPACK_IMPORTED_MODULE_13__["default"]((details) => {
            _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"].resize(details.width, details.height);
            this._debugAction(`WINDOW_RESIZE (${details.width} x ${details.height})`);
        });
        new _Action_WindowCloseAction_js__WEBPACK_IMPORTED_MODULE_14__["default"]((details) => this._debugAction(`WINDOW_CLOSE`));
        _Log_Log_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('Action initialised.');
    }
    // Temp
    static _debugAction(inputData) {
        this.actionList.unshift(inputData);
        this.actionList = this.actionList.slice(0, 10);
    }
}
Engine.Core = _Core_Core_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Engine.World = _World_World_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Engine.Camera = _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Engine.actionList = [];
Engine.state = 'unintialised';
Engine.debug = false;
Engine.mouseCameraX = 0;
Engine.mouseCameraY = 0;
Engine.mouseWorldX = 0;
Engine.mouseWorldY = 0;


/***/ }),

/***/ "./dist/js/class/Engine/Entity/Agent.js":
/*!**********************************************!*\
  !*** ./dist/js/class/Engine/Entity/Agent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Agent; });
/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.js */ "./dist/js/class/Engine/Entity/Entity.js");
/* harmony import */ var _Engine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Engine.js */ "./dist/js/class/Engine/Engine.js");
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");



class Agent extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position) {
        super(position);
        this._width = 100;
        this._height = 100;
    }
    process() {
        this.setPosition(this.getPosition());
    }
    render() {
        const x = this.getScreenPosition().x;
        const y = this.getScreenPosition().y;
        _Engine_js__WEBPACK_IMPORTED_MODULE_1__["default"].context.fillStyle = 'red';
        _Engine_js__WEBPACK_IMPORTED_MODULE_1__["default"].context.fillRect(x, y, this._width * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"].zoomX, this._height * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_2__["default"].zoomY);
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Entity/Entity.js":
/*!***********************************************!*\
  !*** ./dist/js/class/Engine/Entity/Entity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var _World_World_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../World/World.js */ "./dist/js/class/Engine/World/World.js");
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");


class Entity {
    constructor(position) {
        this._position = {
            'x': 0,
            'y': 0,
            'z': 0,
        };
        this._worldPosition = {
            'x': 0,
            'y': 0,
            'z': 0,
        };
        this._width = 0;
        this._height = 0;
        this.setPosition(position);
    }
    getPosition() {
        // Need to convert it from true to virtual coordinates.
        return this._worldPosition;
    }
    getScreenPosition() {
        return this._position;
    }
    // Will later return getPosition...
    setPosition(position) {
        position = _World_World_js__WEBPACK_IMPORTED_MODULE_0__["default"].constrainEntity(position, this._width, this._height);
        if (position.x != null) {
            this._worldPosition.x = position.x;
            this._position.x = this._worldToScreen(position).x;
        }
        if (position.y != null) {
            this._worldPosition.y = position.y;
            this._position.y = this._worldToScreen(position).y;
        }
        if (position.z != null) {
            this._worldPosition.z = position.z;
            this._position.z = position.z;
        }
    }
    _worldToScreen(position) {
        const result = {};
        if (position.z != null)
            result.z = position.z;
        if (position.x != null)
            result.x = (_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].width / 2 + (_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosition().x * -1) + position.x - this._width / 2) * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].zoomX;
        if (position.y != null)
            result.y = (_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].height / 2 + _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosition().y + (position.y * -1) - this._height / 2) * _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].zoomY;
        return result;
    }
}


/***/ }),

/***/ "./dist/js/class/Engine/Input/Input.js":
/*!*********************************************!*\
  !*** ./dist/js/class/Engine/Input/Input.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _Action_MouseButtonAction_MouseButtonPressAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action/MouseButtonAction/MouseButtonPressAction */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonPressAction.js");
/* harmony import */ var _Action_MouseButtonAction_MouseButtonReleaseAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action/MouseButtonAction/MouseButtonReleaseAction.js */ "./dist/js/class/Engine/Action/MouseButtonAction/MouseButtonReleaseAction.js");
/* harmony import */ var _Action_MouseMoveAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Action/MouseMoveAction.js */ "./dist/js/class/Engine/Action/MouseMoveAction.js");
/* harmony import */ var _Action_MouseScrollAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Action/MouseScrollAction.js */ "./dist/js/class/Engine/Action/MouseScrollAction.js");
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");





class Input {
    static initialise() {
        new _Action_MouseButtonAction_MouseButtonPressAction__WEBPACK_IMPORTED_MODULE_0__["default"](Input._mouseButtonPressCallback);
        new _Action_MouseButtonAction_MouseButtonReleaseAction_js__WEBPACK_IMPORTED_MODULE_1__["default"](Input._mouseButtonReleaseCallback);
        new _Action_MouseMoveAction_js__WEBPACK_IMPORTED_MODULE_2__["default"](Input._mouseMoveCallback);
        new _Action_MouseScrollAction_js__WEBPACK_IMPORTED_MODULE_3__["default"](Input._mouseScrollCallback);
    }
    static _panEnable(cameraX, cameraY) {
        Input._panMode = true;
        Input._panPositionX = cameraX;
        Input._panPositionY = cameraY;
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].canvas.style.cursor = 'grab';
    }
    static _panDisable() {
        Input._panMode = false;
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].canvas.style.cursor = 'default';
    }
    static _pan(cameraX, cameraY) {
        let x = _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].getPosition().x;
        let y = _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].getPosition().y;
        x += Input._panPositionX - cameraX;
        y -= Input._panPositionY - cameraY;
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].setPosition({ x, y });
        Input._panPositionX = cameraX;
        Input._panPositionY = cameraY;
    }
    // private static _zoom(deltaX : number) : void {
    //     Camera.zoom -= deltaX * 0.05;
    // }
    static _zoomIn() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].zoomX *= 1.01;
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].zoomY *= 1.01;
    }
    static _zoomOut() {
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].zoomX *= 0.99;
        _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].zoomY *= 0.99;
    }
    static _mouseButtonPressCallback(details) {
        if (details.button === Input._PAN_BUTTON)
            Input._panEnable(details.cameraX, details.cameraY);
    }
    static _mouseButtonReleaseCallback(details) {
        if (details.button === Input._PAN_BUTTON)
            Input._panDisable();
    }
    static _mouseMoveCallback(details) {
        if (Input._panMode)
            Input._pan(details.cameraX, details.cameraY);
    }
    static _mouseScrollCallback(details) {
        if (details.deltaY < 0)
            Input._zoomIn();
        else if (details.deltaY > 0)
            Input._zoomOut();
    }
}
Input._panMode = false;
Input._panPositionX = 0;
Input._panPositionY = 0;
Input._PAN_BUTTON = 2;


/***/ }),

/***/ "./dist/js/class/Engine/Interface/Interface.js":
/*!*****************************************************!*\
  !*** ./dist/js/class/Engine/Interface/Interface.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interface; });
/* harmony import */ var _Engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engine.js */ "./dist/js/class/Engine/Engine.js");
/* harmony import */ var _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Camera/Camera.js */ "./dist/js/class/Engine/Camera/Camera.js");


class Interface {
    static drawDebug() {
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.font = 'bold 10px Arial';
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillStyle = Interface._COLOUR_HEADING;
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`[COMSAT] Debug (F2)`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 0));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillStyle = Interface._COLOUR_SUBHEADING;
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.font = 'italic 10px Arial';
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`State: ${_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].state}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 1));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`FPS: ${(Number.isNaN(_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].fps)) ? 'loading...' : _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].fps}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 2));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`Mouse Position (Camera): ${_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].mouseCameraX}, ${_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].mouseCameraY}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 3));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`Mouse Position (World): ${_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].mouseWorldX}, ${_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].mouseWorldY}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 4));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`Camera Position: ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosition().x}, ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPosition().y}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 5));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`Camera Size: ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].width} x ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].height}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 6));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`Camera Zoom: ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].zoomX}, ${_Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].zoomY}`, Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 7));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText('Action Watch:', Interface._PADDING_LEFT, Interface._PADDING_TOP + (Interface._TEXT_MARGIN_BOTTOM * 8));
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillStyle = Interface._COLOUR_LIST_ITEM;
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].actionList.forEach((actionText, i) => {
            _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.globalAlpha = 1 - (i * (1 / Interface._LIST_SIZE));
            _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillText(`> ${actionText}`, Interface._PADDING_LEFT * 2, Interface._PADDING_TOP
                + (Interface._TEXT_MARGIN_BOTTOM * 8)
                + (Interface._TEXT_MARGIN_BOTTOM * (i + 1)));
        });
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.globalAlpha = 1;
    }
    static clearScreen() {
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillStyle = 'white';
        _Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].context.fillRect(0, 0, _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].width, _Camera_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"].height);
    }
}
Interface._PADDING_LEFT = 10;
Interface._PADDING_TOP = 20;
Interface._TEXT_MARGIN_BOTTOM = 15;
Interface._LIST_SIZE = 10;
Interface._COLOUR_HEADING = '#2f3640';
Interface._COLOUR_SUBHEADING = '#353b48';
Interface._COLOUR_LIST_ITEM = '#718093';


/***/ }),

/***/ "./dist/js/class/Engine/World/World.js":
/*!*********************************************!*\
  !*** ./dist/js/class/Engine/World/World.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
/* harmony import */ var _Entity_Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity/Entity.js */ "./dist/js/class/Engine/Entity/Entity.js");
/* harmony import */ var _Compute_Compute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Compute/Compute.js */ "./dist/js/class/Compute/Compute.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "./dist/js/class/Engine/config.js");



class World {
    static initialise() {
        World.width = _config_js__WEBPACK_IMPORTED_MODULE_2__["WORLD"].DEFAULT_WIDTH;
        World.height = _config_js__WEBPACK_IMPORTED_MODULE_2__["WORLD"].DEFAULT_HEIGHT;
    }
    static registerEntity(entityList) {
        if (entityList instanceof _Entity_Entity_js__WEBPACK_IMPORTED_MODULE_0__["default"])
            entityList = [entityList];
        entityList.forEach(entity => World._entityList[entity.getPosition().z].push(entity));
    }
    static tempProcess() {
        World._entityList.forEach(layer => layer.forEach(entity => entity.process()));
    }
    static tempRender() {
        World._entityList.forEach(layer => layer.forEach(entity => entity.render()));
    }
    static constrainEntity(position, width, height) {
        const xMin = (World.width / 2 - width / 2) * -1;
        const xMax = World.width / 2 - width / 2;
        const yMin = (World.height / 2 - height / 2) * -1;
        const yMax = World.height / 2 - height / 2;
        const result = {};
        if (position.z != null)
            result.z = position.z;
        if (position.x != null)
            result.x = _Compute_Compute_js__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(position.x, xMin, xMax);
        if (position.y != null)
            result.y = _Compute_Compute_js__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(position.y, yMin, yMax);
        return result;
    }
}
World._entityList = Array.from(Array(100), () => new Array());


/***/ }),

/***/ "./dist/js/class/Engine/config.js":
/*!****************************************!*\
  !*** ./dist/js/class/Engine/config.js ***!
  \****************************************/
/*! exports provided: ENGINE, CAMERA, WORLD, SURFACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENGINE", function() { return ENGINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA", function() { return CAMERA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORLD", function() { return WORLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SURFACE", function() { return SURFACE; });
const ENGINE = {
    'DEFAULT_CONTAINER_ATTRIBUTE': 'data-engine="container"',
};
const CAMERA = {
    'TARGET_FPS': 60,
};
const WORLD = {
    'DEFAULT_WIDTH': 10000,
    'DEFAULT_HEIGHT': 10000,
};
const SURFACE = {
    'DEFAULT_WIDTH': 500,
    'DEFAULT_HEIGHT': 500,
};


/***/ }),

/***/ "./dist/js/class/Log/Log.js":
/*!**********************************!*\
  !*** ./dist/js/class/Log/Log.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
class Log {
    static _getMessageString(message, context) {
        return `%c[${Log._APPLICATION_NAME}] %c${(context) ? `(${context}) ` : ''}${message}`;
    }
    static info(message, context) {
        console.info(Log._getMessageString(message, context), 'font-weight: bold; color: #2f3640;', 'color: #192a56;');
    }
}
Log._APPLICATION_NAME = 'COMSAT';


/***/ }),

/***/ "./dist/js/class/Search/Search.js":
/*!****************************************!*\
  !*** ./dist/js/class/Search/Search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
class Search {
    constructor() {
        this._searchBox = document.getElementById('searchBox');
        this._searchButton = document.getElementById('searchButton');
        this._URL = window.location.href;
        if (this._URL.includes('search='))
            this._scrollToSearch();
        this._searchButton.addEventListener('click', () => this._search());
    }
    ;
    _search() {
        const query = this._searchBox.value || '';
        if (query === '')
            return;
        window.location.replace(`https://buzzmedia.target/?search=${query}`); // UPDATE WITH HOSTNAME
    }
    ;
    async _scrollToSearch() {
        console.log('Scrolling');
        await new Promise((resolve, reject) => { setTimeout(resolve, 100); });
        document.getElementById('search').scrollIntoView();
    }
    ;
}


/***/ }),

/***/ "./dist/js/lib/Form/Form.js":
/*!**********************************!*\
  !*** ./dist/js/lib/Form/Form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
    constructor(configuration) {
        this.data = [];
        this.options = {};
        this.method = 'POST';
        this._id = configuration.id;
        this.route = configuration.route;
        if (configuration.data)
            this.data = configuration.data;
        if (configuration.options)
            this.options = configuration.options;
        this.preRequestCallback = configuration.preRequestCallback;
        this.successCallback = configuration.successCallback;
        this.errorCallback = configuration.errorCallback;
        if (configuration.method != null)
            this.method = configuration.method;
        this._formElement = document.querySelector(`[data-cf-form="${this._id}"]`);
        if (this._formElement == null)
            return;
        this._submitButtonElement = this._formElement.querySelector('[data-cf-form="submit"]');
        this._submitButtonElement.addEventListener('click', event => this._submit(event));
    }
    async _submit(event) {
        event.preventDefault();
        const formData = new FormData(this._formElement);
        const details = {};
        this.data.forEach(field => details[field] = formData.get(field));
        if (this.preRequestCallback != null && !(this.preRequestCallback()))
            return;
        const response = await fetch(this.route, Object.assign({ 'method': this.method, 'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 'body': JSON.stringify(details) }, this.options));
        let responseDetails = {
            'status': response.status,
            'headers': response.headers,
        };
        let callback;
        if (response.status >= 200 && response.status < 300)
            callback = this.successCallback;
        else
            callback = this.errorCallback;
        const contentType = response.headers.get('content-type');
        if (contentType !== null && contentType.indexOf('application/json') !== -1) {
            responseDetails.type = 'json';
            return callback(await response.json(), responseDetails);
        }
        else if (contentType !== null) {
            responseDetails.type = 'text';
            return callback(await response.text(), responseDetails);
        }
        return callback(responseDetails);
    }
}


/***/ }),

/***/ "./dist/js/route/dashboard.js":
/*!************************************!*\
  !*** ./dist/js/route/dashboard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardRouter; });
/* harmony import */ var _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Form/Form */ "./dist/js/lib/Form/Form.js");

class DashboardRouter {
    static initialise() {
        new _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            'id': 'logout',
            'route': 'https://buzzmedia.target:8000/api/v1/user/deauthenticate',
            'method': 'POST',
            'options': {
                'credentials': 'include'
            },
            'successCallback': DashboardRouter._formSuccessCallback,
        });
    }
    static _formSuccessCallback(data) {
        window.location.href = '/login';
    }
}


/***/ }),

/***/ "./dist/js/route/global.js":
/*!*********************************!*\
  !*** ./dist/js/route/global.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalRouter; });
class GlobalRouter {
    static initialise() {
    }
}


/***/ }),

/***/ "./dist/js/route/index.js":
/*!********************************!*\
  !*** ./dist/js/route/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexRouter; });
/* harmony import */ var _class_Search_Search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Search/Search.js */ "./dist/js/class/Search/Search.js");

class IndexRouter {
    static initialise() {
        new _class_Search_Search_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}


/***/ }),

/***/ "./dist/js/route/login.js":
/*!********************************!*\
  !*** ./dist/js/route/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginRouter; });
/* harmony import */ var _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Form/Form */ "./dist/js/lib/Form/Form.js");

class LoginRouter {
    static initialise() {
        new _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            'id': 'login',
            'route': 'https://buzzmedia.target:8000/api/v1/user/authenticate',
            'method': 'POST',
            'data': ['email', 'password'],
            'options': { 'credentials': 'include' },
            'preRequestCallback': LoginRouter._formPreRequestCallback,
            'successCallback': LoginRouter._formSuccessCallback,
            'errorCallback': LoginRouter._formErrorCallback,
        });
    }
    static _formPreRequestCallback() {
        // console.log('pre');
        return true;
    }
    static _formSuccessCallback(data) {
        window.location.href = '/dashboard';
    }
    static _formErrorCallback(data) {
        LoginRouter._formErrorMessageElement.innerText = data['error'];
        LoginRouter._formErrorMessageElement.style.display = 'block';
    }
}
LoginRouter._formErrorMessageElement = document.querySelector('[data-form-error]');


/***/ }),

/***/ "./dist/js/route/register.js":
/*!***********************************!*\
  !*** ./dist/js/route/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterRouter; });
/* harmony import */ var _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Form/Form */ "./dist/js/lib/Form/Form.js");

class RegisterRouter {
    static initialise() {
        console.log('here');
        new _lib_Form_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            'id': 'register',
            'route': 'https://buzzmedia.target:8000/api/v1/user/create',
            'method': 'PUT',
            'data': ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
            'preRequestCallback': RegisterRouter._formPreRequestCallback,
            'successCallback': RegisterRouter._formSuccessCallback,
            'errorCallback': RegisterRouter._formErrorCallback,
        });
    }
    static _formPreRequestCallback() {
        // console.log('pre');
        return true;
    }
    static _formSuccessCallback(data) {
        window.location.href = '/login';
    }
    static _formErrorCallback(data) {
        RegisterRouter._formErrorMessageElement.innerText = data['error'];
        RegisterRouter._formErrorMessageElement.style.display = 'block';
    }
}
RegisterRouter._formErrorMessageElement = document.querySelector('[data-form-error]');


/***/ }),

/***/ "./dist/js/route/temp.js":
/*!*******************************!*\
  !*** ./dist/js/route/temp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TempRouter; });
/* harmony import */ var _class_Engine_Engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Engine/Engine.js */ "./dist/js/class/Engine/Engine.js");

class TempRouter {
    static initialise() {
        _class_Engine_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"].initialise();
    }
}
window.Engine = _class_Engine_Engine_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ })

/******/ });
//# sourceMappingURL=main.js.map