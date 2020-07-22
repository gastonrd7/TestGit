//Como era antes con javascript
/*const crearObjeto = (nombre, edad) => {
    return {
        nombre: nombre,
        edad: edad
    }
}
console.log(crearObjeto('Martin', 40)); */

//Como es ahora con ES6, elimino los valores duplicados para simplificar.
const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo() {
            return `${this.nombre}, tiene ${this.edad}`;
        }
    }
}
console.log(crearObjeto('Eduardo', 40).mostrarInfo());