let arrayFoto = document.querySelectorAll(".foto");

//stampo in pagina l'array foto per controllo
console.log(arrayFoto);

//cerco la foto attualmente attiva
for (let i = 0; i < arrayFoto.length; i++) {
    if(arrayFoto[i].classList.contains("active")){
        console.log("l'elemento n "+i+" è l'immagine attiva!");
    }
}