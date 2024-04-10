let listaDeNumerosSorteados = [];
let numeroLimite = 3
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNomeNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirNomeNaTela('h1', 'Jogo do número secreto');
    exibirNomeNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!'
    let mensagemTentativas = `Parabéns! você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroAleatorio) {
        exibirNomeNaTela('h1', 'Acertou!');
        exibirNomeNaTela('p', mensagemTentativas);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numeroAleatorio) {
        exibirNomeNaTela('p', 'O número secreto é menor.');
    } else {
        exibirNomeNaTela('p', 'O númeo secreto é maior.');
    }}
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial()
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}
