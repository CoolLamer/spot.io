function socket(http){
    var io = require('socket.io')(http);
    require('./onlineUsers.js')(io);

    io.on('connection', function(socket){
        socket.on('click', function(data){
            console.log('send message');
            io.emit('message', data);
        })
    });
    return io;
}

module.exports = socket;
