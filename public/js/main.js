const socket = io();

const ioTxt = document.querySelector('#io-txt');
ioTxt.value = parseInt(Math.random() * 100);

const ioId = document.querySelector('.io-id')

socket.on('uk-id', (idData) => {
    console.log('[client] - id:', idData.ukid);
    ioId.innerHTML = idData.ukid;
});

socket.on('message', (msg) => {
    let msgStr = `[${msg.id}]: ${msg.txt}\n\n\n${msg.time}`

    const list = document.querySelector('#chat_list');

    let li = document.createElement('li');
    li.innerHTML = msgStr;
    list.appendChild(li);

 
    console.log('[client] - recevie:', msg);
});

function send() {
    ioTxt.value = parseInt(Math.random() * 100);
    socket.emit('me', { txt: ioTxt.value, id: ioId.innerHTML, time: new Date().toDateString() });
}