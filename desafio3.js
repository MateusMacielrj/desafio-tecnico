let valor = 500;
let data = new Date();
let vencimento = new Date(2026, 9, 2);
let diferenca = data.getTime() - vencimento.getTime();
let dias = Math.floor(diferenca / 86400000);

let juros = 0;

if (dias > 0) {
  juros = valor * 0.025 * dias;
}

let total = valor + juros;

console.log("O valor dos juros é de: R$ " + juros.toFixed(2));
console.log("O valor total do devedor é de: R$ " + total.toFixed(2));
console.log("O total de dias de atraso é de: " + dias);