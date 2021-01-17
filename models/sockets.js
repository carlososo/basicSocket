class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();

    }

    socketEvents(){
        this.io.on('connection', client => {
           
            client.on('mensaje-to-server', data=>{
              console.log(data);
              client.emit('mensaje-from-server',data);
                //se utiliza this.io.emit para enviar mensajes a todos los clientes y no solo al cliente en particular

            });
           
          });
    }

}

module.exports = Sockets;