function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:

  switch(num){
    case 5:
      return true;
      break;

    case 10:
      return true;
      break;

    default:
      return false;
  }
}

module.exports = esDiezOCinco;
