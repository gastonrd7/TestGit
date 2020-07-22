//Declaro una funcion que recibe los siguientes parametros en javascript.
const mostrarDatos = (nombre, edad, email) => {
    console.log(nombre, edad, email);
}

//Invoco la funcion
mostrarDatos('Martin', 40, 'ruizdiazmartin@gmail.com');


//En ES6 se reciben los parametros de la siguiente forma y los voy a poder trabajar en un array.
const mostrarInfo = (...datos) => {
    console.log(datos);
}

//Invoco la funcion
mostrarInfo('Martin', 40, 'ruizdiazmartin@gmail.com');