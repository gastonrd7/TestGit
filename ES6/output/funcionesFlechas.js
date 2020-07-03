"use strict";

//Funciones javascript
var nombres = ['Martin', 'Eduardo']; //La funcion map nos permite iterar por cada uno de los elementos de un array y ejecutar una funcion por cada uno de ellos
//const nombresCaracteres = nombres.map(function (nombre) {
//  console.log(nombre.length);
//});

var nombresCaracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, ", tiene ").concat(nombre.length, " letras"));
}); //Funciones flechas como se declaran
//(parametro)=> {
//  codigo a ejecutar
//}

var nombres_Caracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, ", tiene ").concat(nombre.length, " letras"));
}); //Cuando tengo las llaves tengo que poner la palabra reservada return

var nombresCantidadCaracteres = nombres.map(function (nombre) {
  return "".concat(nombre, ", tiene ").concat(nombre.length, " letras");
});
console.log(nombresCantidadCaracteres); //Para dejarlo en una sola linea hay que sacar las llaves, la palabra reservada return y el punto y coma del final de texto

var nombres_Cantidad_Caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, ", tiene ").concat(nombre.length, " letras");
});
console.log(nombres_Cantidad_Caracteres);