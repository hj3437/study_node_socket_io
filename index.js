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
    socket.emit('message', { msg: socket.id });

    socket.on('join', (roomId, fn) => {
        if (fn) {
            fn();
        }

        console.log(socket.rooms); // Set { <socket.id> }
        socket.join(roomId);
        console.log(socket.rooms); // Set { <socket.id>, "room1" }
    });

    socket.on('leave', function (roomId, fn) {
        console.log('[server] Leave...');
        socket.leave(roomId, () => {
            if (fn)
                fn();
        });
    });

    socket.on('message', (data, fn) => {
        // Message Data { roomId: 'square', msg: 'Message' }
        // console.log('[server] Message Data', data);
        // [server] Message Fn [Function (anonymous)]
        // console.log('[server] Message Fn', fn);
        socket.broadcast.to('square').emit('message', { roodId: data.roomId, msg: data.msg });

        if (fn) {
            fn(data.msg);
        }
    });
});