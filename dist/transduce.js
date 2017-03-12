"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// See how we redefine map?  It takes a transformation function and
//returns a reducing function to pass to the reducer.
var transMap = exports.transMap = function transMap(trans) {
  return function (result, input) {
    result.push(trans(input));
    return result;
  };
};

// Filter receives a predicate function, and returns a reducing function.
var transFilter = exports.transFilter = function transFilter(pred) {
  return function (result, input) {
    if (pred(input)) {
      result.push(input);
    }
    return result;
  };
};