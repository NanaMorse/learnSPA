/**
 * Created by nana on 2016/1/15.
 */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// 设置静态文件目录
app.use(express.static(__dirname + '/public'));

// 引入body-parser中间件
//todo 详细注释json与urlencoded方法以及其参数的作用
app.use(bodyParser.json({"limit" : "50mb"}));
app.use(bodyParser.urlencoded({"extended" : true, "limit" : "50mb"}));

app.get('/', function(req, res){
    res.redirect('index.html');
});

app.post('/function', require('./functions/funcRouter'));

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
