function socket(http){
    console.log('creating socket');
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('a user connected ' + socket.id);
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        socket.on('click', function(data){
            console.log('send message');
            io.emit('message', data);
        })
    });
    return io;
}

module.exports = socket;
