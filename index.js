//servidor de Express
const express = require('express');
const app =express();

//servidor de Sockets
const server = require('http').createServer(app);

//configuración del socket serer
const io = require('socket.io')(server);

//Desplegar el directorio publico
app.use(express.static(__dirname+'/public'))

//Para poder mandar a todos los clientes sería con io.  en vez de client

io.on('connection', client => {
  // client.emit('mensaje-bienvenida',{
  //   msg:'Bienvenido al server',
  //   fecha: new Date()
  // })
  client.on('mensaje-to-server', data=>{
    console.log(data);
    client.emit('mensaje-from-server',data);
  })
 
});
server.listen(8080, ()=>{
    console.log('Server corriendo en puerto:8080');
});