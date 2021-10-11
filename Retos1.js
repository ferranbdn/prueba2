// RETO 1
let cadena = "Buenos días tenga usted";

let numero = 100;

let x = 100 == 99;

console.log(cadena);
console.log(numero);
console.log(x);

// RETO 2
let raizCuadrada = Math.sqrt(1369);
console.log(raizCuadrada);

// RETO 3
function numeroAleatorio(max) {
    return Math.round(Math.random() * max);
}

console.log(numeroAleatorio(11));

// RETO 4
let nombre = "Juan";
let apellido1 = "Pérez";
let apellido2 = "García";

let textoCompleto1 = ("Me llamo " + nombre + " " + apellido1 + " " + apellido2 + " y vivo en Madrid.");
console.log(textoCompleto1);

let textoCompleto2 = (`Me llamo ${nombre} ${apellido1} ${apellido2} y vivo en Madrid.`);
console.log(textoCompleto2);

console.log(textoCompleto1.toUpperCase())
console.log(textoCompleto2.toUpperCase())

// RETO 5
let texto5 = "En un lugar de La Mancha"

contarCaracteres = texto5.length;
console.log(contarCaracteres);

console.log(texto5[3]);

console.log(texto5.includes("codenotch"));

// RETOS EXTRAS

// 1- Declarar 3 arrays, 5 de strings, 5 números, y el ultimo de strings, number y bolean.
let miArray1 = ["Azul", "Blanco", "Negro", "Rojo", "Verde"];
let miArray2 = [1, 2, 3, 4, 5];
let miArray3 = ["Pontevedra", 8, true];

// 2- Unir los 3 arrays en 1 solo, mediante métodos de arrays.
let arrayUnico = [miArray1, miArray2, miArray3];

// 3- Devolver un array con solo números, luego solo ese mismo array solo números negativos.


// 4- Devolver un array con solo strings con mas de 4 caracteres.


// 5- Modificar el array y que las dos primeras posiciones del array sustituir el string por tu nombre.
