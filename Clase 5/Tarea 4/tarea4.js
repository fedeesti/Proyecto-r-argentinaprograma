/* 
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
 */


/* const $array = document.querySelectorAll('li');
    console.log($array); */


 document.querySelector('#calcular').onclick = function() {
     
    const $array = document.querySelectorAll('li');
    
    let promedio = 0;
    let mayor = 0;
    let menor = Number($array[0].innerText);
    let numeroMasFrecuente = 0;

    for (let i = 0; i < $array.length; i++) {

        if (mayor < Number($array[i].innerText)) {
            mayor = Number($array[i].innerText);
        };

        if (menor > Number($array[i].innerText)) {
            menor = Number($array[i].innerText);
        };

        promedio += Number($array[i].innerText);
    }; 

    let repeticiones = 0;

    for (let j = 0; j < $array.length; j++) {
        let contador = 0;
        for (let k = 1; k < $array.length; k++) {
            if (Number($array[j].innerText) === Number($array[k].innerText)) {
                contador++;
            };
        };
        if (contador > repeticiones) {
            repeticiones = contador;
            numeroMasFrecuente = Number($array[j].innerText);
        };

    };

    promedio = promedio / $array.length;

    document.querySelector('#promedio').innerText = `El promedio es ${promedio}.`;
    document.querySelector('#menor').innerText = `El número más pequeño es ${menor}`;
    document.querySelector('#mayor').innerText = `El número más grande es ${mayor}`;
    document.querySelector('#numero-mas-repetido').innerText = `El número más frecuente es ${numeroMasFrecuente} y se repite ${repeticiones} veces`;


    return false;
 };