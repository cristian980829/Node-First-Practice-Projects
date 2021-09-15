const { crearArchivo } = require('./Helpers/multiplicar');
require('colors');

console.clear();


base=7;
hasta=15;

crearArchivo(base, hasta)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creada'))
    .catch( err => console.log(`Error: ${err}`) );