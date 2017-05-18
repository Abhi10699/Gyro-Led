var express = require('express');
var app = express()
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
<<<<<<< HEAD
var cmd = require('node-cmd');
=======
var wpi = require('wiring-pi');

var configPin = 18;
var configTimeout = 1000;

wpi.setup('wpi');

wpi.pinMode(configPin,wpi.OUTPUT)
>>>>>>> e164cc718a5c2022312496fecf4f794d1f4b5472

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})

io.on('connection',function(socket){
	

	socket.on('deviceCoordinates',function(data){
		console.log("X:",data.X)
<<<<<<< HEAD
		if(data.X > 0){
			cmd.get('sudo python ledOn.py',
              function(data, err, stderr) {
                if (!err) {
		                    
                } else {
                 
                  }
                }
              );			
		}
		else{
		cmd.get('sudo python ledOff.py',
              		function(data, err, stderr) {
                	if (!err) {
                 	
                } else {
                  
                  }
                }
              );	
=======

		if(data.x > 5){
			wpi.digitalWrite(configPin,1)
		}
		else{
			wpi.digitalWrite(configPin,0)
>>>>>>> e164cc718a5c2022312496fecf4f794d1f4b5472
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
