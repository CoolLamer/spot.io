function socket(http){
    var io = require('socket.io')(http);
    require('./onlineUsers.js')(io);
    var messages = [];

    io.on('connection', function(socket){
        messages.forEach(function(data){
           socket.emit('message', data);
        });

        socket.on('click', function(data){
            console.log('send message');
            io.emit('message', data);
            messages.push(data);
        })
    });
    return io;
}

module.exports = socket;
