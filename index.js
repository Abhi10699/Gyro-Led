var express = require('express');
var app = express()
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var onoff = require('onoff');
var GPIO = onoff.Gpio;
var led = new GPIO(23,'out')
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})
io.on('connection',function(socket){
	

	socket.on('deviceCoordinates',function(data){
		console.log("X:",data)
		if(data > 0){
			led.write(1,function(){
			console.log('On')
		  })
		}
		else{
			led.write(0,function(){
			console.log('Off')
		   })
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
