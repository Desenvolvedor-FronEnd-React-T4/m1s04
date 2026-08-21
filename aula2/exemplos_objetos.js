const prompt = require("prompt-sync")();

const obj = {
  chave1: "valor1",
  chave2: "valor2",
};

const aluno = {
  nome: "Paulo Lopes",
  telefone: "(11) 999888777",
  matricula: 1234,
  dataUltimoAcesso: "20/08/2026 19:05:03",
  ativo: true,
  estadoCivil: "nao informado",
};

console.log(aluno.nome);

console.log(aluno.sobrenome);

let propriedadeEscolhidaPeloUsuario = "dataUltimoAcesso";

console.log(aluno[propriedadeEscolhidaPeloUsuario]);

let novoTelefone = prompt("digite o novo telefone: ");

aluno.telefone = novoTelefone;

// aluno = {nome: "teste"}; // ERRO!

console.log("novo telefone salvo: " + aluno.telefone);

aluno.sobrenome = "Lopes";
aluno.nome = "Paulo";

console.log(`Nome completo do aluno: ${aluno.nome} ${aluno.sobrenome}`);

console.log(aluno.estadoCivil);

delete aluno.estadoCivil;

console.log(aluno.estadoCivil);

console.log(aluno);

console.log(Object.keys(aluno));
console.log(Object.values(aluno));

const listaAlunos = [
  {
    nome: "",
    sobrenome: "",
    telefone: "(11) 999888777",
    matricula: 1235,
    dataUltimoAcesso: "20/08/2026 19:08:37",
    ativo: true,
  },
  aluno
];

console.log(listaAlunos);

console.log(listaAlunos[0]);

console.log("percorrendo a lista de alunos com FOR:")
for(let i = 0; i < listaAlunos.length; i++) {
    console.log(listaAlunos[i].dataUltimoAcesso);
}


console.log("percorrendo a lista de alunos com FOREACH:")
listaAlunos.forEach((aluno) => {
    console.log(aluno.dataUltimoAcesso);
})
