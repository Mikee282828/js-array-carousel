let arrayFoto = document.querySelectorAll(".foto");
let fotoAttiva;
let fotoSuccessiva;
let fotoPrecedente;
//stampo in pagina l'array foto per controllo
console.log(arrayFoto);

//cerco la foto attualmente attiva
for (let i = 0; i < arrayFoto.length; i++) {
    if(arrayFoto[i].classList.contains("active")){
        fotoAttiva = i;
        arrayFoto[i].classList.remove("active");
    }
}
//cerco l'indice della foto successiva e della foto precedente
if(fotoAttiva+1 == arrayFoto.length){
    fotoSuccessiva = 0;
}else{
    fotoSuccessiva = fotoAttiva + 1;
}
if(fotoAttiva == 0){
    fotoPrecedente = arrayFoto.length - 1;
}else{
    fotoPrecedente = fotoAttiva - 1;
}