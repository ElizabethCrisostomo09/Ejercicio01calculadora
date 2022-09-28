console.log("sesion HS02 funciones");
//++++++++++++++ función declarada +++++++++++++++
/**
 * Este es un ejemplo de una funcion declarada 
 * (funtion declaration or funtion statement).
 * Realiza la multiplicación de 2 números
 * Una caracteristica de las funciones declaradas
 * es que tiene un hoisting (evacion)
 * 
 * @param {number} a multiplicando 1
 * @param {number} b multiplicando 2
 * @returns resultado del producto de a*b
 */
function multiplica(a,b){
  return a*b;
}
//llamado de la función declarada
console.log("Multiplica 5 * 6 = " + multiplica(5,6));


//++++++++++++++ función expresada +++++++++++++++
/**
 * Las funciones expresada (funtion expressions)
 * son declaradas dentro de la asignacion de una variable
 * 
 * estas funciones pueden ser anónimas (no tener nombre)
 * las funciones expresadas no tiene hoisting
 */
/**
 * Sumatoria de 2 números
 * @param {number} a sumando 1
 * @param {number} b sumando 2
 * @returns resultado a+b
 * 
 */
const suma = function (a, b){ return a +b;}
console.log("El resultado de 56 + 4 = " + suma(56,4));

//++++++++++++++ función autoinvocadas +++++++++++++++

/**
 * Las funciones autoinvocadas(self-invoking fintioms)
 * Pueden ser anónimas  y se autoejecutan() en su declaración
 */
(function bienvenida(){
  console.log("===========");
  console.log("Hola crayoli");
  console.log("===========");
})();
+
//+++++++++++++ función flecha +++++++++++++++
/**
 * son funciones similares a las
 * funciones declaradas, pero no requieren la 
 * palabra "function" y si tienen una sola instruccion
 * y es el retornom no requiere la instrucción "return"
 */

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns resta de a-b
 */
//const resta = (a, b) => a-b;
//console.log("la resta de 10-5 = " + resta(10,5));


/**
 * Funcion con parámetros inicializados
 */
function divide(a,b=0){
  return a/b;
}
//console.log("la division de a/b = " + divide(4));


//+++++++++++++ función recursivas +++++++++++++++


function factorial(num){
 if(num<=0) return 1;
 return (num* factorial(num-1));
}

console.log("Factorial de 5 = " + factorial(5));



//+++++++++++++ función parámetros +++++++++++++++


// (parameters) => operation
// (parameters) => {
// return
//}

function sum( a, b, ...resto){
  let suma = a+b;
  resto.forEach( element => {
      suma+= element;
  });
  return suma;
}

console.log("El resultado de sumar varios números es: " + sum(2,3,5,7,3));
