"use strict";

//Declaro un objeto con ES6
var usuario = {
  nombre: 'Martin',
  edad: 40,
  mail: 'ruizdiazmartin@gmail.com'
}; //Destructuro el objeto y en el siguiente caso solo obtengo el nombre y el mail y puedo agreragrle una propiedad al objeto como Profesion y le asigo no un valor por Default y puedo acceder a este campo.

var nombre = usuario.nombre,
    edad = usuario.edad,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion;
console.log(nombre, edad, profesion); //Declaro una funcion en donde recibo solo el nombre como parametro del objeto usuario.

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre;
  console.log("".concat(nombre, " tiene: ").concat(edad));
};

mostrarInfo(usuario); //Declaro una funcion en donde recibo nombre y le agrego un campo nuevo al objeto Usuario llamado Legajo y le asigo un valor por default.

var mostrarInfoUsuario = function mostrarInfoUsuario(_ref2) {
  var nombre = _ref2.nombre,
      _ref2$legajo = _ref2.legajo,
      legajo = _ref2$legajo === void 0 ? '12345' : _ref2$legajo;
  return console.log("".concat(nombre, " tiene legajo: ").concat(legajo));
};

mostrarInfoUsuario(usuario);