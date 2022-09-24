/* calculadora


*/

function calcular() {
    let op1;
    let op2;
    let operacion;
    let resultado;

    //leer op1
    op1 = document.getElementById('op1').value;
    operacion = document.getElementById('operacion').value;
    op2 = document.getElementById('op2').value;

    console.log('op1 vale : ', op1);
    console.log('operacion vale : ', operacion);
    console.log('op2 vale : ', op2);

    if (operacion === '+') {
        resultado = parseInt(op1) + parseInt(op2);
    }
    if (operacion === '-') {
        resultado = parseInt(op1) - parseInt(op2);
    }
    if (operacion === '/') {
        if (parseInt(op2) != 0) {
            resultado = parseInt(op1) / parseInt(op2);
        } else {
            alert('El divisor no puede ser cero(0)');
            console.log('El divisor no puede ser cero(0)');

        }
    }
    if (operacion === '*') {
        resultado = parseInt(op1) * parseInt(op2);
    }
    console.log('resultado: ',
        resultado);
    document.getElementById('resultado').innerHTML = resultado;
}

function borrar() {
    document.getElementById('op1').value = null;
    document.getElementById('operacion').value = null;
    document.getElementById('op2').value = null;
    document.getElementById('resultado').innerHTML = null;
}