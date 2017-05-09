'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.transFilter = exports.transMap = exports.entries = exports.deepFlatten = exports.flatten = exports.partition = exports.map = exports.combineOr = exports.combineAnd = exports.combinePreds = exports.Id = exports.K = exports.pipe = exports.curry = undefined;

var _function = require('./function');

var _logic = require('./logic');

var _object = require('./object');

var _list = require('./list');

var _transduce = require('./transduce');

exports.curry = _function.curry;
exports.pipe = _function.pipe;
exports.K = _function.K;
exports.Id = _function.Id;
exports.combinePreds = _logic.combinePreds;
exports.combineAnd = _logic.combineAnd;
exports.combineOr = _logic.combineOr;
exports.map = _list.map;
exports.partition = _list.partition;
exports.flatten = _list.flatten;
exports.deepFlatten = _list.deepFlatten;
exports.entries = _object.entries;
exports.transMap = _transduce.transMap;
exports.transFilter = _transduce.transFilter;