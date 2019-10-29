
// SINTAXIS EN JS - COMPARACIONES

// OPERADOR
//   ==      -->      Igual a
//   !=      -->      Diferente a
//   >       -->      Mayor a
//   <       -->      Menor a
//   >=      -->      Mayor o igual a
//   <=      -->      Menor o igual a

// Las sentencias condicionales son:
// IF - ELSE
// SWITCH

// ---------------- IF - ELSE -------------------------

// SINTAXIS -
// if (condicion) {
//     instrucciones si se cumple
// } else {
//     instrucciones si no se cumple
// }

// EJEMPLO 1 -

var num1 = 5;
var num2 = 6;

if (num1 > num2) {
    console.log("num1 es mayor que num2")
} else {
    console.log("num1 es menor que num2")
}

// EJEMPLO 2 - Mostrar una alerta en el caso de que un password sea menor de 6 carácteres

var pass = prompt("Introduce tu contraseña con mínimo de 6 carácteres");

if (pass.length >= 6) {
    console.log("¡Password ok!")
} else {
    console.log("¡El password debe tener más de 6 carácteres!")
}

// EJEMPLO 3 -

var num1 = 7;
var num2 = 7;

if (num1 > num2) {
    console.log("num1 es mayor que num2")
}else if (num1 < num2) {
    console.log("num2 es mayor que num1")
} else {
    console.log("num1 y num2 son iguales")
}

// ---------------- SWITCH (case) -------------------------

// SINTAXIS -
// Utilizamos la sentencia SWITCH para comparar una variable con datos YA CONOCIDOS
// switch (expression) {
//     case expression:
//         break;
//     default:
// }

// EJEMPLO 1 - Elegir horario de curso

var horario = prompt("Elige un horario del curso (mañana/tarde)")

switch (horario) {
    case "mañana":
        console.log("Has elegido horario de mañana");
        break;
    case "tarde":
        console.log("Has elegido horario de tarde");
        break;
    default:
        console.log("No has añadido un horario correcto");
}
