const http = require('http'); // module access
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const banki = {
    questions: [
      {
        question:
          "Give me an example of the project or initiative that you started on your own. It can be a non-business one. What prompted you to get started?'",
        type: "behavioral"
      },
      {
        question:
          "Tell me about a time you had to work on several projects at once. How did you handle this?",
        type: "behavioral"
      },
      {
        question:
          "Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?",
        type: "behavioral"
      },
      {
        question:
          "Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?",
        type: "behavioral"
      },
      {
        question:
          "Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?",
        type: "behavioral"
      },
      {
        question:
          "Describe a situation in which you worked diligently on a project and it did not produce the desired results. Why didn't you get the desired results? What did you learn from the experience?",
        type: "behavioral"
      },
      {
        question:
          "Give an example of an important project goal you reached and how you achieved it.",
        type: "behavioral"
      },
      {
        question:
          "Describe a situation in which you experienced difficulty in getting others to accept your ideas? What was your approach? How did this work? Were you able to successfully persuade someone to see things your way",
        type: "behavioral"
      },
      { question: "test1", type: "behavioral" },
    ]
  };



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
        const random = Math.floor(Math.random() * banki.questions.length);
        console.log(banki.questions[random]);
        flipResult = banki.questions[random].question
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