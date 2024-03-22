function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  let invertido = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    
    invertido.push(array[i]);
    
  }

  return invertido;
}

module.exports = invertirArray;
