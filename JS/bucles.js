// SINTAXIS EN JS - COMPARACIONES

// OPERADOR
//   ==      -->      Igual a
//   !=      -->      Diferente a
//   >       -->      Mayor a
//   <       -->      Menor a
//   >=      -->      Mayor o igual a
//   <=      -->      Menor o igual a

// Las sentencias de bucles son:
// WHILE / DO WHILE
// FOR
// ---------------- WHILE -------------------------
// // SINTAXIS -
// while (condicion) {
//     introducción que se ejecuta en cada vuelta
// }

// EJEMPLO 1 - Imprimir los numeros del 0 al 10 (ambos incluidos)

var i = 0;

while (i<=10) {
    console.log("La i de while es = "+i);
    //document.wirte:imprime el resultado en el documento HTML
    document.write(i+",");
    // if (1=10) {
    //     //eliminar la última coma
    // }
    i++;
}

// ---------------- DO WHILE -------------------------
// // SINTAXIS -
// do {
//     introducción que se ejecuta en cada vuelta
// } while (condición);

// La diferencia entre el WHILE y el DO WHILE es que el primero pregunta y ejecuta instrucciones y el segundo lo contrario

// EJEMPLO 2 - Con password, pedirlo hasta que no se introduzca dicho Password

var pass_registro = prompt("Registra un password:")

alert("El password ha sido registrado correctamente");

do {
    var pass_usuario = prompt("Introduce tu password:")
} while (pass_usuario != pass_registro);

console.log("El password introducido es correcto");
alert("El password introducido es correcto");

// ---------------- FOR -------------------------
// // SINTAXIS -

// for (var i = 0; i < array.length; i++) {
//     array[i]
// }

// for (inicialización; comparación; actualización) {
//      ?
// }

// EJEMPLO 3 - Imprimir los numeros del 0 al 10 (ambos incluidos)

for (var i = 0; i <=10; i++) {
    console.log("La i de for es = "+i);
}

// EJEMPLO 4 - Almancenar en un array lenguajes de programación hasta que el usuario introduzca la palabra salir

var leng = []; // Tamibén: var leng = new Array();
var i = 0;

do {
    leng[i] = prompt("Introduce lenguajes de programción. Para salir itnroduce 'salir'");
    i++;
} while (leng[i-1] != "salir");

console.log(leng);

// IMPRESIÓN DE DATOS CON for
for (var i = 0; i < leng.length -1; i++) {
    document.write(leng[i]+",")
}
