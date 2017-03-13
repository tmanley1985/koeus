'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combinePreds = exports.pipe = exports.transFilter = exports.transMap = undefined;

var _transduce = require('./transduce');

var _compose = require('./compose');

exports.transMap = _transduce.transMap;
exports.transFilter = _transduce.transFilter;
exports.pipe = _compose.pipe;
exports.combinePreds = _compose.combinePreds;