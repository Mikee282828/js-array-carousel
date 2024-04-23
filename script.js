let arrayFoto = document.querySelectorAll(".foto");
let arrayAnteprima = document.querySelectorAll(".fotoAnteprima");
let fotoAttiva;
let fotoSuccessiva;
let fotoPrecedente;
const tastoSuccessivo = document.querySelector(".successivo");
const tastoPrecedente = document.querySelector(".precedente");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tastoPrecedente.addEventListener("click", function () {

    //cerco la foto attualmente attiva
    for (let i = 0; i < arrayFoto.length; i++) {
        if (arrayFoto[i].classList.contains("active")) {
            fotoAttiva = i;
            arrayFoto[i].classList.remove("active");
            arrayAnteprima[i].classList.remove("anteprimaActive");
        }
    }
    //cerco l'indice della foto precedente
    if (fotoAttiva == 0) {
        fotoPrecedente = arrayFoto.length - 1;
    } else {
        fotoPrecedente = fotoAttiva - 1;
    }

    //attivo la foto precedente
    arrayFoto[fotoPrecedente].classList.add("active");
    //attivo l'anteprima precedente
    arrayAnteprima[fotoPrecedente].classList.add("anteprimaActive");

    //stampo in pagina l'array foto per controllo
    console.log(arrayFoto);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tastoSuccessivo.addEventListener("click", function () {
    
    //cerco la foto attualmente attiva
    for (let i = 0; i < arrayFoto.length; i++) {
        if (arrayFoto[i].classList.contains("active")) {
            fotoAttiva = i;
            arrayFoto[i].classList.remove("active");
            arrayAnteprima[i].classList.remove("anteprimaActive");
        }
    }
    //cerco l'indice della foto successiva
    if (fotoAttiva + 1 == arrayFoto.length) {
        fotoSuccessiva = 0;
    } else {
        fotoSuccessiva = fotoAttiva + 1;
    }

    //attivo la foto successiva
    arrayFoto[fotoSuccessiva].classList.add("active");

    //attivo l'anteprima successiva
    arrayAnteprima[fotoSuccessiva].classList.add("anteprimaActive");

    //stampo in pagina l'array foto per controllo
    console.log(arrayFoto);
})
