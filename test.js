const module1 = require('./module1');
const http = require('http');

console.log('Bonjour');

// [1,2,3,4,5].forEach(elem => {console.log(elem)  
// });

[1,2,3,4,5].forEach(elem => console.log(elem));

console.log(module1);
console.log(http);
console.log('Fin de m\'éxecution');