import {
    mensajeAlerta,
    saludo
} from './modulos/mensajeAlerta';
import Persona from './modulos/clasePersona';

mensajeAlerta('Hola Martin');
saludo();

const usuario = new Persona('Martin', 40);
usuario.mostrarInfo();