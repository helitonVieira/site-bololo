let imgPrincipal = document.querySelector(".item-principal");


window.onload = function() {
    imgPrincipal.style.background = "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),  url('/img/capa.png')";
    imgPrincipal.style.backgroundSize = "cover";
    this.imagem2();
}

function imagem1(){ 
setTimeout(function() {

    imgPrincipal.style.background = "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),  url('/img/capa.png')";
    imgPrincipal.style.backgroundSize = "cover";
    this.imagem2();

}, 5000);

}


function imagem2(){ 
setTimeout(function imagem2() {

    imgPrincipal.style.background = "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),  url('/img/capa1.png')";
    imgPrincipal.style.backgroundSize = "cover";
    this.imagem3();
}, 5000);
}

function imagem3(){ 
setTimeout(function imagem3() {

    imgPrincipal.style.background = "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)100%),  url('/img/capa2.png')";
    imgPrincipal.style.backgroundSize = "cover";
    this.imagem1()
}, 5000);
}