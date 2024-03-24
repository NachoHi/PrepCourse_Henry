function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  var faltante = false;
  var j = 1;

  if (numeros.length < 1){
    return null;
  }
  else{
    for (var i = 0; i < numeros.length; i++){
      if(j !== numeros[i]){
        return j;
      }
      j++;
    }
  }

  return null;
}

module.exports = encontrarNumeroFaltante;