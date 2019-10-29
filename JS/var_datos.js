// Comentario de una línea
/* Comentario
de dos líneas*/

// alert("¡HOLA MUNDO!");

// -----------------------------------------
// VARIABLES
// def: celdas de memoria donde podemos almacenar diferentes tipos de datos.

// -----------------------------------------
// Declaración de variables y asignación de datos:

var x = 5; // Tipo de dato entero
var y = 2.7; // Tipo de datodecimal (float)
var z = "Hola"; // Tipo de dato texto (string)
var z_1 = 'Hola'; // Con comillas simples: igual dato texto (string)
var boolean = true; // Valor boolean verdadero (true)

var numero1 = 10;
var numero2 = 20;
var suma = numero1+numero2; // 30
var resta = numero1-numero2; // -10
var multiplicacion = numero1*numero2;
// alert(suma);
console.log(suma);
console.log(resta);
console.log(multiplicacion);

var texto1 = "Hola";
var texto2 = "Adiós";
var todoTexto = texto1 + " y " + texto2; // La suma de strings realiza una concatenación
// alert(todoTexto);
console.log(todoTexto);

// Tipos de variable "ARRAY"
var marcas_coches = ["Seat", "Renault", "Fiat", "BMW"];
// Para acceder a un valor del array, añadimos el nombre de la variable y entre corchetes la posición (empieza por 0)
console.log(marcas_coches[2]);
var longitud_array = marcas_coches.length; // 4
console.log(longitud_array);

// -----------------------------------------
// TIPOS DE OPERADORES
// + : suma
// - : resta
// * : multiplicacion
// / : divisiónote
// % : módulo
// ++ : incremento en 1
// -- decremento en 1

// Ejemplos
var num1 = 4;
var num2 = 2;
var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var resto = num1 % num2;
console.log("La suma es: "+suma);
console.log("La resta es: "+resta);
console.log("La multiplicación es: "+mult);
console.log("La división es: "+div);
console.log("El resto es: "+resto);
