"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var entries = exports.entries = function entries(obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};