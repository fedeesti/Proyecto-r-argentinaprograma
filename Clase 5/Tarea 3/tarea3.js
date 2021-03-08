
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector('#calcular').onclick = function() {
    const $horas = document.querySelectorAll('#horas');
    const $minutos = document.querySelectorAll('#minutos');
    const $segundos = document.querySelectorAll('#segundos');

    let tiempo = 0;

    for(let i = 0; i < 5; i++) {
       tiempo += Number($horas[i].value) * 3600 + Number($minutos[i].value) * 60 + Number($segundos[i].value);
    };

    let segundos = tiempo % 60;
    tiempo = Math.trunc(tiempo / 60);
    let minutos = tiempo % 60;
    let horas = Math.trunc(tiempo / 60);
    
    $resultado =  `${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    document.querySelector('#resultado').innerText = $resultado;

    return false;
};
