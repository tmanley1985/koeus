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

// AND is a monoid that has true as an identity element.
var combinePreds = exports.combinePreds = function combinePreds() {
  for (var _len2 = arguments.length, predicates = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    predicates[_key2] = arguments[_key2];
  }

  return function (x) {
    return predicates.reduce(function (identity, predicate) {
      return identity && predicate(x);
    }, true);
  };
};