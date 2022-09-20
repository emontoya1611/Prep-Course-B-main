// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    
    // METODO "FOR"

    /* var acumulador = 0;

    for (var i = 1; i < 11; i++) {
      acumulador += i;
    }
    return acumulador; */

    // METODO "WHILE"

    var i = 1;
    var acumulador = 0;
    while (i < 11) {
      acumulador += i;
      i++;
    }
    return acumulador
    

}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  /* var pares = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
    pares.push(array[i]);
    }
  }
  return pares; */

  // METODO FOR OF
  var pares = [];

  for (const elements of array) {

    if (elements % 2 === 0) {
    pares.push(elements);
    }
  }
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /* var elevados = [];
  for (var i = 0; i < array.length; i++) {
    elevados.push(Math.pow(array[i], 2));
  }
  return elevados; */

  return array.map(function(valor){
    return valor ** 2;
  })

  //o este metodo 

  var resultado = array.map(function(valor){
    return valor ** 2;
  })
  return resultado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
    var suma = array.reduce(function (acc, elemento) {
    return acc + elemento;
    });
    return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  /* var contador = 0;

  while (num >= 1) {
    ++contador;

    num /= 10;
  }

  return contador; */

  // METODO TOSTRING

  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
