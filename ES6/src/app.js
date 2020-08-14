import {
    mensajeAlerta,
    saludo
} from './modulos/mensajeAlerta';
import Persona from './modulos/clasePersona';

mensajeAlerta('Hola Martin, como estas');
saludo();

const usuario = new Persona('Martin', 40);
usuario.mostrarInfo();