const express = require('express');
const http = require('http');
const url = require('url');
const path = require('path');
const WebSocketServer = require('ws').Server;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
	console.log('connection');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.on('request', app);
server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});