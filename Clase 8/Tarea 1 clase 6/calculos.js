function calcularMayor(edades) {
    let mayor = edades[0];

    for (let i = 0; i < edades.length; i++){

        if (mayor < edades[i]) {
            mayor = edades[i];
        };
    };

    return mayor;
};

function calcularMenor(edades) {
    let menor = edades[0];

    for (let i = 0; i < edades.length; i++){

        if (menor > edades[i]) {
            menor = edades[i];
        };
    };

    return menor;
};

function calcularPromedio(edades) {
    let promedio = 0;

    for (let i = 0; i < edades.length; i++){
        promedio += edades[i];
    };

    return (promedio / edades.length).toFixed(2);
};