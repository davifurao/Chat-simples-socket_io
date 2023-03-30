//O require existe no CommonJS. É uma maneira do Node.js importar e exportar módulos dentro de uma aplicação
const express = require('express');//está procurando dentro da pasta node_modules o módulo express
//referência do express pela documentação : https://expressjs.com/pt-br/starter/hello-world.html 
const app = express();//associa o express(que foi pego dentro de node_modules) à variável app
const http = require('http');//pega de node_modules o módulo http 
const server = http.createServer(app);//cria um servidor http com o express(parametro desse método)
const port = 3000;
const {Server} = require("socket.io");//é a mesma coisa de import { Server } from "socket.io";
const io = new Server(server);//cria um objeto io, passando server como atributo


app.get('/',(req,res)=>{//é definido um manipulador de rotas(método que é executado quando a rota / é chamada)
    //Ao ser feito um request para o servidor express, é enviado o arquivo index.html
    res.sendFile(__dirname+'/index.html');
});

server.listen(port,()=>{//outra função que faz com que o servidor escute na porta 3000
    //OBS: O servidor, reiterando, é o servidor http com express.
    console.log('listening on *:3000');
})


io.on('connection',(socket)=>{//variável que irá ser chamada no index.html
    socket.on('chat mesage',(msg)=>{
        io.emit('chat message',msg);
    });//Agora a mensagem enviada pelo cliente(pelo index.html) vai ser impressa no terminal
});

//io.emit('some event',{someProperty: 'some value', otherProperty:'other value'});//método para envio da mensagem para todos
