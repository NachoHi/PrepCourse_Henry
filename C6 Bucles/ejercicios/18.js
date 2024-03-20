function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var n = 1;

  for (var i = Math.min(a,b); i <= Math.max(a,b); i++){
    n *= i;
  }

  return Math.abs(n);
}

module.exports = productoEntreNúmeros;