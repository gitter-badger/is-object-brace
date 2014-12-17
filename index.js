'use strict';
var fn;

fn = function() {
  var rslt;
  return rslt = Object.prototype.toString.call(arguments[0]) === '[object Object]' ? true : false;
};

module.exports = fn;
