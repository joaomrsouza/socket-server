const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
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