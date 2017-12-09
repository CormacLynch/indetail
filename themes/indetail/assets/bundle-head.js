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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Head
 *
 * This file should only include basic environment setup logic and browser feature tests
 *
 * This should be included before the stylesheet so the browser doesn't need to reflow after adding the feature
 * detect classes from modernizer. Since this goes before the stylesheet this file should be placed inline into the html.
 *
 * Where possible this file should always be minified and obfuscated via `gulp prod`.
 *
 * BEWARE: This file and all dependencies of this file should not exceed 1.5kb or it will slow down every page
 * request as it can't be cached since it's inline and all.
 *
 */


__webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-borderradius-boxshadow-cssanimations-cssremunit-csstransitions-formvalidation-inputtypes-queryselector-sessionstorage-touchevents !*/
! function(e, t, n) { function i(e, t) { return typeof e === t; } function r() { var e, t, n, r, o, s, a; for (var l in g) { if (e = [], t = g[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0;n < t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase()); for (r = i(t.fn, 'function') ? t.fn() : t.fn, o = 0;o < e.length;o++)s = e[o], a = s.split('.'), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? '' : 'no-') + a.join('-')); } } function o(e) { var t = S.className, n = Modernizr._config.classPrefix || ''; if (x && (t = t.baseVal), Modernizr._config.enableJSClass) { var i = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');t = t.replace(i, '$1' + n + 'js$2'); }Modernizr._config.enableClasses && (t += ' ' + n + e.join(' ' + n), x ? S.className.baseVal = t : S.className = t); } function s() { return 'function' !== typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0]) : t.createElement.apply(t, arguments); } function a() { var e = t.body; return e || (e = s(x ? 'svg' : 'body'), e.fake = !0), e; } function l(e, n, i, r) { var o, l, u, d, f = 'modernizr', c = s('div'), p = a(); if (parseInt(i, 10)) for (;i--;)u = s('div'), u.id = r ? r[i] : f + (i + 1), c.appendChild(u); return o = s('style'), o.type = 'text/css', o.id = 's' + f, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = f, p.fake && (p.style.background = '', p.style.overflow = 'hidden', d = S.style.overflow, S.style.overflow = 'hidden', S.appendChild(p)), l = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = d, S.offsetHeight) : c.parentNode.removeChild(c), !!l; } function u(e, t) { return !!~('' + e).indexOf(t); } function d(e) { return e.replace(/([A-Z])/g, function(e, t) { return '-' + t.toLowerCase(); }).replace(/^ms-/, '-ms-'); } function f(t, i) { var r = t.length; if ('CSS'in e && 'supports'in e.CSS) { for (;r--;) if (e.CSS.supports(d(t[r]), i)) return !0; return !1; } if ('CSSSupportsRule'in e) { for (var o = [];r--;)o.push('(' + d(t[r]) + ':' + i + ')'); return o = o.join(' or '), l('@supports (' + o + ') { #modernizr { position: absolute; } }', function(e) { return 'absolute' === getComputedStyle(e, null).position; }); } return n; } function c(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase(); }).replace(/^-/, ''); } function p(e, t, r, o) { function a() { d && (delete A.style, delete A.modElem); } if (o = i(o, 'undefined') ? !1 : o, !i(r, 'undefined')) { var l = f(e, r); if (!i(l, 'undefined')) return l; } for (var d, p, m, v, h, y = ['modernizr', 'tspan'];!A.style;)d = !0, A.modElem = s(y.shift()), A.style = A.modElem.style; for (m = e.length, p = 0;m > p;p++) if (v = e[p], h = A.style[v], u(v, '-') && (v = c(v)), A.style[v] !== n) { if (o || i(r, 'undefined')) return a(), 'pfx' === t ? v : !0; try { A.style[v] = r; } catch (g) {} if (A.style[v] !== h) return a(), 'pfx' === t ? v : !0; } return a(), !1; } function m(e, t) { return function() { return e.apply(t, arguments); }; } function v(e, t, n) { var r; for (var o in e) if (e[o]in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, 'function') ? m(r, n || t) : r); return !1; } function h(e, t, n, r, o) { var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + ' ' + N.join(s + ' ') + s).split(' '); return i(t, 'string') || i(t, 'undefined') ? p(a, t, r, o) : (a = (e + ' ' + j.join(s + ' ') + s).split(' '), v(a, t, n)); } function y(e, t, i) { return h(e, n, n, t, i); } var g = [], b = {_version:'3.0.0', _config:{classPrefix:'', enableClasses:!0, enableJSClass:!0, usePrefixes:!0}, _q:[], on: function(e, t) { var n = this;setTimeout(function() { t(n[e]); }, 0); }, addTest: function(e, t, n) { g.push({name:e, fn:t, options:n}); }, addAsyncTest: function(e) { g.push({name:null, fn:e}); }}, Modernizr = function() {};Modernizr.prototype = b, Modernizr = new Modernizr; var C = [], S = t.documentElement, x = 'svg' === S.nodeName.toLowerCase(), T = s('input'), w = 'search tel url email datetime date month week time datetime-local number range color'.split(' '), _ = {};Modernizr.inputtypes = function(e) { for (var i, r, o, s = e.length, a = ':)', l = 0;s > l;l++)T.setAttribute('type', i = e[l]), o = 'text' !== T.type && 'style'in T, o && (T.value = a, T.style.cssText = 'position:absolute;visibility:hidden;', /^range$/.test(i) && T.style.WebkitAppearance !== n ? (S.appendChild(T), r = t.defaultView, o = r.getComputedStyle && 'textfield' !== r.getComputedStyle(T, null).WebkitAppearance && 0 !== T.offsetHeight, S.removeChild(T)) : /^(search|tel)$/.test(i) || (o = /^(url|email|number)$/.test(i) ? T.checkValidity && T.checkValidity() === !1 : T.value !== a)), _[e[l]] = !!o; return _; }(w), Modernizr.addTest('queryselector', 'querySelector'in t && 'querySelectorAll'in t); var z = b._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : [];b._prefixes = z; var k = b.testStyles = l;Modernizr.addTest('touchevents', function() { var n; if ('ontouchstart'in e || e.DocumentTouch && t instanceof DocumentTouch)n = !0;else { var i = ['@media (', z.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');k(i, function(e) { n = 9 === e.offsetTop; }); } return n; }); var E = 'Moz O ms Webkit', N = b._config.usePrefixes ? E.split(' ') : [];b._cssomPrefixes = N; var P = {elem:s('modernizr')};Modernizr._q.push(function() { delete P.elem; }); var A = {style:P.elem.style};Modernizr._q.unshift(function() { delete A.style; }); var j = b._config.usePrefixes ? E.toLowerCase().split(' ') : [];b._domPrefixes = j, b.testAllProps = h, b.testAllProps = y, Modernizr.addTest('cssanimations', y('animationName', 'a', !0)), Modernizr.addTest('backgroundsize', y('backgroundSize', '100%', !0)), Modernizr.addTest('borderradius', y('borderRadius', '0px', !0)), Modernizr.addTest('boxshadow', y('boxShadow', '1px 1px', !0)), Modernizr.addTest('cssremunit', function() { var e = s('a').style; try { e.fontSize = '3rem'; } catch (t) {} return /rem/.test(e.fontSize); }), Modernizr.addTest('csstransitions', y('transition', 'all', !0)), Modernizr.addTest('formvalidation', function() { var t = s('form'); if (!('checkValidity'in t && 'addEventListener'in t)) return !1; if ('reportValidity'in t) return !0; var n, i = !1; return Modernizr.formvalidationapi = !0, t.addEventListener('submit', function(t) { e.opera || t.preventDefault(), t.stopPropagation(); }, !1), t.innerHTML = '<input name="modTest" required><button></button>', k('#modernizr form{position:absolute;top:-99999em}', function(e) { e.appendChild(t), n = t.getElementsByTagName('input')[0], n.addEventListener('invalid', function(e) { i = !0, e.preventDefault(), e.stopPropagation(); }, !1), Modernizr.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName('button')[0].click(); }), i; }), Modernizr.addTest('sessionstorage', function() { var e = 'modernizr'; try { return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0; } catch (t) { return !1; } }), r(), o(C), delete b.addTest, delete b.addAsyncTest; for (var q = 0;q < Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr = Modernizr; }(window, document);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmE4ODNjZTQ0ZTJmOTcyNWUxZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWQvbW9kZXJuaXpyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUIsdUJBQXVCLEVBQUUsZUFBZSx5QkFBeUIsbUJBQW1CLHdJQUF3SSw2QkFBNkIsK0NBQStDLHFEQUFxRCxhQUFhLHNQQUFzUCxFQUFFLEVBQUUsZ0JBQWdCLDhEQUE4RCw2REFBNkQsb0RBQW9ELG9DQUFvQyxFQUFFLG1IQUFtSCxFQUFFLGVBQWUsZ01BQWdNLEVBQUUsZUFBZSxnQkFBZ0IseURBQXlELEVBQUUseUJBQXlCLHdEQUF3RCw0QkFBNEIsSUFBSSwrREFBK0QsNGNBQTRjLEVBQUUsbUJBQW1CLCtCQUErQixFQUFFLGdCQUFnQiw4Q0FBOEMsOEJBQThCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLGtCQUFrQix1Q0FBdUMsT0FBTyxJQUFJLDRDQUE0QyxXQUFXLEVBQUUsNkJBQTZCLGlCQUFpQixJQUFJLHVDQUF1QyxzREFBc0QsYUFBYSxvQkFBb0IsRUFBRSxFQUFFLGdCQUFnQiwwREFBMEQsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGdCQUFnQix5REFBeUQsNEJBQTRCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLGVBQWUseUNBQXlDLEVBQUUsMERBQTBELGlCQUFpQixrQ0FBa0MsRUFBRSxvREFBb0QsU0FBUyw2REFBNkQsMEJBQTBCLE1BQU0sK0VBQStFLDhEQUE4RCxNQUFNLGdCQUFnQixFQUFFLGFBQWEsd0RBQXdELEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLG9CQUFvQiw4QkFBOEIsR0FBRyxFQUFFLHNCQUFzQixPQUFPLDRHQUE0RyxXQUFXLEVBQUUsNEJBQTRCLGdHQUFnRywySEFBMkgsRUFBRSxzQkFBc0IseUJBQXlCLEVBQUUsa0JBQWtCLDJCQUEyQixtRUFBbUUsNkJBQTZCLGNBQWMsdUJBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLFNBQVMsd0JBQXdCLEVBQUUsRUFBRSw2QkFBNkIsU0FBUyxnQkFBZ0IsRUFBRSxHQUFHLDRCQUE0QixtREFBbUQsME1BQTBNLG9DQUFvQyxpREFBaUQsTUFBTSxvSUFBb0ksa0JBQWtCLGtYQUFrWCxVQUFVLEVBQUUsdUZBQXVGLDZFQUE2RSxnQkFBZ0IsMEJBQTBCLDZDQUE2QyxPQUFPLGdGQUFnRixNQUFNLG1FQUFtRSxXQUFXLFFBQVEsbUJBQW1CLFlBQVksa0JBQWtCLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSwwRUFBMEUscUJBQXFCLFVBQVUscUJBQXFCLDhCQUE4QixlQUFlLEVBQUUsRUFBRSxVQUFVLG9CQUFvQixpQ0FBaUMsZ0JBQWdCLEVBQUUsRUFBRSxpRUFBaUUsK1dBQStXLHNCQUFzQixNQUFNLHFCQUFxQixFQUFFLGFBQWEsK0JBQStCLEVBQUUsb0hBQW9ILG1CQUFtQixpRUFBaUUscUNBQXFDLGVBQWUsb0ZBQW9GLG9EQUFvRCxFQUFFLDRGQUE0RixrQkFBa0IsYUFBYSxnQkFBZ0Isc0dBQXNHLGlEQUFpRCxFQUFFLDRHQUE0RyxFQUFFLEtBQUssRUFBRSxtREFBbUQscUJBQXFCLE1BQU0sdUVBQXVFLEVBQUUsWUFBWSxXQUFXLEVBQUUsRUFBRSxzREFBc0QsZ0JBQWdCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEVBQUUiLCJmaWxlIjoiYnVuZGxlLWhlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4Myk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmE4ODNjZTQ0ZTJmOTcyNWUxZDQiLCJcbi8qKlxuICogSGVhZFxuICpcbiAqIFRoaXMgZmlsZSBzaG91bGQgb25seSBpbmNsdWRlIGJhc2ljIGVudmlyb25tZW50IHNldHVwIGxvZ2ljIGFuZCBicm93c2VyIGZlYXR1cmUgdGVzdHNcbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBpbmNsdWRlZCBiZWZvcmUgdGhlIHN0eWxlc2hlZXQgc28gdGhlIGJyb3dzZXIgZG9lc24ndCBuZWVkIHRvIHJlZmxvdyBhZnRlciBhZGRpbmcgdGhlIGZlYXR1cmVcbiAqIGRldGVjdCBjbGFzc2VzIGZyb20gbW9kZXJuaXplci4gU2luY2UgdGhpcyBnb2VzIGJlZm9yZSB0aGUgc3R5bGVzaGVldCB0aGlzIGZpbGUgc2hvdWxkIGJlIHBsYWNlZCBpbmxpbmUgaW50byB0aGUgaHRtbC5cbiAqXG4gKiBXaGVyZSBwb3NzaWJsZSB0aGlzIGZpbGUgc2hvdWxkIGFsd2F5cyBiZSBtaW5pZmllZCBhbmQgb2JmdXNjYXRlZCB2aWEgYGd1bHAgcHJvZGAuXG4gKlxuICogQkVXQVJFOiBUaGlzIGZpbGUgYW5kIGFsbCBkZXBlbmRlbmNpZXMgb2YgdGhpcyBmaWxlIHNob3VsZCBub3QgZXhjZWVkIDEuNWtiIG9yIGl0IHdpbGwgc2xvdyBkb3duIGV2ZXJ5IHBhZ2VcbiAqIHJlcXVlc3QgYXMgaXQgY2FuJ3QgYmUgY2FjaGVkIHNpbmNlIGl0J3MgaW5saW5lIGFuZCBhbGwuXG4gKlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vbW9kZXJuaXpyLmpzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9oZWFkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiEgbW9kZXJuaXpyIDMuMC4wIChDdXN0b20gQnVpbGQpIHwgTUlUICpcbiAqIGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLz8tYmFja2dyb3VuZHNpemUtYm9yZGVycmFkaXVzLWJveHNoYWRvdy1jc3NhbmltYXRpb25zLWNzc3JlbXVuaXQtY3NzdHJhbnNpdGlvbnMtZm9ybXZhbGlkYXRpb24taW5wdXR0eXBlcy1xdWVyeXNlbGVjdG9yLXNlc3Npb25zdG9yYWdlLXRvdWNoZXZlbnRzICEqL1xuISBmdW5jdGlvbihlLCB0LCBuKSB7IGZ1bmN0aW9uIGkoZSwgdCkgeyByZXR1cm4gdHlwZW9mIGUgPT09IHQ7IH0gZnVuY3Rpb24gcigpIHsgdmFyIGUsIHQsIG4sIHIsIG8sIHMsIGE7IGZvciAodmFyIGwgaW4gZykgeyBpZiAoZSA9IFtdLCB0ID0gZ1tsXSwgdC5uYW1lICYmIChlLnB1c2godC5uYW1lLnRvTG93ZXJDYXNlKCkpLCB0Lm9wdGlvbnMgJiYgdC5vcHRpb25zLmFsaWFzZXMgJiYgdC5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKSkgZm9yIChuID0gMDtuIDwgdC5vcHRpb25zLmFsaWFzZXMubGVuZ3RoO24rKyllLnB1c2godC5vcHRpb25zLmFsaWFzZXNbbl0udG9Mb3dlckNhc2UoKSk7IGZvciAociA9IGkodC5mbiwgJ2Z1bmN0aW9uJykgPyB0LmZuKCkgOiB0LmZuLCBvID0gMDtvIDwgZS5sZW5ndGg7bysrKXMgPSBlW29dLCBhID0gcy5zcGxpdCgnLicpLCAxID09PSBhLmxlbmd0aCA/IE1vZGVybml6clthWzBdXSA9IHIgOiAoIU1vZGVybml6clthWzBdXSB8fCBNb2Rlcm5penJbYVswXV1pbnN0YW5jZW9mIEJvb2xlYW4gfHwgKE1vZGVybml6clthWzBdXSA9IG5ldyBCb29sZWFuKE1vZGVybml6clthWzBdXSkpLCBNb2Rlcm5penJbYVswXV1bYVsxXV0gPSByKSwgQy5wdXNoKChyID8gJycgOiAnbm8tJykgKyBhLmpvaW4oJy0nKSk7IH0gfSBmdW5jdGlvbiBvKGUpIHsgdmFyIHQgPSBTLmNsYXNzTmFtZSwgbiA9IE1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4IHx8ICcnOyBpZiAoeCAmJiAodCA9IHQuYmFzZVZhbCksIE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUpTQ2xhc3MpIHsgdmFyIGkgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgbiArICduby1qcyhcXFxcc3wkKScpO3QgPSB0LnJlcGxhY2UoaSwgJyQxJyArIG4gKyAnanMkMicpOyB9TW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3NlcyAmJiAodCArPSAnICcgKyBuICsgZS5qb2luKCcgJyArIG4pLCB4ID8gUy5jbGFzc05hbWUuYmFzZVZhbCA9IHQgOiBTLmNsYXNzTmFtZSA9IHQpOyB9IGZ1bmN0aW9uIHMoKSB7IHJldHVybiAnZnVuY3Rpb24nICE9PSB0eXBlb2YgdC5jcmVhdGVFbGVtZW50ID8gdC5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSkgOiB4ID8gdC5jcmVhdGVFbGVtZW50TlMuY2FsbCh0LCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBhcmd1bWVudHNbMF0pIDogdC5jcmVhdGVFbGVtZW50LmFwcGx5KHQsIGFyZ3VtZW50cyk7IH0gZnVuY3Rpb24gYSgpIHsgdmFyIGUgPSB0LmJvZHk7IHJldHVybiBlIHx8IChlID0gcyh4ID8gJ3N2ZycgOiAnYm9keScpLCBlLmZha2UgPSAhMCksIGU7IH0gZnVuY3Rpb24gbChlLCBuLCBpLCByKSB7IHZhciBvLCBsLCB1LCBkLCBmID0gJ21vZGVybml6cicsIGMgPSBzKCdkaXYnKSwgcCA9IGEoKTsgaWYgKHBhcnNlSW50KGksIDEwKSkgZm9yICg7aS0tOyl1ID0gcygnZGl2JyksIHUuaWQgPSByID8gcltpXSA6IGYgKyAoaSArIDEpLCBjLmFwcGVuZENoaWxkKHUpOyByZXR1cm4gbyA9IHMoJ3N0eWxlJyksIG8udHlwZSA9ICd0ZXh0L2NzcycsIG8uaWQgPSAncycgKyBmLCAocC5mYWtlID8gcCA6IGMpLmFwcGVuZENoaWxkKG8pLCBwLmFwcGVuZENoaWxkKGMpLCBvLnN0eWxlU2hlZXQgPyBvLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGUgOiBvLmFwcGVuZENoaWxkKHQuY3JlYXRlVGV4dE5vZGUoZSkpLCBjLmlkID0gZiwgcC5mYWtlICYmIChwLnN0eWxlLmJhY2tncm91bmQgPSAnJywgcC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nLCBkID0gUy5zdHlsZS5vdmVyZmxvdywgUy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nLCBTLmFwcGVuZENoaWxkKHApKSwgbCA9IG4oYywgZSksIHAuZmFrZSA/IChwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCksIFMuc3R5bGUub3ZlcmZsb3cgPSBkLCBTLm9mZnNldEhlaWdodCkgOiBjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyksICEhbDsgfSBmdW5jdGlvbiB1KGUsIHQpIHsgcmV0dXJuICEhfignJyArIGUpLmluZGV4T2YodCk7IH0gZnVuY3Rpb24gZChlKSB7IHJldHVybiBlLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oZSwgdCkgeyByZXR1cm4gJy0nICsgdC50b0xvd2VyQ2FzZSgpOyB9KS5yZXBsYWNlKC9ebXMtLywgJy1tcy0nKTsgfSBmdW5jdGlvbiBmKHQsIGkpIHsgdmFyIHIgPSB0Lmxlbmd0aDsgaWYgKCdDU1MnaW4gZSAmJiAnc3VwcG9ydHMnaW4gZS5DU1MpIHsgZm9yICg7ci0tOykgaWYgKGUuQ1NTLnN1cHBvcnRzKGQodFtyXSksIGkpKSByZXR1cm4gITA7IHJldHVybiAhMTsgfSBpZiAoJ0NTU1N1cHBvcnRzUnVsZSdpbiBlKSB7IGZvciAodmFyIG8gPSBbXTtyLS07KW8ucHVzaCgnKCcgKyBkKHRbcl0pICsgJzonICsgaSArICcpJyk7IHJldHVybiBvID0gby5qb2luKCcgb3IgJyksIGwoJ0BzdXBwb3J0cyAoJyArIG8gKyAnKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfScsIGZ1bmN0aW9uKGUpIHsgcmV0dXJuICdhYnNvbHV0ZScgPT09IGdldENvbXB1dGVkU3R5bGUoZSwgbnVsbCkucG9zaXRpb247IH0pOyB9IHJldHVybiBuOyB9IGZ1bmN0aW9uIGMoZSkgeyByZXR1cm4gZS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZywgZnVuY3Rpb24oZSwgdCwgbikgeyByZXR1cm4gdCArIG4udG9VcHBlckNhc2UoKTsgfSkucmVwbGFjZSgvXi0vLCAnJyk7IH0gZnVuY3Rpb24gcChlLCB0LCByLCBvKSB7IGZ1bmN0aW9uIGEoKSB7IGQgJiYgKGRlbGV0ZSBBLnN0eWxlLCBkZWxldGUgQS5tb2RFbGVtKTsgfSBpZiAobyA9IGkobywgJ3VuZGVmaW5lZCcpID8gITEgOiBvLCAhaShyLCAndW5kZWZpbmVkJykpIHsgdmFyIGwgPSBmKGUsIHIpOyBpZiAoIWkobCwgJ3VuZGVmaW5lZCcpKSByZXR1cm4gbDsgfSBmb3IgKHZhciBkLCBwLCBtLCB2LCBoLCB5ID0gWydtb2Rlcm5penInLCAndHNwYW4nXTshQS5zdHlsZTspZCA9ICEwLCBBLm1vZEVsZW0gPSBzKHkuc2hpZnQoKSksIEEuc3R5bGUgPSBBLm1vZEVsZW0uc3R5bGU7IGZvciAobSA9IGUubGVuZ3RoLCBwID0gMDttID4gcDtwKyspIGlmICh2ID0gZVtwXSwgaCA9IEEuc3R5bGVbdl0sIHUodiwgJy0nKSAmJiAodiA9IGModikpLCBBLnN0eWxlW3ZdICE9PSBuKSB7IGlmIChvIHx8IGkociwgJ3VuZGVmaW5lZCcpKSByZXR1cm4gYSgpLCAncGZ4JyA9PT0gdCA/IHYgOiAhMDsgdHJ5IHsgQS5zdHlsZVt2XSA9IHI7IH0gY2F0Y2ggKGcpIHt9IGlmIChBLnN0eWxlW3ZdICE9PSBoKSByZXR1cm4gYSgpLCAncGZ4JyA9PT0gdCA/IHYgOiAhMDsgfSByZXR1cm4gYSgpLCAhMTsgfSBmdW5jdGlvbiBtKGUsIHQpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gZS5hcHBseSh0LCBhcmd1bWVudHMpOyB9OyB9IGZ1bmN0aW9uIHYoZSwgdCwgbikgeyB2YXIgcjsgZm9yICh2YXIgbyBpbiBlKSBpZiAoZVtvXWluIHQpIHJldHVybiBuID09PSAhMSA/IGVbb10gOiAociA9IHRbZVtvXV0sIGkociwgJ2Z1bmN0aW9uJykgPyBtKHIsIG4gfHwgdCkgOiByKTsgcmV0dXJuICExOyB9IGZ1bmN0aW9uIGgoZSwgdCwgbiwgciwgbykgeyB2YXIgcyA9IGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlLnNsaWNlKDEpLCBhID0gKGUgKyAnICcgKyBOLmpvaW4ocyArICcgJykgKyBzKS5zcGxpdCgnICcpOyByZXR1cm4gaSh0LCAnc3RyaW5nJykgfHwgaSh0LCAndW5kZWZpbmVkJykgPyBwKGEsIHQsIHIsIG8pIDogKGEgPSAoZSArICcgJyArIGouam9pbihzICsgJyAnKSArIHMpLnNwbGl0KCcgJyksIHYoYSwgdCwgbikpOyB9IGZ1bmN0aW9uIHkoZSwgdCwgaSkgeyByZXR1cm4gaChlLCBuLCBuLCB0LCBpKTsgfSB2YXIgZyA9IFtdLCBiID0ge192ZXJzaW9uOiczLjAuMCcsIF9jb25maWc6e2NsYXNzUHJlZml4OicnLCBlbmFibGVDbGFzc2VzOiEwLCBlbmFibGVKU0NsYXNzOiEwLCB1c2VQcmVmaXhlczohMH0sIF9xOltdLCBvbjogZnVuY3Rpb24oZSwgdCkgeyB2YXIgbiA9IHRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpIHsgdChuW2VdKTsgfSwgMCk7IH0sIGFkZFRlc3Q6IGZ1bmN0aW9uKGUsIHQsIG4pIHsgZy5wdXNoKHtuYW1lOmUsIGZuOnQsIG9wdGlvbnM6bn0pOyB9LCBhZGRBc3luY1Rlc3Q6IGZ1bmN0aW9uKGUpIHsgZy5wdXNoKHtuYW1lOm51bGwsIGZuOmV9KTsgfX0sIE1vZGVybml6ciA9IGZ1bmN0aW9uKCkge307TW9kZXJuaXpyLnByb3RvdHlwZSA9IGIsIE1vZGVybml6ciA9IG5ldyBNb2Rlcm5penI7IHZhciBDID0gW10sIFMgPSB0LmRvY3VtZW50RWxlbWVudCwgeCA9ICdzdmcnID09PSBTLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIFQgPSBzKCdpbnB1dCcpLCB3ID0gJ3NlYXJjaCB0ZWwgdXJsIGVtYWlsIGRhdGV0aW1lIGRhdGUgbW9udGggd2VlayB0aW1lIGRhdGV0aW1lLWxvY2FsIG51bWJlciByYW5nZSBjb2xvcicuc3BsaXQoJyAnKSwgXyA9IHt9O01vZGVybml6ci5pbnB1dHR5cGVzID0gZnVuY3Rpb24oZSkgeyBmb3IgKHZhciBpLCByLCBvLCBzID0gZS5sZW5ndGgsIGEgPSAnOiknLCBsID0gMDtzID4gbDtsKyspVC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpID0gZVtsXSksIG8gPSAndGV4dCcgIT09IFQudHlwZSAmJiAnc3R5bGUnaW4gVCwgbyAmJiAoVC52YWx1ZSA9IGEsIFQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTt2aXNpYmlsaXR5OmhpZGRlbjsnLCAvXnJhbmdlJC8udGVzdChpKSAmJiBULnN0eWxlLldlYmtpdEFwcGVhcmFuY2UgIT09IG4gPyAoUy5hcHBlbmRDaGlsZChUKSwgciA9IHQuZGVmYXVsdFZpZXcsIG8gPSByLmdldENvbXB1dGVkU3R5bGUgJiYgJ3RleHRmaWVsZCcgIT09IHIuZ2V0Q29tcHV0ZWRTdHlsZShULCBudWxsKS5XZWJraXRBcHBlYXJhbmNlICYmIDAgIT09IFQub2Zmc2V0SGVpZ2h0LCBTLnJlbW92ZUNoaWxkKFQpKSA6IC9eKHNlYXJjaHx0ZWwpJC8udGVzdChpKSB8fCAobyA9IC9eKHVybHxlbWFpbHxudW1iZXIpJC8udGVzdChpKSA/IFQuY2hlY2tWYWxpZGl0eSAmJiBULmNoZWNrVmFsaWRpdHkoKSA9PT0gITEgOiBULnZhbHVlICE9PSBhKSksIF9bZVtsXV0gPSAhIW87IHJldHVybiBfOyB9KHcpLCBNb2Rlcm5penIuYWRkVGVzdCgncXVlcnlzZWxlY3RvcicsICdxdWVyeVNlbGVjdG9yJ2luIHQgJiYgJ3F1ZXJ5U2VsZWN0b3JBbGwnaW4gdCk7IHZhciB6ID0gYi5fY29uZmlnLnVzZVByZWZpeGVzID8gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJykgOiBbXTtiLl9wcmVmaXhlcyA9IHo7IHZhciBrID0gYi50ZXN0U3R5bGVzID0gbDtNb2Rlcm5penIuYWRkVGVzdCgndG91Y2hldmVudHMnLCBmdW5jdGlvbigpIHsgdmFyIG47IGlmICgnb250b3VjaHN0YXJ0J2luIGUgfHwgZS5Eb2N1bWVudFRvdWNoICYmIHQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKW4gPSAhMDtlbHNlIHsgdmFyIGkgPSBbJ0BtZWRpYSAoJywgei5qb2luKCd0b3VjaC1lbmFibGVkKSwoJyksICdoZWFydHonLCAnKScsICd7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX0nXS5qb2luKCcnKTtrKGksIGZ1bmN0aW9uKGUpIHsgbiA9IDkgPT09IGUub2Zmc2V0VG9wOyB9KTsgfSByZXR1cm4gbjsgfSk7IHZhciBFID0gJ01veiBPIG1zIFdlYmtpdCcsIE4gPSBiLl9jb25maWcudXNlUHJlZml4ZXMgPyBFLnNwbGl0KCcgJykgOiBbXTtiLl9jc3NvbVByZWZpeGVzID0gTjsgdmFyIFAgPSB7ZWxlbTpzKCdtb2Rlcm5penInKX07TW9kZXJuaXpyLl9xLnB1c2goZnVuY3Rpb24oKSB7IGRlbGV0ZSBQLmVsZW07IH0pOyB2YXIgQSA9IHtzdHlsZTpQLmVsZW0uc3R5bGV9O01vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCkgeyBkZWxldGUgQS5zdHlsZTsgfSk7IHZhciBqID0gYi5fY29uZmlnLnVzZVByZWZpeGVzID8gRS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykgOiBbXTtiLl9kb21QcmVmaXhlcyA9IGosIGIudGVzdEFsbFByb3BzID0gaCwgYi50ZXN0QWxsUHJvcHMgPSB5LCBNb2Rlcm5penIuYWRkVGVzdCgnY3NzYW5pbWF0aW9ucycsIHkoJ2FuaW1hdGlvbk5hbWUnLCAnYScsICEwKSksIE1vZGVybml6ci5hZGRUZXN0KCdiYWNrZ3JvdW5kc2l6ZScsIHkoJ2JhY2tncm91bmRTaXplJywgJzEwMCUnLCAhMCkpLCBNb2Rlcm5penIuYWRkVGVzdCgnYm9yZGVycmFkaXVzJywgeSgnYm9yZGVyUmFkaXVzJywgJzBweCcsICEwKSksIE1vZGVybml6ci5hZGRUZXN0KCdib3hzaGFkb3cnLCB5KCdib3hTaGFkb3cnLCAnMXB4IDFweCcsICEwKSksIE1vZGVybml6ci5hZGRUZXN0KCdjc3NyZW11bml0JywgZnVuY3Rpb24oKSB7IHZhciBlID0gcygnYScpLnN0eWxlOyB0cnkgeyBlLmZvbnRTaXplID0gJzNyZW0nOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gL3JlbS8udGVzdChlLmZvbnRTaXplKTsgfSksIE1vZGVybml6ci5hZGRUZXN0KCdjc3N0cmFuc2l0aW9ucycsIHkoJ3RyYW5zaXRpb24nLCAnYWxsJywgITApKSwgTW9kZXJuaXpyLmFkZFRlc3QoJ2Zvcm12YWxpZGF0aW9uJywgZnVuY3Rpb24oKSB7IHZhciB0ID0gcygnZm9ybScpOyBpZiAoISgnY2hlY2tWYWxpZGl0eSdpbiB0ICYmICdhZGRFdmVudExpc3RlbmVyJ2luIHQpKSByZXR1cm4gITE7IGlmICgncmVwb3J0VmFsaWRpdHknaW4gdCkgcmV0dXJuICEwOyB2YXIgbiwgaSA9ICExOyByZXR1cm4gTW9kZXJuaXpyLmZvcm12YWxpZGF0aW9uYXBpID0gITAsIHQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24odCkgeyBlLm9wZXJhIHx8IHQucHJldmVudERlZmF1bHQoKSwgdC5zdG9wUHJvcGFnYXRpb24oKTsgfSwgITEpLCB0LmlubmVySFRNTCA9ICc8aW5wdXQgbmFtZT1cIm1vZFRlc3RcIiByZXF1aXJlZD48YnV0dG9uPjwvYnV0dG9uPicsIGsoJyNtb2Rlcm5penIgZm9ybXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTk5ZW19JywgZnVuY3Rpb24oZSkgeyBlLmFwcGVuZENoaWxkKHQpLCBuID0gdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXSwgbi5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgZnVuY3Rpb24oZSkgeyBpID0gITAsIGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgITEpLCBNb2Rlcm5penIuZm9ybXZhbGlkYXRpb25tZXNzYWdlID0gISFuLnZhbGlkYXRpb25NZXNzYWdlLCB0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVswXS5jbGljaygpOyB9KSwgaTsgfSksIE1vZGVybml6ci5hZGRUZXN0KCdzZXNzaW9uc3RvcmFnZScsIGZ1bmN0aW9uKCkgeyB2YXIgZSA9ICdtb2Rlcm5penInOyB0cnkgeyByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShlLCBlKSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShlKSwgITA7IH0gY2F0Y2ggKHQpIHsgcmV0dXJuICExOyB9IH0pLCByKCksIG8oQyksIGRlbGV0ZSBiLmFkZFRlc3QsIGRlbGV0ZSBiLmFkZEFzeW5jVGVzdDsgZm9yICh2YXIgcSA9IDA7cSA8IE1vZGVybml6ci5fcS5sZW5ndGg7cSsrKU1vZGVybml6ci5fcVtxXSgpO2UuTW9kZXJuaXpyID0gTW9kZXJuaXpyOyB9KHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaGVhZC9tb2Rlcm5penIuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=