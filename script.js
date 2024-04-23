let arrayFoto = document.querySelectorAll(".foto");
let arrayAnteprima = document.querySelectorAll(".fotoAnteprima");
let fotoAttiva;
let fotoSelezionata;
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
        fotoSelezionata = arrayFoto.length - 1;
    } else {
        fotoSelezionata = fotoAttiva - 1;
    }

    //attivo la foto precedente
    arrayFoto[fotoSelezionata].classList.add("active");
    //attivo l'anteprima precedente
    arrayAnteprima[fotoSelezionata].classList.add("anteprimaActive");

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
        fotoSelezionata = 0;
    } else {
        fotoSelezionata = fotoAttiva + 1;
    }

    //attivo la foto successiva
    arrayFoto[fotoSelezionata].classList.add("active");

    //attivo l'anteprima successiva
    arrayAnteprima[fotoSelezionata].classList.add("anteprimaActive");

    //stampo in pagina l'array foto per controllo
    console.log(arrayFoto);
})
