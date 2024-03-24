function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indice = 0;

  if (array.length > 1) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[indice]) {
        indice = i;
      }
    }
    return indice;
  } else {
    return 0;
  }
  
}

module.exports = encontrarIndiceMayor;
