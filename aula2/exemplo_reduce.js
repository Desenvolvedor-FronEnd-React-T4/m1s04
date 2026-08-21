
const notas = [8, 7, 9, 6, 10];

const soma = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
}, 0);

console.log(soma);

const mediaTurma = soma / notas.length;

console.log(`Média da turma foi: ${mediaTurma}.`);
