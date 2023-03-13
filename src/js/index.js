const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        esconderImagemAtiva();

        selecionarBotaoCarrossel(botao);

        mostrarImagemDeFundo(i);
    })
})

function mostrarImagemDeFundo(i) {
    imagens[i].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
