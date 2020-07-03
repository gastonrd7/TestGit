const nombre = 'Martin';
const edad = 39;
const pais = 'Argentina';

//Como se concatena con javascript
console.log('Mi nombre es ' + nombre + ' tengo ' + edad + ' y soy ' + pais)

//Esta nueva funcionalidad de ES6, me permite poder escribir una cadena sin tener que concatenar las variables como antes.
console.log(`La persona es de Argentina`)

// Es la nueva manera de concatenar variables en ES6
console.log(`La persona se llama ${nombre}, tiene ${edad} y es de ${pais}`);