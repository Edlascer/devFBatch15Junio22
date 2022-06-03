'use strict'

function hola(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1500);
}

function hablar(mensaje, callback) {
    return setTimeout(() => {
        return callback(mensaje);
    }, 1100);

}

hablar('Bla bla bla 1...', (mensaje) => {
    return console.log(mensaje);
})


function adios(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1000);
}

hola('Edrei', (nombre) => {
    console.log('Hola, ' + nombre)
    return adios('Edrei', (nombre) => {
        return console.log('Adios, ' + nombre)
    })
})


console.log('Iniciando proceso')

// Ejercicio: Conseguir el siguiente OUTPUT (Salida) con callbacks
// Que el orden sea
// inicio
// hola
// hablar
// adios

function hola(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1500);
}

function hablar(mensaje, callback) {
    return setTimeout(() => {
        return callback(mensaje);
    }, 1100);

}

// hablar('Bla bla bla 1...', (mensaje) => {
//     return console.log(mensaje);
// })


function adios(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1000);
}

hola('Edrei', (nombre) => {
    console.log('Hola, ' + nombre)

    return hablar('Bla bla bla 1...', (mensaje) => {
        console.log(mensaje);
            return adios('Edrei', (nombre) => {
                return console.log('Adios, ' + nombre)
        })
    })


})


console.log('Iniciando proceso')
