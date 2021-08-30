const express = require("express");
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

app.get("/", (req, res) => {
  res.send(200);
});

app.get("/socket.io/", (req, res) => {
  res.send(200);
});

io.on('connection', (socket) => {
    socket.on("login", user => {
      io.emit("message", {
        user: "Server",
        content: `${user} join the chat!`
      });
    });

    socket.on('message', msg => {
      io.emit('message', msg);
    });
});

http.listen(3000, () => console.log('listening on http://localhost:3000') );