git //Como era antes en javascript, habia que validar si un parametro no se lo pasaba
function registrarUsuario(nombre, pais, email, telefono) {
    if (!telefono) {
        telefono = 'El usuario no ingreso telefono';
    }

    return `Nombre: ${nombre}, Pais: ${pais}, Email: ${email}, Telefono: ${telefono}`;
}
console.log(registrarUsuario('Martin', 'Argentina', 'ruizdiazmartin@gmail.com'));

//Con EC6 es mucho mas sencillo declarar paramtros por default
function registroUsuario(nombre, pais, email, telefono = 'No especificado') {
    if (!telefono) {
        telefono = 'El usuario no ingreso telefono';
    }

    return `Nombre: ${nombre}, Pais: ${pais}, Email: ${email}, Telefono: ${telefono}`;
}
//Si el usuario no ingresa telefono por defaulf en este caso va a tener de valor = 'No especificado'
console.log(registroUsuario('Martin', 'Argentina', 'ruizdiazmartin@gmail.com'));

//Nueva compilacion