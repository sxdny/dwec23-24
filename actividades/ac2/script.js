// Actividad 2 JS - Conversión y análisis de las temperaturas
// Sidney Silva Braz de Oliveira 2º DAW

// Actividad 2.1.

// media temperaturas 2010
const any2010Juny = 25.8;
const any2010Juliol = 28.6;
const any2010Agost = 30.1;

// media temperaturas 2015
const any2015Juny = 26.5;
const any2015Juliol = 29.3;
const any2015Agost = 30.1;

// media temperaturas 2020
const any2020Juny = 27.2;
const any2020Juliol = 29.9;
const any2020Agost = 31.5;

// Actividad 2.2

// declaración variables y cálculo de las medias de cada año
let mitjanaAny2010 = (any2010Agost + any2010Juliol + any2010Juny) / 3;
let mitjanaAny2015 = (any2015Agost + any2015Juliol + any2015Juny) / 3;
let mitjanaAny2020 = (any2020Agost + any2020Juliol + any2020Juny) / 3;

// si ha superado los 30 grados, mensaje que sí lo ha hecho
// sino, mensaje de que no lo ha hecho

mitjanaAny2010 > 30 ? console.log("La media del año 2010 es mayor a 30 grados Celsius.") : console.log("La media del año 2010 NO es mayor a 30 grados Celsius.");

mitjanaAny2015 > 30 ? console.log("La media del año 2015 es mayor a 30 grados Celsius.") : console.log("La media del año 2015 NO es mayor a 30 grados Celsius.");

mitjanaAny2020 > 30 ? console.log("La media del año 2020 es mayor a 30 grados Celsius.") : console.log("La media del año 2020 NO es mayor a 30 grados Celsius.");


// Actividad 2.3

// declaración variables y cálculo de celsius a fahrenheit
let mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9 / 5) + 32;
let mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9 / 5) + 32;
let mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9 / 5) + 32;

// eclaración variables y cálculo de celsius a kelvin
let mitjanaAny2010Kelvin = mitjanaAny2010 + 273.5;
let mitjanaAny2015Kelvin = mitjanaAny2015 + 273.5;
let mitjanaAny2020Kelvin = mitjanaAny2020 + 273.5;

// Actividad 2.4

// declaración de las variables
let superatAny2010 = false;
let superatAny2015 = false;
let superatAny2020 = false;

// si ha superado los 30 grados, = true; sino, = false:

mitjanaAny2010 > 30 ? superatAny2010 = true : superatAny2010 = false;
mitjanaAny2015 > 30 ? superatAny2015 = true : superatAny2015 = false;
mitjanaAny2020 > 30 ? superatAny2020 = true : superatAny2020 = false;

// Actividad 2.5

// mensajes mostrando las temperaturas y si superaron los 30 grados:

console.log("La temperatura media del año 2010 en Celsius es de: " + mitjanaAny2010);
console.log("La temperatura media del año 2010 en Fahrenheit es de: " + mitjanaAny2010Fahrenheit);
console.log("La temperatura media del año 2010 en Kelvin es de: " + mitjanaAny2010Kelvin);
console.log("¿Superó los 30 grados Celsius? " + superatAny2010);

console.log("La temperatura media del año 2015 en Celsius es de: " + mitjanaAny2015);
console.log("La temperatura media del año 2015 en Fahrenheit es de: " + mitjanaAny2015Fahrenheit);
console.log("La temperatura media del año 2015 en Kelvin es de: " + mitjanaAny2015Kelvin);
console.log("¿Superó los 30 grados? " + superatAny2015);

console.log("La temperatura media del año 2020 en Celsius es de: " + mitjanaAny2020);
console.log("La temperatura media del año 2020 en Fahrenheit es de: " + mitjanaAny2020Fahrenheit);
console.log("La temperatura media del año 2020 en Kelvin es de: " + mitjanaAny2020Kelvin);
console.log("¿Superó los 30 grados? " + superatAny2020);








