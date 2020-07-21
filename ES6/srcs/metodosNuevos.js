//metodos para trabajar con cadenas de texto.
const texto = 'Hola mundo';

//En esta sentencia verifico si el texto comienza con la letra H en mayuscula.
console.log(texto, 'empieza con la letra H:', texto.startsWith('H'));

//En esta sentencia verifico si el texto comienza con la letra h, y si es mayuscula la convierto en minuscula.
console.log(texto, 'empieza con la letra h:', texto.toLowerCase().startsWith('h'));

//En esta sentencia verifico si el texto termine con la letra o en minuscula.
console.log(texto, 'termine con la letra o:', texto.endsWith('o'));

//Verifico si el texto contiene la palabra Martin.
console.log(texto, 'incluye la palabra Martin:', texto.includes('Martin'));

//Declaro un array de amigos.
const amigos = ['Mario', 'Gaston'];

//Verifico si el array contiene la palabra Martin
console.log(amigos, 'incluye la palabra Martin:', amigos.includes('Martin'));

//Nos devuelve el primer elemento del array que cumple la siguiente condicion.
console.log(amigos.find((amigo) => amigo.length > 5));

//Nos devuelve el index del elemento que estoy buscando.
console.log(amigos.findIndex(amigo => amigo === 'Gaston'));