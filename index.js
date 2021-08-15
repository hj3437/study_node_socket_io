const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('/chat.html');
});

const server = app.listen(PORT, () => {
    console.log(`Start Express on ${PORT} port`);
})

const io = require('socket.io')(server, {
    log: false,
    origins: '*:*',
    pingInterval: 3000,
    pingTimeout: 5000
});

io.sockets.on('connection', (socket) => {
    console.log('[server] - connection');

    socket.emit('uk-id', { ukid: socket.id });

    socket.on('me', (data) => {
        // console.log('[server] - recevie:', data);

        if (data.room === "all") {
            socket.broadcast.emit('message', data);
        } else {
            socket.to(data.room).emit('message', data);
        }
    });

    socket.on('join', (roomId) => {
        socket.join(roomId);
        console.log(socket.rooms);

        socket.emit('join', roomId);
    });
});