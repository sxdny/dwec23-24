// obtener los elementos del documento HTML

const app = document.getElementById('app');

const teclado = document.getElementById('teclado');

const titulo = document.getElementsByClassName('titulo');
const palabra = document.getElementsByClassName('palabra');

const erroresDOM = document.getElementById('errores');
const intentosDOM = document.getElementById('intentos');

const wordToGuessDOM = document.getElementById('wordToGuess');


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
            "Países Bajos"
        ]
    }
];

// seleccionar una palabra random después que el usuario haya elegido el tipo de palabra que quiere.

let wordToGuess = arrPalabras[opcUsuario].palabras[Math.floor(Math.random() * arrPalabras[opcUsuario].palabras.length)];

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
        
        if(checkWord()) {
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
        console.log("Palabra completa.");
        teclado.classList.add("d-none");
    }
}