"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var curry = exports.curry = function curry(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return args.length === fn.length ? fn.apply(undefined, args) : curry.bind.apply(curry, [null, fn].concat(args));
};
var pipe = exports.pipe = function pipe(fn) {
    for (var _len2 = arguments.length, fns = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        fns[_key2 - 1] = arguments[_key2];
    }

    return function () {
        return fns.reduce(function (acc, f) {
            return f(acc);
        }, fn.apply(undefined, arguments));
    };
};

var K = exports.K = function K(x) {
    return function (_) {
        return x;
    };
};

var Id = exports.Id = function Id(x) {
    return x;
};