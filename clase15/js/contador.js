/* Contador */
function incrementar() {
    const contadorLabel = document.getElementById('contador');
    let contadorValor = parseInt(contadorLabel.innerHTML);
    contadorValor++;
    contadorLabel.innerHTML = contadorValor;
    paridad(contadorValor);
}

function decrementar() {
    const contadorLabel = document.getElementById('contador');
    let contadorValor = parseInt(contadorLabel.innerHTML);

    contadorValor--;
    contadorLabel.innerHTML = contadorValor;
    paridad(contadorValor);
}

function paridad(numero) {
    const paridadLabel = document.getElementById('paridad');
    paridadLabel.style.display = 'none';
    if (numero === 0) {
        paridadLabel.innerHTML = '';
        paridadLabel.style.display = 'none';
    } else {
        if ((numero % 2) === 0) {
            paridadLabel.innerHTML = 'PAR';
            paridadLabel.style.display = '';
        } else {
            paridadLabel.innerHTML = 'IMPAR';
            paridadLabel.style.display = '';
        }
    }


}