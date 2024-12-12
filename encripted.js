function verificarClave() {
    const claveIngresada = document.getElementById('clave').value;
    const claveCorrecta = 'x1a6lqB*';
    const resultado = document.getElementById('resultado');

    if (claveIngresada === claveCorrecta) {
        resultado.textContent = 'B A S E D';
        const mensajeExito = document.createElement('p');
        mensajeExito.textContent = 'MESSAGE DECRIPTED';
        mensajeExito.classList.add('success');
        resultado.appendChild(mensajeExito);
    } else {
        resultado.textContent = 'MESSAGE ERROR, use the Key Acquired';
        resultado.classList.add('error');
    }
}