'use strict';
// const url = require('url');
// const querystring = require('querystring');


// const targetUrl = "http://localhost:8888/start?foo=bar&hello=world";



// console.log(url.parse(targetUrl));


const http = require("http");
const url = require("url");

function start(route) {
  // function onRequest(request, response) {
  //   var pathname = url.parse(request.url).pathname;
  //   console.log("Request for " + pathname + " received.");
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write("Hello World");
  //   response.end();
  // }

  http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(1132);
  console.log("Server has started.");
}

exports.start = start;
// module.exports = start;