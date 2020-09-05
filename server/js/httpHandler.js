const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const http = require('http');
const keyPress = require('./keypressHandler.js')
const queue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};


module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  // let index = Math.floor(Math.random() * 4);
  // res.end(['left', 'right', 'up', 'down'][index]);
  var direction = queue.dequeue()
  console.log(direction)
  res.end(direction);
  next(); // invoke next() at the end of a request to help with testing!
};


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });





// const server = http.createServer((request, response) => {
//   const { method, url } = request;

//   response.write('<html><body>Test</body></html>');


// }).listen(8080);