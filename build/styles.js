"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialSvgMask = exports.socialSvgContent = exports.socialSvg = exports.socialIcon = exports.socialContainer = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var socialIcon = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  position: 'relative',
  overflow: 'hidden',
  verticalAlign: 'middle'
};
exports.socialIcon = socialIcon;
var socialContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
};
exports.socialContainer = socialContainer;
var socialSvg = {
  borderRadius: '50%',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  fillRule: 'evenodd'
};
exports.socialSvg = socialSvg;
var socialSvgContent = {
  msTransition: 'fill 170ms ease-in-out',
  OTransition: 'fill 170ms ease-in-out',
  MozTransition: 'fill 170ms ease-in-out',
  WebkitTransition: 'fill 170ms ease-in-out',
  transition: 'fill 170ms ease-in-out',
  fill: 'transparent'
};
exports.socialSvgContent = socialSvgContent;
var socialSvgMask = _objectSpread(_objectSpread({}, socialSvgContent), {}, {
  fill: '#0f0b0b'
});
exports.socialSvgMask = socialSvgMask;