// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface IColaborador{
    codigo: number,
    nome: string
}


const employee: IColaborador = {
    codigo: 1,
    nome: "John"
}

console.log(employee);