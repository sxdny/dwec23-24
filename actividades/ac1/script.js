/*
Enunciado:

Se nos facilitan 3 variables que contienen información sobre una ciudad: 
    - boolean (es capital)
    - numero_ciudadano (numero)
    - impuesto_por_ciudadano (float / number).

La variable "es_capital" sera cierta si y solo si la ciudad es capital.
La variable "numero_ciudadanos" es el nº del ciudadanos de esa ciudad.
La variables impuesto por ciudadano es el impuesto medio mensual que paga un ciudadano de esa ciudad.

Para nosotros, una metrópolis será una ciudad si bien:
    - Es una capital con más de 100k ciudadanos.

o si:

    - Es una ciudad con + de 200k ciudadanos y una renta media de 720M / año.

Pregunta:

Da una expresión booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una metrópolis.
*/

// Constantes del enunciado.
const esCapital = true;
const numero_ciudadanos_minimo = 100000;
const numero_ciudadanos_minimo_dos = 200000;
const impuesto_medio_minimo = 720000000;

// Variables de una ciudad x que he elegido para comparar
// los datos (En este caso Madrid)

let ipc_madrid = 2500.30 * 12; // Porqué se compara con la media anual
let n_habitantes_madrid = 200000;
let impc_madrid = ipc_madrid * n_habitantes_madrid; // Para calcular renta media.
let capital = true;

// Respuesta:

if (capital == esCapital && n_habitantes_madrid >= numero_ciudadanos_minimo || n_habitantes_madrid >= numero_ciudadanos_minimo_dos && impc_madrid >= impuesto_medio_minimo) {
    console.log("La ciudad es una matrópolis.");
}
else {
    console.log("La ciudad NO es una metrópolis.");
}


