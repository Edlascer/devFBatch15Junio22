// let numb1 = prompt('Ingrese el primer número');
// let numb2 = prompt('Ingrese el segundo número');
let cont = 0;

const multiplicacion = (numb1, numb2) => {
    let result = 0;
    for (cont = 0; cont < numb2; cont++) {
        result += numb1

    }
    return console.log(result)
}

multiplicacion(5, 8);

// Code Runner ctrl + alt + n corre el código seleccionado con node js

// Soluciones

const mulTwoNumbs = (one, two) => {
    if (two === 0) {
        return 0;
    } else if (two === 1) {
        return one;
    } else {
        return one + mulTwoNumbs(one, two - 1)
    }
}

console.log(mulTwoNumbs(5,6))
// Algoritmo de recursividad: Primero se ejecuta a sí mismo y luego se ejecuta con una condición de escape