const produtosJSON = `{
  "produtos": [
    {"nome": "mouse", "preco": 25.90},
    {"nome": "teclado", "preco": 89.90},
    {"nome": "monitor", "preco": 450.00},
    {"nome": "cabo USB", "preco": 15.00}
  ]
}`;

function
produtosAcimaDe50(jsonString) {
  const obj =
JSON.parse(jsonString);
  return obj.produtos
    .filter(p => p.preco > 50)
    .map(p => p.nome);
}
 console.log("Produtos acima de R$50:",
 produtosAcimaDe50(produtosJSON))
