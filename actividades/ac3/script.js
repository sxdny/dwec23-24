// // Actividad 3 - Calculadora de notas para el módulo DWEC

// // Actividad 3.1

// // declaración de variables
// let nomEstudiant = "Sidney Silva"
// let notaExamen1 = 10;
// let notaExamen2 = 10;
// let notaProjecte = 5;

// // Actividad 3.2

// // cálculo nota final
// let notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6)

// // Actividad 3.3
// console.log("Nombre del estudiante: " + nomEstudiant);
// console.log("Nota primer examen: " + notaExamen1);
// console.log("Nota segundo examen: " + notaExamen2);
// console.log("Nota proyecto: " + notaProjecte);
// console.log("Nota final: " + notaFinal);

// // Actividad 3.4

// // comprobar si ha aprobado el módulo (se aprueba con una nota mayor a 7)
// if(notaFinal >= 7 ) {
//     console.log("¡Felicidades! Ha aprobado el módulo.");
// }
// else {
//     console.log("Tendrás que mejorar la nota para aprobar el módulo.");
// }


let tabla = new Array(2);

for (let i = 0; i < 10; i++) {
    tabla[i] = [];
    for (let j = 0; j <= 10; j++) {
        tabla[i][j] = j;
    }
}

console.log(tabla);

for (let i = 0; i < 10; i++) {
    let multiplicador = tabla[i][i]; // 0, 1
    console.log("Tabla del " + i);
    for (let j = 0; j <= 10; j++) {
        if(multiplicador % 2 != 1) {
            console.log(multiplicador * tabla[i][j]); 
        }    
    }
}

