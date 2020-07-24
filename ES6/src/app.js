import {
    mensajeAlerta,
    saludo
} from './modulos/mensajeAlerta';
import Persona from './modulos/clasePersona';

mensajeAlerta('Hola Martincho');
saludo();

const usuario = new Persona('Martin', 40);
usuario.mostrarInfo();