"use strict";

//Declaro una funcion que recibe los siguientes parametros en javascript.
var mostrarDatos = function mostrarDatos(nombre, edad, email) {
  console.log(nombre, edad, email);
}; //Invoco la funcion


mostrarDatos('Martin', 40, 'ruizdiazmartin@gmail.com'); //En ES6 se reciben los parametros de la siguiente forma y los voy a poder trabajar en un array.

var mostrarInfo = function mostrarInfo() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; //Invoco la funcion


mostrarInfo('Martin', 40, 'ruizdiazmartin@gmail.com');