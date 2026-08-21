const notasProva = [7.5, 8.0, 6.5, 9.5, 5.5];

const naoPrecisaRecuperacao = notasProva.every(nota => {
  return nota >= 7.0;
});

console.log(
  "Não preciso fazer uma prova de recuperação para essa matéria: " +
    naoPrecisaRecuperacao,
);
