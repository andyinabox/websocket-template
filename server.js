const express = require('express');
const http = require('http');
const url = require('url');
const path = require('path');
const WebSocketServer = require('ws').Server;

const app = express();

// app.use(function (req, res) {
//   res.send({ msg: "hello" });
// });

app.use(express.static(path.join(__dirname, '/public')));


const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection(ws) {
	console.log('connection');

  // const location = url.parse(ws.upgradeReq.upgradeReql, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.on('request', app);
server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});