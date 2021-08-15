const express = require('express')

const app = express()
app.use(express.static('public'));

const server = app.listen(3000, () => {
    console.log('Start Express on 3000 port');
})

const io = require('socket.io')(server, {
    log: false,
    origins: '*:*',
    pingInterval: 3000,
    pingTimeout: 5000
});

io.sockets.on('connection', (socket) => {
    // First Message
    socket.emit('message', { msg: 'Welcome ' + socket.id });

    socket.on('rooms', function (fn) {
        if (fn) {
            // empty = []
            // Object.keys(socket.rooms);

            // rooms: Map<Room, Set<SocketId>>
            socket.rooms.forEach(element => {
                console.log(element);
                fn(element);
            });
        }
    });

    socket.on('join', (roomName, fn) => {
        console.log('SERVER JOIN', roomName);
    });

    socket.on('message', (data, fn) => {
        socket.broadcast.to(data.room).emit('message', { room: data.room, msg: data.msg });

        if (fn)
            fn(data.msg);
    });

    socket.on('direct-message', (socketId, msg) => {
        console.log('direct-message FN CALLED', Date());
        console.log('id: ', socketId);
        console.log('msg: ', msg);

        socket.to(socketId).emit('message', { id: socketId, msg: msg });
    });
});