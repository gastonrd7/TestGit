//ES6 Una promesa es un codigo que nos va a permitir esperar a que suceda algo.
const promesa = new Promise((resolve, reject) => {

    //Aca escribimos la accion que queremos que se ejecute.
    setTimeout(() => {

        const exito = false;
        if (exito) {
            resolve('La operacion ha sido un exito');

        } else {
            reject('La operacion no ha sido un exito');
        }

    }, 4000);


});

promesa.then((mensaje) => {
    alert(mensaje);
})

promesa.catch((mensaje) => {
    alert(mensaje);
})