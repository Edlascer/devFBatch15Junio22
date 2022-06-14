'use strict'

// Async await nos permite trabajar respuestas de promesas
// Las promesas son asíncronas ya que no sabemos el tiempo en el que se van a cumplir

const getData = () => {
    return fetch ('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json()) 
    .then (data => data)
    .catch(error => error)
}


// Async y await siempre van juntos                       
const showData = async () => {
    const data = await getData();
    console.log(data);
}

showData();

// En la flecha hay un return implícito que se recibe abajo en data
// showData necesita los datos de la función asíncrona getData, pero como está escrita antes esto explica la respuesta del console
// Esto último se arregla con asyncawait
// Asycnawait sirve para esperar/await a que una promesa se resuelva
// y obtener los datos que retorna esa promesa