'use strict';

var util = require('util'); 


console.log(util.isArray([]));
  // true
console.log(util.isArray(new Array));
  // true
console.log(util.isArray({}));
  // false



util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})
// false


util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false