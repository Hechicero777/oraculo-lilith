// NÚCLEO LILITH - LOGICA DE CONSOLA V1.0
console.log("Oráculo Lilith: Sistema Activo");

function procesarComando(input) {
    let output = document.getElementById('lilith-log');
    let fecha = new Date().toLocaleTimeString();
    output.innerHTML += `<p style='color:#0f0'>[${fecha}] > Analizando: ${input}...</p>`;
    
    // El comando se envía a la interfaz
    if(input.toLowerCase() === "status") {
        output.innerHTML += "<p style='color:#00ffff'>[SISTEMA]: Operacional - Esperando órdenes de NEO.</p>";
    }
}
