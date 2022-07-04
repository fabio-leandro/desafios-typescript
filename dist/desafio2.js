"use strict";
// Como podemos melhorar o esse código usando TS?
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
    Profissao[Profissao["professor"] = 2] = "professor";
    Profissao[Profissao["policial"] = 3] = "policial";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.atriz
};
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.padeiro
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
