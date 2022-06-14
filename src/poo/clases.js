'use strict';

// En las clases, se habla en general
// Método no es lo mismo que función
// Método vive dentro de una clase


// Plantilla para objetos
// Las clases por convención inician con mayúsculas
class Animal {
    constructor() {
        this.especie = 'Humano',
        this.color = 'Diverso',
        this.sonido = 'Insultos'
    }
}

// Acceder a las propiedades de Animal
// 1. Se crea un objeto

// En objetos se habla en específico
// Un objeto es la instancia de una clase
// Una instancia significa anclarse de algo, ej. provenir de algún sitio

// Objeto: Instancia de una clase

const Enrique = new Animal() // Esto es un objeto por definición
console.log(Enrique); // Se imprime un objeto de Tipo Animal

// Accediendo a propiedades
console.log(Enrique.color);


// Dándole dinamismo a la clase, asignándole parámetros

class Animal {
    constructor(esp, col, son) {
        this.especie = esp,
        this.color = col,
        this.sonido = son
    }
}

// Dándole valores
const Quique = new Animal ('Humana', 'cafe', 'insultos leves')
console.log(Quique);

class Animal {
    constructor(esp, col, son) {
        this.especie = esp,
        this.color = col,
        this.sonido = son
    }

    emitirSonido() {
        return console.log('Estoy emitiendo sonido: ' + this.sonido);
    }
}

// const Quique = new Animal ('Humana', 'cafe', 'insultos leves')
// Quique.emitirSonido()