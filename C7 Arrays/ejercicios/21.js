function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "No"viembre, guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var opciones = [];

  for (var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      opciones.push(array[i])
    }
  }

  if(opciones.length === 3){
    return opciones;
  }
  else{
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
