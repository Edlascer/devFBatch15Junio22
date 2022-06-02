'use strict'
// Timer ejecuta algo después de n milisegundos

const holaAsincrono = () => {
    return console.log('Hola, asíncrono')
}

// Función de orden mayor
setTimeout(holaAsincrono, 3000);

// Set Time Out con función anónima
setTimeout(() => {
    console.log('Hola')
}, 3000);