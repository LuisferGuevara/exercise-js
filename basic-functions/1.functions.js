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


let yearOfBirth = 1997; 
let currentYear = 2022

let date = new Date();
currentYear = date.getFullYear()
let myAge = currentYear - yearOfBirth;
console.log('Tu edad es', myAge);
// -------------------------
function calcMyAge(currentYear, yearOfBirth){
    const myAge = currentYear - yearOfBirth
    return myAge
}
let yourAge= calcMyAge(currentYear, yearOfBirth);
console.log('Tu edad es',yourAge);
// ---------------
let today = new Date();
let ageCalculator = birthYear => today.getFullYear() - birthYear
console.log('Tu edad es', ageCalculator(1997));

