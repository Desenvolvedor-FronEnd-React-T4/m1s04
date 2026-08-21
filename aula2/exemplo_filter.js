
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});

console.log(numerosPares);

const produtos = [
    { nome: "Camiseta", preco: 49.90, estoque: 15 },
    { nome: "Calça", preco: 89.90, estoque: 8 },
    { nome: "Tênis", preco: 199.90, estoque: 3 },
    { nome: "Boné", preco: 29.90, estoque: 0 },
    { nome: "Meia", preco: 15.90, estoque: 25 }
]

const produtosAbaixo100 = produtos.filter(produto => {
    return produto.preco <= 100;
});

console.log(produtosAbaixo100);

