// Criar variáveis que não serão mutáveis.
let alterado = false;
let alteradoImage = false;
const titulo = document.getElementById('titulo');
const paragrafo = document.querySelector('#paragrafo');
const btnAlterar = document.querySelector('#btnAlterar');
const btnAlterarCor = document.querySelector('#btnAlterarCor');
const image = document.querySelector('#ibage');
const btnAlterarImage = document.querySelector('#btnAlterarImage');
const btnAlterarFonte = document.querySelector('#btnAlterarFonte');

// 
btnAlterar.addEventListener('click', function() {
    if (!alterado) {
        titulo.textContent = 'Novo Título';
        paragrafo.textContent = 'Novo texto do parágrafo.';
        alterado = true;
    } else {
        titulo.textContent = 'Olá, Mundo!';
        paragrafo.textContent = 'Este é um parágrafo de exemplo.';
        alterado = false;
    }
})

btnAlterarCor.addEventListener('click', function() {
    if (!alterado) {
        titulo.style.color = "red";
        paragrafo.style.color = "red";
        alterado = true;
    } else {
        titulo.style.color = "black";
        paragrafo.style.color = "black";
        alterado = false;
    }
})

btnAlterarFonte.addEventListener('click', function() {
    if (!alterado) {
        titulo.style.fontFamily = 'Arial, sans-serif'; 
        paragrafo.style.fontFamily = 'Arial, sans-serif'; 
        alterado = true;
    } else {
        titulo.style.fontFamily = "Ubuntu Sans Mono", monospace;
        paragrafo.style.fontFamily = "Ubuntu Sans Mono", monospace;
        alterado = false;
    }
})

btnAlterarImage.addEventListener('click', function() {
    if (!alteradoImage) {
        alteradoImage = true;
        image.src = "images.jpeg"
    } else {
        alteradoImage = false;
        image.src = "Kirby-on-chair-meme-10.jpg"
    }
})

