"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
campoSaldo.innerHTML = saldo.toString();
function somarAoSaldo(soma) {
    if (!isNaN(soma)) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
    }
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = saldo.toString();
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(parseFloat(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
