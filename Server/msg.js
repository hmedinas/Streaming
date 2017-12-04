var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server)
server.listen(8081, function() {
    console.log('servidor corriendo...')
});

io.on('connection', function(socket) {
    console.log('cliente conectados:' + io.engine.clientsCount);
    socket.on('newMessage', function(msg) {
        console.log("New message:" + msg);
        socket.emit('newMessage', msg);
    });
});