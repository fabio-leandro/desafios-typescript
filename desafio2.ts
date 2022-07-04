// Como podemos melhorar o esse código usando TS?
enum Profissao {
    atriz,
    padeiro,
    professor,
    policial
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const pessoa1: IPessoa = {
    nome:"maria",
    idade:29,
    profissao: Profissao.atriz
};

const pessoa2: IPessoa = {
    nome:"roberto",
    idade:19,
    profissao: Profissao.padeiro
}

const pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
};

const pessoa4: IPessoa = {
    nome:"carlos",
    idade:19,
    profissao: Profissao.padeiro
}