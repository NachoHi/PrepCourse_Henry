function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

   var resultado = "";
   var aux1 = 0, aux2 = 0, aux3 = 0;

   while(aux1 < str1.length || aux2 < str2.length || aux3 < str3.length){
      if (str1[aux1]){
         resultado += str1[aux1];
         aux1++;
      }

      if (str2[aux2]){
         resultado += str2[aux2];
         aux2++;
      }

      if (str3[aux3]){
         resultado += str3[aux3];
         aux3++;
      }
   }

   return resultado;
}

module.exports = combine;
