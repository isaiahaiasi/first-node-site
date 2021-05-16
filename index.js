const http = require('http');
const fs = require('fs');

const loadFile = (res, filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data);
    res.end();
  })
}

const loadScript = (res, filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}

const loadHome = (res) => loadFile(res, './index.html');

const loadAbout = (res) => loadFile(res, './about.html');

const loadContactMe = (res) => loadFile(res, './contact-me.html');

const load404 = (res) => loadFile(res, './404.html');

http.createServer((req, res) => {
  // TODO: instead of matching entire string, could use regex
  // to load any given *.js, *.html, etc correctly
  switch(req.url) {
    case '/':
      loadHome(res);
      break;
    case '/about':
      loadAbout(res);
      break;
    case '/contact-me':
      loadContactMe(res);
      break;
    case '/load-header.js':
      loadScript(res, 'load-header.js');
      break;
    default:
      load404(res);
      break;
  }
}).listen(8080);