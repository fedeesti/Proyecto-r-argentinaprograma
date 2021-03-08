function validarEdadIntegrantes(edad){
        if (edad <= 0) {
            return 'La edad del integrante debe ser mayor a 0';
        }
        if (!/^[0-9]+$/.test(edad)) {
            return 'La edad no debe tener decimales';
        }
        return '';
}

 function probarValidarEdadIntegrantes(){
    console.assert(
        validarEdadIntegrantes(0) === 'La edad del integrante debe ser mayor a 0',
        'Validar edades no funcionó porque la edad es 0 o negativo'
    )

    console.assert(
        validarEdadIntegrantes(56.7) === 'La edad no debe tener decimales',
        'Validar edades no funcionó porque la edad tiene decimales'
    )
}

probarValidarEdadIntegrantes();