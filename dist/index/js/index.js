/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\n    at Function.Module._resolveFilename (module.js:337:15)\n    at Function.Module._load (module.js:287:25)\n    at Module.require (module.js:366:17)\n    at require (module.js:385:17)\n    at Object.<anonymous> (/Users/lanhao/projects/magic/node_modules/babel-loader/lib/index.js:4:13)\n    at Module._compile (module.js:435:26)\n    at Object.Module._extensions..js (module.js:442:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:311:12)\n    at Module.require (module.js:366:17)\n    at require (module.js:385:17)\n    at loadLoader (/Users/lanhao/projects/magic/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/lanhao/projects/magic/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/lanhao/projects/magic/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/lanhao/projects/magic/node_modules/webpack/lib/Compilation.js:142:10)\n    at /Users/lanhao/projects/magic/node_modules/webpack/lib/Compilation.js:424:9\n    at /Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModuleFactory.js:242:4\n    at /Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /Users/lanhao/projects/magic/node_modules/tapable/lib/Tapable.js:204:11\n    at NormalModuleFactory.<anonymous> (/Users/lanhao/projects/magic/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/lanhao/projects/magic/node_modules/tapable/lib/Tapable.js:208:13)\n    at onDoneResolving (/Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/Users/lanhao/projects/magic/node_modules/webpack/lib/NormalModuleFactory.js:189:6)\n    at doNTCallback0 (node.js:419:9)\n    at process._tickCallback (node.js:348:13)");

/***/ })

/******/ });