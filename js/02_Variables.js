//variables numericas, se recomineda crear el nombre en camelCase, ya que javascript es case sensitive
var numero = 5;
console.log('numero', numero);

//variables de texto
var texto = 'palabras';
console.log('texto', texto);

//variables booleanas
var booleana = true;
console.log('booleana', booleana);

//variables de tipo array
var colores = ['rojo', 'amarillo'];
console.log('colores', colores[0]);

//Variables de Objetos {Object: propiedad y valor}
var jugo1 = {
    "ingrediente1": "fresa",
    "ingrediente2": "naranja",
    "ingrediente3": "pera"
}

//Variables de Objetos {Object: propiedad y valor} //Aca los paso con los nobres de las propiedades, pero el comportamiento es el mismo
var jugo2 = {
    ingrediente1: "fresa",
    ingrediente2: "naranja",
    ingrediente3: "pera"
}
console.log("jugo", jugo1.ingrediente1);
console.log("jugo", jugo2.ingrediente2);

//variables DOM (Modelo de objetos del documento) 
//Por Id
var caja = document.querySelector("#caja");
console.log("caja", caja);

//Por clase
var cajas = document.querySelector(".cajas");
console.log("caja", cajas);