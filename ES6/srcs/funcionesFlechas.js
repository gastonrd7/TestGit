//Funciones javascript

const nombres = ['Martin', 'Eduardo']

//La funcion map nos permite iterar por cada uno de los elementos de un array y ejecutar una funcion por cada uno de ellos
//const nombresCaracteres = nombres.map(function (nombre) {
//  console.log(nombre.length);
//});

const nombresCaracteres = nombres.map(function (nombre) {
    console.log(`${nombre}, tiene ${nombre.length} letras`);
});

//Funciones flechas como se declaran
//(parametro)=> {
//  codigo a ejecutar
//}

const nombres_Caracteres = nombres.map((nombre) => {
    console.log(`${nombre}, tiene ${nombre.length} letras`);
});

//Cuando tengo las llaves tengo que poner la palabra reservada return
const nombresCantidadCaracteres = nombres.map((nombre) => {
    return `${nombre}, tiene ${nombre.length} letras`;
});
console.log(nombresCantidadCaracteres);

//Para dejarlo en una sola linea hay que sacar las llaves, la palabra reservada return y el punto y coma del final de texto
const nombres_Cantidad_Caracteres = nombres.map((nombre) => `${nombre}, tiene ${nombre.length} letras`);

console.log(nombres_Cantidad_Caracteres);