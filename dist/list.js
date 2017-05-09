'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepFlatten = exports.flatten = exports.map = exports.partition = undefined;

var _function = require('./function');

var partition = exports.partition = (0, _function.curry)(function (predicate, arr) {
  return [arr.filter(predicate), arr.filter(function (x) {
    return !predicate(x);
  })];
});

var map = exports.map = (0, _function.curry)(function (fn, collection) {
  return collection.map(fn);
});

var flatten = exports.flatten = function flatten(arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(val);
  }, []);
};

var deepFlatten = exports.deepFlatten = function deepFlatten(arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(!Array.isArray(val) ? val : deepFlatten(val));
  }, []);
};