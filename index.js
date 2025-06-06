const express = require("express");
const app = express();
const PORT = 3000;

app.get("/soma/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a + b;
  res.send(`Resultado da soma: ${resultado}`);
});


app.get("/subtrair/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a - b;
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a * b;
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get("/dividir/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (b === 0) {
    res.send("Erro: divisão por zero não é permitida.");
  } else {
    const resultado = a / b;
    res.send(`Resultado da divisão: ${resultado}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

