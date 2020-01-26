var socket = require('socket.io'), 
  http = require('http'),
  server = http.createServer(), 
  socket = socket.listen(server);
  
  socket.on('connection', function(connection) {
     console.log('Connected');
     
     connection.on('message', function(msg){
      console.log("server msg>>>"+msg);
       socket.emit('message', msg);
     });
  });


  server.listen(5000, function(){
    console.log('Server started');
  });