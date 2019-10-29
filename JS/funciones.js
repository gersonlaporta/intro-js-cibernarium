
// Comprobación que el documento está vinculado con index.html
// console.log("hola funciones.js");

// FUNCIONES
// def: Es un bloque de código diseñado para realizar un a operación o tarea determinada
// A esta función la podemos llamr desde cualquuier punto del programa y  nos retorna el resultado de dicha operación

// EJEMPLO
//    function nombre _funcion(parametro1, parametro2, ...) {
//      // código de la función
//      ...
//      ...
//      return resultado;
//    }

// EJEMPLO 1 -----------------------------------------------
// function impuesto_IVA(precio_parametro, iva_parametro) {
//     var impuesto = (iva_parametro/100)+1
//     var total = precio_parametro * impuesto;
//     console.log(total);
// }
//
// var precio_prod = 100;
// var iva = 21;
// // Llamo a la funcion con su nombre
// impuesto_IVA(precio_prod, iva);

// EJEMPLO 2 (con variables exteriores solicitadas por prompt) -----------------------------------------------
// function impuesto_IVA(precio_parametro, iva_parametro) {
//     var impuesto = (iva_parametro/100)+1
//     var total = precio_parametro * impuesto;
//     return(total);
// }
//
// // Funcion ("prompt") que me permite introducir valores como usuario
// var precio_prod = prompt("Introduce el valor del producto");
// var iva = prompt("Introduce el valor del IVA");
//
// // Llama al afuncion
// var resultado = impuesto_IVA(precio_prod, iva);
//
// // Pintamos resultado
// console.log("El resultado del precio con iva es: " + resultado);
