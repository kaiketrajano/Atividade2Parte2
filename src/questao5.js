const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "kaike", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "enayar", "total": 98.90, "status": "processando"},
    {"id": 3, "cliente": "manu", "total": 45.30, "status": "entregue"}
  ]
}`;

function resumoPedidos(jsonString) {
  const obj = JSON.parse(jsonString);
  const entregues = obj.pedidos.filter((p) => p.status === 'entregue').length;
  const processamento = obj.pedidos.filter(
    (p) => p.status === 'processando',
  ).length;
  const total = obj.pedidos.reduce((acc, p) => acc + p.total, 0);

  return `
  ${entregues} pedidos entregues, ${processamento} em processamento. Valor total: R$ ${total.toFixed(
    2,
  )}`;
}

console.log(resumoPedidos(pedidosJSON));
