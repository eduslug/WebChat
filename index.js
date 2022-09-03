const express = require('express');
const path = require('path');
const app = express();
const socketIo = require('socket.io');



app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log('Running')
})

const menssages = [];

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('new conection');

    socket.on('new_menssage', (data) => {
        menssages.push(data.msg)
        io.emit('update_messages', menssages)
        
    })

})