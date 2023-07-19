var http = require('http');

//listen serve pra informar qual porta de rede eu quero abrir o servidor, pode ser 80, 90, 99.

// botar 8081 como padrão é uma boa ideia.

http.createServer(function(req,res){

res.end("Ola, você entrou no servidor.");

}).listen(8081);

console.log("O servidor rodando");