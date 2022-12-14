// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
   if(numberOne === numberTwo)
   return "Numbers are the same";
   if( numberOne > numberTwo)
   return numberOne;
   if(numberTwo>numberOne)
   return numberTwo;
};

console.log(sum(5,8));

// [11:34] Santiago Corocotta Cabrera Escoriza
// Calculadora de edad
// año de nacimiento
// año actual
// obtener los años de la persona
// Queremos hacer una calculadora de edad, para ello necesitamos dos variables, la primera será el año de nacimiento de la persona de la que queramos calcular la edad y la segunda será el año actual (podemos conseguirla por javascript o si no sabemos escribimos el año a mano) y tenemos que hacer cierta operación para conseguir adivinar cuantos años tiene esa persona en la actualidad

let yearOfBirth = 1997; 
let currentYear = 2022
let date = new Date();
currentYear = date.getFullYear()
let myAge = currentYear - yearOfBirth;
console.log('Tu edad es', myAge);
// ------------------------- option 2
function calcMyAge(currentYear, yearOfBirth){
    const myAge = currentYear - yearOfBirth
    return myAge
}
let yourAge= calcMyAge(currentYear, yearOfBirth);
console.log('Tu edad es',yourAge);
// --------------- option 3
let today = new Date();
let ageCalculator = birthYear => today.getFullYear() - birthYear
console.log('Tu edad es', ageCalculator(1997));


// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// Opcion 1
function findLongestWord(param) {

    let longest = ' ';
    
    for (let i = 0; i < param.length; i++) {
      if (param[i].length > longest.length){
        longest = param[i]
      }
    }
    
    return longest
 
}

console.log('The longest string in your array is : ' + findLongestWord(avengers));

// Opcion 2

function findLongestWord (array) {
    let longestWord = array[0];
    /* for (const element of array) {
        if (longestWord.length < element.length) {
            longestWord = element;
        }
    } */
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (longestWord.length < element.length) {
            longestWord = element;
        }
    }
    return longestWord;
}
console.log(findLongestWord(avengers));

// Opcion 3



// **teración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum = 0
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
        param[i]++
    }
    return sum
}

console.log(sumAll(numbers))

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numeros = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let i = 0, 
  summ = 0, 
  sumaTotal = param.length;
  while (i < sumaTotal) {
      summ = summ + param[i++];
}
  return 'El promedio de tu Array es: ' + summ / sumaTotal;
}

var a = average(numeros);
console.log(a)

// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let suma = 0;
  for (let j = 0; j < param.length; j++) {
    if( typeof param[j] === 'string'){
    suma += param[j].length
    }
  }
  return ('El promedio de este Arrays es: ' + suma / param.length)
}

console.log(averageWord(mixedElements));

// **teración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let arraySinDuplicados = []

  for (let h = 0; h < param.length; h++) {
  if(!arraySinDuplicados.includes(param[h])){
    arraySinDuplicados.push(param[h])
  }
  }
  return arraySinDuplicados
}
console.log(removeDuplicates(duplicates))

// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param, nameToFind) {
  for (let m = 0; m < param.length; m++) {
    if(param[m] === nameToFind){
      return `Tu nombre existe en el array: ${true}  y es el índice: ${param.indexOf(nameToFind)}`
    }
  }
  return false
}

console.log(finderName(nameFinder, 'Peggy'));


// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  let cont = {};
  for (let a = 0; a < param.length; a++) {
    if ( param[a] in cont){
      cont[param[a]]++
    } else{
      cont[param[a]] = 1
    }
  }
  return cont
}
console.log(repeatCounter(counterWords));
