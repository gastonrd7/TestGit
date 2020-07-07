//En javascript tenia que acceder a cada posicion del array para poder trabajarlo
const persona = ['Martin', 39, 'Argentina', 'Desarrollador web'];

const nombre = persona[0];
const edad = persona[1];

console.log(edad);


//Declaro un array con ES6
const personas = ['Martin', 39, 'Argentino', 'No especificado'];

//Destructuro el array con la variable edad vacia.
const [nombre, , pais, profesion] = personas;

//Destructuro el array con la variable edad 'No especificado'.
const [nombre, edad = 'No especificado', pais, profesion = 'Abogado'] = personas;

//Destructuro el array con todos sus variables.
const [nombre, edad, pais, profesion] = personas;

console.log(profesion);

//En vez de recibir la poscion del array, recibo el campo pais destructurado.
const mostrarInfo = (pais) => {
    console.log(pais);
}
mostrarInfo(pais);

//Recibo como parametro el array y lo destructuro cuando lo recibo en el metodo y luego accedo a lo que necesito, en el siguiente caso, recibo el array "personas" y lo destructuro para obtener el nombre y la edad.
const mostrarInfoUsuario = ([nombre, edad] = personas) => console.log(nombre, edad);
mostrarInfoUsuario(personas);