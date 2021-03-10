const $form = document.querySelector("#calcular-sueldos");
let contador = 0;

document.querySelector("#agregar").onclick = function(event) {

    contador++;
    crearInputSalario(contador);
    quitarListaErroresSueldos();
    mostrarBotonCalcular();

    event.preventDefault();
};

document.querySelector("#quitar").onclick = function(event) {

    contador--;
    quitarInputSalario(contador);
    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event) {
    const sueldos = obtenerSueldos();
    const errorSueldos = {};

    for(let i=0;i<sueldos.length;i++){
        errorSueldos[`Sueldo_${i+1}`] = validarSalario(sueldos[i]);
    }

    quitarListaErroresSueldos();

    const sueldosSinErrores = manejarErrores(errorSueldos) === 0;

    if (sueldosSinErrores) {
        mostrarCalculosSalarios("mayor", calcularSueldoMayor(sueldos));
        mostrarCalculosSalarios("menor", calcularSueldoMenor(sueldos));
        mostrarCalculosSalarios("promedio", calcularSueldoPromedio(sueldos));
        mostrarCalculosSalarios("promediomensual", calcularSueldoMensualPromedio(sueldos));
        mostrarDatos();
        mostrarBotonReset();
    }

    event.preventDefault();
};

document.querySelector("#resetear").onclick = () => {
    ocultarDatos();
    quitarListaErroresSueldos();
    ocultarBotonCalcular();
    ocultarBotonReset();
    quitarTodosLosInput();
    contador = 0;
};

function manejarErrores(errorSueldos){
    const keys = Object.keys(errorSueldos)
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach((errorSueldo) => {
        const error = errorSueldos[errorSueldo];

        if(error){
            cantidadErrores++;
            $form[errorSueldo].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[errorSueldo].className = '';
        }
    });
    return cantidadErrores;
};

function crearInputSalario(indice) {
    const $div = document.createElement('div');
    $div.className = 'salario-anual';

    const $label= document.createElement('label');
    $label.textContent = 'Ingrese salario Anual: ';

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = `Sueldo_${indice}`;

    $div.appendChild($label);
    $div.appendChild($input);

    const $salarios = document.querySelector('#salario');
    $salarios.appendChild($div);
};

function quitarInputSalario(indice) {
    const $salarios = document.querySelector(`#salario`).lastChild;
    $salarios.remove();
    if ($salarios.value === undefined) {
        $salarios.remove();
    } else if ($salarios.value === null) {
        ocultarBotonCalcular();
    };
};

function quitarListaErroresSueldos(){
    const $borrar = document.querySelectorAll('#errores li');
    $borrar.forEach((li) => {
        li.remove();
    });
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
    document.querySelector('#datos').classList = '';
};

function mostrarCalculosSalarios(tipo, valor){
    document.querySelector(`#${tipo}-sueldo`).textContent = valor;
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