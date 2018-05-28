const http = require('http');
const EventEmitter = require('events').EventEmitter;

let match = new EventEmitter();
let points = 0;

match.on('twopoints', () => {
    
    setTimeout(() => {
        points +=2; 
        console.log("Noveau 2 points, score : " + points + " (dans la callback)");
    }, 100);
});

console.log(`score avant l'eveneement : ${points}`);
match.emit('twopoints');
console.log(`score aprés l'eveneement : ${points}`);
