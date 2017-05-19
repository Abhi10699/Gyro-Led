var express = require('express');
var app = express()
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var gpio = require('rpi-gpio');
// Setup GPIO


gpio.setup(23,gpio.DIR_OUT,off);

function Ledon(){
	gpio.write(23,true,function(err){
		if(err){
			throw err;
		}
		console.log("Written to pin")
	})
}

function Ledoff(){
	gpio.write(23,false,function(err){
		if(err){
			throw err;
		}
		console.log("Written to pin")
	})
}

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})
io.on('connection',function(socket){
	

	socket.on('deviceCoordinates',function(data){
		console.log("X:",data)
		if(data > 0){
			Ledon()
		}
		else{
			Ledoff()
		}
		
})
	socket.on('disconnect',function(){
		console.log("User has disconnected")
	})
})

app.use(express.static(path.join(__dirname+'/')))
http.listen(3000,function(){
	console.log("Server has started")
})
