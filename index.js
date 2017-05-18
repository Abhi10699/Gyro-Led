var express = require('express');
var app = express()
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})

io.on('connection',function(socket){
	

	socket.on('deviceCoordinates',function(data){
		console.log("X:",data.X)
	})

	socket.on('disconnect',function(){
		console.log("User has disconnected")
	})
})

app.use(express.static(path.join(__dirname+'/')))
http.listen(3000,function(){
	console.log("Server has started")
})