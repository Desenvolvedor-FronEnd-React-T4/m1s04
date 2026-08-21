const notasAlunos = [
  {
    nome: "Dsindry",
    notaProva1: 8.0,
    ganhaBonus: true,
  },
  {
    nome: "Amaury",
    notaProva1: 7.5,
    ganhaBonus: true,
  },
  {
    nome: "Andressa",
    notaProva1: 8.5,
    ganhaBonus: true,
  },
  {
    nome: "Hiélina",
    notaProva1: 7.0,
    ganhaBonus: true,
  },
];

const notasAlunosComBonus = notasAlunos.map((notaAluno) => {
  let notaAlunoBonus = {
    nome: notaAluno.nome,
    notaProva1: notaAluno.notaProva1 + 0.5,
    ganhaBonus: notaAluno.ganhaBonus,
  };
  return notaAlunoBonus;
});

console.log(notasAlunos);
console.log(notasAlunosComBonus);


const notasFinal = notasAlunos.map(notaAluno => {
    return notaAluno.notaProva1 + 0.5;
});

console.log(notasFinal);
