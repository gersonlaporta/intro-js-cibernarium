function validar() {

    // Recogemos por DOM los valores de los inputs
    var nombre = document.getElementById('nombre');
    // Recogemos por DOM los valores de los inputs
    var password = document.getElementById('password');
    // Recogemos por DOM los valores de los inputs
    var email = document.getElementById('email');
    // Recogemos por DOM los valores de los inputs
    var textarea = document.getElementById('textarea');

    // Recojo la caja (div) donde irán los mensajes
    var mensajes_caja = document.getElementById('mensajes');
    var mensaje_texto = "";

    // nombre

    // Si el campo "nombre" está vacío
    if(nombre.value == "") {
        nombre.style.border = "1px solid red"; // borde ROJO
        mensaje_texto = "El nombre está vacío<br>";
    } else { // Si el campo "nombre" NO está vacio
        nombre.style.border = "1px solid #bbb"; // borde GRIS
    }

    // email

    // Si el campo "email" está vacío
    if(email.value == "") {
        email.style.border = "1px solid red"; // borde ROJO
        mensaje_texto += "El email está vacío<br>";
    } else { // Si el campo "email" NO está vacio
        email.style.border = "1px solid #bbb"; // borde GRIS
    }

    // password

    // Si el campo "password" está vacío
    if(password.value == "") {
        password.style.border = "1px solid red"; // borde ROJO
        mensaje_texto += "La contraseña está vacío<br>";
    } else if (password.value.length < 6) {
        password.style.border = "1px solid red"; // borde ROJO
        mensaje_texto += "La contraseña tiene menos de 6 carácteres<br>";
    } else { // Si el campo "password" NO está vacio
        password.style.border = "1px solid #bbb"; // borde GRIS
    }

    // textarea

    // Si el campo "textarea" está vacío
    if(textarea.value == "") {
        textarea.style.border = "1px solid red"; // borde ROJO
        mensaje_texto += "El textarea está vacío<br>";
    } else { // Si el campo "textarea" NO está vacio
        textarea.style.border = "1px solid #bbb"; // borde GRIS
    }

    // Se muestra alert cuando las 3 condiciones (campo no vacío)
    //Se cumplen (AND -> &&)
    // if (nombre.value != "" && email.value != "" && textarea.value != "") {
    //     alert("¡Se ha enviado el formulario!");
    // }

    mensajes_caja.innerHTML = mensaje_texto;

    if (mensaje_texto == "") { // Si la variable "mensaje_texto" está vacío es que todos los campos están llenos
        mensajes_caja.innerHTML = "¡Formulario ENVIADO!";
    }

}
