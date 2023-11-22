// obtenemos los elementos del documento HTML
const contenidor     = document.querySelector(".contenidor");
const seients        = document.querySelectorAll(".fila .asientos:not(.ocupado)");
const contador       = document.getElementById("contador");
const total          = document.getElementById("total");

const peliculaSelect = document.getElementById("pelicula");

// precio de la pelicula seleccionada
let preuDelTicket = +peliculaSelect.value;

// funciones
function actualitzaSeleccioSeients() {
    const seientsSeleccionats = document.querySelectorAll(
        ".fila .asiento.seleccionado"
    );

    // const seientsIndex = [...seientsSeleccionats].map(function (seient) {
    //   return [...seients].indexOf(seient);
    // });
    const seientsIndex = [...seientsSeleccionats].map((seient) =>
        [...seients].indexOf(seient)
    );

    localStorage.setItem("asientosSeleccionados", JSON.stringify(seientsIndex));

    const contadorSeientsSeleccionats = seientsSeleccionats.length;
    contador.innerText = contadorSeientsSeleccionats;

    total.innerText = contadorSeientsSeleccionats * preuDelTicket;
}

function ompleuUi() {
    const seientsSeleccionats = JSON.parse(
        localStorage.getItem("asientosSeleccionados")
    );
    if (seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
        seients.forEach((seient, index) => {
            if (seientsSeleccionats.indexOf(index) > -1) {
                seient.classList.add("seleccionado");
            }
        });
    }

    const indexPeliculaSeleccionada = localStorage.getItem(
        "indexPeliculaSeleccionada"
    );
    if (indexPeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem(
        "preuPeliculaSeleccionada"
    );

    if (preuPeliculaSeleccionada !== null) {
        preuDelTicket = +preuPeliculaSeleccionada;
    }
}

contenidor.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("asiento") &&
        !e.target.classList.contains("ocupado")
        )
    {
        e.target.classList.toggle("seleccionado");
        actualitzaSeleccioSeients();
    }
});

peliculaSelect.addEventListener("change", (e) => {
    preuDelTicket = +e.target.value;

    localStorage.setItem("indexPeliculaSeleccionada", e.target.selectedIndex);
    localStorage.setItem("preuPeliculaSeleccionada", e.target.value);
    actualitzaSeleccioSeients();
});

actualitzaSeleccioSeients();