const barraBtn = document.querySelector(".barra_btn");
const menuSuspenso = document.querySelector(".menu_suspenso");
const barraBtnIcon = barraBtn.querySelector("i");

barraBtn.onclick = function() {
    menuSuspenso.classList.toggle("open");
    const isOpen = menuSuspenso.classList.contains("open");
    barraBtnIcon.className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
}
