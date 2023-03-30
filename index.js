//O require existe no CommonJS. É uma maneira do Node.js importar e exportar módulos dentro de uma aplicação
const express = require('express');//está procurando dentro da pasta node_modules o módulo express
//referência do express pela documentação : https://expressjs.com/pt-br/starter/hello-world.html 
const app = express();//associa o express(que foi pego dentro de node_modules) à variável app
const http = require('http');//pega de node_modules o módulo http 
const server = http.createServer(app);//cria um servidor http com o express(parametro desse método)
const port = 3000;

app.get('/',(req,res)=>{//é definido um manipulador de rotas(método que é executado quando a rota / é chamada)
    //Ao ser feito um request para o servidor express, é enviado um response com essa mensagem(response) com a mensagem abaixo
    res.send('<h1>Faaaaaaaaala</h1>');
});

server.listen(port,()=>{//outra função que faz com que o servidor escute na porta 3000
    //OBS: O servidor, reiterando, é o servidor http com express.
    console.log('listening on *:3000');
})