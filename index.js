const http = require('http');
const fs = require('fs');
const url = require('url');

const loadHome = (req, res) => {

}

const loadAbout = (req, res) => {
  
}

const loadContactMe = (req, res) => {
  
}

const load404 = (req, res) => {

}

http.createServer((req, res) => {
  switch(req.url) {
    case '/':
      loadHome(req, res);
      break;
    case '/about':
      loadAbout(req, res);
      break;
    case 'contact-me':
      loadContactMe(req, res);
      break;
    default:
      load404(req, res);
      break;
  }
}).listen(8080);