let btnIniciar = document.getElementById('iniciar')
let btnParar = document.getElementById('parar')
let btnReiniciar = document.getElementById('reiniciar')

let elCrono;

btnIniciar.addEventListener("click", function () {
    elCrono = setInterval(crono, 1000)
})

btnParar.addEventListener("click", function () {
    clearInterval(elCrono)
})

btnReiniciar.addEventListener("click", function () {
    tiempo.innerHTML = "0:0:0";
    h = 0;
    min = 0;
    s = 0;

    clearInterval(elCrono)

})

let h = 0;
let min = 0;
let s = 0;

function crono() {

    function cronometro() {

        let tiempo = document.getElementById('tiempo') // 00:00:00

        s++;

        if (s > 59) {
            s = 0;
            min++;

            if (min > 59) {
                min = 0;
                h++;
            }
        }

        console.log(h + ":" + min + ":" + s)
        tiempo.innerHTML = h + ":" + min + ":" + s
    }

    cronometro()

}
