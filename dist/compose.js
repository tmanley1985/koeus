"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Pipe is a monoid that starts with the first function that is passed in to the reduce function
var pipe = exports.pipe = function pipe(fn) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return function () {
    return fns.reduce(function (acc, f) {
      return f(acc);
    }, fn.apply(undefined, arguments));
  };
};