function verificarBateria() {
    for (;;) {
    let valor = prompt("Ingresa el nivel de batería:");

        if (!isNaN(valor) && valor !== "") {
        const nivel = parseInt(valor);
    
        if (nivel === 100) {
            return("La batería está totalmente cargada.");
        } else if (nivel >= 60 && nivel <= 99) {
            return("La batería tiene buena carga.");
        } else if (nivel >= 30 && nivel < 60) {
            return("Tienes que poner la batería a cargar.");
        } else if (nivel < 30) {
            return("La batería está muy baja, debes cargarla de inmediato.");
        } else if(nivel < 0 || nivel > 100) {
            return("Valor de batería inválido.");
        }
        break;
        } else {
        alert("Tienes que ingresar un número.");
        }
    }
}

  // Llamamos a la función para iniciar el proceso
let bateria = verificarBateria();
alert(bateria);

