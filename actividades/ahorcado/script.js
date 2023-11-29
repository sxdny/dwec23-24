// obtener los elementos del documento HTML

const app = document.getElementById('app');

const teclado = document.getElementById('teclado');

const titulo = document.getElementsByClassName('titulo');
const palabra = document.getElementsByClassName('palabra');

const tiempoDOM = document.getElementById('tiempo');

const startGame = document.getElementById('startGame');
const reset = document.getElementById('reset');
const mensaje = document.getElementById('mensaje');
const mensajeFinal = document.getElementById('mensajeFinal');

const erroresDOM = document.getElementById('errores');
const intentosDOM = document.getElementById('intentos');

const palabraDOM = document.getElementById('palabra');
const wordToGuessDOM = document.getElementById('wordToGuess');

let contador;


// array de botones del documento
const botones = document.getElementsByClassName('letra');

let opcUsuario = 0;

let arrPalabras = [

    {
        "tipo": "tech",
        "palabras": [
            "Ordenador",
            "Monitor",
            "Cable",
            "Teclado",
            "Raton"
        ]
    },
    {
        "tipo": "paises",
        "palabras": [
            "España",
            "Suecia",
            "Albania",
            "Montenegro",
            "Paises Bajos"
        ]
    }
];

// randomizar el opcUsuario
// de momento es así, pero luego será con un prompt
opcUsuario = Math.floor(Math.random() * arrPalabras.length);

// seleccionar una palabra random después que el usuario haya elegido el tipo de palabra que quiere.

// función que convierte una letra de la palabra random con tilde a una letra sin tilde
// function convertirLetraTilde(letra) {
//     switch (letra) {
//         case "á":
//             return "a";
//         case "é":
//             return "e";
//         case "í":
//             return "i";
//         case "ó":
//             return "o";
//         case "ú":
//             return "u";
//         case "ü":
//             return "u";
//         default:
//             return letra;
//     }
// }

let wordToGuess = arrPalabras[opcUsuario].palabras[Math.floor(Math.random() * arrPalabras[opcUsuario].palabras.length)];

// mostrar la palabra en la consola
console.log("Palabra a averiguar: ", wordToGuess);

// convertir la palabra a array
wordToGuess = wordToGuess.split("");

// este split es simplementa para mostrar bien la palabra
// mostrar la palabra en el DOM
wordToGuess.forEach(() => {
    wordToGuessDOM.innerHTML += `<li>?</li>`;
});

let intentos = 0;
let errores = 0;

// hay que iterar los botones, porqué hay varios
for (let i = 0; i < botones.length; i++) {

    botones[i].addEventListener("click", (e) => {
        checkLetter(e.target.innerHTML.toLowerCase());

        if (checkLetter(e.target.innerHTML)) {
            e.target.classList.add("letra-correcta");
            // deshabilitar el botón
            e.target.setAttribute("disabled", "disabled");
        }
        else {
            errores++;
            erroresDOM.innerHTML = errores;
            e.target.classList.add("letra-incorrecta");
            // deshabilitar el botón
            e.target.setAttribute("disabled", "disabled");
        }


        intentos++;
        intentosDOM.innerHTML = intentos;

        if (checkWord()) {
            console.log("Has ganado!");
            console.log(teclado);

        }
    });

    botones[i].addEventListener("click", (e) => {
        if (
            e.target.classList.contains("letra") &&
            !e.target.classList.contains("seleccionada")
        ) {
            e.target.classList.toggle("seleccionada");

        }
    });
}

// función que comprueba si la letra está en la palabra
function checkLetter(letter) {
    if (wordToGuess.includes(letter.toLowerCase()) || wordToGuess.includes(letter.toUpperCase())) {
        console.log("Letra correcta.");
        // mostrar por pantalla
        // recorrer el array de la palabra
        wordToGuess.forEach((letraAdivinar, index) => {
            if (letraAdivinar.toLowerCase() === letter.toLowerCase()) {
                // mostrar la letra en el DOM
                wordToGuessDOM.children[index].innerHTML = letraAdivinar;
            }
        });
        return true;
    }
    else {
        console.log("Letra incorrecta.");
        return false;
    }
}

// función que comprueba si la palabra está completa
function checkWord() {
    // recorrer el array de la palabra
    let palabraCompleta = true;

    let palabrasDOM = wordToGuessDOM.children;

    // solo se puede iterar asi?
    for (let i = 0; i < palabrasDOM.length; i++) {
        if (palabrasDOM[i].innerHTML === "?") {
            palabraCompleta = false;
        }
    }

    if (palabraCompleta) {
        clearInterval(contador);
        console.log("Se acabó el tiempo.", contador);
        console.log("Palabra completa.");
        teclado.classList.add("d-none");

        // mensaje de ganador
        mensaje.classList.remove("d-none");
        mensajeFinal.innerHTML = "Has ganado!";

    }
}

// función para que cuando el jugador empieze a jugar, se inicie un contador de tiempo

function tiempo() {
    let tiempo = 180;
    let minutos = 0;
    let segundos = 0;
    contador = setInterval(() => {
        tiempo= tiempo - 30;

        segundos = tiempo % 60;
        minutos = Math.floor(tiempo / 60);

        if (tiempo < 60) {
            tiempoDOM.classList.add("contador-peligro");
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        if (tiempo <= 0) {
            clearInterval(contador);
            mensaje.classList.remove("d-none");
            mensajeFinal.innerHTML = "Se acabó el tiempo!";
            mensajeFinal.classList.add("text-danger");
            teclado.classList.add("d-none");
            palabraDOM.classList.add("d-none");
        }

        tiempoDOM.innerHTML = minutos + ":" + segundos;
    }, 1000);
}

// función para que cuando el jugador empieze a jugar, se inicie un contador de tiempo
startGame.addEventListener("click", () => {
    tiempo();
    startGame.classList.add("d-none");
    teclado.classList.remove("d-none");
    palabraDOM.classList.remove("d-none");
    wordToGuessDOM.classList.remove("d-none");
});


// Cambia el color de fondo del body cuando el mouse pasa por encima del botón
startGame.addEventListener('mouseover', function () {
    document.body.classList.add('hoverStartGame');
});

// Cambia el color de fondo del body de nuevo al original cuando el mouse sale del botón
startGame.addEventListener('mouseout', function () {
    document.body.classList.remove('hoverStartGame');
});

// función para resetear el juego
reset.addEventListener("click", () => {
    // volver a generar una palabra random
    // de momento hará el reset de la página
    location.reload();
});