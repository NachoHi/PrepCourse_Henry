function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla = [];

  for( var i = 0; i <= 10; i++){
    let numero = 0;
    numero = 6 * i;
    tabla.push(numero);
  }

  return tabla;
}


console.log(tablaDelSeis())
module.exports = tablaDelSeis;
