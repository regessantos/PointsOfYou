// seleciona apenas as imagens que serão usadas no lightbox
const links = document.querySelectorAll('a[data-lightbox]');
const modal = document.querySelector('.modal');
const images = []; // array que recebe as imagens selecionadas

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', selectImage);
}

// close modal
let btClose = document.querySelector('#bt_close');
btClose.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
});

/**
 * Seleciona imagem
 * Guarda a imagem no array e atualiza o modal
 */
function selectImage(event) {
    event.preventDefault();
    const link = event.target.parentNode;
    const imagePlaceholder = document.querySelector('#modal_img');

    modal.classList.toggle('modal_active');
    imagePlaceholder.src = link.href;
    images.push(link.href);
}
