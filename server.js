import http from "http";
import fs from "fs";
import url from "url";
// import querystring from 'querystring'
import figlet from "figlet";
import { banki } from "./js/banki.js";

const PORT = process.env.PORT || 8000
const server = http.createServer((req, res) => {
	const readWrite = (file, contentType) => {
		fs.readFile(file, function (err, data) {
			res.writeHead(200, { "Content-Type": contentType });
			res.write(data);
			res.end();
		});
	};

	const page = url.parse(req.url).pathname;
	// const params = querystring.parse(url.parse(req.url).query);
	switch (true) {
		case page == "/":
			readWrite("index.html", "text/html");
			break;
		case page == "/api":
			const random = Math.floor(Math.random() * banki.questions.length);
			res.end(JSON.stringify(banki.questions[random]));
			break;
		case page == "/css/style.css":
			fs.readFile("css/style.css", function (err, data) {
				res.write(data);
				res.end();
			});
			break;
		case page == "/css/normalize.css":
			fs.readFile("css/normalize.css", function (err, data) {
				res.write(data);
				res.end();
			});
			break;
		case page == "/js/main.js":
			readWrite("js/main.js", "text/javascript");
			break;
		default:
			figlet("404!!", function (err, data) {
				if (err) {
					console.log("Something went wrong...");
					console.dir(err);
					return;
				}
				res.write(data);
				res.end();
			});
			break;
	}
});

server.listen(PORT);
