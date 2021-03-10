$form = document.querySelector("#calcular-edades");

document.querySelector('#ingresar').onclick = function(event) {
    const $cantidadIntegrantes = Math.floor(Number(document.querySelector("#cantidad-integrantes").value));

    borrarIntegrantes();
    borrarEdades();
    crearIntegrantes($cantidadIntegrantes);

    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event) {

    const edades = edadIntegrantes();
    const errorEdades = {};

    for(let i=0; i<edades.length; i++){
        errorEdades[`Campo_${i+1}`]=validarEdadIntegrantes(edades[i]);
      }

    borrarEdades();

    const edadesSinErrores = manejarErrores(errorEdades) === 0;

    if(edadesSinErrores){
        mostrarEdad('mayor', calcularMayor(edades));
        mostrarEdad('menor', calcularMenor(edades));
        mostrarEdad('promedio', calcularPromedio(edades));
        mostrarDatos();
    }

    event.preventDefault();
}

document.querySelector("#resetear").onclick = () => {
    borrarIntegrantes();
    borrarEdades();
    ocultarBotonCalculo();
    ocultarDatos();
};


function manejarErrores(errorEdades){

    const keys = Object.keys(errorEdades);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach((errorEdad) => {
        const error = errorEdades[errorEdad];

        if(error){
            cantidadErrores++;
            $form[errorEdad].className = "error";

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);

        } else {
            $form[errorEdad].className = "";
        }
    });

    return cantidadErrores;
}

function borrarIntegrantes(){
    const $integrantes = document.querySelectorAll(".integrante");
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    };
};

function crearIntegrantes($cantidadIntegrantes) {

    if ($cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    };

    for (let i = 0; i < $cantidadIntegrantes; i++) {
        crearInputs(i);
    };
};

function crearInputs(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = `Campo_${indice + 1}`;
    const $br = document.createElement('br');

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($br);

    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);

};

function edadIntegrantes() {
    const $integrantes = document.querySelectorAll(".integrante input");
    const edades = [];

    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    };

    return edades;
};

function borrarEdades(){
    const $borrar = document.querySelectorAll('#errores li');
    $borrar.forEach(function(div){
        div.remove();
    });
};

function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
};

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = '';
};

function mostrarDatos() {
    document.querySelector('#datos').className = '';
};

function ocultarBotonCalculo(){
    document.querySelector("#calcular").className = 'oculto';
};

function ocultarDatos(){
    document.querySelector("#datos").className = 'oculto';
};