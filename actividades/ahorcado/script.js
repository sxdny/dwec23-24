// obtener los elementos del documento HTML

const app = document.getElementById('app');

const titulo = document.getElementsByClassName('titulo');
const palabra = document.getElementsByClassName('palabra');

// array de botones del documento
const botones = document.getElementsByClassName('letra');

let matrizPalabras = [

]

let palabras = [

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

console.log(palabras)

// hay que iterar los botones, porqué hay varios
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", (e) => {
        if (
            e.target.classList.contains("letra") &&
            !e.target.classList.contains("seleccionada")
        ) {
            e.target.classList.toggle("seleccionada");
            // tenemos el "valor de las letras"
            console.log(e.target.innerHTML);
        }
    });
}
