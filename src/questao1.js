const usuario = {
  nome: "kaike",
  idade: 18,
  habilidades:["JavaScript","Node.Js","React"],
  ativo: true
};

// converter para uma string Json
const jsonString =
JSON.stringify(usuario);
console.log("JSON String", jsonString)

// e por fim, converter de volta para um objeto
const usuarioObj =
JSON.parse(jsonString)
  console.log("objeto recuperado:", usuarioObj)