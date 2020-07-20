"use strict";

//Como era antes con javascript

/*const crearObjeto = (nombre, edad) => {
    return {
        nombre: nombre,
        edad: edad
    }
}
console.log(crearObjeto('Martin', 40)); */
//Como es ahora con ES6, elimino los valores duplicados para simplificar.
var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(this.nombre, ", tiene ").concat(this.edad);
    }
  };
};

console.log(crearObjeto('Eduardo', 40).mostrarInfo());