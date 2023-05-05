const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    ativarBotaoSelecionado(botao);
    desativarImagemAtiva();
    ativarImagemAtiva(index);
  });
});
function ativarImagemAtiva(index) {
  imagens[index].classList.add("ativa");
}

function desativarImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function ativarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
