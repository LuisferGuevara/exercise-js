// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let index = 0; index < 10; index++) {
console.log(index);   
}
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.
for (let z= 0; z < 10; z++) {
    if(z % 2 === 0){
        console.log(z)
    }
};

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.
for (let sleep = 0; sleep < 11; sleep++) {
    if(sleep < 10){
        console.log('Intentando dormir');
    }else{
        console.log('Dormido');
    }
};