'use strict'

const showData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return console.log(data);

}

showData();

// Try catch intenta, y si sale mal entonces lo atrapa en el catch como un error
// Copiar el código de repo de la clase en este archivo