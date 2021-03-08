/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#ingresar').onclick = function(event) {
    const $cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    borrarIntegrantes();
    crearIntegrantes($cantidadIntegrantes);

    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event) {
    const edades = edadIntegrantes();

    mostrarEdad('mayor', calcularMayor(edades));
    mostrarEdad('menor', calcularMenor(edades));
    mostrarEdad('promedio', calcularPromedio(edades));
    mostrarDatos();

    event.preventDefault();
}

document.querySelector("#resetear").onclick = () => {
    borrarIntegrantes();
    ocultarBotonCalculo();
    ocultarDatos();
};

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

function mostrarDatos(){
    document.querySelector("#datos").className = '';
};