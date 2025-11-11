const jsonString = `{
  "usuarios": [
    {"nome": "kaike", "email":"kaike@emaill.com"},
    {"nome": "enayar", "email":"enayar@emaill.com"},
    {"nome": "manu", "email":"manu@emaill.com"}
  ]
}`;

const obj = JSON.parse(jsonString);
const emails = obj.usuarios.map(u => u.email).join(", ")
console.log("Emails:", emails);