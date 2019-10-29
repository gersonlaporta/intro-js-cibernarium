// DOM: Document Object Model
// Def: Nos permite almacenar, cambiar, añadir y borrar cualquier elemento de nuestra web.

// Almacenamos en una variable un elemento (imagen) con id="logo"
var logo = document.getElementById('logo');

// Lanzamos un alert de la nueva variable creada
console.log("Nueva variable creada:" + logo);
console.log(logo);

// Añadimos a la imagen un borde rojo
logo.style.border = "2px solid red";

// Almacenamos en un variable todos lo elementos (imagenes) con clase = 'imagen'
// Se crea una array de objetos
var imagenes = document.getElementsByClassName('imagen');
// imagenes[2].style.border = "2px solid red";

// Pintar con array
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.border = "2px solid blue";
}

// Lanzamos un alert de la nueva variable creada
console.log("Nueva variable array creada:" + imagenes);
console.log(imagenes);
