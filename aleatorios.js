
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

function generarAleatorios() {
    let aleatorios = [];

    let cantidad = recuperarInt("txtNumero");

    if (cantidad >= 5 && cantidad <= 20) {

        for (let i = 0; i < cantidad; i++) {
            console.log("Índice actual: " + i);

            let valorAleatorio = generarNumeroAleatorio();
            aleatorios.push(valorAleatorio);
        }
        mostrarResultados(aleatorios);

    } else {
        console.log("Error: El valor ingresado debe estar entre 5 y 20.");
    }
}

function mostrarResultados(arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NÚMEROS ALEATORIOS</th></tr>";
    let numeroActual;

    for (let i = 0; i < arregloNumeros.length; i++) {
        numeroActual = arregloNumeros[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += numeroActual;
        contenidoTabla += "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}