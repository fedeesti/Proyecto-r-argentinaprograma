/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#agregar").onclick = function(event) {

    crearInputSalario();
    mostrarBotonCalcular();

    event.preventDefault();
};

document.querySelector("#quitar").onclick = function(event) {


    quitarInputSalario();
    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event) {
    const sueldo = obtenerSueldos();

    document.querySelector("#mayor-sueldo").textContent = calcularSueldoMayor(sueldo);
    document.querySelector("#menor-sueldo").textContent = calcularSueldoMenor(sueldo);
    document.querySelector("#promedio-sueldo").textContent = calcularSueldoPromedio(sueldo);
    document.querySelector("#promedio-sueldo-mensual").textContent = calcularSueldoMensualPromedio(sueldo);

    mostrarDatos();
    mostrarBotonReset();
    event.preventDefault();
};

document.querySelector("#resetear").onclick = () => {
    ocultarDatos();
    ocultarBotonCalcular();
    ocultarBotonReset();
    quitarTodosLosInput();
};


function crearInputSalario() {
    const $div = document.createElement('div');
    $div.className = 'salario-anual';

    const $label= document.createElement('label');
    $label.textContent = 'Ingrese salario Anual: ';

    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $salarios = document.querySelector('#salario');
    $salarios.appendChild($div);
};


function quitarInputSalario() {
    const $salarios = document.querySelector(".salario-anual");
    if ($salarios.value === undefined) {
        $salarios.remove();
    } else if ($salarios.value === null) {
        ocultarBotonCalcular();
    };
};


function obtenerSueldos() {
    const $sueldos = document.querySelectorAll('.salario-anual input');
    const sueldos = [];
    for (let i = 0; i < $sueldos.length; i++) {
        if (Number($sueldos[i].value) !== 0) {
        sueldos.push(Number($sueldos[i].value));
        };
    };
    return sueldos;
};

function quitarTodosLosInput() {
    const $input = document.querySelectorAll(".salario-anual");
    for (let i = 0; i < $input.length; i++) {
        $input[i].remove();
    };
};

function mostrarBotonCalcular(){
    document.querySelector('#calcular').className = '';
};

function mostrarDatos() {
    document.querySelector('#datos').className = '';
};

function mostrarBotonReset() {
    document.querySelector('#resetear').className = '';
};

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
};

function ocultarDatos() {
    document.querySelector('#datos').className = 'oculto';
};

function ocultarBotonReset() {
    document.querySelector('#resetear').className = 'oculto';
};