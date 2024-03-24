function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  
  var frase = "";

  for (var i=0; i < palabras.length; i++){
    frase += palabras[i];
    if(i != palabras.length-1){
      frase += " ";
    }
  }

  return frase;
}

module.exports = dePalabrasAFrase;
