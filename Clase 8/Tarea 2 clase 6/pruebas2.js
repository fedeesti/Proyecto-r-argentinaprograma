function validarSalario(sueldo){
    if (sueldo < 0) {
        return 'El sueldo no puede ser negativo'
    }

    if (!/^[0-9]+$/.test(sueldo)){
        return 'El sueldo no debe tener decimales'
    }

    return '';
}

function probarValidarSalario(){
    console.assert(
        validarSalario(-2) === 'El sueldo no puede ser negativo',
        'Validar salario no funcionó porque el salario no puede ser negativo'
    )

    console.assert(1200.34) === 'El sueldo no debe tener decimales',
    'Validar salario no funcionó porque el sueldo no puede tener decimales'
}

probarValidarSalario();