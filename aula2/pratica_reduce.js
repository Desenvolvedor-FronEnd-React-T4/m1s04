// exemplo 1
const carrinho = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 199.9 },
  { nome: "Boné", preco: 29.9 },
  { nome: "Meia", preco: 15.9 },
];

const bolsoChorando = carrinho.reduce((sacolinha, item) => {
  return sacolinha + item.preco;
}, 0);

console.log(`Total do carrinho: R$ ${bolsoChorando.toFixed(2)}`);


// exemplo 2
const carrinho = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 199.9 },
  { nome: "Boné", preco: 29.9 },
  { nome: "Meia", preco: 15.9 },
];

const valorTotal = carrinho.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0);

console.log(valorTotal);
