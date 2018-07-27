var GdoorToggle = false;


/* var connection = new WebSocket('ws://'+location.hostname+':81/', ['arduino']);
connection.onopen = function () {
    connection.send('Connect ' + new Date());
};
connection.onerror = function (error) {
    console.log('WebSocket Error ', error);
};
connection.onmessage = function (e) {
    console.log('Server: ', e.data);
};
connection.onclose = function(){
    console.log('WebSocket connection closed');
}; */


/*

var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});

ws.on('connection', function(w){

  w.on('message', function(msg){
    console.log('message from client');
  });

  w.on('close', function() {
    console.log('closing connection');
  });

});

 */


function GdoorActivate(){
		GdoorToggle = ! GdoorToggle;

		if(GdoorToggle){
        connection.send("G");
		//setTimeout(myFunction, 300);

		} else {
        connection.send("G2");
		//setTimeout(myFunction, 300);
		}

}


function myFunction() {
    document.getElementById('Gdoor').style.backgroundColor = '#00878F';
}





function lightL(sw) {
    var pic;
    if (sw === 0) {
        pic = "./images/lamp_off_.gif"
    } else {
        pic = "./images/lamp_on_.gif"
    }
		console.log(`the light switched to: ${sw}`);
    document.getElementById('myImagelightL').src = pic;
}

function lightR(sw) {
    var pic;
    if (sw == 0) {
        pic = "./images/lamp_off_.gif"
    } else {
        pic = "./images/lamp_on_.gif"
    }
    document.getElementById('myImagelightR').src = pic;
}


function TVdwnstrs(canbeanything) {
    var pic;
    if (canbeanything == 1) {
        pic = "./images/tv_r_.gif"
    }
	else if (canbeanything == 2) {
        pic = "./images/tv_b_.gif"
    }
	else if (canbeanything == 3) {
        pic = "./images/tv_c_.gif"
    }
	else if (canbeanything == 4) {
        pic = "./images/tv_g_.gif"
    }
	else if (canbeanything == 5) {
        pic = "./images/tv_y_.gif"
    }
	else {
        pic = "./images/tv_dark_.gif"
    }
    document.getElementById('myImageTVdwnStrs').src = pic;
}


function Garage(G1) {
    var pic;
    if (G1 == 0) {
		//GdoorActivate();
        pic = "./images/garage_closed_.gif"
    } else {
		//GdoorActivate();
        pic = "./images/garage_opened_.gif"
    }
    document.getElementById('myImageGarage').src = pic;
}
