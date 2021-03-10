function calcularSueldoMayor(sueldo) {
    let mayorSueldo = sueldo[0];
    for (let i = 1; i < sueldo.length; i++){
        if (sueldo[i] > mayorSueldo) {
            mayorSueldo = sueldo[i];
        };
    };
    return mayorSueldo;
};

function calcularSueldoMenor(sueldo) {
    let menorSueldo = sueldo[0];
    for (let i = 1; i < sueldo.length; i++) {
        if (sueldo[i] < menorSueldo) {
            menorSueldo = sueldo[i];
        };
    };
    return menorSueldo;
};

function calcularSueldoPromedio(sueldo) {
    let promedioAnual = 0;
    for (let i = 0; i < sueldo.length; i++) {
        promedioAnual += sueldo[i];
    };
    return (promedioAnual / sueldo.length).toFixed(2);
};

function calcularSueldoMensualPromedio(sueldo) {
    let promedioMensual = 0;
    for (let i = 0; i < sueldo.length; i++) {
        promedioMensual += sueldo[i] / 12;
    };
    return (promedioMensual / sueldo.length).toFixed(2);
};