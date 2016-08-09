function onlineUsers(io){
    var usersOnline = 0;
    io.on('connection', function(socket){
        usersOnline++;
        io.emit('online',  usersOnline);
        console.log('users online: ' + usersOnline);
        socket.on('disconnect', function(){
            usersOnline--;
            io.emit('online',  usersOnline);
            console.log('users online: ' + usersOnline);
        });
    });
}

module.exports = onlineUsers;