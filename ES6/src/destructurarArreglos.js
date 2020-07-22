//En javascript tenia que acceder a cada posicion del array para poder obtener su valor
const personas = ['Martin', 39, 'Argentino', 'No especificado'];

const nombre = personas[0];
const edad = personas[1];

console.log(nombre);



//Declaro un array con ES6
const persona = ['Martin', 39, 'Argentino', 'No especificado'];

//Destructuro el array y le asigino nombres descriptivos a las variables.
const [nombre, edad, pais, profesion] = persona;

console.log(edad);



//Declaro un array sin declarar la profesion con ES6
const peoples = ['Martin', 39, 'Argentino'];

//Destructuro el array y le asigino un valor por default a la profesion, ya que no se declaro en el array.
const [nombre, edad, pais, profesion = 'Abogado'] = peoples;

console.log(profesion);



//Declaro un array con ES6
const people = ['Martin', 39, 'Argentino', 'Ingeniero'];

//Destructuro el array con la variable edad vacia para que no me asigne y no perder la posicion, por eso lo declaro vacio.
const [nombre, , pais, profesion = 'Abogado'] = people;

console.log(pais);



//En vez de recibir la poscion del array, recibo el campo pais destructurado.
const mostrarInfo = (pais) => {
    console.log(pais);
}
mostrarInfo(pais);



//Recibo como parametro el array y lo destructuro cuando lo recibo en el metodo y luego accedo a lo que necesito, en el siguiente caso, recibo el array "personas" y lo destructuro para obtener el nombre y la edad.
const mostrarInfoUsuario = ([nombre, , pais] = people) => console.log(nombre, pais);
mostrarInfoUsuario(people);