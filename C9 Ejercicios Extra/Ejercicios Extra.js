/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var principal = [];

  for (let propiedad in objeto){
    var secundario = [propiedad, objeto[propiedad]];
    principal.push(secundario);
  }

  return principal;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var letras = {};
  var ordenar = {};
  var letrasOrdenadas = {};

  for (let i = 0; i < string.length; i++){
    var letra = string[i];

    if (letras.hasOwnProperty(letra)){
      letras[letra]++;
    }
    else{
      letras[letra] = 1;
    }
  }

  ordenar = Object.keys(letras).sort();

  for (let i = 0; i < ordenar.length; i ++){
    var letra = ordenar[i];
    letrasOrdenadas[letra] = letras[letra];
  }

  return letrasOrdenadas;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var sinEspacios = string;

  var mayuscula = "";

  var minuscula = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      mayuscula += string[i]; // Si es mayúscula, la agregamos a la cadena mayúscula
    } else {
      minuscula += string[i]; // Si es minúscula, la agregamos a la cadena minúscula
    }
  }


  return mayuscula + minuscula;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var palabras = frase.split(" ");

  var fraseReversa = "";
  
  for (let i = 0; i < palabras.length; i++){
    for (let j = palabras[i].length - 1; j >= 0 ; j--){
      if (fraseReversa !== ""){
        fraseReversa += palabras[i][j];
      }
      else{
        fraseReversa = palabras[i][j];
      }
    }
    if(i < palabras.length - 1){
      fraseReversa += " ";
    }
  }

  return fraseReversa;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  var str = numero.toString();

  var reversa = "";

  for (let i = str.length -1; i >= 0; i--){
    reversa += str[i];
  }

  if (reversa  == numero){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  var resultado = "";
  
  for (let i = 0; i < string.length; i++){
    if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
      resultado += string[i];
    }
  }

  return resultado;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  for (let i = 0; i < arrayOfStrings.length; i++){
    for (let j = 0; j < arrayOfStrings.length - 1; j++){
      if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length){
        var aux =[];

        aux = arrayOfStrings[j+1];
        arrayOfStrings[j+1] = arrayOfStrings[j];
        arrayOfStrings[j] = aux;
      }
    }
  }

  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si eno tienen lementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var interseccion = [];

  for( let i = 0; i < array1.length; i++){
    for (let j = 0; j < array2.length; j++){
      if (array1[i] === array2[j]){
        interseccion.push(array1[i]);
        break;
      }
    }
  }

  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
