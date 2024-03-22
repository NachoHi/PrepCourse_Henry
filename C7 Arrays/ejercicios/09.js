function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   var aleatorio = 0;

   aleatorio = parseInt(Math.random(0, array.length-1));

   return array[aleatorio];
}

module.exports = obtenerElementoAleatorio;
