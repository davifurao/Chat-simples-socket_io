#!bin/bash


#Verifica a instalação do socket io e express
if [ -d "./node_modules/express" ]
then
    echo "O express já está instalado"
else
    npm install express
fi

if [ -d "./node_modules/socket.io" ]
then
    echo "O socket.io já está instalado"
else
    npm install socket.io
fi

#Executando o projeto
node index.js

#Agora abra no navegador o seguinte link: http://localhost:3000/ 

