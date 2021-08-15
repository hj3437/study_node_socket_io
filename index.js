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

    socket.emit('uk-id', {ukid: socket.id});


    socket.join('square');
    console.log(socket.rooms);

    socket.on('me', (data) => {
        console.log('[server] - recevie:', data);
        socket.broadcast.emit('message', data);
    });
});