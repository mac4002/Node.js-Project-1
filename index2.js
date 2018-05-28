const calculatrice = require('calculatrice');
let http = require('http');

let server = http.createServer((request, response) => {
    console.log('Requète vers le serveur');
    response. write('<h1>Hello 3 !</h1>');
    response. write('<h2>Fine ?</h2>');

    const resultat = calculatrice.nana(12,23,42,23,42,23,42,33);
    console.log('Resultat : ' + resultat);
    response. write('<h2> Resultat : ' + resultat + '</h2>');
    response. write(`<h2> Resultat : ${resultat}</h2>`);
    
    response. end();
    });
    server.listen(3000);
    console.log('Le serveur http est en écoute sur le port 3000');
