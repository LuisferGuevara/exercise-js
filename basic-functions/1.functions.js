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
function findLongestWord(param) {

    let longest = ' ';
    
    for (let i = 0; i < param.length; i++) {
      if (param[i].length > longest.length){
        longest = param[i]
      }
    }
    
    return longest
 
}

// console.log(findLongestWord(avengers));

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