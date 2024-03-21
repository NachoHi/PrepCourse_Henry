function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var suma = 0;
  var i = 0;

  while (i<n){
    i++;
    suma += i;
  }

  return suma;
}

module.exports = sumarHastaN;
