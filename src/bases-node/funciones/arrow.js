const suma = (a, b) => {
    return a + b
}

console.log(suma(3,18))

// Arrow function -> Función anónima que se guarda en una variable/constante

// Si solo retornas una cosa, puedes obviar paréntesis y la palabra return

// const suma = (a, b) => a + b


// Si me pasas un parámetro, puedes quitar las llaves

const hola = (nombre) =>  'Hola, ' + nombre

console.log(hola('Enrique!'))

// La sintaxis es lo único que diferencía a una arrow function de una función de primer nombre
// Las arrow functions no son compatibles con el objeto this