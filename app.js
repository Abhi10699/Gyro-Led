var socket = io();
function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.

    document.getElementById('X').innerText = x;
    document.getElementById('Y').innerText = y;
    document.getElementById('Z').innerText = z;

    var coOrdinates = {
    	"X":x,
    	"Y":y,
    	"Z":z
    }

    socket.emit('deviceCoordinates',coOrdinates)
}

window.addEventListener("devicemotion", handleMotionEvent, true);