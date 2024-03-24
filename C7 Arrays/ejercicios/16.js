function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  for (var i = 0; i < array.length; i++){
    array[i] *= i;
  }

  return array;
}

module.exports = multiplicarElementosPorIndice;
