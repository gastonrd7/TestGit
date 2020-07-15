//Diferencias con var

//Podia declarar dos variables con el mismo nombre y no era correcto
//var nombre = 'Martin';
//var nombre = 'Eduardo';

//let me permite declarar cada variable con distinto nombre y no tendre problemas a futuro, ademas no me complila si declaro dos variables iguales.

// Mal declarado
//let pais = 'Argentina';
//let pais = 'Aruba';

// mal declarado
//const pais = 'Argentina';
//const pais = 'Aruba';

// bien declarado
//let pais = 'Argentina';
//let nacion = 'Aruba';

// bien declarado
//const pais = 'Argentina';
//const nacion = 'Aruba';

//En javascript podia declarar una variable dentro de un bloque y podia usarla fuera de el mismo, esto seria una mala practica.

/*var edad = 18;
if (edad >= 18) {
    var esAdulto = true;
}
console.log(esAdulto);*/

//Variables de tipo bloque con ES6 con (let y const) ahora es una mejora para que las variables declaradas en un bloque solo vivan en dicho bloque

/*let edad = 18;

if (edad >= 18) {
    let esAdulto = true;
}
console.log(esAdulto);*/

//Cuando usar let y cuando const, let es la nueva forma de declarar una variable y const es una constante.
//let name = 'Martin';
//const apellido = ''Ruiz Diaz;

//Areglos const
const colores = ['rojo', 'verde'];

//Esto seria un error porque estaria usando const como let.
//colores = 'amarillo, azul';

//El metodo push me permite agregar un valor despues de la ultima posicion del array, en este caso azul se agrega despues de verde.
colores.push('Azul');

console.log('Mis colores son: ' + colores);

//Martingit