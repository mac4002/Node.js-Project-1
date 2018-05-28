// Import des modules
const http = require('http');
const EventEmitter = require('events').EventEmitter;
/*
 *      Test du module CALCULATRICE
 */
/* const calculatrice = require('calculatrice'); console.log(calculatrice);
// Création du serveur HTTP
let server = http.createServer((request, response) => {
    console.log('Requête vers le serveur');
    response.write('<h1>Helldddddo</h1>');
    response.write('<h2>Fine ?</h2>');

    let resultat = calculatrice.add(105, 134);
    response.write("<p>Addition :  \"" + resultat + "\"</p>");
    response.write(`<p>Addition : "${resultat}"</p>`);

    resultat = calculatrice.multiplication(11, 32);
    response.write(`<p>Multiplication : "${resultat}"</p>`);

    // Utilisation de la fonction principale de la calculatrice
    resultat = calculatrice('addition', 5, 17);
    response.write(`<p>Addition (fonction principale) : "${resultat}"</p>`);
    resultat = calculatrice('multiplication', 25, 8);
    response.write(`<p>Multiplication (fonction principale) : "${resultat}"</p>`);
    resultat = calculatrice('sdfdsfsdfdsz', 25, 8);
    response.write(`<p>Test bidon (fonction principale) : "${resultat}"</p>`);
    
    // Renvoi de la réponse
    response.end();
}); server.listen(3001); */
let match = new EventEmitter();

let pointsA = 0, pointsB = 0;

// Définition de l'événément
match.on('panier', (equipe, nbPoints) => {
    setTimeout(() => {

        if(equipe === 'equipe1') {
            pointsA += nbPoints;
        } else if(equipe === 'equipe2') {
            pointsB += nbPoints;
        }

        console.log('Score : équipe 1 : ' + pointsA + ' , équipe 2 : ' + pointsB);
    } , 100);
});
// Émission de l'événement


/*** DEBUT DU MATCH ***/
/* Nouveau panier */
match.emit('panier', 'equipe1', 2);
/* Nouveau panier */
match.emit('panier', 'equipe2', 3);
match.emit('panier', 'equipe2', 1);
match.emit('panier', 'equipe2', 2);
match.emit('panier', 'equipe2', 32);