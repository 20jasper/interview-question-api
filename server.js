const http = require('http'); // module access
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {

  const readWrite = (file, contentType) => {
    fs.readFile(file, function (err, data) {
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch (true) {
    case page == '/':
      readWrite('index.html', 'text/html');
      break;
    case page == '/otherpage':
      readWrite('otherpage.html', 'text/html');
      break;
    case page == '/otherotherpage':
      readWrite('otherotherpage.html', 'text/html');
      break;
    case page == '/api':
      let flipResult = "type 'flip' in the input box"
      if (params['student'] == 'flip') {
        flipResult = Math.random() <= .5 ? 'heads' : 'tails'
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        name: flipResult,
      }
      res.end(JSON.stringify(objToJson));
      break;
    case page == '/css/style.css':
      fs.readFile('css/style.css', function (err, data) {
        res.write(data);
        res.end();
      });
      break;
    case page == '/js/main.js':
      readWrite('js/main.js', 'text/javascript');
      break;
    default:
      figlet('404!!', function (err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
      break;
  }
});

server.listen(8000);