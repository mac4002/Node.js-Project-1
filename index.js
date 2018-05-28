const module1 = require('./module1');
let http = require('http');

let server = http.createServer((request, response) => {
    console.log('Requète vers le serveur');
    response. write('<h1>Hello !</h1>');
    response. write('<h2>Fine ?</h2>');
    response. end();
    });
    server.listen(3000);
    console.log('Le serveur http est en écoute sur le port 3000');
