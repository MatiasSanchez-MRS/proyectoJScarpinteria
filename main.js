//Bievenida al usuario
alert("Bienvenido al simulador de presupuestos para una carpintería");

// Solicitar el tipo de mueble
let mueble = prompt("¿Qué mueble va a construir?");
console.log("Tipo de mueble:", mueble);

// Solicitar tipo de madera
let tipoMadera;
do {
    tipoMadera = prompt("Elija el tipo de madera que va a utilizar:\n1. Aglomerado\n2. MDF\n3. Pino");
    switch (tipoMadera) {
        case "1":
            tipoMadera = "Aglomerado";
            break;
        case "2":
            tipoMadera = "MDF";
            break;
        case "3":
            tipoMadera = "Pino";
            break;
        default:
            alert("Por favor, ingrese una opción válida (1, 2 o 3).");
            tipoMadera = null;
    }
} while (!tipoMadera);

//Solicitar las medidas del mueble

const solicitarNumero = (mensaje) => {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero) || numero <= 0) {
            alert('Por favor, ingrese un valor numérico positivo válido.');
        }
    } while (isNaN(numero) || numero <= 0);
    return numero;
};
// ...existing code...


// Solicitar las medidas de las tablas del mueble
let tablas = [];
let agregarOtra = true;

while (agregarOtra) {
    let largo = solicitarNumero("Ingrese el LARGO de la tabla (en metros):");
    let ancho = solicitarNumero("Ingrese el ANCHO de la tabla (en metros):");
    tablas.push({ largo: largo, ancho: ancho });
    agregarOtra = confirm("¿Desea agregar otra tabla?");
}

// Calcular el área total en metros cuadrados
let areaTotal = 0;
for (let i = 0; i < tablas.length; i++) {
    areaTotal += tablas[i].largo * tablas[i].ancho;
}
console.log("Área total del mueble en m2:", areaTotal);


// Preguntar por herrajes
let cantidadBisagras = 0;
let cantidadTiradores = 0;
let cantidadCorrederas = 0;

if (confirm("¿El mueble lleva bisagras cazoleta?")) {
    cantidadBisagras = solicitarNumero("¿Cuántas bisagras cazoleta necesita?");
}
if (confirm("¿El mueble lleva tiradores?")) {
    cantidadTiradores = solicitarNumero("¿Cuántos tiradores necesita?");
}
if (confirm("¿El mueble lleva correderas de cajón?")) {
    cantidadCorrederas = solicitarNumero("¿Cuántas correderas de cajón necesita?");
}

console.log("Cantidad de bisagras cazoleta:", cantidadBisagras);
console.log("Cantidad de tiradores:", cantidadTiradores);
console.log("Cantidad de correderas de cajón:", cantidadCorrederas);

let acabado = "Sin acabado";
if (confirm("¿El mueble va pintado/barnizado?")) {
    acabado = "Pintado/Barnizado";
}

console.log("Tipo de acabado:", acabado);

let metrosTapacanto = 0;
if (confirm("¿El mueble lleva tapacanto?")) {
    metrosTapacanto = solicitarNumero("¿Cuántos metros de tapacanto necesita?");
}

console.log("Metros de tapacanto:", metrosTapacanto);

// Preguntar cantidad de días de trabajo
let diasTrabajo = solicitarNumero("¿Cuántos días de trabajo supone que le llevará fabricar el mueble?");

// Preguntar si desea agregar un plus por trabajo complejo
let trabajoComplejo = false;
if (confirm("¿Desea agregar un plus por trabajo complejo?")) {
    trabajoComplejo = true;
}

console.log("Días de trabajo estimados:", diasTrabajo);
console.log("¿Trabajo complejo?:", trabajoComplejo);

// Constantes de precios
const PRECIO_M2_AGLOMERADO = 12610;
const PRECIO_M2_MDF = 21017;
const PRECIO_M2_PINO = 18611;
const PRECIO_BISAGRA = 750;
const PRECIO_TIRADOR = 1300;
const PRECIO_CORREDERA = 2500;
const PRECIO_TAPACANTO_METRO = 1200;
const PRECIO_PINTADO_BARNIZADO_M2 = 3000;
const PRECIO_MANO_OBRA_DIA = 45000;
const PLUS_TRABAJO_COMPLEJO = 10000; // puedes ajustar este valor

// Calcular costo de la madera
let costoMadera = 0;
switch (tipoMadera) {
    case "Aglomerado":
        costoMadera = areaTotal * PRECIO_M2_AGLOMERADO;
        break;
    case "MDF":
        costoMadera = areaTotal * PRECIO_M2_MDF;
        break;
    case "Pino":
        costoMadera = areaTotal * PRECIO_M2_PINO;
        break;
}

// Calcular costo de herrajes
let costoHerrajes = (cantidadBisagras * PRECIO_BISAGRA) +
                    (cantidadTiradores * PRECIO_TIRADOR) +
                    (cantidadCorrederas * PRECIO_CORREDERA);

// Calcular costo de tapacanto
let costoTapacanto = metrosTapacanto * PRECIO_TAPACANTO_METRO;

// Calcular costo de acabado
let costoAcabado = 0;
if (acabado === "Pintado/Barnizado") {
    costoAcabado = areaTotal * PRECIO_PINTADO_BARNIZADO_M2;
}

// Calcular mano de obra
let costoManoObra = diasTrabajo * PRECIO_MANO_OBRA_DIA;
if (trabajoComplejo) {
    costoManoObra += PLUS_TRABAJO_COMPLEJO;
}

// Sumar todos los costos
let costoTotal = costoMadera + costoHerrajes + costoTapacanto + costoAcabado + costoManoObra;

// Calcular otros gastos (30% del costo total)
let otrosGastos = costoTotal * 0.3;

// Calcular el presupuesto final
let presupuestoFinal = costoTotal + otrosGastos;

// Mostrar el presupuesto
alert(
    `Presupuesto estimado:\n\n` +
    `Madera: $${costoMadera}\n` +
    `Herrajes: $${costoHerrajes}\n` +
    `Tapacanto: $${costoTapacanto}\n` +
    `Acabado: $${costoAcabado}\n` +
    `Mano de obra: $${costoManoObra}\n` +
    `Otros gastos: $${otrosGastos}\n` +
    `TOTAL: $${presupuestoFinal}`
);

console.log("Presupuesto estimado:", presupuestoFinal);




