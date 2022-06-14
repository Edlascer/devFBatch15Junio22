'use strict';

// promesa es una instancia de una clase llamada promise 
// U objeto promesa de tipo promise
// Promise recibe como parámetro un callback que tendrá a su vez dos parámetros
// El primero es resolve y el otro es reject

let x = 7;


// Las promesas funcionan en dos partes

// 1. Definir la estructura de mi promesa
const promesa = new Promise((resolve, reject) => {
    if (x === 10) return resolve('La variable x, es igual a 10')
    return reject ('X no es igual a 10...')
}) 


// 2. Trabajar/recibir una respuesta 
promesa
    .then((response) => { // Aquí cae todo lo que se resuelve
        return console.log('Resuelto: ' + response);
    })
    .catch((error) => { // Aquí cae todo lo que se rechaza
        return console.log('Rechazado: ' + error);
    })

// Segundo caso

let y = 10;

const promesa2 = new Promise((resolve, reject) => {
    if (y === 10) return resolve('La variable y, es igual a 10')
    return reject ('y no es igual a 10...')
}) 


promesa2
    .then((response) => { // Aquí cae todo lo que se resuelve
        console.log(response);
        return response;
    })
    .then((data) => { 
        console.log(data); //Se imprime a partir del then anterior
        return data; // Retorna lo que se obtiene en el response anterior
    })
    .then((data2) => { //
        console.log(data2); //Se imprime a partir del then anterior
    })
    .catch((error) => { // Aquí cae todo lo que se rechaza
        return console.log('Rechazado: ' + error);
    })


// Tercer caso

let z = 9;

const promesa3 = new Promise((resolve, reject) => {
    if (z === 10) return resolve('La variable z, es igual a 10')
    return reject ('z no es igual a 10...')
}) 


promesa3
    .then((response) => { // Aquí cae todo lo que se resuelve
        console.log(response);
        return response;
    })
    .then((data) => { 
        console.log(data); //Se imprime a partir del then anterior
        return data; // Retorna lo que se obtiene en el response anterior
    })
    .then((data2) => { //
        console.log(data2); //Se imprime a partir del then anterior
    })
    .then(() => { //
        console.log('So sad'); 
    })
    .catch((error) => { // Aquí cae todo lo que se rechaza
        return console.log('Rechazado: ' + error);
    })