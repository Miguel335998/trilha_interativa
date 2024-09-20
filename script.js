function colorirCasa(elemento) {
    // Alterna a classe "clicked" para mudar a cor da casa
    elemento.classList.toggle("clicked");
}
// Carregar o estado salvo ao abrir a página
window.onload = function() {
    document.querySelectorAll('.casa').forEach((casa, index) => {
        if (localStorage.getItem('casa' + index) === 'clicked') {
            casa.classList.add('clicked');
        }
    });
}

function colorirCasa(elemento) {
    elemento.classList.toggle("clicked");
    const index = Array.prototype.indexOf.call(elemento.parentNode.children, elemento);

    // Salvar o estado no localStorage
    if (elemento.classList.contains('clicked')) {
        localStorage.setItem('casa' + index, 'clicked');
    } else {
        localStorage.removeItem('casa' + index);
    }
}
