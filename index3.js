const calculatrice = require('calcul2');
let http = require('http');

let server = http.createServer((request, response) => {
    console.log('Requète vers le serveur');
    response. write('<h1>Index 3 !</h1>');
    response. write('<h2>Fine ?</h2>');

    const resultat = calculatrice('addition', 12,23,42,23,42,23,42,33);
    console.log('Resultat : ' + resultat);
    response. write('<p> Resultat : ' + resultat + '</p>');
    response. write(`<p> Resultat : ${resultat}</p>`);
    console.log('MultCalc : ' + calculatrice('multiplication', 12,33));
    response. write(`<p> MultCalc : ${calculatrice('multiplication', 10,33)}</p>`);
    response. end();
    });
    server.listen(3000);
    console.log('Le serveur http est en écoute sur le port 3000');
