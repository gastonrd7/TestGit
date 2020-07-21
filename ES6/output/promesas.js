"use strict";

//ES6 Una promesa es un codigo que nos va a permitir esperar a que suceda algo.
var promesa = new Promise(function (resolve, reject) {
  //Aca escribimos la accion que queremos que se ejecute.
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve('La operacion ha sido un exito');
    } else {
      reject('La operacion no ha sido un exito');
    }
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});