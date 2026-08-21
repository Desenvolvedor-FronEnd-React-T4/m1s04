
const nomesProdutos = ["Camiseta", "Tênis", "Calça", "Boné"];

const resultado = nomesProdutos.find(produto => {
    return produto === "Tênis";
});

console.log(resultado);

const resultMeia = nomesProdutos.find(produto => {
    return produto === "Meia";
});

console.log(resultMeia);

const produtos = [
    { nome: "Camiseta", preco: 49.90, estoque: 15 },
    { nome: "Calça", preco: 89.90, estoque: 8 },
    { nome: "Tênis", preco: 199.90, estoque: 3 },
    { nome: "Boné", preco: 29.90, estoque: 0 },
    { nome: "Meia", preco: 15.90, estoque: 25 }
]

const resultTenis = produtos.find(produto => {
    return produto.nome === "Tênis";
});

console.log(resultTenis);
