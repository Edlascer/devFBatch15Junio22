'use strict'

// // Versión simplificada

// const suma = (a, b) => a + b
// const resta = (a, b) => a - b

// const calculadora = (a, b, operacion) => operacion()


// console.log(calculadora(13, 7, suma));
// console.log(calculadora(13, 7, resta))

// // Versión explícita


// // Funcion estándar/Primer orden
// function suma(a, b) {
//     return a + b
// }
// function resta(a, b) {
//     return a - b
// }

// // Función de orden mayor
// function calculadora(a, b, operacion) {
//     // callback -> comportamiento de ejecutar el parámetro como una función
//     return operacion(a, b)
// }

// Ejercicio:
// CREAR UNA CALCULADORA/Función de orden mayor, que ejecute como callback, las funciones de multiplicar y dividir
// Tienes que hacer la función de multiplicar como una de primer orden y la de dividir tiene que ser una arrow function

function multiplicar(a , b) {
    return a * b    
}

const dividir = (a , b) => {
    return a/b 
}

function calculadora (a, b, multiplicar, dividir) {
    return console.log('La multiplicación de ' + a + ' x ' + b + ' es ' + multiplicar(a,b) + ' y la división es ' + dividir(a,b)); 
}

multiplicar();
dividir();
console.log(calculadora(6,3,multiplicar,dividir));