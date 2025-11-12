function parseJSONSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    console.error("Erro ao converter JSON:", erro.message);
    return null;
  }
}

const jsonInvalido = "{'nome': 'kaike', 'idade': 18}";
console.log(parseJSONSafe(jsonInvalido));