const http = require('http');
const EventEmitter = require('events').EventEmitter;

let match = new EventEmitter();
let points1 = 0;
let points2 = 0;
let score = 0;

// match.on('twopoints', (data1, data2) => {
    
//     setTimeout(() => {
//         console.log(data1 + " - " + data2);
//         points +=2; 
//         console.log("Noveau 2 points, score : " + points + " (dans la callback)");
//     }, 100);
// });

match.on('twopoints', (data1, data2, score) => {

    // console.log(data1 + " - " + data2);
    if (data1 == "equipe1"){
        points1 += score; 
    }else {
        points2 += score; 
    };
    // console.log("Noveau 2 points, score : " + points + " (dans la callback)");
});

console.log(`equipe1 score avant l'eveneement : ${points1}`);
match.emit('twopoints', 'equipe1', 'babar', 2);
console.log(`equipe2 score aprés l'eveneement : ${points2}`);

console.log(`equipe1 score avant l'eveneement : ${points1}`);
match.emit('twopoints', 'equipe2', 'babar2', 3);
console.log(`equipe2 score aprés l'eveneement : ${points2}`);

console.log(`equipe1 score avant l'eveneement : ${points1}`);
match.emit('twopoints', 'equipe1', 'babar', 1);
console.log(`equipe2 score aprés l'eveneement : ${points2}`);
