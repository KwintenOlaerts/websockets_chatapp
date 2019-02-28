var express = require("express");
// socket setup
var socket = require("socket.io");

// Make an array to store the usernames, so that I can put them in an UL
// let userNames =[];

// socket.username = "Bert"
// console.log(username.io);



// app setup
var app = express();
var server = app.listen(4000, function(){
    console.log("mooi begin");
});





// socket.username = "Anon"
// //listen on change_username
// socket.on('change_username', (data) => {
//     socket.username = data.username;
//     userNames[socket.username] = socket;
//     io.sockets.emit('usernames', Object.keys(userNames));
// })

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

// Heroku setup


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server draait");
});





// document.getElementById("NameList").innerHTML = "Paragraph changed!";


// userNames[socket.username] = socket;
// io.sockets.emit('username'],Object.Keys(usernames));= 

// Join room and send messages

// socket.on('joinRoom', (room)=>{
//     socket.join(room)
//     console.log("test room") + room;
//     socket on('new message,(data)=>
//     io.to(room).emit('nieuwe boodschap',{
//         message: data.message
//         username: socket.username
//     }))
// })


