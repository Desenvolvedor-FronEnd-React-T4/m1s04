const prompt = require("prompt-sync")();

/* const produtos = [
  { nome: "Camiseta", preco: 49.90 },
  { nome: "Calça", preco: 129.90 },
  { nome: "Tênis", preco: 199.90 },
  { nome: "Boné", preco: 39.90 }
]

produtos.forEach((produto) => {
  console.log(`${produto.nome} — R$ ${produto.preco}`)
}) */

let nomeAluno = prompt("Qual aluno você quer descobrir a presença? ");

let nomesAlunosPresentes = [
  "Paulo",
  "Clovis",
  "Cleverson",
  "Vanessa",
  "Miguel",
  "Dsindry",
  "Andressa",
  "Alice",
  "Amaury",
  "Carolina",
  "Hiélina",
];

let presenca = false;

nomesAlunosPresentes.forEach((nome, i) => {
    if (nome === nomeAluno) {
        presenca = true;
    }
    console.log(i);
})

if (presenca) {
    console.log(nomeAluno + " está presente.");
} else {
    console.log(nomeAluno + " está ausente.");
}

