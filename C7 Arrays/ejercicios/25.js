function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var i = 0, count = 0;

  while (i < numeros.length){
    if (numeros[i] % 2 === 0){
      count++;
      i++;
    }
    else{
      i++;
      continue;
    }
  }

  return count;
}

module.exports = contarParesConContinue;
