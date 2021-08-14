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

io.sockets.on('connection', (socket, opt) => {
    // First Message
    socket.emit('message', { msg: 'Welcome ' + socket.id });

    socket.on('rooms', function (fn) {
        if (fn)
            fn(Object.keys(socket.rooms));
    });
});