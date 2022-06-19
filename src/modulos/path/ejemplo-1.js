'use strict'

const path = new require('path')

console.log(__filename);
console.log(__dirname);

const miArchivo = path.parse(__filename)
console.log(miArchivo);

// Path permite convertir una dirección en un objeto y desglosar todas sus propiedades
