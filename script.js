const modalidades = ["Plantio", "Colheita", "Irrigação", "Adubação"];

// Coloque o número que represente o tema do seu grupo
const escolha = 1; // Escolha do grupo é "Colheita"

document.querySelector('body').style.backgroundImage = "url('img/" + modalidades[escolha] + ".png')";
document.querySelector('title').textContent = "Missão Agrícola | " + modalidades[escolha];
document.querySelector('h1').innerHTML = "Missão Agrícola <br> " + modalidades[escolha];

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let pontos = 0; // variável "pontos" iniciando com 0
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas[escolha].length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[escolha][atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    pontos += opcaoSelecionada.pontos;
    console.log(pontos);
    mostraPergunta();
}

function mostraResultado() {
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.textContent = "";
    podiumMedalhas(); // chamada da função podiumMedalhas
}

// função podiumMedalhas para verificar a quantidade de pontos
function podiumMedalhas() {
    if (pontos === 3) {
        caixaPrincipal.style.backgroundImage = "url('img/bronze.png')";
        caixaPerguntas.textContent = "Resultado da competição: 3 pontos é BRONZE!";
    } else if (pontos === 4) {
        caixaPrincipal.style.backgroundImage = "url('img/prata.png')";
        caixaPerguntas.textContent = "Resultado da competição: 4 pontos é PRATA!";
    } else if (pontos === 5) {
        caixaPrincipal.style.backgroundImage = "url('img/ouro.png')";
        caixaPerguntas.textContent = "Resultado da competição: 5 pontos é OURO!";
    } else {
        caixaPrincipal.style.backgroundImage = "url('img/perdeu.png')";
        caixaPerguntas.textContent = "Resultado da competição: PERDEU!";
    }
}

mostraPergunta();