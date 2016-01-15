/**
 * Created by nana on 2016/1/15.
 */
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// 设置静态文件目录
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chatMsg', function(msg){
        console.log('message: ' + msg);
        io.emit("chatMsg", msg);
    });


});

http.listen(8888, function(err){
    console.log('listening on *:8888');
});
