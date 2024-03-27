function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   var objeto1 = {};
   var objeto2 = {};

   if (str1.length !== str2.length){
      return false;
   }

   for (let letra of str1){
      objeto1[letra] = (objeto1[letra] || 0) + 1;
   }

   for (let letra of str2){
      objeto2[letra] = (objeto2[letra] || 0) + 1;
   }

   for (let letra in str1){
      if(objeto1[letra] !== objeto2[letra]){
         return false;
      }
   }

   return true;
}

module.exports = esAnagrama;
