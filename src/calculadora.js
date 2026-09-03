function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair
};

//Simulação de vazamento de segredo
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE1234567890abcdef";