"use strict";

//En javascript tenia que acceder a cada posicio del array para poder trabajarlo
//const persona = ['Martin', 39, 'Argentino', 'Desarrollador web'];
//const nombre = persona[0];
//const edad = persona[1];
//console.log(edad);
//Declaro un array con ES6
var personas = ['Martin', 39, 'Argentino', 'No especificado']; //Destructuro el array con la variable edad vacia.
//const [nombre, , pais, profesion] = personas;
//Destructuro el array con la variable edad 'No especificado'.

var nombre = personas[0],
    pais = personas[2],
    _personas$ = personas[3],
    profesion = _personas$ === void 0 ? 'Abogado' : _personas$; //Destructuro el array con todos sus variables.
//const [nombre, edad, pais, profesion] = personas;
//console.log(profesion);
//En vez de recibir la poscion del array, le paso el campo destructurado.

var mostrarInfo = function mostrarInfo(pais) {
  console.log(pais);
};

mostrarInfo(pais);