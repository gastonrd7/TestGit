//Creo una clase con sus caracteristicas en javascript.
class usuario {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad
    }
    mostrarSaludo(mensaje) {
        return mensaje;
    }
    mostrarInfo() {
        return `${this.nombre}, tiene ${this.edad}`;
    }
}


//Heredo de la clase usuario y sobreescribo el constructor.
class Estudiante extends usuario {
    constructor(nombre, edad, carrera) {

        //Con super traigo la clase padre.
        super(nombre, edad);
        this.carrera = carrera
    }
    mostrarInfo() {
        return `${this.nombre}, tiene ${this.edad} y es: ${this.carrera} `;
    }
}

//Instancio la clase usuario.
//const nombreUsuario = new usuario('Martin', 40);
//document.write(nombreUsuario.nombre, nombreUsuario.edad);

//Instancio la clase usuario.
//const nombreUsuario = new usuario('Martin', 40);
//document.write(nombreUsuario.mostrarSaludo('Hola Martin'));

//Instancio la clase usuario.

//const nombreUsuario = new usuario('Martin', 16);
//document.write(nombreUsuario.mostrarInfo());

//Instancio la clase usuario.
const nombreUsuario = new Estudiante('Martin', 40, 'Programador');
document.write(nombreUsuario.mostrarInfo());