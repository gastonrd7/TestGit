//Declaro un objeto con ES6
const usuario = {
    nombre: 'Martin',
    edad: 40,
    mail: 'ruizdiazmartin@gmail.com'

}

//Destructuro el objeto y en el siguiente caso solo obtengo el nombre y el mail y puedo agreragrle una propiedad al objeto como Profesion y le asigo no un valor por Default y puedo acceder a este campo.
const {
    nombre,
    edad,
    profesion = 'No especificado'
} = usuario

console.log(nombre, edad, profesion);


//Declaro una funcion en donde recibo solo el nombre como parametro del objeto usuario.
const mostrarInfo = ({
    nombre
}) => {
    console.log(`${nombre} tiene: ${edad}`)
}

mostrarInfo(usuario);

//Declaro una funcion en donde recibo nombre y le agrego un campo nuevo al objeto Usuario llamado Legajo y le asigo un valor por default.
const mostrarInfoUsuario = ({
    nombre,
    legajo = '12345'
}) => console.log(`${nombre} tiene legajo: ${legajo}`)
mostrarInfoUsuario(usuario);