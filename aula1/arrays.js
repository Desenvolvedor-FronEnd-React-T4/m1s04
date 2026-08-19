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

const anosDeCopa = [2026, 2022, 2018, 2014, 2010, 2006, 2002];

let misto = ["João", 35, true, null];

console.log(
  "Quantidade de alunos na sala hoje: " + nomesAlunosPresentes.length,
);

console.log(anosDeCopa);

console.log("Primeiro aluno da lista: " + nomesAlunosPresentes[0]);

console.log(nomesAlunosPresentes.reverse());

nomesAlunosPresentes.sort();

console.log(
  "Primeiro aluno(a) da lista alfabeticamente: " + nomesAlunosPresentes[0],
);

console.log(
  "Último aluno(a) da lista alfabeticamente: " +
    nomesAlunosPresentes[nomesAlunosPresentes.length - 1],
);

anosDeCopa.push(1998);

console.log(anosDeCopa);

console.log("Elemento removido: " + misto.pop());
console.log(misto);

console.log(misto.unshift("Teste"));
console.log(misto);

console.log(misto.shift());
console.log(misto);


let nomeAluno = "Clovis";

let presenca = false;

for (let i = 0; i < nomesAlunosPresentes.length; i++) {
    if (nomeAluno === nomesAlunosPresentes[i]) {
        presenca = true;
        break;
    }
    console.log(i);
}

if (presenca) {
    console.log(nomeAluno + " presente.")
} else {
    console.log(nomeAluno + " ausente.")
}

console.log(nomesAlunosPresentes);


/* 
if (nomesAlunosPresentes.includes(nomeAluno)) {
    console.log(nomeAluno + " presente")
    console.log("Posição na chamada: " + nomesAlunosPresentes.indexOf(nomeAluno))
} else {
    console.log(nomeAluno + " ausente")
}

console.log(nomesAlunosPresentes)

console.log([2026, 2022, 2018, 2014, 2010, 2006, 2002].at(3));

console.log("Anos de Copa do Mundo FIFA Masculino: " + anosDeCopa.join(', '));

 */