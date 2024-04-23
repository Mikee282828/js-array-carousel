let arrayFoto = document.querySelectorAll(".foto");
let fotoAttiva;
let fotoSuccessiva;
//stampo in pagina l'array foto per controllo
console.log(arrayFoto);

//cerco la foto attualmente attiva
for (let i = 0; i < arrayFoto.length; i++) {
    if(arrayFoto[i].classList.contains("active")){
        fotoAttiva = i;
        arrayFoto[i].classList.remove("active");
    }
}
//cerco l'indice della foto successiva 
if(fotoAttiva+1 == arrayFoto.length){
    fotoSuccessiva = 0;
}else{
    fotoSuccessiva = fotoAttiva + 1;
}
