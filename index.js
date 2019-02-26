var express = require("express");
// socket setup
var socket = require("socket.io");

// app setup
var app = express();
var server = app.listen(4000, function(){
    console.log("mooi begin");
});

// Static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    //handle chat events
    socket.on('chat',function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing', data)
    });

});


