'use strict'

let x = 10

if (x === 10) {
    console.log('if, vale 10');

} else {
    console.log('if, no vale 10');
}


// Operador Ternario: Se puede usar como un condicional
(x === 10)
    ?
    console.log('ternario, vale 10')
    :
    console.log('ternario, no vale 10');


// Esta es otra utilidad que se le puede dar
// Posibilidad de que la variable constante se cumpla o no en función de una condición

let equis = (x === 10) ? 'equis, vale 10': 'equis, no vale 10'
console.log(equis);