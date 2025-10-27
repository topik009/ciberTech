let valorContador = 0;

function incrementar() {
    valorContador++;
    document.getElementById("numero").textContent = valorContador;
}

function decrementar() {
    if (valorContador > 0){
        valorContador--;
        document.getElementById("numero").textContent = valorContador;
    }
}