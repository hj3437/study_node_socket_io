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
    // init id 
    socket.emit('display-id', { id: socket.id });

    // init room
    // console.log('rooms : ', socket.rooms); // Set { <socket.id> }
    // socket.join("square");
    // console.log('rooms : ', socket.rooms)

    // socket.on('message', (data, fn) => {
    //     socket.to(data.roomId).emit('message', {room: data.roomId, msg:data.msg});
    //     if(fn) fn();
    // });

    socket.on('join', (roomId, fn) => {
        console.log('join');
        console.log('rooms : ', socket.rooms); // Set { <socket.id> }
        socket.join("square");
        console.log('rooms : ', socket.rooms)

        if (fn) {
            fn();
        }
    });

    socket.on('message', (data, fn) => {
        socket.emit('message', {msg:data.msg});
        fn();
    });
});