const express = require('express');
const http = require('http');
const url = require('url');
const path = require('path');
const browserify = require('browserify-dev-middleware');
const WebSocketServer = require('ws').Server;

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });

app.use(browserify({
	src: __dirname + '/static',
  transforms: [require('babelify')]
}));

app.use(express.static(path.join(__dirname, '/static')));



wss.on('connection', function connection(ws) {
	console.log('connection');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});