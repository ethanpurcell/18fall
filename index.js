var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('chat message', function(msg){
  	console.log("solve command received");
    io.emit('solve', 'blue');
  });
});

  socket.on('chat message', function(msg){
  	if(msg.includes("poop")) msg="you said a baddy";
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
