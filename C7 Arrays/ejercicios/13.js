function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var pares = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      pares.push(array[i]);
    }
  }

  return pares;
}

module.exports = filtrarNumerosPares;
