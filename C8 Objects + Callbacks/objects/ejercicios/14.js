function tieneEmail(objetoUsuario) {
  // Verifica si el "ob,jetoUsuario" en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.email !== undefined && objetoUsuario.email !== null){
    return true;
  }
  else{
    return false;
  }
}

module.exports = tieneEmail;
