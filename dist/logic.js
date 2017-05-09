"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var combineAnd = exports.combineAnd = function combineAnd(bools) {
  return bools.reduce(function (identity, bool) {
    return identity && bool;
  }, true);
};

var combineOr = exports.combineOr = function combineOr(bools) {
  return bools.reduce(function (identity, bool) {
    return identity || bool;
  }, false);
};

var combinePreds = exports.combinePreds = function combinePreds() {
  for (var _len = arguments.length, predicates = Array(_len), _key = 0; _key < _len; _key++) {
    predicates[_key] = arguments[_key];
  }

  return function (x) {
    return predicates.reduce(function (identity, predicate) {
      return identity && predicate(x);
    }, true);
  };
};