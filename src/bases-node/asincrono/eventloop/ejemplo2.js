'use strict'
console.log('inicio')

setTimeout(() => {   //El setTimeOut vuelve asíncrono al bloque de código, por lo que este se ejecuta al final y se va a la cola de ejecución
    console.log('Mitad')
}, 0);

console.log('Fin')

// La manera en que Js da instrucciones de prioridad de ejecución de instrucciones al procesador para que sea concurrente es el event loop
// La concurrencia es simular paralelismo, dándole prioridad a ciertas tareas, dividiendo grandes problemas en pequeños con prioridades distintas


