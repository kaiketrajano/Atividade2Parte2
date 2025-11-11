const endereco = {
  rua: "Rua José Bonifácio",
  numero: 20,
  cidade: "Guarabira",
  cep: "58200-230"
};

const enderecoFormatado = ` ${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - CEP: ${endereco.cep} `;
console.log("Endereço Formatado:", enderecoFormatado)