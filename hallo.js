//variáveis de captura de elemento
var entradaSenha = document.getElementById('entradaSenha');
var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinusculo = document.getElementById('requisitoMinusculo');
var requisitoMaiusculo = document.getElementById('requisitoMaiusculo');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

//executar função ao digitar a senha 
entradaSenha.addEventListener('input', function () {
    var senha = entradaSenha.value;
    var poder = verificarPoder(senha);
    //cores baseadas na força da senha (vermelho, amarelo, verde)
    var cor = poder < 50 ? 'red' : poder < 80 ? 'yellow' : 'green';
    //transições CSS
    medidorPoder.style.width = poder + '%';
    medidorPoder.style.backgroundColor = cor;
    //atualiza o texto
    textoPoder.textContent = 'Força da Senha: ' + poder + '%';
    //atualiza os indicadores de requisitos
    atualizar(senha);
});

mostrarSenha.addEventListener('click', function () {
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
});

//função para calcular a força da senha
function verificarPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinusculo = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    //pontos com base nas regras
    var poder = 0;

    if (senha.length >= comprimentoMinimo) {
        poder += 25;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else {
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if (possuiMinusculo) {
        poder += 25;
        requisitoMinusculo.classList.remove('vermelho');
        requisitoMinusculo.classList.add('verde');
    } else {
        requisitoMinusculo.classList.remove('verde');
        requisitoMinusculo.classList.add('vermelho');
    }

    if (possuiMaiuscula) {
        poder += 25;
        requisitoMaiusculo.classList.remove('vermelho');
        requisitoMaiusculo.classList.add('verde');
    } else {
        requisitoMaiusculo.classList.remove('verde');
        requisitoMaiusculo.classList.add('vermelho');
    }

    if (possuiNumeros) {
        poder += 25;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else {
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if (possuiSimbolo) {
        poder += 25;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else {
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    return Math.min(100, poder);

}

//função para atualizar indicadores de requisitos 
function atualizar(senha) {
    verificarPoder(senha);  
}