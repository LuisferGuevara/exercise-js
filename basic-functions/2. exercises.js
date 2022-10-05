
// Bluce que empiece en 30, reste de dos en dos, por lo tanto vamos a tener sólo numero pares y que el límite sea -10; 
for (let i = 30; i >= -10; i= i - 2){
  console.log(i)
};

  // 2. UN bucle que empiece en 100, que vaya dividiendo de dos en dos, hasta esté por debajo de 10,
for (let j = 100; j >= 10; j/= 2 ){
  console.log(j)
};


// 3.Un bucle que empiece en 1.01, que vaya multiplicando * 2, y que llegue hasta 1000
for(let k = 1.01; k <= 1000; k *= 2 ){
    console.log(k);
}  
  // 4. Hacer una piramide de asteriscos.
let piramide = '';
for (let i = 1; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    piramide += '*';
  }
    piramide += '\n';
  }

  console.log(piramide);

  let piramid1 = (max) => {
    let result = '';
    for(let i = 0; i < max; i += 2){
        result += ' '.repeat((max-i)/2) + '*'.repeat(i+1) + ("\n")
    }
    return result
  }
  console.log(piramid1(20))

  let piramid = (max) => {
    let result = '';
    for(let i = max; i >= 0; i -= 2){
        result += ' '.repeat((max-i)/2) + '*'.repeat(i+1) + ("\n")        
    }
    return result
  }
  console.log(piramid(20))