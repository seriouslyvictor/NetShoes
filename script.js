'use strict'
const trocarIMG = function (e) {
    let imgSelecionada = e.target.src;
    console.log(imgSelecionada)
    console.log(e)

    // Inicia a animação de fade
    mainImg.classList.add('fade-out');

    // Troca a imagem apenas quando a animação já estiver concluida(0.3s)
    setTimeout(() => {
        mainImg.src = imgSelecionada;
        mainImg.classList.remove('fade-out');
    }, 300); 
}

const mainImg = document.querySelector(".principal")
const thumbs = document.querySelectorAll(".miniaturas img")


for (const thumb of thumbs) {
    thumb.addEventListener('click', trocarIMG)
}



