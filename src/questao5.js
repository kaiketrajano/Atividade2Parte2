const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "kaike", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "enayar", "total": 98.90, "status": "processando"},
    {"id": 3, "cliente": "manu", "total": 45.30, "status": "entregue"}
  ]
}`;

function resumoPedidos(jsonString) {
  const obj = 
JSON.parse(jsonString);
  const entregues:
obj.pedidos.filter(p => p.status === "entregue").length
obj.pedidos.filter(p => p.status === "processando").length
  const total =

}