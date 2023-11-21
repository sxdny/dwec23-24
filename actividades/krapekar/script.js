// tiene que dar este número?
let nKrapekar = 6174;

// pasos realizados
let pasos = 0;

// Pedimos el número al usuario y lo guardamos
let nUsuario = prompt("Escriba un número cualquier de mínimo 4 digitos. Debe haber como minomo 2 dígitos distintos.")

/*
    Funcion para validar el número, comprobando que:
    - Sea un número.
    - Que no tenga más de 4 dígitos.
    - Al menos 2 dígitos diferentes.
    - Un dígito que no se repita más de dos veces.
*/

if (!validarNumero(nUsuario)) {
    console.log("El número introducido no es válido!!!");
}
else {
    while (nUsuario != nKrapekar) {
        // mientras no sea el número de Krapekar

        // llamamos a la función kaprekar.
        nUsuario = krapekar(nUsuario);

        // aumentamos los pasos realizados
        pasos++;

        // validación

        // evitar bucles infinitos
        if (pasos > 7) {
            console.log("Número de pasos superado, algo no está bien...");
            break;
        }

        // Sí el número obtenido es el de Kaprekar, informamos
        // de los pasos realizados
        if (nUsuario == nKrapekar) {
            console.log(("Pasos realizados: " + pasos));
        }
    }
}

// otra función que realiza las operaciones necesarias para obtener el número de Krapekar pasandole como parámetro el número a tratar (el número del usario)
// Esta función devuelve el n obtenido.

function krapekar(nUsuario) {
    // creamos un array para poder tratar el número dígito a dígito.
    let arrayNumero = new Array();

    // tenemos que hacer una resta
    // creamos variables para guardar los números a restar
    let mayor, menor;

    // añadimos el número al array.

    // varias maneras de hacerlo

    // for -> Las cadenas / Strings se comportan como una array
    // for (let i = 0; i < nUsuario.length; i++) {
    //     arrayNumero[i] = numeros[i];
    // }

    // otro bucle for
    // for (let i = 0; i < nUsuario.length; i++) {
    //     arrayNumero[i] = nUsuario.charAt(i);
    // }

    // y otro bucle for
    for (let i = 0; i < nUsuario.length; i++) {
        arrayNumero.push(nUsuario.charAt(i));
    }

    // ordenamos el array con sort()
    // --> Quedará ordenado de menor a mayor
    arrayNumero.sort()

    // Guardamos en la variable "menor" el contenido
    // del array "unido"
    menor = uneDigitos(arrayNumero);

    // le damos la vuelta al array y, por lo tanto, al número.
    // arrayNumero.reverse();

    arrayNumero = daleLaVuelte(arrayNumero);

    // Guardamos en la variable mayor el contenido del array
    mayor = uneDigitos(arrayNumero); // está girado

    // Convertir cadenas a número
    // usaremos el +

    // Hacemos la resta
    nUsuario = mayor - menor; // al ser (-), entiende que son numeros
    // si fuese +, los concatenaria

    console.log(mayor + " - " + menor + " = " + nUsuario);

    return formateaNumeroACuatroDigitos(nUsuario.toString(), true);
}

/*
    Devuelve una cadena formada con los elementos del array
    pasado por parametro, tomados como carácteres desde el de
    menor indice hasta el último.
*/
function uneDigitos(arrayNumero) {

    let cadena = "";

    for (let i = 0; i < arrayNumero.length; i++) {
        cadena += arrayNumero[i];
    }

    return cadena;

}

/*
    Devuelve una array con los elementos cambiados simétricamente respecto al array pasado por parámetro.
    --> Darle la vuelta al array
*/
function daleLaVuelte(arrayNumero) {

    // array auxiliar
    let arrAux = new Array(arrayNumero.length);

    for (let j = 0; j < arrayNumero.length; j++) {
        arrAux[arrayNumero.length - 1 - j] = arrayNumero[j] // de última posición a primera
    }

    return arrAux;
}

// Function que añade ceros delante o detrás de una cadena que representa un valor numérico que necesariamente ha de tener cuatro dígitos
function formateaNumeroACuatroDigitos(nUsuario, esIzquierda) {
    if (esIzquierda) {
        if (nUsuario.length == 3) {
            nUsuario = "0" + nUsuario;
        }
        else if (nUsuario.length == 2) {
            nUsuario = "00" + nUsuario;
        }
        else if (nUsuario.length == 1) {
            nUsuario = "000" + nUsuario;
        }
    }
    // si es a la derecha
    else {
        if (nUsuario.length == 3) {
            nUsuario = nUsuario + "0";
        }
        else if (nUsuario.length == 2) {
            nUsuario = nUsuario + "00";
        }
        else if (nUsuario.length == 1) {
            nUsuario = nUsuario + "000";
        }
    }

    return nUsuario;
}

function validarNumero() {

    // comprobar que sea un número
    if (nUsuario == null || isNaN(nUsuario)) {
        return false;
    }

    // comprobar que no tenga más de 4 dígitos
    // if (nUsuario.length > 4) {
    //     return false;
    // }

    // otra manera para comprobar que no tenga más de 4 dígitos
    if (Number(nUsuario) > 9999 || +nUsuario <= 22) {
        return false;
    }

    // primera manera de convertir número a un array
    // const numeros = Array.from(String(nUsuario), Number);

    // segunda manera para convertir número a array
    // const numeros = nUsuario.split("")

    // tercera manera
    const numeros = [...nUsuario]

    // comprobar que dos dígitos sean diferentes
    const setNumeros = new Set(nUsuario);
    console.log(setNumeros); // en el set solo se almacena numeros diferentes porque este no permite duplicados

    // tiene que tener mínimo dos dígitos distintos
    if (setNumeros.size < 2) {
        return false;
    }

    console.log(numeros);

    return true;

}