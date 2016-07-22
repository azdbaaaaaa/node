'use strict';
const fs = require('fs');
// var data = fs.readFileSync('index.js');

var f = function(err, data){
	if (err) return console.error(err);
	  console.log(data.toString());
}

fs.readFile('index1.js',f)


// console.log(data.toString())
console.log("read file finish")